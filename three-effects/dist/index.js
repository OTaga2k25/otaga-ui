import { jsx as Ni } from "react/jsx-runtime";
import { useRef as fn, useEffect as Vn, forwardRef as Rc, useImperativeHandle as Cc } from "react";
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const pa = "160", wl = 0, Fa = 1, Rl = 2, Lc = 1, Cl = 2, ln = 3, pn = 0, Lt = 1, jt = 2, Tn = 0, yi = 1, Qr = 2, Oa = 3, Ba = 4, Ll = 5, Bn = 100, Pl = 101, Il = 102, ka = 103, za = 104, Dl = 200, Ul = 201, Nl = 202, Fl = 203, Zr = 204, $r = 205, Ol = 206, Bl = 207, kl = 208, zl = 209, Gl = 210, Hl = 211, Vl = 212, Wl = 213, jl = 214, Xl = 0, ql = 1, Kl = 2, Xs = 3, Yl = 4, Jl = 5, Ql = 6, Zl = 7, Pc = 0, $l = 1, eh = 2, wn = 0, th = 1, nh = 2, ih = 3, sh = 4, rh = 5, ah = 6, Ga = "attached", oh = "detached", Ic = 300, Ti = 301, wi = 302, ea = 303, ta = 304, tr = 306, Ri = 1e3, Bt = 1001, qs = 1002, pt = 1003, na = 1004, Ws = 1005, Ct = 1006, Dc = 1007, Wn = 1008, Rn = 1009, ch = 1010, lh = 1011, ma = 1012, Uc = 1013, yn = 1014, hn = 1015, ss = 1016, Nc = 1017, Fc = 1018, zn = 1020, hh = 1021, kt = 1023, dh = 1024, uh = 1025, Gn = 1026, Ci = 1027, fh = 1028, Oc = 1029, ph = 1030, Bc = 1031, kc = 1033, fr = 33776, pr = 33777, mr = 33778, gr = 33779, Ha = 35840, Va = 35841, Wa = 35842, ja = 35843, zc = 36196, Xa = 37492, qa = 37496, Ka = 37808, Ya = 37809, Ja = 37810, Qa = 37811, Za = 37812, $a = 37813, eo = 37814, to = 37815, no = 37816, io = 37817, so = 37818, ro = 37819, ao = 37820, oo = 37821, _r = 36492, co = 36494, lo = 36495, mh = 36283, ho = 36284, uo = 36285, fo = 36286, gh = 2200, _h = 2201, bh = 2202, rs = 2300, Li = 2301, br = 2302, xi = 2400, vi = 2401, Ks = 2402, ga = 2500, xh = 2501, vh = 0, Gc = 1, ia = 2, Hc = 3e3, Hn = 3001, Mh = 3200, Sh = 3201, Vc = 0, yh = 1, zt = "", rt = "srgb", _t = "srgb-linear", _a = "display-p3", nr = "display-p3-linear", Ys = "linear", $e = "srgb", Js = "rec709", Qs = "p3", Zn = 7680, po = 519, Eh = 512, Ah = 513, Th = 514, Wc = 515, wh = 516, Rh = 517, Ch = 518, Lh = 519, sa = 35044, mo = "300 es", ra = 1035, dn = 2e3, Zs = 2001;
class Yn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, a = i.length; s < a; s++)
        i[s].call(this, e);
      e.target = null;
    }
  }
}
const xt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let go = 1234567;
const es = Math.PI / 180, Pi = 180 / Math.PI;
function Xt() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (xt[r & 255] + xt[r >> 8 & 255] + xt[r >> 16 & 255] + xt[r >> 24 & 255] + "-" + xt[e & 255] + xt[e >> 8 & 255] + "-" + xt[e >> 16 & 15 | 64] + xt[e >> 24 & 255] + "-" + xt[t & 63 | 128] + xt[t >> 8 & 255] + "-" + xt[t >> 16 & 255] + xt[t >> 24 & 255] + xt[n & 255] + xt[n >> 8 & 255] + xt[n >> 16 & 255] + xt[n >> 24 & 255]).toLowerCase();
}
function Mt(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function ba(r, e) {
  return (r % e + e) % e;
}
function Ph(r, e, t, n, i) {
  return n + (r - e) * (i - n) / (t - e);
}
function Ih(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function ts(r, e, t) {
  return (1 - t) * r + t * e;
}
function Dh(r, e, t, n) {
  return ts(r, e, 1 - Math.exp(-t * n));
}
function Uh(r, e = 1) {
  return e - Math.abs(ba(r, e * 2) - e);
}
function Nh(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r));
}
function Fh(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10));
}
function Oh(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function Bh(r, e) {
  return r + Math.random() * (e - r);
}
function kh(r) {
  return r * (0.5 - Math.random());
}
function zh(r) {
  r !== void 0 && (go = r);
  let e = go += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Gh(r) {
  return r * es;
}
function Hh(r) {
  return r * Pi;
}
function aa(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function Vh(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function $s(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function Wh(r, e, t, n, i) {
  const s = Math.cos, a = Math.sin, o = s(t / 2), c = a(t / 2), l = s((e + n) / 2), h = a((e + n) / 2), d = s((e - n) / 2), u = a((e - n) / 2), p = s((n - e) / 2), g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      r.set(o * h, c * d, c * u, o * l);
      break;
    case "YZY":
      r.set(c * u, o * h, c * d, o * l);
      break;
    case "ZXZ":
      r.set(c * d, c * u, o * h, o * l);
      break;
    case "XZX":
      r.set(o * h, c * g, c * p, o * l);
      break;
    case "YXY":
      r.set(c * p, o * h, c * g, o * l);
      break;
    case "ZYZ":
      r.set(c * g, c * p, o * h, o * l);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function Qt(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return r / 4294967295;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int32Array:
      return Math.max(r / 2147483647, -1);
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Ke(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return Math.round(r * 4294967295);
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int32Array:
      return Math.round(r * 2147483647);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const jc = {
  DEG2RAD: es,
  RAD2DEG: Pi,
  generateUUID: Xt,
  clamp: Mt,
  euclideanModulo: ba,
  mapLinear: Ph,
  inverseLerp: Ih,
  lerp: ts,
  damp: Dh,
  pingpong: Uh,
  smoothstep: Nh,
  smootherstep: Fh,
  randInt: Oh,
  randFloat: Bh,
  randFloatSpread: kh,
  seededRandom: zh,
  degToRad: Gh,
  radToDeg: Hh,
  isPowerOfTwo: aa,
  ceilPowerOfTwo: Vh,
  floorPowerOfTwo: $s,
  setQuaternionFromProperEuler: Wh,
  normalize: Ke,
  denormalize: Qt
};
class Te {
  constructor(e = 0, t = 0) {
    Te.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Mt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * i + e.x, this.y = s * i + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class ze {
  constructor(e, t, n, i, s, a, o, c, l) {
    ze.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, a, o, c, l);
  }
  set(e, t, n, i, s, a, o, c, l) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = o, h[3] = t, h[4] = s, h[5] = c, h[6] = n, h[7] = a, h[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], h = n[4], d = n[7], u = n[2], p = n[5], g = n[8], _ = i[0], m = i[3], f = i[6], v = i[1], b = i[4], E = i[7], C = i[2], T = i[5], w = i[8];
    return s[0] = a * _ + o * v + c * C, s[3] = a * m + o * b + c * T, s[6] = a * f + o * E + c * w, s[1] = l * _ + h * v + d * C, s[4] = l * m + h * b + d * T, s[7] = l * f + h * E + d * w, s[2] = u * _ + p * v + g * C, s[5] = u * m + p * b + g * T, s[8] = u * f + p * E + g * w, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8];
    return t * a * h - t * o * l - n * s * h + n * o * c + i * s * l - i * a * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], d = h * a - o * l, u = o * c - h * s, p = l * s - a * c, g = t * d + n * u + i * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return e[0] = d * _, e[1] = (i * l - h * n) * _, e[2] = (o * n - i * a) * _, e[3] = u * _, e[4] = (h * t - i * c) * _, e[5] = (i * s - o * t) * _, e[6] = p * _, e[7] = (n * c - l * t) * _, e[8] = (a * t - n * s) * _, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, s, a, o) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * c,
      n * l,
      -n * (c * a + l * o) + a + e,
      -i * l,
      i * c,
      -i * (-l * a + c * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(xr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(xr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(xr.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const xr = /* @__PURE__ */ new ze();
function Xc(r) {
  for (let e = r.length - 1; e >= 0; --e)
    if (r[e] >= 65535) return !0;
  return !1;
}
function as(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function jh() {
  const r = as("canvas");
  return r.style.display = "block", r;
}
const _o = {};
function ns(r) {
  r in _o || (_o[r] = !0, console.warn(r));
}
const bo = /* @__PURE__ */ new ze().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), xo = /* @__PURE__ */ new ze().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), fs = {
  [_t]: {
    transfer: Ys,
    primaries: Js,
    toReference: (r) => r,
    fromReference: (r) => r
  },
  [rt]: {
    transfer: $e,
    primaries: Js,
    toReference: (r) => r.convertSRGBToLinear(),
    fromReference: (r) => r.convertLinearToSRGB()
  },
  [nr]: {
    transfer: Ys,
    primaries: Qs,
    toReference: (r) => r.applyMatrix3(xo),
    fromReference: (r) => r.applyMatrix3(bo)
  },
  [_a]: {
    transfer: $e,
    primaries: Qs,
    toReference: (r) => r.convertSRGBToLinear().applyMatrix3(xo),
    fromReference: (r) => r.applyMatrix3(bo).convertLinearToSRGB()
  }
}, Xh = /* @__PURE__ */ new Set([_t, nr]), je = {
  enabled: !0,
  _workingColorSpace: _t,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(r) {
    if (!Xh.has(r))
      throw new Error(`Unsupported working color space, "${r}".`);
    this._workingColorSpace = r;
  },
  convert: function(r, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return r;
    const n = fs[e].toReference, i = fs[t].fromReference;
    return i(n(r));
  },
  fromWorkingColorSpace: function(r, e) {
    return this.convert(r, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(r, e) {
    return this.convert(r, e, this._workingColorSpace);
  },
  getPrimaries: function(r) {
    return fs[r].primaries;
  },
  getTransfer: function(r) {
    return r === zt ? Ys : fs[r].transfer;
  }
};
function Ei(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function vr(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
let $n;
class qc {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      $n === void 0 && ($n = as("canvas")), $n.width = e.width, $n.height = e.height;
      const n = $n.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = $n;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = as("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let a = 0; a < s.length; a++)
        s[a] = Ei(s[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Ei(t[n] / 255) * 255) : t[n] = Ei(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let qh = 0;
class Kc {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: qh++ }), this.uuid = Xt(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? s.push(Mr(i[a].image)) : s.push(Mr(i[a]));
      } else
        s = Mr(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Mr(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? qc.getDataURL(r) : r.data ? {
    data: Array.from(r.data),
    width: r.width,
    height: r.height,
    type: r.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Kh = 0;
class mt extends Yn {
  constructor(e = mt.DEFAULT_IMAGE, t = mt.DEFAULT_MAPPING, n = Bt, i = Bt, s = Ct, a = Wn, o = kt, c = Rn, l = mt.DEFAULT_ANISOTROPY, h = zt) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Kh++ }), this.uuid = Xt(), this.name = "", this.source = new Kc(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Te(0, 0), this.repeat = new Te(1, 1), this.center = new Te(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ze(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof h == "string" ? this.colorSpace = h : (ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = h === Hn ? rt : zt), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Ic) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Ri:
          e.x = e.x - Math.floor(e.x);
          break;
        case Bt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case qs:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Ri:
          e.y = e.y - Math.floor(e.y);
          break;
        case Bt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case qs:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === rt ? Hn : Hc;
  }
  set encoding(e) {
    ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === Hn ? rt : zt;
  }
}
mt.DEFAULT_IMAGE = null;
mt.DEFAULT_MAPPING = Ic;
mt.DEFAULT_ANISOTROPY = 1;
class Ye {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    Ye.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const c = e.elements, l = c[0], h = c[4], d = c[8], u = c[1], p = c[5], g = c[9], _ = c[2], m = c[6], f = c[10];
    if (Math.abs(h - u) < 0.01 && Math.abs(d - _) < 0.01 && Math.abs(g - m) < 0.01) {
      if (Math.abs(h + u) < 0.1 && Math.abs(d + _) < 0.1 && Math.abs(g + m) < 0.1 && Math.abs(l + p + f - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (l + 1) / 2, E = (p + 1) / 2, C = (f + 1) / 2, T = (h + u) / 4, w = (d + _) / 4, G = (g + m) / 4;
      return b > E && b > C ? b < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(b), i = T / n, s = w / n) : E > C ? E < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(E), n = T / i, s = G / i) : C < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(C), n = w / s, i = G / s), this.set(n, i, s, t), this;
    }
    let v = Math.sqrt((m - g) * (m - g) + (d - _) * (d - _) + (u - h) * (u - h));
    return Math.abs(v) < 1e-3 && (v = 1), this.x = (m - g) / v, this.y = (d - _) / v, this.z = (u - h) / v, this.w = Math.acos((l + p + f - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Yh extends Yn {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Ye(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ye(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (ns("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === Hn ? rt : zt), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Ct,
      depthBuffer: !0,
      stencilBuffer: !1,
      depthTexture: null,
      samples: 0
    }, n), this.texture = new mt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Kc(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class jn extends Yh {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Yc extends mt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = pt, this.minFilter = pt, this.wrapR = Bt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Jh extends mt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = pt, this.minFilter = pt, this.wrapR = Bt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class qt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, a, o) {
    let c = n[i + 0], l = n[i + 1], h = n[i + 2], d = n[i + 3];
    const u = s[a + 0], p = s[a + 1], g = s[a + 2], _ = s[a + 3];
    if (o === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = d;
      return;
    }
    if (o === 1) {
      e[t + 0] = u, e[t + 1] = p, e[t + 2] = g, e[t + 3] = _;
      return;
    }
    if (d !== _ || c !== u || l !== p || h !== g) {
      let m = 1 - o;
      const f = c * u + l * p + h * g + d * _, v = f >= 0 ? 1 : -1, b = 1 - f * f;
      if (b > Number.EPSILON) {
        const C = Math.sqrt(b), T = Math.atan2(C, f * v);
        m = Math.sin(m * T) / C, o = Math.sin(o * T) / C;
      }
      const E = o * v;
      if (c = c * m + u * E, l = l * m + p * E, h = h * m + g * E, d = d * m + _ * E, m === 1 - o) {
        const C = 1 / Math.sqrt(c * c + l * l + h * h + d * d);
        c *= C, l *= C, h *= C, d *= C;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = d;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, a) {
    const o = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], d = s[a], u = s[a + 1], p = s[a + 2], g = s[a + 3];
    return e[t] = o * g + h * d + c * p - l * u, e[t + 1] = c * g + h * u + l * d - o * p, e[t + 2] = l * g + h * p + o * u - c * d, e[t + 3] = h * g - o * d - c * u - l * p, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, i = e._y, s = e._z, a = e._order, o = Math.cos, c = Math.sin, l = o(n / 2), h = o(i / 2), d = o(s / 2), u = c(n / 2), p = c(i / 2), g = c(s / 2);
    switch (a) {
      case "XYZ":
        this._x = u * h * d + l * p * g, this._y = l * p * d - u * h * g, this._z = l * h * g + u * p * d, this._w = l * h * d - u * p * g;
        break;
      case "YXZ":
        this._x = u * h * d + l * p * g, this._y = l * p * d - u * h * g, this._z = l * h * g - u * p * d, this._w = l * h * d + u * p * g;
        break;
      case "ZXY":
        this._x = u * h * d - l * p * g, this._y = l * p * d + u * h * g, this._z = l * h * g + u * p * d, this._w = l * h * d - u * p * g;
        break;
      case "ZYX":
        this._x = u * h * d - l * p * g, this._y = l * p * d + u * h * g, this._z = l * h * g - u * p * d, this._w = l * h * d + u * p * g;
        break;
      case "YZX":
        this._x = u * h * d + l * p * g, this._y = l * p * d + u * h * g, this._z = l * h * g - u * p * d, this._w = l * h * d - u * p * g;
        break;
      case "XZY":
        this._x = u * h * d - l * p * g, this._y = l * p * d - u * h * g, this._z = l * h * g + u * p * d, this._w = l * h * d + u * p * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], a = t[1], o = t[5], c = t[9], l = t[2], h = t[6], d = t[10], u = n + o + d;
    if (u > 0) {
      const p = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / p, this._x = (h - c) * p, this._y = (s - l) * p, this._z = (a - i) * p;
    } else if (n > o && n > d) {
      const p = 2 * Math.sqrt(1 + n - o - d);
      this._w = (h - c) / p, this._x = 0.25 * p, this._y = (i + a) / p, this._z = (s + l) / p;
    } else if (o > d) {
      const p = 2 * Math.sqrt(1 + o - n - d);
      this._w = (s - l) / p, this._x = (i + a) / p, this._y = 0.25 * p, this._z = (c + h) / p;
    } else {
      const p = 2 * Math.sqrt(1 + d - n - o);
      this._w = (a - i) / p, this._x = (s + l) / p, this._y = (c + h) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Mt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, s = e._z, a = e._w, o = t._x, c = t._y, l = t._z, h = t._w;
    return this._x = n * h + a * o + i * l - s * c, this._y = i * h + a * c + s * o - n * l, this._z = s * h + a * l + n * c - i * o, this._w = a * h - n * o - i * c - s * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, s = this._z, a = this._w;
    let o = a * e._w + n * e._x + i * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = n, this._y = i, this._z = s, this;
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * a + t * this._w, this._x = p * n + t * this._x, this._y = p * i + t * this._y, this._z = p * s + t * this._z, this.normalize(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, o), d = Math.sin((1 - t) * h) / l, u = Math.sin(t * h) / l;
    return this._w = a * d + this._w * u, this._x = n * d + this._x * u, this._y = i * d + this._y * u, this._z = s * d + this._z * u, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class L {
  constructor(e = 0, t = 0, n = 0) {
    L.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(vo.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(vo.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, a = e.y, o = e.z, c = e.w, l = 2 * (a * i - o * n), h = 2 * (o * t - s * i), d = 2 * (s * n - a * t);
    return this.x = t + c * l + a * d - o * h, this.y = n + c * h + o * l - s * d, this.z = i + c * d + s * h - a * l, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, s = e.z, a = t.x, o = t.y, c = t.z;
    return this.x = i * c - s * o, this.y = s * a - n * c, this.z = n * o - i * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Sr.copy(this).projectOnVector(e), this.sub(Sr);
  }
  reflect(e) {
    return this.sub(Sr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Mt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Sr = /* @__PURE__ */ new L(), vo = /* @__PURE__ */ new qt();
class Zt {
  constructor(e = new L(1 / 0, 1 / 0, 1 / 0), t = new L(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Ht.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Ht.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Ht.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, Ht) : Ht.fromBufferAttribute(s, a), Ht.applyMatrix4(e.matrixWorld), this.expandByPoint(Ht);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), ps.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), ps.copy(n.boundingBox)), ps.applyMatrix4(e.matrixWorld), this.union(ps);
    }
    const i = e.children;
    for (let s = 0, a = i.length; s < a; s++)
      this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Ht), Ht.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Vi), ms.subVectors(this.max, Vi), ei.subVectors(e.a, Vi), ti.subVectors(e.b, Vi), ni.subVectors(e.c, Vi), gn.subVectors(ti, ei), _n.subVectors(ni, ti), Pn.subVectors(ei, ni);
    let t = [
      0,
      -gn.z,
      gn.y,
      0,
      -_n.z,
      _n.y,
      0,
      -Pn.z,
      Pn.y,
      gn.z,
      0,
      -gn.x,
      _n.z,
      0,
      -_n.x,
      Pn.z,
      0,
      -Pn.x,
      -gn.y,
      gn.x,
      0,
      -_n.y,
      _n.x,
      0,
      -Pn.y,
      Pn.x,
      0
    ];
    return !yr(t, ei, ti, ni, ms) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !yr(t, ei, ti, ni, ms)) ? !1 : (gs.crossVectors(gn, _n), t = [gs.x, gs.y, gs.z], yr(t, ei, ti, ni, ms));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Ht).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Ht).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (nn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), nn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), nn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), nn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), nn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), nn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), nn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), nn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(nn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const nn = [
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L()
], Ht = /* @__PURE__ */ new L(), ps = /* @__PURE__ */ new Zt(), ei = /* @__PURE__ */ new L(), ti = /* @__PURE__ */ new L(), ni = /* @__PURE__ */ new L(), gn = /* @__PURE__ */ new L(), _n = /* @__PURE__ */ new L(), Pn = /* @__PURE__ */ new L(), Vi = /* @__PURE__ */ new L(), ms = /* @__PURE__ */ new L(), gs = /* @__PURE__ */ new L(), In = /* @__PURE__ */ new L();
function yr(r, e, t, n, i) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    In.fromArray(r, s);
    const o = i.x * Math.abs(In.x) + i.y * Math.abs(In.y) + i.z * Math.abs(In.z), c = e.dot(In), l = t.dot(In), h = n.dot(In);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o)
      return !1;
  }
  return !0;
}
const Qh = /* @__PURE__ */ new Zt(), Wi = /* @__PURE__ */ new L(), Er = /* @__PURE__ */ new L();
class $t {
  constructor(e = new L(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Qh.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, a = e.length; s < a; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Wi.subVectors(e, this.center);
    const t = Wi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Wi, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Er.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Wi.copy(e.center).add(Er)), this.expandByPoint(Wi.copy(e.center).sub(Er))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const sn = /* @__PURE__ */ new L(), Ar = /* @__PURE__ */ new L(), _s = /* @__PURE__ */ new L(), bn = /* @__PURE__ */ new L(), Tr = /* @__PURE__ */ new L(), bs = /* @__PURE__ */ new L(), wr = /* @__PURE__ */ new L();
class ir {
  constructor(e = new L(), t = new L(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, sn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = sn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (sn.copy(this.origin).addScaledVector(this.direction, t), sn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Ar.copy(e).add(t).multiplyScalar(0.5), _s.copy(t).sub(e).normalize(), bn.copy(this.origin).sub(Ar);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(_s), o = bn.dot(this.direction), c = -bn.dot(_s), l = bn.lengthSq(), h = Math.abs(1 - a * a);
    let d, u, p, g;
    if (h > 0)
      if (d = a * c - o, u = a * o - c, g = s * h, d >= 0)
        if (u >= -g)
          if (u <= g) {
            const _ = 1 / h;
            d *= _, u *= _, p = d * (d + a * u + 2 * o) + u * (a * d + u + 2 * c) + l;
          } else
            u = s, d = Math.max(0, -(a * u + o)), p = -d * d + u * (u + 2 * c) + l;
        else
          u = -s, d = Math.max(0, -(a * u + o)), p = -d * d + u * (u + 2 * c) + l;
      else
        u <= -g ? (d = Math.max(0, -(-a * s + o)), u = d > 0 ? -s : Math.min(Math.max(-s, -c), s), p = -d * d + u * (u + 2 * c) + l) : u <= g ? (d = 0, u = Math.min(Math.max(-s, -c), s), p = u * (u + 2 * c) + l) : (d = Math.max(0, -(a * s + o)), u = d > 0 ? s : Math.min(Math.max(-s, -c), s), p = -d * d + u * (u + 2 * c) + l);
    else
      u = a > 0 ? -s : s, d = Math.max(0, -(a * u + o)), p = -d * d + u * (u + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, d), i && i.copy(Ar).addScaledVector(_s, u), p;
  }
  intersectSphere(e, t) {
    sn.subVectors(e.center, this.origin);
    const n = sn.dot(this.direction), i = sn.dot(sn) - n * n, s = e.radius * e.radius;
    if (i > s) return null;
    const a = Math.sqrt(s - i), o = n - a, c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, a, o, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, d = 1 / this.direction.z, u = this.origin;
    return l >= 0 ? (n = (e.min.x - u.x) * l, i = (e.max.x - u.x) * l) : (n = (e.max.x - u.x) * l, i = (e.min.x - u.x) * l), h >= 0 ? (s = (e.min.y - u.y) * h, a = (e.max.y - u.y) * h) : (s = (e.max.y - u.y) * h, a = (e.min.y - u.y) * h), n > a || s > i || ((s > n || isNaN(n)) && (n = s), (a < i || isNaN(i)) && (i = a), d >= 0 ? (o = (e.min.z - u.z) * d, c = (e.max.z - u.z) * d) : (o = (e.max.z - u.z) * d, c = (e.min.z - u.z) * d), n > c || o > i) || ((o > n || n !== n) && (n = o), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, sn) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    Tr.subVectors(t, e), bs.subVectors(n, e), wr.crossVectors(Tr, bs);
    let a = this.direction.dot(wr), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    bn.subVectors(this.origin, e);
    const c = o * this.direction.dot(bs.crossVectors(bn, bs));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(Tr.cross(bn));
    if (l < 0 || c + l > a)
      return null;
    const h = -o * bn.dot(wr);
    return h < 0 ? null : this.at(h / a, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Oe {
  constructor(e, t, n, i, s, a, o, c, l, h, d, u, p, g, _, m) {
    Oe.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, s, a, o, c, l, h, d, u, p, g, _, m);
  }
  set(e, t, n, i, s, a, o, c, l, h, d, u, p, g, _, m) {
    const f = this.elements;
    return f[0] = e, f[4] = t, f[8] = n, f[12] = i, f[1] = s, f[5] = a, f[9] = o, f[13] = c, f[2] = l, f[6] = h, f[10] = d, f[14] = u, f[3] = p, f[7] = g, f[11] = _, f[15] = m, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Oe().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / ii.setFromMatrixColumn(e, 0).length(), s = 1 / ii.setFromMatrixColumn(e, 1).length(), a = 1 / ii.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(s), d = Math.sin(s);
    if (e.order === "XYZ") {
      const u = a * h, p = a * d, g = o * h, _ = o * d;
      t[0] = c * h, t[4] = -c * d, t[8] = l, t[1] = p + g * l, t[5] = u - _ * l, t[9] = -o * c, t[2] = _ - u * l, t[6] = g + p * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const u = c * h, p = c * d, g = l * h, _ = l * d;
      t[0] = u + _ * o, t[4] = g * o - p, t[8] = a * l, t[1] = a * d, t[5] = a * h, t[9] = -o, t[2] = p * o - g, t[6] = _ + u * o, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const u = c * h, p = c * d, g = l * h, _ = l * d;
      t[0] = u - _ * o, t[4] = -a * d, t[8] = g + p * o, t[1] = p + g * o, t[5] = a * h, t[9] = _ - u * o, t[2] = -a * l, t[6] = o, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const u = a * h, p = a * d, g = o * h, _ = o * d;
      t[0] = c * h, t[4] = g * l - p, t[8] = u * l + _, t[1] = c * d, t[5] = _ * l + u, t[9] = p * l - g, t[2] = -l, t[6] = o * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const u = a * c, p = a * l, g = o * c, _ = o * l;
      t[0] = c * h, t[4] = _ - u * d, t[8] = g * d + p, t[1] = d, t[5] = a * h, t[9] = -o * h, t[2] = -l * h, t[6] = p * d + g, t[10] = u - _ * d;
    } else if (e.order === "XZY") {
      const u = a * c, p = a * l, g = o * c, _ = o * l;
      t[0] = c * h, t[4] = -d, t[8] = l * h, t[1] = u * d + _, t[5] = a * h, t[9] = p * d - g, t[2] = g * d - p, t[6] = o * h, t[10] = _ * d + u;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Zh, e, $h);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return It.subVectors(e, t), It.lengthSq() === 0 && (It.z = 1), It.normalize(), xn.crossVectors(n, It), xn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? It.x += 1e-4 : It.z += 1e-4, It.normalize(), xn.crossVectors(n, It)), xn.normalize(), xs.crossVectors(It, xn), i[0] = xn.x, i[4] = xs.x, i[8] = It.x, i[1] = xn.y, i[5] = xs.y, i[9] = It.y, i[2] = xn.z, i[6] = xs.z, i[10] = It.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], h = n[1], d = n[5], u = n[9], p = n[13], g = n[2], _ = n[6], m = n[10], f = n[14], v = n[3], b = n[7], E = n[11], C = n[15], T = i[0], w = i[4], G = i[8], M = i[12], A = i[1], k = i[5], X = i[9], ne = i[13], P = i[2], O = i[6], H = i[10], j = i[14], W = i[3], V = i[7], J = i[11], $ = i[15];
    return s[0] = a * T + o * A + c * P + l * W, s[4] = a * w + o * k + c * O + l * V, s[8] = a * G + o * X + c * H + l * J, s[12] = a * M + o * ne + c * j + l * $, s[1] = h * T + d * A + u * P + p * W, s[5] = h * w + d * k + u * O + p * V, s[9] = h * G + d * X + u * H + p * J, s[13] = h * M + d * ne + u * j + p * $, s[2] = g * T + _ * A + m * P + f * W, s[6] = g * w + _ * k + m * O + f * V, s[10] = g * G + _ * X + m * H + f * J, s[14] = g * M + _ * ne + m * j + f * $, s[3] = v * T + b * A + E * P + C * W, s[7] = v * w + b * k + E * O + C * V, s[11] = v * G + b * X + E * H + C * J, s[15] = v * M + b * ne + E * j + C * $, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], a = e[1], o = e[5], c = e[9], l = e[13], h = e[2], d = e[6], u = e[10], p = e[14], g = e[3], _ = e[7], m = e[11], f = e[15];
    return g * (+s * c * d - i * l * d - s * o * u + n * l * u + i * o * p - n * c * p) + _ * (+t * c * p - t * l * u + s * a * u - i * a * p + i * l * h - s * c * h) + m * (+t * l * d - t * o * p - s * a * d + n * a * p + s * o * h - n * l * h) + f * (-i * o * h - t * c * d + t * o * u + i * a * d - n * a * u + n * c * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], d = e[9], u = e[10], p = e[11], g = e[12], _ = e[13], m = e[14], f = e[15], v = d * m * l - _ * u * l + _ * c * p - o * m * p - d * c * f + o * u * f, b = g * u * l - h * m * l - g * c * p + a * m * p + h * c * f - a * u * f, E = h * _ * l - g * d * l + g * o * p - a * _ * p - h * o * f + a * d * f, C = g * d * c - h * _ * c - g * o * u + a * _ * u + h * o * m - a * d * m, T = t * v + n * b + i * E + s * C;
    if (T === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / T;
    return e[0] = v * w, e[1] = (_ * u * s - d * m * s - _ * i * p + n * m * p + d * i * f - n * u * f) * w, e[2] = (o * m * s - _ * c * s + _ * i * l - n * m * l - o * i * f + n * c * f) * w, e[3] = (d * c * s - o * u * s - d * i * l + n * u * l + o * i * p - n * c * p) * w, e[4] = b * w, e[5] = (h * m * s - g * u * s + g * i * p - t * m * p - h * i * f + t * u * f) * w, e[6] = (g * c * s - a * m * s - g * i * l + t * m * l + a * i * f - t * c * f) * w, e[7] = (a * u * s - h * c * s + h * i * l - t * u * l - a * i * p + t * c * p) * w, e[8] = E * w, e[9] = (g * d * s - h * _ * s - g * n * p + t * _ * p + h * n * f - t * d * f) * w, e[10] = (a * _ * s - g * o * s + g * n * l - t * _ * l - a * n * f + t * o * f) * w, e[11] = (h * o * s - a * d * s - h * n * l + t * d * l + a * n * p - t * o * p) * w, e[12] = C * w, e[13] = (h * _ * i - g * d * i + g * n * u - t * _ * u - h * n * m + t * d * m) * w, e[14] = (g * o * i - a * _ * i - g * n * c + t * _ * c + a * n * m - t * o * m) * w, e[15] = (a * d * i - h * o * i + h * n * c - t * d * c - a * n * u + t * o * u) * w, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, a = e.x, o = e.y, c = e.z, l = s * a, h = s * o;
    return this.set(
      l * a + n,
      l * o - i * c,
      l * c + i * o,
      0,
      l * o + i * c,
      h * o + n,
      h * c - i * a,
      0,
      l * c - i * o,
      h * c + i * a,
      s * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, s, a) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      a,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, s = t._x, a = t._y, o = t._z, c = t._w, l = s + s, h = a + a, d = o + o, u = s * l, p = s * h, g = s * d, _ = a * h, m = a * d, f = o * d, v = c * l, b = c * h, E = c * d, C = n.x, T = n.y, w = n.z;
    return i[0] = (1 - (_ + f)) * C, i[1] = (p + E) * C, i[2] = (g - b) * C, i[3] = 0, i[4] = (p - E) * T, i[5] = (1 - (u + f)) * T, i[6] = (m + v) * T, i[7] = 0, i[8] = (g + b) * w, i[9] = (m - v) * w, i[10] = (1 - (u + _)) * w, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = ii.set(i[0], i[1], i[2]).length();
    const a = ii.set(i[4], i[5], i[6]).length(), o = ii.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], Vt.copy(this);
    const l = 1 / s, h = 1 / a, d = 1 / o;
    return Vt.elements[0] *= l, Vt.elements[1] *= l, Vt.elements[2] *= l, Vt.elements[4] *= h, Vt.elements[5] *= h, Vt.elements[6] *= h, Vt.elements[8] *= d, Vt.elements[9] *= d, Vt.elements[10] *= d, t.setFromRotationMatrix(Vt), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, i, s, a, o = dn) {
    const c = this.elements, l = 2 * s / (t - e), h = 2 * s / (n - i), d = (t + e) / (t - e), u = (n + i) / (n - i);
    let p, g;
    if (o === dn)
      p = -(a + s) / (a - s), g = -2 * a * s / (a - s);
    else if (o === Zs)
      p = -a / (a - s), g = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = l, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = h, c[9] = u, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = p, c[14] = g, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, a, o = dn) {
    const c = this.elements, l = 1 / (t - e), h = 1 / (n - i), d = 1 / (a - s), u = (t + e) * l, p = (n + i) * h;
    let g, _;
    if (o === dn)
      g = (a + s) * d, _ = -2 * d;
    else if (o === Zs)
      g = s * d, _ = -1 * d;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -u, c[1] = 0, c[5] = 2 * h, c[9] = 0, c[13] = -p, c[2] = 0, c[6] = 0, c[10] = _, c[14] = -g, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const ii = /* @__PURE__ */ new L(), Vt = /* @__PURE__ */ new Oe(), Zh = /* @__PURE__ */ new L(0, 0, 0), $h = /* @__PURE__ */ new L(1, 1, 1), xn = /* @__PURE__ */ new L(), xs = /* @__PURE__ */ new L(), It = /* @__PURE__ */ new L(), Mo = /* @__PURE__ */ new Oe(), So = /* @__PURE__ */ new qt();
class sr {
  constructor(e = 0, t = 0, n = 0, i = sr.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, s = i[0], a = i[4], o = i[8], c = i[1], l = i[5], h = i[9], d = i[2], u = i[6], p = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Mt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(u, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Mt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Mt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-d, p), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Mt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(u, p), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(Mt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-d, s)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-Mt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Mo.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Mo, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return So.setFromEuler(this), this.setFromQuaternion(So, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
sr.DEFAULT_ORDER = "XYZ";
class Jc {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let ed = 0;
const yo = /* @__PURE__ */ new L(), si = /* @__PURE__ */ new qt(), rn = /* @__PURE__ */ new Oe(), vs = /* @__PURE__ */ new L(), ji = /* @__PURE__ */ new L(), td = /* @__PURE__ */ new L(), nd = /* @__PURE__ */ new qt(), Eo = /* @__PURE__ */ new L(1, 0, 0), Ao = /* @__PURE__ */ new L(0, 1, 0), To = /* @__PURE__ */ new L(0, 0, 1), id = { type: "added" }, sd = { type: "removed" };
class et extends Yn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: ed++ }), this.uuid = Xt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = et.DEFAULT_UP.clone();
    const e = new L(), t = new sr(), n = new qt(), i = new L(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new Oe()
      },
      normalMatrix: {
        value: new ze()
      }
    }), this.matrix = new Oe(), this.matrixWorld = new Oe(), this.matrixAutoUpdate = et.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Jc(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return si.setFromAxisAngle(e, t), this.quaternion.multiply(si), this;
  }
  rotateOnWorldAxis(e, t) {
    return si.setFromAxisAngle(e, t), this.quaternion.premultiply(si), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Eo, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ao, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(To, e);
  }
  translateOnAxis(e, t) {
    return yo.copy(e).applyQuaternion(this.quaternion), this.position.add(yo.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Eo, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ao, e);
  }
  translateZ(e) {
    return this.translateOnAxis(To, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(rn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? vs.copy(e) : vs.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), ji.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? rn.lookAt(ji, vs, this.up) : rn.lookAt(vs, ji, this.up), this.quaternion.setFromRotationMatrix(rn), i && (rn.extractRotation(i.matrixWorld), si.setFromRotationMatrix(rn), this.quaternion.premultiply(si.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(id)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(sd)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), rn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), rn.multiply(e.parent.matrixWorld)), e.applyMatrix4(rn), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let s = 0, a = i.length; s < a; s++)
      i[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ji, e, td), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ji, nd, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let s = 0, a = i.length; s < a; s++) {
        const o = i[s];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), i.maxGeometryCount = this._maxGeometryCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this.boundingSphere !== null && (i.boundingSphere = {
      center: i.boundingSphere.center.toArray(),
      radius: i.boundingSphere.radius
    }), this.boundingBox !== null && (i.boundingBox = {
      min: i.boundingBox.min.toArray(),
      max: i.boundingBox.max.toArray()
    }));
    function s(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const d = c[l];
            s(e.shapes, d);
          }
        else
          s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(s(e.materials, this.material[c]));
        i.material = o;
      } else
        i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        i.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries), c = a(e.materials), l = a(e.textures), h = a(e.images), d = a(e.shapes), u = a(e.skeletons), p = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), d.length > 0 && (n.shapes = d), u.length > 0 && (n.skeletons = u), p.length > 0 && (n.animations = p), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const h = o[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
et.DEFAULT_UP = /* @__PURE__ */ new L(0, 1, 0);
et.DEFAULT_MATRIX_AUTO_UPDATE = !0;
et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Wt = /* @__PURE__ */ new L(), an = /* @__PURE__ */ new L(), Rr = /* @__PURE__ */ new L(), on = /* @__PURE__ */ new L(), ri = /* @__PURE__ */ new L(), ai = /* @__PURE__ */ new L(), wo = /* @__PURE__ */ new L(), Cr = /* @__PURE__ */ new L(), Lr = /* @__PURE__ */ new L(), Pr = /* @__PURE__ */ new L();
let Ms = !1;
class Ot {
  constructor(e = new L(), t = new L(), n = new L()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Wt.subVectors(e, t), i.cross(Wt);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, s) {
    Wt.subVectors(i, t), an.subVectors(n, t), Rr.subVectors(e, t);
    const a = Wt.dot(Wt), o = Wt.dot(an), c = Wt.dot(Rr), l = an.dot(an), h = an.dot(Rr), d = a * l - o * o;
    if (d === 0)
      return s.set(0, 0, 0), null;
    const u = 1 / d, p = (l * c - o * h) * u, g = (a * h - o * c) * u;
    return s.set(1 - p - g, g, p);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, on) === null ? !1 : on.x >= 0 && on.y >= 0 && on.x + on.y <= 1;
  }
  static getUV(e, t, n, i, s, a, o, c) {
    return Ms === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Ms = !0), this.getInterpolation(e, t, n, i, s, a, o, c);
  }
  static getInterpolation(e, t, n, i, s, a, o, c) {
    return this.getBarycoord(e, t, n, i, on) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, on.x), c.addScaledVector(a, on.y), c.addScaledVector(o, on.z), c);
  }
  static isFrontFacing(e, t, n, i) {
    return Wt.subVectors(n, t), an.subVectors(e, t), Wt.cross(an).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Wt.subVectors(this.c, this.b), an.subVectors(this.a, this.b), Wt.cross(an).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Ot.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Ot.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return Ms === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Ms = !0), Ot.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  getInterpolation(e, t, n, i, s) {
    return Ot.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return Ot.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Ot.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let a, o;
    ri.subVectors(i, n), ai.subVectors(s, n), Cr.subVectors(e, n);
    const c = ri.dot(Cr), l = ai.dot(Cr);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    Lr.subVectors(e, i);
    const h = ri.dot(Lr), d = ai.dot(Lr);
    if (h >= 0 && d <= h)
      return t.copy(i);
    const u = c * d - h * l;
    if (u <= 0 && c >= 0 && h <= 0)
      return a = c / (c - h), t.copy(n).addScaledVector(ri, a);
    Pr.subVectors(e, s);
    const p = ri.dot(Pr), g = ai.dot(Pr);
    if (g >= 0 && p <= g)
      return t.copy(s);
    const _ = p * l - c * g;
    if (_ <= 0 && l >= 0 && g <= 0)
      return o = l / (l - g), t.copy(n).addScaledVector(ai, o);
    const m = h * g - p * d;
    if (m <= 0 && d - h >= 0 && p - g >= 0)
      return wo.subVectors(s, i), o = (d - h) / (d - h + (p - g)), t.copy(i).addScaledVector(wo, o);
    const f = 1 / (m + _ + u);
    return a = _ * f, o = u * f, t.copy(n).addScaledVector(ri, a).addScaledVector(ai, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Qc = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, vn = { h: 0, s: 0, l: 0 }, Ss = { h: 0, s: 0, l: 0 };
function Ir(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
class de {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = rt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, je.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = je.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, je.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = je.workingColorSpace) {
    if (e = ba(e, 1), t = Mt(t, 0, 1), n = Mt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = Ir(a, s, e + 1 / 3), this.g = Ir(a, s, e), this.b = Ir(a, s, e - 1 / 3);
    }
    return je.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = rt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = rt) {
    const n = Qc[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Ei(e.r), this.g = Ei(e.g), this.b = Ei(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = vr(e.r), this.g = vr(e.g), this.b = vr(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = rt) {
    return je.fromWorkingColorSpace(vt.copy(this), e), Math.round(Mt(vt.r * 255, 0, 255)) * 65536 + Math.round(Mt(vt.g * 255, 0, 255)) * 256 + Math.round(Mt(vt.b * 255, 0, 255));
  }
  getHexString(e = rt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = je.workingColorSpace) {
    je.fromWorkingColorSpace(vt.copy(this), t);
    const n = vt.r, i = vt.g, s = vt.b, a = Math.max(n, i, s), o = Math.min(n, i, s);
    let c, l;
    const h = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const d = a - o;
      switch (l = h <= 0.5 ? d / (a + o) : d / (2 - a - o), a) {
        case n:
          c = (i - s) / d + (i < s ? 6 : 0);
          break;
        case i:
          c = (s - n) / d + 2;
          break;
        case s:
          c = (n - i) / d + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = h, e;
  }
  getRGB(e, t = je.workingColorSpace) {
    return je.fromWorkingColorSpace(vt.copy(this), t), e.r = vt.r, e.g = vt.g, e.b = vt.b, e;
  }
  getStyle(e = rt) {
    je.fromWorkingColorSpace(vt.copy(this), e);
    const t = vt.r, n = vt.g, i = vt.b;
    return e !== rt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(vn), this.setHSL(vn.h + e, vn.s + t, vn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(vn), e.getHSL(Ss);
    const n = ts(vn.h, Ss.h, t), i = ts(vn.s, Ss.s, t), s = ts(vn.l, Ss.l, t);
    return this.setHSL(n, i, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * i, this.g = s[1] * t + s[4] * n + s[7] * i, this.b = s[2] * t + s[5] * n + s[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const vt = /* @__PURE__ */ new de();
de.NAMES = Qc;
let rd = 0;
class Kt extends Yn {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: rd++ }), this.uuid = Xt(), this.name = "", this.type = "Material", this.blending = yi, this.side = pn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Zr, this.blendDst = $r, this.blendEquation = Bn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new de(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Xs, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = po, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Zn, this.stencilZFail = Zn, this.stencilZPass = Zn, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== yi && (n.blending = this.blending), this.side !== pn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== Zr && (n.blendSrc = this.blendSrc), this.blendDst !== $r && (n.blendDst = this.blendDst), this.blendEquation !== Bn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Xs && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== po && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Zn && (n.stencilFail = this.stencilFail), this.stencilZFail !== Zn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Zn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const a = [];
      for (const o in s) {
        const c = s[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const s = i(e.textures), a = i(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class un extends Kt {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new de(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Pc, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ot = /* @__PURE__ */ new L(), ys = /* @__PURE__ */ new Te();
class gt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = sa, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = hn, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        ys.fromBufferAttribute(this, t), ys.applyMatrix3(e), this.setXY(t, ys.x, ys.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ot.fromBufferAttribute(this, t), ot.applyMatrix3(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t), ot.applyMatrix4(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t), ot.applyNormalMatrix(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t), ot.transformDirection(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Qt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Ke(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Ke(t, this.array), n = Ke(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Ke(t, this.array), n = Ke(n, this.array), i = Ke(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = Ke(t, this.array), n = Ke(n, this.array), i = Ke(i, this.array), s = Ke(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== sa && (e.usage = this.usage), e;
  }
}
class Zc extends gt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class $c extends gt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Gt extends gt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let ad = 0;
const Nt = /* @__PURE__ */ new Oe(), Dr = /* @__PURE__ */ new et(), oi = /* @__PURE__ */ new L(), Dt = /* @__PURE__ */ new Zt(), Xi = /* @__PURE__ */ new Zt(), ft = /* @__PURE__ */ new L();
class Rt extends Yn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: ad++ }), this.uuid = Xt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Xc(e) ? $c : Zc)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new ze().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Nt.makeRotationFromQuaternion(e), this.applyMatrix4(Nt), this;
  }
  rotateX(e) {
    return Nt.makeRotationX(e), this.applyMatrix4(Nt), this;
  }
  rotateY(e) {
    return Nt.makeRotationY(e), this.applyMatrix4(Nt), this;
  }
  rotateZ(e) {
    return Nt.makeRotationZ(e), this.applyMatrix4(Nt), this;
  }
  translate(e, t, n) {
    return Nt.makeTranslation(e, t, n), this.applyMatrix4(Nt), this;
  }
  scale(e, t, n) {
    return Nt.makeScale(e, t, n), this.applyMatrix4(Nt), this;
  }
  lookAt(e) {
    return Dr.lookAt(e), Dr.updateMatrix(), this.applyMatrix4(Dr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(oi).negate(), this.translate(oi.x, oi.y, oi.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new Gt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Zt());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new L(-1 / 0, -1 / 0, -1 / 0),
        new L(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          Dt.setFromBufferAttribute(s), this.morphTargetsRelative ? (ft.addVectors(this.boundingBox.min, Dt.min), this.boundingBox.expandByPoint(ft), ft.addVectors(this.boundingBox.max, Dt.max), this.boundingBox.expandByPoint(ft)) : (this.boundingBox.expandByPoint(Dt.min), this.boundingBox.expandByPoint(Dt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new $t());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Dt.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          Xi.setFromBufferAttribute(o), this.morphTargetsRelative ? (ft.addVectors(Dt.min, Xi.min), Dt.expandByPoint(ft), ft.addVectors(Dt.max, Xi.max), Dt.expandByPoint(ft)) : (Dt.expandByPoint(Xi.min), Dt.expandByPoint(Xi.max));
        }
      Dt.getCenter(n);
      let i = 0;
      for (let s = 0, a = e.count; s < a; s++)
        ft.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(ft));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], c = this.morphTargetsRelative;
          for (let l = 0, h = o.count; l < h; l++)
            ft.fromBufferAttribute(o, l), c && (oi.fromBufferAttribute(e, l), ft.add(oi)), i = Math.max(i, n.distanceToSquared(ft));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, i = t.position.array, s = t.normal.array, a = t.uv.array, o = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new gt(new Float32Array(4 * o), 4));
    const c = this.getAttribute("tangent").array, l = [], h = [];
    for (let A = 0; A < o; A++)
      l[A] = new L(), h[A] = new L();
    const d = new L(), u = new L(), p = new L(), g = new Te(), _ = new Te(), m = new Te(), f = new L(), v = new L();
    function b(A, k, X) {
      d.fromArray(i, A * 3), u.fromArray(i, k * 3), p.fromArray(i, X * 3), g.fromArray(a, A * 2), _.fromArray(a, k * 2), m.fromArray(a, X * 2), u.sub(d), p.sub(d), _.sub(g), m.sub(g);
      const ne = 1 / (_.x * m.y - m.x * _.y);
      isFinite(ne) && (f.copy(u).multiplyScalar(m.y).addScaledVector(p, -_.y).multiplyScalar(ne), v.copy(p).multiplyScalar(_.x).addScaledVector(u, -m.x).multiplyScalar(ne), l[A].add(f), l[k].add(f), l[X].add(f), h[A].add(v), h[k].add(v), h[X].add(v));
    }
    let E = this.groups;
    E.length === 0 && (E = [{
      start: 0,
      count: n.length
    }]);
    for (let A = 0, k = E.length; A < k; ++A) {
      const X = E[A], ne = X.start, P = X.count;
      for (let O = ne, H = ne + P; O < H; O += 3)
        b(
          n[O + 0],
          n[O + 1],
          n[O + 2]
        );
    }
    const C = new L(), T = new L(), w = new L(), G = new L();
    function M(A) {
      w.fromArray(s, A * 3), G.copy(w);
      const k = l[A];
      C.copy(k), C.sub(w.multiplyScalar(w.dot(k))).normalize(), T.crossVectors(G, k);
      const ne = T.dot(h[A]) < 0 ? -1 : 1;
      c[A * 4] = C.x, c[A * 4 + 1] = C.y, c[A * 4 + 2] = C.z, c[A * 4 + 3] = ne;
    }
    for (let A = 0, k = E.length; A < k; ++A) {
      const X = E[A], ne = X.start, P = X.count;
      for (let O = ne, H = ne + P; O < H; O += 3)
        M(n[O + 0]), M(n[O + 1]), M(n[O + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new gt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let u = 0, p = n.count; u < p; u++)
          n.setXYZ(u, 0, 0, 0);
      const i = new L(), s = new L(), a = new L(), o = new L(), c = new L(), l = new L(), h = new L(), d = new L();
      if (e)
        for (let u = 0, p = e.count; u < p; u += 3) {
          const g = e.getX(u + 0), _ = e.getX(u + 1), m = e.getX(u + 2);
          i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, _), a.fromBufferAttribute(t, m), h.subVectors(a, s), d.subVectors(i, s), h.cross(d), o.fromBufferAttribute(n, g), c.fromBufferAttribute(n, _), l.fromBufferAttribute(n, m), o.add(h), c.add(h), l.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(_, c.x, c.y, c.z), n.setXYZ(m, l.x, l.y, l.z);
        }
      else
        for (let u = 0, p = t.count; u < p; u += 3)
          i.fromBufferAttribute(t, u + 0), s.fromBufferAttribute(t, u + 1), a.fromBufferAttribute(t, u + 2), h.subVectors(a, s), d.subVectors(i, s), h.cross(d), n.setXYZ(u + 0, h.x, h.y, h.z), n.setXYZ(u + 1, h.x, h.y, h.z), n.setXYZ(u + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      ft.fromBufferAttribute(e, t), ft.normalize(), e.setXYZ(t, ft.x, ft.y, ft.z);
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, h = o.itemSize, d = o.normalized, u = new l.constructor(c.length * h);
      let p = 0, g = 0;
      for (let _ = 0, m = c.length; _ < m; _++) {
        o.isInterleavedBufferAttribute ? p = c[_] * o.data.stride + o.offset : p = c[_] * h;
        for (let f = 0; f < h; f++)
          u[g++] = l[p++];
      }
      return new gt(u, h, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Rt(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const c = i[o], l = e(c, n);
      t.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [], l = s[o];
      for (let h = 0, d = l.length; h < d; h++) {
        const u = l[h], p = e(u, n);
        c.push(p);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let d = 0, u = l.length; d < u; d++) {
        const p = l[d];
        h.push(p.toJSON(e.data));
      }
      h.length > 0 && (i[c] = h, s = !0);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const h = i[l];
      this.setAttribute(l, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const h = [], d = s[l];
      for (let u = 0, p = d.length; u < p; u++)
        h.push(d[u].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, h = a.length; l < h; l++) {
      const d = a[l];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Ro = /* @__PURE__ */ new Oe(), Dn = /* @__PURE__ */ new ir(), Es = /* @__PURE__ */ new $t(), Co = /* @__PURE__ */ new L(), ci = /* @__PURE__ */ new L(), li = /* @__PURE__ */ new L(), hi = /* @__PURE__ */ new L(), Ur = /* @__PURE__ */ new L(), As = /* @__PURE__ */ new L(), Ts = /* @__PURE__ */ new Te(), ws = /* @__PURE__ */ new Te(), Rs = /* @__PURE__ */ new Te(), Lo = /* @__PURE__ */ new L(), Po = /* @__PURE__ */ new L(), Io = /* @__PURE__ */ new L(), Cs = /* @__PURE__ */ new L(), Ls = /* @__PURE__ */ new L();
class St extends et {
  constructor(e = new Rt(), t = new un()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      As.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = o[c], d = s[c];
        h !== 0 && (Ur.fromBufferAttribute(d, e), a ? As.addScaledVector(Ur, h) : As.addScaledVector(Ur.sub(t), h));
      }
      t.add(As);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Es.copy(n.boundingSphere), Es.applyMatrix4(s), Dn.copy(e.ray).recast(e.near), !(Es.containsPoint(Dn.origin) === !1 && (Dn.intersectSphere(Es, Co) === null || Dn.origin.distanceToSquared(Co) > (e.far - e.near) ** 2)) && (Ro.copy(s).invert(), Dn.copy(e.ray).applyMatrix4(Ro), !(n.boundingBox !== null && Dn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Dn)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, h = s.attributes.uv1, d = s.attributes.normal, u = s.groups, p = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, _ = u.length; g < _; g++) {
          const m = u[g], f = a[m.materialIndex], v = Math.max(m.start, p.start), b = Math.min(o.count, Math.min(m.start + m.count, p.start + p.count));
          for (let E = v, C = b; E < C; E += 3) {
            const T = o.getX(E), w = o.getX(E + 1), G = o.getX(E + 2);
            i = Ps(this, f, e, n, l, h, d, T, w, G), i && (i.faceIndex = Math.floor(E / 3), i.face.materialIndex = m.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, p.start), _ = Math.min(o.count, p.start + p.count);
        for (let m = g, f = _; m < f; m += 3) {
          const v = o.getX(m), b = o.getX(m + 1), E = o.getX(m + 2);
          i = Ps(this, a, e, n, l, h, d, v, b, E), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let g = 0, _ = u.length; g < _; g++) {
          const m = u[g], f = a[m.materialIndex], v = Math.max(m.start, p.start), b = Math.min(c.count, Math.min(m.start + m.count, p.start + p.count));
          for (let E = v, C = b; E < C; E += 3) {
            const T = E, w = E + 1, G = E + 2;
            i = Ps(this, f, e, n, l, h, d, T, w, G), i && (i.faceIndex = Math.floor(E / 3), i.face.materialIndex = m.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, p.start), _ = Math.min(c.count, p.start + p.count);
        for (let m = g, f = _; m < f; m += 3) {
          const v = m, b = m + 1, E = m + 2;
          i = Ps(this, a, e, n, l, h, d, v, b, E), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
  }
}
function od(r, e, t, n, i, s, a, o) {
  let c;
  if (e.side === Lt ? c = n.intersectTriangle(a, s, i, !0, o) : c = n.intersectTriangle(i, s, a, e.side === pn, o), c === null) return null;
  Ls.copy(o), Ls.applyMatrix4(r.matrixWorld);
  const l = t.ray.origin.distanceTo(Ls);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Ls.clone(),
    object: r
  };
}
function Ps(r, e, t, n, i, s, a, o, c, l) {
  r.getVertexPosition(o, ci), r.getVertexPosition(c, li), r.getVertexPosition(l, hi);
  const h = od(r, e, t, n, ci, li, hi, Cs);
  if (h) {
    i && (Ts.fromBufferAttribute(i, o), ws.fromBufferAttribute(i, c), Rs.fromBufferAttribute(i, l), h.uv = Ot.getInterpolation(Cs, ci, li, hi, Ts, ws, Rs, new Te())), s && (Ts.fromBufferAttribute(s, o), ws.fromBufferAttribute(s, c), Rs.fromBufferAttribute(s, l), h.uv1 = Ot.getInterpolation(Cs, ci, li, hi, Ts, ws, Rs, new Te()), h.uv2 = h.uv1), a && (Lo.fromBufferAttribute(a, o), Po.fromBufferAttribute(a, c), Io.fromBufferAttribute(a, l), h.normal = Ot.getInterpolation(Cs, ci, li, hi, Lo, Po, Io, new L()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = {
      a: o,
      b: c,
      c: l,
      normal: new L(),
      materialIndex: 0
    };
    Ot.getNormal(ci, li, hi, d.normal), h.face = d;
  }
  return h;
}
class Jn extends Rt {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    i = Math.floor(i), s = Math.floor(s), a = Math.floor(a);
    const c = [], l = [], h = [], d = [];
    let u = 0, p = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, s, 0), g("z", "y", "x", 1, -1, n, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, a, 2), g("x", "z", "y", 1, -1, e, n, -t, i, a, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(c), this.setAttribute("position", new Gt(l, 3)), this.setAttribute("normal", new Gt(h, 3)), this.setAttribute("uv", new Gt(d, 2));
    function g(_, m, f, v, b, E, C, T, w, G, M) {
      const A = E / w, k = C / G, X = E / 2, ne = C / 2, P = T / 2, O = w + 1, H = G + 1;
      let j = 0, W = 0;
      const V = new L();
      for (let J = 0; J < H; J++) {
        const $ = J * k - ne;
        for (let ce = 0; ce < O; ce++) {
          const z = ce * A - X;
          V[_] = z * v, V[m] = $ * b, V[f] = P, l.push(V.x, V.y, V.z), V[_] = 0, V[m] = 0, V[f] = T > 0 ? 1 : -1, h.push(V.x, V.y, V.z), d.push(ce / w), d.push(1 - J / G), j += 1;
        }
      }
      for (let J = 0; J < G; J++)
        for (let $ = 0; $ < w; $++) {
          const ce = u + $ + O * J, z = u + $ + O * (J + 1), q = u + ($ + 1) + O * (J + 1), ae = u + ($ + 1) + O * J;
          c.push(ce, z, ae), c.push(z, q, ae), W += 6;
        }
      o.addGroup(p, W, M), p += W, u += j;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Jn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Ii(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function wt(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = Ii(r[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function cd(r) {
  const e = [];
  for (let t = 0; t < r.length; t++)
    e.push(r[t].clone());
  return e;
}
function el(r) {
  return r.getRenderTarget() === null ? r.outputColorSpace : je.workingColorSpace;
}
const ld = { clone: Ii, merge: wt };
var hd = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, dd = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Xn extends Kt {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = hd, this.fragmentShader = dd, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1,
      // set to use shader texture LOD
      clipCullDistance: !1
      // set to use vertex shader clipping
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Ii(e.uniforms), this.uniformsGroups = cd(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? t.uniforms[i] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[i] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[i] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class tl extends et {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Oe(), this.projectionMatrix = new Oe(), this.projectionMatrixInverse = new Oe(), this.coordinateSystem = dn;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ct extends tl {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Pi * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(es * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Pi * 2 * Math.atan(
      Math.tan(es * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, i, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(es * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      s += a.offsetX * i / c, t -= a.offsetY * n / l, i *= a.width / c, n *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const di = -90, ui = 1;
class ud extends et {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new ct(di, ui, e, t);
    i.layers = this.layers, this.add(i);
    const s = new ct(di, ui, e, t);
    s.layers = this.layers, this.add(s);
    const a = new ct(di, ui, e, t);
    a.layers = this.layers, this.add(a);
    const o = new ct(di, ui, e, t);
    o.layers = this.layers, this.add(o);
    const c = new ct(di, ui, e, t);
    c.layers = this.layers, this.add(c);
    const l = new ct(di, ui, e, t);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, s, a, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === dn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === Zs)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, c, l, h] = this.children, d = e.getRenderTarget(), u = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, s), e.setRenderTarget(n, 1, i), e.render(t, a), e.setRenderTarget(n, 2, i), e.render(t, o), e.setRenderTarget(n, 3, i), e.render(t, c), e.setRenderTarget(n, 4, i), e.render(t, l), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(d, u, p), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class nl extends mt {
  constructor(e, t, n, i, s, a, o, c, l, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : Ti, super(e, t, n, i, s, a, o, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class fd extends jn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    t.encoding !== void 0 && (ns("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === Hn ? rt : zt), this.texture = new nl(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Ct;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new Jn(5, 5, 5), s = new Xn({
      name: "CubemapFromEquirect",
      uniforms: Ii(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Lt,
      blending: Tn
    });
    s.uniforms.tEquirect.value = t;
    const a = new St(i, s), o = t.minFilter;
    return t.minFilter === Wn && (t.minFilter = Ct), new ud(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const Nr = /* @__PURE__ */ new L(), pd = /* @__PURE__ */ new L(), md = /* @__PURE__ */ new ze();
class Fn {
  constructor(e = new L(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Nr.subVectors(n, t).cross(pd.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Nr), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || md.getNormalMatrix(e), i = this.coplanarPoint(Nr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Un = /* @__PURE__ */ new $t(), Is = /* @__PURE__ */ new L();
class xa {
  constructor(e = new Fn(), t = new Fn(), n = new Fn(), i = new Fn(), s = new Fn(), a = new Fn()) {
    this.planes = [e, t, n, i, s, a];
  }
  set(e, t, n, i, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = dn) {
    const n = this.planes, i = e.elements, s = i[0], a = i[1], o = i[2], c = i[3], l = i[4], h = i[5], d = i[6], u = i[7], p = i[8], g = i[9], _ = i[10], m = i[11], f = i[12], v = i[13], b = i[14], E = i[15];
    if (n[0].setComponents(c - s, u - l, m - p, E - f).normalize(), n[1].setComponents(c + s, u + l, m + p, E + f).normalize(), n[2].setComponents(c + a, u + h, m + g, E + v).normalize(), n[3].setComponents(c - a, u - h, m - g, E - v).normalize(), n[4].setComponents(c - o, u - d, m - _, E - b).normalize(), t === dn)
      n[5].setComponents(c + o, u + d, m + _, E + b).normalize();
    else if (t === Zs)
      n[5].setComponents(o, d, _, b).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Un);
  }
  intersectsSprite(e) {
    return Un.center.set(0, 0, 0), Un.radius = 0.7071067811865476, Un.applyMatrix4(e.matrixWorld), this.intersectsSphere(Un);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (Is.x = i.normal.x > 0 ? e.max.x : e.min.x, Is.y = i.normal.y > 0 ? e.max.y : e.min.y, Is.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Is) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function il() {
  let r = null, e = !1, t = null, n = null;
  function i(s, a) {
    t(s, a), n = r.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = r.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      r.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      r = s;
    }
  };
}
function gd(r, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(l, h) {
    const d = l.array, u = l.usage, p = d.byteLength, g = r.createBuffer();
    r.bindBuffer(h, g), r.bufferData(h, d, u), l.onUploadCallback();
    let _;
    if (d instanceof Float32Array)
      _ = r.FLOAT;
    else if (d instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          _ = r.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        _ = r.UNSIGNED_SHORT;
    else if (d instanceof Int16Array)
      _ = r.SHORT;
    else if (d instanceof Uint32Array)
      _ = r.UNSIGNED_INT;
    else if (d instanceof Int32Array)
      _ = r.INT;
    else if (d instanceof Int8Array)
      _ = r.BYTE;
    else if (d instanceof Uint8Array)
      _ = r.UNSIGNED_BYTE;
    else if (d instanceof Uint8ClampedArray)
      _ = r.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + d);
    return {
      buffer: g,
      type: _,
      bytesPerElement: d.BYTES_PER_ELEMENT,
      version: l.version,
      size: p
    };
  }
  function s(l, h, d) {
    const u = h.array, p = h._updateRange, g = h.updateRanges;
    if (r.bindBuffer(d, l), p.count === -1 && g.length === 0 && r.bufferSubData(d, 0, u), g.length !== 0) {
      for (let _ = 0, m = g.length; _ < m; _++) {
        const f = g[_];
        t ? r.bufferSubData(
          d,
          f.start * u.BYTES_PER_ELEMENT,
          u,
          f.start,
          f.count
        ) : r.bufferSubData(
          d,
          f.start * u.BYTES_PER_ELEMENT,
          u.subarray(f.start, f.start + f.count)
        );
      }
      h.clearUpdateRanges();
    }
    p.count !== -1 && (t ? r.bufferSubData(
      d,
      p.offset * u.BYTES_PER_ELEMENT,
      u,
      p.offset,
      p.count
    ) : r.bufferSubData(
      d,
      p.offset * u.BYTES_PER_ELEMENT,
      u.subarray(p.offset, p.offset + p.count)
    ), p.count = -1), h.onUploadCallback();
  }
  function a(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function o(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = n.get(l);
    h && (r.deleteBuffer(h.buffer), n.delete(l));
  }
  function c(l, h) {
    if (l.isGLBufferAttribute) {
      const u = n.get(l);
      (!u || u.version < l.version) && n.set(l, {
        buffer: l.buffer,
        type: l.type,
        bytesPerElement: l.elementSize,
        version: l.version
      });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const d = n.get(l);
    if (d === void 0)
      n.set(l, i(l, h));
    else if (d.version < l.version) {
      if (d.size !== l.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      s(d.buffer, l, h), d.version = l.version;
    }
  }
  return {
    get: a,
    remove: o,
    update: c
  };
}
class rr extends Rt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, a = t / 2, o = Math.floor(n), c = Math.floor(i), l = o + 1, h = c + 1, d = e / o, u = t / c, p = [], g = [], _ = [], m = [];
    for (let f = 0; f < h; f++) {
      const v = f * u - a;
      for (let b = 0; b < l; b++) {
        const E = b * d - s;
        g.push(E, -v, 0), _.push(0, 0, 1), m.push(b / o), m.push(1 - f / c);
      }
    }
    for (let f = 0; f < c; f++)
      for (let v = 0; v < o; v++) {
        const b = v + l * f, E = v + l * (f + 1), C = v + 1 + l * (f + 1), T = v + 1 + l * f;
        p.push(b, E, T), p.push(E, C, T);
      }
    this.setIndex(p), this.setAttribute("position", new Gt(g, 3)), this.setAttribute("normal", new Gt(_, 3)), this.setAttribute("uv", new Gt(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new rr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var _d = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, bd = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, xd = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, vd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Md = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Sd = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, yd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Ed = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Ad = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Td = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, wd = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Rd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Cd = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Ld = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Pd = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Id = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, Dd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Ud = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Nd = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Fd = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Od = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Bd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, kd = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, zd = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Gd = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Hd = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Vd = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Wd = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, jd = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Xd = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, qd = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Kd = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`, Yd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Jd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Qd = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Zd = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, $d = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, eu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, tu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, nu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, iu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, su = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, ru = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, au = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, ou = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, cu = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, lu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, hu = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, du = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, uu = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, fu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, pu = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, mu = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, gu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, _u = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, bu = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, xu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, vu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Mu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Su = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, yu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Eu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Au = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Tu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, wu = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Ru = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Cu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Lu = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Pu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, Iu = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, Du = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, Uu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Nu = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Fu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ou = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Bu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, ku = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, zu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Gu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Hu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Vu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Wu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, ju = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Xu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, qu = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Ku = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Yu = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Ju = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Qu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Zu = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, $u = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, ef = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, tf = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, nf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, sf = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, rf = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, af = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, of = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, cf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, lf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, hf = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, df = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, uf = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, ff = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, pf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, mf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, gf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const _f = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, bf = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, xf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, vf = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Mf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Sf = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, yf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Ef = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, Af = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Tf = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, wf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Rf = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Cf = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Lf = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Pf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, If = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Df = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Uf = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Nf = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Ff = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Of = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Bf = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, kf = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, zf = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Gf = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Hf = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Vf = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Wf = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, jf = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Xf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, qf = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Kf = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Yf = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Jf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, De = {
  alphahash_fragment: _d,
  alphahash_pars_fragment: bd,
  alphamap_fragment: xd,
  alphamap_pars_fragment: vd,
  alphatest_fragment: Md,
  alphatest_pars_fragment: Sd,
  aomap_fragment: yd,
  aomap_pars_fragment: Ed,
  batching_pars_vertex: Ad,
  batching_vertex: Td,
  begin_vertex: wd,
  beginnormal_vertex: Rd,
  bsdfs: Cd,
  iridescence_fragment: Ld,
  bumpmap_pars_fragment: Pd,
  clipping_planes_fragment: Id,
  clipping_planes_pars_fragment: Dd,
  clipping_planes_pars_vertex: Ud,
  clipping_planes_vertex: Nd,
  color_fragment: Fd,
  color_pars_fragment: Od,
  color_pars_vertex: Bd,
  color_vertex: kd,
  common: zd,
  cube_uv_reflection_fragment: Gd,
  defaultnormal_vertex: Hd,
  displacementmap_pars_vertex: Vd,
  displacementmap_vertex: Wd,
  emissivemap_fragment: jd,
  emissivemap_pars_fragment: Xd,
  colorspace_fragment: qd,
  colorspace_pars_fragment: Kd,
  envmap_fragment: Yd,
  envmap_common_pars_fragment: Jd,
  envmap_pars_fragment: Qd,
  envmap_pars_vertex: Zd,
  envmap_physical_pars_fragment: hu,
  envmap_vertex: $d,
  fog_vertex: eu,
  fog_pars_vertex: tu,
  fog_fragment: nu,
  fog_pars_fragment: iu,
  gradientmap_pars_fragment: su,
  lightmap_fragment: ru,
  lightmap_pars_fragment: au,
  lights_lambert_fragment: ou,
  lights_lambert_pars_fragment: cu,
  lights_pars_begin: lu,
  lights_toon_fragment: du,
  lights_toon_pars_fragment: uu,
  lights_phong_fragment: fu,
  lights_phong_pars_fragment: pu,
  lights_physical_fragment: mu,
  lights_physical_pars_fragment: gu,
  lights_fragment_begin: _u,
  lights_fragment_maps: bu,
  lights_fragment_end: xu,
  logdepthbuf_fragment: vu,
  logdepthbuf_pars_fragment: Mu,
  logdepthbuf_pars_vertex: Su,
  logdepthbuf_vertex: yu,
  map_fragment: Eu,
  map_pars_fragment: Au,
  map_particle_fragment: Tu,
  map_particle_pars_fragment: wu,
  metalnessmap_fragment: Ru,
  metalnessmap_pars_fragment: Cu,
  morphcolor_vertex: Lu,
  morphnormal_vertex: Pu,
  morphtarget_pars_vertex: Iu,
  morphtarget_vertex: Du,
  normal_fragment_begin: Uu,
  normal_fragment_maps: Nu,
  normal_pars_fragment: Fu,
  normal_pars_vertex: Ou,
  normal_vertex: Bu,
  normalmap_pars_fragment: ku,
  clearcoat_normal_fragment_begin: zu,
  clearcoat_normal_fragment_maps: Gu,
  clearcoat_pars_fragment: Hu,
  iridescence_pars_fragment: Vu,
  opaque_fragment: Wu,
  packing: ju,
  premultiplied_alpha_fragment: Xu,
  project_vertex: qu,
  dithering_fragment: Ku,
  dithering_pars_fragment: Yu,
  roughnessmap_fragment: Ju,
  roughnessmap_pars_fragment: Qu,
  shadowmap_pars_fragment: Zu,
  shadowmap_pars_vertex: $u,
  shadowmap_vertex: ef,
  shadowmask_pars_fragment: tf,
  skinbase_vertex: nf,
  skinning_pars_vertex: sf,
  skinning_vertex: rf,
  skinnormal_vertex: af,
  specularmap_fragment: of,
  specularmap_pars_fragment: cf,
  tonemapping_fragment: lf,
  tonemapping_pars_fragment: hf,
  transmission_fragment: df,
  transmission_pars_fragment: uf,
  uv_pars_fragment: ff,
  uv_pars_vertex: pf,
  uv_vertex: mf,
  worldpos_vertex: gf,
  background_vert: _f,
  background_frag: bf,
  backgroundCube_vert: xf,
  backgroundCube_frag: vf,
  cube_vert: Mf,
  cube_frag: Sf,
  depth_vert: yf,
  depth_frag: Ef,
  distanceRGBA_vert: Af,
  distanceRGBA_frag: Tf,
  equirect_vert: wf,
  equirect_frag: Rf,
  linedashed_vert: Cf,
  linedashed_frag: Lf,
  meshbasic_vert: Pf,
  meshbasic_frag: If,
  meshlambert_vert: Df,
  meshlambert_frag: Uf,
  meshmatcap_vert: Nf,
  meshmatcap_frag: Ff,
  meshnormal_vert: Of,
  meshnormal_frag: Bf,
  meshphong_vert: kf,
  meshphong_frag: zf,
  meshphysical_vert: Gf,
  meshphysical_frag: Hf,
  meshtoon_vert: Vf,
  meshtoon_frag: Wf,
  points_vert: jf,
  points_frag: Xf,
  shadow_vert: qf,
  shadow_frag: Kf,
  sprite_vert: Yf,
  sprite_frag: Jf
}, te = {
  common: {
    diffuse: { value: /* @__PURE__ */ new de(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new ze() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new ze() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new ze() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new ze() },
    normalScale: { value: /* @__PURE__ */ new Te(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new ze() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new ze() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new de(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new de(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new ze() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new ze() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new de(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Te(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new ze() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new ze() },
    alphaTest: { value: 0 }
  }
}, Jt = {
  basic: {
    uniforms: /* @__PURE__ */ wt([
      te.common,
      te.specularmap,
      te.envmap,
      te.aomap,
      te.lightmap,
      te.fog
    ]),
    vertexShader: De.meshbasic_vert,
    fragmentShader: De.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ wt([
      te.common,
      te.specularmap,
      te.envmap,
      te.aomap,
      te.lightmap,
      te.emissivemap,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      te.fog,
      te.lights,
      {
        emissive: { value: /* @__PURE__ */ new de(0) }
      }
    ]),
    vertexShader: De.meshlambert_vert,
    fragmentShader: De.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ wt([
      te.common,
      te.specularmap,
      te.envmap,
      te.aomap,
      te.lightmap,
      te.emissivemap,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      te.fog,
      te.lights,
      {
        emissive: { value: /* @__PURE__ */ new de(0) },
        specular: { value: /* @__PURE__ */ new de(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: De.meshphong_vert,
    fragmentShader: De.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ wt([
      te.common,
      te.envmap,
      te.aomap,
      te.lightmap,
      te.emissivemap,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      te.roughnessmap,
      te.metalnessmap,
      te.fog,
      te.lights,
      {
        emissive: { value: /* @__PURE__ */ new de(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: De.meshphysical_vert,
    fragmentShader: De.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ wt([
      te.common,
      te.aomap,
      te.lightmap,
      te.emissivemap,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      te.gradientmap,
      te.fog,
      te.lights,
      {
        emissive: { value: /* @__PURE__ */ new de(0) }
      }
    ]),
    vertexShader: De.meshtoon_vert,
    fragmentShader: De.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ wt([
      te.common,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      te.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: De.meshmatcap_vert,
    fragmentShader: De.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ wt([
      te.points,
      te.fog
    ]),
    vertexShader: De.points_vert,
    fragmentShader: De.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ wt([
      te.common,
      te.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: De.linedashed_vert,
    fragmentShader: De.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ wt([
      te.common,
      te.displacementmap
    ]),
    vertexShader: De.depth_vert,
    fragmentShader: De.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ wt([
      te.common,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: De.meshnormal_vert,
    fragmentShader: De.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ wt([
      te.sprite,
      te.fog
    ]),
    vertexShader: De.sprite_vert,
    fragmentShader: De.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new ze() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: De.background_vert,
    fragmentShader: De.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: De.backgroundCube_vert,
    fragmentShader: De.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: De.cube_vert,
    fragmentShader: De.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: De.equirect_vert,
    fragmentShader: De.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ wt([
      te.common,
      te.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new L() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: De.distanceRGBA_vert,
    fragmentShader: De.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ wt([
      te.lights,
      te.fog,
      {
        color: { value: /* @__PURE__ */ new de(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: De.shadow_vert,
    fragmentShader: De.shadow_frag
  }
};
Jt.physical = {
  uniforms: /* @__PURE__ */ wt([
    Jt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new ze() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new ze() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Te(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new ze() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new ze() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new ze() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new de(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new ze() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new ze() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new ze() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Te() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new ze() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new de(0) },
      specularColor: { value: /* @__PURE__ */ new de(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new ze() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new ze() },
      anisotropyVector: { value: /* @__PURE__ */ new Te() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new ze() }
    }
  ]),
  vertexShader: De.meshphysical_vert,
  fragmentShader: De.meshphysical_frag
};
const Ds = { r: 0, b: 0, g: 0 };
function Qf(r, e, t, n, i, s, a) {
  const o = new de(0);
  let c = s === !0 ? 0 : 1, l, h, d = null, u = 0, p = null;
  function g(m, f) {
    let v = !1, b = f.isScene === !0 ? f.background : null;
    b && b.isTexture && (b = (f.backgroundBlurriness > 0 ? t : e).get(b)), b === null ? _(o, c) : b && b.isColor && (_(b, 1), v = !0);
    const E = r.xr.getEnvironmentBlendMode();
    E === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : E === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (r.autoClear || v) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), b && (b.isCubeTexture || b.mapping === tr) ? (h === void 0 && (h = new St(
      new Jn(1, 1, 1),
      new Xn({
        name: "BackgroundCubeMaterial",
        uniforms: Ii(Jt.backgroundCube.uniforms),
        vertexShader: Jt.backgroundCube.vertexShader,
        fragmentShader: Jt.backgroundCube.fragmentShader,
        side: Lt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(C, T, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), h.material.uniforms.envMap.value = b, h.material.uniforms.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = f.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = f.backgroundIntensity, h.material.toneMapped = je.getTransfer(b.colorSpace) !== $e, (d !== b || u !== b.version || p !== r.toneMapping) && (h.material.needsUpdate = !0, d = b, u = b.version, p = r.toneMapping), h.layers.enableAll(), m.unshift(h, h.geometry, h.material, 0, 0, null)) : b && b.isTexture && (l === void 0 && (l = new St(
      new rr(2, 2),
      new Xn({
        name: "BackgroundMaterial",
        uniforms: Ii(Jt.background.uniforms),
        vertexShader: Jt.background.vertexShader,
        fragmentShader: Jt.background.fragmentShader,
        side: pn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = b, l.material.uniforms.backgroundIntensity.value = f.backgroundIntensity, l.material.toneMapped = je.getTransfer(b.colorSpace) !== $e, b.matrixAutoUpdate === !0 && b.updateMatrix(), l.material.uniforms.uvTransform.value.copy(b.matrix), (d !== b || u !== b.version || p !== r.toneMapping) && (l.material.needsUpdate = !0, d = b, u = b.version, p = r.toneMapping), l.layers.enableAll(), m.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function _(m, f) {
    m.getRGB(Ds, el(r)), n.buffers.color.setClear(Ds.r, Ds.g, Ds.b, f, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(m, f = 1) {
      o.set(m), c = f, _(o, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(m) {
      c = m, _(o, c);
    },
    render: g
  };
}
function Zf(r, e, t, n) {
  const i = r.getParameter(r.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = n.isWebGL2 || s !== null, o = {}, c = m(null);
  let l = c, h = !1;
  function d(P, O, H, j, W) {
    let V = !1;
    if (a) {
      const J = _(j, H, O);
      l !== J && (l = J, p(l.object)), V = f(P, j, H, W), V && v(P, j, H, W);
    } else {
      const J = O.wireframe === !0;
      (l.geometry !== j.id || l.program !== H.id || l.wireframe !== J) && (l.geometry = j.id, l.program = H.id, l.wireframe = J, V = !0);
    }
    W !== null && t.update(W, r.ELEMENT_ARRAY_BUFFER), (V || h) && (h = !1, G(P, O, H, j), W !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.get(W).buffer));
  }
  function u() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function p(P) {
    return n.isWebGL2 ? r.bindVertexArray(P) : s.bindVertexArrayOES(P);
  }
  function g(P) {
    return n.isWebGL2 ? r.deleteVertexArray(P) : s.deleteVertexArrayOES(P);
  }
  function _(P, O, H) {
    const j = H.wireframe === !0;
    let W = o[P.id];
    W === void 0 && (W = {}, o[P.id] = W);
    let V = W[O.id];
    V === void 0 && (V = {}, W[O.id] = V);
    let J = V[j];
    return J === void 0 && (J = m(u()), V[j] = J), J;
  }
  function m(P) {
    const O = [], H = [], j = [];
    for (let W = 0; W < i; W++)
      O[W] = 0, H[W] = 0, j[W] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: O,
      enabledAttributes: H,
      attributeDivisors: j,
      object: P,
      attributes: {},
      index: null
    };
  }
  function f(P, O, H, j) {
    const W = l.attributes, V = O.attributes;
    let J = 0;
    const $ = H.getAttributes();
    for (const ce in $)
      if ($[ce].location >= 0) {
        const q = W[ce];
        let ae = V[ce];
        if (ae === void 0 && (ce === "instanceMatrix" && P.instanceMatrix && (ae = P.instanceMatrix), ce === "instanceColor" && P.instanceColor && (ae = P.instanceColor)), q === void 0 || q.attribute !== ae || ae && q.data !== ae.data) return !0;
        J++;
      }
    return l.attributesNum !== J || l.index !== j;
  }
  function v(P, O, H, j) {
    const W = {}, V = O.attributes;
    let J = 0;
    const $ = H.getAttributes();
    for (const ce in $)
      if ($[ce].location >= 0) {
        let q = V[ce];
        q === void 0 && (ce === "instanceMatrix" && P.instanceMatrix && (q = P.instanceMatrix), ce === "instanceColor" && P.instanceColor && (q = P.instanceColor));
        const ae = {};
        ae.attribute = q, q && q.data && (ae.data = q.data), W[ce] = ae, J++;
      }
    l.attributes = W, l.attributesNum = J, l.index = j;
  }
  function b() {
    const P = l.newAttributes;
    for (let O = 0, H = P.length; O < H; O++)
      P[O] = 0;
  }
  function E(P) {
    C(P, 0);
  }
  function C(P, O) {
    const H = l.newAttributes, j = l.enabledAttributes, W = l.attributeDivisors;
    H[P] = 1, j[P] === 0 && (r.enableVertexAttribArray(P), j[P] = 1), W[P] !== O && ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](P, O), W[P] = O);
  }
  function T() {
    const P = l.newAttributes, O = l.enabledAttributes;
    for (let H = 0, j = O.length; H < j; H++)
      O[H] !== P[H] && (r.disableVertexAttribArray(H), O[H] = 0);
  }
  function w(P, O, H, j, W, V, J) {
    J === !0 ? r.vertexAttribIPointer(P, O, H, W, V) : r.vertexAttribPointer(P, O, H, j, W, V);
  }
  function G(P, O, H, j) {
    if (n.isWebGL2 === !1 && (P.isInstancedMesh || j.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    b();
    const W = j.attributes, V = H.getAttributes(), J = O.defaultAttributeValues;
    for (const $ in V) {
      const ce = V[$];
      if (ce.location >= 0) {
        let z = W[$];
        if (z === void 0 && ($ === "instanceMatrix" && P.instanceMatrix && (z = P.instanceMatrix), $ === "instanceColor" && P.instanceColor && (z = P.instanceColor)), z !== void 0) {
          const q = z.normalized, ae = z.itemSize, ge = t.get(z);
          if (ge === void 0) continue;
          const me = ge.buffer, Ce = ge.type, Pe = ge.bytesPerElement, Se = n.isWebGL2 === !0 && (Ce === r.INT || Ce === r.UNSIGNED_INT || z.gpuType === Uc);
          if (z.isInterleavedBufferAttribute) {
            const Ve = z.data, D = Ve.stride, yt = z.offset;
            if (Ve.isInstancedInterleavedBuffer) {
              for (let be = 0; be < ce.locationSize; be++)
                C(ce.location + be, Ve.meshPerAttribute);
              P.isInstancedMesh !== !0 && j._maxInstanceCount === void 0 && (j._maxInstanceCount = Ve.meshPerAttribute * Ve.count);
            } else
              for (let be = 0; be < ce.locationSize; be++)
                E(ce.location + be);
            r.bindBuffer(r.ARRAY_BUFFER, me);
            for (let be = 0; be < ce.locationSize; be++)
              w(
                ce.location + be,
                ae / ce.locationSize,
                Ce,
                q,
                D * Pe,
                (yt + ae / ce.locationSize * be) * Pe,
                Se
              );
          } else {
            if (z.isInstancedBufferAttribute) {
              for (let Ve = 0; Ve < ce.locationSize; Ve++)
                C(ce.location + Ve, z.meshPerAttribute);
              P.isInstancedMesh !== !0 && j._maxInstanceCount === void 0 && (j._maxInstanceCount = z.meshPerAttribute * z.count);
            } else
              for (let Ve = 0; Ve < ce.locationSize; Ve++)
                E(ce.location + Ve);
            r.bindBuffer(r.ARRAY_BUFFER, me);
            for (let Ve = 0; Ve < ce.locationSize; Ve++)
              w(
                ce.location + Ve,
                ae / ce.locationSize,
                Ce,
                q,
                ae * Pe,
                ae / ce.locationSize * Ve * Pe,
                Se
              );
          }
        } else if (J !== void 0) {
          const q = J[$];
          if (q !== void 0)
            switch (q.length) {
              case 2:
                r.vertexAttrib2fv(ce.location, q);
                break;
              case 3:
                r.vertexAttrib3fv(ce.location, q);
                break;
              case 4:
                r.vertexAttrib4fv(ce.location, q);
                break;
              default:
                r.vertexAttrib1fv(ce.location, q);
            }
        }
      }
    }
    T();
  }
  function M() {
    X();
    for (const P in o) {
      const O = o[P];
      for (const H in O) {
        const j = O[H];
        for (const W in j)
          g(j[W].object), delete j[W];
        delete O[H];
      }
      delete o[P];
    }
  }
  function A(P) {
    if (o[P.id] === void 0) return;
    const O = o[P.id];
    for (const H in O) {
      const j = O[H];
      for (const W in j)
        g(j[W].object), delete j[W];
      delete O[H];
    }
    delete o[P.id];
  }
  function k(P) {
    for (const O in o) {
      const H = o[O];
      if (H[P.id] === void 0) continue;
      const j = H[P.id];
      for (const W in j)
        g(j[W].object), delete j[W];
      delete H[P.id];
    }
  }
  function X() {
    ne(), h = !0, l !== c && (l = c, p(l.object));
  }
  function ne() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: d,
    reset: X,
    resetDefaultState: ne,
    dispose: M,
    releaseStatesOfGeometry: A,
    releaseStatesOfProgram: k,
    initAttributes: b,
    enableAttribute: E,
    disableUnusedAttributes: T
  };
}
function $f(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(h) {
    s = h;
  }
  function o(h, d) {
    r.drawArrays(s, h, d), t.update(d, s, 1);
  }
  function c(h, d, u) {
    if (u === 0) return;
    let p, g;
    if (i)
      p = r, g = "drawArraysInstanced";
    else if (p = e.get("ANGLE_instanced_arrays"), g = "drawArraysInstancedANGLE", p === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    p[g](s, h, d, u), t.update(d, s, u);
  }
  function l(h, d, u) {
    if (u === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let g = 0; g < u; g++)
        this.render(h[g], d[g]);
    else {
      p.multiDrawArraysWEBGL(s, h, 0, d, 0, u);
      let g = 0;
      for (let _ = 0; _ < u; _++)
        g += d[_];
      t.update(g, s, 1);
    }
  }
  this.setMode = a, this.render = o, this.renderInstances = c, this.renderMultiDraw = l;
}
function ep(r, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(w) {
    if (w === "highp") {
      if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0)
        return "highp";
      w = "mediump";
    }
    return w === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const a = typeof WebGL2RenderingContext < "u" && r.constructor.name === "WebGL2RenderingContext";
  let o = t.precision !== void 0 ? t.precision : "highp";
  const c = s(o);
  c !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", c, "instead."), o = c);
  const l = a || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, d = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), u = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), p = r.getParameter(r.MAX_TEXTURE_SIZE), g = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), _ = r.getParameter(r.MAX_VERTEX_ATTRIBS), m = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), f = r.getParameter(r.MAX_VARYING_VECTORS), v = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), b = u > 0, E = a || e.has("OES_texture_float"), C = b && E, T = a ? r.getParameter(r.MAX_SAMPLES) : 0;
  return {
    isWebGL2: a,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: o,
    logarithmicDepthBuffer: h,
    maxTextures: d,
    maxVertexTextures: u,
    maxTextureSize: p,
    maxCubemapSize: g,
    maxAttributes: _,
    maxVertexUniforms: m,
    maxVaryings: f,
    maxFragmentUniforms: v,
    vertexTextures: b,
    floatFragmentTextures: E,
    floatVertexTextures: C,
    maxSamples: T
  };
}
function tp(r) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const a = new Fn(), o = new ze(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, u) {
    const p = d.length !== 0 || u || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = u, n = d.length, p;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(d, u) {
    t = h(d, u, 0);
  }, this.setState = function(d, u, p) {
    const g = d.clippingPlanes, _ = d.clipIntersection, m = d.clipShadows, f = r.get(d);
    if (!i || g === null || g.length === 0 || s && !m)
      s ? h(null) : l();
    else {
      const v = s ? 0 : n, b = v * 4;
      let E = f.clippingState || null;
      c.value = E, E = h(g, u, b, p);
      for (let C = 0; C !== b; ++C)
        E[C] = t[C];
      f.clippingState = E, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += v;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(d, u, p, g) {
    const _ = d !== null ? d.length : 0;
    let m = null;
    if (_ !== 0) {
      if (m = c.value, g !== !0 || m === null) {
        const f = p + _ * 4, v = u.matrixWorldInverse;
        o.getNormalMatrix(v), (m === null || m.length < f) && (m = new Float32Array(f));
        for (let b = 0, E = p; b !== _; ++b, E += 4)
          a.copy(d[b]).applyMatrix4(v, o), a.normal.toArray(m, E), m[E + 3] = a.constant;
      }
      c.value = m, c.needsUpdate = !0;
    }
    return e.numPlanes = _, e.numIntersection = 0, m;
  }
}
function np(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === ea ? a.mapping = Ti : o === ta && (a.mapping = wi), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === ea || o === ta)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new fd(c.height / 2);
            return l.fromEquirectangularTexture(r, a), e.set(a, l), a.addEventListener("dispose", i), t(l.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const c = e.get(o);
    c !== void 0 && (e.delete(o), c.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class ar extends tl {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = i + t, c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, a = s + l * this.view.width, o -= h * this.view.offsetY, c = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Mi = 4, Do = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], kn = 20, Fr = /* @__PURE__ */ new ar(), Uo = /* @__PURE__ */ new de();
let Or = null, Br = 0, kr = 0;
const On = (1 + Math.sqrt(5)) / 2, fi = 1 / On, No = [
  /* @__PURE__ */ new L(1, 1, 1),
  /* @__PURE__ */ new L(-1, 1, 1),
  /* @__PURE__ */ new L(1, 1, -1),
  /* @__PURE__ */ new L(-1, 1, -1),
  /* @__PURE__ */ new L(0, On, fi),
  /* @__PURE__ */ new L(0, On, -fi),
  /* @__PURE__ */ new L(fi, 0, On),
  /* @__PURE__ */ new L(-fi, 0, On),
  /* @__PURE__ */ new L(On, fi, 0),
  /* @__PURE__ */ new L(-On, fi, 0)
];
class Fo {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, i = 100) {
    Or = this._renderer.getRenderTarget(), Br = this._renderer.getActiveCubeFace(), kr = this._renderer.getActiveMipmapLevel(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = ko(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Bo(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Or, Br, kr), e.scissorTest = !1, Us(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Ti || e.mapping === wi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Or = this._renderer.getRenderTarget(), Br = this._renderer.getActiveCubeFace(), kr = this._renderer.getActiveMipmapLevel();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Ct,
      minFilter: Ct,
      generateMipmaps: !1,
      type: ss,
      format: kt,
      colorSpace: _t,
      depthBuffer: !1
    }, i = Oo(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Oo(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = ip(s)), this._blurMaterial = sp(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new St(this._lodPlanes[0], e);
    this._renderer.compile(t, Fr);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new ct(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, d = h.autoClear, u = h.toneMapping;
    h.getClearColor(Uo), h.toneMapping = wn, h.autoClear = !1;
    const p = new un({
      name: "PMREM.Background",
      side: Lt,
      depthWrite: !1,
      depthTest: !1
    }), g = new St(new Jn(), p);
    let _ = !1;
    const m = e.background;
    m ? m.isColor && (p.color.copy(m), e.background = null, _ = !0) : (p.color.copy(Uo), _ = !0);
    for (let f = 0; f < 6; f++) {
      const v = f % 3;
      v === 0 ? (o.up.set(0, c[f], 0), o.lookAt(l[f], 0, 0)) : v === 1 ? (o.up.set(0, 0, c[f]), o.lookAt(0, l[f], 0)) : (o.up.set(0, c[f], 0), o.lookAt(0, 0, l[f]));
      const b = this._cubeSize;
      Us(i, v * b, f > 2 ? b : 0, b, b), h.setRenderTarget(i), _ && h.render(g, o), h.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = u, h.autoClear = d, e.background = m;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === Ti || e.mapping === wi;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = ko()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Bo());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, a = new St(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    Us(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, Fr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), a = No[(i - 1) % No.length];
      this._blur(e, i - 1, i, s, a);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, i, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      i,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      i,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, i, s, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, d = new St(this._lodPlanes[i], l), u = l.uniforms, p = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * kn - 1), _ = s / g, m = isFinite(s) ? 1 + Math.floor(h * _) : kn;
    m > kn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kn}`);
    const f = [];
    let v = 0;
    for (let w = 0; w < kn; ++w) {
      const G = w / _, M = Math.exp(-G * G / 2);
      f.push(M), w === 0 ? v += M : w < m && (v += 2 * M);
    }
    for (let w = 0; w < f.length; w++)
      f[w] = f[w] / v;
    u.envMap.value = e.texture, u.samples.value = m, u.weights.value = f, u.latitudinal.value = a === "latitudinal", o && (u.poleAxis.value = o);
    const { _lodMax: b } = this;
    u.dTheta.value = g, u.mipInt.value = b - n;
    const E = this._sizeLods[i], C = 3 * E * (i > b - Mi ? i - b + Mi : 0), T = 4 * (this._cubeSize - E);
    Us(t, C, T, 3 * E, 2 * E), c.setRenderTarget(t), c.render(d, Fr);
  }
}
function ip(r) {
  const e = [], t = [], n = [];
  let i = r;
  const s = r - Mi + 1 + Do.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let c = 1 / o;
    a > r - Mi ? c = Do[a - r + Mi - 1] : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2), h = -l, d = 1 + l, u = [h, h, d, h, d, d, h, h, d, d, h, d], p = 6, g = 6, _ = 3, m = 2, f = 1, v = new Float32Array(_ * g * p), b = new Float32Array(m * g * p), E = new Float32Array(f * g * p);
    for (let T = 0; T < p; T++) {
      const w = T % 3 * 2 / 3 - 1, G = T > 2 ? 0 : -1, M = [
        w,
        G,
        0,
        w + 2 / 3,
        G,
        0,
        w + 2 / 3,
        G + 1,
        0,
        w,
        G,
        0,
        w + 2 / 3,
        G + 1,
        0,
        w,
        G + 1,
        0
      ];
      v.set(M, _ * g * T), b.set(u, m * g * T);
      const A = [T, T, T, T, T, T];
      E.set(A, f * g * T);
    }
    const C = new Rt();
    C.setAttribute("position", new gt(v, _)), C.setAttribute("uv", new gt(b, m)), C.setAttribute("faceIndex", new gt(E, f)), e.push(C), i > Mi && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Oo(r, e, t) {
  const n = new jn(r, e, t);
  return n.texture.mapping = tr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Us(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function sp(r, e, t) {
  const n = new Float32Array(kn), i = new L(0, 1, 0);
  return new Xn({
    name: "SphericalGaussianBlur",
    defines: {
      n: kn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: va(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: Tn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Bo() {
  return new Xn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: va(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: Tn,
    depthTest: !1,
    depthWrite: !1
  });
}
function ko() {
  return new Xn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: va(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: Tn,
    depthTest: !1,
    depthWrite: !1
  });
}
function va() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function rp(r) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === ea || c === ta, h = c === Ti || c === wi;
      if (l || h)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let d = e.get(o);
          return t === null && (t = new Fo(r)), d = l ? t.fromEquirectangular(o, d) : t.fromCubemap(o, d), e.set(o, d), d.texture;
        } else {
          if (e.has(o))
            return e.get(o).texture;
          {
            const d = o.image;
            if (l && d && d.height > 0 || h && d && i(d)) {
              t === null && (t = new Fo(r));
              const u = l ? t.fromEquirectangular(o) : t.fromCubemap(o);
              return e.set(o, u), o.addEventListener("dispose", s), u.texture;
            } else
              return null;
          }
        }
    }
    return o;
  }
  function i(o) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++)
      o[h] !== void 0 && c++;
    return c === l;
  }
  function s(o) {
    const c = o.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function ap(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? (t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance")) : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function op(r, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function a(d) {
    const u = d.target;
    u.index !== null && e.remove(u.index);
    for (const g in u.attributes)
      e.remove(u.attributes[g]);
    for (const g in u.morphAttributes) {
      const _ = u.morphAttributes[g];
      for (let m = 0, f = _.length; m < f; m++)
        e.remove(_[m]);
    }
    u.removeEventListener("dispose", a), delete i[u.id];
    const p = s.get(u);
    p && (e.remove(p), s.delete(u)), n.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount, t.memory.geometries--;
  }
  function o(d, u) {
    return i[u.id] === !0 || (u.addEventListener("dispose", a), i[u.id] = !0, t.memory.geometries++), u;
  }
  function c(d) {
    const u = d.attributes;
    for (const g in u)
      e.update(u[g], r.ARRAY_BUFFER);
    const p = d.morphAttributes;
    for (const g in p) {
      const _ = p[g];
      for (let m = 0, f = _.length; m < f; m++)
        e.update(_[m], r.ARRAY_BUFFER);
    }
  }
  function l(d) {
    const u = [], p = d.index, g = d.attributes.position;
    let _ = 0;
    if (p !== null) {
      const v = p.array;
      _ = p.version;
      for (let b = 0, E = v.length; b < E; b += 3) {
        const C = v[b + 0], T = v[b + 1], w = v[b + 2];
        u.push(C, T, T, w, w, C);
      }
    } else if (g !== void 0) {
      const v = g.array;
      _ = g.version;
      for (let b = 0, E = v.length / 3 - 1; b < E; b += 3) {
        const C = b + 0, T = b + 1, w = b + 2;
        u.push(C, T, T, w, w, C);
      }
    } else
      return;
    const m = new (Xc(u) ? $c : Zc)(u, 1);
    m.version = _;
    const f = s.get(d);
    f && e.remove(f), s.set(d, m);
  }
  function h(d) {
    const u = s.get(d);
    if (u) {
      const p = d.index;
      p !== null && u.version < p.version && l(d);
    } else
      l(d);
    return s.get(d);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: h
  };
}
function cp(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function a(p) {
    s = p;
  }
  let o, c;
  function l(p) {
    o = p.type, c = p.bytesPerElement;
  }
  function h(p, g) {
    r.drawElements(s, g, o, p * c), t.update(g, s, 1);
  }
  function d(p, g, _) {
    if (_ === 0) return;
    let m, f;
    if (i)
      m = r, f = "drawElementsInstanced";
    else if (m = e.get("ANGLE_instanced_arrays"), f = "drawElementsInstancedANGLE", m === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    m[f](s, g, o, p * c, _), t.update(g, s, _);
  }
  function u(p, g, _) {
    if (_ === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let f = 0; f < _; f++)
        this.render(p[f] / c, g[f]);
    else {
      m.multiDrawElementsWEBGL(s, g, 0, o, p, 0, _);
      let f = 0;
      for (let v = 0; v < _; v++)
        f += g[v];
      t.update(f, s, 1);
    }
  }
  this.setMode = a, this.setIndex = l, this.render = h, this.renderInstances = d, this.renderMultiDraw = u;
}
function lp(r) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case r.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case r.LINES:
        t.lines += o * (s / 2);
        break;
      case r.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case r.LINE_LOOP:
        t.lines += o * s;
        break;
      case r.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function hp(r, e) {
  return r[0] - e[0];
}
function dp(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function up(r, e, t) {
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), a = new Ye(), o = [];
  for (let l = 0; l < 8; l++)
    o[l] = [l, 0];
  function c(l, h, d) {
    const u = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const p = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, g = p !== void 0 ? p.length : 0;
      let _ = s.get(h);
      if (_ === void 0 || _.count !== g) {
        let P = function() {
          X.dispose(), s.delete(h), h.removeEventListener("dispose", P);
        };
        _ !== void 0 && _.texture.dispose();
        const v = h.morphAttributes.position !== void 0, b = h.morphAttributes.normal !== void 0, E = h.morphAttributes.color !== void 0, C = h.morphAttributes.position || [], T = h.morphAttributes.normal || [], w = h.morphAttributes.color || [];
        let G = 0;
        v === !0 && (G = 1), b === !0 && (G = 2), E === !0 && (G = 3);
        let M = h.attributes.position.count * G, A = 1;
        M > e.maxTextureSize && (A = Math.ceil(M / e.maxTextureSize), M = e.maxTextureSize);
        const k = new Float32Array(M * A * 4 * g), X = new Yc(k, M, A, g);
        X.type = hn, X.needsUpdate = !0;
        const ne = G * 4;
        for (let O = 0; O < g; O++) {
          const H = C[O], j = T[O], W = w[O], V = M * A * 4 * O;
          for (let J = 0; J < H.count; J++) {
            const $ = J * ne;
            v === !0 && (a.fromBufferAttribute(H, J), k[V + $ + 0] = a.x, k[V + $ + 1] = a.y, k[V + $ + 2] = a.z, k[V + $ + 3] = 0), b === !0 && (a.fromBufferAttribute(j, J), k[V + $ + 4] = a.x, k[V + $ + 5] = a.y, k[V + $ + 6] = a.z, k[V + $ + 7] = 0), E === !0 && (a.fromBufferAttribute(W, J), k[V + $ + 8] = a.x, k[V + $ + 9] = a.y, k[V + $ + 10] = a.z, k[V + $ + 11] = W.itemSize === 4 ? a.w : 1);
          }
        }
        _ = {
          count: g,
          texture: X,
          size: new Te(M, A)
        }, s.set(h, _), h.addEventListener("dispose", P);
      }
      let m = 0;
      for (let v = 0; v < u.length; v++)
        m += u[v];
      const f = h.morphTargetsRelative ? 1 : 1 - m;
      d.getUniforms().setValue(r, "morphTargetBaseInfluence", f), d.getUniforms().setValue(r, "morphTargetInfluences", u), d.getUniforms().setValue(r, "morphTargetsTexture", _.texture, t), d.getUniforms().setValue(r, "morphTargetsTextureSize", _.size);
    } else {
      const p = u === void 0 ? 0 : u.length;
      let g = n[h.id];
      if (g === void 0 || g.length !== p) {
        g = [];
        for (let b = 0; b < p; b++)
          g[b] = [b, 0];
        n[h.id] = g;
      }
      for (let b = 0; b < p; b++) {
        const E = g[b];
        E[0] = b, E[1] = u[b];
      }
      g.sort(dp);
      for (let b = 0; b < 8; b++)
        b < p && g[b][1] ? (o[b][0] = g[b][0], o[b][1] = g[b][1]) : (o[b][0] = Number.MAX_SAFE_INTEGER, o[b][1] = 0);
      o.sort(hp);
      const _ = h.morphAttributes.position, m = h.morphAttributes.normal;
      let f = 0;
      for (let b = 0; b < 8; b++) {
        const E = o[b], C = E[0], T = E[1];
        C !== Number.MAX_SAFE_INTEGER && T ? (_ && h.getAttribute("morphTarget" + b) !== _[C] && h.setAttribute("morphTarget" + b, _[C]), m && h.getAttribute("morphNormal" + b) !== m[C] && h.setAttribute("morphNormal" + b, m[C]), i[b] = T, f += T) : (_ && h.hasAttribute("morphTarget" + b) === !0 && h.deleteAttribute("morphTarget" + b), m && h.hasAttribute("morphNormal" + b) === !0 && h.deleteAttribute("morphNormal" + b), i[b] = 0);
      }
      const v = h.morphTargetsRelative ? 1 : 1 - f;
      d.getUniforms().setValue(r, "morphTargetBaseInfluence", v), d.getUniforms().setValue(r, "morphTargetInfluences", i);
    }
  }
  return {
    update: c
  };
}
function fp(r, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = n.render.frame, h = c.geometry, d = e.get(c, h);
    if (i.get(d) !== l && (e.update(d), i.set(d, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o), i.get(c) !== l && (t.update(c.instanceMatrix, r.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, r.ARRAY_BUFFER), i.set(c, l))), c.isSkinnedMesh) {
      const u = c.skeleton;
      i.get(u) !== l && (u.update(), i.set(u, l));
    }
    return d;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
class sl extends mt {
  constructor(e, t, n, i, s, a, o, c, l, h) {
    if (h = h !== void 0 ? h : Gn, h !== Gn && h !== Ci)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === Gn && (n = yn), n === void 0 && h === Ci && (n = zn), super(null, i, s, a, o, c, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : pt, this.minFilter = c !== void 0 ? c : pt, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const rl = /* @__PURE__ */ new mt(), al = /* @__PURE__ */ new sl(1, 1);
al.compareFunction = Wc;
const ol = /* @__PURE__ */ new Yc(), cl = /* @__PURE__ */ new Jh(), ll = /* @__PURE__ */ new nl(), zo = [], Go = [], Ho = new Float32Array(16), Vo = new Float32Array(9), Wo = new Float32Array(4);
function Fi(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let s = zo[i];
  if (s === void 0 && (s = new Float32Array(i), zo[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, r[a].toArray(s, o);
  }
  return s;
}
function lt(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0, n = r.length; t < n; t++)
    if (r[t] !== e[t]) return !1;
  return !0;
}
function ht(r, e) {
  for (let t = 0, n = e.length; t < n; t++)
    r[t] = e[t];
}
function or(r, e) {
  let t = Go[e];
  t === void 0 && (t = new Int32Array(e), Go[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = r.allocateTextureUnit();
  return t;
}
function pp(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function mp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (lt(t, e)) return;
    r.uniform2fv(this.addr, e), ht(t, e);
  }
}
function gp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (lt(t, e)) return;
    r.uniform3fv(this.addr, e), ht(t, e);
  }
}
function _p(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (lt(t, e)) return;
    r.uniform4fv(this.addr, e), ht(t, e);
  }
}
function bp(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (lt(t, e)) return;
    r.uniformMatrix2fv(this.addr, !1, e), ht(t, e);
  } else {
    if (lt(t, n)) return;
    Wo.set(n), r.uniformMatrix2fv(this.addr, !1, Wo), ht(t, n);
  }
}
function xp(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (lt(t, e)) return;
    r.uniformMatrix3fv(this.addr, !1, e), ht(t, e);
  } else {
    if (lt(t, n)) return;
    Vo.set(n), r.uniformMatrix3fv(this.addr, !1, Vo), ht(t, n);
  }
}
function vp(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (lt(t, e)) return;
    r.uniformMatrix4fv(this.addr, !1, e), ht(t, e);
  } else {
    if (lt(t, n)) return;
    Ho.set(n), r.uniformMatrix4fv(this.addr, !1, Ho), ht(t, n);
  }
}
function Mp(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function Sp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (lt(t, e)) return;
    r.uniform2iv(this.addr, e), ht(t, e);
  }
}
function yp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (lt(t, e)) return;
    r.uniform3iv(this.addr, e), ht(t, e);
  }
}
function Ep(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (lt(t, e)) return;
    r.uniform4iv(this.addr, e), ht(t, e);
  }
}
function Ap(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function Tp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (lt(t, e)) return;
    r.uniform2uiv(this.addr, e), ht(t, e);
  }
}
function wp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (lt(t, e)) return;
    r.uniform3uiv(this.addr, e), ht(t, e);
  }
}
function Rp(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (lt(t, e)) return;
    r.uniform4uiv(this.addr, e), ht(t, e);
  }
}
function Cp(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i);
  const s = this.type === r.SAMPLER_2D_SHADOW ? al : rl;
  t.setTexture2D(e || s, i);
}
function Lp(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || cl, i);
}
function Pp(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || ll, i);
}
function Ip(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || ol, i);
}
function Dp(r) {
  switch (r) {
    case 5126:
      return pp;
    case 35664:
      return mp;
    case 35665:
      return gp;
    case 35666:
      return _p;
    case 35674:
      return bp;
    case 35675:
      return xp;
    case 35676:
      return vp;
    case 5124:
    case 35670:
      return Mp;
    case 35667:
    case 35671:
      return Sp;
    case 35668:
    case 35672:
      return yp;
    case 35669:
    case 35673:
      return Ep;
    case 5125:
      return Ap;
    case 36294:
      return Tp;
    case 36295:
      return wp;
    case 36296:
      return Rp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Cp;
    case 35679:
    case 36299:
    case 36307:
      return Lp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Pp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Ip;
  }
}
function Up(r, e) {
  r.uniform1fv(this.addr, e);
}
function Np(r, e) {
  const t = Fi(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function Fp(r, e) {
  const t = Fi(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function Op(r, e) {
  const t = Fi(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function Bp(r, e) {
  const t = Fi(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function kp(r, e) {
  const t = Fi(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function zp(r, e) {
  const t = Fi(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function Gp(r, e) {
  r.uniform1iv(this.addr, e);
}
function Hp(r, e) {
  r.uniform2iv(this.addr, e);
}
function Vp(r, e) {
  r.uniform3iv(this.addr, e);
}
function Wp(r, e) {
  r.uniform4iv(this.addr, e);
}
function jp(r, e) {
  r.uniform1uiv(this.addr, e);
}
function Xp(r, e) {
  r.uniform2uiv(this.addr, e);
}
function qp(r, e) {
  r.uniform3uiv(this.addr, e);
}
function Kp(r, e) {
  r.uniform4uiv(this.addr, e);
}
function Yp(r, e, t) {
  const n = this.cache, i = e.length, s = or(t, i);
  lt(n, s) || (r.uniform1iv(this.addr, s), ht(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture2D(e[a] || rl, s[a]);
}
function Jp(r, e, t) {
  const n = this.cache, i = e.length, s = or(t, i);
  lt(n, s) || (r.uniform1iv(this.addr, s), ht(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture3D(e[a] || cl, s[a]);
}
function Qp(r, e, t) {
  const n = this.cache, i = e.length, s = or(t, i);
  lt(n, s) || (r.uniform1iv(this.addr, s), ht(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTextureCube(e[a] || ll, s[a]);
}
function Zp(r, e, t) {
  const n = this.cache, i = e.length, s = or(t, i);
  lt(n, s) || (r.uniform1iv(this.addr, s), ht(n, s));
  for (let a = 0; a !== i; ++a)
    t.setTexture2DArray(e[a] || ol, s[a]);
}
function $p(r) {
  switch (r) {
    case 5126:
      return Up;
    case 35664:
      return Np;
    case 35665:
      return Fp;
    case 35666:
      return Op;
    case 35674:
      return Bp;
    case 35675:
      return kp;
    case 35676:
      return zp;
    case 5124:
    case 35670:
      return Gp;
    case 35667:
    case 35671:
      return Hp;
    case 35668:
    case 35672:
      return Vp;
    case 35669:
    case 35673:
      return Wp;
    case 5125:
      return jp;
    case 36294:
      return Xp;
    case 36295:
      return qp;
    case 36296:
      return Kp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Yp;
    case 35679:
    case 36299:
    case 36307:
      return Jp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Qp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Zp;
  }
}
class em {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Dp(t.type);
  }
}
class tm {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = $p(t.type);
  }
}
class nm {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, a = i.length; s !== a; ++s) {
      const o = i[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const zr = /(\w+)(\])?(\[|\.)?/g;
function jo(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function im(r, e, t) {
  const n = r.name, i = n.length;
  for (zr.lastIndex = 0; ; ) {
    const s = zr.exec(n), a = zr.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === i) {
      jo(t, l === void 0 ? new em(o, r, e) : new tm(o, r, e));
      break;
    } else {
      let d = t.map[o];
      d === void 0 && (d = new nm(o), jo(t, d)), t = d;
    }
  }
}
class js {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), a = e.getUniformLocation(t, s.name);
      im(s, a, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Xo(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
const sm = 37297;
let rm = 0;
function am(r, e) {
  const t = r.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = i; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function om(r) {
  const e = je.getPrimaries(je.workingColorSpace), t = je.getPrimaries(r);
  let n;
  switch (e === t ? n = "" : e === Qs && t === Js ? n = "LinearDisplayP3ToLinearSRGB" : e === Js && t === Qs && (n = "LinearSRGBToLinearDisplayP3"), r) {
    case _t:
    case nr:
      return [n, "LinearTransferOETF"];
    case rt:
    case _a:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", r), [n, "LinearTransferOETF"];
  }
}
function qo(r, e, t) {
  const n = r.getShaderParameter(e, r.COMPILE_STATUS), i = r.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const a = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + am(r.getShaderSource(e), a);
  } else
    return i;
}
function cm(r, e) {
  const t = om(e);
  return `vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function lm(r, e) {
  let t;
  switch (e) {
    case th:
      t = "Linear";
      break;
    case nh:
      t = "Reinhard";
      break;
    case ih:
      t = "OptimizedCineon";
      break;
    case sh:
      t = "ACESFilmic";
      break;
    case ah:
      t = "AgX";
      break;
    case rh:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function hm(r) {
  return [
    r.extensionDerivatives || r.envMapCubeUVHeight || r.bumpMap || r.normalMapTangentSpace || r.clearcoatNormalMap || r.flatShading || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(Si).join(`
`);
}
function dm(r) {
  return [
    r.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : ""
  ].filter(Si).join(`
`);
}
function um(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function fm(r, e) {
  const t = {}, n = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i), a = s.name;
    let o = 1;
    s.type === r.FLOAT_MAT2 && (o = 2), s.type === r.FLOAT_MAT3 && (o = 3), s.type === r.FLOAT_MAT4 && (o = 4), t[a] = {
      type: s.type,
      location: r.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function Si(r) {
  return r !== "";
}
function Ko(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Yo(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const pm = /^[ \t]*#include +<([\w\d./]+)>/gm;
function oa(r) {
  return r.replace(pm, gm);
}
const mm = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  // @deprecated, r154
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  // @deprecated, r154
  ["output_fragment", "opaque_fragment"]
  // @deprecated, r154
]);
function gm(r, e) {
  let t = De[e];
  if (t === void 0) {
    const n = mm.get(e);
    if (n !== void 0)
      t = De[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return oa(t);
}
const _m = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Jo(r) {
  return r.replace(_m, bm);
}
function bm(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function Qo(r) {
  let e = "precision " + r.precision + ` float;
precision ` + r.precision + " int;";
  return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function xm(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === Lc ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === Cl ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === ln && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function vm(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case Ti:
      case wi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case tr:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Mm(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case wi:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Sm(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case Pc:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case $l:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case eh:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function ym(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Em(r, e, t, n) {
  const i = r.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const c = xm(t), l = vm(t), h = Mm(t), d = Sm(t), u = ym(t), p = t.isWebGL2 ? "" : hm(t), g = dm(t), _ = um(s), m = i.createProgram();
  let f, v, b = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (f = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(Si).join(`
`), f.length > 0 && (f += `
`), v = [
    p,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _
  ].filter(Si).join(`
`), v.length > 0 && (v += `
`)) : (f = [
    Qo(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Si).join(`
`), v = [
    p,
    Qo(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + d : "",
    u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "",
    u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "",
    u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== wn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== wn ? De.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== wn ? lm("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    De.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    cm("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Si).join(`
`)), a = oa(a), a = Ko(a, t), a = Yo(a, t), o = oa(o), o = Ko(o, t), o = Yo(o, t), a = Jo(a), o = Jo(o), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (b = `#version 300 es
`, f = [
    g,
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + f, v = [
    "precision mediump sampler2DArray;",
    "#define varying in",
    t.glslVersion === mo ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === mo ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + v);
  const E = b + f + a, C = b + v + o, T = Xo(i, i.VERTEX_SHADER, E), w = Xo(i, i.FRAGMENT_SHADER, C);
  i.attachShader(m, T), i.attachShader(m, w), t.index0AttributeName !== void 0 ? i.bindAttribLocation(m, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(m, 0, "position"), i.linkProgram(m);
  function G(X) {
    if (r.debug.checkShaderErrors) {
      const ne = i.getProgramInfoLog(m).trim(), P = i.getShaderInfoLog(T).trim(), O = i.getShaderInfoLog(w).trim();
      let H = !0, j = !0;
      if (i.getProgramParameter(m, i.LINK_STATUS) === !1)
        if (H = !1, typeof r.debug.onShaderError == "function")
          r.debug.onShaderError(i, m, T, w);
        else {
          const W = qo(i, T, "vertex"), V = qo(i, w, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(m, i.VALIDATE_STATUS) + `

Program Info Log: ` + ne + `
` + W + `
` + V
          );
        }
      else ne !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", ne) : (P === "" || O === "") && (j = !1);
      j && (X.diagnostics = {
        runnable: H,
        programLog: ne,
        vertexShader: {
          log: P,
          prefix: f
        },
        fragmentShader: {
          log: O,
          prefix: v
        }
      });
    }
    i.deleteShader(T), i.deleteShader(w), M = new js(i, m), A = fm(i, m);
  }
  let M;
  this.getUniforms = function() {
    return M === void 0 && G(this), M;
  };
  let A;
  this.getAttributes = function() {
    return A === void 0 && G(this), A;
  };
  let k = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return k === !1 && (k = i.getProgramParameter(m, sm)), k;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(m), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = rm++, this.cacheKey = e, this.usedTimes = 1, this.program = m, this.vertexShader = T, this.fragmentShader = w, this;
}
let Am = 0;
class Tm {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(i) === !1 && (a.add(i), i.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new wm(e), t.set(e, n)), n;
  }
}
class wm {
  constructor(e) {
    this.id = Am++, this.code = e, this.usedTimes = 0;
  }
}
function Rm(r, e, t, n, i, s, a) {
  const o = new Jc(), c = new Tm(), l = [], h = i.isWebGL2, d = i.logarithmicDepthBuffer, u = i.vertexTextures;
  let p = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function _(M) {
    return M === 0 ? "uv" : `uv${M}`;
  }
  function m(M, A, k, X, ne) {
    const P = X.fog, O = ne.geometry, H = M.isMeshStandardMaterial ? X.environment : null, j = (M.isMeshStandardMaterial ? t : e).get(M.envMap || H), W = j && j.mapping === tr ? j.image.height : null, V = g[M.type];
    M.precision !== null && (p = i.getMaxPrecision(M.precision), p !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", p, "instead."));
    const J = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, $ = J !== void 0 ? J.length : 0;
    let ce = 0;
    O.morphAttributes.position !== void 0 && (ce = 1), O.morphAttributes.normal !== void 0 && (ce = 2), O.morphAttributes.color !== void 0 && (ce = 3);
    let z, q, ae, ge;
    if (V) {
      const Et = Jt[V];
      z = Et.vertexShader, q = Et.fragmentShader;
    } else
      z = M.vertexShader, q = M.fragmentShader, c.update(M), ae = c.getVertexShaderID(M), ge = c.getFragmentShaderID(M);
    const me = r.getRenderTarget(), Ce = ne.isInstancedMesh === !0, Pe = ne.isBatchedMesh === !0, Se = !!M.map, Ve = !!M.matcap, D = !!j, yt = !!M.aoMap, be = !!M.lightMap, we = !!M.bumpMap, ue = !!M.normalMap, tt = !!M.displacementMap, Ue = !!M.emissiveMap, y = !!M.metalnessMap, x = !!M.roughnessMap, N = M.anisotropy > 0, Q = M.clearcoat > 0, Y = M.iridescence > 0, Z = M.sheen > 0, fe = M.transmission > 0, re = N && !!M.anisotropyMap, le = Q && !!M.clearcoatMap, Me = Q && !!M.clearcoatNormalMap, Ne = Q && !!M.clearcoatRoughnessMap, K = Y && !!M.iridescenceMap, qe = Y && !!M.iridescenceThicknessMap, Ge = Z && !!M.sheenColorMap, Ae = Z && !!M.sheenRoughnessMap, _e = !!M.specularMap, he = !!M.specularColorMap, Ie = !!M.specularIntensityMap, Xe = fe && !!M.transmissionMap, it = fe && !!M.thicknessMap, Be = !!M.gradientMap, ee = !!M.alphaMap, R = M.alphaTest > 0, ie = !!M.alphaHash, se = !!M.extensions, ye = !!O.attributes.uv1, xe = !!O.attributes.uv2, Je = !!O.attributes.uv3;
    let Qe = wn;
    return M.toneMapped && (me === null || me.isXRRenderTarget === !0) && (Qe = r.toneMapping), {
      isWebGL2: h,
      shaderID: V,
      shaderType: M.type,
      shaderName: M.name,
      vertexShader: z,
      fragmentShader: q,
      defines: M.defines,
      customVertexShaderID: ae,
      customFragmentShaderID: ge,
      isRawShaderMaterial: M.isRawShaderMaterial === !0,
      glslVersion: M.glslVersion,
      precision: p,
      batching: Pe,
      instancing: Ce,
      instancingColor: Ce && ne.instanceColor !== null,
      supportsVertexTextures: u,
      outputColorSpace: me === null ? r.outputColorSpace : me.isXRRenderTarget === !0 ? me.texture.colorSpace : _t,
      map: Se,
      matcap: Ve,
      envMap: D,
      envMapMode: D && j.mapping,
      envMapCubeUVHeight: W,
      aoMap: yt,
      lightMap: be,
      bumpMap: we,
      normalMap: ue,
      displacementMap: u && tt,
      emissiveMap: Ue,
      normalMapObjectSpace: ue && M.normalMapType === yh,
      normalMapTangentSpace: ue && M.normalMapType === Vc,
      metalnessMap: y,
      roughnessMap: x,
      anisotropy: N,
      anisotropyMap: re,
      clearcoat: Q,
      clearcoatMap: le,
      clearcoatNormalMap: Me,
      clearcoatRoughnessMap: Ne,
      iridescence: Y,
      iridescenceMap: K,
      iridescenceThicknessMap: qe,
      sheen: Z,
      sheenColorMap: Ge,
      sheenRoughnessMap: Ae,
      specularMap: _e,
      specularColorMap: he,
      specularIntensityMap: Ie,
      transmission: fe,
      transmissionMap: Xe,
      thicknessMap: it,
      gradientMap: Be,
      opaque: M.transparent === !1 && M.blending === yi,
      alphaMap: ee,
      alphaTest: R,
      alphaHash: ie,
      combine: M.combine,
      //
      mapUv: Se && _(M.map.channel),
      aoMapUv: yt && _(M.aoMap.channel),
      lightMapUv: be && _(M.lightMap.channel),
      bumpMapUv: we && _(M.bumpMap.channel),
      normalMapUv: ue && _(M.normalMap.channel),
      displacementMapUv: tt && _(M.displacementMap.channel),
      emissiveMapUv: Ue && _(M.emissiveMap.channel),
      metalnessMapUv: y && _(M.metalnessMap.channel),
      roughnessMapUv: x && _(M.roughnessMap.channel),
      anisotropyMapUv: re && _(M.anisotropyMap.channel),
      clearcoatMapUv: le && _(M.clearcoatMap.channel),
      clearcoatNormalMapUv: Me && _(M.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Ne && _(M.clearcoatRoughnessMap.channel),
      iridescenceMapUv: K && _(M.iridescenceMap.channel),
      iridescenceThicknessMapUv: qe && _(M.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ge && _(M.sheenColorMap.channel),
      sheenRoughnessMapUv: Ae && _(M.sheenRoughnessMap.channel),
      specularMapUv: _e && _(M.specularMap.channel),
      specularColorMapUv: he && _(M.specularColorMap.channel),
      specularIntensityMapUv: Ie && _(M.specularIntensityMap.channel),
      transmissionMapUv: Xe && _(M.transmissionMap.channel),
      thicknessMapUv: it && _(M.thicknessMap.channel),
      alphaMapUv: ee && _(M.alphaMap.channel),
      //
      vertexTangents: !!O.attributes.tangent && (ue || N),
      vertexColors: M.vertexColors,
      vertexAlphas: M.vertexColors === !0 && !!O.attributes.color && O.attributes.color.itemSize === 4,
      vertexUv1s: ye,
      vertexUv2s: xe,
      vertexUv3s: Je,
      pointsUvs: ne.isPoints === !0 && !!O.attributes.uv && (Se || ee),
      fog: !!P,
      useFog: M.fog === !0,
      fogExp2: P && P.isFogExp2,
      flatShading: M.flatShading === !0,
      sizeAttenuation: M.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      skinning: ne.isSkinnedMesh === !0,
      morphTargets: O.morphAttributes.position !== void 0,
      morphNormals: O.morphAttributes.normal !== void 0,
      morphColors: O.morphAttributes.color !== void 0,
      morphTargetsCount: $,
      morphTextureStride: ce,
      numDirLights: A.directional.length,
      numPointLights: A.point.length,
      numSpotLights: A.spot.length,
      numSpotLightMaps: A.spotLightMap.length,
      numRectAreaLights: A.rectArea.length,
      numHemiLights: A.hemi.length,
      numDirLightShadows: A.directionalShadowMap.length,
      numPointLightShadows: A.pointShadowMap.length,
      numSpotLightShadows: A.spotShadowMap.length,
      numSpotLightShadowsWithMaps: A.numSpotLightShadowsWithMaps,
      numLightProbes: A.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: M.dithering,
      shadowMapEnabled: r.shadowMap.enabled && k.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: Qe,
      useLegacyLights: r._useLegacyLights,
      decodeVideoTexture: Se && M.map.isVideoTexture === !0 && je.getTransfer(M.map.colorSpace) === $e,
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === jt,
      flipSided: M.side === Lt,
      useDepthPacking: M.depthPacking >= 0,
      depthPacking: M.depthPacking || 0,
      index0AttributeName: M.index0AttributeName,
      extensionDerivatives: se && M.extensions.derivatives === !0,
      extensionFragDepth: se && M.extensions.fragDepth === !0,
      extensionDrawBuffers: se && M.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: se && M.extensions.shaderTextureLOD === !0,
      extensionClipCullDistance: se && M.extensions.clipCullDistance && n.has("WEBGL_clip_cull_distance"),
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: M.customProgramCacheKey()
    };
  }
  function f(M) {
    const A = [];
    if (M.shaderID ? A.push(M.shaderID) : (A.push(M.customVertexShaderID), A.push(M.customFragmentShaderID)), M.defines !== void 0)
      for (const k in M.defines)
        A.push(k), A.push(M.defines[k]);
    return M.isRawShaderMaterial === !1 && (v(A, M), b(A, M), A.push(r.outputColorSpace)), A.push(M.customProgramCacheKey), A.join();
  }
  function v(M, A) {
    M.push(A.precision), M.push(A.outputColorSpace), M.push(A.envMapMode), M.push(A.envMapCubeUVHeight), M.push(A.mapUv), M.push(A.alphaMapUv), M.push(A.lightMapUv), M.push(A.aoMapUv), M.push(A.bumpMapUv), M.push(A.normalMapUv), M.push(A.displacementMapUv), M.push(A.emissiveMapUv), M.push(A.metalnessMapUv), M.push(A.roughnessMapUv), M.push(A.anisotropyMapUv), M.push(A.clearcoatMapUv), M.push(A.clearcoatNormalMapUv), M.push(A.clearcoatRoughnessMapUv), M.push(A.iridescenceMapUv), M.push(A.iridescenceThicknessMapUv), M.push(A.sheenColorMapUv), M.push(A.sheenRoughnessMapUv), M.push(A.specularMapUv), M.push(A.specularColorMapUv), M.push(A.specularIntensityMapUv), M.push(A.transmissionMapUv), M.push(A.thicknessMapUv), M.push(A.combine), M.push(A.fogExp2), M.push(A.sizeAttenuation), M.push(A.morphTargetsCount), M.push(A.morphAttributeCount), M.push(A.numDirLights), M.push(A.numPointLights), M.push(A.numSpotLights), M.push(A.numSpotLightMaps), M.push(A.numHemiLights), M.push(A.numRectAreaLights), M.push(A.numDirLightShadows), M.push(A.numPointLightShadows), M.push(A.numSpotLightShadows), M.push(A.numSpotLightShadowsWithMaps), M.push(A.numLightProbes), M.push(A.shadowMapType), M.push(A.toneMapping), M.push(A.numClippingPlanes), M.push(A.numClipIntersection), M.push(A.depthPacking);
  }
  function b(M, A) {
    o.disableAll(), A.isWebGL2 && o.enable(0), A.supportsVertexTextures && o.enable(1), A.instancing && o.enable(2), A.instancingColor && o.enable(3), A.matcap && o.enable(4), A.envMap && o.enable(5), A.normalMapObjectSpace && o.enable(6), A.normalMapTangentSpace && o.enable(7), A.clearcoat && o.enable(8), A.iridescence && o.enable(9), A.alphaTest && o.enable(10), A.vertexColors && o.enable(11), A.vertexAlphas && o.enable(12), A.vertexUv1s && o.enable(13), A.vertexUv2s && o.enable(14), A.vertexUv3s && o.enable(15), A.vertexTangents && o.enable(16), A.anisotropy && o.enable(17), A.alphaHash && o.enable(18), A.batching && o.enable(19), M.push(o.mask), o.disableAll(), A.fog && o.enable(0), A.useFog && o.enable(1), A.flatShading && o.enable(2), A.logarithmicDepthBuffer && o.enable(3), A.skinning && o.enable(4), A.morphTargets && o.enable(5), A.morphNormals && o.enable(6), A.morphColors && o.enable(7), A.premultipliedAlpha && o.enable(8), A.shadowMapEnabled && o.enable(9), A.useLegacyLights && o.enable(10), A.doubleSided && o.enable(11), A.flipSided && o.enable(12), A.useDepthPacking && o.enable(13), A.dithering && o.enable(14), A.transmission && o.enable(15), A.sheen && o.enable(16), A.opaque && o.enable(17), A.pointsUvs && o.enable(18), A.decodeVideoTexture && o.enable(19), M.push(o.mask);
  }
  function E(M) {
    const A = g[M.type];
    let k;
    if (A) {
      const X = Jt[A];
      k = ld.clone(X.uniforms);
    } else
      k = M.uniforms;
    return k;
  }
  function C(M, A) {
    let k;
    for (let X = 0, ne = l.length; X < ne; X++) {
      const P = l[X];
      if (P.cacheKey === A) {
        k = P, ++k.usedTimes;
        break;
      }
    }
    return k === void 0 && (k = new Em(r, A, M, s), l.push(k)), k;
  }
  function T(M) {
    if (--M.usedTimes === 0) {
      const A = l.indexOf(M);
      l[A] = l[l.length - 1], l.pop(), M.destroy();
    }
  }
  function w(M) {
    c.remove(M);
  }
  function G() {
    c.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: f,
    getUniforms: E,
    acquireProgram: C,
    releaseProgram: T,
    releaseShaderCache: w,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: l,
    dispose: G
  };
}
function Cm() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let a = r.get(s);
    return a === void 0 && (a = {}, r.set(s, a)), a;
  }
  function t(s) {
    r.delete(s);
  }
  function n(s, a, o) {
    r.get(s)[a] = o;
  }
  function i() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function Lm(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function Zo(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function $o() {
  const r = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(d, u, p, g, _, m) {
    let f = r[e];
    return f === void 0 ? (f = {
      id: d.id,
      object: d,
      geometry: u,
      material: p,
      groupOrder: g,
      renderOrder: d.renderOrder,
      z: _,
      group: m
    }, r[e] = f) : (f.id = d.id, f.object = d, f.geometry = u, f.material = p, f.groupOrder = g, f.renderOrder = d.renderOrder, f.z = _, f.group = m), e++, f;
  }
  function o(d, u, p, g, _, m) {
    const f = a(d, u, p, g, _, m);
    p.transmission > 0 ? n.push(f) : p.transparent === !0 ? i.push(f) : t.push(f);
  }
  function c(d, u, p, g, _, m) {
    const f = a(d, u, p, g, _, m);
    p.transmission > 0 ? n.unshift(f) : p.transparent === !0 ? i.unshift(f) : t.unshift(f);
  }
  function l(d, u) {
    t.length > 1 && t.sort(d || Lm), n.length > 1 && n.sort(u || Zo), i.length > 1 && i.sort(u || Zo);
  }
  function h() {
    for (let d = e, u = r.length; d < u; d++) {
      const p = r[d];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: o,
    unshift: c,
    finish: h,
    sort: l
  };
}
function Pm() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let a;
    return s === void 0 ? (a = new $o(), r.set(n, [a])) : i >= s.length ? (a = new $o(), s.push(a)) : a = s[i], a;
  }
  function t() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Im() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new L(),
            color: new de()
          };
          break;
        case "SpotLight":
          t = {
            position: new L(),
            direction: new L(),
            color: new de(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new L(),
            color: new de(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new L(),
            skyColor: new de(),
            groundColor: new de()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new de(),
            position: new L(),
            halfWidth: new L(),
            halfHeight: new L()
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
function Dm() {
  const r = {};
  return {
    get: function(e) {
      if (r[e.id] !== void 0)
        return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Te()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Te()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Te(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return r[e.id] = t, t;
    }
  };
}
let Um = 0;
function Nm(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function Fm(r, e) {
  const t = new Im(), n = Dm(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let h = 0; h < 9; h++) i.probe.push(new L());
  const s = new L(), a = new Oe(), o = new Oe();
  function c(h, d) {
    let u = 0, p = 0, g = 0;
    for (let X = 0; X < 9; X++) i.probe[X].set(0, 0, 0);
    let _ = 0, m = 0, f = 0, v = 0, b = 0, E = 0, C = 0, T = 0, w = 0, G = 0, M = 0;
    h.sort(Nm);
    const A = d === !0 ? Math.PI : 1;
    for (let X = 0, ne = h.length; X < ne; X++) {
      const P = h[X], O = P.color, H = P.intensity, j = P.distance, W = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight)
        u += O.r * H * A, p += O.g * H * A, g += O.b * H * A;
      else if (P.isLightProbe) {
        for (let V = 0; V < 9; V++)
          i.probe[V].addScaledVector(P.sh.coefficients[V], H);
        M++;
      } else if (P.isDirectionalLight) {
        const V = t.get(P);
        if (V.color.copy(P.color).multiplyScalar(P.intensity * A), P.castShadow) {
          const J = P.shadow, $ = n.get(P);
          $.shadowBias = J.bias, $.shadowNormalBias = J.normalBias, $.shadowRadius = J.radius, $.shadowMapSize = J.mapSize, i.directionalShadow[_] = $, i.directionalShadowMap[_] = W, i.directionalShadowMatrix[_] = P.shadow.matrix, E++;
        }
        i.directional[_] = V, _++;
      } else if (P.isSpotLight) {
        const V = t.get(P);
        V.position.setFromMatrixPosition(P.matrixWorld), V.color.copy(O).multiplyScalar(H * A), V.distance = j, V.coneCos = Math.cos(P.angle), V.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), V.decay = P.decay, i.spot[f] = V;
        const J = P.shadow;
        if (P.map && (i.spotLightMap[w] = P.map, w++, J.updateMatrices(P), P.castShadow && G++), i.spotLightMatrix[f] = J.matrix, P.castShadow) {
          const $ = n.get(P);
          $.shadowBias = J.bias, $.shadowNormalBias = J.normalBias, $.shadowRadius = J.radius, $.shadowMapSize = J.mapSize, i.spotShadow[f] = $, i.spotShadowMap[f] = W, T++;
        }
        f++;
      } else if (P.isRectAreaLight) {
        const V = t.get(P);
        V.color.copy(O).multiplyScalar(H), V.halfWidth.set(P.width * 0.5, 0, 0), V.halfHeight.set(0, P.height * 0.5, 0), i.rectArea[v] = V, v++;
      } else if (P.isPointLight) {
        const V = t.get(P);
        if (V.color.copy(P.color).multiplyScalar(P.intensity * A), V.distance = P.distance, V.decay = P.decay, P.castShadow) {
          const J = P.shadow, $ = n.get(P);
          $.shadowBias = J.bias, $.shadowNormalBias = J.normalBias, $.shadowRadius = J.radius, $.shadowMapSize = J.mapSize, $.shadowCameraNear = J.camera.near, $.shadowCameraFar = J.camera.far, i.pointShadow[m] = $, i.pointShadowMap[m] = W, i.pointShadowMatrix[m] = P.shadow.matrix, C++;
        }
        i.point[m] = V, m++;
      } else if (P.isHemisphereLight) {
        const V = t.get(P);
        V.skyColor.copy(P.color).multiplyScalar(H * A), V.groundColor.copy(P.groundColor).multiplyScalar(H * A), i.hemi[b] = V, b++;
      }
    }
    v > 0 && (e.isWebGL2 ? r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = te.LTC_FLOAT_1, i.rectAreaLTC2 = te.LTC_FLOAT_2) : (i.rectAreaLTC1 = te.LTC_HALF_1, i.rectAreaLTC2 = te.LTC_HALF_2) : r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = te.LTC_FLOAT_1, i.rectAreaLTC2 = te.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = te.LTC_HALF_1, i.rectAreaLTC2 = te.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = u, i.ambient[1] = p, i.ambient[2] = g;
    const k = i.hash;
    (k.directionalLength !== _ || k.pointLength !== m || k.spotLength !== f || k.rectAreaLength !== v || k.hemiLength !== b || k.numDirectionalShadows !== E || k.numPointShadows !== C || k.numSpotShadows !== T || k.numSpotMaps !== w || k.numLightProbes !== M) && (i.directional.length = _, i.spot.length = f, i.rectArea.length = v, i.point.length = m, i.hemi.length = b, i.directionalShadow.length = E, i.directionalShadowMap.length = E, i.pointShadow.length = C, i.pointShadowMap.length = C, i.spotShadow.length = T, i.spotShadowMap.length = T, i.directionalShadowMatrix.length = E, i.pointShadowMatrix.length = C, i.spotLightMatrix.length = T + w - G, i.spotLightMap.length = w, i.numSpotLightShadowsWithMaps = G, i.numLightProbes = M, k.directionalLength = _, k.pointLength = m, k.spotLength = f, k.rectAreaLength = v, k.hemiLength = b, k.numDirectionalShadows = E, k.numPointShadows = C, k.numSpotShadows = T, k.numSpotMaps = w, k.numLightProbes = M, i.version = Um++);
  }
  function l(h, d) {
    let u = 0, p = 0, g = 0, _ = 0, m = 0;
    const f = d.matrixWorldInverse;
    for (let v = 0, b = h.length; v < b; v++) {
      const E = h[v];
      if (E.isDirectionalLight) {
        const C = i.directional[u];
        C.direction.setFromMatrixPosition(E.matrixWorld), s.setFromMatrixPosition(E.target.matrixWorld), C.direction.sub(s), C.direction.transformDirection(f), u++;
      } else if (E.isSpotLight) {
        const C = i.spot[g];
        C.position.setFromMatrixPosition(E.matrixWorld), C.position.applyMatrix4(f), C.direction.setFromMatrixPosition(E.matrixWorld), s.setFromMatrixPosition(E.target.matrixWorld), C.direction.sub(s), C.direction.transformDirection(f), g++;
      } else if (E.isRectAreaLight) {
        const C = i.rectArea[_];
        C.position.setFromMatrixPosition(E.matrixWorld), C.position.applyMatrix4(f), o.identity(), a.copy(E.matrixWorld), a.premultiply(f), o.extractRotation(a), C.halfWidth.set(E.width * 0.5, 0, 0), C.halfHeight.set(0, E.height * 0.5, 0), C.halfWidth.applyMatrix4(o), C.halfHeight.applyMatrix4(o), _++;
      } else if (E.isPointLight) {
        const C = i.point[p];
        C.position.setFromMatrixPosition(E.matrixWorld), C.position.applyMatrix4(f), p++;
      } else if (E.isHemisphereLight) {
        const C = i.hemi[m];
        C.direction.setFromMatrixPosition(E.matrixWorld), C.direction.transformDirection(f), m++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: i
  };
}
function ec(r, e) {
  const t = new Fm(r, e), n = [], i = [];
  function s() {
    n.length = 0, i.length = 0;
  }
  function a(d) {
    n.push(d);
  }
  function o(d) {
    i.push(d);
  }
  function c(d) {
    t.setup(n, d);
  }
  function l(d) {
    t.setupView(n, d);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: c,
    setupLightsView: l,
    pushLight: a,
    pushShadow: o
  };
}
function Om(r, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, a = 0) {
    const o = t.get(s);
    let c;
    return o === void 0 ? (c = new ec(r, e), t.set(s, [c])) : a >= o.length ? (c = new ec(r, e), o.push(c)) : c = o[a], c;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class Bm extends Kt {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Mh, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class km extends Kt {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const zm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Gm = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Hm(r, e, t) {
  let n = new xa();
  const i = new Te(), s = new Te(), a = new Ye(), o = new Bm({ depthPacking: Sh }), c = new km(), l = {}, h = t.maxTextureSize, d = { [pn]: Lt, [Lt]: pn, [jt]: jt }, u = new Xn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Te() },
      radius: { value: 4 }
    },
    vertexShader: zm,
    fragmentShader: Gm
  }), p = u.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new Rt();
  g.setAttribute(
    "position",
    new gt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new St(g, u), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Lc;
  let f = this.type;
  this.render = function(T, w, G) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || T.length === 0) return;
    const M = r.getRenderTarget(), A = r.getActiveCubeFace(), k = r.getActiveMipmapLevel(), X = r.state;
    X.setBlending(Tn), X.buffers.color.setClear(1, 1, 1, 1), X.buffers.depth.setTest(!0), X.setScissorTest(!1);
    const ne = f !== ln && this.type === ln, P = f === ln && this.type !== ln;
    for (let O = 0, H = T.length; O < H; O++) {
      const j = T[O], W = j.shadow;
      if (W === void 0) {
        console.warn("THREE.WebGLShadowMap:", j, "has no shadow.");
        continue;
      }
      if (W.autoUpdate === !1 && W.needsUpdate === !1) continue;
      i.copy(W.mapSize);
      const V = W.getFrameExtents();
      if (i.multiply(V), s.copy(W.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / V.x), i.x = s.x * V.x, W.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / V.y), i.y = s.y * V.y, W.mapSize.y = s.y)), W.map === null || ne === !0 || P === !0) {
        const $ = this.type !== ln ? { minFilter: pt, magFilter: pt } : {};
        W.map !== null && W.map.dispose(), W.map = new jn(i.x, i.y, $), W.map.texture.name = j.name + ".shadowMap", W.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(W.map), r.clear();
      const J = W.getViewportCount();
      for (let $ = 0; $ < J; $++) {
        const ce = W.getViewport($);
        a.set(
          s.x * ce.x,
          s.y * ce.y,
          s.x * ce.z,
          s.y * ce.w
        ), X.viewport(a), W.updateMatrices(j, $), n = W.getFrustum(), E(w, G, W.camera, j, this.type);
      }
      W.isPointLightShadow !== !0 && this.type === ln && v(W, G), W.needsUpdate = !1;
    }
    f = this.type, m.needsUpdate = !1, r.setRenderTarget(M, A, k);
  };
  function v(T, w) {
    const G = e.update(_);
    u.defines.VSM_SAMPLES !== T.blurSamples && (u.defines.VSM_SAMPLES = T.blurSamples, p.defines.VSM_SAMPLES = T.blurSamples, u.needsUpdate = !0, p.needsUpdate = !0), T.mapPass === null && (T.mapPass = new jn(i.x, i.y)), u.uniforms.shadow_pass.value = T.map.texture, u.uniforms.resolution.value = T.mapSize, u.uniforms.radius.value = T.radius, r.setRenderTarget(T.mapPass), r.clear(), r.renderBufferDirect(w, null, G, u, _, null), p.uniforms.shadow_pass.value = T.mapPass.texture, p.uniforms.resolution.value = T.mapSize, p.uniforms.radius.value = T.radius, r.setRenderTarget(T.map), r.clear(), r.renderBufferDirect(w, null, G, p, _, null);
  }
  function b(T, w, G, M) {
    let A = null;
    const k = G.isPointLight === !0 ? T.customDistanceMaterial : T.customDepthMaterial;
    if (k !== void 0)
      A = k;
    else if (A = G.isPointLight === !0 ? c : o, r.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const X = A.uuid, ne = w.uuid;
      let P = l[X];
      P === void 0 && (P = {}, l[X] = P);
      let O = P[ne];
      O === void 0 && (O = A.clone(), P[ne] = O, w.addEventListener("dispose", C)), A = O;
    }
    if (A.visible = w.visible, A.wireframe = w.wireframe, M === ln ? A.side = w.shadowSide !== null ? w.shadowSide : w.side : A.side = w.shadowSide !== null ? w.shadowSide : d[w.side], A.alphaMap = w.alphaMap, A.alphaTest = w.alphaTest, A.map = w.map, A.clipShadows = w.clipShadows, A.clippingPlanes = w.clippingPlanes, A.clipIntersection = w.clipIntersection, A.displacementMap = w.displacementMap, A.displacementScale = w.displacementScale, A.displacementBias = w.displacementBias, A.wireframeLinewidth = w.wireframeLinewidth, A.linewidth = w.linewidth, G.isPointLight === !0 && A.isMeshDistanceMaterial === !0) {
      const X = r.properties.get(A);
      X.light = G;
    }
    return A;
  }
  function E(T, w, G, M, A) {
    if (T.visible === !1) return;
    if (T.layers.test(w.layers) && (T.isMesh || T.isLine || T.isPoints) && (T.castShadow || T.receiveShadow && A === ln) && (!T.frustumCulled || n.intersectsObject(T))) {
      T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse, T.matrixWorld);
      const ne = e.update(T), P = T.material;
      if (Array.isArray(P)) {
        const O = ne.groups;
        for (let H = 0, j = O.length; H < j; H++) {
          const W = O[H], V = P[W.materialIndex];
          if (V && V.visible) {
            const J = b(T, V, M, A);
            T.onBeforeShadow(r, T, w, G, ne, J, W), r.renderBufferDirect(G, null, ne, J, T, W), T.onAfterShadow(r, T, w, G, ne, J, W);
          }
        }
      } else if (P.visible) {
        const O = b(T, P, M, A);
        T.onBeforeShadow(r, T, w, G, ne, O, null), r.renderBufferDirect(G, null, ne, O, T, null), T.onAfterShadow(r, T, w, G, ne, O, null);
      }
    }
    const X = T.children;
    for (let ne = 0, P = X.length; ne < P; ne++)
      E(X[ne], w, G, M, A);
  }
  function C(T) {
    T.target.removeEventListener("dispose", C);
    for (const G in l) {
      const M = l[G], A = T.target.uuid;
      A in M && (M[A].dispose(), delete M[A]);
    }
  }
}
function Vm(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let R = !1;
    const ie = new Ye();
    let se = null;
    const ye = new Ye(0, 0, 0, 0);
    return {
      setMask: function(xe) {
        se !== xe && !R && (r.colorMask(xe, xe, xe, xe), se = xe);
      },
      setLocked: function(xe) {
        R = xe;
      },
      setClear: function(xe, Je, Qe, dt, Et) {
        Et === !0 && (xe *= dt, Je *= dt, Qe *= dt), ie.set(xe, Je, Qe, dt), ye.equals(ie) === !1 && (r.clearColor(xe, Je, Qe, dt), ye.copy(ie));
      },
      reset: function() {
        R = !1, se = null, ye.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let R = !1, ie = null, se = null, ye = null;
    return {
      setTest: function(xe) {
        xe ? Pe(r.DEPTH_TEST) : Se(r.DEPTH_TEST);
      },
      setMask: function(xe) {
        ie !== xe && !R && (r.depthMask(xe), ie = xe);
      },
      setFunc: function(xe) {
        if (se !== xe) {
          switch (xe) {
            case Xl:
              r.depthFunc(r.NEVER);
              break;
            case ql:
              r.depthFunc(r.ALWAYS);
              break;
            case Kl:
              r.depthFunc(r.LESS);
              break;
            case Xs:
              r.depthFunc(r.LEQUAL);
              break;
            case Yl:
              r.depthFunc(r.EQUAL);
              break;
            case Jl:
              r.depthFunc(r.GEQUAL);
              break;
            case Ql:
              r.depthFunc(r.GREATER);
              break;
            case Zl:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          se = xe;
        }
      },
      setLocked: function(xe) {
        R = xe;
      },
      setClear: function(xe) {
        ye !== xe && (r.clearDepth(xe), ye = xe);
      },
      reset: function() {
        R = !1, ie = null, se = null, ye = null;
      }
    };
  }
  function a() {
    let R = !1, ie = null, se = null, ye = null, xe = null, Je = null, Qe = null, dt = null, Et = null;
    return {
      setTest: function(Ze) {
        R || (Ze ? Pe(r.STENCIL_TEST) : Se(r.STENCIL_TEST));
      },
      setMask: function(Ze) {
        ie !== Ze && !R && (r.stencilMask(Ze), ie = Ze);
      },
      setFunc: function(Ze, At, Yt) {
        (se !== Ze || ye !== At || xe !== Yt) && (r.stencilFunc(Ze, At, Yt), se = Ze, ye = At, xe = Yt);
      },
      setOp: function(Ze, At, Yt) {
        (Je !== Ze || Qe !== At || dt !== Yt) && (r.stencilOp(Ze, At, Yt), Je = Ze, Qe = At, dt = Yt);
      },
      setLocked: function(Ze) {
        R = Ze;
      },
      setClear: function(Ze) {
        Et !== Ze && (r.clearStencil(Ze), Et = Ze);
      },
      reset: function() {
        R = !1, ie = null, se = null, ye = null, xe = null, Je = null, Qe = null, dt = null, Et = null;
      }
    };
  }
  const o = new i(), c = new s(), l = new a(), h = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
  let u = {}, p = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], m = null, f = !1, v = null, b = null, E = null, C = null, T = null, w = null, G = null, M = new de(0, 0, 0), A = 0, k = !1, X = null, ne = null, P = null, O = null, H = null;
  const j = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let W = !1, V = 0;
  const J = r.getParameter(r.VERSION);
  J.indexOf("WebGL") !== -1 ? (V = parseFloat(/^WebGL (\d)/.exec(J)[1]), W = V >= 1) : J.indexOf("OpenGL ES") !== -1 && (V = parseFloat(/^OpenGL ES (\d)/.exec(J)[1]), W = V >= 2);
  let $ = null, ce = {};
  const z = r.getParameter(r.SCISSOR_BOX), q = r.getParameter(r.VIEWPORT), ae = new Ye().fromArray(z), ge = new Ye().fromArray(q);
  function me(R, ie, se, ye) {
    const xe = new Uint8Array(4), Je = r.createTexture();
    r.bindTexture(R, Je), r.texParameteri(R, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(R, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let Qe = 0; Qe < se; Qe++)
      n && (R === r.TEXTURE_3D || R === r.TEXTURE_2D_ARRAY) ? r.texImage3D(ie, 0, r.RGBA, 1, 1, ye, 0, r.RGBA, r.UNSIGNED_BYTE, xe) : r.texImage2D(ie + Qe, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, xe);
    return Je;
  }
  const Ce = {};
  Ce[r.TEXTURE_2D] = me(r.TEXTURE_2D, r.TEXTURE_2D, 1), Ce[r.TEXTURE_CUBE_MAP] = me(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (Ce[r.TEXTURE_2D_ARRAY] = me(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), Ce[r.TEXTURE_3D] = me(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1)), o.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), Pe(r.DEPTH_TEST), c.setFunc(Xs), Ue(!1), y(Fa), Pe(r.CULL_FACE), ue(Tn);
  function Pe(R) {
    u[R] !== !0 && (r.enable(R), u[R] = !0);
  }
  function Se(R) {
    u[R] !== !1 && (r.disable(R), u[R] = !1);
  }
  function Ve(R, ie) {
    return p[R] !== ie ? (r.bindFramebuffer(R, ie), p[R] = ie, n && (R === r.DRAW_FRAMEBUFFER && (p[r.FRAMEBUFFER] = ie), R === r.FRAMEBUFFER && (p[r.DRAW_FRAMEBUFFER] = ie)), !0) : !1;
  }
  function D(R, ie) {
    let se = _, ye = !1;
    if (R)
      if (se = g.get(ie), se === void 0 && (se = [], g.set(ie, se)), R.isWebGLMultipleRenderTargets) {
        const xe = R.texture;
        if (se.length !== xe.length || se[0] !== r.COLOR_ATTACHMENT0) {
          for (let Je = 0, Qe = xe.length; Je < Qe; Je++)
            se[Je] = r.COLOR_ATTACHMENT0 + Je;
          se.length = xe.length, ye = !0;
        }
      } else
        se[0] !== r.COLOR_ATTACHMENT0 && (se[0] = r.COLOR_ATTACHMENT0, ye = !0);
    else
      se[0] !== r.BACK && (se[0] = r.BACK, ye = !0);
    ye && (t.isWebGL2 ? r.drawBuffers(se) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se));
  }
  function yt(R) {
    return m !== R ? (r.useProgram(R), m = R, !0) : !1;
  }
  const be = {
    [Bn]: r.FUNC_ADD,
    [Pl]: r.FUNC_SUBTRACT,
    [Il]: r.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    be[ka] = r.MIN, be[za] = r.MAX;
  else {
    const R = e.get("EXT_blend_minmax");
    R !== null && (be[ka] = R.MIN_EXT, be[za] = R.MAX_EXT);
  }
  const we = {
    [Dl]: r.ZERO,
    [Ul]: r.ONE,
    [Nl]: r.SRC_COLOR,
    [Zr]: r.SRC_ALPHA,
    [Gl]: r.SRC_ALPHA_SATURATE,
    [kl]: r.DST_COLOR,
    [Ol]: r.DST_ALPHA,
    [Fl]: r.ONE_MINUS_SRC_COLOR,
    [$r]: r.ONE_MINUS_SRC_ALPHA,
    [zl]: r.ONE_MINUS_DST_COLOR,
    [Bl]: r.ONE_MINUS_DST_ALPHA,
    [Hl]: r.CONSTANT_COLOR,
    [Vl]: r.ONE_MINUS_CONSTANT_COLOR,
    [Wl]: r.CONSTANT_ALPHA,
    [jl]: r.ONE_MINUS_CONSTANT_ALPHA
  };
  function ue(R, ie, se, ye, xe, Je, Qe, dt, Et, Ze) {
    if (R === Tn) {
      f === !0 && (Se(r.BLEND), f = !1);
      return;
    }
    if (f === !1 && (Pe(r.BLEND), f = !0), R !== Ll) {
      if (R !== v || Ze !== k) {
        if ((b !== Bn || T !== Bn) && (r.blendEquation(r.FUNC_ADD), b = Bn, T = Bn), Ze)
          switch (R) {
            case yi:
              r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case Qr:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case Oa:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case Ba:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", R);
              break;
          }
        else
          switch (R) {
            case yi:
              r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case Qr:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case Oa:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case Ba:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", R);
              break;
          }
        E = null, C = null, w = null, G = null, M.set(0, 0, 0), A = 0, v = R, k = Ze;
      }
      return;
    }
    xe = xe || ie, Je = Je || se, Qe = Qe || ye, (ie !== b || xe !== T) && (r.blendEquationSeparate(be[ie], be[xe]), b = ie, T = xe), (se !== E || ye !== C || Je !== w || Qe !== G) && (r.blendFuncSeparate(we[se], we[ye], we[Je], we[Qe]), E = se, C = ye, w = Je, G = Qe), (dt.equals(M) === !1 || Et !== A) && (r.blendColor(dt.r, dt.g, dt.b, Et), M.copy(dt), A = Et), v = R, k = !1;
  }
  function tt(R, ie) {
    R.side === jt ? Se(r.CULL_FACE) : Pe(r.CULL_FACE);
    let se = R.side === Lt;
    ie && (se = !se), Ue(se), R.blending === yi && R.transparent === !1 ? ue(Tn) : ue(R.blending, R.blendEquation, R.blendSrc, R.blendDst, R.blendEquationAlpha, R.blendSrcAlpha, R.blendDstAlpha, R.blendColor, R.blendAlpha, R.premultipliedAlpha), c.setFunc(R.depthFunc), c.setTest(R.depthTest), c.setMask(R.depthWrite), o.setMask(R.colorWrite);
    const ye = R.stencilWrite;
    l.setTest(ye), ye && (l.setMask(R.stencilWriteMask), l.setFunc(R.stencilFunc, R.stencilRef, R.stencilFuncMask), l.setOp(R.stencilFail, R.stencilZFail, R.stencilZPass)), N(R.polygonOffset, R.polygonOffsetFactor, R.polygonOffsetUnits), R.alphaToCoverage === !0 ? Pe(r.SAMPLE_ALPHA_TO_COVERAGE) : Se(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ue(R) {
    X !== R && (R ? r.frontFace(r.CW) : r.frontFace(r.CCW), X = R);
  }
  function y(R) {
    R !== wl ? (Pe(r.CULL_FACE), R !== ne && (R === Fa ? r.cullFace(r.BACK) : R === Rl ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : Se(r.CULL_FACE), ne = R;
  }
  function x(R) {
    R !== P && (W && r.lineWidth(R), P = R);
  }
  function N(R, ie, se) {
    R ? (Pe(r.POLYGON_OFFSET_FILL), (O !== ie || H !== se) && (r.polygonOffset(ie, se), O = ie, H = se)) : Se(r.POLYGON_OFFSET_FILL);
  }
  function Q(R) {
    R ? Pe(r.SCISSOR_TEST) : Se(r.SCISSOR_TEST);
  }
  function Y(R) {
    R === void 0 && (R = r.TEXTURE0 + j - 1), $ !== R && (r.activeTexture(R), $ = R);
  }
  function Z(R, ie, se) {
    se === void 0 && ($ === null ? se = r.TEXTURE0 + j - 1 : se = $);
    let ye = ce[se];
    ye === void 0 && (ye = { type: void 0, texture: void 0 }, ce[se] = ye), (ye.type !== R || ye.texture !== ie) && ($ !== se && (r.activeTexture(se), $ = se), r.bindTexture(R, ie || Ce[R]), ye.type = R, ye.texture = ie);
  }
  function fe() {
    const R = ce[$];
    R !== void 0 && R.type !== void 0 && (r.bindTexture(R.type, null), R.type = void 0, R.texture = void 0);
  }
  function re() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function le() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Me() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Ne() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function K() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function qe() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Ge() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Ae() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function _e() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function he() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Ie(R) {
    ae.equals(R) === !1 && (r.scissor(R.x, R.y, R.z, R.w), ae.copy(R));
  }
  function Xe(R) {
    ge.equals(R) === !1 && (r.viewport(R.x, R.y, R.z, R.w), ge.copy(R));
  }
  function it(R, ie) {
    let se = d.get(ie);
    se === void 0 && (se = /* @__PURE__ */ new WeakMap(), d.set(ie, se));
    let ye = se.get(R);
    ye === void 0 && (ye = r.getUniformBlockIndex(ie, R.name), se.set(R, ye));
  }
  function Be(R, ie) {
    const ye = d.get(ie).get(R);
    h.get(ie) !== ye && (r.uniformBlockBinding(ie, ye, R.__bindingPointIndex), h.set(ie, ye));
  }
  function ee() {
    r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.blendColor(0, 0, 0, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(r.LESS), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), n === !0 && (r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), u = {}, $ = null, ce = {}, p = {}, g = /* @__PURE__ */ new WeakMap(), _ = [], m = null, f = !1, v = null, b = null, E = null, C = null, T = null, w = null, G = null, M = new de(0, 0, 0), A = 0, k = !1, X = null, ne = null, P = null, O = null, H = null, ae.set(0, 0, r.canvas.width, r.canvas.height), ge.set(0, 0, r.canvas.width, r.canvas.height), o.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: o,
      depth: c,
      stencil: l
    },
    enable: Pe,
    disable: Se,
    bindFramebuffer: Ve,
    drawBuffers: D,
    useProgram: yt,
    setBlending: ue,
    setMaterial: tt,
    setFlipSided: Ue,
    setCullFace: y,
    setLineWidth: x,
    setPolygonOffset: N,
    setScissorTest: Q,
    activeTexture: Y,
    bindTexture: Z,
    unbindTexture: fe,
    compressedTexImage2D: re,
    compressedTexImage3D: le,
    texImage2D: _e,
    texImage3D: he,
    updateUBOMapping: it,
    uniformBlockBinding: Be,
    texStorage2D: Ge,
    texStorage3D: Ae,
    texSubImage2D: Me,
    texSubImage3D: Ne,
    compressedTexSubImage2D: K,
    compressedTexSubImage3D: qe,
    scissor: Ie,
    viewport: Xe,
    reset: ee
  };
}
function Wm(r, e, t, n, i, s, a) {
  const o = i.isWebGL2, c = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), h = /* @__PURE__ */ new WeakMap();
  let d;
  const u = /* @__PURE__ */ new WeakMap();
  let p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(y, x) {
    return p ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(y, x)
    ) : as("canvas");
  }
  function _(y, x, N, Q) {
    let Y = 1;
    if ((y.width > Q || y.height > Q) && (Y = Q / Math.max(y.width, y.height)), Y < 1 || x === !0)
      if (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && y instanceof ImageBitmap) {
        const Z = x ? $s : Math.floor, fe = Z(Y * y.width), re = Z(Y * y.height);
        d === void 0 && (d = g(fe, re));
        const le = N ? g(fe, re) : d;
        return le.width = fe, le.height = re, le.getContext("2d").drawImage(y, 0, 0, fe, re), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + y.width + "x" + y.height + ") to (" + fe + "x" + re + ")."), le;
      } else
        return "data" in y && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + y.width + "x" + y.height + ")."), y;
    return y;
  }
  function m(y) {
    return aa(y.width) && aa(y.height);
  }
  function f(y) {
    return o ? !1 : y.wrapS !== Bt || y.wrapT !== Bt || y.minFilter !== pt && y.minFilter !== Ct;
  }
  function v(y, x) {
    return y.generateMipmaps && x && y.minFilter !== pt && y.minFilter !== Ct;
  }
  function b(y) {
    r.generateMipmap(y);
  }
  function E(y, x, N, Q, Y = !1) {
    if (o === !1) return x;
    if (y !== null) {
      if (r[y] !== void 0) return r[y];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + y + "'");
    }
    let Z = x;
    if (x === r.RED && (N === r.FLOAT && (Z = r.R32F), N === r.HALF_FLOAT && (Z = r.R16F), N === r.UNSIGNED_BYTE && (Z = r.R8)), x === r.RED_INTEGER && (N === r.UNSIGNED_BYTE && (Z = r.R8UI), N === r.UNSIGNED_SHORT && (Z = r.R16UI), N === r.UNSIGNED_INT && (Z = r.R32UI), N === r.BYTE && (Z = r.R8I), N === r.SHORT && (Z = r.R16I), N === r.INT && (Z = r.R32I)), x === r.RG && (N === r.FLOAT && (Z = r.RG32F), N === r.HALF_FLOAT && (Z = r.RG16F), N === r.UNSIGNED_BYTE && (Z = r.RG8)), x === r.RGBA) {
      const fe = Y ? Ys : je.getTransfer(Q);
      N === r.FLOAT && (Z = r.RGBA32F), N === r.HALF_FLOAT && (Z = r.RGBA16F), N === r.UNSIGNED_BYTE && (Z = fe === $e ? r.SRGB8_ALPHA8 : r.RGBA8), N === r.UNSIGNED_SHORT_4_4_4_4 && (Z = r.RGBA4), N === r.UNSIGNED_SHORT_5_5_5_1 && (Z = r.RGB5_A1);
    }
    return (Z === r.R16F || Z === r.R32F || Z === r.RG16F || Z === r.RG32F || Z === r.RGBA16F || Z === r.RGBA32F) && e.get("EXT_color_buffer_float"), Z;
  }
  function C(y, x, N) {
    return v(y, N) === !0 || y.isFramebufferTexture && y.minFilter !== pt && y.minFilter !== Ct ? Math.log2(Math.max(x.width, x.height)) + 1 : y.mipmaps !== void 0 && y.mipmaps.length > 0 ? y.mipmaps.length : y.isCompressedTexture && Array.isArray(y.image) ? x.mipmaps.length : 1;
  }
  function T(y) {
    return y === pt || y === na || y === Ws ? r.NEAREST : r.LINEAR;
  }
  function w(y) {
    const x = y.target;
    x.removeEventListener("dispose", w), M(x), x.isVideoTexture && h.delete(x);
  }
  function G(y) {
    const x = y.target;
    x.removeEventListener("dispose", G), k(x);
  }
  function M(y) {
    const x = n.get(y);
    if (x.__webglInit === void 0) return;
    const N = y.source, Q = u.get(N);
    if (Q) {
      const Y = Q[x.__cacheKey];
      Y.usedTimes--, Y.usedTimes === 0 && A(y), Object.keys(Q).length === 0 && u.delete(N);
    }
    n.remove(y);
  }
  function A(y) {
    const x = n.get(y);
    r.deleteTexture(x.__webglTexture);
    const N = y.source, Q = u.get(N);
    delete Q[x.__cacheKey], a.memory.textures--;
  }
  function k(y) {
    const x = y.texture, N = n.get(y), Q = n.get(x);
    if (Q.__webglTexture !== void 0 && (r.deleteTexture(Q.__webglTexture), a.memory.textures--), y.depthTexture && y.depthTexture.dispose(), y.isWebGLCubeRenderTarget)
      for (let Y = 0; Y < 6; Y++) {
        if (Array.isArray(N.__webglFramebuffer[Y]))
          for (let Z = 0; Z < N.__webglFramebuffer[Y].length; Z++) r.deleteFramebuffer(N.__webglFramebuffer[Y][Z]);
        else
          r.deleteFramebuffer(N.__webglFramebuffer[Y]);
        N.__webglDepthbuffer && r.deleteRenderbuffer(N.__webglDepthbuffer[Y]);
      }
    else {
      if (Array.isArray(N.__webglFramebuffer))
        for (let Y = 0; Y < N.__webglFramebuffer.length; Y++) r.deleteFramebuffer(N.__webglFramebuffer[Y]);
      else
        r.deleteFramebuffer(N.__webglFramebuffer);
      if (N.__webglDepthbuffer && r.deleteRenderbuffer(N.__webglDepthbuffer), N.__webglMultisampledFramebuffer && r.deleteFramebuffer(N.__webglMultisampledFramebuffer), N.__webglColorRenderbuffer)
        for (let Y = 0; Y < N.__webglColorRenderbuffer.length; Y++)
          N.__webglColorRenderbuffer[Y] && r.deleteRenderbuffer(N.__webglColorRenderbuffer[Y]);
      N.__webglDepthRenderbuffer && r.deleteRenderbuffer(N.__webglDepthRenderbuffer);
    }
    if (y.isWebGLMultipleRenderTargets)
      for (let Y = 0, Z = x.length; Y < Z; Y++) {
        const fe = n.get(x[Y]);
        fe.__webglTexture && (r.deleteTexture(fe.__webglTexture), a.memory.textures--), n.remove(x[Y]);
      }
    n.remove(x), n.remove(y);
  }
  let X = 0;
  function ne() {
    X = 0;
  }
  function P() {
    const y = X;
    return y >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + y + " texture units while this GPU supports only " + i.maxTextures), X += 1, y;
  }
  function O(y) {
    const x = [];
    return x.push(y.wrapS), x.push(y.wrapT), x.push(y.wrapR || 0), x.push(y.magFilter), x.push(y.minFilter), x.push(y.anisotropy), x.push(y.internalFormat), x.push(y.format), x.push(y.type), x.push(y.generateMipmaps), x.push(y.premultiplyAlpha), x.push(y.flipY), x.push(y.unpackAlignment), x.push(y.colorSpace), x.join();
  }
  function H(y, x) {
    const N = n.get(y);
    if (y.isVideoTexture && tt(y), y.isRenderTargetTexture === !1 && y.version > 0 && N.__version !== y.version) {
      const Q = y.image;
      if (Q === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Q.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ae(N, y, x);
        return;
      }
    }
    t.bindTexture(r.TEXTURE_2D, N.__webglTexture, r.TEXTURE0 + x);
  }
  function j(y, x) {
    const N = n.get(y);
    if (y.version > 0 && N.__version !== y.version) {
      ae(N, y, x);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, N.__webglTexture, r.TEXTURE0 + x);
  }
  function W(y, x) {
    const N = n.get(y);
    if (y.version > 0 && N.__version !== y.version) {
      ae(N, y, x);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, N.__webglTexture, r.TEXTURE0 + x);
  }
  function V(y, x) {
    const N = n.get(y);
    if (y.version > 0 && N.__version !== y.version) {
      ge(N, y, x);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, N.__webglTexture, r.TEXTURE0 + x);
  }
  const J = {
    [Ri]: r.REPEAT,
    [Bt]: r.CLAMP_TO_EDGE,
    [qs]: r.MIRRORED_REPEAT
  }, $ = {
    [pt]: r.NEAREST,
    [na]: r.NEAREST_MIPMAP_NEAREST,
    [Ws]: r.NEAREST_MIPMAP_LINEAR,
    [Ct]: r.LINEAR,
    [Dc]: r.LINEAR_MIPMAP_NEAREST,
    [Wn]: r.LINEAR_MIPMAP_LINEAR
  }, ce = {
    [Eh]: r.NEVER,
    [Lh]: r.ALWAYS,
    [Ah]: r.LESS,
    [Wc]: r.LEQUAL,
    [Th]: r.EQUAL,
    [Ch]: r.GEQUAL,
    [wh]: r.GREATER,
    [Rh]: r.NOTEQUAL
  };
  function z(y, x, N) {
    if (N ? (r.texParameteri(y, r.TEXTURE_WRAP_S, J[x.wrapS]), r.texParameteri(y, r.TEXTURE_WRAP_T, J[x.wrapT]), (y === r.TEXTURE_3D || y === r.TEXTURE_2D_ARRAY) && r.texParameteri(y, r.TEXTURE_WRAP_R, J[x.wrapR]), r.texParameteri(y, r.TEXTURE_MAG_FILTER, $[x.magFilter]), r.texParameteri(y, r.TEXTURE_MIN_FILTER, $[x.minFilter])) : (r.texParameteri(y, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(y, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), (y === r.TEXTURE_3D || y === r.TEXTURE_2D_ARRAY) && r.texParameteri(y, r.TEXTURE_WRAP_R, r.CLAMP_TO_EDGE), (x.wrapS !== Bt || x.wrapT !== Bt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(y, r.TEXTURE_MAG_FILTER, T(x.magFilter)), r.texParameteri(y, r.TEXTURE_MIN_FILTER, T(x.minFilter)), x.minFilter !== pt && x.minFilter !== Ct && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), x.compareFunction && (r.texParameteri(y, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(y, r.TEXTURE_COMPARE_FUNC, ce[x.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const Q = e.get("EXT_texture_filter_anisotropic");
      if (x.magFilter === pt || x.minFilter !== Ws && x.minFilter !== Wn || x.type === hn && e.has("OES_texture_float_linear") === !1 || o === !1 && x.type === ss && e.has("OES_texture_half_float_linear") === !1) return;
      (x.anisotropy > 1 || n.get(x).__currentAnisotropy) && (r.texParameterf(y, Q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, i.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy);
    }
  }
  function q(y, x) {
    let N = !1;
    y.__webglInit === void 0 && (y.__webglInit = !0, x.addEventListener("dispose", w));
    const Q = x.source;
    let Y = u.get(Q);
    Y === void 0 && (Y = {}, u.set(Q, Y));
    const Z = O(x);
    if (Z !== y.__cacheKey) {
      Y[Z] === void 0 && (Y[Z] = {
        texture: r.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, N = !0), Y[Z].usedTimes++;
      const fe = Y[y.__cacheKey];
      fe !== void 0 && (Y[y.__cacheKey].usedTimes--, fe.usedTimes === 0 && A(x)), y.__cacheKey = Z, y.__webglTexture = Y[Z].texture;
    }
    return N;
  }
  function ae(y, x, N) {
    let Q = r.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (Q = r.TEXTURE_2D_ARRAY), x.isData3DTexture && (Q = r.TEXTURE_3D);
    const Y = q(y, x), Z = x.source;
    t.bindTexture(Q, y.__webglTexture, r.TEXTURE0 + N);
    const fe = n.get(Z);
    if (Z.version !== fe.__version || Y === !0) {
      t.activeTexture(r.TEXTURE0 + N);
      const re = je.getPrimaries(je.workingColorSpace), le = x.colorSpace === zt ? null : je.getPrimaries(x.colorSpace), Me = x.colorSpace === zt || re === le ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, x.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, x.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, Me);
      const Ne = f(x) && m(x.image) === !1;
      let K = _(x.image, Ne, !1, i.maxTextureSize);
      K = Ue(x, K);
      const qe = m(K) || o, Ge = s.convert(x.format, x.colorSpace);
      let Ae = s.convert(x.type), _e = E(x.internalFormat, Ge, Ae, x.colorSpace, x.isVideoTexture);
      z(Q, x, qe);
      let he;
      const Ie = x.mipmaps, Xe = o && x.isVideoTexture !== !0 && _e !== zc, it = fe.__version === void 0 || Y === !0, Be = C(x, K, qe);
      if (x.isDepthTexture)
        _e = r.DEPTH_COMPONENT, o ? x.type === hn ? _e = r.DEPTH_COMPONENT32F : x.type === yn ? _e = r.DEPTH_COMPONENT24 : x.type === zn ? _e = r.DEPTH24_STENCIL8 : _e = r.DEPTH_COMPONENT16 : x.type === hn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), x.format === Gn && _e === r.DEPTH_COMPONENT && x.type !== ma && x.type !== yn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), x.type = yn, Ae = s.convert(x.type)), x.format === Ci && _e === r.DEPTH_COMPONENT && (_e = r.DEPTH_STENCIL, x.type !== zn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), x.type = zn, Ae = s.convert(x.type))), it && (Xe ? t.texStorage2D(r.TEXTURE_2D, 1, _e, K.width, K.height) : t.texImage2D(r.TEXTURE_2D, 0, _e, K.width, K.height, 0, Ge, Ae, null));
      else if (x.isDataTexture)
        if (Ie.length > 0 && qe) {
          Xe && it && t.texStorage2D(r.TEXTURE_2D, Be, _e, Ie[0].width, Ie[0].height);
          for (let ee = 0, R = Ie.length; ee < R; ee++)
            he = Ie[ee], Xe ? t.texSubImage2D(r.TEXTURE_2D, ee, 0, 0, he.width, he.height, Ge, Ae, he.data) : t.texImage2D(r.TEXTURE_2D, ee, _e, he.width, he.height, 0, Ge, Ae, he.data);
          x.generateMipmaps = !1;
        } else
          Xe ? (it && t.texStorage2D(r.TEXTURE_2D, Be, _e, K.width, K.height), t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, K.width, K.height, Ge, Ae, K.data)) : t.texImage2D(r.TEXTURE_2D, 0, _e, K.width, K.height, 0, Ge, Ae, K.data);
      else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
          Xe && it && t.texStorage3D(r.TEXTURE_2D_ARRAY, Be, _e, Ie[0].width, Ie[0].height, K.depth);
          for (let ee = 0, R = Ie.length; ee < R; ee++)
            he = Ie[ee], x.format !== kt ? Ge !== null ? Xe ? t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, ee, 0, 0, 0, he.width, he.height, K.depth, Ge, he.data, 0, 0) : t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, ee, _e, he.width, he.height, K.depth, 0, he.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Xe ? t.texSubImage3D(r.TEXTURE_2D_ARRAY, ee, 0, 0, 0, he.width, he.height, K.depth, Ge, Ae, he.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, ee, _e, he.width, he.height, K.depth, 0, Ge, Ae, he.data);
        } else {
          Xe && it && t.texStorage2D(r.TEXTURE_2D, Be, _e, Ie[0].width, Ie[0].height);
          for (let ee = 0, R = Ie.length; ee < R; ee++)
            he = Ie[ee], x.format !== kt ? Ge !== null ? Xe ? t.compressedTexSubImage2D(r.TEXTURE_2D, ee, 0, 0, he.width, he.height, Ge, he.data) : t.compressedTexImage2D(r.TEXTURE_2D, ee, _e, he.width, he.height, 0, he.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Xe ? t.texSubImage2D(r.TEXTURE_2D, ee, 0, 0, he.width, he.height, Ge, Ae, he.data) : t.texImage2D(r.TEXTURE_2D, ee, _e, he.width, he.height, 0, Ge, Ae, he.data);
        }
      else if (x.isDataArrayTexture)
        Xe ? (it && t.texStorage3D(r.TEXTURE_2D_ARRAY, Be, _e, K.width, K.height, K.depth), t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, K.width, K.height, K.depth, Ge, Ae, K.data)) : t.texImage3D(r.TEXTURE_2D_ARRAY, 0, _e, K.width, K.height, K.depth, 0, Ge, Ae, K.data);
      else if (x.isData3DTexture)
        Xe ? (it && t.texStorage3D(r.TEXTURE_3D, Be, _e, K.width, K.height, K.depth), t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, K.width, K.height, K.depth, Ge, Ae, K.data)) : t.texImage3D(r.TEXTURE_3D, 0, _e, K.width, K.height, K.depth, 0, Ge, Ae, K.data);
      else if (x.isFramebufferTexture) {
        if (it)
          if (Xe)
            t.texStorage2D(r.TEXTURE_2D, Be, _e, K.width, K.height);
          else {
            let ee = K.width, R = K.height;
            for (let ie = 0; ie < Be; ie++)
              t.texImage2D(r.TEXTURE_2D, ie, _e, ee, R, 0, Ge, Ae, null), ee >>= 1, R >>= 1;
          }
      } else if (Ie.length > 0 && qe) {
        Xe && it && t.texStorage2D(r.TEXTURE_2D, Be, _e, Ie[0].width, Ie[0].height);
        for (let ee = 0, R = Ie.length; ee < R; ee++)
          he = Ie[ee], Xe ? t.texSubImage2D(r.TEXTURE_2D, ee, 0, 0, Ge, Ae, he) : t.texImage2D(r.TEXTURE_2D, ee, _e, Ge, Ae, he);
        x.generateMipmaps = !1;
      } else
        Xe ? (it && t.texStorage2D(r.TEXTURE_2D, Be, _e, K.width, K.height), t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, Ge, Ae, K)) : t.texImage2D(r.TEXTURE_2D, 0, _e, Ge, Ae, K);
      v(x, qe) && b(Q), fe.__version = Z.version, x.onUpdate && x.onUpdate(x);
    }
    y.__version = x.version;
  }
  function ge(y, x, N) {
    if (x.image.length !== 6) return;
    const Q = q(y, x), Y = x.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, y.__webglTexture, r.TEXTURE0 + N);
    const Z = n.get(Y);
    if (Y.version !== Z.__version || Q === !0) {
      t.activeTexture(r.TEXTURE0 + N);
      const fe = je.getPrimaries(je.workingColorSpace), re = x.colorSpace === zt ? null : je.getPrimaries(x.colorSpace), le = x.colorSpace === zt || fe === re ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, x.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, x.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, le);
      const Me = x.isCompressedTexture || x.image[0].isCompressedTexture, Ne = x.image[0] && x.image[0].isDataTexture, K = [];
      for (let ee = 0; ee < 6; ee++)
        !Me && !Ne ? K[ee] = _(x.image[ee], !1, !0, i.maxCubemapSize) : K[ee] = Ne ? x.image[ee].image : x.image[ee], K[ee] = Ue(x, K[ee]);
      const qe = K[0], Ge = m(qe) || o, Ae = s.convert(x.format, x.colorSpace), _e = s.convert(x.type), he = E(x.internalFormat, Ae, _e, x.colorSpace), Ie = o && x.isVideoTexture !== !0, Xe = Z.__version === void 0 || Q === !0;
      let it = C(x, qe, Ge);
      z(r.TEXTURE_CUBE_MAP, x, Ge);
      let Be;
      if (Me) {
        Ie && Xe && t.texStorage2D(r.TEXTURE_CUBE_MAP, it, he, qe.width, qe.height);
        for (let ee = 0; ee < 6; ee++) {
          Be = K[ee].mipmaps;
          for (let R = 0; R < Be.length; R++) {
            const ie = Be[R];
            x.format !== kt ? Ae !== null ? Ie ? t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + ee, R, 0, 0, ie.width, ie.height, Ae, ie.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + ee, R, he, ie.width, ie.height, 0, ie.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ie ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + ee, R, 0, 0, ie.width, ie.height, Ae, _e, ie.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + ee, R, he, ie.width, ie.height, 0, Ae, _e, ie.data);
          }
        }
      } else {
        Be = x.mipmaps, Ie && Xe && (Be.length > 0 && it++, t.texStorage2D(r.TEXTURE_CUBE_MAP, it, he, K[0].width, K[0].height));
        for (let ee = 0; ee < 6; ee++)
          if (Ne) {
            Ie ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + ee, 0, 0, 0, K[ee].width, K[ee].height, Ae, _e, K[ee].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + ee, 0, he, K[ee].width, K[ee].height, 0, Ae, _e, K[ee].data);
            for (let R = 0; R < Be.length; R++) {
              const se = Be[R].image[ee].image;
              Ie ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + ee, R + 1, 0, 0, se.width, se.height, Ae, _e, se.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + ee, R + 1, he, se.width, se.height, 0, Ae, _e, se.data);
            }
          } else {
            Ie ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + ee, 0, 0, 0, Ae, _e, K[ee]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + ee, 0, he, Ae, _e, K[ee]);
            for (let R = 0; R < Be.length; R++) {
              const ie = Be[R];
              Ie ? t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + ee, R + 1, 0, 0, Ae, _e, ie.image[ee]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + ee, R + 1, he, Ae, _e, ie.image[ee]);
            }
          }
      }
      v(x, Ge) && b(r.TEXTURE_CUBE_MAP), Z.__version = Y.version, x.onUpdate && x.onUpdate(x);
    }
    y.__version = x.version;
  }
  function me(y, x, N, Q, Y, Z) {
    const fe = s.convert(N.format, N.colorSpace), re = s.convert(N.type), le = E(N.internalFormat, fe, re, N.colorSpace);
    if (!n.get(x).__hasExternalTextures) {
      const Ne = Math.max(1, x.width >> Z), K = Math.max(1, x.height >> Z);
      Y === r.TEXTURE_3D || Y === r.TEXTURE_2D_ARRAY ? t.texImage3D(Y, Z, le, Ne, K, x.depth, 0, fe, re, null) : t.texImage2D(Y, Z, le, Ne, K, 0, fe, re, null);
    }
    t.bindFramebuffer(r.FRAMEBUFFER, y), ue(x) ? c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, Q, Y, n.get(N).__webglTexture, 0, we(x)) : (Y === r.TEXTURE_2D || Y >= r.TEXTURE_CUBE_MAP_POSITIVE_X && Y <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, Q, Y, n.get(N).__webglTexture, Z), t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function Ce(y, x, N) {
    if (r.bindRenderbuffer(r.RENDERBUFFER, y), x.depthBuffer && !x.stencilBuffer) {
      let Q = o === !0 ? r.DEPTH_COMPONENT24 : r.DEPTH_COMPONENT16;
      if (N || ue(x)) {
        const Y = x.depthTexture;
        Y && Y.isDepthTexture && (Y.type === hn ? Q = r.DEPTH_COMPONENT32F : Y.type === yn && (Q = r.DEPTH_COMPONENT24));
        const Z = we(x);
        ue(x) ? c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Z, Q, x.width, x.height) : r.renderbufferStorageMultisample(r.RENDERBUFFER, Z, Q, x.width, x.height);
      } else
        r.renderbufferStorage(r.RENDERBUFFER, Q, x.width, x.height);
      r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.RENDERBUFFER, y);
    } else if (x.depthBuffer && x.stencilBuffer) {
      const Q = we(x);
      N && ue(x) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Q, r.DEPTH24_STENCIL8, x.width, x.height) : ue(x) ? c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Q, r.DEPTH24_STENCIL8, x.width, x.height) : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, x.width, x.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, y);
    } else {
      const Q = x.isWebGLMultipleRenderTargets === !0 ? x.texture : [x.texture];
      for (let Y = 0; Y < Q.length; Y++) {
        const Z = Q[Y], fe = s.convert(Z.format, Z.colorSpace), re = s.convert(Z.type), le = E(Z.internalFormat, fe, re, Z.colorSpace), Me = we(x);
        N && ue(x) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Me, le, x.width, x.height) : ue(x) ? c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Me, le, x.width, x.height) : r.renderbufferStorage(r.RENDERBUFFER, le, x.width, x.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function Pe(y, x) {
    if (x && x.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(r.FRAMEBUFFER, y), !(x.depthTexture && x.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(x.depthTexture).__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = !0), H(x.depthTexture, 0);
    const Q = n.get(x.depthTexture).__webglTexture, Y = we(x);
    if (x.depthTexture.format === Gn)
      ue(x) ? c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, Q, 0, Y) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, Q, 0);
    else if (x.depthTexture.format === Ci)
      ue(x) ? c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, Q, 0, Y) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, Q, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Se(y) {
    const x = n.get(y), N = y.isWebGLCubeRenderTarget === !0;
    if (y.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (N) throw new Error("target.depthTexture not supported in Cube render targets");
      Pe(x.__webglFramebuffer, y);
    } else if (N) {
      x.__webglDepthbuffer = [];
      for (let Q = 0; Q < 6; Q++)
        t.bindFramebuffer(r.FRAMEBUFFER, x.__webglFramebuffer[Q]), x.__webglDepthbuffer[Q] = r.createRenderbuffer(), Ce(x.__webglDepthbuffer[Q], y, !1);
    } else
      t.bindFramebuffer(r.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer = r.createRenderbuffer(), Ce(x.__webglDepthbuffer, y, !1);
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function Ve(y, x, N) {
    const Q = n.get(y);
    x !== void 0 && me(Q.__webglFramebuffer, y, y.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), N !== void 0 && Se(y);
  }
  function D(y) {
    const x = y.texture, N = n.get(y), Q = n.get(x);
    y.addEventListener("dispose", G), y.isWebGLMultipleRenderTargets !== !0 && (Q.__webglTexture === void 0 && (Q.__webglTexture = r.createTexture()), Q.__version = x.version, a.memory.textures++);
    const Y = y.isWebGLCubeRenderTarget === !0, Z = y.isWebGLMultipleRenderTargets === !0, fe = m(y) || o;
    if (Y) {
      N.__webglFramebuffer = [];
      for (let re = 0; re < 6; re++)
        if (o && x.mipmaps && x.mipmaps.length > 0) {
          N.__webglFramebuffer[re] = [];
          for (let le = 0; le < x.mipmaps.length; le++)
            N.__webglFramebuffer[re][le] = r.createFramebuffer();
        } else
          N.__webglFramebuffer[re] = r.createFramebuffer();
    } else {
      if (o && x.mipmaps && x.mipmaps.length > 0) {
        N.__webglFramebuffer = [];
        for (let re = 0; re < x.mipmaps.length; re++)
          N.__webglFramebuffer[re] = r.createFramebuffer();
      } else
        N.__webglFramebuffer = r.createFramebuffer();
      if (Z)
        if (i.drawBuffers) {
          const re = y.texture;
          for (let le = 0, Me = re.length; le < Me; le++) {
            const Ne = n.get(re[le]);
            Ne.__webglTexture === void 0 && (Ne.__webglTexture = r.createTexture(), a.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (o && y.samples > 0 && ue(y) === !1) {
        const re = Z ? x : [x];
        N.__webglMultisampledFramebuffer = r.createFramebuffer(), N.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, N.__webglMultisampledFramebuffer);
        for (let le = 0; le < re.length; le++) {
          const Me = re[le];
          N.__webglColorRenderbuffer[le] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, N.__webglColorRenderbuffer[le]);
          const Ne = s.convert(Me.format, Me.colorSpace), K = s.convert(Me.type), qe = E(Me.internalFormat, Ne, K, Me.colorSpace, y.isXRRenderTarget === !0), Ge = we(y);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, Ge, qe, y.width, y.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + le, r.RENDERBUFFER, N.__webglColorRenderbuffer[le]);
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null), y.depthBuffer && (N.__webglDepthRenderbuffer = r.createRenderbuffer(), Ce(N.__webglDepthRenderbuffer, y, !0)), t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (Y) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, Q.__webglTexture), z(r.TEXTURE_CUBE_MAP, x, fe);
      for (let re = 0; re < 6; re++)
        if (o && x.mipmaps && x.mipmaps.length > 0)
          for (let le = 0; le < x.mipmaps.length; le++)
            me(N.__webglFramebuffer[re][le], y, x, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + re, le);
        else
          me(N.__webglFramebuffer[re], y, x, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0);
      v(x, fe) && b(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Z) {
      const re = y.texture;
      for (let le = 0, Me = re.length; le < Me; le++) {
        const Ne = re[le], K = n.get(Ne);
        t.bindTexture(r.TEXTURE_2D, K.__webglTexture), z(r.TEXTURE_2D, Ne, fe), me(N.__webglFramebuffer, y, Ne, r.COLOR_ATTACHMENT0 + le, r.TEXTURE_2D, 0), v(Ne, fe) && b(r.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let re = r.TEXTURE_2D;
      if ((y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (o ? re = y.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(re, Q.__webglTexture), z(re, x, fe), o && x.mipmaps && x.mipmaps.length > 0)
        for (let le = 0; le < x.mipmaps.length; le++)
          me(N.__webglFramebuffer[le], y, x, r.COLOR_ATTACHMENT0, re, le);
      else
        me(N.__webglFramebuffer, y, x, r.COLOR_ATTACHMENT0, re, 0);
      v(x, fe) && b(re), t.unbindTexture();
    }
    y.depthBuffer && Se(y);
  }
  function yt(y) {
    const x = m(y) || o, N = y.isWebGLMultipleRenderTargets === !0 ? y.texture : [y.texture];
    for (let Q = 0, Y = N.length; Q < Y; Q++) {
      const Z = N[Q];
      if (v(Z, x)) {
        const fe = y.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D, re = n.get(Z).__webglTexture;
        t.bindTexture(fe, re), b(fe), t.unbindTexture();
      }
    }
  }
  function be(y) {
    if (o && y.samples > 0 && ue(y) === !1) {
      const x = y.isWebGLMultipleRenderTargets ? y.texture : [y.texture], N = y.width, Q = y.height;
      let Y = r.COLOR_BUFFER_BIT;
      const Z = [], fe = y.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, re = n.get(y), le = y.isWebGLMultipleRenderTargets === !0;
      if (le)
        for (let Me = 0; Me < x.length; Me++)
          t.bindFramebuffer(r.FRAMEBUFFER, re.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Me, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, re.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Me, r.TEXTURE_2D, null, 0);
      t.bindFramebuffer(r.READ_FRAMEBUFFER, re.__webglMultisampledFramebuffer), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, re.__webglFramebuffer);
      for (let Me = 0; Me < x.length; Me++) {
        Z.push(r.COLOR_ATTACHMENT0 + Me), y.depthBuffer && Z.push(fe);
        const Ne = re.__ignoreDepthValues !== void 0 ? re.__ignoreDepthValues : !1;
        if (Ne === !1 && (y.depthBuffer && (Y |= r.DEPTH_BUFFER_BIT), y.stencilBuffer && (Y |= r.STENCIL_BUFFER_BIT)), le && r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, re.__webglColorRenderbuffer[Me]), Ne === !0 && (r.invalidateFramebuffer(r.READ_FRAMEBUFFER, [fe]), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [fe])), le) {
          const K = n.get(x[Me]).__webglTexture;
          r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, K, 0);
        }
        r.blitFramebuffer(0, 0, N, Q, 0, 0, N, Q, Y, r.NEAREST), l && r.invalidateFramebuffer(r.READ_FRAMEBUFFER, Z);
      }
      if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), le)
        for (let Me = 0; Me < x.length; Me++) {
          t.bindFramebuffer(r.FRAMEBUFFER, re.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Me, r.RENDERBUFFER, re.__webglColorRenderbuffer[Me]);
          const Ne = n.get(x[Me]).__webglTexture;
          t.bindFramebuffer(r.FRAMEBUFFER, re.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Me, r.TEXTURE_2D, Ne, 0);
        }
      t.bindFramebuffer(r.DRAW_FRAMEBUFFER, re.__webglMultisampledFramebuffer);
    }
  }
  function we(y) {
    return Math.min(i.maxSamples, y.samples);
  }
  function ue(y) {
    const x = n.get(y);
    return o && y.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && x.__useRenderToTexture !== !1;
  }
  function tt(y) {
    const x = a.render.frame;
    h.get(y) !== x && (h.set(y, x), y.update());
  }
  function Ue(y, x) {
    const N = y.colorSpace, Q = y.format, Y = y.type;
    return y.isCompressedTexture === !0 || y.isVideoTexture === !0 || y.format === ra || N !== _t && N !== zt && (je.getTransfer(N) === $e ? o === !1 ? e.has("EXT_sRGB") === !0 && Q === kt ? (y.format = ra, y.minFilter = Ct, y.generateMipmaps = !1) : x = qc.sRGBToLinear(x) : (Q !== kt || Y !== Rn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", N)), x;
  }
  this.allocateTextureUnit = P, this.resetTextureUnits = ne, this.setTexture2D = H, this.setTexture2DArray = j, this.setTexture3D = W, this.setTextureCube = V, this.rebindTextures = Ve, this.setupRenderTarget = D, this.updateRenderTargetMipmap = yt, this.updateMultisampleRenderTarget = be, this.setupDepthRenderbuffer = Se, this.setupFrameBufferTexture = me, this.useMultisampledRTT = ue;
}
function jm(r, e, t) {
  const n = t.isWebGL2;
  function i(s, a = zt) {
    let o;
    const c = je.getTransfer(a);
    if (s === Rn) return r.UNSIGNED_BYTE;
    if (s === Nc) return r.UNSIGNED_SHORT_4_4_4_4;
    if (s === Fc) return r.UNSIGNED_SHORT_5_5_5_1;
    if (s === ch) return r.BYTE;
    if (s === lh) return r.SHORT;
    if (s === ma) return r.UNSIGNED_SHORT;
    if (s === Uc) return r.INT;
    if (s === yn) return r.UNSIGNED_INT;
    if (s === hn) return r.FLOAT;
    if (s === ss)
      return n ? r.HALF_FLOAT : (o = e.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null);
    if (s === hh) return r.ALPHA;
    if (s === kt) return r.RGBA;
    if (s === dh) return r.LUMINANCE;
    if (s === uh) return r.LUMINANCE_ALPHA;
    if (s === Gn) return r.DEPTH_COMPONENT;
    if (s === Ci) return r.DEPTH_STENCIL;
    if (s === ra)
      return o = e.get("EXT_sRGB"), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (s === fh) return r.RED;
    if (s === Oc) return r.RED_INTEGER;
    if (s === ph) return r.RG;
    if (s === Bc) return r.RG_INTEGER;
    if (s === kc) return r.RGBA_INTEGER;
    if (s === fr || s === pr || s === mr || s === gr)
      if (c === $e)
        if (o = e.get("WEBGL_compressed_texture_s3tc_srgb"), o !== null) {
          if (s === fr) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === pr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === mr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === gr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (o = e.get("WEBGL_compressed_texture_s3tc"), o !== null) {
        if (s === fr) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === pr) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === mr) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === gr) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === Ha || s === Va || s === Wa || s === ja)
      if (o = e.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
        if (s === Ha) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === Va) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === Wa) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === ja) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === zc)
      return o = e.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === Xa || s === qa)
      if (o = e.get("WEBGL_compressed_texture_etc"), o !== null) {
        if (s === Xa) return c === $e ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (s === qa) return c === $e ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === Ka || s === Ya || s === Ja || s === Qa || s === Za || s === $a || s === eo || s === to || s === no || s === io || s === so || s === ro || s === ao || s === oo)
      if (o = e.get("WEBGL_compressed_texture_astc"), o !== null) {
        if (s === Ka) return c === $e ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Ya) return c === $e ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === Ja) return c === $e ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Qa) return c === $e ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Za) return c === $e ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === $a) return c === $e ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === eo) return c === $e ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === to) return c === $e ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === no) return c === $e ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === io) return c === $e ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === so) return c === $e ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === ro) return c === $e ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === ao) return c === $e ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === oo) return c === $e ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === _r || s === co || s === lo)
      if (o = e.get("EXT_texture_compression_bptc"), o !== null) {
        if (s === _r) return c === $e ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (s === co) return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (s === lo) return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (s === mh || s === ho || s === uo || s === fo)
      if (o = e.get("EXT_texture_compression_rgtc"), o !== null) {
        if (s === _r) return o.COMPRESSED_RED_RGTC1_EXT;
        if (s === ho) return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === uo) return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === fo) return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return s === zn ? n ? r.UNSIGNED_INT_24_8 : (o = e.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null) : r[s] !== void 0 ? r[s] : null;
  }
  return { convert: i };
}
class Xm extends ct {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class En extends et {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const qm = { type: "move" };
class Gr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new En(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new En(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new L(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new L()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new En(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new L(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new L()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, s = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const _ of e.hand.values()) {
          const m = t.getJointPose(_, n), f = this._getHandJoint(l, _);
          m !== null && (f.matrix.fromArray(m.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), f.matrixWorldNeedsUpdate = !0, f.jointRadius = m.radius), f.visible = m !== null;
        }
        const h = l.joints["index-finger-tip"], d = l.joints["thumb-tip"], u = h.position.distanceTo(d.position), p = 0.02, g = 5e-3;
        l.inputState.pinching && u > p + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && u <= p - g && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(qm)));
    }
    return o !== null && (o.visible = i !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new En();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Km extends Yn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, a = null, o = "local-floor", c = 1, l = null, h = null, d = null, u = null, p = null, g = null;
    const _ = t.getContextAttributes();
    let m = null, f = null;
    const v = [], b = [], E = new Te();
    let C = null;
    const T = new ct();
    T.layers.enable(1), T.viewport = new Ye();
    const w = new ct();
    w.layers.enable(2), w.viewport = new Ye();
    const G = [T, w], M = new Xm();
    M.layers.enable(1), M.layers.enable(2);
    let A = null, k = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(z) {
      let q = v[z];
      return q === void 0 && (q = new Gr(), v[z] = q), q.getTargetRaySpace();
    }, this.getControllerGrip = function(z) {
      let q = v[z];
      return q === void 0 && (q = new Gr(), v[z] = q), q.getGripSpace();
    }, this.getHand = function(z) {
      let q = v[z];
      return q === void 0 && (q = new Gr(), v[z] = q), q.getHandSpace();
    };
    function X(z) {
      const q = b.indexOf(z.inputSource);
      if (q === -1)
        return;
      const ae = v[q];
      ae !== void 0 && (ae.update(z.inputSource, z.frame, l || a), ae.dispatchEvent({ type: z.type, data: z.inputSource }));
    }
    function ne() {
      i.removeEventListener("select", X), i.removeEventListener("selectstart", X), i.removeEventListener("selectend", X), i.removeEventListener("squeeze", X), i.removeEventListener("squeezestart", X), i.removeEventListener("squeezeend", X), i.removeEventListener("end", ne), i.removeEventListener("inputsourceschange", P);
      for (let z = 0; z < v.length; z++) {
        const q = b[z];
        q !== null && (b[z] = null, v[z].disconnect(q));
      }
      A = null, k = null, e.setRenderTarget(m), p = null, u = null, d = null, i = null, f = null, ce.stop(), n.isPresenting = !1, e.setPixelRatio(C), e.setSize(E.width, E.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(z) {
      s = z, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(z) {
      o = z, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(z) {
      l = z;
    }, this.getBaseLayer = function() {
      return u !== null ? u : p;
    }, this.getBinding = function() {
      return d;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(z) {
      if (i = z, i !== null) {
        if (m = e.getRenderTarget(), i.addEventListener("select", X), i.addEventListener("selectstart", X), i.addEventListener("selectend", X), i.addEventListener("squeeze", X), i.addEventListener("squeezestart", X), i.addEventListener("squeezeend", X), i.addEventListener("end", ne), i.addEventListener("inputsourceschange", P), _.xrCompatible !== !0 && await t.makeXRCompatible(), C = e.getPixelRatio(), e.getSize(E), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const q = {
            antialias: i.renderState.layers === void 0 ? _.antialias : !0,
            alpha: !0,
            depth: _.depth,
            stencil: _.stencil,
            framebufferScaleFactor: s
          };
          p = new XRWebGLLayer(i, t, q), i.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), f = new jn(
            p.framebufferWidth,
            p.framebufferHeight,
            {
              format: kt,
              type: Rn,
              colorSpace: e.outputColorSpace,
              stencilBuffer: _.stencil
            }
          );
        } else {
          let q = null, ae = null, ge = null;
          _.depth && (ge = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, q = _.stencil ? Ci : Gn, ae = _.stencil ? zn : yn);
          const me = {
            colorFormat: t.RGBA8,
            depthFormat: ge,
            scaleFactor: s
          };
          d = new XRWebGLBinding(i, t), u = d.createProjectionLayer(me), i.updateRenderState({ layers: [u] }), e.setPixelRatio(1), e.setSize(u.textureWidth, u.textureHeight, !1), f = new jn(
            u.textureWidth,
            u.textureHeight,
            {
              format: kt,
              type: Rn,
              depthTexture: new sl(u.textureWidth, u.textureHeight, ae, void 0, void 0, void 0, void 0, void 0, void 0, q),
              stencilBuffer: _.stencil,
              colorSpace: e.outputColorSpace,
              samples: _.antialias ? 4 : 0
            }
          );
          const Ce = e.properties.get(f);
          Ce.__ignoreDepthValues = u.ignoreDepthValues;
        }
        f.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await i.requestReferenceSpace(o), ce.setContext(i), ce.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    };
    function P(z) {
      for (let q = 0; q < z.removed.length; q++) {
        const ae = z.removed[q], ge = b.indexOf(ae);
        ge >= 0 && (b[ge] = null, v[ge].disconnect(ae));
      }
      for (let q = 0; q < z.added.length; q++) {
        const ae = z.added[q];
        let ge = b.indexOf(ae);
        if (ge === -1) {
          for (let Ce = 0; Ce < v.length; Ce++)
            if (Ce >= b.length) {
              b.push(ae), ge = Ce;
              break;
            } else if (b[Ce] === null) {
              b[Ce] = ae, ge = Ce;
              break;
            }
          if (ge === -1) break;
        }
        const me = v[ge];
        me && me.connect(ae);
      }
    }
    const O = new L(), H = new L();
    function j(z, q, ae) {
      O.setFromMatrixPosition(q.matrixWorld), H.setFromMatrixPosition(ae.matrixWorld);
      const ge = O.distanceTo(H), me = q.projectionMatrix.elements, Ce = ae.projectionMatrix.elements, Pe = me[14] / (me[10] - 1), Se = me[14] / (me[10] + 1), Ve = (me[9] + 1) / me[5], D = (me[9] - 1) / me[5], yt = (me[8] - 1) / me[0], be = (Ce[8] + 1) / Ce[0], we = Pe * yt, ue = Pe * be, tt = ge / (-yt + be), Ue = tt * -yt;
      q.matrixWorld.decompose(z.position, z.quaternion, z.scale), z.translateX(Ue), z.translateZ(tt), z.matrixWorld.compose(z.position, z.quaternion, z.scale), z.matrixWorldInverse.copy(z.matrixWorld).invert();
      const y = Pe + tt, x = Se + tt, N = we - Ue, Q = ue + (ge - Ue), Y = Ve * Se / x * y, Z = D * Se / x * y;
      z.projectionMatrix.makePerspective(N, Q, Y, Z, y, x), z.projectionMatrixInverse.copy(z.projectionMatrix).invert();
    }
    function W(z, q) {
      q === null ? z.matrixWorld.copy(z.matrix) : z.matrixWorld.multiplyMatrices(q.matrixWorld, z.matrix), z.matrixWorldInverse.copy(z.matrixWorld).invert();
    }
    this.updateCamera = function(z) {
      if (i === null) return;
      M.near = w.near = T.near = z.near, M.far = w.far = T.far = z.far, (A !== M.near || k !== M.far) && (i.updateRenderState({
        depthNear: M.near,
        depthFar: M.far
      }), A = M.near, k = M.far);
      const q = z.parent, ae = M.cameras;
      W(M, q);
      for (let ge = 0; ge < ae.length; ge++)
        W(ae[ge], q);
      ae.length === 2 ? j(M, T, w) : M.projectionMatrix.copy(T.projectionMatrix), V(z, M, q);
    };
    function V(z, q, ae) {
      ae === null ? z.matrix.copy(q.matrixWorld) : (z.matrix.copy(ae.matrixWorld), z.matrix.invert(), z.matrix.multiply(q.matrixWorld)), z.matrix.decompose(z.position, z.quaternion, z.scale), z.updateMatrixWorld(!0), z.projectionMatrix.copy(q.projectionMatrix), z.projectionMatrixInverse.copy(q.projectionMatrixInverse), z.isPerspectiveCamera && (z.fov = Pi * 2 * Math.atan(1 / z.projectionMatrix.elements[5]), z.zoom = 1);
    }
    this.getCamera = function() {
      return M;
    }, this.getFoveation = function() {
      if (!(u === null && p === null))
        return c;
    }, this.setFoveation = function(z) {
      c = z, u !== null && (u.fixedFoveation = z), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = z);
    };
    let J = null;
    function $(z, q) {
      if (h = q.getViewerPose(l || a), g = q, h !== null) {
        const ae = h.views;
        p !== null && (e.setRenderTargetFramebuffer(f, p.framebuffer), e.setRenderTarget(f));
        let ge = !1;
        ae.length !== M.cameras.length && (M.cameras.length = 0, ge = !0);
        for (let me = 0; me < ae.length; me++) {
          const Ce = ae[me];
          let Pe = null;
          if (p !== null)
            Pe = p.getViewport(Ce);
          else {
            const Ve = d.getViewSubImage(u, Ce);
            Pe = Ve.viewport, me === 0 && (e.setRenderTargetTextures(
              f,
              Ve.colorTexture,
              u.ignoreDepthValues ? void 0 : Ve.depthStencilTexture
            ), e.setRenderTarget(f));
          }
          let Se = G[me];
          Se === void 0 && (Se = new ct(), Se.layers.enable(me), Se.viewport = new Ye(), G[me] = Se), Se.matrix.fromArray(Ce.transform.matrix), Se.matrix.decompose(Se.position, Se.quaternion, Se.scale), Se.projectionMatrix.fromArray(Ce.projectionMatrix), Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(), Se.viewport.set(Pe.x, Pe.y, Pe.width, Pe.height), me === 0 && (M.matrix.copy(Se.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), ge === !0 && M.cameras.push(Se);
        }
      }
      for (let ae = 0; ae < v.length; ae++) {
        const ge = b[ae], me = v[ae];
        ge !== null && me !== void 0 && me.update(ge, q, l || a);
      }
      J && J(z, q), q.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: q }), g = null;
    }
    const ce = new il();
    ce.setAnimationLoop($), this.setAnimationLoop = function(z) {
      J = z;
    }, this.dispose = function() {
    };
  }
}
function Ym(r, e) {
  function t(m, f) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), f.value.copy(m.matrix);
  }
  function n(m, f) {
    f.color.getRGB(m.fogColor.value, el(r)), f.isFog ? (m.fogNear.value = f.near, m.fogFar.value = f.far) : f.isFogExp2 && (m.fogDensity.value = f.density);
  }
  function i(m, f, v, b, E) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? s(m, f) : f.isMeshToonMaterial ? (s(m, f), d(m, f)) : f.isMeshPhongMaterial ? (s(m, f), h(m, f)) : f.isMeshStandardMaterial ? (s(m, f), u(m, f), f.isMeshPhysicalMaterial && p(m, f, E)) : f.isMeshMatcapMaterial ? (s(m, f), g(m, f)) : f.isMeshDepthMaterial ? s(m, f) : f.isMeshDistanceMaterial ? (s(m, f), _(m, f)) : f.isMeshNormalMaterial ? s(m, f) : f.isLineBasicMaterial ? (a(m, f), f.isLineDashedMaterial && o(m, f)) : f.isPointsMaterial ? c(m, f, v, b) : f.isSpriteMaterial ? l(m, f) : f.isShadowMaterial ? (m.color.value.copy(f.color), m.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function s(m, f) {
    m.opacity.value = f.opacity, f.color && m.diffuse.value.copy(f.color), f.emissive && m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.bumpMap && (m.bumpMap.value = f.bumpMap, t(f.bumpMap, m.bumpMapTransform), m.bumpScale.value = f.bumpScale, f.side === Lt && (m.bumpScale.value *= -1)), f.normalMap && (m.normalMap.value = f.normalMap, t(f.normalMap, m.normalMapTransform), m.normalScale.value.copy(f.normalScale), f.side === Lt && m.normalScale.value.negate()), f.displacementMap && (m.displacementMap.value = f.displacementMap, t(f.displacementMap, m.displacementMapTransform), m.displacementScale.value = f.displacementScale, m.displacementBias.value = f.displacementBias), f.emissiveMap && (m.emissiveMap.value = f.emissiveMap, t(f.emissiveMap, m.emissiveMapTransform)), f.specularMap && (m.specularMap.value = f.specularMap, t(f.specularMap, m.specularMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    const v = e.get(f).envMap;
    if (v && (m.envMap.value = v, m.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = f.reflectivity, m.ior.value = f.ior, m.refractionRatio.value = f.refractionRatio), f.lightMap) {
      m.lightMap.value = f.lightMap;
      const b = r._useLegacyLights === !0 ? Math.PI : 1;
      m.lightMapIntensity.value = f.lightMapIntensity * b, t(f.lightMap, m.lightMapTransform);
    }
    f.aoMap && (m.aoMap.value = f.aoMap, m.aoMapIntensity.value = f.aoMapIntensity, t(f.aoMap, m.aoMapTransform));
  }
  function a(m, f) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, f.map && (m.map.value = f.map, t(f.map, m.mapTransform));
  }
  function o(m, f) {
    m.dashSize.value = f.dashSize, m.totalSize.value = f.dashSize + f.gapSize, m.scale.value = f.scale;
  }
  function c(m, f, v, b) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.size.value = f.size * v, m.scale.value = b * 0.5, f.map && (m.map.value = f.map, t(f.map, m.uvTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
  }
  function l(m, f) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.rotation.value = f.rotation, f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
  }
  function h(m, f) {
    m.specular.value.copy(f.specular), m.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function d(m, f) {
    f.gradientMap && (m.gradientMap.value = f.gradientMap);
  }
  function u(m, f) {
    m.metalness.value = f.metalness, f.metalnessMap && (m.metalnessMap.value = f.metalnessMap, t(f.metalnessMap, m.metalnessMapTransform)), m.roughness.value = f.roughness, f.roughnessMap && (m.roughnessMap.value = f.roughnessMap, t(f.roughnessMap, m.roughnessMapTransform)), e.get(f).envMap && (m.envMapIntensity.value = f.envMapIntensity);
  }
  function p(m, f, v) {
    m.ior.value = f.ior, f.sheen > 0 && (m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), m.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (m.sheenColorMap.value = f.sheenColorMap, t(f.sheenColorMap, m.sheenColorMapTransform)), f.sheenRoughnessMap && (m.sheenRoughnessMap.value = f.sheenRoughnessMap, t(f.sheenRoughnessMap, m.sheenRoughnessMapTransform))), f.clearcoat > 0 && (m.clearcoat.value = f.clearcoat, m.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (m.clearcoatMap.value = f.clearcoatMap, t(f.clearcoatMap, m.clearcoatMapTransform)), f.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, t(f.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (m.clearcoatNormalMap.value = f.clearcoatNormalMap, t(f.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === Lt && m.clearcoatNormalScale.value.negate())), f.iridescence > 0 && (m.iridescence.value = f.iridescence, m.iridescenceIOR.value = f.iridescenceIOR, m.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (m.iridescenceMap.value = f.iridescenceMap, t(f.iridescenceMap, m.iridescenceMapTransform)), f.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = f.iridescenceThicknessMap, t(f.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), f.transmission > 0 && (m.transmission.value = f.transmission, m.transmissionSamplerMap.value = v.texture, m.transmissionSamplerSize.value.set(v.width, v.height), f.transmissionMap && (m.transmissionMap.value = f.transmissionMap, t(f.transmissionMap, m.transmissionMapTransform)), m.thickness.value = f.thickness, f.thicknessMap && (m.thicknessMap.value = f.thicknessMap, t(f.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = f.attenuationDistance, m.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (m.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (m.anisotropyMap.value = f.anisotropyMap, t(f.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = f.specularIntensity, m.specularColor.value.copy(f.specularColor), f.specularColorMap && (m.specularColorMap.value = f.specularColorMap, t(f.specularColorMap, m.specularColorMapTransform)), f.specularIntensityMap && (m.specularIntensityMap.value = f.specularIntensityMap, t(f.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, f) {
    f.matcap && (m.matcap.value = f.matcap);
  }
  function _(m, f) {
    const v = e.get(f).light;
    m.referencePosition.value.setFromMatrixPosition(v.matrixWorld), m.nearDistance.value = v.shadow.camera.near, m.farDistance.value = v.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function Jm(r, e, t, n) {
  let i = {}, s = {}, a = [];
  const o = t.isWebGL2 ? r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function c(v, b) {
    const E = b.program;
    n.uniformBlockBinding(v, E);
  }
  function l(v, b) {
    let E = i[v.id];
    E === void 0 && (g(v), E = h(v), i[v.id] = E, v.addEventListener("dispose", m));
    const C = b.program;
    n.updateUBOMapping(v, C);
    const T = e.render.frame;
    s[v.id] !== T && (u(v), s[v.id] = T);
  }
  function h(v) {
    const b = d();
    v.__bindingPointIndex = b;
    const E = r.createBuffer(), C = v.__size, T = v.usage;
    return r.bindBuffer(r.UNIFORM_BUFFER, E), r.bufferData(r.UNIFORM_BUFFER, C, T), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, b, E), E;
  }
  function d() {
    for (let v = 0; v < o; v++)
      if (a.indexOf(v) === -1)
        return a.push(v), v;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function u(v) {
    const b = i[v.id], E = v.uniforms, C = v.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, b);
    for (let T = 0, w = E.length; T < w; T++) {
      const G = Array.isArray(E[T]) ? E[T] : [E[T]];
      for (let M = 0, A = G.length; M < A; M++) {
        const k = G[M];
        if (p(k, T, M, C) === !0) {
          const X = k.__offset, ne = Array.isArray(k.value) ? k.value : [k.value];
          let P = 0;
          for (let O = 0; O < ne.length; O++) {
            const H = ne[O], j = _(H);
            typeof H == "number" || typeof H == "boolean" ? (k.__data[0] = H, r.bufferSubData(r.UNIFORM_BUFFER, X + P, k.__data)) : H.isMatrix3 ? (k.__data[0] = H.elements[0], k.__data[1] = H.elements[1], k.__data[2] = H.elements[2], k.__data[3] = 0, k.__data[4] = H.elements[3], k.__data[5] = H.elements[4], k.__data[6] = H.elements[5], k.__data[7] = 0, k.__data[8] = H.elements[6], k.__data[9] = H.elements[7], k.__data[10] = H.elements[8], k.__data[11] = 0) : (H.toArray(k.__data, P), P += j.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          r.bufferSubData(r.UNIFORM_BUFFER, X, k.__data);
        }
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function p(v, b, E, C) {
    const T = v.value, w = b + "_" + E;
    if (C[w] === void 0)
      return typeof T == "number" || typeof T == "boolean" ? C[w] = T : C[w] = T.clone(), !0;
    {
      const G = C[w];
      if (typeof T == "number" || typeof T == "boolean") {
        if (G !== T)
          return C[w] = T, !0;
      } else if (G.equals(T) === !1)
        return G.copy(T), !0;
    }
    return !1;
  }
  function g(v) {
    const b = v.uniforms;
    let E = 0;
    const C = 16;
    for (let w = 0, G = b.length; w < G; w++) {
      const M = Array.isArray(b[w]) ? b[w] : [b[w]];
      for (let A = 0, k = M.length; A < k; A++) {
        const X = M[A], ne = Array.isArray(X.value) ? X.value : [X.value];
        for (let P = 0, O = ne.length; P < O; P++) {
          const H = ne[P], j = _(H), W = E % C;
          W !== 0 && C - W < j.boundary && (E += C - W), X.__data = new Float32Array(j.storage / Float32Array.BYTES_PER_ELEMENT), X.__offset = E, E += j.storage;
        }
      }
    }
    const T = E % C;
    return T > 0 && (E += C - T), v.__size = E, v.__cache = {}, this;
  }
  function _(v) {
    const b = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof v == "number" || typeof v == "boolean" ? (b.boundary = 4, b.storage = 4) : v.isVector2 ? (b.boundary = 8, b.storage = 8) : v.isVector3 || v.isColor ? (b.boundary = 16, b.storage = 12) : v.isVector4 ? (b.boundary = 16, b.storage = 16) : v.isMatrix3 ? (b.boundary = 48, b.storage = 48) : v.isMatrix4 ? (b.boundary = 64, b.storage = 64) : v.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", v), b;
  }
  function m(v) {
    const b = v.target;
    b.removeEventListener("dispose", m);
    const E = a.indexOf(b.__bindingPointIndex);
    a.splice(E, 1), r.deleteBuffer(i[b.id]), delete i[b.id], delete s[b.id];
  }
  function f() {
    for (const v in i)
      r.deleteBuffer(i[v]);
    a = [], i = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: f
  };
}
class Qn {
  constructor(e = {}) {
    const {
      canvas: t = jh(),
      context: n = null,
      depth: i = !0,
      stencil: s = !0,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: d = !1
    } = e;
    this.isWebGLRenderer = !0;
    let u;
    n !== null ? u = n.getContextAttributes().alpha : u = a;
    const p = new Uint32Array(4), g = new Int32Array(4);
    let _ = null, m = null;
    const f = [], v = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = rt, this._useLegacyLights = !1, this.toneMapping = wn, this.toneMappingExposure = 1;
    const b = this;
    let E = !1, C = 0, T = 0, w = null, G = -1, M = null;
    const A = new Ye(), k = new Ye();
    let X = null;
    const ne = new de(0);
    let P = 0, O = t.width, H = t.height, j = 1, W = null, V = null;
    const J = new Ye(0, 0, O, H), $ = new Ye(0, 0, O, H);
    let ce = !1;
    const z = new xa();
    let q = !1, ae = !1, ge = null;
    const me = new Oe(), Ce = new Te(), Pe = new L(), Se = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function Ve() {
      return w === null ? j : 1;
    }
    let D = n;
    function yt(S, I) {
      for (let F = 0; F < S.length; F++) {
        const B = S[F], U = t.getContext(B, I);
        if (U !== null) return U;
      }
      return null;
    }
    try {
      const S = {
        alpha: !0,
        depth: i,
        stencil: s,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: d
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${pa}`), t.addEventListener("webglcontextlost", ee, !1), t.addEventListener("webglcontextrestored", R, !1), t.addEventListener("webglcontextcreationerror", ie, !1), D === null) {
        const I = ["webgl2", "webgl", "experimental-webgl"];
        if (b.isWebGL1Renderer === !0 && I.shift(), D = yt(I, S), D === null)
          throw yt(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && D instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), D.getShaderPrecisionFormat === void 0 && (D.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (S) {
      throw console.error("THREE.WebGLRenderer: " + S.message), S;
    }
    let be, we, ue, tt, Ue, y, x, N, Q, Y, Z, fe, re, le, Me, Ne, K, qe, Ge, Ae, _e, he, Ie, Xe;
    function it() {
      be = new ap(D), we = new ep(D, be, e), be.init(we), he = new jm(D, be, we), ue = new Vm(D, be, we), tt = new lp(D), Ue = new Cm(), y = new Wm(D, be, ue, Ue, we, he, tt), x = new np(b), N = new rp(b), Q = new gd(D, we), Ie = new Zf(D, be, Q, we), Y = new op(D, Q, tt, Ie), Z = new fp(D, Y, Q, tt), Ge = new up(D, we, y), Ne = new tp(Ue), fe = new Rm(b, x, N, be, we, Ie, Ne), re = new Ym(b, Ue), le = new Pm(), Me = new Om(be, we), qe = new Qf(b, x, N, ue, Z, u, c), K = new Hm(b, Z, we), Xe = new Jm(D, tt, we, ue), Ae = new $f(D, be, tt, we), _e = new cp(D, be, tt, we), tt.programs = fe.programs, b.capabilities = we, b.extensions = be, b.properties = Ue, b.renderLists = le, b.shadowMap = K, b.state = ue, b.info = tt;
    }
    it();
    const Be = new Km(b, D);
    this.xr = Be, this.getContext = function() {
      return D;
    }, this.getContextAttributes = function() {
      return D.getContextAttributes();
    }, this.forceContextLoss = function() {
      const S = be.get("WEBGL_lose_context");
      S && S.loseContext();
    }, this.forceContextRestore = function() {
      const S = be.get("WEBGL_lose_context");
      S && S.restoreContext();
    }, this.getPixelRatio = function() {
      return j;
    }, this.setPixelRatio = function(S) {
      S !== void 0 && (j = S, this.setSize(O, H, !1));
    }, this.getSize = function(S) {
      return S.set(O, H);
    }, this.setSize = function(S, I, F = !0) {
      if (Be.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      O = S, H = I, t.width = Math.floor(S * j), t.height = Math.floor(I * j), F === !0 && (t.style.width = S + "px", t.style.height = I + "px"), this.setViewport(0, 0, S, I);
    }, this.getDrawingBufferSize = function(S) {
      return S.set(O * j, H * j).floor();
    }, this.setDrawingBufferSize = function(S, I, F) {
      O = S, H = I, j = F, t.width = Math.floor(S * F), t.height = Math.floor(I * F), this.setViewport(0, 0, S, I);
    }, this.getCurrentViewport = function(S) {
      return S.copy(A);
    }, this.getViewport = function(S) {
      return S.copy(J);
    }, this.setViewport = function(S, I, F, B) {
      S.isVector4 ? J.set(S.x, S.y, S.z, S.w) : J.set(S, I, F, B), ue.viewport(A.copy(J).multiplyScalar(j).floor());
    }, this.getScissor = function(S) {
      return S.copy($);
    }, this.setScissor = function(S, I, F, B) {
      S.isVector4 ? $.set(S.x, S.y, S.z, S.w) : $.set(S, I, F, B), ue.scissor(k.copy($).multiplyScalar(j).floor());
    }, this.getScissorTest = function() {
      return ce;
    }, this.setScissorTest = function(S) {
      ue.setScissorTest(ce = S);
    }, this.setOpaqueSort = function(S) {
      W = S;
    }, this.setTransparentSort = function(S) {
      V = S;
    }, this.getClearColor = function(S) {
      return S.copy(qe.getClearColor());
    }, this.setClearColor = function() {
      qe.setClearColor.apply(qe, arguments);
    }, this.getClearAlpha = function() {
      return qe.getClearAlpha();
    }, this.setClearAlpha = function() {
      qe.setClearAlpha.apply(qe, arguments);
    }, this.clear = function(S = !0, I = !0, F = !0) {
      let B = 0;
      if (S) {
        let U = !1;
        if (w !== null) {
          const oe = w.texture.format;
          U = oe === kc || oe === Bc || oe === Oc;
        }
        if (U) {
          const oe = w.texture.type, pe = oe === Rn || oe === yn || oe === ma || oe === zn || oe === Nc || oe === Fc, ve = qe.getClearColor(), Ee = qe.getClearAlpha(), Fe = ve.r, Re = ve.g, Le = ve.b;
          pe ? (p[0] = Fe, p[1] = Re, p[2] = Le, p[3] = Ee, D.clearBufferuiv(D.COLOR, 0, p)) : (g[0] = Fe, g[1] = Re, g[2] = Le, g[3] = Ee, D.clearBufferiv(D.COLOR, 0, g));
        } else
          B |= D.COLOR_BUFFER_BIT;
      }
      I && (B |= D.DEPTH_BUFFER_BIT), F && (B |= D.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), D.clear(B);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", ee, !1), t.removeEventListener("webglcontextrestored", R, !1), t.removeEventListener("webglcontextcreationerror", ie, !1), le.dispose(), Me.dispose(), Ue.dispose(), x.dispose(), N.dispose(), Z.dispose(), Ie.dispose(), Xe.dispose(), fe.dispose(), Be.dispose(), Be.removeEventListener("sessionstart", Et), Be.removeEventListener("sessionend", Ze), ge && (ge.dispose(), ge = null), At.stop();
    };
    function ee(S) {
      S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), E = !0;
    }
    function R() {
      console.log("THREE.WebGLRenderer: Context Restored."), E = !1;
      const S = tt.autoReset, I = K.enabled, F = K.autoUpdate, B = K.needsUpdate, U = K.type;
      it(), tt.autoReset = S, K.enabled = I, K.autoUpdate = F, K.needsUpdate = B, K.type = U;
    }
    function ie(S) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage);
    }
    function se(S) {
      const I = S.target;
      I.removeEventListener("dispose", se), ye(I);
    }
    function ye(S) {
      xe(S), Ue.remove(S);
    }
    function xe(S) {
      const I = Ue.get(S).programs;
      I !== void 0 && (I.forEach(function(F) {
        fe.releaseProgram(F);
      }), S.isShaderMaterial && fe.releaseShaderCache(S));
    }
    this.renderBufferDirect = function(S, I, F, B, U, oe) {
      I === null && (I = Se);
      const pe = U.isMesh && U.matrixWorld.determinant() < 0, ve = yl(S, I, F, B, U);
      ue.setMaterial(B, pe);
      let Ee = F.index, Fe = 1;
      if (B.wireframe === !0) {
        if (Ee = Y.getWireframeAttribute(F), Ee === void 0) return;
        Fe = 2;
      }
      const Re = F.drawRange, Le = F.attributes.position;
      let at = Re.start * Fe, Pt = (Re.start + Re.count) * Fe;
      oe !== null && (at = Math.max(at, oe.start * Fe), Pt = Math.min(Pt, (oe.start + oe.count) * Fe)), Ee !== null ? (at = Math.max(at, 0), Pt = Math.min(Pt, Ee.count)) : Le != null && (at = Math.max(at, 0), Pt = Math.min(Pt, Le.count));
      const ut = Pt - at;
      if (ut < 0 || ut === 1 / 0) return;
      Ie.setup(U, B, ve, F, Ee);
      let tn, nt = Ae;
      if (Ee !== null && (tn = Q.get(Ee), nt = _e, nt.setIndex(tn)), U.isMesh)
        B.wireframe === !0 ? (ue.setLineWidth(B.wireframeLinewidth * Ve()), nt.setMode(D.LINES)) : nt.setMode(D.TRIANGLES);
      else if (U.isLine) {
        let ke = B.linewidth;
        ke === void 0 && (ke = 1), ue.setLineWidth(ke * Ve()), U.isLineSegments ? nt.setMode(D.LINES) : U.isLineLoop ? nt.setMode(D.LINE_LOOP) : nt.setMode(D.LINE_STRIP);
      } else U.isPoints ? nt.setMode(D.POINTS) : U.isSprite && nt.setMode(D.TRIANGLES);
      if (U.isBatchedMesh)
        nt.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
      else if (U.isInstancedMesh)
        nt.renderInstances(at, ut, U.count);
      else if (F.isInstancedBufferGeometry) {
        const ke = F._maxInstanceCount !== void 0 ? F._maxInstanceCount : 1 / 0, lr = Math.min(F.instanceCount, ke);
        nt.renderInstances(at, ut, lr);
      } else
        nt.render(at, ut);
    };
    function Je(S, I, F) {
      S.transparent === !0 && S.side === jt && S.forceSinglePass === !1 ? (S.side = Lt, S.needsUpdate = !0, us(S, I, F), S.side = pn, S.needsUpdate = !0, us(S, I, F), S.side = jt) : us(S, I, F);
    }
    this.compile = function(S, I, F = null) {
      F === null && (F = S), m = Me.get(F), m.init(), v.push(m), F.traverseVisible(function(U) {
        U.isLight && U.layers.test(I.layers) && (m.pushLight(U), U.castShadow && m.pushShadow(U));
      }), S !== F && S.traverseVisible(function(U) {
        U.isLight && U.layers.test(I.layers) && (m.pushLight(U), U.castShadow && m.pushShadow(U));
      }), m.setupLights(b._useLegacyLights);
      const B = /* @__PURE__ */ new Set();
      return S.traverse(function(U) {
        const oe = U.material;
        if (oe)
          if (Array.isArray(oe))
            for (let pe = 0; pe < oe.length; pe++) {
              const ve = oe[pe];
              Je(ve, F, U), B.add(ve);
            }
          else
            Je(oe, F, U), B.add(oe);
      }), v.pop(), m = null, B;
    }, this.compileAsync = function(S, I, F = null) {
      const B = this.compile(S, I, F);
      return new Promise((U) => {
        function oe() {
          if (B.forEach(function(pe) {
            Ue.get(pe).currentProgram.isReady() && B.delete(pe);
          }), B.size === 0) {
            U(S);
            return;
          }
          setTimeout(oe, 10);
        }
        be.get("KHR_parallel_shader_compile") !== null ? oe() : setTimeout(oe, 10);
      });
    };
    let Qe = null;
    function dt(S) {
      Qe && Qe(S);
    }
    function Et() {
      At.stop();
    }
    function Ze() {
      At.start();
    }
    const At = new il();
    At.setAnimationLoop(dt), typeof self < "u" && At.setContext(self), this.setAnimationLoop = function(S) {
      Qe = S, Be.setAnimationLoop(S), S === null ? At.stop() : At.start();
    }, Be.addEventListener("sessionstart", Et), Be.addEventListener("sessionend", Ze), this.render = function(S, I) {
      if (I !== void 0 && I.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (E === !0) return;
      S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(), Be.enabled === !0 && Be.isPresenting === !0 && (Be.cameraAutoUpdate === !0 && Be.updateCamera(I), I = Be.getCamera()), S.isScene === !0 && S.onBeforeRender(b, S, I, w), m = Me.get(S, v.length), m.init(), v.push(m), me.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), z.setFromProjectionMatrix(me), ae = this.localClippingEnabled, q = Ne.init(this.clippingPlanes, ae), _ = le.get(S, f.length), _.init(), f.push(_), Yt(S, I, 0, b.sortObjects), _.finish(), b.sortObjects === !0 && _.sort(W, V), this.info.render.frame++, q === !0 && Ne.beginShadows();
      const F = m.state.shadowsArray;
      if (K.render(F, S, I), q === !0 && Ne.endShadows(), this.info.autoReset === !0 && this.info.reset(), qe.render(_, S), m.setupLights(b._useLegacyLights), I.isArrayCamera) {
        const B = I.cameras;
        for (let U = 0, oe = B.length; U < oe; U++) {
          const pe = B[U];
          La(_, S, pe, pe.viewport);
        }
      } else
        La(_, S, I);
      w !== null && (y.updateMultisampleRenderTarget(w), y.updateRenderTargetMipmap(w)), S.isScene === !0 && S.onAfterRender(b, S, I), Ie.resetDefaultState(), G = -1, M = null, v.pop(), v.length > 0 ? m = v[v.length - 1] : m = null, f.pop(), f.length > 0 ? _ = f[f.length - 1] : _ = null;
    };
    function Yt(S, I, F, B) {
      if (S.visible === !1) return;
      if (S.layers.test(I.layers)) {
        if (S.isGroup)
          F = S.renderOrder;
        else if (S.isLOD)
          S.autoUpdate === !0 && S.update(I);
        else if (S.isLight)
          m.pushLight(S), S.castShadow && m.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || z.intersectsSprite(S)) {
            B && Pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);
            const pe = Z.update(S), ve = S.material;
            ve.visible && _.push(S, pe, ve, F, Pe.z, null);
          }
        } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || z.intersectsObject(S))) {
          const pe = Z.update(S), ve = S.material;
          if (B && (S.boundingSphere !== void 0 ? (S.boundingSphere === null && S.computeBoundingSphere(), Pe.copy(S.boundingSphere.center)) : (pe.boundingSphere === null && pe.computeBoundingSphere(), Pe.copy(pe.boundingSphere.center)), Pe.applyMatrix4(S.matrixWorld).applyMatrix4(me)), Array.isArray(ve)) {
            const Ee = pe.groups;
            for (let Fe = 0, Re = Ee.length; Fe < Re; Fe++) {
              const Le = Ee[Fe], at = ve[Le.materialIndex];
              at && at.visible && _.push(S, pe, at, F, Pe.z, Le);
            }
          } else ve.visible && _.push(S, pe, ve, F, Pe.z, null);
        }
      }
      const oe = S.children;
      for (let pe = 0, ve = oe.length; pe < ve; pe++)
        Yt(oe[pe], I, F, B);
    }
    function La(S, I, F, B) {
      const U = S.opaque, oe = S.transmissive, pe = S.transparent;
      m.setupLightsView(F), q === !0 && Ne.setGlobalState(b.clippingPlanes, F), oe.length > 0 && Sl(U, oe, I, F), B && ue.viewport(A.copy(B)), U.length > 0 && ds(U, I, F), oe.length > 0 && ds(oe, I, F), pe.length > 0 && ds(pe, I, F), ue.buffers.depth.setTest(!0), ue.buffers.depth.setMask(!0), ue.buffers.color.setMask(!0), ue.setPolygonOffset(!1);
    }
    function Sl(S, I, F, B) {
      if ((F.isScene === !0 ? F.overrideMaterial : null) !== null)
        return;
      const oe = we.isWebGL2;
      ge === null && (ge = new jn(1, 1, {
        generateMipmaps: !0,
        type: be.has("EXT_color_buffer_half_float") ? ss : Rn,
        minFilter: Wn,
        samples: oe ? 4 : 0
      })), b.getDrawingBufferSize(Ce), oe ? ge.setSize(Ce.x, Ce.y) : ge.setSize($s(Ce.x), $s(Ce.y));
      const pe = b.getRenderTarget();
      b.setRenderTarget(ge), b.getClearColor(ne), P = b.getClearAlpha(), P < 1 && b.setClearColor(16777215, 0.5), b.clear();
      const ve = b.toneMapping;
      b.toneMapping = wn, ds(S, F, B), y.updateMultisampleRenderTarget(ge), y.updateRenderTargetMipmap(ge);
      let Ee = !1;
      for (let Fe = 0, Re = I.length; Fe < Re; Fe++) {
        const Le = I[Fe], at = Le.object, Pt = Le.geometry, ut = Le.material, tn = Le.group;
        if (ut.side === jt && at.layers.test(B.layers)) {
          const nt = ut.side;
          ut.side = Lt, ut.needsUpdate = !0, Pa(at, F, B, Pt, ut, tn), ut.side = nt, ut.needsUpdate = !0, Ee = !0;
        }
      }
      Ee === !0 && (y.updateMultisampleRenderTarget(ge), y.updateRenderTargetMipmap(ge)), b.setRenderTarget(pe), b.setClearColor(ne, P), b.toneMapping = ve;
    }
    function ds(S, I, F) {
      const B = I.isScene === !0 ? I.overrideMaterial : null;
      for (let U = 0, oe = S.length; U < oe; U++) {
        const pe = S[U], ve = pe.object, Ee = pe.geometry, Fe = B === null ? pe.material : B, Re = pe.group;
        ve.layers.test(F.layers) && Pa(ve, I, F, Ee, Fe, Re);
      }
    }
    function Pa(S, I, F, B, U, oe) {
      S.onBeforeRender(b, I, F, B, U, oe), S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), U.onBeforeRender(b, I, F, B, S, oe), U.transparent === !0 && U.side === jt && U.forceSinglePass === !1 ? (U.side = Lt, U.needsUpdate = !0, b.renderBufferDirect(F, I, B, U, S, oe), U.side = pn, U.needsUpdate = !0, b.renderBufferDirect(F, I, B, U, S, oe), U.side = jt) : b.renderBufferDirect(F, I, B, U, S, oe), S.onAfterRender(b, I, F, B, U, oe);
    }
    function us(S, I, F) {
      I.isScene !== !0 && (I = Se);
      const B = Ue.get(S), U = m.state.lights, oe = m.state.shadowsArray, pe = U.state.version, ve = fe.getParameters(S, U.state, oe, I, F), Ee = fe.getProgramCacheKey(ve);
      let Fe = B.programs;
      B.environment = S.isMeshStandardMaterial ? I.environment : null, B.fog = I.fog, B.envMap = (S.isMeshStandardMaterial ? N : x).get(S.envMap || B.environment), Fe === void 0 && (S.addEventListener("dispose", se), Fe = /* @__PURE__ */ new Map(), B.programs = Fe);
      let Re = Fe.get(Ee);
      if (Re !== void 0) {
        if (B.currentProgram === Re && B.lightsStateVersion === pe)
          return Da(S, ve), Re;
      } else
        ve.uniforms = fe.getUniforms(S), S.onBuild(F, ve, b), S.onBeforeCompile(ve, b), Re = fe.acquireProgram(ve, Ee), Fe.set(Ee, Re), B.uniforms = ve.uniforms;
      const Le = B.uniforms;
      return (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (Le.clippingPlanes = Ne.uniform), Da(S, ve), B.needsLights = Al(S), B.lightsStateVersion = pe, B.needsLights && (Le.ambientLightColor.value = U.state.ambient, Le.lightProbe.value = U.state.probe, Le.directionalLights.value = U.state.directional, Le.directionalLightShadows.value = U.state.directionalShadow, Le.spotLights.value = U.state.spot, Le.spotLightShadows.value = U.state.spotShadow, Le.rectAreaLights.value = U.state.rectArea, Le.ltc_1.value = U.state.rectAreaLTC1, Le.ltc_2.value = U.state.rectAreaLTC2, Le.pointLights.value = U.state.point, Le.pointLightShadows.value = U.state.pointShadow, Le.hemisphereLights.value = U.state.hemi, Le.directionalShadowMap.value = U.state.directionalShadowMap, Le.directionalShadowMatrix.value = U.state.directionalShadowMatrix, Le.spotShadowMap.value = U.state.spotShadowMap, Le.spotLightMatrix.value = U.state.spotLightMatrix, Le.spotLightMap.value = U.state.spotLightMap, Le.pointShadowMap.value = U.state.pointShadowMap, Le.pointShadowMatrix.value = U.state.pointShadowMatrix), B.currentProgram = Re, B.uniformsList = null, Re;
    }
    function Ia(S) {
      if (S.uniformsList === null) {
        const I = S.currentProgram.getUniforms();
        S.uniformsList = js.seqWithValue(I.seq, S.uniforms);
      }
      return S.uniformsList;
    }
    function Da(S, I) {
      const F = Ue.get(S);
      F.outputColorSpace = I.outputColorSpace, F.batching = I.batching, F.instancing = I.instancing, F.instancingColor = I.instancingColor, F.skinning = I.skinning, F.morphTargets = I.morphTargets, F.morphNormals = I.morphNormals, F.morphColors = I.morphColors, F.morphTargetsCount = I.morphTargetsCount, F.numClippingPlanes = I.numClippingPlanes, F.numIntersection = I.numClipIntersection, F.vertexAlphas = I.vertexAlphas, F.vertexTangents = I.vertexTangents, F.toneMapping = I.toneMapping;
    }
    function yl(S, I, F, B, U) {
      I.isScene !== !0 && (I = Se), y.resetTextureUnits();
      const oe = I.fog, pe = B.isMeshStandardMaterial ? I.environment : null, ve = w === null ? b.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace : _t, Ee = (B.isMeshStandardMaterial ? N : x).get(B.envMap || pe), Fe = B.vertexColors === !0 && !!F.attributes.color && F.attributes.color.itemSize === 4, Re = !!F.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), Le = !!F.morphAttributes.position, at = !!F.morphAttributes.normal, Pt = !!F.morphAttributes.color;
      let ut = wn;
      B.toneMapped && (w === null || w.isXRRenderTarget === !0) && (ut = b.toneMapping);
      const tn = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color, nt = tn !== void 0 ? tn.length : 0, ke = Ue.get(B), lr = m.state.lights;
      if (q === !0 && (ae === !0 || S !== M)) {
        const Ut = S === M && B.id === G;
        Ne.setState(B, S, Ut);
      }
      let st = !1;
      B.version === ke.__version ? (ke.needsLights && ke.lightsStateVersion !== lr.state.version || ke.outputColorSpace !== ve || U.isBatchedMesh && ke.batching === !1 || !U.isBatchedMesh && ke.batching === !0 || U.isInstancedMesh && ke.instancing === !1 || !U.isInstancedMesh && ke.instancing === !0 || U.isSkinnedMesh && ke.skinning === !1 || !U.isSkinnedMesh && ke.skinning === !0 || U.isInstancedMesh && ke.instancingColor === !0 && U.instanceColor === null || U.isInstancedMesh && ke.instancingColor === !1 && U.instanceColor !== null || ke.envMap !== Ee || B.fog === !0 && ke.fog !== oe || ke.numClippingPlanes !== void 0 && (ke.numClippingPlanes !== Ne.numPlanes || ke.numIntersection !== Ne.numIntersection) || ke.vertexAlphas !== Fe || ke.vertexTangents !== Re || ke.morphTargets !== Le || ke.morphNormals !== at || ke.morphColors !== Pt || ke.toneMapping !== ut || we.isWebGL2 === !0 && ke.morphTargetsCount !== nt) && (st = !0) : (st = !0, ke.__version = B.version);
      let Cn = ke.currentProgram;
      st === !0 && (Cn = us(B, I, U));
      let Ua = !1, Hi = !1, hr = !1;
      const bt = Cn.getUniforms(), Ln = ke.uniforms;
      if (ue.useProgram(Cn.program) && (Ua = !0, Hi = !0, hr = !0), B.id !== G && (G = B.id, Hi = !0), Ua || M !== S) {
        bt.setValue(D, "projectionMatrix", S.projectionMatrix), bt.setValue(D, "viewMatrix", S.matrixWorldInverse);
        const Ut = bt.map.cameraPosition;
        Ut !== void 0 && Ut.setValue(D, Pe.setFromMatrixPosition(S.matrixWorld)), we.logarithmicDepthBuffer && bt.setValue(
          D,
          "logDepthBufFC",
          2 / (Math.log(S.far + 1) / Math.LN2)
        ), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && bt.setValue(D, "isOrthographic", S.isOrthographicCamera === !0), M !== S && (M = S, Hi = !0, hr = !0);
      }
      if (U.isSkinnedMesh) {
        bt.setOptional(D, U, "bindMatrix"), bt.setOptional(D, U, "bindMatrixInverse");
        const Ut = U.skeleton;
        Ut && (we.floatVertexTextures ? (Ut.boneTexture === null && Ut.computeBoneTexture(), bt.setValue(D, "boneTexture", Ut.boneTexture, y)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      U.isBatchedMesh && (bt.setOptional(D, U, "batchingTexture"), bt.setValue(D, "batchingTexture", U._matricesTexture, y));
      const dr = F.morphAttributes;
      if ((dr.position !== void 0 || dr.normal !== void 0 || dr.color !== void 0 && we.isWebGL2 === !0) && Ge.update(U, F, Cn), (Hi || ke.receiveShadow !== U.receiveShadow) && (ke.receiveShadow = U.receiveShadow, bt.setValue(D, "receiveShadow", U.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (Ln.envMap.value = Ee, Ln.flipEnvMap.value = Ee.isCubeTexture && Ee.isRenderTargetTexture === !1 ? -1 : 1), Hi && (bt.setValue(D, "toneMappingExposure", b.toneMappingExposure), ke.needsLights && El(Ln, hr), oe && B.fog === !0 && re.refreshFogUniforms(Ln, oe), re.refreshMaterialUniforms(Ln, B, j, H, ge), js.upload(D, Ia(ke), Ln, y)), B.isShaderMaterial && B.uniformsNeedUpdate === !0 && (js.upload(D, Ia(ke), Ln, y), B.uniformsNeedUpdate = !1), B.isSpriteMaterial && bt.setValue(D, "center", U.center), bt.setValue(D, "modelViewMatrix", U.modelViewMatrix), bt.setValue(D, "normalMatrix", U.normalMatrix), bt.setValue(D, "modelMatrix", U.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) {
        const Ut = B.uniformsGroups;
        for (let ur = 0, Tl = Ut.length; ur < Tl; ur++)
          if (we.isWebGL2) {
            const Na = Ut[ur];
            Xe.update(Na, Cn), Xe.bind(Na, Cn);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return Cn;
    }
    function El(S, I) {
      S.ambientLightColor.needsUpdate = I, S.lightProbe.needsUpdate = I, S.directionalLights.needsUpdate = I, S.directionalLightShadows.needsUpdate = I, S.pointLights.needsUpdate = I, S.pointLightShadows.needsUpdate = I, S.spotLights.needsUpdate = I, S.spotLightShadows.needsUpdate = I, S.rectAreaLights.needsUpdate = I, S.hemisphereLights.needsUpdate = I;
    }
    function Al(S) {
      return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return C;
    }, this.getActiveMipmapLevel = function() {
      return T;
    }, this.getRenderTarget = function() {
      return w;
    }, this.setRenderTargetTextures = function(S, I, F) {
      Ue.get(S.texture).__webglTexture = I, Ue.get(S.depthTexture).__webglTexture = F;
      const B = Ue.get(S);
      B.__hasExternalTextures = !0, B.__hasExternalTextures && (B.__autoAllocateDepthBuffer = F === void 0, B.__autoAllocateDepthBuffer || be.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), B.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(S, I) {
      const F = Ue.get(S);
      F.__webglFramebuffer = I, F.__useDefaultFramebuffer = I === void 0;
    }, this.setRenderTarget = function(S, I = 0, F = 0) {
      w = S, C = I, T = F;
      let B = !0, U = null, oe = !1, pe = !1;
      if (S) {
        const Ee = Ue.get(S);
        Ee.__useDefaultFramebuffer !== void 0 ? (ue.bindFramebuffer(D.FRAMEBUFFER, null), B = !1) : Ee.__webglFramebuffer === void 0 ? y.setupRenderTarget(S) : Ee.__hasExternalTextures && y.rebindTextures(S, Ue.get(S.texture).__webglTexture, Ue.get(S.depthTexture).__webglTexture);
        const Fe = S.texture;
        (Fe.isData3DTexture || Fe.isDataArrayTexture || Fe.isCompressedArrayTexture) && (pe = !0);
        const Re = Ue.get(S).__webglFramebuffer;
        S.isWebGLCubeRenderTarget ? (Array.isArray(Re[I]) ? U = Re[I][F] : U = Re[I], oe = !0) : we.isWebGL2 && S.samples > 0 && y.useMultisampledRTT(S) === !1 ? U = Ue.get(S).__webglMultisampledFramebuffer : Array.isArray(Re) ? U = Re[F] : U = Re, A.copy(S.viewport), k.copy(S.scissor), X = S.scissorTest;
      } else
        A.copy(J).multiplyScalar(j).floor(), k.copy($).multiplyScalar(j).floor(), X = ce;
      if (ue.bindFramebuffer(D.FRAMEBUFFER, U) && we.drawBuffers && B && ue.drawBuffers(S, U), ue.viewport(A), ue.scissor(k), ue.setScissorTest(X), oe) {
        const Ee = Ue.get(S.texture);
        D.framebufferTexture2D(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_CUBE_MAP_POSITIVE_X + I, Ee.__webglTexture, F);
      } else if (pe) {
        const Ee = Ue.get(S.texture), Fe = I || 0;
        D.framebufferTextureLayer(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0, Ee.__webglTexture, F || 0, Fe);
      }
      G = -1;
    }, this.readRenderTargetPixels = function(S, I, F, B, U, oe, pe) {
      if (!(S && S.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ve = Ue.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && pe !== void 0 && (ve = ve[pe]), ve) {
        ue.bindFramebuffer(D.FRAMEBUFFER, ve);
        try {
          const Ee = S.texture, Fe = Ee.format, Re = Ee.type;
          if (Fe !== kt && he.convert(Fe) !== D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const Le = Re === ss && (be.has("EXT_color_buffer_half_float") || we.isWebGL2 && be.has("EXT_color_buffer_float"));
          if (Re !== Rn && he.convert(Re) !== D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(Re === hn && (we.isWebGL2 || be.has("OES_texture_float") || be.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !Le) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          I >= 0 && I <= S.width - B && F >= 0 && F <= S.height - U && D.readPixels(I, F, B, U, he.convert(Fe), he.convert(Re), oe);
        } finally {
          const Ee = w !== null ? Ue.get(w).__webglFramebuffer : null;
          ue.bindFramebuffer(D.FRAMEBUFFER, Ee);
        }
      }
    }, this.copyFramebufferToTexture = function(S, I, F = 0) {
      const B = Math.pow(2, -F), U = Math.floor(I.image.width * B), oe = Math.floor(I.image.height * B);
      y.setTexture2D(I, 0), D.copyTexSubImage2D(D.TEXTURE_2D, F, 0, 0, S.x, S.y, U, oe), ue.unbindTexture();
    }, this.copyTextureToTexture = function(S, I, F, B = 0) {
      const U = I.image.width, oe = I.image.height, pe = he.convert(F.format), ve = he.convert(F.type);
      y.setTexture2D(F, 0), D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL, F.flipY), D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL, F.premultiplyAlpha), D.pixelStorei(D.UNPACK_ALIGNMENT, F.unpackAlignment), I.isDataTexture ? D.texSubImage2D(D.TEXTURE_2D, B, S.x, S.y, U, oe, pe, ve, I.image.data) : I.isCompressedTexture ? D.compressedTexSubImage2D(D.TEXTURE_2D, B, S.x, S.y, I.mipmaps[0].width, I.mipmaps[0].height, pe, I.mipmaps[0].data) : D.texSubImage2D(D.TEXTURE_2D, B, S.x, S.y, pe, ve, I.image), B === 0 && F.generateMipmaps && D.generateMipmap(D.TEXTURE_2D), ue.unbindTexture();
    }, this.copyTextureToTexture3D = function(S, I, F, B, U = 0) {
      if (b.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const oe = S.max.x - S.min.x + 1, pe = S.max.y - S.min.y + 1, ve = S.max.z - S.min.z + 1, Ee = he.convert(B.format), Fe = he.convert(B.type);
      let Re;
      if (B.isData3DTexture)
        y.setTexture3D(B, 0), Re = D.TEXTURE_3D;
      else if (B.isDataArrayTexture || B.isCompressedArrayTexture)
        y.setTexture2DArray(B, 0), Re = D.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL, B.flipY), D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL, B.premultiplyAlpha), D.pixelStorei(D.UNPACK_ALIGNMENT, B.unpackAlignment);
      const Le = D.getParameter(D.UNPACK_ROW_LENGTH), at = D.getParameter(D.UNPACK_IMAGE_HEIGHT), Pt = D.getParameter(D.UNPACK_SKIP_PIXELS), ut = D.getParameter(D.UNPACK_SKIP_ROWS), tn = D.getParameter(D.UNPACK_SKIP_IMAGES), nt = F.isCompressedTexture ? F.mipmaps[U] : F.image;
      D.pixelStorei(D.UNPACK_ROW_LENGTH, nt.width), D.pixelStorei(D.UNPACK_IMAGE_HEIGHT, nt.height), D.pixelStorei(D.UNPACK_SKIP_PIXELS, S.min.x), D.pixelStorei(D.UNPACK_SKIP_ROWS, S.min.y), D.pixelStorei(D.UNPACK_SKIP_IMAGES, S.min.z), F.isDataTexture || F.isData3DTexture ? D.texSubImage3D(Re, U, I.x, I.y, I.z, oe, pe, ve, Ee, Fe, nt.data) : F.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), D.compressedTexSubImage3D(Re, U, I.x, I.y, I.z, oe, pe, ve, Ee, nt.data)) : D.texSubImage3D(Re, U, I.x, I.y, I.z, oe, pe, ve, Ee, Fe, nt), D.pixelStorei(D.UNPACK_ROW_LENGTH, Le), D.pixelStorei(D.UNPACK_IMAGE_HEIGHT, at), D.pixelStorei(D.UNPACK_SKIP_PIXELS, Pt), D.pixelStorei(D.UNPACK_SKIP_ROWS, ut), D.pixelStorei(D.UNPACK_SKIP_IMAGES, tn), U === 0 && B.generateMipmaps && D.generateMipmap(Re), ue.unbindTexture();
    }, this.initTexture = function(S) {
      S.isCubeTexture ? y.setTextureCube(S, 0) : S.isData3DTexture ? y.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? y.setTexture2DArray(S, 0) : y.setTexture2D(S, 0), ue.unbindTexture();
    }, this.resetState = function() {
      C = 0, T = 0, w = null, ue.reset(), Ie.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return dn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === _a ? "display-p3" : "srgb", t.unpackColorSpace = je.workingColorSpace === nr ? "display-p3" : "srgb";
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === rt ? Hn : Hc;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === Hn ? rt : _t;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class Qm extends Qn {
}
Qm.prototype.isWebGL1Renderer = !0;
class Oi extends et {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
  }
}
class hl {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = sa, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.version = 0, this.uuid = Xt();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Xt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Xt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Tt = /* @__PURE__ */ new L();
class os {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      Tt.fromBufferAttribute(this, t), Tt.applyMatrix4(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Tt.fromBufferAttribute(this, t), Tt.applyNormalMatrix(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Tt.fromBufferAttribute(this, t), Tt.transformDirection(e), this.setXYZ(t, Tt.x, Tt.y, Tt.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Ke(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ke(t, this.array), n = Ke(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ke(t, this.array), n = Ke(n, this.array), i = Ke(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ke(t, this.array), n = Ke(n, this.array), i = Ke(i, this.array), s = Ke(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return new gt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new os(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
class dl extends Kt {
  constructor(e) {
    super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new de(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let pi;
const qi = /* @__PURE__ */ new L(), mi = /* @__PURE__ */ new L(), gi = /* @__PURE__ */ new L(), _i = /* @__PURE__ */ new Te(), Ki = /* @__PURE__ */ new Te(), ul = /* @__PURE__ */ new Oe(), Ns = /* @__PURE__ */ new L(), Yi = /* @__PURE__ */ new L(), Fs = /* @__PURE__ */ new L(), tc = /* @__PURE__ */ new Te(), Hr = /* @__PURE__ */ new Te(), nc = /* @__PURE__ */ new Te();
class Zm extends et {
  constructor(e = new dl()) {
    if (super(), this.isSprite = !0, this.type = "Sprite", pi === void 0) {
      pi = new Rt();
      const t = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]), n = new hl(t, 5);
      pi.setIndex([0, 1, 2, 0, 2, 3]), pi.setAttribute("position", new os(n, 3, 0, !1)), pi.setAttribute("uv", new os(n, 2, 3, !1));
    }
    this.geometry = pi, this.material = e, this.center = new Te(0.5, 0.5);
  }
  raycast(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), mi.setFromMatrixScale(this.matrixWorld), ul.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), gi.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && mi.multiplyScalar(-gi.z);
    const n = this.material.rotation;
    let i, s;
    n !== 0 && (s = Math.cos(n), i = Math.sin(n));
    const a = this.center;
    Os(Ns.set(-0.5, -0.5, 0), gi, a, mi, i, s), Os(Yi.set(0.5, -0.5, 0), gi, a, mi, i, s), Os(Fs.set(0.5, 0.5, 0), gi, a, mi, i, s), tc.set(0, 0), Hr.set(1, 0), nc.set(1, 1);
    let o = e.ray.intersectTriangle(Ns, Yi, Fs, !1, qi);
    if (o === null && (Os(Yi.set(-0.5, 0.5, 0), gi, a, mi, i, s), Hr.set(0, 1), o = e.ray.intersectTriangle(Ns, Fs, Yi, !1, qi), o === null))
      return;
    const c = e.ray.origin.distanceTo(qi);
    c < e.near || c > e.far || t.push({
      distance: c,
      point: qi.clone(),
      uv: Ot.getInterpolation(qi, Ns, Yi, Fs, tc, Hr, nc, new Te()),
      face: null,
      object: this
    });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function Os(r, e, t, n, i, s) {
  _i.subVectors(r, t).addScalar(0.5).multiply(n), i !== void 0 ? (Ki.x = s * _i.x - i * _i.y, Ki.y = i * _i.x + s * _i.y) : Ki.copy(_i), r.copy(e), r.x += Ki.x, r.y += Ki.y, r.applyMatrix4(ul);
}
const ic = /* @__PURE__ */ new L(), sc = /* @__PURE__ */ new Ye(), rc = /* @__PURE__ */ new Ye(), $m = /* @__PURE__ */ new L(), ac = /* @__PURE__ */ new Oe(), Bs = /* @__PURE__ */ new L(), Vr = /* @__PURE__ */ new $t(), oc = /* @__PURE__ */ new Oe(), Wr = /* @__PURE__ */ new ir();
class eg extends St {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = Ga, this.bindMatrix = new Oe(), this.bindMatrixInverse = new Oe(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Zt()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, Bs), this.boundingBox.expandByPoint(Bs);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new $t()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, Bs), this.boundingSphere.expandByPoint(Bs);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Vr.copy(this.boundingSphere), Vr.applyMatrix4(i), e.ray.intersectsSphere(Vr) !== !1 && (oc.copy(i).invert(), Wr.copy(e.ray).applyMatrix4(oc), !(this.boundingBox !== null && Wr.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, Wr)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new Ye(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === Ga ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === oh ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    sc.fromBufferAttribute(i.attributes.skinIndex, e), rc.fromBufferAttribute(i.attributes.skinWeight, e), ic.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const a = rc.getComponent(s);
      if (a !== 0) {
        const o = sc.getComponent(s);
        ac.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector($m.copy(ic).applyMatrix4(ac), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
  boneTransform(e, t) {
    return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."), this.applyBoneTransform(e, t);
  }
}
class fl extends et {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class tg extends mt {
  constructor(e = null, t = 1, n = 1, i, s, a, o, c, l = pt, h = pt, d, u) {
    super(null, a, o, c, l, h, i, s, d, u), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const cc = /* @__PURE__ */ new Oe(), ng = /* @__PURE__ */ new Oe();
class Ma {
  constructor(e = [], t = []) {
    this.uuid = Xt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Oe());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Oe();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let s = 0, a = e.length; s < a; s++) {
      const o = e[s] ? e[s].matrixWorld : ng;
      cc.multiplyMatrices(o, t[s]), cc.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new Ma(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new tg(t, e, e, kt, hn);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const s = e.bones[n];
      let a = t[s];
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), a = new fl()), this.bones.push(a), this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class ca extends gt {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const bi = /* @__PURE__ */ new Oe(), lc = /* @__PURE__ */ new Oe(), ks = [], hc = /* @__PURE__ */ new Zt(), ig = /* @__PURE__ */ new Oe(), Ji = /* @__PURE__ */ new St(), Qi = /* @__PURE__ */ new $t();
class sg extends St {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new ca(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, ig);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Zt()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, bi), hc.copy(e.boundingBox).applyMatrix4(bi), this.boundingBox.union(hc);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new $t()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, bi), Qi.copy(e.boundingSphere).applyMatrix4(bi), this.boundingSphere.union(Qi);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (Ji.geometry = this.geometry, Ji.material = this.material, Ji.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Qi.copy(this.boundingSphere), Qi.applyMatrix4(n), e.ray.intersectsSphere(Qi) !== !1))
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, bi), lc.multiplyMatrices(n, bi), Ji.matrixWorld = lc, Ji.raycast(e, ks);
        for (let a = 0, o = ks.length; a < o; a++) {
          const c = ks[a];
          c.instanceId = s, c.object = this, t.push(c);
        }
        ks.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new ca(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Sa extends Kt {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new de(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const dc = /* @__PURE__ */ new L(), uc = /* @__PURE__ */ new L(), fc = /* @__PURE__ */ new Oe(), jr = /* @__PURE__ */ new ir(), zs = /* @__PURE__ */ new $t();
class ya extends et {
  constructor(e = new Rt(), t = new Sa()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        dc.fromBufferAttribute(t, i - 1), uc.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += dc.distanceTo(uc);
      e.setAttribute("lineDistance", new Gt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), zs.copy(n.boundingSphere), zs.applyMatrix4(i), zs.radius += s, e.ray.intersectsSphere(zs) === !1) return;
    fc.copy(i).invert(), jr.copy(e.ray).applyMatrix4(fc);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = new L(), h = new L(), d = new L(), u = new L(), p = this.isLineSegments ? 2 : 1, g = n.index, m = n.attributes.position;
    if (g !== null) {
      const f = Math.max(0, a.start), v = Math.min(g.count, a.start + a.count);
      for (let b = f, E = v - 1; b < E; b += p) {
        const C = g.getX(b), T = g.getX(b + 1);
        if (l.fromBufferAttribute(m, C), h.fromBufferAttribute(m, T), jr.distanceSqToSegment(l, h, u, d) > c) continue;
        u.applyMatrix4(this.matrixWorld);
        const G = e.ray.origin.distanceTo(u);
        G < e.near || G > e.far || t.push({
          distance: G,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: d.clone().applyMatrix4(this.matrixWorld),
          index: b,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const f = Math.max(0, a.start), v = Math.min(m.count, a.start + a.count);
      for (let b = f, E = v - 1; b < E; b += p) {
        if (l.fromBufferAttribute(m, b), h.fromBufferAttribute(m, b + 1), jr.distanceSqToSegment(l, h, u, d) > c) continue;
        u.applyMatrix4(this.matrixWorld);
        const T = e.ray.origin.distanceTo(u);
        T < e.near || T > e.far || t.push({
          distance: T,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: d.clone().applyMatrix4(this.matrixWorld),
          index: b,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
const pc = /* @__PURE__ */ new L(), mc = /* @__PURE__ */ new L();
class pl extends ya {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        pc.fromBufferAttribute(t, i), mc.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + pc.distanceTo(mc);
      e.setAttribute("lineDistance", new Gt(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class rg extends ya {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class cr extends Kt {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new de(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const gc = /* @__PURE__ */ new Oe(), la = /* @__PURE__ */ new ir(), Gs = /* @__PURE__ */ new $t(), Hs = /* @__PURE__ */ new L();
class Ea extends et {
  constructor(e = new Rt(), t = new cr()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Gs.copy(n.boundingSphere), Gs.applyMatrix4(i), Gs.radius += s, e.ray.intersectsSphere(Gs) === !1) return;
    gc.copy(i).invert(), la.copy(e.ray).applyMatrix4(gc);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = n.index, d = n.attributes.position;
    if (l !== null) {
      const u = Math.max(0, a.start), p = Math.min(l.count, a.start + a.count);
      for (let g = u, _ = p; g < _; g++) {
        const m = l.getX(g);
        Hs.fromBufferAttribute(d, m), _c(Hs, m, c, i, e, t, this);
      }
    } else {
      const u = Math.max(0, a.start), p = Math.min(d.count, a.start + a.count);
      for (let g = u, _ = p; g < _; g++)
        Hs.fromBufferAttribute(d, g), _c(Hs, g, c, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function _c(r, e, t, n, i, s, a) {
  const o = la.distanceSqToPoint(r);
  if (o < t) {
    const c = new L();
    la.closestPointToPoint(r, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far) return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: c,
      index: e,
      face: null,
      object: a
    });
  }
}
class ml extends mt {
  constructor(e, t, n, i, s, a, o, c, l) {
    super(e, t, n, i, s, a, o, c, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class er extends Rt {
  constructor(e = 0.5, t = 1, n = 32, i = 1, s = 0, a = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = {
      innerRadius: e,
      outerRadius: t,
      thetaSegments: n,
      phiSegments: i,
      thetaStart: s,
      thetaLength: a
    }, n = Math.max(3, n), i = Math.max(1, i);
    const o = [], c = [], l = [], h = [];
    let d = e;
    const u = (t - e) / i, p = new L(), g = new Te();
    for (let _ = 0; _ <= i; _++) {
      for (let m = 0; m <= n; m++) {
        const f = s + m / n * a;
        p.x = d * Math.cos(f), p.y = d * Math.sin(f), c.push(p.x, p.y, p.z), l.push(0, 0, 1), g.x = (p.x / t + 1) / 2, g.y = (p.y / t + 1) / 2, h.push(g.x, g.y);
      }
      d += u;
    }
    for (let _ = 0; _ < i; _++) {
      const m = _ * (n + 1);
      for (let f = 0; f < n; f++) {
        const v = f + m, b = v, E = v + n + 1, C = v + n + 2, T = v + 1;
        o.push(b, E, T), o.push(E, C, T);
      }
    }
    this.setIndex(o), this.setAttribute("position", new Gt(c, 3)), this.setAttribute("normal", new Gt(l, 3)), this.setAttribute("uv", new Gt(h, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new er(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength);
  }
}
class qn extends Kt {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new de(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new de(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Vc, this.normalScale = new Te(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class mn extends qn {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Te(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return Mt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new de(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new de(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new de(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
function Vs(r, e, t) {
  return !r || // let 'undefined' and 'null' pass
  !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r);
}
function ag(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function og(r) {
  function e(i, s) {
    return r[i] - r[s];
  }
  const t = r.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function bc(r, e, t) {
  const n = r.length, i = new r.constructor(n);
  for (let s = 0, a = 0; a !== n; ++s) {
    const o = t[s] * e;
    for (let c = 0; c !== e; ++c)
      i[a++] = r[o + c];
  }
  return i;
}
function gl(r, e, t, n) {
  let i = 1, s = r[0];
  for (; s !== void 0 && s[n] === void 0; )
    s = r[i++];
  if (s === void 0) return;
  let a = s[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        a = s[n], a !== void 0 && (e.push(s.time), t.push.apply(t, a)), s = r[i++];
      while (s !== void 0);
    else if (a.toArray !== void 0)
      do
        a = s[n], a !== void 0 && (e.push(s.time), a.toArray(t, t.length)), s = r[i++];
      while (s !== void 0);
    else
      do
        a = s[n], a !== void 0 && (e.push(s.time), t.push(a)), s = r[i++];
      while (s !== void 0);
}
class ls {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], s = t[n - 1];
    e: {
      t: {
        let a;
        n: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < s) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === o) break;
              if (s = i, i = t[++n], e < i)
                break t;
            }
            a = t.length;
            break n;
          }
          if (!(e >= s)) {
            const o = t[1];
            e < o && (n = 2, s = o);
            for (let c = n - 2; ; ) {
              if (s === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === c) break;
              if (i = s, s = t[--n - 1], e >= s)
                break t;
            }
            a = n, n = 0;
            break n;
          }
          break e;
        }
        for (; n < a; ) {
          const o = n + a >>> 1;
          e < t[o] ? a = o : n = o + 1;
        }
        if (i = t[n], s = t[n - 1], s === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i;
    for (let a = 0; a !== i; ++a)
      t[a] = n[s + a];
    return t;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class cg extends ls {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: xi,
      endingEnd: xi
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2, a = e + 1, o = i[s], c = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case vi:
          s = e, o = 2 * t - n;
          break;
        case Ks:
          s = i.length - 2, o = t + i[s] - i[s + 1];
          break;
        default:
          s = e, o = n;
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case vi:
          a = e, c = 2 * n - t;
          break;
        case Ks:
          a = 1, c = n + i[1] - i[0];
          break;
        default:
          a = e - 1, c = t;
      }
    const l = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = l / (t - o), this._weightNext = l / (c - n), this._offsetPrev = s * h, this._offsetNext = a * h;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = e * o, l = c - o, h = this._offsetPrev, d = this._offsetNext, u = this._weightPrev, p = this._weightNext, g = (n - t) / (i - t), _ = g * g, m = _ * g, f = -u * m + 2 * u * _ - u * g, v = (1 + u) * m + (-1.5 - 2 * u) * _ + (-0.5 + u) * g + 1, b = (-1 - p) * m + (1.5 + p) * _ + 0.5 * g, E = p * m - p * _;
    for (let C = 0; C !== o; ++C)
      s[C] = f * a[h + C] + v * a[l + C] + b * a[c + C] + E * a[d + C];
    return s;
  }
}
class _l extends ls {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = e * o, l = c - o, h = (n - t) / (i - t), d = 1 - h;
    for (let u = 0; u !== o; ++u)
      s[u] = a[l + u] * d + a[c + u] * h;
    return s;
  }
}
class lg extends ls {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class en {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Vs(t, this.TimeBufferType), this.values = Vs(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Vs(e.times, Array),
        values: Vs(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new lg(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new _l(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new cg(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case rs:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Li:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case br:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return rs;
      case this.InterpolantFactoryMethodLinear:
        return Li;
      case this.InterpolantFactoryMethodSmooth:
        return br;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(e, t) {
    const n = this.times, i = n.length;
    let s = 0, a = i - 1;
    for (; s !== i && n[s] < e; )
      ++s;
    for (; a !== -1 && n[a] > t; )
      --a;
    if (++a, s !== 0 || a !== i) {
      s >= a && (a = Math.max(a, 1), s = a - 1);
      const o = this.getValueSize();
      this.times = n.slice(s, a), this.values = this.values.slice(s * o, a * o);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let a = null;
    for (let o = 0; o !== s; o++) {
      const c = n[o];
      if (typeof c == "number" && isNaN(c)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, c), e = !1;
        break;
      }
      if (a !== null && a > c) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, c, a), e = !1;
        break;
      }
      a = c;
    }
    if (i !== void 0 && ag(i))
      for (let o = 0, c = i.length; o !== c; ++o) {
        const l = i[o];
        if (isNaN(l)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, l), e = !1;
          break;
        }
      }
    return e;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === br, s = e.length - 1;
    let a = 1;
    for (let o = 1; o < s; ++o) {
      let c = !1;
      const l = e[o], h = e[o + 1];
      if (l !== h && (o !== 1 || l !== e[0]))
        if (i)
          c = !0;
        else {
          const d = o * n, u = d - n, p = d + n;
          for (let g = 0; g !== n; ++g) {
            const _ = t[d + g];
            if (_ !== t[u + g] || _ !== t[p + g]) {
              c = !0;
              break;
            }
          }
        }
      if (c) {
        if (o !== a) {
          e[a] = e[o];
          const d = o * n, u = a * n;
          for (let p = 0; p !== n; ++p)
            t[u + p] = t[d + p];
        }
        ++a;
      }
    }
    if (s > 0) {
      e[a] = e[s];
      for (let o = s * n, c = a * n, l = 0; l !== n; ++l)
        t[c + l] = t[o + l];
      ++a;
    }
    return a !== e.length ? (this.times = e.slice(0, a), this.values = t.slice(0, a * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
en.prototype.TimeBufferType = Float32Array;
en.prototype.ValueBufferType = Float32Array;
en.prototype.DefaultInterpolation = Li;
class Bi extends en {
}
Bi.prototype.ValueTypeName = "bool";
Bi.prototype.ValueBufferType = Array;
Bi.prototype.DefaultInterpolation = rs;
Bi.prototype.InterpolantFactoryMethodLinear = void 0;
Bi.prototype.InterpolantFactoryMethodSmooth = void 0;
class bl extends en {
}
bl.prototype.ValueTypeName = "color";
class Di extends en {
}
Di.prototype.ValueTypeName = "number";
class hg extends ls {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = (n - t) / (i - t);
    let l = e * o;
    for (let h = l + o; l !== h; l += 4)
      qt.slerpFlat(s, 0, a, l - o, a, l, c);
    return s;
  }
}
class Kn extends en {
  InterpolantFactoryMethodLinear(e) {
    return new hg(this.times, this.values, this.getValueSize(), e);
  }
}
Kn.prototype.ValueTypeName = "quaternion";
Kn.prototype.DefaultInterpolation = Li;
Kn.prototype.InterpolantFactoryMethodSmooth = void 0;
class ki extends en {
}
ki.prototype.ValueTypeName = "string";
ki.prototype.ValueBufferType = Array;
ki.prototype.DefaultInterpolation = rs;
ki.prototype.InterpolantFactoryMethodLinear = void 0;
ki.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ui extends en {
}
Ui.prototype.ValueTypeName = "vector";
class ha {
  constructor(e, t = -1, n, i = ga) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Xt(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a)
      t.push(ug(n[a]).scale(i));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return s.uuid = e.uuid, s;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let s = 0, a = n.length; s !== a; ++s)
      t.push(en.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length, a = [];
    for (let o = 0; o < s; o++) {
      let c = [], l = [];
      c.push(
        (o + s - 1) % s,
        o,
        (o + 1) % s
      ), l.push(0, 1, 0);
      const h = og(c);
      c = bc(c, 1, h), l = bc(l, 1, h), !i && c[0] === 0 && (c.push(s), l.push(l[0])), a.push(
        new Di(
          ".morphTargetInfluences[" + t[o].name + "]",
          c,
          l
        ).scale(1 / n)
      );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o], h = l.name.match(s);
      if (h && h.length > 1) {
        const d = h[1];
        let u = i[d];
        u || (i[d] = u = []), u.push(l);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  // parse the animation.hierarchy format
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(d, u, p, g, _) {
      if (p.length !== 0) {
        const m = [], f = [];
        gl(p, m, f, g), m.length !== 0 && _.push(new d(u, m, f));
      }
    }, i = [], s = e.name || "default", a = e.fps || 30, o = e.blendMode;
    let c = e.length || -1;
    const l = e.hierarchy || [];
    for (let d = 0; d < l.length; d++) {
      const u = l[d].keys;
      if (!(!u || u.length === 0))
        if (u[0].morphTargets) {
          const p = {};
          let g;
          for (g = 0; g < u.length; g++)
            if (u[g].morphTargets)
              for (let _ = 0; _ < u[g].morphTargets.length; _++)
                p[u[g].morphTargets[_]] = -1;
          for (const _ in p) {
            const m = [], f = [];
            for (let v = 0; v !== u[g].morphTargets.length; ++v) {
              const b = u[g];
              m.push(b.time), f.push(b.morphTarget === _ ? 1 : 0);
            }
            i.push(new Di(".morphTargetInfluence[" + _ + "]", m, f));
          }
          c = p.length * a;
        } else {
          const p = ".bones[" + t[d].name + "]";
          n(
            Ui,
            p + ".position",
            u,
            "pos",
            i
          ), n(
            Kn,
            p + ".quaternion",
            u,
            "rot",
            i
          ), n(
            Ui,
            p + ".scale",
            u,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(s, c, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function dg(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Di;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Ui;
    case "color":
      return bl;
    case "quaternion":
      return Kn;
    case "bool":
    case "boolean":
      return Bi;
    case "string":
      return ki;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function ug(r) {
  if (r.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = dg(r.type);
  if (r.times === void 0) {
    const t = [], n = [];
    gl(r.keys, t, n, "value"), r.times = t, r.values = n;
  }
  return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation);
}
const An = {
  enabled: !1,
  files: {},
  add: function(r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function(r) {
    if (this.enabled !== !1)
      return this.files[r];
  },
  remove: function(r) {
    delete this.files[r];
  },
  clear: function() {
    this.files = {};
  }
};
class fg {
  constructor(e, t, n) {
    const i = this;
    let s = !1, a = 0, o = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      o++, s === !1 && i.onStart !== void 0 && i.onStart(h, a, o), s = !0;
    }, this.itemEnd = function(h) {
      a++, i.onProgress !== void 0 && i.onProgress(h, a, o), a === o && (s = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return c ? c(h) : h;
    }, this.setURLModifier = function(h) {
      return c = h, this;
    }, this.addHandler = function(h, d) {
      return l.push(h, d), this;
    }, this.removeHandler = function(h) {
      const d = l.indexOf(h);
      return d !== -1 && l.splice(d, 2), this;
    }, this.getHandler = function(h) {
      for (let d = 0, u = l.length; d < u; d += 2) {
        const p = l[d], g = l[d + 1];
        if (p.global && (p.lastIndex = 0), p.test(h))
          return g;
      }
      return null;
    };
  }
}
const pg = /* @__PURE__ */ new fg();
class zi {
  constructor(e) {
    this.manager = e !== void 0 ? e : pg, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
zi.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const cn = {};
class mg extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class xl extends zi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = An.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (cn[e] !== void 0) {
      cn[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    cn[e] = [], cn[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const a = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), o = this.mimeType, c = this.responseType;
    fetch(a).then((l) => {
      if (l.status === 200 || l.status === 0) {
        if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0)
          return l;
        const h = cn[e], d = l.body.getReader(), u = l.headers.get("Content-Length") || l.headers.get("X-File-Size"), p = u ? parseInt(u) : 0, g = p !== 0;
        let _ = 0;
        const m = new ReadableStream({
          start(f) {
            v();
            function v() {
              d.read().then(({ done: b, value: E }) => {
                if (b)
                  f.close();
                else {
                  _ += E.byteLength;
                  const C = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: p });
                  for (let T = 0, w = h.length; T < w; T++) {
                    const G = h[T];
                    G.onProgress && G.onProgress(C);
                  }
                  f.enqueue(E), v();
                }
              });
            }
          }
        });
        return new Response(m);
      } else
        throw new mg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((h) => new DOMParser().parseFromString(h, o));
        case "json":
          return l.json();
        default:
          if (o === void 0)
            return l.text();
          {
            const d = /charset="?([^;"\s]*)"?/i.exec(o), u = d && d[1] ? d[1].toLowerCase() : void 0, p = new TextDecoder(u);
            return l.arrayBuffer().then((g) => p.decode(g));
          }
      }
    }).then((l) => {
      An.add(e, l);
      const h = cn[e];
      delete cn[e];
      for (let d = 0, u = h.length; d < u; d++) {
        const p = h[d];
        p.onLoad && p.onLoad(l);
      }
    }).catch((l) => {
      const h = cn[e];
      if (h === void 0)
        throw this.manager.itemError(e), l;
      delete cn[e];
      for (let d = 0, u = h.length; d < u; d++) {
        const p = h[d];
        p.onError && p.onError(l);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class gg extends zi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = An.get(e);
    if (a !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    const o = as("img");
    function c() {
      h(), An.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function l(d) {
      h(), i && i(d), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", c, !1), o.removeEventListener("error", l, !1);
    }
    return o.addEventListener("load", c, !1), o.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(e), o.src = e, o;
  }
}
class Aa extends zi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new mt(), a = new gg(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      s.image = o, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class hs extends et {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new de(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
class _g extends hs {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(et.DEFAULT_UP), this.updateMatrix(), this.groundColor = new de(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const Xr = /* @__PURE__ */ new Oe(), xc = /* @__PURE__ */ new L(), vc = /* @__PURE__ */ new L();
class Ta {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Te(512, 512), this.map = null, this.mapPass = null, this.matrix = new Oe(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new xa(), this._frameExtents = new Te(1, 1), this._viewportCount = 1, this._viewports = [
      new Ye(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    xc.setFromMatrixPosition(e.matrixWorld), t.position.copy(xc), vc.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(vc), t.updateMatrixWorld(), Xr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Xr), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(Xr);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class bg extends Ta {
  constructor() {
    super(new ct(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = Pi * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class xg extends hs {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, a = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(et.DEFAULT_UP), this.updateMatrix(), this.target = new et(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = a, this.map = null, this.shadow = new bg();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const Mc = /* @__PURE__ */ new Oe(), Zi = /* @__PURE__ */ new L(), qr = /* @__PURE__ */ new L();
class vg extends Ta {
  constructor() {
    super(new ct(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Te(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new Ye(2, 1, 1, 1),
      // negative X
      new Ye(0, 1, 1, 1),
      // positive Z
      new Ye(3, 1, 1, 1),
      // negative Z
      new Ye(1, 1, 1, 1),
      // positive Y
      new Ye(3, 0, 1, 1),
      // negative Y
      new Ye(1, 0, 1, 1)
    ], this._cubeDirections = [
      new L(1, 0, 0),
      new L(-1, 0, 0),
      new L(0, 0, 1),
      new L(0, 0, -1),
      new L(0, 1, 0),
      new L(0, -1, 0)
    ], this._cubeUps = [
      new L(0, 1, 0),
      new L(0, 1, 0),
      new L(0, 1, 0),
      new L(0, 1, 0),
      new L(0, 0, 1),
      new L(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), Zi.setFromMatrixPosition(e.matrixWorld), n.position.copy(Zi), qr.copy(n.position), qr.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(qr), n.updateMatrixWorld(), i.makeTranslation(-Zi.x, -Zi.y, -Zi.z), Mc.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Mc);
  }
}
class cs extends hs {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new vg();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class Mg extends Ta {
  constructor() {
    super(new ar(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class da extends hs {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(et.DEFAULT_UP), this.updateMatrix(), this.target = new et(), this.shadow = new Mg();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class wa extends hs {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class is {
  static decodeText(e) {
    if (typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class Sg extends zi {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = An.get(e);
    if (a !== void 0) {
      if (s.manager.itemStart(e), a.then) {
        a.then((l) => {
          t && t(l), s.manager.itemEnd(e);
        }).catch((l) => {
          i && i(l);
        });
        return;
      }
      return setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    }
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader;
    const c = fetch(e, o).then(function(l) {
      return l.blob();
    }).then(function(l) {
      return createImageBitmap(l, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(l) {
      return An.add(e, l), t && t(l), s.manager.itemEnd(e), l;
    }).catch(function(l) {
      i && i(l), An.remove(e), s.manager.itemError(e), s.manager.itemEnd(e);
    });
    An.add(e, c), s.manager.itemStart(e);
  }
}
class Gi {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = Sc(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = Sc();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function Sc() {
  return (typeof performance > "u" ? Date : performance).now();
}
class yg {
  constructor(e, t, n) {
    this.binding = e, this.valueSize = n;
    let i, s, a;
    switch (t) {
      case "quaternion":
        i = this._slerp, s = this._slerpAdditive, a = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        i = this._select, s = this._select, a = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
        break;
      default:
        i = this._lerp, s = this._lerpAdditive, a = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
    }
    this._mixBufferRegion = i, this._mixBufferRegionAdditive = s, this._setIdentity = a, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  // accumulate data in the 'incoming' region into 'accu<i>'
  accumulate(e, t) {
    const n = this.buffer, i = this.valueSize, s = e * i + i;
    let a = this.cumulativeWeight;
    if (a === 0) {
      for (let o = 0; o !== i; ++o)
        n[s + o] = n[o];
      a = t;
    } else {
      a += t;
      const o = t / a;
      this._mixBufferRegion(n, s, 0, o, i);
    }
    this.cumulativeWeight = a;
  }
  // accumulate data in the 'incoming' region into 'add'
  accumulateAdditive(e) {
    const t = this.buffer, n = this.valueSize, i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, i, 0, e, n), this.cumulativeWeightAdditive += e;
  }
  // apply the state of 'accu<i>' to the binding when accus differ
  apply(e) {
    const t = this.valueSize, n = this.buffer, i = e * t + t, s = this.cumulativeWeight, a = this.cumulativeWeightAdditive, o = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, s < 1) {
      const c = t * this._origIndex;
      this._mixBufferRegion(
        n,
        i,
        c,
        1 - s,
        t
      );
    }
    a > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * t, 1, t);
    for (let c = t, l = t + t; c !== l; ++c)
      if (n[c] !== n[c + t]) {
        o.setValue(n, i);
        break;
      }
  }
  // remember the state of the bound property and copy it to both accus
  saveOriginalState() {
    const e = this.binding, t = this.buffer, n = this.valueSize, i = n * this._origIndex;
    e.getValue(t, i);
    for (let s = n, a = i; s !== a; ++s)
      t[s] = t[i + s % n];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  // apply the state previously taken via 'saveOriginalState' to the binding
  restoreOriginalState() {
    const e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    const e = this._addIndex * this.valueSize, t = e + this.valueSize;
    for (let n = e; n < t; n++)
      this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++)
      this.buffer[t + n] = this.buffer[e + n];
  }
  // mix functions
  _select(e, t, n, i, s) {
    if (i >= 0.5)
      for (let a = 0; a !== s; ++a)
        e[t + a] = e[n + a];
  }
  _slerp(e, t, n, i) {
    qt.slerpFlat(e, t, e, t, e, n, i);
  }
  _slerpAdditive(e, t, n, i, s) {
    const a = this._workIndex * s;
    qt.multiplyQuaternionsFlat(e, a, e, t, e, n), qt.slerpFlat(e, t, e, t, e, a, i);
  }
  _lerp(e, t, n, i, s) {
    const a = 1 - i;
    for (let o = 0; o !== s; ++o) {
      const c = t + o;
      e[c] = e[c] * a + e[n + o] * i;
    }
  }
  _lerpAdditive(e, t, n, i, s) {
    for (let a = 0; a !== s; ++a) {
      const o = t + a;
      e[o] = e[o] + e[n + a] * i;
    }
  }
}
const Ra = "\\[\\]\\.:\\/", Eg = new RegExp("[" + Ra + "]", "g"), Ca = "[^" + Ra + "]", Ag = "[^" + Ra.replace("\\.", "") + "]", Tg = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Ca), wg = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", Ag), Rg = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Ca), Cg = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Ca), Lg = new RegExp(
  "^" + Tg + wg + Rg + Cg + "$"
), Pg = ["material", "materials", "bones", "map"];
class Ig {
  constructor(e, t, n) {
    const i = n || We.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class We {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || We.parseTrackName(t), this.node = We.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new We.Composite(e, t, n) : new We(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(Eg, "");
  }
  static parseTrackName(e) {
    const t = Lg.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      // required
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      Pg.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(s) {
        for (let a = 0; a < s.length; a++) {
          const o = s[a];
          if (o.name === t || o.uuid === t)
            return o;
          const c = n(o.children);
          if (c) return c;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  // Direct
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let s = t.propertyIndex;
    if (e || (e = We.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let l = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++)
            if (e[h].name === l) {
              l = h;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (l !== void 0) {
        if (e[l] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[l];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const l = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + i + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]);
      }
      c = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (c = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
We.Composite = Ig;
We.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
We.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
We.prototype.GetterByBindingType = [
  We.prototype._getValue_direct,
  We.prototype._getValue_array,
  We.prototype._getValue_arrayElement,
  We.prototype._getValue_toArray
];
We.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    We.prototype._setValue_direct,
    We.prototype._setValue_direct_setNeedsUpdate,
    We.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    We.prototype._setValue_array,
    We.prototype._setValue_array_setNeedsUpdate,
    We.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    We.prototype._setValue_arrayElement,
    We.prototype._setValue_arrayElement_setNeedsUpdate,
    We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    We.prototype._setValue_fromArray,
    We.prototype._setValue_fromArray_setNeedsUpdate,
    We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class Dg {
  constructor(e, t, n = null, i = t.blendMode) {
    this._mixer = e, this._clip = t, this._localRoot = n, this.blendMode = i;
    const s = t.tracks, a = s.length, o = new Array(a), c = {
      endingStart: xi,
      endingEnd: xi
    };
    for (let l = 0; l !== a; ++l) {
      const h = s[l].createInterpolant(null);
      o[l] = h, h.settings = c;
    }
    this._interpolantSettings = c, this._interpolants = o, this._propertyBindings = new Array(a), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = _h, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
  }
  // State & Scheduling
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  // return true when play has been called
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return this._startTime = e, this;
  }
  setLoop(e, t) {
    return this.loop = e, this.repetitions = t, this;
  }
  // Weight
  // set the weight stopping any scheduled fading
  // although .enabled = false yields an effective weight of zero, this
  // method does *not* change .enabled, because it would be confusing
  setEffectiveWeight(e) {
    return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
  }
  // return the weight considering fading and .enabled
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, n) {
    if (e.fadeOut(t), this.fadeIn(t), n) {
      const i = this._clip.duration, s = e._clip.duration, a = s / i, o = i / s;
      e.warp(1, a, t), this.warp(o, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, n) {
    return e.crossFadeFrom(this, t, n);
  }
  stopFading() {
    const e = this._weightInterpolant;
    return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  // Time Scale Control
  // set the time scale stopping any scheduled warping
  // although .paused = true yields an effective time scale of zero, this
  // method does *not* change .paused, because it would be confusing
  setEffectiveTimeScale(e) {
    return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
  }
  // return the time scale considering warping and .paused
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return this.timeScale = this._clip.duration / e, this.stopWarping();
  }
  syncWith(e) {
    return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, n) {
    const i = this._mixer, s = i.time, a = this.timeScale;
    let o = this._timeScaleInterpolant;
    o === null && (o = i._lendControlInterpolant(), this._timeScaleInterpolant = o);
    const c = o.parameterPositions, l = o.sampleValues;
    return c[0] = s, c[1] = s + n, l[0] = e / a, l[1] = t / a, this;
  }
  stopWarping() {
    const e = this._timeScaleInterpolant;
    return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  }
  // Object Accessors
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  // Interna
  _update(e, t, n, i) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    const s = this._startTime;
    if (s !== null) {
      const c = (e - s) * n;
      c < 0 || n === 0 ? t = 0 : (this._startTime = null, t = n * c);
    }
    t *= this._updateTimeScale(e);
    const a = this._updateTime(t), o = this._updateWeight(e);
    if (o > 0) {
      const c = this._interpolants, l = this._propertyBindings;
      switch (this.blendMode) {
        case xh:
          for (let h = 0, d = c.length; h !== d; ++h)
            c[h].evaluate(a), l[h].accumulateAdditive(o);
          break;
        case ga:
        default:
          for (let h = 0, d = c.length; h !== d; ++h)
            c[h].evaluate(a), l[h].accumulate(i, o);
      }
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = !1));
      }
    }
    return this._effectiveWeight = t, t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const i = n.evaluate(e)[0];
        t *= i, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t);
      }
    }
    return this._effectiveTimeScale = t, t;
  }
  _updateTime(e) {
    const t = this._clip.duration, n = this.loop;
    let i = this.time + e, s = this._loopCount;
    const a = n === bh;
    if (e === 0)
      return s === -1 ? i : a && (s & 1) === 1 ? t - i : i;
    if (n === gh) {
      s === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
      e: {
        if (i >= t)
          i = t;
        else if (i < 0)
          i = 0;
        else {
          this.time = i;
          break e;
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: e < 0 ? -1 : 1
        });
      }
    } else {
      if (s === -1 && (e >= 0 ? (s = 0, this._setEndings(!0, this.repetitions === 0, a)) : this._setEndings(this.repetitions === 0, !0, a)), i >= t || i < 0) {
        const o = Math.floor(i / t);
        i -= t * o, s += Math.abs(o);
        const c = this.repetitions - s;
        if (c <= 0)
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = e > 0 ? t : 0, this.time = i, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e > 0 ? 1 : -1
          });
        else {
          if (c === 1) {
            const l = e < 0;
            this._setEndings(l, !l, a);
          } else
            this._setEndings(!1, !1, a);
          this._loopCount = s, this.time = i, this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: o
          });
        }
      } else
        this.time = i;
      if (a && (s & 1) === 1)
        return t - i;
    }
    return i;
  }
  _setEndings(e, t, n) {
    const i = this._interpolantSettings;
    n ? (i.endingStart = vi, i.endingEnd = vi) : (e ? i.endingStart = this.zeroSlopeAtStart ? vi : xi : i.endingStart = Ks, t ? i.endingEnd = this.zeroSlopeAtEnd ? vi : xi : i.endingEnd = Ks);
  }
  _scheduleFading(e, t, n) {
    const i = this._mixer, s = i.time;
    let a = this._weightInterpolant;
    a === null && (a = i._lendControlInterpolant(), this._weightInterpolant = a);
    const o = a.parameterPositions, c = a.sampleValues;
    return o[0] = s, c[0] = t, o[1] = s + e, c[1] = n, this;
  }
}
const Ug = new Float32Array(1);
class Ng extends Yn {
  constructor(e) {
    super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(e, t) {
    const n = e._localRoot || this._root, i = e._clip.tracks, s = i.length, a = e._propertyBindings, o = e._interpolants, c = n.uuid, l = this._bindingsByRootAndName;
    let h = l[c];
    h === void 0 && (h = {}, l[c] = h);
    for (let d = 0; d !== s; ++d) {
      const u = i[d], p = u.name;
      let g = h[p];
      if (g !== void 0)
        ++g.referenceCount, a[d] = g;
      else {
        if (g = a[d], g !== void 0) {
          g._cacheIndex === null && (++g.referenceCount, this._addInactiveBinding(g, c, p));
          continue;
        }
        const _ = t && t._propertyBindings[d].binding.parsedPath;
        g = new yg(
          We.create(n, p, _),
          u.ValueTypeName,
          u.getValueSize()
        ), ++g.referenceCount, this._addInactiveBinding(g, c, p), a[d] = g;
      }
      o[d].resultBuffer = g.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        const n = (e._localRoot || this._root).uuid, i = e._clip.uuid, s = this._actionsByClip[i];
        this._bindAction(
          e,
          s && s.knownActions[0]
        ), this._addInactiveAction(e, i, n);
      }
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      const t = e._propertyBindings;
      for (let n = 0, i = t.length; n !== i; ++n) {
        const s = t[n];
        --s.useCount === 0 && (s.restoreOriginalState(), this._takeBackBinding(s));
      }
      this._takeBackAction(e);
    }
  }
  // Memory manager
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const e = this;
    this.stats = {
      actions: {
        get total() {
          return e._actions.length;
        },
        get inUse() {
          return e._nActiveActions;
        }
      },
      bindings: {
        get total() {
          return e._bindings.length;
        },
        get inUse() {
          return e._nActiveBindings;
        }
      },
      controlInterpolants: {
        get total() {
          return e._controlInterpolants.length;
        },
        get inUse() {
          return e._nActiveControlInterpolants;
        }
      }
    };
  }
  // Memory management for AnimationAction objects
  _isActiveAction(e) {
    const t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, n) {
    const i = this._actions, s = this._actionsByClip;
    let a = s[t];
    if (a === void 0)
      a = {
        knownActions: [e],
        actionByRoot: {}
      }, e._byClipCacheIndex = 0, s[t] = a;
    else {
      const o = a.knownActions;
      e._byClipCacheIndex = o.length, o.push(e);
    }
    e._cacheIndex = i.length, i.push(e), a.actionByRoot[n] = e;
  }
  _removeInactiveAction(e) {
    const t = this._actions, n = t[t.length - 1], i = e._cacheIndex;
    n._cacheIndex = i, t[i] = n, t.pop(), e._cacheIndex = null;
    const s = e._clip.uuid, a = this._actionsByClip, o = a[s], c = o.knownActions, l = c[c.length - 1], h = e._byClipCacheIndex;
    l._byClipCacheIndex = h, c[h] = l, c.pop(), e._byClipCacheIndex = null;
    const d = o.actionByRoot, u = (e._localRoot || this._root).uuid;
    delete d[u], c.length === 0 && delete a[s], this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    const t = e._propertyBindings;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const s = t[n];
      --s.referenceCount === 0 && this._removeInactiveBinding(s);
    }
  }
  _lendAction(e) {
    const t = this._actions, n = e._cacheIndex, i = this._nActiveActions++, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  _takeBackAction(e) {
    const t = this._actions, n = e._cacheIndex, i = --this._nActiveActions, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  // Memory management for PropertyMixer objects
  _addInactiveBinding(e, t, n) {
    const i = this._bindingsByRootAndName, s = this._bindings;
    let a = i[t];
    a === void 0 && (a = {}, i[t] = a), a[n] = e, e._cacheIndex = s.length, s.push(e);
  }
  _removeInactiveBinding(e) {
    const t = this._bindings, n = e.binding, i = n.rootNode.uuid, s = n.path, a = this._bindingsByRootAndName, o = a[i], c = t[t.length - 1], l = e._cacheIndex;
    c._cacheIndex = l, t[l] = c, t.pop(), delete o[s], Object.keys(o).length === 0 && delete a[i];
  }
  _lendBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = this._nActiveBindings++, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  _takeBackBinding(e) {
    const t = this._bindings, n = e._cacheIndex, i = --this._nActiveBindings, s = t[i];
    e._cacheIndex = i, t[i] = e, s._cacheIndex = n, t[n] = s;
  }
  // Memory management of Interpolants for weight and time scale
  _lendControlInterpolant() {
    const e = this._controlInterpolants, t = this._nActiveControlInterpolants++;
    let n = e[t];
    return n === void 0 && (n = new _l(
      new Float32Array(2),
      new Float32Array(2),
      1,
      Ug
    ), n.__cacheIndex = t, e[t] = n), n;
  }
  _takeBackControlInterpolant(e) {
    const t = this._controlInterpolants, n = e.__cacheIndex, i = --this._nActiveControlInterpolants, s = t[i];
    e.__cacheIndex = i, t[i] = e, s.__cacheIndex = n, t[n] = s;
  }
  // return an action for a clip optionally using a custom root target
  // object (this method allocates a lot of dynamic memory in case a
  // previously unknown clip/root combination is specified)
  clipAction(e, t, n) {
    const i = t || this._root, s = i.uuid;
    let a = typeof e == "string" ? ha.findByName(i, e) : e;
    const o = a !== null ? a.uuid : e, c = this._actionsByClip[o];
    let l = null;
    if (n === void 0 && (a !== null ? n = a.blendMode : n = ga), c !== void 0) {
      const d = c.actionByRoot[s];
      if (d !== void 0 && d.blendMode === n)
        return d;
      l = c.knownActions[0], a === null && (a = l._clip);
    }
    if (a === null) return null;
    const h = new Dg(this, a, t, n);
    return this._bindAction(h, l), this._addInactiveAction(h, o, s), h;
  }
  // get an existing action
  existingAction(e, t) {
    const n = t || this._root, i = n.uuid, s = typeof e == "string" ? ha.findByName(n, e) : e, a = s ? s.uuid : e, o = this._actionsByClip[a];
    return o !== void 0 && o.actionByRoot[i] || null;
  }
  // deactivates all previously scheduled actions
  stopAllAction() {
    const e = this._actions, t = this._nActiveActions;
    for (let n = t - 1; n >= 0; --n)
      e[n].stop();
    return this;
  }
  // advance the time and update apply the animation
  update(e) {
    e *= this.timeScale;
    const t = this._actions, n = this._nActiveActions, i = this.time += e, s = Math.sign(e), a = this._accuIndex ^= 1;
    for (let l = 0; l !== n; ++l)
      t[l]._update(i, e, s, a);
    const o = this._bindings, c = this._nActiveBindings;
    for (let l = 0; l !== c; ++l)
      o[l].apply(a);
    return this;
  }
  // Allows you to seek to a specific time in an animation.
  setTime(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++)
      this._actions[t].time = 0;
    return this.update(e);
  }
  // return this mixer's root target object
  getRoot() {
    return this._root;
  }
  // free all resources specific to a particular clip
  uncacheClip(e) {
    const t = this._actions, n = e.uuid, i = this._actionsByClip, s = i[n];
    if (s !== void 0) {
      const a = s.knownActions;
      for (let o = 0, c = a.length; o !== c; ++o) {
        const l = a[o];
        this._deactivateAction(l);
        const h = l._cacheIndex, d = t[t.length - 1];
        l._cacheIndex = null, l._byClipCacheIndex = null, d._cacheIndex = h, t[h] = d, t.pop(), this._removeInactiveBindingsForAction(l);
      }
      delete i[n];
    }
  }
  // free all resources specific to a particular root target object
  uncacheRoot(e) {
    const t = e.uuid, n = this._actionsByClip;
    for (const a in n) {
      const o = n[a].actionByRoot, c = o[t];
      c !== void 0 && (this._deactivateAction(c), this._removeInactiveAction(c));
    }
    const i = this._bindingsByRootAndName, s = i[t];
    if (s !== void 0)
      for (const a in s) {
        const o = s[a];
        o.restoreOriginalState(), this._removeInactiveBinding(o);
      }
  }
  // remove a targeted clip from the cache
  uncacheAction(e, t) {
    const n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: pa
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = pa);
let Fg = class {
  constructor(e, t = {}) {
    this.frameId = 0, this.mouse = { x: 0, y: 0 }, this.targetRot = { x: 0, y: 0 }, this.clock = new Gi(), this.container = e, this.opts = {
      width: t.width ?? 2.8,
      height: t.height ?? 4,
      depth: t.depth ?? 0.06,
      color: t.color ?? 6514417,
      emissiveColor: t.emissiveColor ?? 1708096,
      image: t.image ?? "",
      floatSpeed: t.floatSpeed ?? 1.2,
      floatAmplitude: t.floatAmplitude ?? 0.18,
      tiltStrength: t.tiltStrength ?? 0.35
    }, this.scene = new Oi(), this.camera = new ct(45, e.clientWidth / e.clientHeight, 0.1, 100), this.camera.position.z = 8, this.renderer = new Qn({ antialias: !0, alpha: !0 }), this.renderer.setSize(e.clientWidth, e.clientHeight), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), e.appendChild(this.renderer.domElement), this.buildCard(), this.addLights(), this.onMouseMoveBound = this.onMouseMove.bind(this), this.onResizeBound = this.onResize.bind(this), e.addEventListener("mousemove", this.onMouseMoveBound), window.addEventListener("resize", this.onResizeBound), this.animate();
  }
  buildCard() {
    const { width: e, height: t, depth: n, color: i, emissiveColor: s, image: a } = this.opts, o = new Jn(e, t, n), c = a ? new qn({
      map: new Aa().load(a),
      emissive: new de(s),
      emissiveIntensity: 0.1,
      metalness: 0.2,
      roughness: 0.5
    }) : new qn({
      color: new de(i),
      emissive: new de(s),
      emissiveIntensity: 0.4,
      metalness: 0.3,
      roughness: 0.35
    });
    this.mesh = new St(o, c), this.scene.add(this.mesh);
  }
  addLights() {
    this.scene.add(new wa(16777215, 0.5));
    const e = new cs(16777215, 2, 30);
    e.position.set(4, 4, 6), this.scene.add(e);
    const t = new cs(8490232, 1, 20);
    t.position.set(-4, -3, 4), this.scene.add(t);
  }
  onMouseMove(e) {
    const t = this.container.getBoundingClientRect();
    this.mouse.x = (e.clientX - t.left) / t.width * 2 - 1, this.mouse.y = -((e.clientY - t.top) / t.height) * 2 + 1;
  }
  onResize() {
    const e = this.container.clientWidth, t = this.container.clientHeight;
    this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t);
  }
  animate() {
    this.frameId = requestAnimationFrame(this.animate.bind(this));
    const e = this.clock.getElapsedTime(), { floatSpeed: t, floatAmplitude: n, tiltStrength: i } = this.opts;
    this.mesh.position.y = Math.sin(e * t) * n, this.targetRot.x += (this.mouse.y * i - this.targetRot.x) * 0.06, this.targetRot.y += (this.mouse.x * i - this.targetRot.y) * 0.06, this.mesh.rotation.x = this.targetRot.x, this.mesh.rotation.y = this.targetRot.y, this.renderer.render(this.scene, this.camera);
  }
  destroy() {
    cancelAnimationFrame(this.frameId), this.container.removeEventListener("mousemove", this.onMouseMoveBound), window.removeEventListener("resize", this.onResizeBound), this.renderer.dispose(), this.renderer.domElement.parentNode === this.container && this.container.removeChild(this.renderer.domElement);
  }
};
function Og(r) {
  const t = document.createElement("canvas");
  t.width = 256, t.height = 256;
  const n = t.getContext("2d"), i = n.createRadialGradient(256 / 2, 256 / 2, 0, 256 / 2, 256 / 2, 256 / 2), s = "#" + r.toString(16).padStart(6, "0");
  i.addColorStop(0, s + "cc"), i.addColorStop(0.4, s + "55"), i.addColorStop(1, s + "00"), n.fillStyle = i, n.fillRect(0, 0, 256, 256);
  const a = new ml(t), o = new dl({ map: a, blending: Qr, depthWrite: !1, transparent: !0 });
  return new Zm(o);
}
let Bg = class {
  constructor(e, t = {}) {
    this.frameId = 0, this.mouse = { x: 0, y: 0 }, this.targetRot = { x: 0, y: 0 }, this.clock = new Gi(), this.container = e, this.opts = {
      width: t.width ?? 2.8,
      height: t.height ?? 4,
      color: t.color ?? 986906,
      glowColor: t.glowColor ?? 6514417,
      glowIntensity: t.glowIntensity ?? 1.2,
      image: t.image ?? "",
      floatSpeed: t.floatSpeed ?? 1,
      tiltStrength: t.tiltStrength ?? 0.3,
      pulseSpeed: t.pulseSpeed ?? 1.5
    }, this.scene = new Oi(), this.camera = new ct(45, e.clientWidth / e.clientHeight, 0.1, 100), this.camera.position.z = 8, this.renderer = new Qn({ antialias: !0, alpha: !0 }), this.renderer.setSize(e.clientWidth, e.clientHeight), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), e.appendChild(this.renderer.domElement), this.buildCard(), this.buildGlow(), this.addLights(), this.onMouseMoveBound = this.onMouseMove.bind(this), this.onResizeBound = this.onResize.bind(this), e.addEventListener("mousemove", this.onMouseMoveBound), window.addEventListener("resize", this.onResizeBound), this.animate();
  }
  buildCard() {
    const { width: e, height: t, color: n, glowColor: i, image: s } = this.opts, a = new Jn(e, t, 0.06), o = s ? new qn({
      map: new Aa().load(s),
      emissive: new de(i),
      emissiveIntensity: 0.15
    }) : new qn({
      color: new de(n),
      emissive: new de(i),
      emissiveIntensity: 0.25,
      metalness: 0.6,
      roughness: 0.2
    });
    this.mesh = new St(a, o), this.scene.add(this.mesh);
  }
  buildGlow() {
    this.glowSprite = Og(this.opts.glowColor), this.glowSprite.scale.set(6, 8, 1), this.glowSprite.position.z = -0.5, this.scene.add(this.glowSprite);
  }
  addLights() {
    this.scene.add(new wa(16777215, 0.3));
    const e = new cs(this.opts.glowColor, this.opts.glowIntensity * 2, 20);
    e.position.set(0, 0, 3), this.scene.add(e);
    const t = new cs(16777215, 0.8, 15);
    t.position.set(-3, 3, 5), this.scene.add(t);
  }
  onMouseMove(e) {
    const t = this.container.getBoundingClientRect();
    this.mouse.x = (e.clientX - t.left) / t.width * 2 - 1, this.mouse.y = -((e.clientY - t.top) / t.height) * 2 + 1;
  }
  onResize() {
    const e = this.container.clientWidth, t = this.container.clientHeight;
    this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t);
  }
  animate() {
    this.frameId = requestAnimationFrame(this.animate.bind(this));
    const e = this.clock.getElapsedTime(), { floatSpeed: t, tiltStrength: n, pulseSpeed: i, glowIntensity: s } = this.opts;
    this.mesh.position.y = Math.sin(e * t) * 0.15, this.glowSprite.position.y = this.mesh.position.y, this.targetRot.x += (this.mouse.y * n - this.targetRot.x) * 0.06, this.targetRot.y += (this.mouse.x * n - this.targetRot.y) * 0.06, this.mesh.rotation.x = this.targetRot.x, this.mesh.rotation.y = this.targetRot.y, this.glowSprite.rotation.z = this.targetRot.y * 0.3;
    const a = 0.5 + Math.sin(e * i) * 0.25;
    this.glowSprite.material.opacity = a * s;
    const o = this.mesh.material;
    o.emissiveIntensity = 0.15 + Math.sin(e * i) * 0.1, this.renderer.render(this.scene, this.camera);
  }
  destroy() {
    cancelAnimationFrame(this.frameId), this.container.removeEventListener("mousemove", this.onMouseMoveBound), window.removeEventListener("resize", this.onResizeBound), this.renderer.dispose(), this.renderer.domElement.parentNode === this.container && this.container.removeChild(this.renderer.domElement);
  }
}, kg = class {
  constructor(e, t = {}) {
    this.frameId = 0, this.clock = new Gi(), this.container = e, this.opts = {
      count: t.count ?? 150,
      color: t.color ?? 6514417,
      size: t.size ?? 0.04,
      speed: t.speed ?? 0.08,
      spread: t.spread ?? 10,
      connected: t.connected ?? !0,
      connectionDistance: t.connectionDistance ?? 2.5,
      connectionOpacity: t.connectionOpacity ?? 0.15,
      backgroundColor: t.backgroundColor ?? null
    }, this.scene = new Oi(), this.opts.backgroundColor !== null && (this.scene.background = new de(this.opts.backgroundColor)), this.camera = new ct(60, e.clientWidth / e.clientHeight, 0.1, 100), this.camera.position.z = 12, this.renderer = new Qn({ antialias: !0, alpha: this.opts.backgroundColor === null }), this.renderer.setSize(e.clientWidth, e.clientHeight), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), e.appendChild(this.renderer.domElement), this.buildParticles(), this.opts.connected && this.buildLines(), this.onResizeBound = this.onResize.bind(this), window.addEventListener("resize", this.onResizeBound), this.animate();
  }
  buildParticles() {
    const { count: e, spread: t, color: n, size: i } = this.opts, s = new Float32Array(e * 3);
    this.velocities = new Float32Array(e * 3);
    for (let c = 0; c < e; c++)
      s[c * 3] = (Math.random() - 0.5) * t, s[c * 3 + 1] = (Math.random() - 0.5) * t, s[c * 3 + 2] = (Math.random() - 0.5) * t * 0.3, this.velocities[c * 3] = (Math.random() - 0.5) * 4e-3, this.velocities[c * 3 + 1] = (Math.random() - 0.5) * 4e-3, this.velocities[c * 3 + 2] = 0;
    const a = new Rt();
    a.setAttribute("position", new gt(s, 3));
    const o = new cr({
      color: new de(n),
      size: i,
      sizeAttenuation: !0,
      transparent: !0,
      opacity: 0.85
    });
    this.particles = new Ea(a, o), this.scene.add(this.particles);
  }
  buildLines() {
    const e = new Rt(), t = this.opts.count * this.opts.count;
    e.setAttribute("position", new gt(new Float32Array(t * 6), 3));
    const n = new Sa({
      color: new de(this.opts.color),
      transparent: !0,
      opacity: this.opts.connectionOpacity
    });
    this.lines = new pl(e, n), this.scene.add(this.lines);
  }
  updateLines() {
    const e = this.particles.geometry.attributes.position.array, t = this.lines.geometry.attributes.position, n = t.array, i = this.opts.connectionDistance, s = this.opts.count;
    let a = 0;
    for (let o = 0; o < s; o++)
      for (let c = o + 1; c < s; c++) {
        const l = e[o * 3] - e[c * 3], h = e[o * 3 + 1] - e[c * 3 + 1];
        Math.sqrt(l * l + h * h) < i && (n[a++] = e[o * 3], n[a++] = e[o * 3 + 1], n[a++] = e[o * 3 + 2], n[a++] = e[c * 3], n[a++] = e[c * 3 + 1], n[a++] = e[c * 3 + 2]);
      }
    this.lines.geometry.setDrawRange(0, a / 3), t.needsUpdate = !0;
  }
  onResize() {
    const e = this.container.clientWidth, t = this.container.clientHeight;
    this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t);
  }
  animate() {
    this.frameId = requestAnimationFrame(this.animate.bind(this));
    const { count: e, spread: t, speed: n } = this.opts, i = t / 2, s = this.particles.geometry.attributes.position.array;
    for (let a = 0; a < e; a++)
      s[a * 3] += this.velocities[a * 3] * n * 10, s[a * 3 + 1] += this.velocities[a * 3 + 1] * n * 10, s[a * 3] > i && (s[a * 3] = -i), s[a * 3] < -i && (s[a * 3] = i), s[a * 3 + 1] > i && (s[a * 3 + 1] = -i), s[a * 3 + 1] < -i && (s[a * 3 + 1] = i);
    this.particles.geometry.attributes.position.needsUpdate = !0, this.opts.connected && this.updateLines(), this.renderer.render(this.scene, this.camera);
  }
  destroy() {
    cancelAnimationFrame(this.frameId), window.removeEventListener("resize", this.onResizeBound), this.renderer.dispose(), this.renderer.domElement.parentNode === this.container && this.container.removeChild(this.renderer.domElement);
  }
}, zg = class {
  constructor(e, t = {}) {
    this.ripples = [], this.frameId = 0, this.clock = new Gi(), this.container = e, this.opts = {
      color: t.color ?? 6514417,
      maxRipples: t.maxRipples ?? 6,
      duration: t.duration ?? 1.2,
      maxRadius: t.maxRadius ?? 2.5,
      thickness: t.thickness ?? 0.06,
      backgroundColor: t.backgroundColor ?? null
    };
    const n = e.clientWidth, i = e.clientHeight, s = n / i;
    this.scene = new Oi(), this.opts.backgroundColor !== null && (this.scene.background = new de(this.opts.backgroundColor)), this.camera = new ar(-s * 5, s * 5, 5, -5, 0.1, 100), this.camera.position.z = 10, this.renderer = new Qn({ antialias: !0, alpha: this.opts.backgroundColor === null }), this.renderer.setSize(n, i), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), e.appendChild(this.renderer.domElement), this.onClickBound = this.onClick.bind(this), this.onResizeBound = this.onResize.bind(this), e.addEventListener("click", this.onClickBound), window.addEventListener("resize", this.onResizeBound), this.animate();
  }
  spawnRipple(e, t) {
    if (this.ripples.length >= this.opts.maxRipples) {
      const a = this.ripples.shift();
      this.scene.remove(a.mesh), a.mesh.geometry.dispose(), a.mesh.material.dispose();
    }
    const n = new er(0.01, 0.01 + this.opts.thickness, 64), i = new un({
      color: new de(this.opts.color),
      transparent: !0,
      opacity: 1,
      side: jt
    }), s = new St(n, i);
    s.position.set(e, t, 0), this.scene.add(s), this.ripples.push({ mesh: s, age: 0, duration: this.opts.duration });
  }
  onClick(e) {
    const t = this.container.getBoundingClientRect(), n = t.width / t.height, i = (e.clientX - t.left) / t.width * 2 - 1, s = -((e.clientY - t.top) / t.height) * 2 + 1, a = i * n * 5, o = s * 5;
    this.spawnRipple(a, o);
  }
  onResize() {
    const e = this.container.clientWidth, t = this.container.clientHeight, n = e / t;
    this.camera.left = -n * 5, this.camera.right = n * 5, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t);
  }
  animate() {
    this.frameId = requestAnimationFrame(this.animate.bind(this));
    const e = this.clock.getDelta(), { maxRadius: t, thickness: n } = this.opts;
    for (let i = this.ripples.length - 1; i >= 0; i--) {
      const s = this.ripples[i];
      s.age += e;
      const a = s.age / s.duration;
      if (a >= 1) {
        this.scene.remove(s.mesh), s.mesh.geometry.dispose(), s.mesh.material.dispose(), this.ripples.splice(i, 1);
        continue;
      }
      const c = (1 - Math.pow(1 - a, 3)) * t;
      s.mesh.geometry.dispose(), s.mesh.geometry = new er(Math.max(0.01, c - n), c, 64), s.mesh.material.opacity = 1 - a;
    }
    this.renderer.render(this.scene, this.camera);
  }
  // Programmatically trigger a ripple at center
  trigger() {
    this.spawnRipple(0, 0);
  }
  destroy() {
    cancelAnimationFrame(this.frameId), this.container.removeEventListener("click", this.onClickBound), window.removeEventListener("resize", this.onResizeBound), this.renderer.dispose(), this.renderer.domElement.parentNode === this.container && this.container.removeChild(this.renderer.domElement);
  }
};
function Gg(r, e, t) {
  const s = document.createElement("canvas");
  s.width = 512, s.height = 160;
  const a = s.getContext("2d");
  a.clearRect(0, 0, 512, 160), a.fillStyle = "#fff", a.font = `bold ${e}px Arial, sans-serif`, a.textAlign = "center", a.textBaseline = "middle", a.fillText(r, 512 / 2, 160 / 2);
  const o = a.getImageData(0, 0, 512, 160), c = [], l = 3;
  for (let d = 0; d < 160; d += l)
    for (let u = 0; u < 512; u += l)
      o.data[(d * 512 + u) * 4 + 3] > 128 && c.push([u, d]);
  const h = new Float32Array(t * 3);
  for (let d = 0; d < t; d++) {
    const [u, p] = c[d % c.length];
    h[d * 3] = (u / 512 - 0.5) * 9, h[d * 3 + 1] = -(p / 160 - 0.5) * 2.8, h[d * 3 + 2] = (Math.random() - 0.5) * 0.2;
  }
  return h;
}
function Hg(r) {
  return r < 0.5 ? 2 * r * r : -1 + (4 - 2 * r) * r;
}
let Vg = class {
  constructor(e, t) {
    this.frameId = 0, this.clock = new Gi(), this.textPositions = [], this.currentIndex = 0, this.morphProgress = 1, this.intervalId = null, this.container = e, this.opts = {
      texts: t.texts,
      fontSize: t.fontSize ?? 72,
      color: t.color ?? 6514417,
      particleSize: t.particleSize ?? 0.045,
      particleCount: t.particleCount ?? 1800,
      interval: t.interval ?? 2500,
      morphDuration: t.morphDuration ?? 1
    }, this.scene = new Oi(), this.camera = new ct(45, e.clientWidth / e.clientHeight, 0.1, 100), this.camera.position.z = 10, this.renderer = new Qn({ antialias: !0, alpha: !0 }), this.renderer.setSize(e.clientWidth, e.clientHeight), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), e.appendChild(this.renderer.domElement), this.textPositions = this.opts.texts.map((n) => Gg(n, this.opts.fontSize, this.opts.particleCount)), this.fromPositions = this.textPositions[0].slice(), this.toPositions = this.textPositions[0].slice(), this.buildPoints(), this.addLights(), this.startCycle(), this.onResizeBound = this.onResize.bind(this), window.addEventListener("resize", this.onResizeBound), this.animate();
  }
  buildPoints() {
    const e = new Rt();
    e.setAttribute("position", new gt(this.fromPositions.slice(), 3));
    const t = new cr({
      color: new de(this.opts.color),
      size: this.opts.particleSize,
      sizeAttenuation: !0,
      transparent: !0,
      opacity: 0.9
    });
    this.points = new Ea(e, t), this.scene.add(this.points);
  }
  addLights() {
    this.scene.add(new wa(16777215, 1));
  }
  startCycle() {
    this.intervalId = setInterval(() => {
      const e = (this.currentIndex + 1) % this.opts.texts.length;
      this.fromPositions = this.textPositions[this.currentIndex].slice(), this.toPositions = this.textPositions[e], this.currentIndex = e, this.morphProgress = 0;
    }, this.opts.interval);
  }
  onResize() {
    const e = this.container.clientWidth, t = this.container.clientHeight;
    this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t);
  }
  animate() {
    this.frameId = requestAnimationFrame(this.animate.bind(this));
    const e = this.clock.getDelta();
    if (this.morphProgress < 1) {
      this.morphProgress = Math.min(1, this.morphProgress + e / this.opts.morphDuration);
      const t = Hg(this.morphProgress), n = this.points.geometry.attributes.position.array, i = this.opts.particleCount;
      for (let s = 0; s < i * 3; s++)
        n[s] = this.fromPositions[s] + (this.toPositions[s] - this.fromPositions[s]) * t;
      this.points.geometry.attributes.position.needsUpdate = !0;
    }
    this.renderer.render(this.scene, this.camera);
  }
  // Manually go to next text
  next() {
    const e = (this.currentIndex + 1) % this.opts.texts.length;
    this.fromPositions = this.textPositions[this.currentIndex].slice(), this.toPositions = this.textPositions[e], this.currentIndex = e, this.morphProgress = 0;
  }
  destroy() {
    cancelAnimationFrame(this.frameId), this.intervalId && clearInterval(this.intervalId), window.removeEventListener("resize", this.onResizeBound), this.renderer.dispose(), this.renderer.domElement.parentNode === this.container && this.container.removeChild(this.renderer.domElement);
  }
};
function yc(r, e) {
  if (e === vh)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
  if (e === ia || e === Gc) {
    let t = r.getIndex();
    if (t === null) {
      const a = [], o = r.getAttribute("position");
      if (o !== void 0) {
        for (let c = 0; c < o.count; c++)
          a.push(c);
        r.setIndex(a), t = r.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
    }
    const n = t.count - 2, i = [];
    if (e === ia)
      for (let a = 1; a <= n; a++)
        i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else
      for (let a = 0; a < n; a++)
        a % 2 === 0 ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2))) : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const s = r.clone();
    return s.setIndex(i), s.clearGroups(), s;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), r;
}
class Wg extends zi {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new Yg(t);
    }), this.register(function(t) {
      return new s_(t);
    }), this.register(function(t) {
      return new r_(t);
    }), this.register(function(t) {
      return new a_(t);
    }), this.register(function(t) {
      return new Qg(t);
    }), this.register(function(t) {
      return new Zg(t);
    }), this.register(function(t) {
      return new $g(t);
    }), this.register(function(t) {
      return new e_(t);
    }), this.register(function(t) {
      return new Kg(t);
    }), this.register(function(t) {
      return new t_(t);
    }), this.register(function(t) {
      return new Jg(t);
    }), this.register(function(t) {
      return new i_(t);
    }), this.register(function(t) {
      return new n_(t);
    }), this.register(function(t) {
      return new Xg(t);
    }), this.register(function(t) {
      return new o_(t);
    }), this.register(function(t) {
      return new c_(t);
    });
  }
  load(e, t, n, i) {
    const s = this;
    let a;
    if (this.resourcePath !== "")
      a = this.resourcePath;
    else if (this.path !== "") {
      const l = is.extractUrlBase(e);
      a = is.resolveURL(l, this.path);
    } else
      a = is.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(l) {
      i ? i(l) : console.error(l), s.manager.itemError(e), s.manager.itemEnd(e);
    }, c = new xl(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(e, function(l) {
      try {
        s.parse(l, a, function(h) {
          t(h), s.manager.itemEnd(e);
        }, o);
      } catch (h) {
        o(h);
      }
    }, n, o);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let s;
    const a = {}, o = {}, c = new TextDecoder();
    if (typeof e == "string")
      s = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (c.decode(new Uint8Array(e, 0, 4)) === vl) {
        try {
          a[He.KHR_BINARY_GLTF] = new l_(e);
        } catch (d) {
          i && i(d);
          return;
        }
        s = JSON.parse(a[He.KHR_BINARY_GLTF].content);
      } else
        s = JSON.parse(c.decode(e));
    else
      s = e;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new S_(s, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const d = this.pluginCallbacks[h](l);
      d.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[d.name] = d, a[d.name] = !0;
    }
    if (s.extensionsUsed)
      for (let h = 0; h < s.extensionsUsed.length; ++h) {
        const d = s.extensionsUsed[h], u = s.extensionsRequired || [];
        switch (d) {
          case He.KHR_MATERIALS_UNLIT:
            a[d] = new qg();
            break;
          case He.KHR_DRACO_MESH_COMPRESSION:
            a[d] = new h_(s, this.dracoLoader);
            break;
          case He.KHR_TEXTURE_TRANSFORM:
            a[d] = new d_();
            break;
          case He.KHR_MESH_QUANTIZATION:
            a[d] = new u_();
            break;
          default:
            u.indexOf(d) >= 0 && o[d] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + d + '".');
        }
      }
    l.setExtensions(a), l.setPlugins(o), l.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.parse(e, t, i, s);
    });
  }
}
function jg() {
  let r = {};
  return {
    get: function(e) {
      return r[e];
    },
    add: function(e, t) {
      r[e] = t;
    },
    remove: function(e) {
      delete r[e];
    },
    removeAll: function() {
      r = {};
    }
  };
}
const He = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class Xg {
  constructor(e) {
    this.parser = e, this.name = He.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const s = t.json, c = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e];
    let l;
    const h = new de(16777215);
    c.color !== void 0 && h.setRGB(c.color[0], c.color[1], c.color[2], _t);
    const d = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        l = new da(h), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        l = new cs(h), l.distance = d;
        break;
      case "spot":
        l = new xg(h), l.distance = d, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return l.position.set(0, 0, 0), l.decay = 2, Sn(l, c), c.intensity !== void 0 && (l.intensity = c.intensity), l.name = t.createUniqueName(c.name || "light_" + e), i = Promise.resolve(l), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, s = n.json.nodes[e], o = (s.extensions && s.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(c) {
      return n._getNodeRef(t.cache, o, c);
    });
  }
}
class qg {
  constructor() {
    this.name = He.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return un;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new de(1, 1, 1), e.opacity = 1;
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const a = s.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], _t), e.opacity = a[3];
      }
      s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, rt));
    }
    return Promise.all(i);
  }
}
class Kg {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name].emissiveStrength;
    return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
  }
}
class Yg {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : mn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Te(o, o);
    }
    return Promise.all(s);
  }
}
class Jg {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : mn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class Qg {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : mn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [];
    t.sheenColor = new de(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], _t);
    }
    return a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, rt)), a.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(s);
  }
}
class Zg {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : mn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(s);
  }
}
class $g {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : mn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 1 / 0;
    const o = a.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new de().setRGB(o[0], o[1], o[2], _t), Promise.all(s);
  }
}
class e_ {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : mn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class t_ {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : mn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return t.specularColor = new de().setRGB(o[0], o[1], o[2], _t), a.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, rt)), Promise.all(s);
  }
}
class n_ {
  constructor(e) {
    this.parser = e, this.name = He.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : mn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1, a.bumpTexture !== void 0 && s.push(n.assignTexture(t, "bumpMap", a.bumpTexture)), Promise.all(s);
  }
}
class i_ {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : mn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && s.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(s);
  }
}
class s_ {
  constructor(e) {
    this.parser = e, this.name = He.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const s = i.extensions[this.name], a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, s.source, a);
  }
}
class r_ {
  constructor(e) {
    this.parser = e, this.name = He.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const a = s.extensions[t], o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function(l) {
      if (l) return n.loadTextureImage(e, a.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class a_ {
  constructor(e) {
    this.parser = e, this.name = He.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const a = s.extensions[t], o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function(l) {
      if (l) return n.loadTextureImage(e, a.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class o_ {
  constructor(e) {
    this.name = He.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], s = this.parser.getDependency("buffer", i.buffer), a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return s.then(function(o) {
        const c = i.byteOffset || 0, l = i.byteLength || 0, h = i.count, d = i.byteStride, u = new Uint8Array(o, c, l);
        return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(h, d, u, i.mode, i.filter).then(function(p) {
          return p.buffer;
        }) : a.ready.then(function() {
          const p = new ArrayBuffer(h * d);
          return a.decodeGltfBuffer(new Uint8Array(p), h, d, u, i.mode, i.filter), p;
        });
      });
    } else
      return null;
  }
}
class c_ {
  constructor(e) {
    this.name = He.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const l of i.primitives)
      if (l.mode !== Ft.TRIANGLES && l.mode !== Ft.TRIANGLE_STRIP && l.mode !== Ft.TRIANGLE_FAN && l.mode !== void 0)
        return null;
    const a = n.extensions[this.name].attributes, o = [], c = {};
    for (const l in a)
      o.push(this.parser.getDependency("accessor", a[l]).then((h) => (c[l] = h, c[l])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((l) => {
      const h = l.pop(), d = h.isGroup ? h.children : [h], u = l[0].count, p = [];
      for (const g of d) {
        const _ = new Oe(), m = new L(), f = new qt(), v = new L(1, 1, 1), b = new sg(g.geometry, g.material, u);
        for (let E = 0; E < u; E++)
          c.TRANSLATION && m.fromBufferAttribute(c.TRANSLATION, E), c.ROTATION && f.fromBufferAttribute(c.ROTATION, E), c.SCALE && v.fromBufferAttribute(c.SCALE, E), b.setMatrixAt(E, _.compose(m, f, v));
        for (const E in c)
          if (E === "_COLOR_0") {
            const C = c[E];
            b.instanceColor = new ca(C.array, C.itemSize, C.normalized);
          } else E !== "TRANSLATION" && E !== "ROTATION" && E !== "SCALE" && g.geometry.setAttribute(E, c[E]);
        et.prototype.copy.call(b, g), this.parser.assignFinalMaterial(b), p.push(b);
      }
      return h.isGroup ? (h.clear(), h.add(...p), h) : p[0];
    }));
  }
}
const vl = "glTF", $i = 12, Ec = { JSON: 1313821514, BIN: 5130562 };
class l_ {
  constructor(e) {
    this.name = He.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, $i), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== vl)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - $i, s = new DataView(e, $i);
    let a = 0;
    for (; a < i; ) {
      const o = s.getUint32(a, !0);
      a += 4;
      const c = s.getUint32(a, !0);
      if (a += 4, c === Ec.JSON) {
        const l = new Uint8Array(e, $i + a, o);
        this.content = n.decode(l);
      } else if (c === Ec.BIN) {
        const l = $i + a;
        this.body = e.slice(l, l + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class h_ {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = He.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, c = {}, l = {};
    for (const h in a) {
      const d = ua[h] || h.toLowerCase();
      o[d] = a[h];
    }
    for (const h in e.attributes) {
      const d = ua[h] || h.toLowerCase();
      if (a[h] !== void 0) {
        const u = n.accessors[e.attributes[h]], p = Ai[u.componentType];
        l[d] = p.name, c[d] = u.normalized === !0;
      }
    }
    return t.getDependency("bufferView", s).then(function(h) {
      return new Promise(function(d, u) {
        i.decodeDracoFile(h, function(p) {
          for (const g in p.attributes) {
            const _ = p.attributes[g], m = c[g];
            m !== void 0 && (_.normalized = m);
          }
          d(p);
        }, o, l, _t, u);
      });
    });
  }
}
class d_ {
  constructor() {
    this.name = He.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class u_ {
  constructor() {
    this.name = He.KHR_MESH_QUANTIZATION;
  }
}
class Ml extends ls {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i * 3 + i;
    for (let a = 0; a !== i; a++)
      t[a] = n[s + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = o * 2, l = o * 3, h = i - t, d = (n - t) / h, u = d * d, p = u * d, g = e * l, _ = g - l, m = -2 * p + 3 * u, f = p - u, v = 1 - m, b = f - u + d;
    for (let E = 0; E !== o; E++) {
      const C = a[_ + E + o], T = a[_ + E + c] * h, w = a[g + E + o], G = a[g + E] * h;
      s[E] = v * C + b * T + m * w + f * G;
    }
    return s;
  }
}
const f_ = new qt();
class p_ extends Ml {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return f_.fromArray(s).normalize().toArray(s), s;
  }
}
const Ft = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, Ai = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, Ac = {
  9728: pt,
  9729: Ct,
  9984: na,
  9985: Dc,
  9986: Ws,
  9987: Wn
}, Tc = {
  33071: Bt,
  33648: qs,
  10497: Ri
}, Kr = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, ua = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, Mn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, m_ = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: Li,
  STEP: rs
}, Yr = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function g_(r) {
  return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new qn({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: pn
  })), r.DefaultMaterial;
}
function Nn(r, e, t) {
  for (const n in t.extensions)
    r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function Sn(r, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function __(r, e, t) {
  let n = !1, i = !1, s = !1;
  for (let l = 0, h = e.length; l < h; l++) {
    const d = e[l];
    if (d.POSITION !== void 0 && (n = !0), d.NORMAL !== void 0 && (i = !0), d.COLOR_0 !== void 0 && (s = !0), n && i && s) break;
  }
  if (!n && !i && !s) return Promise.resolve(r);
  const a = [], o = [], c = [];
  for (let l = 0, h = e.length; l < h; l++) {
    const d = e[l];
    if (n) {
      const u = d.POSITION !== void 0 ? t.getDependency("accessor", d.POSITION) : r.attributes.position;
      a.push(u);
    }
    if (i) {
      const u = d.NORMAL !== void 0 ? t.getDependency("accessor", d.NORMAL) : r.attributes.normal;
      o.push(u);
    }
    if (s) {
      const u = d.COLOR_0 !== void 0 ? t.getDependency("accessor", d.COLOR_0) : r.attributes.color;
      c.push(u);
    }
  }
  return Promise.all([
    Promise.all(a),
    Promise.all(o),
    Promise.all(c)
  ]).then(function(l) {
    const h = l[0], d = l[1], u = l[2];
    return n && (r.morphAttributes.position = h), i && (r.morphAttributes.normal = d), s && (r.morphAttributes.color = u), r.morphTargetsRelative = !0, r;
  });
}
function b_(r, e) {
  if (r.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      r.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (r.morphTargetInfluences.length === t.length) {
      r.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        r.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function x_(r) {
  let e;
  const t = r.extensions && r.extensions[He.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Jr(t.attributes) : e = r.indices + ":" + Jr(r.attributes) + ":" + r.mode, r.targets !== void 0)
    for (let n = 0, i = r.targets.length; n < i; n++)
      e += ":" + Jr(r.targets[n]);
  return e;
}
function Jr(r) {
  let e = "";
  const t = Object.keys(r).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + r[t[n]] + ";";
  return e;
}
function fa(r) {
  switch (r) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function v_(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const M_ = new Oe();
class S_ {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new jg(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = !1, s = -1;
    typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, s = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && s < 98 ? this.textureLoader = new Aa(this.options.manager) : this.textureLoader = new Sg(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new xl(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, s = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(a) {
      return a._markDefs && a._markDefs();
    }), Promise.all(this._invokeAll(function(a) {
      return a.beforeRoot && a.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(a) {
      const o = {
        scene: a[0][i.scene || 0],
        scenes: a[0],
        animations: a[1],
        cameras: a[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      return Nn(s, o, i), Sn(o, i), Promise.all(n._invokeAll(function(c) {
        return c.afterRoot && c.afterRoot(o);
      })).then(function() {
        e(o);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i].joints;
      for (let o = 0, c = a.length; o < c; o++)
        e[a[o]].isBone = !0;
    }
    for (let i = 0, s = e.length; i < s; i++) {
      const a = e[i];
      a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(), s = (a, o) => {
      const c = this.associations.get(a);
      c != null && this.associations.set(o, c);
      for (const [l, h] of a.children.entries())
        s(h, o.children[l]);
    };
    return s(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const s = e(t[i]);
      s && n.push(s);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(s) {
            return s.loadNode && s.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(s) {
            return s.loadMesh && s.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(s) {
            return s.loadBufferView && s.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(s) {
            return s.loadMaterial && s.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(s) {
            return s.loadTexture && s.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(s) {
            return s.loadAnimation && s.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(s) {
            return s != this && s.getDependency && s.getDependency(e, t);
          }), !i)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(s, a) {
        return n.getDependency(e, a);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(s, a) {
      n.load(is.resolveURL(t.uri, i.path), s, void 0, function() {
        a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, s = t.byteOffset || 0;
      return n.slice(s, s + i);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const a = Kr[i.type], o = Ai[i.componentType], c = i.normalized === !0, l = new o(i.count * a);
      return Promise.resolve(new gt(l, a, c));
    }
    const s = [];
    return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(a) {
      const o = a[0], c = Kr[i.type], l = Ai[i.componentType], h = l.BYTES_PER_ELEMENT, d = h * c, u = i.byteOffset || 0, p = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let _, m;
      if (p && p !== d) {
        const f = Math.floor(u / p), v = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + f + ":" + i.count;
        let b = t.cache.get(v);
        b || (_ = new l(o, f * p, i.count * p / h), b = new hl(_, p / h), t.cache.add(v, b)), m = new os(b, c, u % p / h, g);
      } else
        o === null ? _ = new l(i.count * c) : _ = new l(o, u, i.count * c), m = new gt(_, c, g);
      if (i.sparse !== void 0) {
        const f = Kr.SCALAR, v = Ai[i.sparse.indices.componentType], b = i.sparse.indices.byteOffset || 0, E = i.sparse.values.byteOffset || 0, C = new v(a[1], b, i.sparse.count * f), T = new l(a[2], E, i.sparse.count * c);
        o !== null && (m = new gt(m.array.slice(), m.itemSize, m.normalized));
        for (let w = 0, G = C.length; w < G; w++) {
          const M = C[w];
          if (m.setX(M, T[w * c]), c >= 2 && m.setY(M, T[w * c + 1]), c >= 3 && m.setZ(M, T[w * c + 2]), c >= 4 && m.setW(M, T[w * c + 3]), c >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return m;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, s = t.textures[e].source, a = t.images[s];
    let o = this.textureLoader;
    if (a.uri) {
      const c = n.manager.getHandler(a.uri);
      c !== null && (o = c);
    }
    return this.loadTextureImage(e, s, o);
  }
  loadTextureImage(e, t, n) {
    const i = this, s = this.json, a = s.textures[e], o = s.images[t], c = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[c])
      return this.textureCache[c];
    const l = this.loadImageSource(t, n).then(function(h) {
      h.flipY = !1, h.name = a.name || o.name || "", h.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (h.name = o.uri);
      const u = (s.samplers || {})[a.sampler] || {};
      return h.magFilter = Ac[u.magFilter] || Ct, h.minFilter = Ac[u.minFilter] || Wn, h.wrapS = Tc[u.wrapS] || Ri, h.wrapT = Tc[u.wrapT] || Ri, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[c] = l, l;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, s = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((d) => d.clone());
    const a = i.images[e], o = self.URL || self.webkitURL;
    let c = a.uri || "", l = !1;
    if (a.bufferView !== void 0)
      c = n.getDependency("bufferView", a.bufferView).then(function(d) {
        l = !0;
        const u = new Blob([d], { type: a.mimeType });
        return c = o.createObjectURL(u), c;
      });
    else if (a.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(c).then(function(d) {
      return new Promise(function(u, p) {
        let g = u;
        t.isImageBitmapLoader === !0 && (g = function(_) {
          const m = new mt(_);
          m.needsUpdate = !0, u(m);
        }), t.load(is.resolveURL(d, s.path), g, void 0, p);
      });
    }).then(function(d) {
      return l === !0 && o.revokeObjectURL(c), d.userData.mimeType = a.mimeType || v_(a.uri), d;
    }).catch(function(d) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", c), d;
    });
    return this.sourceCache[e] = h, h;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, i) {
    const s = this;
    return this.getDependency("texture", n.index).then(function(a) {
      if (!a) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), s.extensions[He.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[He.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const c = s.associations.get(a);
          a = s.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(a, o), s.associations.set(a, c);
        }
      }
      return i !== void 0 && (a.colorSpace = i), e[t] = a, a;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, s = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c || (c = new cr(), Kt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, c.sizeAttenuation = !1, this.cache.add(o, c)), n = c;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c || (c = new Sa(), Kt.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, this.cache.add(o, c)), n = c;
    }
    if (i || s || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"), s && (o += "vertex-colors:"), a && (o += "flat-shading:");
      let c = this.cache.get(o);
      c || (c = n.clone(), s && (c.vertexColors = !0), a && (c.flatShading = !0), i && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(o, c), this.associations.set(c, this.associations.get(n))), n = c;
    }
    e.material = n;
  }
  getMaterialType() {
    return qn;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, s = n.materials[e];
    let a;
    const o = {}, c = s.extensions || {}, l = [];
    if (c[He.KHR_MATERIALS_UNLIT]) {
      const d = i[He.KHR_MATERIALS_UNLIT];
      a = d.getMaterialType(), l.push(d.extendParams(o, s, t));
    } else {
      const d = s.pbrMetallicRoughness || {};
      if (o.color = new de(1, 1, 1), o.opacity = 1, Array.isArray(d.baseColorFactor)) {
        const u = d.baseColorFactor;
        o.color.setRGB(u[0], u[1], u[2], _t), o.opacity = u[3];
      }
      d.baseColorTexture !== void 0 && l.push(t.assignTexture(o, "map", d.baseColorTexture, rt)), o.metalness = d.metallicFactor !== void 0 ? d.metallicFactor : 1, o.roughness = d.roughnessFactor !== void 0 ? d.roughnessFactor : 1, d.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(o, "metalnessMap", d.metallicRoughnessTexture)), l.push(t.assignTexture(o, "roughnessMap", d.metallicRoughnessTexture))), a = this._invokeOne(function(u) {
        return u.getMaterialType && u.getMaterialType(e);
      }), l.push(Promise.all(this._invokeAll(function(u) {
        return u.extendMaterialParams && u.extendMaterialParams(e, o);
      })));
    }
    s.doubleSided === !0 && (o.side = jt);
    const h = s.alphaMode || Yr.OPAQUE;
    if (h === Yr.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, h === Yr.MASK && (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && a !== un && (l.push(t.assignTexture(o, "normalMap", s.normalTexture)), o.normalScale = new Te(1, 1), s.normalTexture.scale !== void 0)) {
      const d = s.normalTexture.scale;
      o.normalScale.set(d, d);
    }
    if (s.occlusionTexture !== void 0 && a !== un && (l.push(t.assignTexture(o, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && a !== un) {
      const d = s.emissiveFactor;
      o.emissive = new de().setRGB(d[0], d[1], d[2], _t);
    }
    return s.emissiveTexture !== void 0 && a !== un && l.push(t.assignTexture(o, "emissiveMap", s.emissiveTexture, rt)), Promise.all(l).then(function() {
      const d = new a(o);
      return s.name && (d.name = s.name), Sn(d, s), t.associations.set(d, { materials: e }), s.extensions && Nn(i, d, s), d;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = We.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function s(o) {
      return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(c) {
        return wc(c, o, t);
      });
    }
    const a = [];
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o], h = x_(l), d = i[h];
      if (d)
        a.push(d.promise);
      else {
        let u;
        l.extensions && l.extensions[He.KHR_DRACO_MESH_COMPRESSION] ? u = s(l) : u = wc(new Rt(), l, t), i[h] = { primitive: l, promise: u }, a.push(u);
      }
    }
    return Promise.all(a);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, s = n.meshes[e], a = s.primitives, o = [];
    for (let c = 0, l = a.length; c < l; c++) {
      const h = a[c].material === void 0 ? g_(this.cache) : this.getDependency("material", a[c].material);
      o.push(h);
    }
    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(c) {
      const l = c.slice(0, c.length - 1), h = c[c.length - 1], d = [];
      for (let p = 0, g = h.length; p < g; p++) {
        const _ = h[p], m = a[p];
        let f;
        const v = l[p];
        if (m.mode === Ft.TRIANGLES || m.mode === Ft.TRIANGLE_STRIP || m.mode === Ft.TRIANGLE_FAN || m.mode === void 0)
          f = s.isSkinnedMesh === !0 ? new eg(_, v) : new St(_, v), f.isSkinnedMesh === !0 && f.normalizeSkinWeights(), m.mode === Ft.TRIANGLE_STRIP ? f.geometry = yc(f.geometry, Gc) : m.mode === Ft.TRIANGLE_FAN && (f.geometry = yc(f.geometry, ia));
        else if (m.mode === Ft.LINES)
          f = new pl(_, v);
        else if (m.mode === Ft.LINE_STRIP)
          f = new ya(_, v);
        else if (m.mode === Ft.LINE_LOOP)
          f = new rg(_, v);
        else if (m.mode === Ft.POINTS)
          f = new Ea(_, v);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(f.geometry.morphAttributes).length > 0 && b_(f, s), f.name = t.createUniqueName(s.name || "mesh_" + e), Sn(f, s), m.extensions && Nn(i, f, m), t.assignFinalMaterial(f), d.push(f);
      }
      for (let p = 0, g = d.length; p < g; p++)
        t.associations.set(d[p], {
          meshes: e,
          primitives: p
        });
      if (d.length === 1)
        return s.extensions && Nn(i, d[0], s), d[0];
      const u = new En();
      s.extensions && Nn(i, u, s), t.associations.set(u, { meshes: e });
      for (let p = 0, g = d.length; p < g; p++)
        u.add(d[p]);
      return u;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new ct(jc.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new ar(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Sn(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, s = t.joints.length; i < s; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const s = i.pop(), a = i, o = [], c = [];
      for (let l = 0, h = a.length; l < h; l++) {
        const d = a[l];
        if (d) {
          o.push(d);
          const u = new Oe();
          s !== null && u.fromArray(s.array, l * 16), c.push(u);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
      }
      return new Ma(o, c);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], s = i.name ? i.name : "animation_" + e, a = [], o = [], c = [], l = [], h = [];
    for (let d = 0, u = i.channels.length; d < u; d++) {
      const p = i.channels[d], g = i.samplers[p.sampler], _ = p.target, m = _.node, f = i.parameters !== void 0 ? i.parameters[g.input] : g.input, v = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 && (a.push(this.getDependency("node", m)), o.push(this.getDependency("accessor", f)), c.push(this.getDependency("accessor", v)), l.push(g), h.push(_));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(c),
      Promise.all(l),
      Promise.all(h)
    ]).then(function(d) {
      const u = d[0], p = d[1], g = d[2], _ = d[3], m = d[4], f = [];
      for (let v = 0, b = u.length; v < b; v++) {
        const E = u[v], C = p[v], T = g[v], w = _[v], G = m[v];
        if (E === void 0) continue;
        E.updateMatrix && E.updateMatrix();
        const M = n._createAnimationTracks(E, C, T, w, G);
        if (M)
          for (let A = 0; A < M.length; A++)
            f.push(M[A]);
      }
      return new ha(s, void 0, f);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
      const a = n._getNodeRef(n.meshCache, i.mesh, s);
      return i.weights !== void 0 && a.traverse(function(o) {
        if (o.isMesh)
          for (let c = 0, l = i.weights.length; c < l; c++)
            o.morphTargetInfluences[c] = i.weights[c];
      }), a;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], s = n._loadNodeShallow(e), a = [], o = i.children || [];
    for (let l = 0, h = o.length; l < h; l++)
      a.push(n.getDependency("node", o[l]));
    const c = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      s,
      Promise.all(a),
      c
    ]).then(function(l) {
      const h = l[0], d = l[1], u = l[2];
      u !== null && h.traverse(function(p) {
        p.isSkinnedMesh && p.bind(u, M_);
      });
      for (let p = 0, g = d.length; p < g; p++)
        h.add(d[p]);
      return h;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const s = t.nodes[e], a = s.name ? i.createUniqueName(s.name) : "", o = [], c = i._invokeOne(function(l) {
      return l.createNodeMesh && l.createNodeMesh(e);
    });
    return c && o.push(c), s.camera !== void 0 && o.push(i.getDependency("camera", s.camera).then(function(l) {
      return i._getNodeRef(i.cameraCache, s.camera, l);
    })), i._invokeAll(function(l) {
      return l.createNodeAttachment && l.createNodeAttachment(e);
    }).forEach(function(l) {
      o.push(l);
    }), this.nodeCache[e] = Promise.all(o).then(function(l) {
      let h;
      if (s.isBone === !0 ? h = new fl() : l.length > 1 ? h = new En() : l.length === 1 ? h = l[0] : h = new et(), h !== l[0])
        for (let d = 0, u = l.length; d < u; d++)
          h.add(l[d]);
      if (s.name && (h.userData.name = s.name, h.name = a), Sn(h, s), s.extensions && Nn(n, h, s), s.matrix !== void 0) {
        const d = new Oe();
        d.fromArray(s.matrix), h.applyMatrix4(d);
      } else
        s.translation !== void 0 && h.position.fromArray(s.translation), s.rotation !== void 0 && h.quaternion.fromArray(s.rotation), s.scale !== void 0 && h.scale.fromArray(s.scale);
      return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, s = new En();
    n.name && (s.name = i.createUniqueName(n.name)), Sn(s, n), n.extensions && Nn(t, s, n);
    const a = n.nodes || [], o = [];
    for (let c = 0, l = a.length; c < l; c++)
      o.push(i.getDependency("node", a[c]));
    return Promise.all(o).then(function(c) {
      for (let h = 0, d = c.length; h < d; h++)
        s.add(c[h]);
      const l = (h) => {
        const d = /* @__PURE__ */ new Map();
        for (const [u, p] of i.associations)
          (u instanceof Kt || u instanceof mt) && d.set(u, p);
        return h.traverse((u) => {
          const p = i.associations.get(u);
          p != null && d.set(u, p);
        }), d;
      };
      return i.associations = l(s), s;
    });
  }
  _createAnimationTracks(e, t, n, i, s) {
    const a = [], o = e.name ? e.name : e.uuid, c = [];
    Mn[s.path] === Mn.weights ? e.traverse(function(u) {
      u.morphTargetInfluences && c.push(u.name ? u.name : u.uuid);
    }) : c.push(o);
    let l;
    switch (Mn[s.path]) {
      case Mn.weights:
        l = Di;
        break;
      case Mn.rotation:
        l = Kn;
        break;
      case Mn.position:
      case Mn.scale:
        l = Ui;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            l = Di;
            break;
          case 2:
          case 3:
          default:
            l = Ui;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? m_[i.interpolation] : Li, d = this._getArrayFromAccessor(n);
    for (let u = 0, p = c.length; u < p; u++) {
      const g = new l(
        c[u] + "." + Mn[s.path],
        t.array,
        d,
        h
      );
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), a.push(g);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = fa(t.constructor), i = new Float32Array(t.length);
      for (let s = 0, a = t.length; s < a; s++)
        i[s] = t[s] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof Kn ? p_ : Ml;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function y_(r, e, t) {
  const n = e.attributes, i = new Zt();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], c = o.min, l = o.max;
    if (c !== void 0 && l !== void 0) {
      if (i.set(
        new L(c[0], c[1], c[2]),
        new L(l[0], l[1], l[2])
      ), o.normalized) {
        const h = fa(Ai[o.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const s = e.targets;
  if (s !== void 0) {
    const o = new L(), c = new L();
    for (let l = 0, h = s.length; l < h; l++) {
      const d = s[l];
      if (d.POSITION !== void 0) {
        const u = t.json.accessors[d.POSITION], p = u.min, g = u.max;
        if (p !== void 0 && g !== void 0) {
          if (c.setX(Math.max(Math.abs(p[0]), Math.abs(g[0]))), c.setY(Math.max(Math.abs(p[1]), Math.abs(g[1]))), c.setZ(Math.max(Math.abs(p[2]), Math.abs(g[2]))), u.normalized) {
            const _ = fa(Ai[u.componentType]);
            c.multiplyScalar(_);
          }
          o.max(c);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(o);
  }
  r.boundingBox = i;
  const a = new $t();
  i.getCenter(a.center), a.radius = i.min.distanceTo(i.max) / 2, r.boundingSphere = a;
}
function wc(r, e, t) {
  const n = e.attributes, i = [];
  function s(a, o) {
    return t.getDependency("accessor", a).then(function(c) {
      r.setAttribute(o, c);
    });
  }
  for (const a in n) {
    const o = ua[a] || a.toLowerCase();
    o in r.attributes || i.push(s(n[a], o));
  }
  if (e.indices !== void 0 && !r.index) {
    const a = t.getDependency("accessor", e.indices).then(function(o) {
      r.setIndex(o);
    });
    i.push(a);
  }
  return je.workingColorSpace !== _t && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`), Sn(r, e), y_(r, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? __(r, e.targets, t) : r;
  });
}
var E_ = function() {
  var r = "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb", e = "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb", t = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]), n = new Uint8Array([32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115]);
  if (typeof WebAssembly != "object")
    return {
      supported: !1
    };
  var i = WebAssembly.validate(t) ? e : r, s, a = WebAssembly.instantiate(o(i), {}).then(function(f) {
    s = f.instance, s.exports.__wasm_call_ctors();
  });
  function o(f) {
    for (var v = new Uint8Array(f.length), b = 0; b < f.length; ++b) {
      var E = f.charCodeAt(b);
      v[b] = E > 96 ? E - 97 : E > 64 ? E - 39 : E + 4;
    }
    for (var C = 0, b = 0; b < f.length; ++b)
      v[C++] = v[b] < 60 ? n[v[b]] : (v[b] - 60) * 64 + v[++b];
    return v.buffer.slice(0, C);
  }
  function c(f, v, b, E, C, T) {
    var w = s.exports.sbrk, G = b + 3 & -4, M = w(G * E), A = w(C.length), k = new Uint8Array(s.exports.memory.buffer);
    k.set(C, A);
    var X = f(M, b, E, A, C.length);
    if (X == 0 && T && T(M, G, E), v.set(k.subarray(M, M + b * E)), w(M - w(0)), X != 0)
      throw new Error("Malformed buffer data: " + X);
  }
  var l = {
    NONE: "",
    OCTAHEDRAL: "meshopt_decodeFilterOct",
    QUATERNION: "meshopt_decodeFilterQuat",
    EXPONENTIAL: "meshopt_decodeFilterExp"
  }, h = {
    ATTRIBUTES: "meshopt_decodeVertexBuffer",
    TRIANGLES: "meshopt_decodeIndexBuffer",
    INDICES: "meshopt_decodeIndexSequence"
  }, d = [], u = 0;
  function p(f) {
    var v = {
      object: new Worker(f),
      pending: 0,
      requests: {}
    };
    return v.object.onmessage = function(b) {
      var E = b.data;
      v.pending -= E.count, v.requests[E.id][E.action](E.value), delete v.requests[E.id];
    }, v;
  }
  function g(f) {
    for (var v = "var instance; var ready = WebAssembly.instantiate(new Uint8Array([" + new Uint8Array(o(i)) + "]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;" + c.toString() + m.toString(), b = new Blob([v], { type: "text/javascript" }), E = URL.createObjectURL(b), C = 0; C < f; ++C)
      d[C] = p(E);
    URL.revokeObjectURL(E);
  }
  function _(f, v, b, E, C) {
    for (var T = d[0], w = 1; w < d.length; ++w)
      d[w].pending < T.pending && (T = d[w]);
    return new Promise(function(G, M) {
      var A = new Uint8Array(b), k = u++;
      T.pending += f, T.requests[k] = { resolve: G, reject: M }, T.object.postMessage({ id: k, count: f, size: v, source: A, mode: E, filter: C }, [A.buffer]);
    });
  }
  function m(f) {
    a.then(function() {
      var v = f.data;
      try {
        var b = new Uint8Array(v.count * v.size);
        c(s.exports[v.mode], b, v.count, v.size, v.source, s.exports[v.filter]), self.postMessage({ id: v.id, count: v.count, action: "resolve", value: b }, [b.buffer]);
      } catch (E) {
        self.postMessage({ id: v.id, count: v.count, action: "reject", value: E });
      }
    });
  }
  return {
    ready: a,
    supported: !0,
    useWorkers: function(f) {
      g(f);
    },
    decodeVertexBuffer: function(f, v, b, E, C) {
      c(s.exports.meshopt_decodeVertexBuffer, f, v, b, E, s.exports[l[C]]);
    },
    decodeIndexBuffer: function(f, v, b, E) {
      c(s.exports.meshopt_decodeIndexBuffer, f, v, b, E);
    },
    decodeIndexSequence: function(f, v, b, E) {
      c(s.exports.meshopt_decodeIndexSequence, f, v, b, E);
    },
    decodeGltfBuffer: function(f, v, b, E, C, T) {
      c(s.exports[h[C]], f, v, b, E, s.exports[l[T]]);
    },
    decodeGltfBufferAsync: function(f, v, b, E, C) {
      return d.length > 0 ? _(f, v, b, h[E], l[C]) : a.then(function() {
        var T = new Uint8Array(f * v);
        return c(s.exports[h[E]], T, f, v, b, s.exports[l[C]]), T;
      });
    }
  };
}();
const A_ = "https://cdn.jsdelivr.net/gh/OTaga2k25/otaga-ui@main/three-effects/models/sherubhai.glb", U_ = [
  "Idle",
  "Walk",
  "Run",
  "LookAround",
  "Aim",
  "Shoot",
  "GetIn",
  "Wave",
  "Jump",
  "Sit",
  "Drive",
  "Dance",
  "Clap"
];
let T_ = class {
  constructor(e, t = {}) {
    this.container = e, this.animations = [], this.scene = new Oi(), this.camera = new ct(30, 1, 0.1, 100), this.holder = new En(), this.mixer = null, this.actions = /* @__PURE__ */ new Map(), this.current = null, this.clock = new Gi(), this.frameId = 0, this.visible = !0, this.dragging = !1, this.lastX = 0, this.destroyed = !1, this.io = null, this.ro = null, this.fitHeight = 1.8, this.fitCenterY = 0.9, this.opts = {
      url: t.url ?? A_,
      animation: t.animation ?? "Idle",
      background: t.background ?? null,
      drag: t.drag ?? !0,
      autoRotate: t.autoRotate ?? !1,
      zoom: t.zoom ?? 1,
      rotationY: t.rotationY ?? 0,
      onLoad: t.onLoad,
      onError: t.onError
    }, this.renderer = new Qn({ antialias: !0, alpha: !0 }), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)), this.opts.background !== null ? this.renderer.setClearColor(this.opts.background, 1) : this.renderer.setClearColor(0, 0);
    const n = this.renderer.domElement;
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.style.touchAction = this.opts.drag ? "pan-y" : "auto", this.opts.drag && (n.style.cursor = "grab"), e.appendChild(n), this.scene.add(new _g(16777215, 9080732, 1.1));
    const i = new da(16773597, 2.1);
    i.position.set(2.5, 4, 3.5), this.scene.add(i);
    const s = new da(10335487, 1.2);
    s.position.set(-3, 2.5, -3), this.scene.add(s), this.scene.add(this.holder), this.holder.rotation.y = this.opts.rotationY, this.holder.add(this.makeShadow()), this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.opts.drag && (n.addEventListener("pointerdown", this.onPointerDown), window.addEventListener("pointermove", this.onPointerMove), window.addEventListener("pointerup", this.onPointerUp)), this.ro = new ResizeObserver(() => this.resize()), this.ro.observe(e), this.io = new IntersectionObserver((a) => {
      var o;
      this.visible = ((o = a[0]) == null ? void 0 : o.isIntersecting) ?? !0;
    }), this.io.observe(e), this.resize(), this.ready = this.load(), this.loop = this.loop.bind(this), this.frameId = requestAnimationFrame(this.loop);
  }
  /** Switch clip, e.g. model.play('Dance'). Returns false if there is no such clip. */
  play(e, t = 0.25) {
    var i;
    const n = this.actions.get(e);
    return n ? (this.current === n || (n.reset().fadeIn(t).play(), (i = this.current) == null || i.fadeOut(t), this.current = n), !0) : !1;
  }
  /** Remove the canvas and free the GPU memory. */
  destroy() {
    var t, n;
    this.destroyed = !0, cancelAnimationFrame(this.frameId), (t = this.ro) == null || t.disconnect(), (n = this.io) == null || n.disconnect();
    const e = this.renderer.domElement;
    e.removeEventListener("pointerdown", this.onPointerDown), window.removeEventListener("pointermove", this.onPointerMove), window.removeEventListener("pointerup", this.onPointerUp), this.scene.traverse((i) => {
      const s = i;
      s.geometry && s.geometry.dispose();
      const a = s.material;
      (Array.isArray(a) ? a : a ? [a] : []).forEach((o) => {
        var c;
        (c = o.map) == null || c.dispose(), o.dispose();
      });
    }), this.renderer.dispose(), e.remove();
  }
  // ── internals ────────────────────────────────────────────────────────────
  async load() {
    var e, t;
    try {
      const i = await new Wg().setMeshoptDecoder(E_).loadAsync(this.opts.url);
      if (this.destroyed) return this;
      const s = i.scene;
      s.traverse((o) => {
        const c = o;
        if (c.isMesh) {
          c.frustumCulled = !1;
          const l = c.material;
          l.metalness = 0, l.roughness = 0.8;
        }
      });
      const a = new Zt().setFromObject(s);
      s.position.x -= (a.min.x + a.max.x) / 2, s.position.z -= (a.min.z + a.max.z) / 2, s.position.y -= a.min.y, this.fitHeight = a.max.y - a.min.y || 1.8, this.fitCenterY = this.fitHeight / 2, this.holder.add(s), this.frame(), this.mixer = new Ng(s);
      for (const o of i.animations) this.actions.set(o.name, this.mixer.clipAction(o));
      this.animations = i.animations.map((o) => o.name), this.play(this.opts.animation, 0) || this.play("Idle", 0), (t = (e = this.opts).onLoad) == null || t.call(e, this);
    } catch (n) {
      this.opts.onError ? this.opts.onError(n) : console.error("[SherubhaiModel] could not load", this.opts.url, n);
    }
    return this;
  }
  makeShadow() {
    const e = document.createElement("canvas");
    e.width = e.height = 128;
    const t = e.getContext("2d"), n = t.createRadialGradient(64, 64, 0, 64, 64, 64);
    n.addColorStop(0, "rgba(0,0,0,0.55)"), n.addColorStop(1, "rgba(0,0,0,0)"), t.fillStyle = n, t.fillRect(0, 0, 128, 128);
    const i = new St(
      new rr(1.4, 1.4),
      new un({ map: new ml(e), transparent: !0, depthWrite: !1 })
    );
    return i.rotation.x = -Math.PI / 2, i.position.y = 4e-3, i;
  }
  frame() {
    const e = jc.degToRad(this.camera.fov), t = this.camera.aspect || 1, n = this.fitHeight * 1.18 / (2 * Math.tan(e / 2)), i = 1.6 * 1.1 / (2 * Math.tan(e / 2) * t), s = Math.max(n, i) / this.opts.zoom;
    this.camera.position.set(0, this.fitCenterY * 0.9 + 0.1, s), this.camera.lookAt(0, this.fitCenterY, 0);
  }
  resize() {
    const e = this.container.clientWidth || 300, t = this.container.clientHeight || 400;
    this.renderer.setSize(e, t, !1), this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.frame();
  }
  onPointerDown(e) {
    this.dragging = !0, this.lastX = e.clientX, this.renderer.domElement.style.cursor = "grabbing";
  }
  onPointerMove(e) {
    this.dragging && (this.holder.rotation.y += (e.clientX - this.lastX) * 0.012, this.lastX = e.clientX);
  }
  onPointerUp() {
    this.dragging = !1, this.renderer.domElement.style.cursor = this.opts.drag ? "grab" : "auto";
  }
  loop() {
    var t;
    this.frameId = requestAnimationFrame(this.loop);
    const e = Math.min(this.clock.getDelta(), 0.05);
    this.visible && ((t = this.mixer) == null || t.update(e), this.opts.autoRotate && !this.dragging && (this.holder.rotation.y += e * 0.6), this.renderer.render(this.scene, this.camera));
  }
};
function F_({ className: r, style: e, ...t }) {
  const n = fn(null);
  return Vn(() => {
    if (!n.current) return;
    const i = new Fg(n.current, t);
    return () => i.destroy();
  }, []), /* @__PURE__ */ Ni(
    "div",
    {
      ref: n,
      className: r,
      style: { width: "100%", height: "420px", ...e }
    }
  );
}
function O_({ className: r, style: e, ...t }) {
  const n = fn(null);
  return Vn(() => {
    if (!n.current) return;
    const i = new Bg(n.current, t);
    return () => i.destroy();
  }, []), /* @__PURE__ */ Ni(
    "div",
    {
      ref: n,
      className: r,
      style: { width: "100%", height: "420px", ...e }
    }
  );
}
function B_({ className: r, style: e, ...t }) {
  const n = fn(null);
  return Vn(() => {
    if (!n.current) return;
    const i = new kg(n.current, t);
    return () => i.destroy();
  }, []), /* @__PURE__ */ Ni(
    "div",
    {
      ref: n,
      className: r,
      style: { width: "100%", height: "100%", position: "absolute", inset: 0, ...e }
    }
  );
}
const k_ = Rc(
  function({ className: e, style: t, ...n }, i) {
    const s = fn(null), a = fn(null);
    return Vn(() => {
      if (s.current)
        return a.current = new zg(s.current, n), () => {
          var o;
          return (o = a.current) == null ? void 0 : o.destroy();
        };
    }, []), Cc(i, () => ({
      trigger: () => {
        var o;
        return (o = a.current) == null ? void 0 : o.trigger();
      }
    })), /* @__PURE__ */ Ni(
      "div",
      {
        ref: s,
        className: e,
        style: { width: "100%", height: "300px", cursor: "pointer", ...t }
      }
    );
  }
), z_ = Rc(
  function({ className: e, style: t, ...n }, i) {
    const s = fn(null), a = fn(null);
    return Vn(() => {
      if (s.current)
        return a.current = new Vg(s.current, n), () => {
          var o;
          return (o = a.current) == null ? void 0 : o.destroy();
        };
    }, []), Cc(i, () => ({
      next: () => {
        var o;
        return (o = a.current) == null ? void 0 : o.next();
      }
    })), /* @__PURE__ */ Ni(
      "div",
      {
        ref: s,
        className: e,
        style: { width: "100%", height: "180px", ...t }
      }
    );
  }
);
function G_({ className: r, style: e, animation: t = "Idle", ...n }) {
  const i = fn(null), s = fn(null);
  return Vn(() => {
    if (!i.current) return;
    const a = new T_(i.current, { ...n, animation: t });
    return s.current = a, () => {
      a.destroy(), s.current = null;
    };
  }, [n.url]), Vn(() => {
    const a = s.current;
    a && a.ready.then(() => a.play(t));
  }, [t]), /* @__PURE__ */ Ni(
    "div",
    {
      ref: i,
      className: r,
      style: { width: "100%", height: "460px", ...e }
    }
  );
}
export {
  Fg as FloatingCard,
  F_ as FloatingCardReact,
  Bg as GlowCard,
  O_ as GlowCardReact,
  Vg as MorphText,
  z_ as MorphTextReact,
  kg as ParticleBackground,
  B_ as ParticleBackgroundReact,
  zg as RippleEffect,
  k_ as RippleEffectReact,
  U_ as SHERUBHAI_ANIMATIONS,
  A_ as SHERUBHAI_MODEL_URL,
  T_ as SherubhaiModel,
  G_ as SherubhaiModelReact
};
