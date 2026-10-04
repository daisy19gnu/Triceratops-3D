// 夜明 歩『Triceratops』の脚の関節と、歩く動き(2026-10-04)。
//
// ■ 何にもとづくか(RESEARCH-skull-and-locomotion.md の B 章)
//   - 速さ: Alexander (1976) の式 v = 0.25 g^0.5 s^1.67 h^-1.17(s = 歩幅 = 同じ足が次に着くまでの距離、
//     h = 股関節の高さ)。引用で確かめた: Mazzetta & Blanco 2001, Acta Palaeontologica Polonica 46(2):235。
//     同じ文献に「相対歩幅 s/h が 2.0 未満なら歩き」(Alexander 1976 の観察の引用)。
//   - 相対歩幅 0.8 は、ゆっくり歩く様子として当方が選んだ値(資料の値ではない)。前あしの関節が届く範囲にも収まる。
//     このとき速さは約 0.8 m/s(h = 2.1 m。値は式から実行時に計算する)。
//   - 足を着いている時間の割合(duty)0.62 も当方の仮定。
//   - 足の運びの順序(後ろ左 → 前左 → 後ろ右 → 前右)は仮定。Triceratops の足の運びの順序を示した資料は
//     見つからなかった(B-5)。
//   - 走れたかは結論が出ていない(B-5)ので、走りは作らない。
//   - 胴は左右に揺らさない(TH2007 も横の動きは推定できないとして一定にしている)。
//
// ■ 仕組み
//   脚 1 本を「肩(股)→ 肘(膝)→ 手首(足首)」の入れ子の組にし、各層(皮膚・骨格・筋肉・血管)の脚の部品を
//   その組に入れる。歩くときは、つま先の通り道を決め、2 本の骨の逆運動学で肘(膝)の位置を出して各組を回す。
//   肘は後ろへ、膝は前へ曲がる(静止の姿勢と同じ向き)。届かないときは、つま先を支点に足首を持ち上げる。
import * as THREE from "three";

export const GAIT = {
  relStride: 0.8,                 // s / h(当方の選んだ値)
  duty: 0.62,                     // 足を着いている時間の割合(仮定)
  lift: 0.16,                     // 振り出すときに足を持ち上げる高さ(m、仮定)
  phase: { LH: 0, LF: 0.25, RH: 0.5, RF: 0.75 },   // 足の運びの順序(仮定)
};
export const alexanderSpeed = (s, h, g = 9.81) => 0.25 * Math.sqrt(g) * Math.pow(s, 1.67) * Math.pow(h, -1.17);

const ang = (v) => Math.atan2(v.y, v.x);
const len2 = (v) => Math.hypot(v.x, v.y);
const sub2 = (a, b) => new THREE.Vector2(a.x - b.x, a.y - b.y);

export function createRig() {
  const legs = [];
  const rig = {
    legs,
    // 脚 1 本。P = [肩/股, 肘/膝, 手首/足首, つま先](静止の姿勢の 3D 座標)。side: +1 = 右(z+)、-1 = 左
    leg(front, side, P) {
      const key = (side > 0 ? "R" : "L") + (front ? "F" : "H");
      let L = legs.find((l) => l.key === key);
      if (L) return L;
      const p2 = P.map((q) => new THREE.Vector2(q.x, q.y));
      L = {
        key, front, side, P, chains: [],
        L1: len2(sub2(p2[1], p2[0])), L2: len2(sub2(p2[2], p2[1])),
        rest: [ang(sub2(p2[1], p2[0])), ang(sub2(p2[2], p2[1])), ang(sub2(p2[3], p2[2]))],
        footVec: sub2(p2[2], p2[3]),                       // つま先 → 足首
        bend: Math.sign(sub2(p2[1], p2[0]).x * sub2(p2[2], p2[0]).y - sub2(p2[1], p2[0]).y * sub2(p2[2], p2[0]).x),
        clamped: false,
        // 層ごとの入れ子の組を作る。put(i, mesh) = 静止の姿勢の座標で作った部品を i 番目の関節の組へ入れる
        chain(parent) {
          const j = [new THREE.Group(), new THREE.Group(), new THREE.Group()];
          j[0].position.copy(P[0]); j[1].position.copy(P[1]).sub(P[0]); j[2].position.copy(P[2]).sub(P[1]);
          parent.add(j[0]); j[0].add(j[1]); j[1].add(j[2]);
          j.forEach((g, i) => { g.name = `${key}-joint${i}`; });
          const tip = new THREE.Object3D(); tip.position.copy(P[3]).sub(P[2]); j[2].add(tip);   // つま先の位置(確かめる用)
          L.chains.push({ j, tip });
          return { put(i, mesh) { mesh.position.sub(P[i]); j[i].add(mesh); return mesh; } };
        },
      };
      legs.push(L);
      return L;
    },
    hipHeight() { const h = legs.find((l) => !l.front); return h ? h.P[0].y : 2.0; },
    stride() { return GAIT.relStride * rig.hipHeight(); },
    speed() { return alexanderSpeed(rig.stride(), rig.hipHeight()); },
    period() { return rig.stride() / rig.speed(); },
    // 時刻 t(秒)の姿勢にする。t = null で静止の姿勢へ戻す
    pose(t) {
      for (const L of legs) {
        if (t === null) { for (const c of L.chains) c.j.forEach((g) => { g.rotation.z = 0; }); L.clamped = false; continue; }
        const phi = ((t / rig.period() + GAIT.phase[L.key]) % 1 + 1) % 1;
        const r = solve(L, phi, rig.stride());
        for (const c of L.chains) { c.j[0].rotation.z = r[0]; c.j[1].rotation.z = r[1]; c.j[2].rotation.z = r[2]; }
      }
    },
  };
  return rig;
}

// 1 本の脚の、周期の中の位置 phi(0..1)での関節の回転
function solve(L, phi, stride) {
  const { P, L1, L2 } = L;
  const hip = new THREE.Vector2(P[0].x, P[0].y), toe0 = new THREE.Vector2(P[3].x, P[3].y);
  const half = GAIT.duty * stride / 2;                    // 着いている間に、胴に対してつま先が後ろへ動く距離の半分
  // 着く範囲の中心は肩/股の真下寄り(つま先の静止位置へ 4 分の 1)。中ほど(2 分の 1)では、膝をほぼ伸ばした後ろあし
  //   (2026-10-04、USNM の骨の長さ)が前へ振り出したとき届かなかった(chk_walkscan で届かない 3 回・浮き 10.6 mm)
  const xc = hip.x + 0.25 * (toe0.x - hip.x);
  let tx, ty, swing = 0;
  if (phi < GAIT.duty) { const u = phi / GAIT.duty; tx = xc + half * (1 - 2 * u); ty = toe0.y; }
  else {
    const u = (phi - GAIT.duty) / (1 - GAIT.duty), e = u * u * (3 - 2 * u);
    tx = xc - half + 2 * half * e; ty = toe0.y + GAIT.lift * Math.sin(Math.PI * u); swing = Math.sin(Math.PI * u);
  }
  const toe = new THREE.Vector2(tx, ty), reach = (L1 + L2) * 0.995;
  // 足首 = つま先 + 足の向き。振り出す間はつま先を少し下げ、届かなければつま先を支点に足首を持ち上げる
  const rot = (v, a) => new THREE.Vector2(v.x * Math.cos(a) - v.y * Math.sin(a), v.x * Math.sin(a) + v.y * Math.cos(a));
  let pitch = -0.25 * swing * (L.front ? 1 : -1), ankle = toe.clone().add(rot(L.footVec, pitch));
  L.clamped = false;
  if (ankle.distanceTo(hip) > reach) {
    let best = null;
    for (let k = 1; k <= 60 && !best; k++) for (const sg of [1, -1]) {
      const a = toe.clone().add(rot(L.footVec, pitch + sg * k * 0.02));
      if (a.distanceTo(hip) <= reach) { best = a; break; }
    }
    if (best) ankle = best; else L.clamped = true;
  }
  // 2 本の骨の逆運動学(肘/膝の曲がる向きは静止の姿勢と同じ)
  const dv = sub2(ankle, hip); let d = len2(dv);
  d = Math.min(Math.max(d, Math.abs(L1 - L2) + 1e-4), L1 + L2 - 1e-4);
  const a0 = ang(dv), al = Math.acos((L1 * L1 + d * d - L2 * L2) / (2 * L1 * d));
  const t1 = a0 - L.bend * al;      // bend = (肘/膝 - 肩/股) が (足首 - 肩/股) の線のどちら側か(外積の符号)
  const elbow = hip.clone().add(new THREE.Vector2(Math.cos(t1), Math.sin(t1)).multiplyScalar(L1));
  const t2 = ang(sub2(ankle, elbow)), t3 = ang(sub2(toe, ankle));
  const r0 = t1 - L.rest[0], r1 = t2 - L.rest[1] - r0, r2 = t3 - L.rest[2] - r0 - r1;
  const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));
  return [wrap(r0), wrap(r1), wrap(r2)];
}
