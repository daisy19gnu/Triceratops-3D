# 写真(Houston の頭骨の左側面)と、正射影で描いた模型(視点 chk_photo)を重ねる。
# 模型の背景色以外の部分の縁を緑で写真の上に描く。px の範囲は tri-model.js の VIEWS.chk_photo と同じ。
# 使い方: python3 photo-compare.py <chk_photo.png> <出力.png>
import os, sys
from PIL import Image, ImageChops, ImageFilter
HERE = os.path.dirname(os.path.abspath(__file__))
render, out = sys.argv[1], sys.argv[2]
im = Image.open(render).convert('RGB')
ph = Image.open(os.path.join(os.path.dirname(HERE), 'ref/houston-left-1280.jpg')).convert('RGB').crop((150, 118.75, 1100, 831.25)).resize(im.size)
bg = Image.new('RGB', im.size, (0xf3, 0xef, 0xe4))
mask = ImageChops.difference(im, bg).convert('L').point(lambda v: 255 if v > 18 else 0)
edge = mask.filter(ImageFilter.FIND_EDGES).filter(ImageFilter.MaxFilter(3))
o = Image.blend(ph, im, 0.45); o.paste((0, 255, 0), mask=edge); o.save(out)
print('photo-compare:', out)
