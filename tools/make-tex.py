#!/usr/bin/env python3
# 肌の画像(textures/skin-*.png)から、色の画像と法線マップを作り、
# 実行部に埋め込む src/tri-tex.js(data URI。生成物で版管理しない)を書き出す。
#   法線マップは色の画像の明るさを高さとみなして求める(凹凸を別に生成すると、色と模様の位置がずれるため)。
#   file:// で開いたとき Chrome は別ファイルの画像を WebGL に渡さないので、別ファイルにせず埋め込む。
import base64, io, os, sys
import numpy as np
from PIL import Image, ImageFilter
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
SRC = os.path.join(ROOT, "textures"); OUT = os.path.join(ROOT, "src", "tri-tex.js")
SIZE = int(os.environ.get("TRI_TEX_SIZE", "1024")); Q = int(os.environ.get("TRI_TEX_Q", "80"))

def jpg_uri(img, q=Q):
    b = io.BytesIO(); img.save(b, "JPEG", quality=q, optimize=True, progressive=True)
    return "data:image/jpeg;base64," + base64.b64encode(b.getvalue()).decode("ascii")

def normal_map(img, strength=3.0):
    g = np.asarray(img.convert("L").filter(ImageFilter.GaussianBlur(1.2)), dtype=np.float32) / 255.0
    # 端は巻き戻して計算する(画像は継ぎ目なく並べる前提)
    dx = (np.roll(g, -1, axis=1) - np.roll(g, 1, axis=1)) * strength
    dy = (np.roll(g, -1, axis=0) - np.roll(g, 1, axis=0)) * strength
    nz = np.ones_like(g)
    n = np.stack([-dx, dy, nz], axis=-1)
    n /= np.linalg.norm(n, axis=-1, keepdims=True)
    return Image.fromarray(((n * 0.5 + 0.5) * 255).astype(np.uint8), "RGB")

out = []
for name in ("body", "belly", "head"):
    p = os.path.join(SRC, "skin-%s.png" % name)
    if not os.path.exists(p):
        print("肌の画像が無い: " + p, file=sys.stderr); sys.exit(77)
    img = Image.open(p).convert("RGB").resize((SIZE, SIZE), Image.LANCZOS)
    out.append('export const SKIN_%s = "%s";' % (name.upper(), jpg_uri(img)))
    out.append('export const NORMAL_%s = "%s";' % (name.upper(), jpg_uri(normal_map(img), 85)))
open(OUT, "w").write("// 生成物(tools/make-tex.py)。手で直さない。\n" + "\n".join(out) + "\n")
print("tri-tex.js: %d bytes" % os.path.getsize(OUT))
