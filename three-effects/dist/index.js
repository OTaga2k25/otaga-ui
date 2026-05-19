import { jsx as Si } from "react/jsx-runtime";
import { useRef as wn, useEffect as Ei, forwardRef as fo, useImperativeHandle as po } from "react";
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const _s = "160", rl = 0, Is = 1, sl = 2, mo = 1, al = 2, Zt = 3, dn = 0, yt = 1, kt = 2, ln = 0, Qn = 1, rs = 2, Ns = 3, Fs = 4, ol = 5, En = 100, ll = 101, cl = 102, Os = 103, Bs = 104, hl = 200, ul = 201, dl = 202, fl = 203, ss = 204, as = 205, pl = 206, ml = 207, gl = 208, _l = 209, vl = 210, xl = 211, Ml = 212, Sl = 213, El = 214, yl = 0, Tl = 1, Al = 2, ar = 3, bl = 4, wl = 5, Rl = 6, Cl = 7, go = 0, Ll = 1, Pl = 2, cn = 0, Dl = 1, Ul = 2, Il = 3, Nl = 4, Fl = 5, Ol = 6, _o = 300, ti = 301, ni = 302, os = 303, ls = 304, mr = 306, cs = 1e3, Bt = 1001, hs = 1002, Mt = 1003, zs = 1004, yr = 1005, Pt = 1006, Bl = 1007, vi = 1008, hn = 1009, zl = 1010, Gl = 1011, vs = 1012, vo = 1013, an = 1014, on = 1015, xi = 1016, xo = 1017, Mo = 1018, Tn = 1020, Hl = 1021, zt = 1023, Vl = 1024, kl = 1025, An = 1026, ii = 1027, Wl = 1028, So = 1029, Xl = 1030, Eo = 1031, yo = 1033, Tr = 33776, Ar = 33777, br = 33778, wr = 33779, Gs = 35840, Hs = 35841, Vs = 35842, ks = 35843, To = 36196, Ws = 37492, Xs = 37496, qs = 37808, Ys = 37809, js = 37810, Ks = 37811, Zs = 37812, $s = 37813, Js = 37814, Qs = 37815, ea = 37816, ta = 37817, na = 37818, ia = 37819, ra = 37820, sa = 37821, Rr = 36492, aa = 36494, oa = 36495, ql = 36283, la = 36284, ca = 36285, ha = 36286, Ao = 3e3, bn = 3001, Yl = 3200, jl = 3201, bo = 0, Kl = 1, Ut = "", ct = "srgb", Qt = "srgb-linear", xs = "display-p3", gr = "display-p3-linear", or = "linear", Ke = "srgb", lr = "rec709", cr = "p3", Pn = 7680, ua = 519, Zl = 512, $l = 513, Jl = 514, wo = 515, Ql = 516, ec = 517, tc = 518, nc = 519, us = 35044, da = "300 es", ds = 1035, Jt = 2e3, hr = 2001;
class si {
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
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, o = r.length; s < o; s++)
        r[s].call(this, e);
      e.target = null;
    }
  }
}
const dt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Cr = Math.PI / 180, fs = 180 / Math.PI;
function un() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (dt[i & 255] + dt[i >> 8 & 255] + dt[i >> 16 & 255] + dt[i >> 24 & 255] + "-" + dt[e & 255] + dt[e >> 8 & 255] + "-" + dt[e >> 16 & 15 | 64] + dt[e >> 24 & 255] + "-" + dt[t & 63 | 128] + dt[t >> 8 & 255] + "-" + dt[t >> 16 & 255] + dt[t >> 24 & 255] + dt[n & 255] + dt[n >> 8 & 255] + dt[n >> 16 & 255] + dt[n >> 24 & 255]).toLowerCase();
}
function Et(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function ic(i, e) {
  return (i % e + e) % e;
}
function Lr(i, e, t) {
  return (1 - t) * i + t * e;
}
function fa(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function ps(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function $t(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Xe(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Ue {
  constructor(e = 0, t = 0) {
    Ue.prototype.isVector2 = !0, this.x = e, this.y = t;
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
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
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
    return Math.acos(Et(n, -1, 1));
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
    const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, o = this.y - e.y;
    return this.x = s * n - o * r + e.x, this.y = s * r + o * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class ze {
  constructor(e, t, n, r, s, o, a, l, c) {
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
    ], e !== void 0 && this.set(e, t, n, r, s, o, a, l, c);
  }
  set(e, t, n, r, s, o, a, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = r, h[2] = a, h[3] = t, h[4] = s, h[5] = l, h[6] = n, h[7] = o, h[8] = c, this;
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
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], h = n[4], d = n[7], f = n[2], m = n[5], g = n[8], v = r[0], p = r[3], u = r[6], T = r[1], x = r[4], R = r[7], D = r[2], w = r[5], b = r[8];
    return s[0] = o * v + a * T + l * D, s[3] = o * p + a * x + l * w, s[6] = o * u + a * R + l * b, s[1] = c * v + h * T + d * D, s[4] = c * p + h * x + d * w, s[7] = c * u + h * R + d * b, s[2] = f * v + m * T + g * D, s[5] = f * p + m * x + g * w, s[8] = f * u + m * R + g * b, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8];
    return t * o * h - t * a * c - n * s * h + n * a * l + r * s * c - r * o * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], d = h * o - a * c, f = a * l - h * s, m = c * s - o * l, g = t * d + n * f + r * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / g;
    return e[0] = d * v, e[1] = (r * c - h * n) * v, e[2] = (a * n - r * o) * v, e[3] = f * v, e[4] = (h * t - r * l) * v, e[5] = (r * s - a * t) * v, e[6] = m * v, e[7] = (n * l - c * t) * v, e[8] = (o * t - n * s) * v, this;
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
  setUvTransform(e, t, n, r, s, o, a) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * o + c * a) + o + e,
      -r * c,
      r * l,
      -r * (-c * o + l * a) + a + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(Pr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Pr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Pr.makeTranslation(e, t)), this;
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
    for (let r = 0; r < 9; r++)
      if (t[r] !== n[r]) return !1;
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
const Pr = /* @__PURE__ */ new ze();
function Ro(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function Mi(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function rc() {
  const i = Mi("canvas");
  return i.style.display = "block", i;
}
const pa = {};
function _i(i) {
  i in pa || (pa[i] = !0, console.warn(i));
}
const ma = /* @__PURE__ */ new ze().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), ga = /* @__PURE__ */ new ze().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), Li = {
  [Qt]: {
    transfer: or,
    primaries: lr,
    toReference: (i) => i,
    fromReference: (i) => i
  },
  [ct]: {
    transfer: Ke,
    primaries: lr,
    toReference: (i) => i.convertSRGBToLinear(),
    fromReference: (i) => i.convertLinearToSRGB()
  },
  [gr]: {
    transfer: or,
    primaries: cr,
    toReference: (i) => i.applyMatrix3(ga),
    fromReference: (i) => i.applyMatrix3(ma)
  },
  [xs]: {
    transfer: Ke,
    primaries: cr,
    toReference: (i) => i.convertSRGBToLinear().applyMatrix3(ga),
    fromReference: (i) => i.applyMatrix3(ma).convertLinearToSRGB()
  }
}, sc = /* @__PURE__ */ new Set([Qt, gr]), We = {
  enabled: !0,
  _workingColorSpace: Qt,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(i) {
    if (!sc.has(i))
      throw new Error(`Unsupported working color space, "${i}".`);
    this._workingColorSpace = i;
  },
  convert: function(i, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return i;
    const n = Li[e].toReference, r = Li[t].fromReference;
    return r(n(i));
  },
  fromWorkingColorSpace: function(i, e) {
    return this.convert(i, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(i, e) {
    return this.convert(i, e, this._workingColorSpace);
  },
  getPrimaries: function(i) {
    return Li[i].primaries;
  },
  getTransfer: function(i) {
    return i === Ut ? or : Li[i].transfer;
  }
};
function ei(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Dr(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Dn;
class Co {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Dn === void 0 && (Dn = Mi("canvas")), Dn.width = e.width, Dn.height = e.height;
      const n = Dn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Dn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Mi("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let o = 0; o < s.length; o++)
        s[o] = ei(s[o] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(ei(t[n] / 255) * 255) : t[n] = ei(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let ac = 0;
class Lo {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: ac++ }), this.uuid = un(), this.data = e, this.version = 0;
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
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let o = 0, a = r.length; o < a; o++)
          r[o].isDataTexture ? s.push(Ur(r[o].image)) : s.push(Ur(r[o]));
      } else
        s = Ur(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Ur(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Co.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let oc = 0;
class St extends si {
  constructor(e = St.DEFAULT_IMAGE, t = St.DEFAULT_MAPPING, n = Bt, r = Bt, s = Pt, o = vi, a = zt, l = hn, c = St.DEFAULT_ANISOTROPY, h = Ut) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: oc++ }), this.uuid = un(), this.name = "", this.source = new Lo(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new Ue(0, 0), this.repeat = new Ue(1, 1), this.center = new Ue(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ze(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof h == "string" ? this.colorSpace = h : (_i("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = h === bn ? ct : Ut), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
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
    if (this.mapping !== _o) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case cs:
          e.x = e.x - Math.floor(e.x);
          break;
        case Bt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case hs:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case cs:
          e.y = e.y - Math.floor(e.y);
          break;
        case Bt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case hs:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return _i("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === ct ? bn : Ao;
  }
  set encoding(e) {
    _i("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === bn ? ct : Ut;
  }
}
St.DEFAULT_IMAGE = null;
St.DEFAULT_MAPPING = _o;
St.DEFAULT_ANISOTROPY = 1;
class Ze {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    Ze.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r;
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
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
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
    const t = this.x, n = this.y, r = this.z, s = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * r + o[12] * s, this.y = o[1] * t + o[5] * n + o[9] * r + o[13] * s, this.z = o[2] * t + o[6] * n + o[10] * r + o[14] * s, this.w = o[3] * t + o[7] * n + o[11] * r + o[15] * s, this;
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
    let t, n, r, s;
    const l = e.elements, c = l[0], h = l[4], d = l[8], f = l[1], m = l[5], g = l[9], v = l[2], p = l[6], u = l[10];
    if (Math.abs(h - f) < 0.01 && Math.abs(d - v) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(h + f) < 0.1 && Math.abs(d + v) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(c + m + u - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const x = (c + 1) / 2, R = (m + 1) / 2, D = (u + 1) / 2, w = (h + f) / 4, b = (d + v) / 4, W = (g + p) / 4;
      return x > R && x > D ? x < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(x), r = w / n, s = b / n) : R > D ? R < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(R), n = w / r, s = W / r) : D < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(D), n = b / s, r = W / s), this.set(n, r, s, t), this;
    }
    let T = Math.sqrt((p - g) * (p - g) + (d - v) * (d - v) + (f - h) * (f - h));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (p - g) / T, this.y = (d - v) / T, this.z = (f - h) / T, this.w = Math.acos((c + m + u - 1) / 2), this;
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
class lc extends si {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Ze(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ze(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (_i("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === bn ? ct : Ut), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: Pt,
      depthBuffer: !0,
      stencilBuffer: !1,
      depthTexture: null,
      samples: 0
    }, n), this.texture = new St(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
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
    return this.texture.source = new Lo(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Rn extends lc {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Po extends St {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Mt, this.minFilter = Mt, this.wrapR = Bt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class cc extends St {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Mt, this.minFilter = Mt, this.wrapR = Bt, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class yi {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  static slerpFlat(e, t, n, r, s, o, a) {
    let l = n[r + 0], c = n[r + 1], h = n[r + 2], d = n[r + 3];
    const f = s[o + 0], m = s[o + 1], g = s[o + 2], v = s[o + 3];
    if (a === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = d;
      return;
    }
    if (a === 1) {
      e[t + 0] = f, e[t + 1] = m, e[t + 2] = g, e[t + 3] = v;
      return;
    }
    if (d !== v || l !== f || c !== m || h !== g) {
      let p = 1 - a;
      const u = l * f + c * m + h * g + d * v, T = u >= 0 ? 1 : -1, x = 1 - u * u;
      if (x > Number.EPSILON) {
        const D = Math.sqrt(x), w = Math.atan2(D, u * T);
        p = Math.sin(p * w) / D, a = Math.sin(a * w) / D;
      }
      const R = a * T;
      if (l = l * p + f * R, c = c * p + m * R, h = h * p + g * R, d = d * p + v * R, p === 1 - a) {
        const D = 1 / Math.sqrt(l * l + c * c + h * h + d * d);
        l *= D, c *= D, h *= D, d *= D;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = d;
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, o) {
    const a = n[r], l = n[r + 1], c = n[r + 2], h = n[r + 3], d = s[o], f = s[o + 1], m = s[o + 2], g = s[o + 3];
    return e[t] = a * g + h * d + l * m - c * f, e[t + 1] = l * g + h * f + c * d - a * m, e[t + 2] = c * g + h * m + a * f - l * d, e[t + 3] = h * g - a * d - l * f - c * m, e;
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
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, r = e._y, s = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), h = a(r / 2), d = a(s / 2), f = l(n / 2), m = l(r / 2), g = l(s / 2);
    switch (o) {
      case "XYZ":
        this._x = f * h * d + c * m * g, this._y = c * m * d - f * h * g, this._z = c * h * g + f * m * d, this._w = c * h * d - f * m * g;
        break;
      case "YXZ":
        this._x = f * h * d + c * m * g, this._y = c * m * d - f * h * g, this._z = c * h * g - f * m * d, this._w = c * h * d + f * m * g;
        break;
      case "ZXY":
        this._x = f * h * d - c * m * g, this._y = c * m * d + f * h * g, this._z = c * h * g + f * m * d, this._w = c * h * d - f * m * g;
        break;
      case "ZYX":
        this._x = f * h * d - c * m * g, this._y = c * m * d + f * h * g, this._z = c * h * g - f * m * d, this._w = c * h * d + f * m * g;
        break;
      case "YZX":
        this._x = f * h * d + c * m * g, this._y = c * m * d + f * h * g, this._z = c * h * g - f * m * d, this._w = c * h * d - f * m * g;
        break;
      case "XZY":
        this._x = f * h * d - c * m * g, this._y = c * m * d - f * h * g, this._z = c * h * g + f * m * d, this._w = c * h * d + f * m * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], s = t[8], o = t[1], a = t[5], l = t[9], c = t[2], h = t[6], d = t[10], f = n + a + d;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / m, this._x = (h - l) * m, this._y = (s - c) * m, this._z = (o - r) * m;
    } else if (n > a && n > d) {
      const m = 2 * Math.sqrt(1 + n - a - d);
      this._w = (h - l) / m, this._x = 0.25 * m, this._y = (r + o) / m, this._z = (s + c) / m;
    } else if (a > d) {
      const m = 2 * Math.sqrt(1 + a - n - d);
      this._w = (s - c) / m, this._x = (r + o) / m, this._y = 0.25 * m, this._z = (l + h) / m;
    } else {
      const m = 2 * Math.sqrt(1 + d - n - a);
      this._w = (o - r) / m, this._x = (s + c) / m, this._y = (l + h) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Et(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
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
    const n = e._x, r = e._y, s = e._z, o = e._w, a = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + o * a + r * c - s * l, this._y = r * h + o * l + s * a - n * c, this._z = s * h + o * c + n * l - r * a, this._w = o * h - n * a - r * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, r = this._y, s = this._z, o = this._w;
    let a = o * e._w + n * e._x + r * e._y + s * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
      return this._w = o, this._x = n, this._y = r, this._z = s, this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * o + t * this._w, this._x = m * n + t * this._x, this._y = m * r + t * this._y, this._z = m * s + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, a), d = Math.sin((1 - t) * h) / c, f = Math.sin(t * h) / c;
    return this._w = o * d + this._w * f, this._x = n * d + this._x * f, this._y = r * d + this._y * f, this._z = s * d + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), r = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(r),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(r)
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
    return this.applyQuaternion(_a.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(_a.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements, o = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * o, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * o, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, s = e.x, o = e.y, a = e.z, l = e.w, c = 2 * (o * r - a * n), h = 2 * (a * t - s * r), d = 2 * (s * n - o * t);
    return this.x = t + l * c + o * d - a * h, this.y = n + l * h + a * c - s * d, this.z = r + l * d + s * h - o * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize();
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
    const n = e.x, r = e.y, s = e.z, o = t.x, a = t.y, l = t.z;
    return this.x = r * l - s * a, this.y = s * o - n * l, this.z = n * a - r * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Ir.copy(this).projectOnVector(e), this.sub(Ir);
  }
  reflect(e) {
    return this.sub(Ir.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Et(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
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
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
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
const Ir = /* @__PURE__ */ new L(), _a = /* @__PURE__ */ new yi();
class Ti {
  constructor(e = new L(1 / 0, 1 / 0, 1 / 0), t = new L(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Nt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Nt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Nt.copy(t).multiplyScalar(0.5);
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
        for (let o = 0, a = s.count; o < a; o++)
          e.isMesh === !0 ? e.getVertexPosition(o, Nt) : Nt.fromBufferAttribute(s, o), Nt.applyMatrix4(e.matrixWorld), this.expandByPoint(Nt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Pi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Pi.copy(n.boundingBox)), Pi.applyMatrix4(e.matrixWorld), this.union(Pi);
    }
    const r = e.children;
    for (let s = 0, o = r.length; s < o; s++)
      this.expandByObject(r[s], t);
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
    return this.clampPoint(e.center, Nt), Nt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ci), Di.subVectors(this.max, ci), Un.subVectors(e.a, ci), In.subVectors(e.b, ci), Nn.subVectors(e.c, ci), en.subVectors(In, Un), tn.subVectors(Nn, In), gn.subVectors(Un, Nn);
    let t = [
      0,
      -en.z,
      en.y,
      0,
      -tn.z,
      tn.y,
      0,
      -gn.z,
      gn.y,
      en.z,
      0,
      -en.x,
      tn.z,
      0,
      -tn.x,
      gn.z,
      0,
      -gn.x,
      -en.y,
      en.x,
      0,
      -tn.y,
      tn.x,
      0,
      -gn.y,
      gn.x,
      0
    ];
    return !Nr(t, Un, In, Nn, Di) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Nr(t, Un, In, Nn, Di)) ? !1 : (Ui.crossVectors(en, tn), t = [Ui.x, Ui.y, Ui.z], Nr(t, Un, In, Nn, Di));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Nt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Nt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Xt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Xt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Xt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Xt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Xt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Xt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Xt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Xt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Xt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Xt = [
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L(),
  /* @__PURE__ */ new L()
], Nt = /* @__PURE__ */ new L(), Pi = /* @__PURE__ */ new Ti(), Un = /* @__PURE__ */ new L(), In = /* @__PURE__ */ new L(), Nn = /* @__PURE__ */ new L(), en = /* @__PURE__ */ new L(), tn = /* @__PURE__ */ new L(), gn = /* @__PURE__ */ new L(), ci = /* @__PURE__ */ new L(), Di = /* @__PURE__ */ new L(), Ui = /* @__PURE__ */ new L(), _n = /* @__PURE__ */ new L();
function Nr(i, e, t, n, r) {
  for (let s = 0, o = i.length - 3; s <= o; s += 3) {
    _n.fromArray(i, s);
    const a = r.x * Math.abs(_n.x) + r.y * Math.abs(_n.y) + r.z * Math.abs(_n.z), l = e.dot(_n), c = t.dot(_n), h = n.dot(_n);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a)
      return !1;
  }
  return !0;
}
const hc = /* @__PURE__ */ new Ti(), hi = /* @__PURE__ */ new L(), Fr = /* @__PURE__ */ new L();
class Ai {
  constructor(e = new L(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : hc.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, o = e.length; s < o; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
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
    hi.subVectors(e, this.center);
    const t = hi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(hi, r / n), this.radius += r;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Fr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(hi.copy(e.center).add(Fr)), this.expandByPoint(hi.copy(e.center).sub(Fr))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const qt = /* @__PURE__ */ new L(), Or = /* @__PURE__ */ new L(), Ii = /* @__PURE__ */ new L(), nn = /* @__PURE__ */ new L(), Br = /* @__PURE__ */ new L(), Ni = /* @__PURE__ */ new L(), zr = /* @__PURE__ */ new L();
class Ms {
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
    return this.origin.copy(this.at(e, qt)), this;
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
    const t = qt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (qt.copy(this.origin).addScaledVector(this.direction, t), qt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    Or.copy(e).add(t).multiplyScalar(0.5), Ii.copy(t).sub(e).normalize(), nn.copy(this.origin).sub(Or);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(Ii), a = nn.dot(this.direction), l = -nn.dot(Ii), c = nn.lengthSq(), h = Math.abs(1 - o * o);
    let d, f, m, g;
    if (h > 0)
      if (d = o * l - a, f = o * a - l, g = s * h, d >= 0)
        if (f >= -g)
          if (f <= g) {
            const v = 1 / h;
            d *= v, f *= v, m = d * (d + o * f + 2 * a) + f * (o * d + f + 2 * l) + c;
          } else
            f = s, d = Math.max(0, -(o * f + a)), m = -d * d + f * (f + 2 * l) + c;
        else
          f = -s, d = Math.max(0, -(o * f + a)), m = -d * d + f * (f + 2 * l) + c;
      else
        f <= -g ? (d = Math.max(0, -(-o * s + a)), f = d > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -d * d + f * (f + 2 * l) + c) : f <= g ? (d = 0, f = Math.min(Math.max(-s, -l), s), m = f * (f + 2 * l) + c) : (d = Math.max(0, -(o * s + a)), f = d > 0 ? s : Math.min(Math.max(-s, -l), s), m = -d * d + f * (f + 2 * l) + c);
    else
      f = o > 0 ? -s : s, d = Math.max(0, -(o * f + a)), m = -d * d + f * (f + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, d), r && r.copy(Or).addScaledVector(Ii, f), m;
  }
  intersectSphere(e, t) {
    qt.subVectors(e.center, this.origin);
    const n = qt.dot(this.direction), r = qt.dot(qt) - n * n, s = e.radius * e.radius;
    if (r > s) return null;
    const o = Math.sqrt(s - r), a = n - o, l = n + o;
    return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
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
    let n, r, s, o, a, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, d = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (n = (e.min.x - f.x) * c, r = (e.max.x - f.x) * c) : (n = (e.max.x - f.x) * c, r = (e.min.x - f.x) * c), h >= 0 ? (s = (e.min.y - f.y) * h, o = (e.max.y - f.y) * h) : (s = (e.max.y - f.y) * h, o = (e.min.y - f.y) * h), n > o || s > r || ((s > n || isNaN(n)) && (n = s), (o < r || isNaN(r)) && (r = o), d >= 0 ? (a = (e.min.z - f.z) * d, l = (e.max.z - f.z) * d) : (a = (e.max.z - f.z) * d, l = (e.min.z - f.z) * d), n > l || a > r) || ((a > n || n !== n) && (n = a), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, qt) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    Br.subVectors(t, e), Ni.subVectors(n, e), zr.crossVectors(Br, Ni);
    let o = this.direction.dot(zr), a;
    if (o > 0) {
      if (r) return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    nn.subVectors(this.origin, e);
    const l = a * this.direction.dot(Ni.crossVectors(nn, Ni));
    if (l < 0)
      return null;
    const c = a * this.direction.dot(Br.cross(nn));
    if (c < 0 || l + c > o)
      return null;
    const h = -a * nn.dot(zr);
    return h < 0 ? null : this.at(h / o, s);
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
class Qe {
  constructor(e, t, n, r, s, o, a, l, c, h, d, f, m, g, v, p) {
    Qe.prototype.isMatrix4 = !0, this.elements = [
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
    ], e !== void 0 && this.set(e, t, n, r, s, o, a, l, c, h, d, f, m, g, v, p);
  }
  set(e, t, n, r, s, o, a, l, c, h, d, f, m, g, v, p) {
    const u = this.elements;
    return u[0] = e, u[4] = t, u[8] = n, u[12] = r, u[1] = s, u[5] = o, u[9] = a, u[13] = l, u[2] = c, u[6] = h, u[10] = d, u[14] = f, u[3] = m, u[7] = g, u[11] = v, u[15] = p, this;
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
    return new Qe().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, r = 1 / Fn.setFromMatrixColumn(e, 0).length(), s = 1 / Fn.setFromMatrixColumn(e, 1).length(), o = 1 / Fn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(r), c = Math.sin(r), h = Math.cos(s), d = Math.sin(s);
    if (e.order === "XYZ") {
      const f = o * h, m = o * d, g = a * h, v = a * d;
      t[0] = l * h, t[4] = -l * d, t[8] = c, t[1] = m + g * c, t[5] = f - v * c, t[9] = -a * l, t[2] = v - f * c, t[6] = g + m * c, t[10] = o * l;
    } else if (e.order === "YXZ") {
      const f = l * h, m = l * d, g = c * h, v = c * d;
      t[0] = f + v * a, t[4] = g * a - m, t[8] = o * c, t[1] = o * d, t[5] = o * h, t[9] = -a, t[2] = m * a - g, t[6] = v + f * a, t[10] = o * l;
    } else if (e.order === "ZXY") {
      const f = l * h, m = l * d, g = c * h, v = c * d;
      t[0] = f - v * a, t[4] = -o * d, t[8] = g + m * a, t[1] = m + g * a, t[5] = o * h, t[9] = v - f * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
    } else if (e.order === "ZYX") {
      const f = o * h, m = o * d, g = a * h, v = a * d;
      t[0] = l * h, t[4] = g * c - m, t[8] = f * c + v, t[1] = l * d, t[5] = v * c + f, t[9] = m * c - g, t[2] = -c, t[6] = a * l, t[10] = o * l;
    } else if (e.order === "YZX") {
      const f = o * l, m = o * c, g = a * l, v = a * c;
      t[0] = l * h, t[4] = v - f * d, t[8] = g * d + m, t[1] = d, t[5] = o * h, t[9] = -a * h, t[2] = -c * h, t[6] = m * d + g, t[10] = f - v * d;
    } else if (e.order === "XZY") {
      const f = o * l, m = o * c, g = a * l, v = a * c;
      t[0] = l * h, t[4] = -d, t[8] = c * h, t[1] = f * d + v, t[5] = o * h, t[9] = m * d - g, t[2] = g * d - m, t[6] = a * h, t[10] = v * d + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(uc, e, dc);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return wt.subVectors(e, t), wt.lengthSq() === 0 && (wt.z = 1), wt.normalize(), rn.crossVectors(n, wt), rn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? wt.x += 1e-4 : wt.z += 1e-4, wt.normalize(), rn.crossVectors(n, wt)), rn.normalize(), Fi.crossVectors(wt, rn), r[0] = rn.x, r[4] = Fi.x, r[8] = wt.x, r[1] = rn.y, r[5] = Fi.y, r[9] = wt.y, r[2] = rn.z, r[6] = Fi.z, r[10] = wt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], h = n[1], d = n[5], f = n[9], m = n[13], g = n[2], v = n[6], p = n[10], u = n[14], T = n[3], x = n[7], R = n[11], D = n[15], w = r[0], b = r[4], W = r[8], S = r[12], y = r[1], z = r[5], j = r[9], ne = r[13], C = r[2], O = r[6], H = r[10], X = r[14], k = r[3], V = r[7], Z = r[11], Q = r[15];
    return s[0] = o * w + a * y + l * C + c * k, s[4] = o * b + a * z + l * O + c * V, s[8] = o * W + a * j + l * H + c * Z, s[12] = o * S + a * ne + l * X + c * Q, s[1] = h * w + d * y + f * C + m * k, s[5] = h * b + d * z + f * O + m * V, s[9] = h * W + d * j + f * H + m * Z, s[13] = h * S + d * ne + f * X + m * Q, s[2] = g * w + v * y + p * C + u * k, s[6] = g * b + v * z + p * O + u * V, s[10] = g * W + v * j + p * H + u * Z, s[14] = g * S + v * ne + p * X + u * Q, s[3] = T * w + x * y + R * C + D * k, s[7] = T * b + x * z + R * O + D * V, s[11] = T * W + x * j + R * H + D * Z, s[15] = T * S + x * ne + R * X + D * Q, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], o = e[1], a = e[5], l = e[9], c = e[13], h = e[2], d = e[6], f = e[10], m = e[14], g = e[3], v = e[7], p = e[11], u = e[15];
    return g * (+s * l * d - r * c * d - s * a * f + n * c * f + r * a * m - n * l * m) + v * (+t * l * m - t * c * f + s * o * f - r * o * m + r * c * h - s * l * h) + p * (+t * c * d - t * a * m - s * o * d + n * o * m + s * a * h - n * c * h) + u * (-r * a * h - t * l * d + t * a * f + r * o * d - n * o * f + n * l * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], d = e[9], f = e[10], m = e[11], g = e[12], v = e[13], p = e[14], u = e[15], T = d * p * c - v * f * c + v * l * m - a * p * m - d * l * u + a * f * u, x = g * f * c - h * p * c - g * l * m + o * p * m + h * l * u - o * f * u, R = h * v * c - g * d * c + g * a * m - o * v * m - h * a * u + o * d * u, D = g * d * l - h * v * l - g * a * f + o * v * f + h * a * p - o * d * p, w = t * T + n * x + r * R + s * D;
    if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const b = 1 / w;
    return e[0] = T * b, e[1] = (v * f * s - d * p * s - v * r * m + n * p * m + d * r * u - n * f * u) * b, e[2] = (a * p * s - v * l * s + v * r * c - n * p * c - a * r * u + n * l * u) * b, e[3] = (d * l * s - a * f * s - d * r * c + n * f * c + a * r * m - n * l * m) * b, e[4] = x * b, e[5] = (h * p * s - g * f * s + g * r * m - t * p * m - h * r * u + t * f * u) * b, e[6] = (g * l * s - o * p * s - g * r * c + t * p * c + o * r * u - t * l * u) * b, e[7] = (o * f * s - h * l * s + h * r * c - t * f * c - o * r * m + t * l * m) * b, e[8] = R * b, e[9] = (g * d * s - h * v * s - g * n * m + t * v * m + h * n * u - t * d * u) * b, e[10] = (o * v * s - g * a * s + g * n * c - t * v * c - o * n * u + t * a * u) * b, e[11] = (h * a * s - o * d * s - h * n * c + t * d * c + o * n * m - t * a * m) * b, e[12] = D * b, e[13] = (h * v * r - g * d * r + g * n * f - t * v * f - h * n * p + t * d * p) * b, e[14] = (g * a * r - o * v * r - g * n * l + t * v * l + o * n * p - t * a * p) * b, e[15] = (o * d * r - h * a * r + h * n * l - t * d * l - o * n * f + t * a * f) * b, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
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
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, o = e.x, a = e.y, l = e.z, c = s * o, h = s * a;
    return this.set(
      c * o + n,
      c * a - r * l,
      c * l + r * a,
      0,
      c * a + r * l,
      h * a + n,
      h * l - r * o,
      0,
      c * l - r * a,
      h * l + r * o,
      s * l * l + n,
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
  makeShear(e, t, n, r, s, o) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      o,
      0,
      t,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const r = this.elements, s = t._x, o = t._y, a = t._z, l = t._w, c = s + s, h = o + o, d = a + a, f = s * c, m = s * h, g = s * d, v = o * h, p = o * d, u = a * d, T = l * c, x = l * h, R = l * d, D = n.x, w = n.y, b = n.z;
    return r[0] = (1 - (v + u)) * D, r[1] = (m + R) * D, r[2] = (g - x) * D, r[3] = 0, r[4] = (m - R) * w, r[5] = (1 - (f + u)) * w, r[6] = (p + T) * w, r[7] = 0, r[8] = (g + x) * b, r[9] = (p - T) * b, r[10] = (1 - (f + v)) * b, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = Fn.set(r[0], r[1], r[2]).length();
    const o = Fn.set(r[4], r[5], r[6]).length(), a = Fn.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], Ft.copy(this);
    const c = 1 / s, h = 1 / o, d = 1 / a;
    return Ft.elements[0] *= c, Ft.elements[1] *= c, Ft.elements[2] *= c, Ft.elements[4] *= h, Ft.elements[5] *= h, Ft.elements[6] *= h, Ft.elements[8] *= d, Ft.elements[9] *= d, Ft.elements[10] *= d, t.setFromRotationMatrix(Ft), n.x = s, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, r, s, o, a = Jt) {
    const l = this.elements, c = 2 * s / (t - e), h = 2 * s / (n - r), d = (t + e) / (t - e), f = (n + r) / (n - r);
    let m, g;
    if (a === Jt)
      m = -(o + s) / (o - s), g = -2 * o * s / (o - s);
    else if (a === hr)
      m = -o / (o - s), g = -o * s / (o - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = d, l[12] = 0, l[1] = 0, l[5] = h, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, r, s, o, a = Jt) {
    const l = this.elements, c = 1 / (t - e), h = 1 / (n - r), d = 1 / (o - s), f = (t + e) * c, m = (n + r) * h;
    let g, v;
    if (a === Jt)
      g = (o + s) * d, v = -2 * d;
    else if (a === hr)
      g = s * d, v = -1 * d;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -f, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = v, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++)
      if (t[r] !== n[r]) return !1;
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
const Fn = /* @__PURE__ */ new L(), Ft = /* @__PURE__ */ new Qe(), uc = /* @__PURE__ */ new L(0, 0, 0), dc = /* @__PURE__ */ new L(1, 1, 1), rn = /* @__PURE__ */ new L(), Fi = /* @__PURE__ */ new L(), wt = /* @__PURE__ */ new L(), va = /* @__PURE__ */ new Qe(), xa = /* @__PURE__ */ new yi();
class _r {
  constructor(e = 0, t = 0, n = 0, r = _r.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r;
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
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements, s = r[0], o = r[4], a = r[8], l = r[1], c = r[5], h = r[9], d = r[2], f = r[6], m = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Et(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Et(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-d, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Et(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-d, m), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Et(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(Et(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-d, s)) : (this._x = 0, this._y = Math.atan2(a, m));
        break;
      case "XZY":
        this._z = Math.asin(-Et(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return va.makeRotationFromQuaternion(e), this.setFromRotationMatrix(va, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return xa.setFromEuler(this), this.setFromQuaternion(xa, e);
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
_r.DEFAULT_ORDER = "XYZ";
class Do {
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
let fc = 0;
const Ma = /* @__PURE__ */ new L(), On = /* @__PURE__ */ new yi(), Yt = /* @__PURE__ */ new Qe(), Oi = /* @__PURE__ */ new L(), ui = /* @__PURE__ */ new L(), pc = /* @__PURE__ */ new L(), mc = /* @__PURE__ */ new yi(), Sa = /* @__PURE__ */ new L(1, 0, 0), Ea = /* @__PURE__ */ new L(0, 1, 0), ya = /* @__PURE__ */ new L(0, 0, 1), gc = { type: "added" }, _c = { type: "removed" };
class ht extends si {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: fc++ }), this.uuid = un(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ht.DEFAULT_UP.clone();
    const e = new L(), t = new _r(), n = new yi(), r = new L(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(o), Object.defineProperties(this, {
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
        value: r
      },
      modelViewMatrix: {
        value: new Qe()
      },
      normalMatrix: {
        value: new ze()
      }
    }), this.matrix = new Qe(), this.matrixWorld = new Qe(), this.matrixAutoUpdate = ht.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Do(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return On.setFromAxisAngle(e, t), this.quaternion.multiply(On), this;
  }
  rotateOnWorldAxis(e, t) {
    return On.setFromAxisAngle(e, t), this.quaternion.premultiply(On), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Sa, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ea, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(ya, e);
  }
  translateOnAxis(e, t) {
    return Ma.copy(e).applyQuaternion(this.quaternion), this.position.add(Ma.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Sa, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ea, e);
  }
  translateZ(e) {
    return this.translateOnAxis(ya, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Yt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Oi.copy(e) : Oi.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), ui.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Yt.lookAt(ui, Oi, this.up) : Yt.lookAt(Oi, ui, this.up), this.quaternion.setFromRotationMatrix(Yt), r && (Yt.extractRotation(r.matrixWorld), On.setFromRotationMatrix(Yt), this.quaternion.premultiply(On.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(gc)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(_c)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Yt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Yt.multiply(e.parent.matrixWorld)), e.applyMatrix4(Yt), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0)
        return o;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let s = 0, o = r.length; s < o; s++)
      r[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ui, e, pc), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ui, mc, e), e;
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
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
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
    for (let n = 0, r = t.length; n < r; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const r = this.children;
      for (let s = 0, o = r.length; s < o; s++) {
        const a = r[s];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
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
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.visibility = this._visibility, r.active = this._active, r.bounds = this._bounds.map((a) => ({
      boxInitialized: a.boxInitialized,
      boxMin: a.box.min.toArray(),
      boxMax: a.box.max.toArray(),
      sphereInitialized: a.sphereInitialized,
      sphereRadius: a.sphere.radius,
      sphereCenter: a.sphere.center.toArray()
    })), r.maxGeometryCount = this._maxGeometryCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.geometryCount = this._geometryCount, r.matricesTexture = this._matricesTexture.toJSON(e), this.boundingSphere !== null && (r.boundingSphere = {
      center: r.boundingSphere.center.toArray(),
      radius: r.boundingSphere.radius
    }), this.boundingBox !== null && (r.boundingBox = {
      min: r.boundingBox.min.toArray(),
      max: r.boundingBox.max.toArray()
    }));
    function s(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const d = l[c];
            s(e.shapes, d);
          }
        else
          s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(s(e.materials, this.material[l]));
        r.material = a;
      } else
        r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let a = 0; a < this.children.length; a++)
        r.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries), l = o(e.materials), c = o(e.textures), h = o(e.images), d = o(e.shapes), f = o(e.skeletons), m = o(e.animations), g = o(e.nodes);
      a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), d.length > 0 && (n.shapes = d), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = r, n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const h = a[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
ht.DEFAULT_UP = /* @__PURE__ */ new L(0, 1, 0);
ht.DEFAULT_MATRIX_AUTO_UPDATE = !0;
ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Ot = /* @__PURE__ */ new L(), jt = /* @__PURE__ */ new L(), Gr = /* @__PURE__ */ new L(), Kt = /* @__PURE__ */ new L(), Bn = /* @__PURE__ */ new L(), zn = /* @__PURE__ */ new L(), Ta = /* @__PURE__ */ new L(), Hr = /* @__PURE__ */ new L(), Vr = /* @__PURE__ */ new L(), kr = /* @__PURE__ */ new L();
let Bi = !1;
class Dt {
  constructor(e = new L(), t = new L(), n = new L()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Ot.subVectors(e, t), r.cross(Ot);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, r, s) {
    Ot.subVectors(r, t), jt.subVectors(n, t), Gr.subVectors(e, t);
    const o = Ot.dot(Ot), a = Ot.dot(jt), l = Ot.dot(Gr), c = jt.dot(jt), h = jt.dot(Gr), d = o * c - a * a;
    if (d === 0)
      return s.set(0, 0, 0), null;
    const f = 1 / d, m = (c * l - a * h) * f, g = (o * h - a * l) * f;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, Kt) === null ? !1 : Kt.x >= 0 && Kt.y >= 0 && Kt.x + Kt.y <= 1;
  }
  static getUV(e, t, n, r, s, o, a, l) {
    return Bi === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Bi = !0), this.getInterpolation(e, t, n, r, s, o, a, l);
  }
  static getInterpolation(e, t, n, r, s, o, a, l) {
    return this.getBarycoord(e, t, n, r, Kt) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, Kt.x), l.addScaledVector(o, Kt.y), l.addScaledVector(a, Kt.z), l);
  }
  static isFrontFacing(e, t, n, r) {
    return Ot.subVectors(n, t), jt.subVectors(e, t), Ot.cross(jt).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Ot.subVectors(this.c, this.b), jt.subVectors(this.a, this.b), Ot.cross(jt).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Dt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Dt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, r, s) {
    return Bi === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Bi = !0), Dt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  getInterpolation(e, t, n, r, s) {
    return Dt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return Dt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Dt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let o, a;
    Bn.subVectors(r, n), zn.subVectors(s, n), Hr.subVectors(e, n);
    const l = Bn.dot(Hr), c = zn.dot(Hr);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    Vr.subVectors(e, r);
    const h = Bn.dot(Vr), d = zn.dot(Vr);
    if (h >= 0 && d <= h)
      return t.copy(r);
    const f = l * d - h * c;
    if (f <= 0 && l >= 0 && h <= 0)
      return o = l / (l - h), t.copy(n).addScaledVector(Bn, o);
    kr.subVectors(e, s);
    const m = Bn.dot(kr), g = zn.dot(kr);
    if (g >= 0 && m <= g)
      return t.copy(s);
    const v = m * c - l * g;
    if (v <= 0 && c >= 0 && g <= 0)
      return a = c / (c - g), t.copy(n).addScaledVector(zn, a);
    const p = h * g - m * d;
    if (p <= 0 && d - h >= 0 && m - g >= 0)
      return Ta.subVectors(s, r), a = (d - h) / (d - h + (m - g)), t.copy(r).addScaledVector(Ta, a);
    const u = 1 / (p + v + f);
    return o = v * u, a = f * u, t.copy(n).addScaledVector(Bn, o).addScaledVector(zn, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Uo = {
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
}, sn = { h: 0, s: 0, l: 0 }, zi = { h: 0, s: 0, l: 0 };
function Wr(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class ye {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = ct) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, We.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, r = We.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, We.toWorkingColorSpace(this, r), this;
  }
  setHSL(e, t, n, r = We.workingColorSpace) {
    if (e = ic(e, 1), t = Et(t, 0, 1), n = Et(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = Wr(o, s, e + 1 / 3), this.g = Wr(o, s, e), this.b = Wr(o, s, e - 1 / 3);
    }
    return We.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = ct) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const o = r[1], a = r[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
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
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], o = s.length;
      if (o === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (o === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = ct) {
    const n = Uo[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = ei(e.r), this.g = ei(e.g), this.b = ei(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Dr(e.r), this.g = Dr(e.g), this.b = Dr(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = ct) {
    return We.fromWorkingColorSpace(ft.copy(this), e), Math.round(Et(ft.r * 255, 0, 255)) * 65536 + Math.round(Et(ft.g * 255, 0, 255)) * 256 + Math.round(Et(ft.b * 255, 0, 255));
  }
  getHexString(e = ct) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = We.workingColorSpace) {
    We.fromWorkingColorSpace(ft.copy(this), t);
    const n = ft.r, r = ft.g, s = ft.b, o = Math.max(n, r, s), a = Math.min(n, r, s);
    let l, c;
    const h = (a + o) / 2;
    if (a === o)
      l = 0, c = 0;
    else {
      const d = o - a;
      switch (c = h <= 0.5 ? d / (o + a) : d / (2 - o - a), o) {
        case n:
          l = (r - s) / d + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / d + 2;
          break;
        case s:
          l = (n - r) / d + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = We.workingColorSpace) {
    return We.fromWorkingColorSpace(ft.copy(this), t), e.r = ft.r, e.g = ft.g, e.b = ft.b, e;
  }
  getStyle(e = ct) {
    We.fromWorkingColorSpace(ft.copy(this), e);
    const t = ft.r, n = ft.g, r = ft.b;
    return e !== ct ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(sn), this.setHSL(sn.h + e, sn.s + t, sn.l + n);
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
    this.getHSL(sn), e.getHSL(zi);
    const n = Lr(sn.h, zi.h, t), r = Lr(sn.s, zi.s, t), s = Lr(sn.l, zi.l, t);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this;
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
const ft = /* @__PURE__ */ new ye();
ye.NAMES = Uo;
let vc = 0;
class fn extends si {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: vc++ }), this.uuid = un(), this.name = "", this.type = "Material", this.blending = Qn, this.side = dn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = ss, this.blendDst = as, this.blendEquation = En, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new ye(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ar, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = ua, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Pn, this.stencilZFail = Pn, this.stencilZPass = Pn, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
        const r = this[t];
        if (r === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Qn && (n.blending = this.blending), this.side !== dn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== ss && (n.blendSrc = this.blendSrc), this.blendDst !== as && (n.blendDst = this.blendDst), this.blendEquation !== En && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== ar && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== ua && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Pn && (n.stencilFail = this.stencilFail), this.stencilZFail !== Pn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Pn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const o = [];
      for (const a in s) {
        const l = s[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const s = r(e.textures), o = r(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
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
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s)
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
class Ss extends fn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new ye(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = go, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const it = /* @__PURE__ */ new L(), Gi = /* @__PURE__ */ new Ue();
class Tt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = us, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = on, this.version = 0;
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
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Gi.fromBufferAttribute(this, t), Gi.applyMatrix3(e), this.setXY(t, Gi.x, Gi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        it.fromBufferAttribute(this, t), it.applyMatrix3(e), this.setXYZ(t, it.x, it.y, it.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      it.fromBufferAttribute(this, t), it.applyMatrix4(e), this.setXYZ(t, it.x, it.y, it.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      it.fromBufferAttribute(this, t), it.applyNormalMatrix(e), this.setXYZ(t, it.x, it.y, it.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      it.fromBufferAttribute(this, t), it.transformDirection(e), this.setXYZ(t, it.x, it.y, it.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = $t(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Xe(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Xe(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Xe(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Xe(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Xe(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Xe(t, this.array), n = Xe(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = Xe(t, this.array), n = Xe(n, this.array), r = Xe(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = Xe(t, this.array), n = Xe(n, this.array), r = Xe(r, this.array), s = Xe(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
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
    return this.name !== "" && (e.name = this.name), this.usage !== us && (e.usage = this.usage), e;
  }
}
class Io extends Tt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class No extends Tt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class It extends Tt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let xc = 0;
const Lt = /* @__PURE__ */ new Qe(), Xr = /* @__PURE__ */ new ht(), Gn = /* @__PURE__ */ new L(), Rt = /* @__PURE__ */ new Ti(), di = /* @__PURE__ */ new Ti(), lt = /* @__PURE__ */ new L();
class At extends si {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: xc++ }), this.uuid = un(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Ro(e) ? No : Io)(e, 1) : this.index = e, this;
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
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Lt.makeRotationFromQuaternion(e), this.applyMatrix4(Lt), this;
  }
  rotateX(e) {
    return Lt.makeRotationX(e), this.applyMatrix4(Lt), this;
  }
  rotateY(e) {
    return Lt.makeRotationY(e), this.applyMatrix4(Lt), this;
  }
  rotateZ(e) {
    return Lt.makeRotationZ(e), this.applyMatrix4(Lt), this;
  }
  translate(e, t, n) {
    return Lt.makeTranslation(e, t, n), this.applyMatrix4(Lt), this;
  }
  scale(e, t, n) {
    return Lt.makeScale(e, t, n), this.applyMatrix4(Lt), this;
  }
  lookAt(e) {
    return Xr.lookAt(e), Xr.updateMatrix(), this.applyMatrix4(Xr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Gn).negate(), this.translate(Gn.x, Gn.y, Gn.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new It(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ti());
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
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          Rt.setFromBufferAttribute(s), this.morphTargetsRelative ? (lt.addVectors(this.boundingBox.min, Rt.min), this.boundingBox.expandByPoint(lt), lt.addVectors(this.boundingBox.max, Rt.max), this.boundingBox.expandByPoint(lt)) : (this.boundingBox.expandByPoint(Rt.min), this.boundingBox.expandByPoint(Rt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ai());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Rt.setFromBufferAttribute(e), t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          di.setFromBufferAttribute(a), this.morphTargetsRelative ? (lt.addVectors(Rt.min, di.min), Rt.expandByPoint(lt), lt.addVectors(Rt.max, di.max), Rt.expandByPoint(lt)) : (Rt.expandByPoint(di.min), Rt.expandByPoint(di.max));
        }
      Rt.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        lt.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(lt));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s], l = this.morphTargetsRelative;
          for (let c = 0, h = a.count; c < h; c++)
            lt.fromBufferAttribute(a, c), l && (Gn.fromBufferAttribute(e, c), lt.add(Gn)), r = Math.max(r, n.distanceToSquared(lt));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, r = t.position.array, s = t.normal.array, o = t.uv.array, a = r.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Tt(new Float32Array(4 * a), 4));
    const l = this.getAttribute("tangent").array, c = [], h = [];
    for (let y = 0; y < a; y++)
      c[y] = new L(), h[y] = new L();
    const d = new L(), f = new L(), m = new L(), g = new Ue(), v = new Ue(), p = new Ue(), u = new L(), T = new L();
    function x(y, z, j) {
      d.fromArray(r, y * 3), f.fromArray(r, z * 3), m.fromArray(r, j * 3), g.fromArray(o, y * 2), v.fromArray(o, z * 2), p.fromArray(o, j * 2), f.sub(d), m.sub(d), v.sub(g), p.sub(g);
      const ne = 1 / (v.x * p.y - p.x * v.y);
      isFinite(ne) && (u.copy(f).multiplyScalar(p.y).addScaledVector(m, -v.y).multiplyScalar(ne), T.copy(m).multiplyScalar(v.x).addScaledVector(f, -p.x).multiplyScalar(ne), c[y].add(u), c[z].add(u), c[j].add(u), h[y].add(T), h[z].add(T), h[j].add(T));
    }
    let R = this.groups;
    R.length === 0 && (R = [{
      start: 0,
      count: n.length
    }]);
    for (let y = 0, z = R.length; y < z; ++y) {
      const j = R[y], ne = j.start, C = j.count;
      for (let O = ne, H = ne + C; O < H; O += 3)
        x(
          n[O + 0],
          n[O + 1],
          n[O + 2]
        );
    }
    const D = new L(), w = new L(), b = new L(), W = new L();
    function S(y) {
      b.fromArray(s, y * 3), W.copy(b);
      const z = c[y];
      D.copy(z), D.sub(b.multiplyScalar(b.dot(z))).normalize(), w.crossVectors(W, z);
      const ne = w.dot(h[y]) < 0 ? -1 : 1;
      l[y * 4] = D.x, l[y * 4 + 1] = D.y, l[y * 4 + 2] = D.z, l[y * 4 + 3] = ne;
    }
    for (let y = 0, z = R.length; y < z; ++y) {
      const j = R[y], ne = j.start, C = j.count;
      for (let O = ne, H = ne + C; O < H; O += 3)
        S(n[O + 0]), S(n[O + 1]), S(n[O + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Tt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, m = n.count; f < m; f++)
          n.setXYZ(f, 0, 0, 0);
      const r = new L(), s = new L(), o = new L(), a = new L(), l = new L(), c = new L(), h = new L(), d = new L();
      if (e)
        for (let f = 0, m = e.count; f < m; f += 3) {
          const g = e.getX(f + 0), v = e.getX(f + 1), p = e.getX(f + 2);
          r.fromBufferAttribute(t, g), s.fromBufferAttribute(t, v), o.fromBufferAttribute(t, p), h.subVectors(o, s), d.subVectors(r, s), h.cross(d), a.fromBufferAttribute(n, g), l.fromBufferAttribute(n, v), c.fromBufferAttribute(n, p), a.add(h), l.add(h), c.add(h), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(v, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let f = 0, m = t.count; f < m; f += 3)
          r.fromBufferAttribute(t, f + 0), s.fromBufferAttribute(t, f + 1), o.fromBufferAttribute(t, f + 2), h.subVectors(o, s), d.subVectors(r, s), h.cross(d), n.setXYZ(f + 0, h.x, h.y, h.z), n.setXYZ(f + 1, h.x, h.y, h.z), n.setXYZ(f + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      lt.fromBufferAttribute(e, t), lt.normalize(), e.setXYZ(t, lt.x, lt.y, lt.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array, h = a.itemSize, d = a.normalized, f = new c.constructor(l.length * h);
      let m = 0, g = 0;
      for (let v = 0, p = l.length; v < p; v++) {
        a.isInterleavedBufferAttribute ? m = l[v] * a.data.stride + a.offset : m = l[v] * h;
        for (let u = 0; u < h; u++)
          f[g++] = c[m++];
      }
      return new Tt(f, h, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new At(), n = this.index.array, r = this.attributes;
    for (const a in r) {
      const l = r[a], c = e(l, n);
      t.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [], c = s[a];
      for (let h = 0, d = c.length; h < d; h++) {
        const f = c[h], m = e(f, n);
        l.push(m);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
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
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let d = 0, f = c.length; d < f; d++) {
        const m = c[d];
        h.push(m.toJSON(e.data));
      }
      h.length > 0 && (r[l] = h, s = !0);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
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
    const r = e.attributes;
    for (const c in r) {
      const h = r[c];
      this.setAttribute(c, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const h = [], d = s[c];
      for (let f = 0, m = d.length; f < m; f++)
        h.push(d[f].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, h = o.length; c < h; c++) {
      const d = o[c];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Aa = /* @__PURE__ */ new Qe(), vn = /* @__PURE__ */ new Ms(), Hi = /* @__PURE__ */ new Ai(), ba = /* @__PURE__ */ new L(), Hn = /* @__PURE__ */ new L(), Vn = /* @__PURE__ */ new L(), kn = /* @__PURE__ */ new L(), qr = /* @__PURE__ */ new L(), Vi = /* @__PURE__ */ new L(), ki = /* @__PURE__ */ new Ue(), Wi = /* @__PURE__ */ new Ue(), Xi = /* @__PURE__ */ new Ue(), wa = /* @__PURE__ */ new L(), Ra = /* @__PURE__ */ new L(), Ca = /* @__PURE__ */ new L(), qi = /* @__PURE__ */ new L(), Yi = /* @__PURE__ */ new L();
class Gt extends ht {
  constructor(e = new At(), t = new Ss()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, o = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      Vi.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const h = a[l], d = s[l];
        h !== 0 && (qr.fromBufferAttribute(d, e), o ? Vi.addScaledVector(qr, h) : Vi.addScaledVector(qr.sub(t), h));
      }
      t.add(Vi);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Hi.copy(n.boundingSphere), Hi.applyMatrix4(s), vn.copy(e.ray).recast(e.near), !(Hi.containsPoint(vn.origin) === !1 && (vn.intersectSphere(Hi, ba) === null || vn.origin.distanceToSquared(ba) > (e.far - e.near) ** 2)) && (Aa.copy(s).invert(), vn.copy(e.ray).applyMatrix4(Aa), !(n.boundingBox !== null && vn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, vn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, o = this.material, a = s.index, l = s.attributes.position, c = s.attributes.uv, h = s.attributes.uv1, d = s.attributes.normal, f = s.groups, m = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let g = 0, v = f.length; g < v; g++) {
          const p = f[g], u = o[p.materialIndex], T = Math.max(p.start, m.start), x = Math.min(a.count, Math.min(p.start + p.count, m.start + m.count));
          for (let R = T, D = x; R < D; R += 3) {
            const w = a.getX(R), b = a.getX(R + 1), W = a.getX(R + 2);
            r = ji(this, u, e, n, c, h, d, w, b, W), r && (r.faceIndex = Math.floor(R / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, m.start), v = Math.min(a.count, m.start + m.count);
        for (let p = g, u = v; p < u; p += 3) {
          const T = a.getX(p), x = a.getX(p + 1), R = a.getX(p + 2);
          r = ji(this, o, e, n, c, h, d, T, x, R), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let g = 0, v = f.length; g < v; g++) {
          const p = f[g], u = o[p.materialIndex], T = Math.max(p.start, m.start), x = Math.min(l.count, Math.min(p.start + p.count, m.start + m.count));
          for (let R = T, D = x; R < D; R += 3) {
            const w = R, b = R + 1, W = R + 2;
            r = ji(this, u, e, n, c, h, d, w, b, W), r && (r.faceIndex = Math.floor(R / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const g = Math.max(0, m.start), v = Math.min(l.count, m.start + m.count);
        for (let p = g, u = v; p < u; p += 3) {
          const T = p, x = p + 1, R = p + 2;
          r = ji(this, o, e, n, c, h, d, T, x, R), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
  }
}
function Mc(i, e, t, n, r, s, o, a) {
  let l;
  if (e.side === yt ? l = n.intersectTriangle(o, s, r, !0, a) : l = n.intersectTriangle(r, s, o, e.side === dn, a), l === null) return null;
  Yi.copy(a), Yi.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(Yi);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: Yi.clone(),
    object: i
  };
}
function ji(i, e, t, n, r, s, o, a, l, c) {
  i.getVertexPosition(a, Hn), i.getVertexPosition(l, Vn), i.getVertexPosition(c, kn);
  const h = Mc(i, e, t, n, Hn, Vn, kn, qi);
  if (h) {
    r && (ki.fromBufferAttribute(r, a), Wi.fromBufferAttribute(r, l), Xi.fromBufferAttribute(r, c), h.uv = Dt.getInterpolation(qi, Hn, Vn, kn, ki, Wi, Xi, new Ue())), s && (ki.fromBufferAttribute(s, a), Wi.fromBufferAttribute(s, l), Xi.fromBufferAttribute(s, c), h.uv1 = Dt.getInterpolation(qi, Hn, Vn, kn, ki, Wi, Xi, new Ue()), h.uv2 = h.uv1), o && (wa.fromBufferAttribute(o, a), Ra.fromBufferAttribute(o, l), Ca.fromBufferAttribute(o, c), h.normal = Dt.getInterpolation(qi, Hn, Vn, kn, wa, Ra, Ca, new L()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = {
      a,
      b: l,
      c,
      normal: new L(),
      materialIndex: 0
    };
    Dt.getNormal(Hn, Vn, kn, d.normal), h.face = d;
  }
  return h;
}
class Ln extends At {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: r,
      heightSegments: s,
      depthSegments: o
    };
    const a = this;
    r = Math.floor(r), s = Math.floor(s), o = Math.floor(o);
    const l = [], c = [], h = [], d = [];
    let f = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, s, 0), g("z", "y", "x", 1, -1, n, t, -e, o, s, 1), g("x", "z", "y", 1, 1, e, n, t, r, o, 2), g("x", "z", "y", 1, -1, e, n, -t, r, o, 3), g("x", "y", "z", 1, -1, e, t, n, r, s, 4), g("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new It(c, 3)), this.setAttribute("normal", new It(h, 3)), this.setAttribute("uv", new It(d, 2));
    function g(v, p, u, T, x, R, D, w, b, W, S) {
      const y = R / b, z = D / W, j = R / 2, ne = D / 2, C = w / 2, O = b + 1, H = W + 1;
      let X = 0, k = 0;
      const V = new L();
      for (let Z = 0; Z < H; Z++) {
        const Q = Z * z - ne;
        for (let le = 0; le < O; le++) {
          const G = le * y - j;
          V[v] = G * T, V[p] = Q * x, V[u] = C, c.push(V.x, V.y, V.z), V[v] = 0, V[p] = 0, V[u] = w > 0 ? 1 : -1, h.push(V.x, V.y, V.z), d.push(le / b), d.push(1 - Z / W), X += 1;
        }
      }
      for (let Z = 0; Z < W; Z++)
        for (let Q = 0; Q < b; Q++) {
          const le = f + Q + O * Z, G = f + Q + O * (Z + 1), q = f + (Q + 1) + O * (Z + 1), ae = f + (Q + 1) + O * Z;
          l.push(le, G, ae), l.push(G, q, ae), k += 6;
        }
      a.addGroup(m, k, S), m += k, f += X;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ln(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function ri(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r;
    }
  }
  return e;
}
function xt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = ri(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function Sc(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function Fo(i) {
  return i.getRenderTarget() === null ? i.outputColorSpace : We.workingColorSpace;
}
const Ec = { clone: ri, merge: xt };
var yc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Tc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Cn extends fn {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = yc, this.fragmentShader = Tc, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ri(e.uniforms), this.uniformsGroups = Sc(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const o = this.uniforms[r].value;
      o && o.isTexture ? t.uniforms[r] = {
        type: "t",
        value: o.toJSON(e).uuid
      } : o && o.isColor ? t.uniforms[r] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? t.uniforms[r] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? t.uniforms[r] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? t.uniforms[r] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? t.uniforms[r] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? t.uniforms[r] = {
        type: "m4",
        value: o.toArray()
      } : t.uniforms[r] = {
        value: o
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Oo extends ht {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Qe(), this.projectionMatrix = new Qe(), this.projectionMatrixInverse = new Qe(), this.coordinateSystem = Jt;
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
class pt extends Oo {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
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
    this.fov = fs * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Cr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return fs * 2 * Math.atan(
      Math.tan(Cr * 0.5 * this.fov) / this.zoom
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
  setViewOffset(e, t, n, r, s, o) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Cr * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      s += o.offsetX * r / l, t -= o.offsetY * n / c, r *= o.width / l, n *= o.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Wn = -90, Xn = 1;
class Ac extends ht {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new pt(Wn, Xn, e, t);
    r.layers = this.layers, this.add(r);
    const s = new pt(Wn, Xn, e, t);
    s.layers = this.layers, this.add(s);
    const o = new pt(Wn, Xn, e, t);
    o.layers = this.layers, this.add(o);
    const a = new pt(Wn, Xn, e, t);
    a.layers = this.layers, this.add(a);
    const l = new pt(Wn, Xn, e, t);
    l.layers = this.layers, this.add(l);
    const c = new pt(Wn, Xn, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === Jt)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === hr)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t)
      this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, o, a, l, c, h] = this.children, d = e.getRenderTarget(), f = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const v = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(n, 1, r), e.render(t, o), e.setRenderTarget(n, 2, r), e.render(t, a), e.setRenderTarget(n, 3, r), e.render(t, l), e.setRenderTarget(n, 4, r), e.render(t, c), n.texture.generateMipmaps = v, e.setRenderTarget(n, 5, r), e.render(t, h), e.setRenderTarget(d, f, m), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class Bo extends St {
  constructor(e, t, n, r, s, o, a, l, c, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : ti, super(e, t, n, r, s, o, a, l, c, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class bc extends Rn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    t.encoding !== void 0 && (_i("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === bn ? ct : Ut), this.texture = new Bo(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Pt;
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
    }, r = new Ln(5, 5, 5), s = new Cn({
      name: "CubemapFromEquirect",
      uniforms: ri(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: yt,
      blending: ln
    });
    s.uniforms.tEquirect.value = t;
    const o = new Gt(r, s), a = t.minFilter;
    return t.minFilter === vi && (t.minFilter = Pt), new Ac(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
const Yr = /* @__PURE__ */ new L(), wc = /* @__PURE__ */ new L(), Rc = /* @__PURE__ */ new ze();
class Mn {
  constructor(e = new L(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = Yr.subVectors(n, t).cross(wc.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
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
    const n = e.delta(Yr), r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
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
    const n = t || Rc.getNormalMatrix(e), r = this.coplanarPoint(Yr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
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
const xn = /* @__PURE__ */ new Ai(), Ki = /* @__PURE__ */ new L();
class Es {
  constructor(e = new Mn(), t = new Mn(), n = new Mn(), r = new Mn(), s = new Mn(), o = new Mn()) {
    this.planes = [e, t, n, r, s, o];
  }
  set(e, t, n, r, s, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(r), a[4].copy(s), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = Jt) {
    const n = this.planes, r = e.elements, s = r[0], o = r[1], a = r[2], l = r[3], c = r[4], h = r[5], d = r[6], f = r[7], m = r[8], g = r[9], v = r[10], p = r[11], u = r[12], T = r[13], x = r[14], R = r[15];
    if (n[0].setComponents(l - s, f - c, p - m, R - u).normalize(), n[1].setComponents(l + s, f + c, p + m, R + u).normalize(), n[2].setComponents(l + o, f + h, p + g, R + T).normalize(), n[3].setComponents(l - o, f - h, p - g, R - T).normalize(), n[4].setComponents(l - a, f - d, p - v, R - x).normalize(), t === Jt)
      n[5].setComponents(l + a, f + d, p + v, R + x).normalize();
    else if (t === hr)
      n[5].setComponents(a, d, v, x).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(xn);
  }
  intersectsSprite(e) {
    return xn.center.set(0, 0, 0), xn.radius = 0.7071067811865476, xn.applyMatrix4(e.matrixWorld), this.intersectsSphere(xn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < r)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (Ki.x = r.normal.x > 0 ? e.max.x : e.min.x, Ki.y = r.normal.y > 0 ? e.max.y : e.min.y, Ki.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Ki) < 0)
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
function zo() {
  let i = null, e = !1, t = null, n = null;
  function r(s, o) {
    t(s, o), n = i.requestAnimationFrame(r);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = i.requestAnimationFrame(r), e = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      i = s;
    }
  };
}
function Cc(i, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function r(c, h) {
    const d = c.array, f = c.usage, m = d.byteLength, g = i.createBuffer();
    i.bindBuffer(h, g), i.bufferData(h, d, f), c.onUploadCallback();
    let v;
    if (d instanceof Float32Array)
      v = i.FLOAT;
    else if (d instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t)
          v = i.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        v = i.UNSIGNED_SHORT;
    else if (d instanceof Int16Array)
      v = i.SHORT;
    else if (d instanceof Uint32Array)
      v = i.UNSIGNED_INT;
    else if (d instanceof Int32Array)
      v = i.INT;
    else if (d instanceof Int8Array)
      v = i.BYTE;
    else if (d instanceof Uint8Array)
      v = i.UNSIGNED_BYTE;
    else if (d instanceof Uint8ClampedArray)
      v = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + d);
    return {
      buffer: g,
      type: v,
      bytesPerElement: d.BYTES_PER_ELEMENT,
      version: c.version,
      size: m
    };
  }
  function s(c, h, d) {
    const f = h.array, m = h._updateRange, g = h.updateRanges;
    if (i.bindBuffer(d, c), m.count === -1 && g.length === 0 && i.bufferSubData(d, 0, f), g.length !== 0) {
      for (let v = 0, p = g.length; v < p; v++) {
        const u = g[v];
        t ? i.bufferSubData(
          d,
          u.start * f.BYTES_PER_ELEMENT,
          f,
          u.start,
          u.count
        ) : i.bufferSubData(
          d,
          u.start * f.BYTES_PER_ELEMENT,
          f.subarray(u.start, u.start + u.count)
        );
      }
      h.clearUpdateRanges();
    }
    m.count !== -1 && (t ? i.bufferSubData(
      d,
      m.offset * f.BYTES_PER_ELEMENT,
      f,
      m.offset,
      m.count
    ) : i.bufferSubData(
      d,
      m.offset * f.BYTES_PER_ELEMENT,
      f.subarray(m.offset, m.offset + m.count)
    ), m.count = -1), h.onUploadCallback();
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = n.get(c);
    h && (i.deleteBuffer(h.buffer), n.delete(c));
  }
  function l(c, h) {
    if (c.isGLBufferAttribute) {
      const f = n.get(c);
      (!f || f.version < c.version) && n.set(c, {
        buffer: c.buffer,
        type: c.type,
        bytesPerElement: c.elementSize,
        version: c.version
      });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const d = n.get(c);
    if (d === void 0)
      n.set(c, r(c, h));
    else if (d.version < c.version) {
      if (d.size !== c.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      s(d.buffer, c, h), d.version = c.version;
    }
  }
  return {
    get: o,
    remove: a,
    update: l
  };
}
class ys extends At {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    const s = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(r), c = a + 1, h = l + 1, d = e / a, f = t / l, m = [], g = [], v = [], p = [];
    for (let u = 0; u < h; u++) {
      const T = u * f - o;
      for (let x = 0; x < c; x++) {
        const R = x * d - s;
        g.push(R, -T, 0), v.push(0, 0, 1), p.push(x / a), p.push(1 - u / l);
      }
    }
    for (let u = 0; u < l; u++)
      for (let T = 0; T < a; T++) {
        const x = T + c * u, R = T + c * (u + 1), D = T + 1 + c * (u + 1), w = T + 1 + c * u;
        m.push(x, R, w), m.push(R, D, w);
      }
    this.setIndex(m), this.setAttribute("position", new It(g, 3)), this.setAttribute("normal", new It(v, 3)), this.setAttribute("uv", new It(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ys(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Lc = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Pc = `#ifdef USE_ALPHAHASH
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
#endif`, Dc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Uc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Ic = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Nc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Fc = `#ifdef USE_AOMAP
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
#endif`, Oc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Bc = `#ifdef USE_BATCHING
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
#endif`, zc = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, Gc = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Hc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Vc = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, kc = `#ifdef USE_IRIDESCENCE
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
#endif`, Wc = `#ifdef USE_BUMPMAP
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
#endif`, Xc = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, qc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Yc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, jc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Kc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Zc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, $c = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Jc = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Qc = `#define PI 3.141592653589793
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
} // validated`, eh = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, th = `vec3 transformedNormal = objectNormal;
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
#endif`, nh = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, ih = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, rh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, sh = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, ah = "gl_FragColor = linearToOutputTexel( gl_FragColor );", oh = `
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
}`, lh = `#ifdef USE_ENVMAP
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
#endif`, ch = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, hh = `#ifdef USE_ENVMAP
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
#endif`, uh = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, dh = `#ifdef USE_ENVMAP
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
#endif`, fh = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, ph = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, mh = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, gh = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, _h = `#ifdef USE_GRADIENTMAP
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
}`, vh = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, xh = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Mh = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Sh = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Eh = `uniform bool receiveShadow;
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
#endif`, yh = `#ifdef USE_ENVMAP
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
#endif`, Th = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Ah = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, bh = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, wh = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Rh = `PhysicalMaterial material;
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
#endif`, Ch = `struct PhysicalMaterial {
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
}`, Lh = `
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
#endif`, Ph = `#if defined( RE_IndirectDiffuse )
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
#endif`, Dh = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Uh = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Ih = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Nh = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Fh = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Oh = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Bh = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, zh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Gh = `#if defined( USE_POINTS_UV )
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
#endif`, Hh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Vh = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, kh = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Wh = `#ifdef USE_MORPHNORMALS
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
#endif`, Xh = `#ifdef USE_MORPHTARGETS
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
#endif`, qh = `#ifdef USE_MORPHTARGETS
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
#endif`, Yh = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, jh = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, Kh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Zh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, $h = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Jh = `#ifdef USE_NORMALMAP
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
#endif`, Qh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, eu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, tu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, nu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, iu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, ru = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, su = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, au = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, ou = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, lu = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, cu = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, hu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, uu = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, du = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, fu = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, pu = `float getShadowMask() {
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
}`, mu = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, gu = `#ifdef USE_SKINNING
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
#endif`, _u = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, vu = `#ifdef USE_SKINNING
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
#endif`, xu = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Mu = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Su = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Eu = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, yu = `#ifdef USE_TRANSMISSION
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
#endif`, Tu = `#ifdef USE_TRANSMISSION
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
#endif`, Au = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, bu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, wu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Ru = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Cu = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Lu = `uniform sampler2D t2D;
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
}`, Pu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Du = `#ifdef ENVMAP_TYPE_CUBE
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
}`, Uu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Iu = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Nu = `#include <common>
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
}`, Fu = `#if DEPTH_PACKING == 3200
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
}`, Ou = `#define DISTANCE
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
}`, Bu = `#define DISTANCE
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
}`, zu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Gu = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Hu = `uniform float scale;
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
}`, Vu = `uniform vec3 diffuse;
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
}`, ku = `#include <common>
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
}`, Wu = `uniform vec3 diffuse;
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
}`, Xu = `#define LAMBERT
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
}`, qu = `#define LAMBERT
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
}`, Yu = `#define MATCAP
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
}`, ju = `#define MATCAP
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
}`, Ku = `#define NORMAL
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
}`, Zu = `#define NORMAL
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
}`, $u = `#define PHONG
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
}`, Ju = `#define PHONG
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
}`, Qu = `#define STANDARD
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
}`, ed = `#define STANDARD
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
}`, td = `#define TOON
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
}`, nd = `#define TOON
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
}`, id = `uniform float size;
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
}`, rd = `uniform vec3 diffuse;
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
}`, sd = `#include <common>
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
}`, ad = `uniform vec3 color;
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
}`, od = `uniform float rotation;
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
}`, ld = `uniform vec3 diffuse;
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
  alphahash_fragment: Lc,
  alphahash_pars_fragment: Pc,
  alphamap_fragment: Dc,
  alphamap_pars_fragment: Uc,
  alphatest_fragment: Ic,
  alphatest_pars_fragment: Nc,
  aomap_fragment: Fc,
  aomap_pars_fragment: Oc,
  batching_pars_vertex: Bc,
  batching_vertex: zc,
  begin_vertex: Gc,
  beginnormal_vertex: Hc,
  bsdfs: Vc,
  iridescence_fragment: kc,
  bumpmap_pars_fragment: Wc,
  clipping_planes_fragment: Xc,
  clipping_planes_pars_fragment: qc,
  clipping_planes_pars_vertex: Yc,
  clipping_planes_vertex: jc,
  color_fragment: Kc,
  color_pars_fragment: Zc,
  color_pars_vertex: $c,
  color_vertex: Jc,
  common: Qc,
  cube_uv_reflection_fragment: eh,
  defaultnormal_vertex: th,
  displacementmap_pars_vertex: nh,
  displacementmap_vertex: ih,
  emissivemap_fragment: rh,
  emissivemap_pars_fragment: sh,
  colorspace_fragment: ah,
  colorspace_pars_fragment: oh,
  envmap_fragment: lh,
  envmap_common_pars_fragment: ch,
  envmap_pars_fragment: hh,
  envmap_pars_vertex: uh,
  envmap_physical_pars_fragment: yh,
  envmap_vertex: dh,
  fog_vertex: fh,
  fog_pars_vertex: ph,
  fog_fragment: mh,
  fog_pars_fragment: gh,
  gradientmap_pars_fragment: _h,
  lightmap_fragment: vh,
  lightmap_pars_fragment: xh,
  lights_lambert_fragment: Mh,
  lights_lambert_pars_fragment: Sh,
  lights_pars_begin: Eh,
  lights_toon_fragment: Th,
  lights_toon_pars_fragment: Ah,
  lights_phong_fragment: bh,
  lights_phong_pars_fragment: wh,
  lights_physical_fragment: Rh,
  lights_physical_pars_fragment: Ch,
  lights_fragment_begin: Lh,
  lights_fragment_maps: Ph,
  lights_fragment_end: Dh,
  logdepthbuf_fragment: Uh,
  logdepthbuf_pars_fragment: Ih,
  logdepthbuf_pars_vertex: Nh,
  logdepthbuf_vertex: Fh,
  map_fragment: Oh,
  map_pars_fragment: Bh,
  map_particle_fragment: zh,
  map_particle_pars_fragment: Gh,
  metalnessmap_fragment: Hh,
  metalnessmap_pars_fragment: Vh,
  morphcolor_vertex: kh,
  morphnormal_vertex: Wh,
  morphtarget_pars_vertex: Xh,
  morphtarget_vertex: qh,
  normal_fragment_begin: Yh,
  normal_fragment_maps: jh,
  normal_pars_fragment: Kh,
  normal_pars_vertex: Zh,
  normal_vertex: $h,
  normalmap_pars_fragment: Jh,
  clearcoat_normal_fragment_begin: Qh,
  clearcoat_normal_fragment_maps: eu,
  clearcoat_pars_fragment: tu,
  iridescence_pars_fragment: nu,
  opaque_fragment: iu,
  packing: ru,
  premultiplied_alpha_fragment: su,
  project_vertex: au,
  dithering_fragment: ou,
  dithering_pars_fragment: lu,
  roughnessmap_fragment: cu,
  roughnessmap_pars_fragment: hu,
  shadowmap_pars_fragment: uu,
  shadowmap_pars_vertex: du,
  shadowmap_vertex: fu,
  shadowmask_pars_fragment: pu,
  skinbase_vertex: mu,
  skinning_pars_vertex: gu,
  skinning_vertex: _u,
  skinnormal_vertex: vu,
  specularmap_fragment: xu,
  specularmap_pars_fragment: Mu,
  tonemapping_fragment: Su,
  tonemapping_pars_fragment: Eu,
  transmission_fragment: yu,
  transmission_pars_fragment: Tu,
  uv_pars_fragment: Au,
  uv_pars_vertex: bu,
  uv_vertex: wu,
  worldpos_vertex: Ru,
  background_vert: Cu,
  background_frag: Lu,
  backgroundCube_vert: Pu,
  backgroundCube_frag: Du,
  cube_vert: Uu,
  cube_frag: Iu,
  depth_vert: Nu,
  depth_frag: Fu,
  distanceRGBA_vert: Ou,
  distanceRGBA_frag: Bu,
  equirect_vert: zu,
  equirect_frag: Gu,
  linedashed_vert: Hu,
  linedashed_frag: Vu,
  meshbasic_vert: ku,
  meshbasic_frag: Wu,
  meshlambert_vert: Xu,
  meshlambert_frag: qu,
  meshmatcap_vert: Yu,
  meshmatcap_frag: ju,
  meshnormal_vert: Ku,
  meshnormal_frag: Zu,
  meshphong_vert: $u,
  meshphong_frag: Ju,
  meshphysical_vert: Qu,
  meshphysical_frag: ed,
  meshtoon_vert: td,
  meshtoon_frag: nd,
  points_vert: id,
  points_frag: rd,
  shadow_vert: sd,
  shadow_frag: ad,
  sprite_vert: od,
  sprite_frag: ld
}, te = {
  common: {
    diffuse: { value: /* @__PURE__ */ new ye(16777215) },
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
    normalScale: { value: /* @__PURE__ */ new Ue(1, 1) }
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
    fogColor: { value: /* @__PURE__ */ new ye(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new ye(16777215) },
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
    diffuse: { value: /* @__PURE__ */ new ye(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Ue(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new ze() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new ze() },
    alphaTest: { value: 0 }
  }
}, Vt = {
  basic: {
    uniforms: /* @__PURE__ */ xt([
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
    uniforms: /* @__PURE__ */ xt([
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
        emissive: { value: /* @__PURE__ */ new ye(0) }
      }
    ]),
    vertexShader: De.meshlambert_vert,
    fragmentShader: De.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ xt([
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
        emissive: { value: /* @__PURE__ */ new ye(0) },
        specular: { value: /* @__PURE__ */ new ye(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: De.meshphong_vert,
    fragmentShader: De.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ xt([
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
        emissive: { value: /* @__PURE__ */ new ye(0) },
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
    uniforms: /* @__PURE__ */ xt([
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
        emissive: { value: /* @__PURE__ */ new ye(0) }
      }
    ]),
    vertexShader: De.meshtoon_vert,
    fragmentShader: De.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ xt([
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
    uniforms: /* @__PURE__ */ xt([
      te.points,
      te.fog
    ]),
    vertexShader: De.points_vert,
    fragmentShader: De.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ xt([
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
    uniforms: /* @__PURE__ */ xt([
      te.common,
      te.displacementmap
    ]),
    vertexShader: De.depth_vert,
    fragmentShader: De.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ xt([
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
    uniforms: /* @__PURE__ */ xt([
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
    uniforms: /* @__PURE__ */ xt([
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
    uniforms: /* @__PURE__ */ xt([
      te.lights,
      te.fog,
      {
        color: { value: /* @__PURE__ */ new ye(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: De.shadow_vert,
    fragmentShader: De.shadow_frag
  }
};
Vt.physical = {
  uniforms: /* @__PURE__ */ xt([
    Vt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new ze() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new ze() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Ue(1, 1) },
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
      sheenColor: { value: /* @__PURE__ */ new ye(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new ze() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new ze() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new ze() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Ue() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new ze() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new ye(0) },
      specularColor: { value: /* @__PURE__ */ new ye(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new ze() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new ze() },
      anisotropyVector: { value: /* @__PURE__ */ new Ue() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new ze() }
    }
  ]),
  vertexShader: De.meshphysical_vert,
  fragmentShader: De.meshphysical_frag
};
const Zi = { r: 0, b: 0, g: 0 };
function cd(i, e, t, n, r, s, o) {
  const a = new ye(0);
  let l = s === !0 ? 0 : 1, c, h, d = null, f = 0, m = null;
  function g(p, u) {
    let T = !1, x = u.isScene === !0 ? u.background : null;
    x && x.isTexture && (x = (u.backgroundBlurriness > 0 ? t : e).get(x)), x === null ? v(a, l) : x && x.isColor && (v(x, 1), T = !0);
    const R = i.xr.getEnvironmentBlendMode();
    R === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : R === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (i.autoClear || T) && i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil), x && (x.isCubeTexture || x.mapping === mr) ? (h === void 0 && (h = new Gt(
      new Ln(1, 1, 1),
      new Cn({
        name: "BackgroundCubeMaterial",
        uniforms: ri(Vt.backgroundCube.uniforms),
        vertexShader: Vt.backgroundCube.vertexShader,
        fragmentShader: Vt.backgroundCube.fragmentShader,
        side: yt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(D, w, b) {
      this.matrixWorld.copyPosition(b.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(h)), h.material.uniforms.envMap.value = x, h.material.uniforms.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = u.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = u.backgroundIntensity, h.material.toneMapped = We.getTransfer(x.colorSpace) !== Ke, (d !== x || f !== x.version || m !== i.toneMapping) && (h.material.needsUpdate = !0, d = x, f = x.version, m = i.toneMapping), h.layers.enableAll(), p.unshift(h, h.geometry, h.material, 0, 0, null)) : x && x.isTexture && (c === void 0 && (c = new Gt(
      new ys(2, 2),
      new Cn({
        name: "BackgroundMaterial",
        uniforms: ri(Vt.background.uniforms),
        vertexShader: Vt.background.vertexShader,
        fragmentShader: Vt.background.fragmentShader,
        side: dn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(c)), c.material.uniforms.t2D.value = x, c.material.uniforms.backgroundIntensity.value = u.backgroundIntensity, c.material.toneMapped = We.getTransfer(x.colorSpace) !== Ke, x.matrixAutoUpdate === !0 && x.updateMatrix(), c.material.uniforms.uvTransform.value.copy(x.matrix), (d !== x || f !== x.version || m !== i.toneMapping) && (c.material.needsUpdate = !0, d = x, f = x.version, m = i.toneMapping), c.layers.enableAll(), p.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function v(p, u) {
    p.getRGB(Zi, Fo(i)), n.buffers.color.setClear(Zi.r, Zi.g, Zi.b, u, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(p, u = 1) {
      a.set(p), l = u, v(a, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(p) {
      l = p, v(a, l);
    },
    render: g
  };
}
function hd(i, e, t, n) {
  const r = i.getParameter(i.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || s !== null, a = {}, l = p(null);
  let c = l, h = !1;
  function d(C, O, H, X, k) {
    let V = !1;
    if (o) {
      const Z = v(X, H, O);
      c !== Z && (c = Z, m(c.object)), V = u(C, X, H, k), V && T(C, X, H, k);
    } else {
      const Z = O.wireframe === !0;
      (c.geometry !== X.id || c.program !== H.id || c.wireframe !== Z) && (c.geometry = X.id, c.program = H.id, c.wireframe = Z, V = !0);
    }
    k !== null && t.update(k, i.ELEMENT_ARRAY_BUFFER), (V || h) && (h = !1, W(C, O, H, X), k !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(k).buffer));
  }
  function f() {
    return n.isWebGL2 ? i.createVertexArray() : s.createVertexArrayOES();
  }
  function m(C) {
    return n.isWebGL2 ? i.bindVertexArray(C) : s.bindVertexArrayOES(C);
  }
  function g(C) {
    return n.isWebGL2 ? i.deleteVertexArray(C) : s.deleteVertexArrayOES(C);
  }
  function v(C, O, H) {
    const X = H.wireframe === !0;
    let k = a[C.id];
    k === void 0 && (k = {}, a[C.id] = k);
    let V = k[O.id];
    V === void 0 && (V = {}, k[O.id] = V);
    let Z = V[X];
    return Z === void 0 && (Z = p(f()), V[X] = Z), Z;
  }
  function p(C) {
    const O = [], H = [], X = [];
    for (let k = 0; k < r; k++)
      O[k] = 0, H[k] = 0, X[k] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: O,
      enabledAttributes: H,
      attributeDivisors: X,
      object: C,
      attributes: {},
      index: null
    };
  }
  function u(C, O, H, X) {
    const k = c.attributes, V = O.attributes;
    let Z = 0;
    const Q = H.getAttributes();
    for (const le in Q)
      if (Q[le].location >= 0) {
        const q = k[le];
        let ae = V[le];
        if (ae === void 0 && (le === "instanceMatrix" && C.instanceMatrix && (ae = C.instanceMatrix), le === "instanceColor" && C.instanceColor && (ae = C.instanceColor)), q === void 0 || q.attribute !== ae || ae && q.data !== ae.data) return !0;
        Z++;
      }
    return c.attributesNum !== Z || c.index !== X;
  }
  function T(C, O, H, X) {
    const k = {}, V = O.attributes;
    let Z = 0;
    const Q = H.getAttributes();
    for (const le in Q)
      if (Q[le].location >= 0) {
        let q = V[le];
        q === void 0 && (le === "instanceMatrix" && C.instanceMatrix && (q = C.instanceMatrix), le === "instanceColor" && C.instanceColor && (q = C.instanceColor));
        const ae = {};
        ae.attribute = q, q && q.data && (ae.data = q.data), k[le] = ae, Z++;
      }
    c.attributes = k, c.attributesNum = Z, c.index = X;
  }
  function x() {
    const C = c.newAttributes;
    for (let O = 0, H = C.length; O < H; O++)
      C[O] = 0;
  }
  function R(C) {
    D(C, 0);
  }
  function D(C, O) {
    const H = c.newAttributes, X = c.enabledAttributes, k = c.attributeDivisors;
    H[C] = 1, X[C] === 0 && (i.enableVertexAttribArray(C), X[C] = 1), k[C] !== O && ((n.isWebGL2 ? i : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](C, O), k[C] = O);
  }
  function w() {
    const C = c.newAttributes, O = c.enabledAttributes;
    for (let H = 0, X = O.length; H < X; H++)
      O[H] !== C[H] && (i.disableVertexAttribArray(H), O[H] = 0);
  }
  function b(C, O, H, X, k, V, Z) {
    Z === !0 ? i.vertexAttribIPointer(C, O, H, k, V) : i.vertexAttribPointer(C, O, H, X, k, V);
  }
  function W(C, O, H, X) {
    if (n.isWebGL2 === !1 && (C.isInstancedMesh || X.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    x();
    const k = X.attributes, V = H.getAttributes(), Z = O.defaultAttributeValues;
    for (const Q in V) {
      const le = V[Q];
      if (le.location >= 0) {
        let G = k[Q];
        if (G === void 0 && (Q === "instanceMatrix" && C.instanceMatrix && (G = C.instanceMatrix), Q === "instanceColor" && C.instanceColor && (G = C.instanceColor)), G !== void 0) {
          const q = G.normalized, ae = G.itemSize, me = t.get(G);
          if (me === void 0) continue;
          const pe = me.buffer, Re = me.type, Le = me.bytesPerElement, Se = n.isWebGL2 === !0 && (Re === i.INT || Re === i.UNSIGNED_INT || G.gpuType === vo);
          if (G.isInterleavedBufferAttribute) {
            const He = G.data, U = He.stride, mt = G.offset;
            if (He.isInstancedInterleavedBuffer) {
              for (let _e = 0; _e < le.locationSize; _e++)
                D(le.location + _e, He.meshPerAttribute);
              C.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = He.meshPerAttribute * He.count);
            } else
              for (let _e = 0; _e < le.locationSize; _e++)
                R(le.location + _e);
            i.bindBuffer(i.ARRAY_BUFFER, pe);
            for (let _e = 0; _e < le.locationSize; _e++)
              b(
                le.location + _e,
                ae / le.locationSize,
                Re,
                q,
                U * Le,
                (mt + ae / le.locationSize * _e) * Le,
                Se
              );
          } else {
            if (G.isInstancedBufferAttribute) {
              for (let He = 0; He < le.locationSize; He++)
                D(le.location + He, G.meshPerAttribute);
              C.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = G.meshPerAttribute * G.count);
            } else
              for (let He = 0; He < le.locationSize; He++)
                R(le.location + He);
            i.bindBuffer(i.ARRAY_BUFFER, pe);
            for (let He = 0; He < le.locationSize; He++)
              b(
                le.location + He,
                ae / le.locationSize,
                Re,
                q,
                ae * Le,
                ae / le.locationSize * He * Le,
                Se
              );
          }
        } else if (Z !== void 0) {
          const q = Z[Q];
          if (q !== void 0)
            switch (q.length) {
              case 2:
                i.vertexAttrib2fv(le.location, q);
                break;
              case 3:
                i.vertexAttrib3fv(le.location, q);
                break;
              case 4:
                i.vertexAttrib4fv(le.location, q);
                break;
              default:
                i.vertexAttrib1fv(le.location, q);
            }
        }
      }
    }
    w();
  }
  function S() {
    j();
    for (const C in a) {
      const O = a[C];
      for (const H in O) {
        const X = O[H];
        for (const k in X)
          g(X[k].object), delete X[k];
        delete O[H];
      }
      delete a[C];
    }
  }
  function y(C) {
    if (a[C.id] === void 0) return;
    const O = a[C.id];
    for (const H in O) {
      const X = O[H];
      for (const k in X)
        g(X[k].object), delete X[k];
      delete O[H];
    }
    delete a[C.id];
  }
  function z(C) {
    for (const O in a) {
      const H = a[O];
      if (H[C.id] === void 0) continue;
      const X = H[C.id];
      for (const k in X)
        g(X[k].object), delete X[k];
      delete H[C.id];
    }
  }
  function j() {
    ne(), h = !0, c !== l && (c = l, m(c.object));
  }
  function ne() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: d,
    reset: j,
    resetDefaultState: ne,
    dispose: S,
    releaseStatesOfGeometry: y,
    releaseStatesOfProgram: z,
    initAttributes: x,
    enableAttribute: R,
    disableUnusedAttributes: w
  };
}
function ud(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(h) {
    s = h;
  }
  function a(h, d) {
    i.drawArrays(s, h, d), t.update(d, s, 1);
  }
  function l(h, d, f) {
    if (f === 0) return;
    let m, g;
    if (r)
      m = i, g = "drawArraysInstanced";
    else if (m = e.get("ANGLE_instanced_arrays"), g = "drawArraysInstancedANGLE", m === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    m[g](s, h, d, f), t.update(d, s, f);
  }
  function c(h, d, f) {
    if (f === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let g = 0; g < f; g++)
        this.render(h[g], d[g]);
    else {
      m.multiDrawArraysWEBGL(s, h, 0, d, 0, f);
      let g = 0;
      for (let v = 0; v < f; v++)
        g += d[v];
      t.update(g, s, 1);
    }
  }
  this.setMode = o, this.render = a, this.renderInstances = l, this.renderMultiDraw = c;
}
function dd(i, e, t) {
  let n;
  function r() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const b = e.get("EXT_texture_filter_anisotropic");
      n = i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(b) {
    if (b === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      b = "mediump";
    }
    return b === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && i.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const l = s(a);
  l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."), a = l);
  const c = o || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, d = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), f = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), m = i.getParameter(i.MAX_TEXTURE_SIZE), g = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), v = i.getParameter(i.MAX_VERTEX_ATTRIBS), p = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), u = i.getParameter(i.MAX_VARYING_VECTORS), T = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), x = f > 0, R = o || e.has("OES_texture_float"), D = x && R, w = o ? i.getParameter(i.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: r,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: h,
    maxTextures: d,
    maxVertexTextures: f,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: v,
    maxVertexUniforms: p,
    maxVaryings: u,
    maxFragmentUniforms: T,
    vertexTextures: x,
    floatFragmentTextures: R,
    floatVertexTextures: D,
    maxSamples: w
  };
}
function fd(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const o = new Mn(), a = new ze(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, f) {
    const m = d.length !== 0 || f || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = f, n = d.length, m;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(d, f) {
    t = h(d, f, 0);
  }, this.setState = function(d, f, m) {
    const g = d.clippingPlanes, v = d.clipIntersection, p = d.clipShadows, u = i.get(d);
    if (!r || g === null || g.length === 0 || s && !p)
      s ? h(null) : c();
    else {
      const T = s ? 0 : n, x = T * 4;
      let R = u.clippingState || null;
      l.value = R, R = h(g, f, x, m);
      for (let D = 0; D !== x; ++D)
        R[D] = t[D];
      u.clippingState = R, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(d, f, m, g) {
    const v = d !== null ? d.length : 0;
    let p = null;
    if (v !== 0) {
      if (p = l.value, g !== !0 || p === null) {
        const u = m + v * 4, T = f.matrixWorldInverse;
        a.getNormalMatrix(T), (p === null || p.length < u) && (p = new Float32Array(u));
        for (let x = 0, R = m; x !== v; ++x, R += 4)
          o.copy(d[x]).applyMatrix4(T, a), o.normal.toArray(p, R), p[R + 3] = o.constant;
      }
      l.value = p, l.needsUpdate = !0;
    }
    return e.numPlanes = v, e.numIntersection = 0, p;
  }
}
function pd(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === os ? o.mapping = ti : a === ls && (o.mapping = ni), o;
  }
  function n(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === os || a === ls)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new bc(l.height / 2);
            return c.fromEquirectangularTexture(i, o), e.set(o, c), o.addEventListener("dispose", r), t(c.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function r(o) {
    const a = o.target;
    a.removeEventListener("dispose", r);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class Go extends Oo {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, r, s, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - e, o = n + e, a = r + t, l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, o = s + c * this.view.width, a -= h * this.view.offsetY, l = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const $n = 4, La = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], yn = 20, jr = /* @__PURE__ */ new Go(), Pa = /* @__PURE__ */ new ye();
let Kr = null, Zr = 0, $r = 0;
const Sn = (1 + Math.sqrt(5)) / 2, qn = 1 / Sn, Da = [
  /* @__PURE__ */ new L(1, 1, 1),
  /* @__PURE__ */ new L(-1, 1, 1),
  /* @__PURE__ */ new L(1, 1, -1),
  /* @__PURE__ */ new L(-1, 1, -1),
  /* @__PURE__ */ new L(0, Sn, qn),
  /* @__PURE__ */ new L(0, Sn, -qn),
  /* @__PURE__ */ new L(qn, 0, Sn),
  /* @__PURE__ */ new L(-qn, 0, Sn),
  /* @__PURE__ */ new L(Sn, qn, 0),
  /* @__PURE__ */ new L(-Sn, qn, 0)
];
class Ua {
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
  fromScene(e, t = 0, n = 0.1, r = 100) {
    Kr = this._renderer.getRenderTarget(), Zr = this._renderer.getActiveCubeFace(), $r = this._renderer.getActiveMipmapLevel(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, r, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
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
    this._cubemapMaterial === null && (this._cubemapMaterial = Fa(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Na(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(Kr, Zr, $r), e.scissorTest = !1, $i(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === ti || e.mapping === ni ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Kr = this._renderer.getRenderTarget(), Zr = this._renderer.getActiveCubeFace(), $r = this._renderer.getActiveMipmapLevel();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Pt,
      minFilter: Pt,
      generateMipmaps: !1,
      type: xi,
      format: zt,
      colorSpace: Qt,
      depthBuffer: !1
    }, r = Ia(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Ia(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = md(s)), this._blurMaterial = gd(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Gt(this._lodPlanes[0], e);
    this._renderer.compile(t, jr);
  }
  _sceneToCubeUV(e, t, n, r) {
    const a = new pt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, d = h.autoClear, f = h.toneMapping;
    h.getClearColor(Pa), h.toneMapping = cn, h.autoClear = !1;
    const m = new Ss({
      name: "PMREM.Background",
      side: yt,
      depthWrite: !1,
      depthTest: !1
    }), g = new Gt(new Ln(), m);
    let v = !1;
    const p = e.background;
    p ? p.isColor && (m.color.copy(p), e.background = null, v = !0) : (m.color.copy(Pa), v = !0);
    for (let u = 0; u < 6; u++) {
      const T = u % 3;
      T === 0 ? (a.up.set(0, l[u], 0), a.lookAt(c[u], 0, 0)) : T === 1 ? (a.up.set(0, 0, l[u]), a.lookAt(0, c[u], 0)) : (a.up.set(0, l[u], 0), a.lookAt(0, 0, c[u]));
      const x = this._cubeSize;
      $i(r, T * x, u > 2 ? x : 0, x, x), h.setRenderTarget(r), v && h.render(g, a), h.render(e, a);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = f, h.autoClear = d, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === ti || e.mapping === ni;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Fa()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Na());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, o = new Gt(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    $i(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, jr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let r = 1; r < this._lodPlanes.length; r++) {
      const s = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = Da[(r - 1) % Da.length];
      this._blur(e, r - 1, r, s, o);
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
  _blur(e, t, n, r, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      o,
      t,
      n,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      o,
      e,
      n,
      n,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, r, s, o, a) {
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, d = new Gt(this._lodPlanes[r], c), f = c.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * yn - 1), v = s / g, p = isFinite(s) ? 1 + Math.floor(h * v) : yn;
    p > yn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${yn}`);
    const u = [];
    let T = 0;
    for (let b = 0; b < yn; ++b) {
      const W = b / v, S = Math.exp(-W * W / 2);
      u.push(S), b === 0 ? T += S : b < p && (T += 2 * S);
    }
    for (let b = 0; b < u.length; b++)
      u[b] = u[b] / T;
    f.envMap.value = e.texture, f.samples.value = p, f.weights.value = u, f.latitudinal.value = o === "latitudinal", a && (f.poleAxis.value = a);
    const { _lodMax: x } = this;
    f.dTheta.value = g, f.mipInt.value = x - n;
    const R = this._sizeLods[r], D = 3 * R * (r > x - $n ? r - x + $n : 0), w = 4 * (this._cubeSize - R);
    $i(t, D, w, 3 * R, 2 * R), l.setRenderTarget(t), l.render(d, jr);
  }
}
function md(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - $n + 1 + La.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let l = 1 / a;
    o > i - $n ? l = La[o - i + $n - 1] : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2), h = -c, d = 1 + c, f = [h, h, d, h, d, d, h, h, d, d, h, d], m = 6, g = 6, v = 3, p = 2, u = 1, T = new Float32Array(v * g * m), x = new Float32Array(p * g * m), R = new Float32Array(u * g * m);
    for (let w = 0; w < m; w++) {
      const b = w % 3 * 2 / 3 - 1, W = w > 2 ? 0 : -1, S = [
        b,
        W,
        0,
        b + 2 / 3,
        W,
        0,
        b + 2 / 3,
        W + 1,
        0,
        b,
        W,
        0,
        b + 2 / 3,
        W + 1,
        0,
        b,
        W + 1,
        0
      ];
      T.set(S, v * g * w), x.set(f, p * g * w);
      const y = [w, w, w, w, w, w];
      R.set(y, u * g * w);
    }
    const D = new At();
    D.setAttribute("position", new Tt(T, v)), D.setAttribute("uv", new Tt(x, p)), D.setAttribute("faceIndex", new Tt(R, u)), e.push(D), r > $n && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Ia(i, e, t) {
  const n = new Rn(i, e, t);
  return n.texture.mapping = mr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function $i(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function gd(i, e, t) {
  const n = new Float32Array(yn), r = new L(0, 1, 0);
  return new Cn({
    name: "SphericalGaussianBlur",
    defines: {
      n: yn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: Ts(),
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
    blending: ln,
    depthTest: !1,
    depthWrite: !1
  });
}
function Na() {
  return new Cn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Ts(),
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
    blending: ln,
    depthTest: !1,
    depthWrite: !1
  });
}
function Fa() {
  return new Cn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Ts(),
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
    blending: ln,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ts() {
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
function _d(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === os || l === ls, h = l === ti || l === ni;
      if (c || h)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let d = e.get(a);
          return t === null && (t = new Ua(i)), d = c ? t.fromEquirectangular(a, d) : t.fromCubemap(a, d), e.set(a, d), d.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const d = a.image;
            if (c && d && d.height > 0 || h && d && r(d)) {
              t === null && (t = new Ua(i));
              const f = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, f), a.addEventListener("dispose", s), f.texture;
            } else
              return null;
          }
        }
    }
    return a;
  }
  function r(a) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++)
      a[h] !== void 0 && l++;
    return l === c;
  }
  function s(a) {
    const l = a.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function vd(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return e[n] = r, r;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? (t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance")) : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const r = t(n);
      return r === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function xd(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function o(d) {
    const f = d.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes)
      e.remove(f.attributes[g]);
    for (const g in f.morphAttributes) {
      const v = f.morphAttributes[g];
      for (let p = 0, u = v.length; p < u; p++)
        e.remove(v[p]);
    }
    f.removeEventListener("dispose", o), delete r[f.id];
    const m = s.get(f);
    m && (e.remove(m), s.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function a(d, f) {
    return r[f.id] === !0 || (f.addEventListener("dispose", o), r[f.id] = !0, t.memory.geometries++), f;
  }
  function l(d) {
    const f = d.attributes;
    for (const g in f)
      e.update(f[g], i.ARRAY_BUFFER);
    const m = d.morphAttributes;
    for (const g in m) {
      const v = m[g];
      for (let p = 0, u = v.length; p < u; p++)
        e.update(v[p], i.ARRAY_BUFFER);
    }
  }
  function c(d) {
    const f = [], m = d.index, g = d.attributes.position;
    let v = 0;
    if (m !== null) {
      const T = m.array;
      v = m.version;
      for (let x = 0, R = T.length; x < R; x += 3) {
        const D = T[x + 0], w = T[x + 1], b = T[x + 2];
        f.push(D, w, w, b, b, D);
      }
    } else if (g !== void 0) {
      const T = g.array;
      v = g.version;
      for (let x = 0, R = T.length / 3 - 1; x < R; x += 3) {
        const D = x + 0, w = x + 1, b = x + 2;
        f.push(D, w, w, b, b, D);
      }
    } else
      return;
    const p = new (Ro(f) ? No : Io)(f, 1);
    p.version = v;
    const u = s.get(d);
    u && e.remove(u), s.set(d, p);
  }
  function h(d) {
    const f = s.get(d);
    if (f) {
      const m = d.index;
      m !== null && f.version < m.version && c(d);
    } else
      c(d);
    return s.get(d);
  }
  return {
    get: a,
    update: l,
    getWireframeAttribute: h
  };
}
function Md(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(m) {
    s = m;
  }
  let a, l;
  function c(m) {
    a = m.type, l = m.bytesPerElement;
  }
  function h(m, g) {
    i.drawElements(s, g, a, m * l), t.update(g, s, 1);
  }
  function d(m, g, v) {
    if (v === 0) return;
    let p, u;
    if (r)
      p = i, u = "drawElementsInstanced";
    else if (p = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", p === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    p[u](s, g, a, m * l, v), t.update(g, s, v);
  }
  function f(m, g, v) {
    if (v === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let u = 0; u < v; u++)
        this.render(m[u] / l, g[u]);
    else {
      p.multiDrawElementsWEBGL(s, g, 0, a, m, 0, v);
      let u = 0;
      for (let T = 0; T < v; T++)
        u += g[T];
      t.update(u, s, 1);
    }
  }
  this.setMode = o, this.setIndex = c, this.render = h, this.renderInstances = d, this.renderMultiDraw = f;
}
function Sd(i) {
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
  function n(s, o, a) {
    switch (t.calls++, o) {
      case i.TRIANGLES:
        t.triangles += a * (s / 3);
        break;
      case i.LINES:
        t.lines += a * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += a * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += a * s;
        break;
      case i.POINTS:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function Ed(i, e) {
  return i[0] - e[0];
}
function yd(i, e) {
  return Math.abs(e[1]) - Math.abs(i[1]);
}
function Td(i, e, t) {
  const n = {}, r = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), o = new Ze(), a = [];
  for (let c = 0; c < 8; c++)
    a[c] = [c, 0];
  function l(c, h, d) {
    const f = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const m = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, g = m !== void 0 ? m.length : 0;
      let v = s.get(h);
      if (v === void 0 || v.count !== g) {
        let C = function() {
          j.dispose(), s.delete(h), h.removeEventListener("dispose", C);
        };
        v !== void 0 && v.texture.dispose();
        const T = h.morphAttributes.position !== void 0, x = h.morphAttributes.normal !== void 0, R = h.morphAttributes.color !== void 0, D = h.morphAttributes.position || [], w = h.morphAttributes.normal || [], b = h.morphAttributes.color || [];
        let W = 0;
        T === !0 && (W = 1), x === !0 && (W = 2), R === !0 && (W = 3);
        let S = h.attributes.position.count * W, y = 1;
        S > e.maxTextureSize && (y = Math.ceil(S / e.maxTextureSize), S = e.maxTextureSize);
        const z = new Float32Array(S * y * 4 * g), j = new Po(z, S, y, g);
        j.type = on, j.needsUpdate = !0;
        const ne = W * 4;
        for (let O = 0; O < g; O++) {
          const H = D[O], X = w[O], k = b[O], V = S * y * 4 * O;
          for (let Z = 0; Z < H.count; Z++) {
            const Q = Z * ne;
            T === !0 && (o.fromBufferAttribute(H, Z), z[V + Q + 0] = o.x, z[V + Q + 1] = o.y, z[V + Q + 2] = o.z, z[V + Q + 3] = 0), x === !0 && (o.fromBufferAttribute(X, Z), z[V + Q + 4] = o.x, z[V + Q + 5] = o.y, z[V + Q + 6] = o.z, z[V + Q + 7] = 0), R === !0 && (o.fromBufferAttribute(k, Z), z[V + Q + 8] = o.x, z[V + Q + 9] = o.y, z[V + Q + 10] = o.z, z[V + Q + 11] = k.itemSize === 4 ? o.w : 1);
          }
        }
        v = {
          count: g,
          texture: j,
          size: new Ue(S, y)
        }, s.set(h, v), h.addEventListener("dispose", C);
      }
      let p = 0;
      for (let T = 0; T < f.length; T++)
        p += f[T];
      const u = h.morphTargetsRelative ? 1 : 1 - p;
      d.getUniforms().setValue(i, "morphTargetBaseInfluence", u), d.getUniforms().setValue(i, "morphTargetInfluences", f), d.getUniforms().setValue(i, "morphTargetsTexture", v.texture, t), d.getUniforms().setValue(i, "morphTargetsTextureSize", v.size);
    } else {
      const m = f === void 0 ? 0 : f.length;
      let g = n[h.id];
      if (g === void 0 || g.length !== m) {
        g = [];
        for (let x = 0; x < m; x++)
          g[x] = [x, 0];
        n[h.id] = g;
      }
      for (let x = 0; x < m; x++) {
        const R = g[x];
        R[0] = x, R[1] = f[x];
      }
      g.sort(yd);
      for (let x = 0; x < 8; x++)
        x < m && g[x][1] ? (a[x][0] = g[x][0], a[x][1] = g[x][1]) : (a[x][0] = Number.MAX_SAFE_INTEGER, a[x][1] = 0);
      a.sort(Ed);
      const v = h.morphAttributes.position, p = h.morphAttributes.normal;
      let u = 0;
      for (let x = 0; x < 8; x++) {
        const R = a[x], D = R[0], w = R[1];
        D !== Number.MAX_SAFE_INTEGER && w ? (v && h.getAttribute("morphTarget" + x) !== v[D] && h.setAttribute("morphTarget" + x, v[D]), p && h.getAttribute("morphNormal" + x) !== p[D] && h.setAttribute("morphNormal" + x, p[D]), r[x] = w, u += w) : (v && h.hasAttribute("morphTarget" + x) === !0 && h.deleteAttribute("morphTarget" + x), p && h.hasAttribute("morphNormal" + x) === !0 && h.deleteAttribute("morphNormal" + x), r[x] = 0);
      }
      const T = h.morphTargetsRelative ? 1 : 1 - u;
      d.getUniforms().setValue(i, "morphTargetBaseInfluence", T), d.getUniforms().setValue(i, "morphTargetInfluences", r);
    }
  }
  return {
    update: l
  };
}
function Ad(i, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, h = l.geometry, d = e.get(l, h);
    if (r.get(d) !== c && (e.update(d), r.set(d, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), r.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) {
      const f = l.skeleton;
      r.get(f) !== c && (f.update(), r.set(f, c));
    }
    return d;
  }
  function o() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: o
  };
}
class Ho extends St {
  constructor(e, t, n, r, s, o, a, l, c, h) {
    if (h = h !== void 0 ? h : An, h !== An && h !== ii)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === An && (n = an), n === void 0 && h === ii && (n = Tn), super(null, r, s, o, a, l, h, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : Mt, this.minFilter = l !== void 0 ? l : Mt, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const Vo = /* @__PURE__ */ new St(), ko = /* @__PURE__ */ new Ho(1, 1);
ko.compareFunction = wo;
const Wo = /* @__PURE__ */ new Po(), Xo = /* @__PURE__ */ new cc(), qo = /* @__PURE__ */ new Bo(), Oa = [], Ba = [], za = new Float32Array(16), Ga = new Float32Array(9), Ha = new Float32Array(4);
function ai(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = Oa[r];
  if (s === void 0 && (s = new Float32Array(r), Oa[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, i[o].toArray(s, a);
  }
  return s;
}
function rt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function st(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function vr(i, e) {
  let t = Ba[e];
  t === void 0 && (t = new Int32Array(e), Ba[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function bd(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function wd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (rt(t, e)) return;
    i.uniform2fv(this.addr, e), st(t, e);
  }
}
function Rd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (rt(t, e)) return;
    i.uniform3fv(this.addr, e), st(t, e);
  }
}
function Cd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (rt(t, e)) return;
    i.uniform4fv(this.addr, e), st(t, e);
  }
}
function Ld(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (rt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), st(t, e);
  } else {
    if (rt(t, n)) return;
    Ha.set(n), i.uniformMatrix2fv(this.addr, !1, Ha), st(t, n);
  }
}
function Pd(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (rt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), st(t, e);
  } else {
    if (rt(t, n)) return;
    Ga.set(n), i.uniformMatrix3fv(this.addr, !1, Ga), st(t, n);
  }
}
function Dd(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (rt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), st(t, e);
  } else {
    if (rt(t, n)) return;
    za.set(n), i.uniformMatrix4fv(this.addr, !1, za), st(t, n);
  }
}
function Ud(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function Id(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (rt(t, e)) return;
    i.uniform2iv(this.addr, e), st(t, e);
  }
}
function Nd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (rt(t, e)) return;
    i.uniform3iv(this.addr, e), st(t, e);
  }
}
function Fd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (rt(t, e)) return;
    i.uniform4iv(this.addr, e), st(t, e);
  }
}
function Od(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function Bd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (rt(t, e)) return;
    i.uniform2uiv(this.addr, e), st(t, e);
  }
}
function zd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (rt(t, e)) return;
    i.uniform3uiv(this.addr, e), st(t, e);
  }
}
function Gd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (rt(t, e)) return;
    i.uniform4uiv(this.addr, e), st(t, e);
  }
}
function Hd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  const s = this.type === i.SAMPLER_2D_SHADOW ? ko : Vo;
  t.setTexture2D(e || s, r);
}
function Vd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || Xo, r);
}
function kd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || qo, r);
}
function Wd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || Wo, r);
}
function Xd(i) {
  switch (i) {
    case 5126:
      return bd;
    case 35664:
      return wd;
    case 35665:
      return Rd;
    case 35666:
      return Cd;
    case 35674:
      return Ld;
    case 35675:
      return Pd;
    case 35676:
      return Dd;
    case 5124:
    case 35670:
      return Ud;
    case 35667:
    case 35671:
      return Id;
    case 35668:
    case 35672:
      return Nd;
    case 35669:
    case 35673:
      return Fd;
    case 5125:
      return Od;
    case 36294:
      return Bd;
    case 36295:
      return zd;
    case 36296:
      return Gd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Hd;
    case 35679:
    case 36299:
    case 36307:
      return Vd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return kd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Wd;
  }
}
function qd(i, e) {
  i.uniform1fv(this.addr, e);
}
function Yd(i, e) {
  const t = ai(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function jd(i, e) {
  const t = ai(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Kd(i, e) {
  const t = ai(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Zd(i, e) {
  const t = ai(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function $d(i, e) {
  const t = ai(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function Jd(i, e) {
  const t = ai(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Qd(i, e) {
  i.uniform1iv(this.addr, e);
}
function ef(i, e) {
  i.uniform2iv(this.addr, e);
}
function tf(i, e) {
  i.uniform3iv(this.addr, e);
}
function nf(i, e) {
  i.uniform4iv(this.addr, e);
}
function rf(i, e) {
  i.uniform1uiv(this.addr, e);
}
function sf(i, e) {
  i.uniform2uiv(this.addr, e);
}
function af(i, e) {
  i.uniform3uiv(this.addr, e);
}
function of(i, e) {
  i.uniform4uiv(this.addr, e);
}
function lf(i, e, t) {
  const n = this.cache, r = e.length, s = vr(t, r);
  rt(n, s) || (i.uniform1iv(this.addr, s), st(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || Vo, s[o]);
}
function cf(i, e, t) {
  const n = this.cache, r = e.length, s = vr(t, r);
  rt(n, s) || (i.uniform1iv(this.addr, s), st(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture3D(e[o] || Xo, s[o]);
}
function hf(i, e, t) {
  const n = this.cache, r = e.length, s = vr(t, r);
  rt(n, s) || (i.uniform1iv(this.addr, s), st(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTextureCube(e[o] || qo, s[o]);
}
function uf(i, e, t) {
  const n = this.cache, r = e.length, s = vr(t, r);
  rt(n, s) || (i.uniform1iv(this.addr, s), st(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2DArray(e[o] || Wo, s[o]);
}
function df(i) {
  switch (i) {
    case 5126:
      return qd;
    case 35664:
      return Yd;
    case 35665:
      return jd;
    case 35666:
      return Kd;
    case 35674:
      return Zd;
    case 35675:
      return $d;
    case 35676:
      return Jd;
    case 5124:
    case 35670:
      return Qd;
    case 35667:
    case 35671:
      return ef;
    case 35668:
    case 35672:
      return tf;
    case 35669:
    case 35673:
      return nf;
    case 5125:
      return rf;
    case 36294:
      return sf;
    case 36295:
      return af;
    case 36296:
      return of;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return lf;
    case 35679:
    case 36299:
    case 36307:
      return cf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return hf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return uf;
  }
}
class ff {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Xd(t.type);
  }
}
class pf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = df(t.type);
  }
}
class mf {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, o = r.length; s !== o; ++s) {
      const a = r[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const Jr = /(\w+)(\])?(\[|\.)?/g;
function Va(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function gf(i, e, t) {
  const n = i.name, r = n.length;
  for (Jr.lastIndex = 0; ; ) {
    const s = Jr.exec(n), o = Jr.lastIndex;
    let a = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === r) {
      Va(t, c === void 0 ? new ff(a, i, e) : new pf(a, i, e));
      break;
    } else {
      let d = t.map[a];
      d === void 0 && (d = new mf(a), Va(t, d)), t = d;
    }
  }
}
class sr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r), o = e.getUniformLocation(t, s.name);
      gf(s, o, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s], l = n[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const o = e[r];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function ka(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const _f = 37297;
let vf = 0;
function xf(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Mf(i) {
  const e = We.getPrimaries(We.workingColorSpace), t = We.getPrimaries(i);
  let n;
  switch (e === t ? n = "" : e === cr && t === lr ? n = "LinearDisplayP3ToLinearSRGB" : e === lr && t === cr && (n = "LinearSRGBToLinearDisplayP3"), i) {
    case Qt:
    case gr:
      return [n, "LinearTransferOETF"];
    case ct:
    case xs:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", i), [n, "LinearTransferOETF"];
  }
}
function Wa(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = i.getShaderInfoLog(e).trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + r + `

` + xf(i.getShaderSource(e), o);
  } else
    return r;
}
function Sf(i, e) {
  const t = Mf(e);
  return `vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function Ef(i, e) {
  let t;
  switch (e) {
    case Dl:
      t = "Linear";
      break;
    case Ul:
      t = "Reinhard";
      break;
    case Il:
      t = "OptimizedCineon";
      break;
    case Nl:
      t = "ACESFilmic";
      break;
    case Ol:
      t = "AgX";
      break;
    case Fl:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function yf(i) {
  return [
    i.extensionDerivatives || i.envMapCubeUVHeight || i.bumpMap || i.normalMapTangentSpace || i.clearcoatNormalMap || i.flatShading || i.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (i.extensionFragDepth || i.logarithmicDepthBuffer) && i.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    i.extensionDrawBuffers && i.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (i.extensionShaderTextureLOD || i.envMap || i.transmission) && i.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(Jn).join(`
`);
}
function Tf(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : ""
  ].filter(Jn).join(`
`);
}
function Af(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function bf(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r), o = s.name;
    let a = 1;
    s.type === i.FLOAT_MAT2 && (a = 2), s.type === i.FLOAT_MAT3 && (a = 3), s.type === i.FLOAT_MAT4 && (a = 4), t[o] = {
      type: s.type,
      location: i.getAttribLocation(e, o),
      locationSize: a
    };
  }
  return t;
}
function Jn(i) {
  return i !== "";
}
function Xa(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function qa(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const wf = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ms(i) {
  return i.replace(wf, Cf);
}
const Rf = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  // @deprecated, r154
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  // @deprecated, r154
  ["output_fragment", "opaque_fragment"]
  // @deprecated, r154
]);
function Cf(i, e) {
  let t = De[e];
  if (t === void 0) {
    const n = Rf.get(e);
    if (n !== void 0)
      t = De[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return ms(t);
}
const Lf = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ya(i) {
  return i.replace(Lf, Pf);
}
function Pf(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function ja(i) {
  let e = "precision " + i.precision + ` float;
precision ` + i.precision + " int;";
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Df(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === mo ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === al ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === Zt && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Uf(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case ti:
      case ni:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case mr:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function If(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case ni:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Nf(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case go:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Ll:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Pl:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Ff(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Of(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const l = Df(t), c = Uf(t), h = If(t), d = Nf(t), f = Ff(t), m = t.isWebGL2 ? "" : yf(t), g = Tf(t), v = Af(s), p = r.createProgram();
  let u, T, x = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (u = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v
  ].filter(Jn).join(`
`), u.length > 0 && (u += `
`), T = [
    m,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v
  ].filter(Jn).join(`
`), T.length > 0 && (T += `
`)) : (u = [
    ja(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v,
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
    t.shadowMapEnabled ? "#define " + l : "",
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
  ].filter(Jn).join(`
`), T = [
    m,
    ja(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + d : "",
    f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
    f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
    f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
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
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== cn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== cn ? De.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== cn ? Ef("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    De.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Sf("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Jn).join(`
`)), o = ms(o), o = Xa(o, t), o = qa(o, t), a = ms(a), a = Xa(a, t), a = qa(a, t), o = Ya(o), a = Ya(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (x = `#version 300 es
`, u = [
    g,
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + u, T = [
    "precision mediump sampler2DArray;",
    "#define varying in",
    t.glslVersion === da ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === da ? "" : "#define gl_FragColor pc_fragColor",
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
` + T);
  const R = x + u + o, D = x + T + a, w = ka(r, r.VERTEX_SHADER, R), b = ka(r, r.FRAGMENT_SHADER, D);
  r.attachShader(p, w), r.attachShader(p, b), t.index0AttributeName !== void 0 ? r.bindAttribLocation(p, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(p, 0, "position"), r.linkProgram(p);
  function W(j) {
    if (i.debug.checkShaderErrors) {
      const ne = r.getProgramInfoLog(p).trim(), C = r.getShaderInfoLog(w).trim(), O = r.getShaderInfoLog(b).trim();
      let H = !0, X = !0;
      if (r.getProgramParameter(p, r.LINK_STATUS) === !1)
        if (H = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, p, w, b);
        else {
          const k = Wa(r, w, "vertex"), V = Wa(r, b, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(p, r.VALIDATE_STATUS) + `

Program Info Log: ` + ne + `
` + k + `
` + V
          );
        }
      else ne !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", ne) : (C === "" || O === "") && (X = !1);
      X && (j.diagnostics = {
        runnable: H,
        programLog: ne,
        vertexShader: {
          log: C,
          prefix: u
        },
        fragmentShader: {
          log: O,
          prefix: T
        }
      });
    }
    r.deleteShader(w), r.deleteShader(b), S = new sr(r, p), y = bf(r, p);
  }
  let S;
  this.getUniforms = function() {
    return S === void 0 && W(this), S;
  };
  let y;
  this.getAttributes = function() {
    return y === void 0 && W(this), y;
  };
  let z = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return z === !1 && (z = r.getProgramParameter(p, _f)), z;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(p), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = vf++, this.cacheKey = e, this.usedTimes = 1, this.program = p, this.vertexShader = w, this.fragmentShader = b, this;
}
let Bf = 0;
class zf {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(r) === !1 && (o.add(r), r.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this;
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
    return n === void 0 && (n = new Gf(e), t.set(e, n)), n;
  }
}
class Gf {
  constructor(e) {
    this.id = Bf++, this.code = e, this.usedTimes = 0;
  }
}
function Hf(i, e, t, n, r, s, o) {
  const a = new Do(), l = new zf(), c = [], h = r.isWebGL2, d = r.logarithmicDepthBuffer, f = r.vertexTextures;
  let m = r.precision;
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
  function v(S) {
    return S === 0 ? "uv" : `uv${S}`;
  }
  function p(S, y, z, j, ne) {
    const C = j.fog, O = ne.geometry, H = S.isMeshStandardMaterial ? j.environment : null, X = (S.isMeshStandardMaterial ? t : e).get(S.envMap || H), k = X && X.mapping === mr ? X.image.height : null, V = g[S.type];
    S.precision !== null && (m = r.getMaxPrecision(S.precision), m !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", m, "instead."));
    const Z = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, Q = Z !== void 0 ? Z.length : 0;
    let le = 0;
    O.morphAttributes.position !== void 0 && (le = 1), O.morphAttributes.normal !== void 0 && (le = 2), O.morphAttributes.color !== void 0 && (le = 3);
    let G, q, ae, me;
    if (V) {
      const gt = Vt[V];
      G = gt.vertexShader, q = gt.fragmentShader;
    } else
      G = S.vertexShader, q = S.fragmentShader, l.update(S), ae = l.getVertexShaderID(S), me = l.getFragmentShaderID(S);
    const pe = i.getRenderTarget(), Re = ne.isInstancedMesh === !0, Le = ne.isBatchedMesh === !0, Se = !!S.map, He = !!S.matcap, U = !!X, mt = !!S.aoMap, _e = !!S.lightMap, be = !!S.bumpMap, ue = !!S.normalMap, $e = !!S.displacementMap, Ie = !!S.emissiveMap, E = !!S.metalnessMap, _ = !!S.roughnessMap, N = S.anisotropy > 0, $ = S.clearcoat > 0, K = S.iridescence > 0, J = S.sheen > 0, de = S.transmission > 0, se = N && !!S.anisotropyMap, ce = $ && !!S.clearcoatMap, Me = $ && !!S.clearcoatNormalMap, Ne = $ && !!S.clearcoatRoughnessMap, Y = K && !!S.iridescenceMap, ke = K && !!S.iridescenceThicknessMap, Ge = J && !!S.sheenColorMap, Ae = J && !!S.sheenRoughnessMap, ge = !!S.specularMap, he = !!S.specularColorMap, Pe = !!S.specularIntensityMap, Ve = de && !!S.transmissionMap, et = de && !!S.thicknessMap, Oe = !!S.gradientMap, ee = !!S.alphaMap, A = S.alphaTest > 0, ie = !!S.alphaHash, re = !!S.extensions, Ee = !!O.attributes.uv1, ve = !!O.attributes.uv2, qe = !!O.attributes.uv3;
    let Ye = cn;
    return S.toneMapped && (pe === null || pe.isXRRenderTarget === !0) && (Ye = i.toneMapping), {
      isWebGL2: h,
      shaderID: V,
      shaderType: S.type,
      shaderName: S.name,
      vertexShader: G,
      fragmentShader: q,
      defines: S.defines,
      customVertexShaderID: ae,
      customFragmentShaderID: me,
      isRawShaderMaterial: S.isRawShaderMaterial === !0,
      glslVersion: S.glslVersion,
      precision: m,
      batching: Le,
      instancing: Re,
      instancingColor: Re && ne.instanceColor !== null,
      supportsVertexTextures: f,
      outputColorSpace: pe === null ? i.outputColorSpace : pe.isXRRenderTarget === !0 ? pe.texture.colorSpace : Qt,
      map: Se,
      matcap: He,
      envMap: U,
      envMapMode: U && X.mapping,
      envMapCubeUVHeight: k,
      aoMap: mt,
      lightMap: _e,
      bumpMap: be,
      normalMap: ue,
      displacementMap: f && $e,
      emissiveMap: Ie,
      normalMapObjectSpace: ue && S.normalMapType === Kl,
      normalMapTangentSpace: ue && S.normalMapType === bo,
      metalnessMap: E,
      roughnessMap: _,
      anisotropy: N,
      anisotropyMap: se,
      clearcoat: $,
      clearcoatMap: ce,
      clearcoatNormalMap: Me,
      clearcoatRoughnessMap: Ne,
      iridescence: K,
      iridescenceMap: Y,
      iridescenceThicknessMap: ke,
      sheen: J,
      sheenColorMap: Ge,
      sheenRoughnessMap: Ae,
      specularMap: ge,
      specularColorMap: he,
      specularIntensityMap: Pe,
      transmission: de,
      transmissionMap: Ve,
      thicknessMap: et,
      gradientMap: Oe,
      opaque: S.transparent === !1 && S.blending === Qn,
      alphaMap: ee,
      alphaTest: A,
      alphaHash: ie,
      combine: S.combine,
      //
      mapUv: Se && v(S.map.channel),
      aoMapUv: mt && v(S.aoMap.channel),
      lightMapUv: _e && v(S.lightMap.channel),
      bumpMapUv: be && v(S.bumpMap.channel),
      normalMapUv: ue && v(S.normalMap.channel),
      displacementMapUv: $e && v(S.displacementMap.channel),
      emissiveMapUv: Ie && v(S.emissiveMap.channel),
      metalnessMapUv: E && v(S.metalnessMap.channel),
      roughnessMapUv: _ && v(S.roughnessMap.channel),
      anisotropyMapUv: se && v(S.anisotropyMap.channel),
      clearcoatMapUv: ce && v(S.clearcoatMap.channel),
      clearcoatNormalMapUv: Me && v(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Ne && v(S.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Y && v(S.iridescenceMap.channel),
      iridescenceThicknessMapUv: ke && v(S.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ge && v(S.sheenColorMap.channel),
      sheenRoughnessMapUv: Ae && v(S.sheenRoughnessMap.channel),
      specularMapUv: ge && v(S.specularMap.channel),
      specularColorMapUv: he && v(S.specularColorMap.channel),
      specularIntensityMapUv: Pe && v(S.specularIntensityMap.channel),
      transmissionMapUv: Ve && v(S.transmissionMap.channel),
      thicknessMapUv: et && v(S.thicknessMap.channel),
      alphaMapUv: ee && v(S.alphaMap.channel),
      //
      vertexTangents: !!O.attributes.tangent && (ue || N),
      vertexColors: S.vertexColors,
      vertexAlphas: S.vertexColors === !0 && !!O.attributes.color && O.attributes.color.itemSize === 4,
      vertexUv1s: Ee,
      vertexUv2s: ve,
      vertexUv3s: qe,
      pointsUvs: ne.isPoints === !0 && !!O.attributes.uv && (Se || ee),
      fog: !!C,
      useFog: S.fog === !0,
      fogExp2: C && C.isFogExp2,
      flatShading: S.flatShading === !0,
      sizeAttenuation: S.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      skinning: ne.isSkinnedMesh === !0,
      morphTargets: O.morphAttributes.position !== void 0,
      morphNormals: O.morphAttributes.normal !== void 0,
      morphColors: O.morphAttributes.color !== void 0,
      morphTargetsCount: Q,
      morphTextureStride: le,
      numDirLights: y.directional.length,
      numPointLights: y.point.length,
      numSpotLights: y.spot.length,
      numSpotLightMaps: y.spotLightMap.length,
      numRectAreaLights: y.rectArea.length,
      numHemiLights: y.hemi.length,
      numDirLightShadows: y.directionalShadowMap.length,
      numPointLightShadows: y.pointShadowMap.length,
      numSpotLightShadows: y.spotShadowMap.length,
      numSpotLightShadowsWithMaps: y.numSpotLightShadowsWithMaps,
      numLightProbes: y.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: S.dithering,
      shadowMapEnabled: i.shadowMap.enabled && z.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Ye,
      useLegacyLights: i._useLegacyLights,
      decodeVideoTexture: Se && S.map.isVideoTexture === !0 && We.getTransfer(S.map.colorSpace) === Ke,
      premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === kt,
      flipSided: S.side === yt,
      useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0,
      index0AttributeName: S.index0AttributeName,
      extensionDerivatives: re && S.extensions.derivatives === !0,
      extensionFragDepth: re && S.extensions.fragDepth === !0,
      extensionDrawBuffers: re && S.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: re && S.extensions.shaderTextureLOD === !0,
      extensionClipCullDistance: re && S.extensions.clipCullDistance && n.has("WEBGL_clip_cull_distance"),
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: S.customProgramCacheKey()
    };
  }
  function u(S) {
    const y = [];
    if (S.shaderID ? y.push(S.shaderID) : (y.push(S.customVertexShaderID), y.push(S.customFragmentShaderID)), S.defines !== void 0)
      for (const z in S.defines)
        y.push(z), y.push(S.defines[z]);
    return S.isRawShaderMaterial === !1 && (T(y, S), x(y, S), y.push(i.outputColorSpace)), y.push(S.customProgramCacheKey), y.join();
  }
  function T(S, y) {
    S.push(y.precision), S.push(y.outputColorSpace), S.push(y.envMapMode), S.push(y.envMapCubeUVHeight), S.push(y.mapUv), S.push(y.alphaMapUv), S.push(y.lightMapUv), S.push(y.aoMapUv), S.push(y.bumpMapUv), S.push(y.normalMapUv), S.push(y.displacementMapUv), S.push(y.emissiveMapUv), S.push(y.metalnessMapUv), S.push(y.roughnessMapUv), S.push(y.anisotropyMapUv), S.push(y.clearcoatMapUv), S.push(y.clearcoatNormalMapUv), S.push(y.clearcoatRoughnessMapUv), S.push(y.iridescenceMapUv), S.push(y.iridescenceThicknessMapUv), S.push(y.sheenColorMapUv), S.push(y.sheenRoughnessMapUv), S.push(y.specularMapUv), S.push(y.specularColorMapUv), S.push(y.specularIntensityMapUv), S.push(y.transmissionMapUv), S.push(y.thicknessMapUv), S.push(y.combine), S.push(y.fogExp2), S.push(y.sizeAttenuation), S.push(y.morphTargetsCount), S.push(y.morphAttributeCount), S.push(y.numDirLights), S.push(y.numPointLights), S.push(y.numSpotLights), S.push(y.numSpotLightMaps), S.push(y.numHemiLights), S.push(y.numRectAreaLights), S.push(y.numDirLightShadows), S.push(y.numPointLightShadows), S.push(y.numSpotLightShadows), S.push(y.numSpotLightShadowsWithMaps), S.push(y.numLightProbes), S.push(y.shadowMapType), S.push(y.toneMapping), S.push(y.numClippingPlanes), S.push(y.numClipIntersection), S.push(y.depthPacking);
  }
  function x(S, y) {
    a.disableAll(), y.isWebGL2 && a.enable(0), y.supportsVertexTextures && a.enable(1), y.instancing && a.enable(2), y.instancingColor && a.enable(3), y.matcap && a.enable(4), y.envMap && a.enable(5), y.normalMapObjectSpace && a.enable(6), y.normalMapTangentSpace && a.enable(7), y.clearcoat && a.enable(8), y.iridescence && a.enable(9), y.alphaTest && a.enable(10), y.vertexColors && a.enable(11), y.vertexAlphas && a.enable(12), y.vertexUv1s && a.enable(13), y.vertexUv2s && a.enable(14), y.vertexUv3s && a.enable(15), y.vertexTangents && a.enable(16), y.anisotropy && a.enable(17), y.alphaHash && a.enable(18), y.batching && a.enable(19), S.push(a.mask), a.disableAll(), y.fog && a.enable(0), y.useFog && a.enable(1), y.flatShading && a.enable(2), y.logarithmicDepthBuffer && a.enable(3), y.skinning && a.enable(4), y.morphTargets && a.enable(5), y.morphNormals && a.enable(6), y.morphColors && a.enable(7), y.premultipliedAlpha && a.enable(8), y.shadowMapEnabled && a.enable(9), y.useLegacyLights && a.enable(10), y.doubleSided && a.enable(11), y.flipSided && a.enable(12), y.useDepthPacking && a.enable(13), y.dithering && a.enable(14), y.transmission && a.enable(15), y.sheen && a.enable(16), y.opaque && a.enable(17), y.pointsUvs && a.enable(18), y.decodeVideoTexture && a.enable(19), S.push(a.mask);
  }
  function R(S) {
    const y = g[S.type];
    let z;
    if (y) {
      const j = Vt[y];
      z = Ec.clone(j.uniforms);
    } else
      z = S.uniforms;
    return z;
  }
  function D(S, y) {
    let z;
    for (let j = 0, ne = c.length; j < ne; j++) {
      const C = c[j];
      if (C.cacheKey === y) {
        z = C, ++z.usedTimes;
        break;
      }
    }
    return z === void 0 && (z = new Of(i, y, S, s), c.push(z)), z;
  }
  function w(S) {
    if (--S.usedTimes === 0) {
      const y = c.indexOf(S);
      c[y] = c[c.length - 1], c.pop(), S.destroy();
    }
  }
  function b(S) {
    l.remove(S);
  }
  function W() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: u,
    getUniforms: R,
    acquireProgram: D,
    releaseProgram: w,
    releaseShaderCache: b,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: c,
    dispose: W
  };
}
function Vf() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let o = i.get(s);
    return o === void 0 && (o = {}, i.set(s, o)), o;
  }
  function t(s) {
    i.delete(s);
  }
  function n(s, o, a) {
    i.get(s)[o] = a;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: r
  };
}
function kf(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function Ka(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function Za() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function o(d, f, m, g, v, p) {
    let u = i[e];
    return u === void 0 ? (u = {
      id: d.id,
      object: d,
      geometry: f,
      material: m,
      groupOrder: g,
      renderOrder: d.renderOrder,
      z: v,
      group: p
    }, i[e] = u) : (u.id = d.id, u.object = d, u.geometry = f, u.material = m, u.groupOrder = g, u.renderOrder = d.renderOrder, u.z = v, u.group = p), e++, u;
  }
  function a(d, f, m, g, v, p) {
    const u = o(d, f, m, g, v, p);
    m.transmission > 0 ? n.push(u) : m.transparent === !0 ? r.push(u) : t.push(u);
  }
  function l(d, f, m, g, v, p) {
    const u = o(d, f, m, g, v, p);
    m.transmission > 0 ? n.unshift(u) : m.transparent === !0 ? r.unshift(u) : t.unshift(u);
  }
  function c(d, f) {
    t.length > 1 && t.sort(d || kf), n.length > 1 && n.sort(f || Ka), r.length > 1 && r.sort(f || Ka);
  }
  function h() {
    for (let d = e, f = i.length; d < f; d++) {
      const m = i[d];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: a,
    unshift: l,
    finish: h,
    sort: c
  };
}
function Wf() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let o;
    return s === void 0 ? (o = new Za(), i.set(n, [o])) : r >= s.length ? (o = new Za(), s.push(o)) : o = s[r], o;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Xf() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new L(),
            color: new ye()
          };
          break;
        case "SpotLight":
          t = {
            position: new L(),
            direction: new L(),
            color: new ye(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new L(),
            color: new ye(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new L(),
            skyColor: new ye(),
            groundColor: new ye()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new ye(),
            position: new L(),
            halfWidth: new L(),
            halfHeight: new L()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function qf() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ue()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ue()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ue(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let Yf = 0;
function jf(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Kf(i, e) {
  const t = new Xf(), n = qf(), r = {
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
  for (let h = 0; h < 9; h++) r.probe.push(new L());
  const s = new L(), o = new Qe(), a = new Qe();
  function l(h, d) {
    let f = 0, m = 0, g = 0;
    for (let j = 0; j < 9; j++) r.probe[j].set(0, 0, 0);
    let v = 0, p = 0, u = 0, T = 0, x = 0, R = 0, D = 0, w = 0, b = 0, W = 0, S = 0;
    h.sort(jf);
    const y = d === !0 ? Math.PI : 1;
    for (let j = 0, ne = h.length; j < ne; j++) {
      const C = h[j], O = C.color, H = C.intensity, X = C.distance, k = C.shadow && C.shadow.map ? C.shadow.map.texture : null;
      if (C.isAmbientLight)
        f += O.r * H * y, m += O.g * H * y, g += O.b * H * y;
      else if (C.isLightProbe) {
        for (let V = 0; V < 9; V++)
          r.probe[V].addScaledVector(C.sh.coefficients[V], H);
        S++;
      } else if (C.isDirectionalLight) {
        const V = t.get(C);
        if (V.color.copy(C.color).multiplyScalar(C.intensity * y), C.castShadow) {
          const Z = C.shadow, Q = n.get(C);
          Q.shadowBias = Z.bias, Q.shadowNormalBias = Z.normalBias, Q.shadowRadius = Z.radius, Q.shadowMapSize = Z.mapSize, r.directionalShadow[v] = Q, r.directionalShadowMap[v] = k, r.directionalShadowMatrix[v] = C.shadow.matrix, R++;
        }
        r.directional[v] = V, v++;
      } else if (C.isSpotLight) {
        const V = t.get(C);
        V.position.setFromMatrixPosition(C.matrixWorld), V.color.copy(O).multiplyScalar(H * y), V.distance = X, V.coneCos = Math.cos(C.angle), V.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)), V.decay = C.decay, r.spot[u] = V;
        const Z = C.shadow;
        if (C.map && (r.spotLightMap[b] = C.map, b++, Z.updateMatrices(C), C.castShadow && W++), r.spotLightMatrix[u] = Z.matrix, C.castShadow) {
          const Q = n.get(C);
          Q.shadowBias = Z.bias, Q.shadowNormalBias = Z.normalBias, Q.shadowRadius = Z.radius, Q.shadowMapSize = Z.mapSize, r.spotShadow[u] = Q, r.spotShadowMap[u] = k, w++;
        }
        u++;
      } else if (C.isRectAreaLight) {
        const V = t.get(C);
        V.color.copy(O).multiplyScalar(H), V.halfWidth.set(C.width * 0.5, 0, 0), V.halfHeight.set(0, C.height * 0.5, 0), r.rectArea[T] = V, T++;
      } else if (C.isPointLight) {
        const V = t.get(C);
        if (V.color.copy(C.color).multiplyScalar(C.intensity * y), V.distance = C.distance, V.decay = C.decay, C.castShadow) {
          const Z = C.shadow, Q = n.get(C);
          Q.shadowBias = Z.bias, Q.shadowNormalBias = Z.normalBias, Q.shadowRadius = Z.radius, Q.shadowMapSize = Z.mapSize, Q.shadowCameraNear = Z.camera.near, Q.shadowCameraFar = Z.camera.far, r.pointShadow[p] = Q, r.pointShadowMap[p] = k, r.pointShadowMatrix[p] = C.shadow.matrix, D++;
        }
        r.point[p] = V, p++;
      } else if (C.isHemisphereLight) {
        const V = t.get(C);
        V.skyColor.copy(C.color).multiplyScalar(H * y), V.groundColor.copy(C.groundColor).multiplyScalar(H * y), r.hemi[x] = V, x++;
      }
    }
    T > 0 && (e.isWebGL2 ? i.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = te.LTC_FLOAT_1, r.rectAreaLTC2 = te.LTC_FLOAT_2) : (r.rectAreaLTC1 = te.LTC_HALF_1, r.rectAreaLTC2 = te.LTC_HALF_2) : i.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = te.LTC_FLOAT_1, r.rectAreaLTC2 = te.LTC_FLOAT_2) : i.has("OES_texture_half_float_linear") === !0 ? (r.rectAreaLTC1 = te.LTC_HALF_1, r.rectAreaLTC2 = te.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = f, r.ambient[1] = m, r.ambient[2] = g;
    const z = r.hash;
    (z.directionalLength !== v || z.pointLength !== p || z.spotLength !== u || z.rectAreaLength !== T || z.hemiLength !== x || z.numDirectionalShadows !== R || z.numPointShadows !== D || z.numSpotShadows !== w || z.numSpotMaps !== b || z.numLightProbes !== S) && (r.directional.length = v, r.spot.length = u, r.rectArea.length = T, r.point.length = p, r.hemi.length = x, r.directionalShadow.length = R, r.directionalShadowMap.length = R, r.pointShadow.length = D, r.pointShadowMap.length = D, r.spotShadow.length = w, r.spotShadowMap.length = w, r.directionalShadowMatrix.length = R, r.pointShadowMatrix.length = D, r.spotLightMatrix.length = w + b - W, r.spotLightMap.length = b, r.numSpotLightShadowsWithMaps = W, r.numLightProbes = S, z.directionalLength = v, z.pointLength = p, z.spotLength = u, z.rectAreaLength = T, z.hemiLength = x, z.numDirectionalShadows = R, z.numPointShadows = D, z.numSpotShadows = w, z.numSpotMaps = b, z.numLightProbes = S, r.version = Yf++);
  }
  function c(h, d) {
    let f = 0, m = 0, g = 0, v = 0, p = 0;
    const u = d.matrixWorldInverse;
    for (let T = 0, x = h.length; T < x; T++) {
      const R = h[T];
      if (R.isDirectionalLight) {
        const D = r.directional[f];
        D.direction.setFromMatrixPosition(R.matrixWorld), s.setFromMatrixPosition(R.target.matrixWorld), D.direction.sub(s), D.direction.transformDirection(u), f++;
      } else if (R.isSpotLight) {
        const D = r.spot[g];
        D.position.setFromMatrixPosition(R.matrixWorld), D.position.applyMatrix4(u), D.direction.setFromMatrixPosition(R.matrixWorld), s.setFromMatrixPosition(R.target.matrixWorld), D.direction.sub(s), D.direction.transformDirection(u), g++;
      } else if (R.isRectAreaLight) {
        const D = r.rectArea[v];
        D.position.setFromMatrixPosition(R.matrixWorld), D.position.applyMatrix4(u), a.identity(), o.copy(R.matrixWorld), o.premultiply(u), a.extractRotation(o), D.halfWidth.set(R.width * 0.5, 0, 0), D.halfHeight.set(0, R.height * 0.5, 0), D.halfWidth.applyMatrix4(a), D.halfHeight.applyMatrix4(a), v++;
      } else if (R.isPointLight) {
        const D = r.point[m];
        D.position.setFromMatrixPosition(R.matrixWorld), D.position.applyMatrix4(u), m++;
      } else if (R.isHemisphereLight) {
        const D = r.hemi[p];
        D.direction.setFromMatrixPosition(R.matrixWorld), D.direction.transformDirection(u), p++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: r
  };
}
function $a(i, e) {
  const t = new Kf(i, e), n = [], r = [];
  function s() {
    n.length = 0, r.length = 0;
  }
  function o(d) {
    n.push(d);
  }
  function a(d) {
    r.push(d);
  }
  function l(d) {
    t.setup(n, d);
  }
  function c(d) {
    t.setupView(n, d);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: r,
      lights: t
    },
    setupLights: l,
    setupLightsView: c,
    pushLight: o,
    pushShadow: a
  };
}
function Zf(i, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let l;
    return a === void 0 ? (l = new $a(i, e), t.set(s, [l])) : o >= a.length ? (l = new $a(i, e), a.push(l)) : l = a[o], l;
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class $f extends fn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Yl, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Jf extends fn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Qf = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, ep = `uniform sampler2D shadow_pass;
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
function tp(i, e, t) {
  let n = new Es();
  const r = new Ue(), s = new Ue(), o = new Ze(), a = new $f({ depthPacking: jl }), l = new Jf(), c = {}, h = t.maxTextureSize, d = { [dn]: yt, [yt]: dn, [kt]: kt }, f = new Cn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Ue() },
      radius: { value: 4 }
    },
    vertexShader: Qf,
    fragmentShader: ep
  }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new At();
  g.setAttribute(
    "position",
    new Tt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const v = new Gt(g, f), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = mo;
  let u = this.type;
  this.render = function(w, b, W) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || w.length === 0) return;
    const S = i.getRenderTarget(), y = i.getActiveCubeFace(), z = i.getActiveMipmapLevel(), j = i.state;
    j.setBlending(ln), j.buffers.color.setClear(1, 1, 1, 1), j.buffers.depth.setTest(!0), j.setScissorTest(!1);
    const ne = u !== Zt && this.type === Zt, C = u === Zt && this.type !== Zt;
    for (let O = 0, H = w.length; O < H; O++) {
      const X = w[O], k = X.shadow;
      if (k === void 0) {
        console.warn("THREE.WebGLShadowMap:", X, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === !1 && k.needsUpdate === !1) continue;
      r.copy(k.mapSize);
      const V = k.getFrameExtents();
      if (r.multiply(V), s.copy(k.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / V.x), r.x = s.x * V.x, k.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / V.y), r.y = s.y * V.y, k.mapSize.y = s.y)), k.map === null || ne === !0 || C === !0) {
        const Q = this.type !== Zt ? { minFilter: Mt, magFilter: Mt } : {};
        k.map !== null && k.map.dispose(), k.map = new Rn(r.x, r.y, Q), k.map.texture.name = X.name + ".shadowMap", k.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(k.map), i.clear();
      const Z = k.getViewportCount();
      for (let Q = 0; Q < Z; Q++) {
        const le = k.getViewport(Q);
        o.set(
          s.x * le.x,
          s.y * le.y,
          s.x * le.z,
          s.y * le.w
        ), j.viewport(o), k.updateMatrices(X, Q), n = k.getFrustum(), R(b, W, k.camera, X, this.type);
      }
      k.isPointLightShadow !== !0 && this.type === Zt && T(k, W), k.needsUpdate = !1;
    }
    u = this.type, p.needsUpdate = !1, i.setRenderTarget(S, y, z);
  };
  function T(w, b) {
    const W = e.update(v);
    f.defines.VSM_SAMPLES !== w.blurSamples && (f.defines.VSM_SAMPLES = w.blurSamples, m.defines.VSM_SAMPLES = w.blurSamples, f.needsUpdate = !0, m.needsUpdate = !0), w.mapPass === null && (w.mapPass = new Rn(r.x, r.y)), f.uniforms.shadow_pass.value = w.map.texture, f.uniforms.resolution.value = w.mapSize, f.uniforms.radius.value = w.radius, i.setRenderTarget(w.mapPass), i.clear(), i.renderBufferDirect(b, null, W, f, v, null), m.uniforms.shadow_pass.value = w.mapPass.texture, m.uniforms.resolution.value = w.mapSize, m.uniforms.radius.value = w.radius, i.setRenderTarget(w.map), i.clear(), i.renderBufferDirect(b, null, W, m, v, null);
  }
  function x(w, b, W, S) {
    let y = null;
    const z = W.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (z !== void 0)
      y = z;
    else if (y = W.isPointLight === !0 ? l : a, i.localClippingEnabled && b.clipShadows === !0 && Array.isArray(b.clippingPlanes) && b.clippingPlanes.length !== 0 || b.displacementMap && b.displacementScale !== 0 || b.alphaMap && b.alphaTest > 0 || b.map && b.alphaTest > 0) {
      const j = y.uuid, ne = b.uuid;
      let C = c[j];
      C === void 0 && (C = {}, c[j] = C);
      let O = C[ne];
      O === void 0 && (O = y.clone(), C[ne] = O, b.addEventListener("dispose", D)), y = O;
    }
    if (y.visible = b.visible, y.wireframe = b.wireframe, S === Zt ? y.side = b.shadowSide !== null ? b.shadowSide : b.side : y.side = b.shadowSide !== null ? b.shadowSide : d[b.side], y.alphaMap = b.alphaMap, y.alphaTest = b.alphaTest, y.map = b.map, y.clipShadows = b.clipShadows, y.clippingPlanes = b.clippingPlanes, y.clipIntersection = b.clipIntersection, y.displacementMap = b.displacementMap, y.displacementScale = b.displacementScale, y.displacementBias = b.displacementBias, y.wireframeLinewidth = b.wireframeLinewidth, y.linewidth = b.linewidth, W.isPointLight === !0 && y.isMeshDistanceMaterial === !0) {
      const j = i.properties.get(y);
      j.light = W;
    }
    return y;
  }
  function R(w, b, W, S, y) {
    if (w.visible === !1) return;
    if (w.layers.test(b.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && y === Zt) && (!w.frustumCulled || n.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse, w.matrixWorld);
      const ne = e.update(w), C = w.material;
      if (Array.isArray(C)) {
        const O = ne.groups;
        for (let H = 0, X = O.length; H < X; H++) {
          const k = O[H], V = C[k.materialIndex];
          if (V && V.visible) {
            const Z = x(w, V, S, y);
            w.onBeforeShadow(i, w, b, W, ne, Z, k), i.renderBufferDirect(W, null, ne, Z, w, k), w.onAfterShadow(i, w, b, W, ne, Z, k);
          }
        }
      } else if (C.visible) {
        const O = x(w, C, S, y);
        w.onBeforeShadow(i, w, b, W, ne, O, null), i.renderBufferDirect(W, null, ne, O, w, null), w.onAfterShadow(i, w, b, W, ne, O, null);
      }
    }
    const j = w.children;
    for (let ne = 0, C = j.length; ne < C; ne++)
      R(j[ne], b, W, S, y);
  }
  function D(w) {
    w.target.removeEventListener("dispose", D);
    for (const W in c) {
      const S = c[W], y = w.target.uuid;
      y in S && (S[y].dispose(), delete S[y]);
    }
  }
}
function np(i, e, t) {
  const n = t.isWebGL2;
  function r() {
    let A = !1;
    const ie = new Ze();
    let re = null;
    const Ee = new Ze(0, 0, 0, 0);
    return {
      setMask: function(ve) {
        re !== ve && !A && (i.colorMask(ve, ve, ve, ve), re = ve);
      },
      setLocked: function(ve) {
        A = ve;
      },
      setClear: function(ve, qe, Ye, at, gt) {
        gt === !0 && (ve *= at, qe *= at, Ye *= at), ie.set(ve, qe, Ye, at), Ee.equals(ie) === !1 && (i.clearColor(ve, qe, Ye, at), Ee.copy(ie));
      },
      reset: function() {
        A = !1, re = null, Ee.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let A = !1, ie = null, re = null, Ee = null;
    return {
      setTest: function(ve) {
        ve ? Le(i.DEPTH_TEST) : Se(i.DEPTH_TEST);
      },
      setMask: function(ve) {
        ie !== ve && !A && (i.depthMask(ve), ie = ve);
      },
      setFunc: function(ve) {
        if (re !== ve) {
          switch (ve) {
            case yl:
              i.depthFunc(i.NEVER);
              break;
            case Tl:
              i.depthFunc(i.ALWAYS);
              break;
            case Al:
              i.depthFunc(i.LESS);
              break;
            case ar:
              i.depthFunc(i.LEQUAL);
              break;
            case bl:
              i.depthFunc(i.EQUAL);
              break;
            case wl:
              i.depthFunc(i.GEQUAL);
              break;
            case Rl:
              i.depthFunc(i.GREATER);
              break;
            case Cl:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          re = ve;
        }
      },
      setLocked: function(ve) {
        A = ve;
      },
      setClear: function(ve) {
        Ee !== ve && (i.clearDepth(ve), Ee = ve);
      },
      reset: function() {
        A = !1, ie = null, re = null, Ee = null;
      }
    };
  }
  function o() {
    let A = !1, ie = null, re = null, Ee = null, ve = null, qe = null, Ye = null, at = null, gt = null;
    return {
      setTest: function(je) {
        A || (je ? Le(i.STENCIL_TEST) : Se(i.STENCIL_TEST));
      },
      setMask: function(je) {
        ie !== je && !A && (i.stencilMask(je), ie = je);
      },
      setFunc: function(je, _t, Ht) {
        (re !== je || Ee !== _t || ve !== Ht) && (i.stencilFunc(je, _t, Ht), re = je, Ee = _t, ve = Ht);
      },
      setOp: function(je, _t, Ht) {
        (qe !== je || Ye !== _t || at !== Ht) && (i.stencilOp(je, _t, Ht), qe = je, Ye = _t, at = Ht);
      },
      setLocked: function(je) {
        A = je;
      },
      setClear: function(je) {
        gt !== je && (i.clearStencil(je), gt = je);
      },
      reset: function() {
        A = !1, ie = null, re = null, Ee = null, ve = null, qe = null, Ye = null, at = null, gt = null;
      }
    };
  }
  const a = new r(), l = new s(), c = new o(), h = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
  let f = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), v = [], p = null, u = !1, T = null, x = null, R = null, D = null, w = null, b = null, W = null, S = new ye(0, 0, 0), y = 0, z = !1, j = null, ne = null, C = null, O = null, H = null;
  const X = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let k = !1, V = 0;
  const Z = i.getParameter(i.VERSION);
  Z.indexOf("WebGL") !== -1 ? (V = parseFloat(/^WebGL (\d)/.exec(Z)[1]), k = V >= 1) : Z.indexOf("OpenGL ES") !== -1 && (V = parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]), k = V >= 2);
  let Q = null, le = {};
  const G = i.getParameter(i.SCISSOR_BOX), q = i.getParameter(i.VIEWPORT), ae = new Ze().fromArray(G), me = new Ze().fromArray(q);
  function pe(A, ie, re, Ee) {
    const ve = new Uint8Array(4), qe = i.createTexture();
    i.bindTexture(A, qe), i.texParameteri(A, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(A, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Ye = 0; Ye < re; Ye++)
      n && (A === i.TEXTURE_3D || A === i.TEXTURE_2D_ARRAY) ? i.texImage3D(ie, 0, i.RGBA, 1, 1, Ee, 0, i.RGBA, i.UNSIGNED_BYTE, ve) : i.texImage2D(ie + Ye, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, ve);
    return qe;
  }
  const Re = {};
  Re[i.TEXTURE_2D] = pe(i.TEXTURE_2D, i.TEXTURE_2D, 1), Re[i.TEXTURE_CUBE_MAP] = pe(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (Re[i.TEXTURE_2D_ARRAY] = pe(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Re[i.TEXTURE_3D] = pe(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), Le(i.DEPTH_TEST), l.setFunc(ar), Ie(!1), E(Is), Le(i.CULL_FACE), ue(ln);
  function Le(A) {
    f[A] !== !0 && (i.enable(A), f[A] = !0);
  }
  function Se(A) {
    f[A] !== !1 && (i.disable(A), f[A] = !1);
  }
  function He(A, ie) {
    return m[A] !== ie ? (i.bindFramebuffer(A, ie), m[A] = ie, n && (A === i.DRAW_FRAMEBUFFER && (m[i.FRAMEBUFFER] = ie), A === i.FRAMEBUFFER && (m[i.DRAW_FRAMEBUFFER] = ie)), !0) : !1;
  }
  function U(A, ie) {
    let re = v, Ee = !1;
    if (A)
      if (re = g.get(ie), re === void 0 && (re = [], g.set(ie, re)), A.isWebGLMultipleRenderTargets) {
        const ve = A.texture;
        if (re.length !== ve.length || re[0] !== i.COLOR_ATTACHMENT0) {
          for (let qe = 0, Ye = ve.length; qe < Ye; qe++)
            re[qe] = i.COLOR_ATTACHMENT0 + qe;
          re.length = ve.length, Ee = !0;
        }
      } else
        re[0] !== i.COLOR_ATTACHMENT0 && (re[0] = i.COLOR_ATTACHMENT0, Ee = !0);
    else
      re[0] !== i.BACK && (re[0] = i.BACK, Ee = !0);
    Ee && (t.isWebGL2 ? i.drawBuffers(re) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re));
  }
  function mt(A) {
    return p !== A ? (i.useProgram(A), p = A, !0) : !1;
  }
  const _e = {
    [En]: i.FUNC_ADD,
    [ll]: i.FUNC_SUBTRACT,
    [cl]: i.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    _e[Os] = i.MIN, _e[Bs] = i.MAX;
  else {
    const A = e.get("EXT_blend_minmax");
    A !== null && (_e[Os] = A.MIN_EXT, _e[Bs] = A.MAX_EXT);
  }
  const be = {
    [hl]: i.ZERO,
    [ul]: i.ONE,
    [dl]: i.SRC_COLOR,
    [ss]: i.SRC_ALPHA,
    [vl]: i.SRC_ALPHA_SATURATE,
    [gl]: i.DST_COLOR,
    [pl]: i.DST_ALPHA,
    [fl]: i.ONE_MINUS_SRC_COLOR,
    [as]: i.ONE_MINUS_SRC_ALPHA,
    [_l]: i.ONE_MINUS_DST_COLOR,
    [ml]: i.ONE_MINUS_DST_ALPHA,
    [xl]: i.CONSTANT_COLOR,
    [Ml]: i.ONE_MINUS_CONSTANT_COLOR,
    [Sl]: i.CONSTANT_ALPHA,
    [El]: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function ue(A, ie, re, Ee, ve, qe, Ye, at, gt, je) {
    if (A === ln) {
      u === !0 && (Se(i.BLEND), u = !1);
      return;
    }
    if (u === !1 && (Le(i.BLEND), u = !0), A !== ol) {
      if (A !== T || je !== z) {
        if ((x !== En || w !== En) && (i.blendEquation(i.FUNC_ADD), x = En, w = En), je)
          switch (A) {
            case Qn:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case rs:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case Ns:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Fs:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", A);
              break;
          }
        else
          switch (A) {
            case Qn:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case rs:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case Ns:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Fs:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", A);
              break;
          }
        R = null, D = null, b = null, W = null, S.set(0, 0, 0), y = 0, T = A, z = je;
      }
      return;
    }
    ve = ve || ie, qe = qe || re, Ye = Ye || Ee, (ie !== x || ve !== w) && (i.blendEquationSeparate(_e[ie], _e[ve]), x = ie, w = ve), (re !== R || Ee !== D || qe !== b || Ye !== W) && (i.blendFuncSeparate(be[re], be[Ee], be[qe], be[Ye]), R = re, D = Ee, b = qe, W = Ye), (at.equals(S) === !1 || gt !== y) && (i.blendColor(at.r, at.g, at.b, gt), S.copy(at), y = gt), T = A, z = !1;
  }
  function $e(A, ie) {
    A.side === kt ? Se(i.CULL_FACE) : Le(i.CULL_FACE);
    let re = A.side === yt;
    ie && (re = !re), Ie(re), A.blending === Qn && A.transparent === !1 ? ue(ln) : ue(A.blending, A.blendEquation, A.blendSrc, A.blendDst, A.blendEquationAlpha, A.blendSrcAlpha, A.blendDstAlpha, A.blendColor, A.blendAlpha, A.premultipliedAlpha), l.setFunc(A.depthFunc), l.setTest(A.depthTest), l.setMask(A.depthWrite), a.setMask(A.colorWrite);
    const Ee = A.stencilWrite;
    c.setTest(Ee), Ee && (c.setMask(A.stencilWriteMask), c.setFunc(A.stencilFunc, A.stencilRef, A.stencilFuncMask), c.setOp(A.stencilFail, A.stencilZFail, A.stencilZPass)), N(A.polygonOffset, A.polygonOffsetFactor, A.polygonOffsetUnits), A.alphaToCoverage === !0 ? Le(i.SAMPLE_ALPHA_TO_COVERAGE) : Se(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ie(A) {
    j !== A && (A ? i.frontFace(i.CW) : i.frontFace(i.CCW), j = A);
  }
  function E(A) {
    A !== rl ? (Le(i.CULL_FACE), A !== ne && (A === Is ? i.cullFace(i.BACK) : A === sl ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : Se(i.CULL_FACE), ne = A;
  }
  function _(A) {
    A !== C && (k && i.lineWidth(A), C = A);
  }
  function N(A, ie, re) {
    A ? (Le(i.POLYGON_OFFSET_FILL), (O !== ie || H !== re) && (i.polygonOffset(ie, re), O = ie, H = re)) : Se(i.POLYGON_OFFSET_FILL);
  }
  function $(A) {
    A ? Le(i.SCISSOR_TEST) : Se(i.SCISSOR_TEST);
  }
  function K(A) {
    A === void 0 && (A = i.TEXTURE0 + X - 1), Q !== A && (i.activeTexture(A), Q = A);
  }
  function J(A, ie, re) {
    re === void 0 && (Q === null ? re = i.TEXTURE0 + X - 1 : re = Q);
    let Ee = le[re];
    Ee === void 0 && (Ee = { type: void 0, texture: void 0 }, le[re] = Ee), (Ee.type !== A || Ee.texture !== ie) && (Q !== re && (i.activeTexture(re), Q = re), i.bindTexture(A, ie || Re[A]), Ee.type = A, Ee.texture = ie);
  }
  function de() {
    const A = le[Q];
    A !== void 0 && A.type !== void 0 && (i.bindTexture(A.type, null), A.type = void 0, A.texture = void 0);
  }
  function se() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function ce() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function Me() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function Ne() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function Y() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function ke() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function Ge() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function Ae() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function ge() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function he() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function Pe(A) {
    ae.equals(A) === !1 && (i.scissor(A.x, A.y, A.z, A.w), ae.copy(A));
  }
  function Ve(A) {
    me.equals(A) === !1 && (i.viewport(A.x, A.y, A.z, A.w), me.copy(A));
  }
  function et(A, ie) {
    let re = d.get(ie);
    re === void 0 && (re = /* @__PURE__ */ new WeakMap(), d.set(ie, re));
    let Ee = re.get(A);
    Ee === void 0 && (Ee = i.getUniformBlockIndex(ie, A.name), re.set(A, Ee));
  }
  function Oe(A, ie) {
    const Ee = d.get(ie).get(A);
    h.get(ie) !== Ee && (i.uniformBlockBinding(ie, Ee, A.__bindingPointIndex), h.set(ie, Ee));
  }
  function ee() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), n === !0 && (i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null)), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), f = {}, Q = null, le = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), v = [], p = null, u = !1, T = null, x = null, R = null, D = null, w = null, b = null, W = null, S = new ye(0, 0, 0), y = 0, z = !1, j = null, ne = null, C = null, O = null, H = null, ae.set(0, 0, i.canvas.width, i.canvas.height), me.set(0, 0, i.canvas.width, i.canvas.height), a.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: a,
      depth: l,
      stencil: c
    },
    enable: Le,
    disable: Se,
    bindFramebuffer: He,
    drawBuffers: U,
    useProgram: mt,
    setBlending: ue,
    setMaterial: $e,
    setFlipSided: Ie,
    setCullFace: E,
    setLineWidth: _,
    setPolygonOffset: N,
    setScissorTest: $,
    activeTexture: K,
    bindTexture: J,
    unbindTexture: de,
    compressedTexImage2D: se,
    compressedTexImage3D: ce,
    texImage2D: ge,
    texImage3D: he,
    updateUBOMapping: et,
    uniformBlockBinding: Oe,
    texStorage2D: Ge,
    texStorage3D: Ae,
    texSubImage2D: Me,
    texSubImage3D: Ne,
    compressedTexSubImage2D: Y,
    compressedTexSubImage3D: ke,
    scissor: Pe,
    viewport: Ve,
    reset: ee
  };
}
function ip(i, e, t, n, r, s, o) {
  const a = r.isWebGL2, l = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), h = /* @__PURE__ */ new WeakMap();
  let d;
  const f = /* @__PURE__ */ new WeakMap();
  let m = !1;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(E, _) {
    return m ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(E, _)
    ) : Mi("canvas");
  }
  function v(E, _, N, $) {
    let K = 1;
    if ((E.width > $ || E.height > $) && (K = $ / Math.max(E.width, E.height)), K < 1 || _ === !0)
      if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap) {
        const J = _ ? ps : Math.floor, de = J(K * E.width), se = J(K * E.height);
        d === void 0 && (d = g(de, se));
        const ce = N ? g(de, se) : d;
        return ce.width = de, ce.height = se, ce.getContext("2d").drawImage(E, 0, 0, de, se), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + E.width + "x" + E.height + ") to (" + de + "x" + se + ")."), ce;
      } else
        return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + E.width + "x" + E.height + ")."), E;
    return E;
  }
  function p(E) {
    return fa(E.width) && fa(E.height);
  }
  function u(E) {
    return a ? !1 : E.wrapS !== Bt || E.wrapT !== Bt || E.minFilter !== Mt && E.minFilter !== Pt;
  }
  function T(E, _) {
    return E.generateMipmaps && _ && E.minFilter !== Mt && E.minFilter !== Pt;
  }
  function x(E) {
    i.generateMipmap(E);
  }
  function R(E, _, N, $, K = !1) {
    if (a === !1) return _;
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let J = _;
    if (_ === i.RED && (N === i.FLOAT && (J = i.R32F), N === i.HALF_FLOAT && (J = i.R16F), N === i.UNSIGNED_BYTE && (J = i.R8)), _ === i.RED_INTEGER && (N === i.UNSIGNED_BYTE && (J = i.R8UI), N === i.UNSIGNED_SHORT && (J = i.R16UI), N === i.UNSIGNED_INT && (J = i.R32UI), N === i.BYTE && (J = i.R8I), N === i.SHORT && (J = i.R16I), N === i.INT && (J = i.R32I)), _ === i.RG && (N === i.FLOAT && (J = i.RG32F), N === i.HALF_FLOAT && (J = i.RG16F), N === i.UNSIGNED_BYTE && (J = i.RG8)), _ === i.RGBA) {
      const de = K ? or : We.getTransfer($);
      N === i.FLOAT && (J = i.RGBA32F), N === i.HALF_FLOAT && (J = i.RGBA16F), N === i.UNSIGNED_BYTE && (J = de === Ke ? i.SRGB8_ALPHA8 : i.RGBA8), N === i.UNSIGNED_SHORT_4_4_4_4 && (J = i.RGBA4), N === i.UNSIGNED_SHORT_5_5_5_1 && (J = i.RGB5_A1);
    }
    return (J === i.R16F || J === i.R32F || J === i.RG16F || J === i.RG32F || J === i.RGBA16F || J === i.RGBA32F) && e.get("EXT_color_buffer_float"), J;
  }
  function D(E, _, N) {
    return T(E, N) === !0 || E.isFramebufferTexture && E.minFilter !== Mt && E.minFilter !== Pt ? Math.log2(Math.max(_.width, _.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? _.mipmaps.length : 1;
  }
  function w(E) {
    return E === Mt || E === zs || E === yr ? i.NEAREST : i.LINEAR;
  }
  function b(E) {
    const _ = E.target;
    _.removeEventListener("dispose", b), S(_), _.isVideoTexture && h.delete(_);
  }
  function W(E) {
    const _ = E.target;
    _.removeEventListener("dispose", W), z(_);
  }
  function S(E) {
    const _ = n.get(E);
    if (_.__webglInit === void 0) return;
    const N = E.source, $ = f.get(N);
    if ($) {
      const K = $[_.__cacheKey];
      K.usedTimes--, K.usedTimes === 0 && y(E), Object.keys($).length === 0 && f.delete(N);
    }
    n.remove(E);
  }
  function y(E) {
    const _ = n.get(E);
    i.deleteTexture(_.__webglTexture);
    const N = E.source, $ = f.get(N);
    delete $[_.__cacheKey], o.memory.textures--;
  }
  function z(E) {
    const _ = E.texture, N = n.get(E), $ = n.get(_);
    if ($.__webglTexture !== void 0 && (i.deleteTexture($.__webglTexture), o.memory.textures--), E.depthTexture && E.depthTexture.dispose(), E.isWebGLCubeRenderTarget)
      for (let K = 0; K < 6; K++) {
        if (Array.isArray(N.__webglFramebuffer[K]))
          for (let J = 0; J < N.__webglFramebuffer[K].length; J++) i.deleteFramebuffer(N.__webglFramebuffer[K][J]);
        else
          i.deleteFramebuffer(N.__webglFramebuffer[K]);
        N.__webglDepthbuffer && i.deleteRenderbuffer(N.__webglDepthbuffer[K]);
      }
    else {
      if (Array.isArray(N.__webglFramebuffer))
        for (let K = 0; K < N.__webglFramebuffer.length; K++) i.deleteFramebuffer(N.__webglFramebuffer[K]);
      else
        i.deleteFramebuffer(N.__webglFramebuffer);
      if (N.__webglDepthbuffer && i.deleteRenderbuffer(N.__webglDepthbuffer), N.__webglMultisampledFramebuffer && i.deleteFramebuffer(N.__webglMultisampledFramebuffer), N.__webglColorRenderbuffer)
        for (let K = 0; K < N.__webglColorRenderbuffer.length; K++)
          N.__webglColorRenderbuffer[K] && i.deleteRenderbuffer(N.__webglColorRenderbuffer[K]);
      N.__webglDepthRenderbuffer && i.deleteRenderbuffer(N.__webglDepthRenderbuffer);
    }
    if (E.isWebGLMultipleRenderTargets)
      for (let K = 0, J = _.length; K < J; K++) {
        const de = n.get(_[K]);
        de.__webglTexture && (i.deleteTexture(de.__webglTexture), o.memory.textures--), n.remove(_[K]);
      }
    n.remove(_), n.remove(E);
  }
  let j = 0;
  function ne() {
    j = 0;
  }
  function C() {
    const E = j;
    return E >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + r.maxTextures), j += 1, E;
  }
  function O(E) {
    const _ = [];
    return _.push(E.wrapS), _.push(E.wrapT), _.push(E.wrapR || 0), _.push(E.magFilter), _.push(E.minFilter), _.push(E.anisotropy), _.push(E.internalFormat), _.push(E.format), _.push(E.type), _.push(E.generateMipmaps), _.push(E.premultiplyAlpha), _.push(E.flipY), _.push(E.unpackAlignment), _.push(E.colorSpace), _.join();
  }
  function H(E, _) {
    const N = n.get(E);
    if (E.isVideoTexture && $e(E), E.isRenderTargetTexture === !1 && E.version > 0 && N.__version !== E.version) {
      const $ = E.image;
      if ($ === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if ($.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ae(N, E, _);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, N.__webglTexture, i.TEXTURE0 + _);
  }
  function X(E, _) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      ae(N, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, N.__webglTexture, i.TEXTURE0 + _);
  }
  function k(E, _) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      ae(N, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, N.__webglTexture, i.TEXTURE0 + _);
  }
  function V(E, _) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      me(N, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, N.__webglTexture, i.TEXTURE0 + _);
  }
  const Z = {
    [cs]: i.REPEAT,
    [Bt]: i.CLAMP_TO_EDGE,
    [hs]: i.MIRRORED_REPEAT
  }, Q = {
    [Mt]: i.NEAREST,
    [zs]: i.NEAREST_MIPMAP_NEAREST,
    [yr]: i.NEAREST_MIPMAP_LINEAR,
    [Pt]: i.LINEAR,
    [Bl]: i.LINEAR_MIPMAP_NEAREST,
    [vi]: i.LINEAR_MIPMAP_LINEAR
  }, le = {
    [Zl]: i.NEVER,
    [nc]: i.ALWAYS,
    [$l]: i.LESS,
    [wo]: i.LEQUAL,
    [Jl]: i.EQUAL,
    [tc]: i.GEQUAL,
    [Ql]: i.GREATER,
    [ec]: i.NOTEQUAL
  };
  function G(E, _, N) {
    if (N ? (i.texParameteri(E, i.TEXTURE_WRAP_S, Z[_.wrapS]), i.texParameteri(E, i.TEXTURE_WRAP_T, Z[_.wrapT]), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, Z[_.wrapR]), i.texParameteri(E, i.TEXTURE_MAG_FILTER, Q[_.magFilter]), i.texParameteri(E, i.TEXTURE_MIN_FILTER, Q[_.minFilter])) : (i.texParameteri(E, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(E, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, i.CLAMP_TO_EDGE), (_.wrapS !== Bt || _.wrapT !== Bt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), i.texParameteri(E, i.TEXTURE_MAG_FILTER, w(_.magFilter)), i.texParameteri(E, i.TEXTURE_MIN_FILTER, w(_.minFilter)), _.minFilter !== Mt && _.minFilter !== Pt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), _.compareFunction && (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, le[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const $ = e.get("EXT_texture_filter_anisotropic");
      if (_.magFilter === Mt || _.minFilter !== yr && _.minFilter !== vi || _.type === on && e.has("OES_texture_float_linear") === !1 || a === !1 && _.type === xi && e.has("OES_texture_half_float_linear") === !1) return;
      (_.anisotropy > 1 || n.get(_).__currentAnisotropy) && (i.texParameterf(E, $.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy);
    }
  }
  function q(E, _) {
    let N = !1;
    E.__webglInit === void 0 && (E.__webglInit = !0, _.addEventListener("dispose", b));
    const $ = _.source;
    let K = f.get($);
    K === void 0 && (K = {}, f.set($, K));
    const J = O(_);
    if (J !== E.__cacheKey) {
      K[J] === void 0 && (K[J] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, N = !0), K[J].usedTimes++;
      const de = K[E.__cacheKey];
      de !== void 0 && (K[E.__cacheKey].usedTimes--, de.usedTimes === 0 && y(_)), E.__cacheKey = J, E.__webglTexture = K[J].texture;
    }
    return N;
  }
  function ae(E, _, N) {
    let $ = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && ($ = i.TEXTURE_2D_ARRAY), _.isData3DTexture && ($ = i.TEXTURE_3D);
    const K = q(E, _), J = _.source;
    t.bindTexture($, E.__webglTexture, i.TEXTURE0 + N);
    const de = n.get(J);
    if (J.version !== de.__version || K === !0) {
      t.activeTexture(i.TEXTURE0 + N);
      const se = We.getPrimaries(We.workingColorSpace), ce = _.colorSpace === Ut ? null : We.getPrimaries(_.colorSpace), Me = _.colorSpace === Ut || se === ce ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Me);
      const Ne = u(_) && p(_.image) === !1;
      let Y = v(_.image, Ne, !1, r.maxTextureSize);
      Y = Ie(_, Y);
      const ke = p(Y) || a, Ge = s.convert(_.format, _.colorSpace);
      let Ae = s.convert(_.type), ge = R(_.internalFormat, Ge, Ae, _.colorSpace, _.isVideoTexture);
      G($, _, ke);
      let he;
      const Pe = _.mipmaps, Ve = a && _.isVideoTexture !== !0 && ge !== To, et = de.__version === void 0 || K === !0, Oe = D(_, Y, ke);
      if (_.isDepthTexture)
        ge = i.DEPTH_COMPONENT, a ? _.type === on ? ge = i.DEPTH_COMPONENT32F : _.type === an ? ge = i.DEPTH_COMPONENT24 : _.type === Tn ? ge = i.DEPTH24_STENCIL8 : ge = i.DEPTH_COMPONENT16 : _.type === on && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), _.format === An && ge === i.DEPTH_COMPONENT && _.type !== vs && _.type !== an && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), _.type = an, Ae = s.convert(_.type)), _.format === ii && ge === i.DEPTH_COMPONENT && (ge = i.DEPTH_STENCIL, _.type !== Tn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), _.type = Tn, Ae = s.convert(_.type))), et && (Ve ? t.texStorage2D(i.TEXTURE_2D, 1, ge, Y.width, Y.height) : t.texImage2D(i.TEXTURE_2D, 0, ge, Y.width, Y.height, 0, Ge, Ae, null));
      else if (_.isDataTexture)
        if (Pe.length > 0 && ke) {
          Ve && et && t.texStorage2D(i.TEXTURE_2D, Oe, ge, Pe[0].width, Pe[0].height);
          for (let ee = 0, A = Pe.length; ee < A; ee++)
            he = Pe[ee], Ve ? t.texSubImage2D(i.TEXTURE_2D, ee, 0, 0, he.width, he.height, Ge, Ae, he.data) : t.texImage2D(i.TEXTURE_2D, ee, ge, he.width, he.height, 0, Ge, Ae, he.data);
          _.generateMipmaps = !1;
        } else
          Ve ? (et && t.texStorage2D(i.TEXTURE_2D, Oe, ge, Y.width, Y.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Y.width, Y.height, Ge, Ae, Y.data)) : t.texImage2D(i.TEXTURE_2D, 0, ge, Y.width, Y.height, 0, Ge, Ae, Y.data);
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          Ve && et && t.texStorage3D(i.TEXTURE_2D_ARRAY, Oe, ge, Pe[0].width, Pe[0].height, Y.depth);
          for (let ee = 0, A = Pe.length; ee < A; ee++)
            he = Pe[ee], _.format !== zt ? Ge !== null ? Ve ? t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, ee, 0, 0, 0, he.width, he.height, Y.depth, Ge, he.data, 0, 0) : t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, ee, ge, he.width, he.height, Y.depth, 0, he.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ve ? t.texSubImage3D(i.TEXTURE_2D_ARRAY, ee, 0, 0, 0, he.width, he.height, Y.depth, Ge, Ae, he.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, ee, ge, he.width, he.height, Y.depth, 0, Ge, Ae, he.data);
        } else {
          Ve && et && t.texStorage2D(i.TEXTURE_2D, Oe, ge, Pe[0].width, Pe[0].height);
          for (let ee = 0, A = Pe.length; ee < A; ee++)
            he = Pe[ee], _.format !== zt ? Ge !== null ? Ve ? t.compressedTexSubImage2D(i.TEXTURE_2D, ee, 0, 0, he.width, he.height, Ge, he.data) : t.compressedTexImage2D(i.TEXTURE_2D, ee, ge, he.width, he.height, 0, he.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ve ? t.texSubImage2D(i.TEXTURE_2D, ee, 0, 0, he.width, he.height, Ge, Ae, he.data) : t.texImage2D(i.TEXTURE_2D, ee, ge, he.width, he.height, 0, Ge, Ae, he.data);
        }
      else if (_.isDataArrayTexture)
        Ve ? (et && t.texStorage3D(i.TEXTURE_2D_ARRAY, Oe, ge, Y.width, Y.height, Y.depth), t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Y.width, Y.height, Y.depth, Ge, Ae, Y.data)) : t.texImage3D(i.TEXTURE_2D_ARRAY, 0, ge, Y.width, Y.height, Y.depth, 0, Ge, Ae, Y.data);
      else if (_.isData3DTexture)
        Ve ? (et && t.texStorage3D(i.TEXTURE_3D, Oe, ge, Y.width, Y.height, Y.depth), t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Y.width, Y.height, Y.depth, Ge, Ae, Y.data)) : t.texImage3D(i.TEXTURE_3D, 0, ge, Y.width, Y.height, Y.depth, 0, Ge, Ae, Y.data);
      else if (_.isFramebufferTexture) {
        if (et)
          if (Ve)
            t.texStorage2D(i.TEXTURE_2D, Oe, ge, Y.width, Y.height);
          else {
            let ee = Y.width, A = Y.height;
            for (let ie = 0; ie < Oe; ie++)
              t.texImage2D(i.TEXTURE_2D, ie, ge, ee, A, 0, Ge, Ae, null), ee >>= 1, A >>= 1;
          }
      } else if (Pe.length > 0 && ke) {
        Ve && et && t.texStorage2D(i.TEXTURE_2D, Oe, ge, Pe[0].width, Pe[0].height);
        for (let ee = 0, A = Pe.length; ee < A; ee++)
          he = Pe[ee], Ve ? t.texSubImage2D(i.TEXTURE_2D, ee, 0, 0, Ge, Ae, he) : t.texImage2D(i.TEXTURE_2D, ee, ge, Ge, Ae, he);
        _.generateMipmaps = !1;
      } else
        Ve ? (et && t.texStorage2D(i.TEXTURE_2D, Oe, ge, Y.width, Y.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Ge, Ae, Y)) : t.texImage2D(i.TEXTURE_2D, 0, ge, Ge, Ae, Y);
      T(_, ke) && x($), de.__version = J.version, _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function me(E, _, N) {
    if (_.image.length !== 6) return;
    const $ = q(E, _), K = _.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + N);
    const J = n.get(K);
    if (K.version !== J.__version || $ === !0) {
      t.activeTexture(i.TEXTURE0 + N);
      const de = We.getPrimaries(We.workingColorSpace), se = _.colorSpace === Ut ? null : We.getPrimaries(_.colorSpace), ce = _.colorSpace === Ut || de === se ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ce);
      const Me = _.isCompressedTexture || _.image[0].isCompressedTexture, Ne = _.image[0] && _.image[0].isDataTexture, Y = [];
      for (let ee = 0; ee < 6; ee++)
        !Me && !Ne ? Y[ee] = v(_.image[ee], !1, !0, r.maxCubemapSize) : Y[ee] = Ne ? _.image[ee].image : _.image[ee], Y[ee] = Ie(_, Y[ee]);
      const ke = Y[0], Ge = p(ke) || a, Ae = s.convert(_.format, _.colorSpace), ge = s.convert(_.type), he = R(_.internalFormat, Ae, ge, _.colorSpace), Pe = a && _.isVideoTexture !== !0, Ve = J.__version === void 0 || $ === !0;
      let et = D(_, ke, Ge);
      G(i.TEXTURE_CUBE_MAP, _, Ge);
      let Oe;
      if (Me) {
        Pe && Ve && t.texStorage2D(i.TEXTURE_CUBE_MAP, et, he, ke.width, ke.height);
        for (let ee = 0; ee < 6; ee++) {
          Oe = Y[ee].mipmaps;
          for (let A = 0; A < Oe.length; A++) {
            const ie = Oe[A];
            _.format !== zt ? Ae !== null ? Pe ? t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, A, 0, 0, ie.width, ie.height, Ae, ie.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, A, he, ie.width, ie.height, 0, ie.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Pe ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, A, 0, 0, ie.width, ie.height, Ae, ge, ie.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, A, he, ie.width, ie.height, 0, Ae, ge, ie.data);
          }
        }
      } else {
        Oe = _.mipmaps, Pe && Ve && (Oe.length > 0 && et++, t.texStorage2D(i.TEXTURE_CUBE_MAP, et, he, Y[0].width, Y[0].height));
        for (let ee = 0; ee < 6; ee++)
          if (Ne) {
            Pe ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, 0, 0, 0, Y[ee].width, Y[ee].height, Ae, ge, Y[ee].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, 0, he, Y[ee].width, Y[ee].height, 0, Ae, ge, Y[ee].data);
            for (let A = 0; A < Oe.length; A++) {
              const re = Oe[A].image[ee].image;
              Pe ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, A + 1, 0, 0, re.width, re.height, Ae, ge, re.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, A + 1, he, re.width, re.height, 0, Ae, ge, re.data);
            }
          } else {
            Pe ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, 0, 0, 0, Ae, ge, Y[ee]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, 0, he, Ae, ge, Y[ee]);
            for (let A = 0; A < Oe.length; A++) {
              const ie = Oe[A];
              Pe ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, A + 1, 0, 0, Ae, ge, ie.image[ee]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + ee, A + 1, he, Ae, ge, ie.image[ee]);
            }
          }
      }
      T(_, Ge) && x(i.TEXTURE_CUBE_MAP), J.__version = K.version, _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function pe(E, _, N, $, K, J) {
    const de = s.convert(N.format, N.colorSpace), se = s.convert(N.type), ce = R(N.internalFormat, de, se, N.colorSpace);
    if (!n.get(_).__hasExternalTextures) {
      const Ne = Math.max(1, _.width >> J), Y = Math.max(1, _.height >> J);
      K === i.TEXTURE_3D || K === i.TEXTURE_2D_ARRAY ? t.texImage3D(K, J, ce, Ne, Y, _.depth, 0, de, se, null) : t.texImage2D(K, J, ce, Ne, Y, 0, de, se, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, E), ue(_) ? l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, $, K, n.get(N).__webglTexture, 0, be(_)) : (K === i.TEXTURE_2D || K >= i.TEXTURE_CUBE_MAP_POSITIVE_X && K <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, $, K, n.get(N).__webglTexture, J), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Re(E, _, N) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, E), _.depthBuffer && !_.stencilBuffer) {
      let $ = a === !0 ? i.DEPTH_COMPONENT24 : i.DEPTH_COMPONENT16;
      if (N || ue(_)) {
        const K = _.depthTexture;
        K && K.isDepthTexture && (K.type === on ? $ = i.DEPTH_COMPONENT32F : K.type === an && ($ = i.DEPTH_COMPONENT24));
        const J = be(_);
        ue(_) ? l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, J, $, _.width, _.height) : i.renderbufferStorageMultisample(i.RENDERBUFFER, J, $, _.width, _.height);
      } else
        i.renderbufferStorage(i.RENDERBUFFER, $, _.width, _.height);
      i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, E);
    } else if (_.depthBuffer && _.stencilBuffer) {
      const $ = be(_);
      N && ue(_) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, $, i.DEPTH24_STENCIL8, _.width, _.height) : ue(_) ? l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, $, i.DEPTH24_STENCIL8, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, E);
    } else {
      const $ = _.isWebGLMultipleRenderTargets === !0 ? _.texture : [_.texture];
      for (let K = 0; K < $.length; K++) {
        const J = $[K], de = s.convert(J.format, J.colorSpace), se = s.convert(J.type), ce = R(J.internalFormat, de, se, J.colorSpace), Me = be(_);
        N && ue(_) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Me, ce, _.width, _.height) : ue(_) ? l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Me, ce, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, ce, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Le(E, _) {
    if (_ && _.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, E), !(_.depthTexture && _.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(_.depthTexture).__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = !0), H(_.depthTexture, 0);
    const $ = n.get(_.depthTexture).__webglTexture, K = be(_);
    if (_.depthTexture.format === An)
      ue(_) ? l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, $, 0, K) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, $, 0);
    else if (_.depthTexture.format === ii)
      ue(_) ? l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, $, 0, K) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, $, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Se(E) {
    const _ = n.get(E), N = E.isWebGLCubeRenderTarget === !0;
    if (E.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (N) throw new Error("target.depthTexture not supported in Cube render targets");
      Le(_.__webglFramebuffer, E);
    } else if (N) {
      _.__webglDepthbuffer = [];
      for (let $ = 0; $ < 6; $++)
        t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[$]), _.__webglDepthbuffer[$] = i.createRenderbuffer(), Re(_.__webglDepthbuffer[$], E, !1);
    } else
      t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer = i.createRenderbuffer(), Re(_.__webglDepthbuffer, E, !1);
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function He(E, _, N) {
    const $ = n.get(E);
    _ !== void 0 && pe($.__webglFramebuffer, E, E.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), N !== void 0 && Se(E);
  }
  function U(E) {
    const _ = E.texture, N = n.get(E), $ = n.get(_);
    E.addEventListener("dispose", W), E.isWebGLMultipleRenderTargets !== !0 && ($.__webglTexture === void 0 && ($.__webglTexture = i.createTexture()), $.__version = _.version, o.memory.textures++);
    const K = E.isWebGLCubeRenderTarget === !0, J = E.isWebGLMultipleRenderTargets === !0, de = p(E) || a;
    if (K) {
      N.__webglFramebuffer = [];
      for (let se = 0; se < 6; se++)
        if (a && _.mipmaps && _.mipmaps.length > 0) {
          N.__webglFramebuffer[se] = [];
          for (let ce = 0; ce < _.mipmaps.length; ce++)
            N.__webglFramebuffer[se][ce] = i.createFramebuffer();
        } else
          N.__webglFramebuffer[se] = i.createFramebuffer();
    } else {
      if (a && _.mipmaps && _.mipmaps.length > 0) {
        N.__webglFramebuffer = [];
        for (let se = 0; se < _.mipmaps.length; se++)
          N.__webglFramebuffer[se] = i.createFramebuffer();
      } else
        N.__webglFramebuffer = i.createFramebuffer();
      if (J)
        if (r.drawBuffers) {
          const se = E.texture;
          for (let ce = 0, Me = se.length; ce < Me; ce++) {
            const Ne = n.get(se[ce]);
            Ne.__webglTexture === void 0 && (Ne.__webglTexture = i.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && E.samples > 0 && ue(E) === !1) {
        const se = J ? _ : [_];
        N.__webglMultisampledFramebuffer = i.createFramebuffer(), N.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, N.__webglMultisampledFramebuffer);
        for (let ce = 0; ce < se.length; ce++) {
          const Me = se[ce];
          N.__webglColorRenderbuffer[ce] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, N.__webglColorRenderbuffer[ce]);
          const Ne = s.convert(Me.format, Me.colorSpace), Y = s.convert(Me.type), ke = R(Me.internalFormat, Ne, Y, Me.colorSpace, E.isXRRenderTarget === !0), Ge = be(E);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Ge, ke, E.width, E.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ce, i.RENDERBUFFER, N.__webglColorRenderbuffer[ce]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), E.depthBuffer && (N.__webglDepthRenderbuffer = i.createRenderbuffer(), Re(N.__webglDepthRenderbuffer, E, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (K) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, $.__webglTexture), G(i.TEXTURE_CUBE_MAP, _, de);
      for (let se = 0; se < 6; se++)
        if (a && _.mipmaps && _.mipmaps.length > 0)
          for (let ce = 0; ce < _.mipmaps.length; ce++)
            pe(N.__webglFramebuffer[se][ce], E, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + se, ce);
        else
          pe(N.__webglFramebuffer[se], E, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + se, 0);
      T(_, de) && x(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (J) {
      const se = E.texture;
      for (let ce = 0, Me = se.length; ce < Me; ce++) {
        const Ne = se[ce], Y = n.get(Ne);
        t.bindTexture(i.TEXTURE_2D, Y.__webglTexture), G(i.TEXTURE_2D, Ne, de), pe(N.__webglFramebuffer, E, Ne, i.COLOR_ATTACHMENT0 + ce, i.TEXTURE_2D, 0), T(Ne, de) && x(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let se = i.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (a ? se = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(se, $.__webglTexture), G(se, _, de), a && _.mipmaps && _.mipmaps.length > 0)
        for (let ce = 0; ce < _.mipmaps.length; ce++)
          pe(N.__webglFramebuffer[ce], E, _, i.COLOR_ATTACHMENT0, se, ce);
      else
        pe(N.__webglFramebuffer, E, _, i.COLOR_ATTACHMENT0, se, 0);
      T(_, de) && x(se), t.unbindTexture();
    }
    E.depthBuffer && Se(E);
  }
  function mt(E) {
    const _ = p(E) || a, N = E.isWebGLMultipleRenderTargets === !0 ? E.texture : [E.texture];
    for (let $ = 0, K = N.length; $ < K; $++) {
      const J = N[$];
      if (T(J, _)) {
        const de = E.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, se = n.get(J).__webglTexture;
        t.bindTexture(de, se), x(de), t.unbindTexture();
      }
    }
  }
  function _e(E) {
    if (a && E.samples > 0 && ue(E) === !1) {
      const _ = E.isWebGLMultipleRenderTargets ? E.texture : [E.texture], N = E.width, $ = E.height;
      let K = i.COLOR_BUFFER_BIT;
      const J = [], de = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, se = n.get(E), ce = E.isWebGLMultipleRenderTargets === !0;
      if (ce)
        for (let Me = 0; Me < _.length; Me++)
          t.bindFramebuffer(i.FRAMEBUFFER, se.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Me, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, se.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Me, i.TEXTURE_2D, null, 0);
      t.bindFramebuffer(i.READ_FRAMEBUFFER, se.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, se.__webglFramebuffer);
      for (let Me = 0; Me < _.length; Me++) {
        J.push(i.COLOR_ATTACHMENT0 + Me), E.depthBuffer && J.push(de);
        const Ne = se.__ignoreDepthValues !== void 0 ? se.__ignoreDepthValues : !1;
        if (Ne === !1 && (E.depthBuffer && (K |= i.DEPTH_BUFFER_BIT), E.stencilBuffer && (K |= i.STENCIL_BUFFER_BIT)), ce && i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, se.__webglColorRenderbuffer[Me]), Ne === !0 && (i.invalidateFramebuffer(i.READ_FRAMEBUFFER, [de]), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [de])), ce) {
          const Y = n.get(_[Me]).__webglTexture;
          i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Y, 0);
        }
        i.blitFramebuffer(0, 0, N, $, 0, 0, N, $, K, i.NEAREST), c && i.invalidateFramebuffer(i.READ_FRAMEBUFFER, J);
      }
      if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ce)
        for (let Me = 0; Me < _.length; Me++) {
          t.bindFramebuffer(i.FRAMEBUFFER, se.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Me, i.RENDERBUFFER, se.__webglColorRenderbuffer[Me]);
          const Ne = n.get(_[Me]).__webglTexture;
          t.bindFramebuffer(i.FRAMEBUFFER, se.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Me, i.TEXTURE_2D, Ne, 0);
        }
      t.bindFramebuffer(i.DRAW_FRAMEBUFFER, se.__webglMultisampledFramebuffer);
    }
  }
  function be(E) {
    return Math.min(r.maxSamples, E.samples);
  }
  function ue(E) {
    const _ = n.get(E);
    return a && E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1;
  }
  function $e(E) {
    const _ = o.render.frame;
    h.get(E) !== _ && (h.set(E, _), E.update());
  }
  function Ie(E, _) {
    const N = E.colorSpace, $ = E.format, K = E.type;
    return E.isCompressedTexture === !0 || E.isVideoTexture === !0 || E.format === ds || N !== Qt && N !== Ut && (We.getTransfer(N) === Ke ? a === !1 ? e.has("EXT_sRGB") === !0 && $ === zt ? (E.format = ds, E.minFilter = Pt, E.generateMipmaps = !1) : _ = Co.sRGBToLinear(_) : ($ !== zt || K !== hn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", N)), _;
  }
  this.allocateTextureUnit = C, this.resetTextureUnits = ne, this.setTexture2D = H, this.setTexture2DArray = X, this.setTexture3D = k, this.setTextureCube = V, this.rebindTextures = He, this.setupRenderTarget = U, this.updateRenderTargetMipmap = mt, this.updateMultisampleRenderTarget = _e, this.setupDepthRenderbuffer = Se, this.setupFrameBufferTexture = pe, this.useMultisampledRTT = ue;
}
function rp(i, e, t) {
  const n = t.isWebGL2;
  function r(s, o = Ut) {
    let a;
    const l = We.getTransfer(o);
    if (s === hn) return i.UNSIGNED_BYTE;
    if (s === xo) return i.UNSIGNED_SHORT_4_4_4_4;
    if (s === Mo) return i.UNSIGNED_SHORT_5_5_5_1;
    if (s === zl) return i.BYTE;
    if (s === Gl) return i.SHORT;
    if (s === vs) return i.UNSIGNED_SHORT;
    if (s === vo) return i.INT;
    if (s === an) return i.UNSIGNED_INT;
    if (s === on) return i.FLOAT;
    if (s === xi)
      return n ? i.HALF_FLOAT : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (s === Hl) return i.ALPHA;
    if (s === zt) return i.RGBA;
    if (s === Vl) return i.LUMINANCE;
    if (s === kl) return i.LUMINANCE_ALPHA;
    if (s === An) return i.DEPTH_COMPONENT;
    if (s === ii) return i.DEPTH_STENCIL;
    if (s === ds)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === Wl) return i.RED;
    if (s === So) return i.RED_INTEGER;
    if (s === Xl) return i.RG;
    if (s === Eo) return i.RG_INTEGER;
    if (s === yo) return i.RGBA_INTEGER;
    if (s === Tr || s === Ar || s === br || s === wr)
      if (l === Ke)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (s === Tr) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === Ar) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === br) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === wr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (s === Tr) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === Ar) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === br) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === wr) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === Gs || s === Hs || s === Vs || s === ks)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (s === Gs) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === Hs) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === Vs) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === ks) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === To)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === Ws || s === Xs)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (s === Ws) return l === Ke ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === Xs) return l === Ke ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === qs || s === Ys || s === js || s === Ks || s === Zs || s === $s || s === Js || s === Qs || s === ea || s === ta || s === na || s === ia || s === ra || s === sa)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (s === qs) return l === Ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Ys) return l === Ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === js) return l === Ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Ks) return l === Ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Zs) return l === Ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === $s) return l === Ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Js) return l === Ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Qs) return l === Ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === ea) return l === Ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === ta) return l === Ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === na) return l === Ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === ia) return l === Ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === ra) return l === Ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === sa) return l === Ke ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === Rr || s === aa || s === oa)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (s === Rr) return l === Ke ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (s === aa) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (s === oa) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (s === ql || s === la || s === ca || s === ha)
      if (a = e.get("EXT_texture_compression_rgtc"), a !== null) {
        if (s === Rr) return a.COMPRESSED_RED_RGTC1_EXT;
        if (s === la) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === ca) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === ha) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return s === Tn ? n ? i.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : i[s] !== void 0 ? i[s] : null;
  }
  return { convert: r };
}
class sp extends pt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Ji extends ht {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const ap = { type: "move" };
class Qr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Ji(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Ji(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new L(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new L()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Ji(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new L(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new L()), this._grip;
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
    let r = null, s = null, o = null;
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const v of e.hand.values()) {
          const p = t.getJointPose(v, n), u = this._getHandJoint(c, v);
          p !== null && (u.matrix.fromArray(p.transform.matrix), u.matrix.decompose(u.position, u.rotation, u.scale), u.matrixWorldNeedsUpdate = !0, u.jointRadius = p.radius), u.visible = p !== null;
        }
        const h = c.joints["index-finger-tip"], d = c.joints["thumb-tip"], f = h.position.distanceTo(d.position), m = 0.02, g = 5e-3;
        c.inputState.pinching && f > m + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && f <= m - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      a !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(r.linearVelocity)) : a.hasLinearVelocity = !1, r.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(r.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(ap)));
    }
    return a !== null && (a.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = o !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Ji();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class op extends si {
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, o = null, a = "local-floor", l = 1, c = null, h = null, d = null, f = null, m = null, g = null;
    const v = t.getContextAttributes();
    let p = null, u = null;
    const T = [], x = [], R = new Ue();
    let D = null;
    const w = new pt();
    w.layers.enable(1), w.viewport = new Ze();
    const b = new pt();
    b.layers.enable(2), b.viewport = new Ze();
    const W = [w, b], S = new sp();
    S.layers.enable(1), S.layers.enable(2);
    let y = null, z = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(G) {
      let q = T[G];
      return q === void 0 && (q = new Qr(), T[G] = q), q.getTargetRaySpace();
    }, this.getControllerGrip = function(G) {
      let q = T[G];
      return q === void 0 && (q = new Qr(), T[G] = q), q.getGripSpace();
    }, this.getHand = function(G) {
      let q = T[G];
      return q === void 0 && (q = new Qr(), T[G] = q), q.getHandSpace();
    };
    function j(G) {
      const q = x.indexOf(G.inputSource);
      if (q === -1)
        return;
      const ae = T[q];
      ae !== void 0 && (ae.update(G.inputSource, G.frame, c || o), ae.dispatchEvent({ type: G.type, data: G.inputSource }));
    }
    function ne() {
      r.removeEventListener("select", j), r.removeEventListener("selectstart", j), r.removeEventListener("selectend", j), r.removeEventListener("squeeze", j), r.removeEventListener("squeezestart", j), r.removeEventListener("squeezeend", j), r.removeEventListener("end", ne), r.removeEventListener("inputsourceschange", C);
      for (let G = 0; G < T.length; G++) {
        const q = x[G];
        q !== null && (x[G] = null, T[G].disconnect(q));
      }
      y = null, z = null, e.setRenderTarget(p), m = null, f = null, d = null, r = null, u = null, le.stop(), n.isPresenting = !1, e.setPixelRatio(D), e.setSize(R.width, R.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(G) {
      s = G, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(G) {
      a = G, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(G) {
      c = G;
    }, this.getBaseLayer = function() {
      return f !== null ? f : m;
    }, this.getBinding = function() {
      return d;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(G) {
      if (r = G, r !== null) {
        if (p = e.getRenderTarget(), r.addEventListener("select", j), r.addEventListener("selectstart", j), r.addEventListener("selectend", j), r.addEventListener("squeeze", j), r.addEventListener("squeezestart", j), r.addEventListener("squeezeend", j), r.addEventListener("end", ne), r.addEventListener("inputsourceschange", C), v.xrCompatible !== !0 && await t.makeXRCompatible(), D = e.getPixelRatio(), e.getSize(R), r.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const q = {
            antialias: r.renderState.layers === void 0 ? v.antialias : !0,
            alpha: !0,
            depth: v.depth,
            stencil: v.stencil,
            framebufferScaleFactor: s
          };
          m = new XRWebGLLayer(r, t, q), r.updateRenderState({ baseLayer: m }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, !1), u = new Rn(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: zt,
              type: hn,
              colorSpace: e.outputColorSpace,
              stencilBuffer: v.stencil
            }
          );
        } else {
          let q = null, ae = null, me = null;
          v.depth && (me = v.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, q = v.stencil ? ii : An, ae = v.stencil ? Tn : an);
          const pe = {
            colorFormat: t.RGBA8,
            depthFormat: me,
            scaleFactor: s
          };
          d = new XRWebGLBinding(r, t), f = d.createProjectionLayer(pe), r.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, !1), u = new Rn(
            f.textureWidth,
            f.textureHeight,
            {
              format: zt,
              type: hn,
              depthTexture: new Ho(f.textureWidth, f.textureHeight, ae, void 0, void 0, void 0, void 0, void 0, void 0, q),
              stencilBuffer: v.stencil,
              colorSpace: e.outputColorSpace,
              samples: v.antialias ? 4 : 0
            }
          );
          const Re = e.properties.get(u);
          Re.__ignoreDepthValues = f.ignoreDepthValues;
        }
        u.isXRRenderTarget = !0, this.setFoveation(l), c = null, o = await r.requestReferenceSpace(a), le.setContext(r), le.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    };
    function C(G) {
      for (let q = 0; q < G.removed.length; q++) {
        const ae = G.removed[q], me = x.indexOf(ae);
        me >= 0 && (x[me] = null, T[me].disconnect(ae));
      }
      for (let q = 0; q < G.added.length; q++) {
        const ae = G.added[q];
        let me = x.indexOf(ae);
        if (me === -1) {
          for (let Re = 0; Re < T.length; Re++)
            if (Re >= x.length) {
              x.push(ae), me = Re;
              break;
            } else if (x[Re] === null) {
              x[Re] = ae, me = Re;
              break;
            }
          if (me === -1) break;
        }
        const pe = T[me];
        pe && pe.connect(ae);
      }
    }
    const O = new L(), H = new L();
    function X(G, q, ae) {
      O.setFromMatrixPosition(q.matrixWorld), H.setFromMatrixPosition(ae.matrixWorld);
      const me = O.distanceTo(H), pe = q.projectionMatrix.elements, Re = ae.projectionMatrix.elements, Le = pe[14] / (pe[10] - 1), Se = pe[14] / (pe[10] + 1), He = (pe[9] + 1) / pe[5], U = (pe[9] - 1) / pe[5], mt = (pe[8] - 1) / pe[0], _e = (Re[8] + 1) / Re[0], be = Le * mt, ue = Le * _e, $e = me / (-mt + _e), Ie = $e * -mt;
      q.matrixWorld.decompose(G.position, G.quaternion, G.scale), G.translateX(Ie), G.translateZ($e), G.matrixWorld.compose(G.position, G.quaternion, G.scale), G.matrixWorldInverse.copy(G.matrixWorld).invert();
      const E = Le + $e, _ = Se + $e, N = be - Ie, $ = ue + (me - Ie), K = He * Se / _ * E, J = U * Se / _ * E;
      G.projectionMatrix.makePerspective(N, $, K, J, E, _), G.projectionMatrixInverse.copy(G.projectionMatrix).invert();
    }
    function k(G, q) {
      q === null ? G.matrixWorld.copy(G.matrix) : G.matrixWorld.multiplyMatrices(q.matrixWorld, G.matrix), G.matrixWorldInverse.copy(G.matrixWorld).invert();
    }
    this.updateCamera = function(G) {
      if (r === null) return;
      S.near = b.near = w.near = G.near, S.far = b.far = w.far = G.far, (y !== S.near || z !== S.far) && (r.updateRenderState({
        depthNear: S.near,
        depthFar: S.far
      }), y = S.near, z = S.far);
      const q = G.parent, ae = S.cameras;
      k(S, q);
      for (let me = 0; me < ae.length; me++)
        k(ae[me], q);
      ae.length === 2 ? X(S, w, b) : S.projectionMatrix.copy(w.projectionMatrix), V(G, S, q);
    };
    function V(G, q, ae) {
      ae === null ? G.matrix.copy(q.matrixWorld) : (G.matrix.copy(ae.matrixWorld), G.matrix.invert(), G.matrix.multiply(q.matrixWorld)), G.matrix.decompose(G.position, G.quaternion, G.scale), G.updateMatrixWorld(!0), G.projectionMatrix.copy(q.projectionMatrix), G.projectionMatrixInverse.copy(q.projectionMatrixInverse), G.isPerspectiveCamera && (G.fov = fs * 2 * Math.atan(1 / G.projectionMatrix.elements[5]), G.zoom = 1);
    }
    this.getCamera = function() {
      return S;
    }, this.getFoveation = function() {
      if (!(f === null && m === null))
        return l;
    }, this.setFoveation = function(G) {
      l = G, f !== null && (f.fixedFoveation = G), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = G);
    };
    let Z = null;
    function Q(G, q) {
      if (h = q.getViewerPose(c || o), g = q, h !== null) {
        const ae = h.views;
        m !== null && (e.setRenderTargetFramebuffer(u, m.framebuffer), e.setRenderTarget(u));
        let me = !1;
        ae.length !== S.cameras.length && (S.cameras.length = 0, me = !0);
        for (let pe = 0; pe < ae.length; pe++) {
          const Re = ae[pe];
          let Le = null;
          if (m !== null)
            Le = m.getViewport(Re);
          else {
            const He = d.getViewSubImage(f, Re);
            Le = He.viewport, pe === 0 && (e.setRenderTargetTextures(
              u,
              He.colorTexture,
              f.ignoreDepthValues ? void 0 : He.depthStencilTexture
            ), e.setRenderTarget(u));
          }
          let Se = W[pe];
          Se === void 0 && (Se = new pt(), Se.layers.enable(pe), Se.viewport = new Ze(), W[pe] = Se), Se.matrix.fromArray(Re.transform.matrix), Se.matrix.decompose(Se.position, Se.quaternion, Se.scale), Se.projectionMatrix.fromArray(Re.projectionMatrix), Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(), Se.viewport.set(Le.x, Le.y, Le.width, Le.height), pe === 0 && (S.matrix.copy(Se.matrix), S.matrix.decompose(S.position, S.quaternion, S.scale)), me === !0 && S.cameras.push(Se);
        }
      }
      for (let ae = 0; ae < T.length; ae++) {
        const me = x[ae], pe = T[ae];
        me !== null && pe !== void 0 && pe.update(me, q, c || o);
      }
      Z && Z(G, q), q.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: q }), g = null;
    }
    const le = new zo();
    le.setAnimationLoop(Q), this.setAnimationLoop = function(G) {
      Z = G;
    }, this.dispose = function() {
    };
  }
}
function lp(i, e) {
  function t(p, u) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), u.value.copy(p.matrix);
  }
  function n(p, u) {
    u.color.getRGB(p.fogColor.value, Fo(i)), u.isFog ? (p.fogNear.value = u.near, p.fogFar.value = u.far) : u.isFogExp2 && (p.fogDensity.value = u.density);
  }
  function r(p, u, T, x, R) {
    u.isMeshBasicMaterial || u.isMeshLambertMaterial ? s(p, u) : u.isMeshToonMaterial ? (s(p, u), d(p, u)) : u.isMeshPhongMaterial ? (s(p, u), h(p, u)) : u.isMeshStandardMaterial ? (s(p, u), f(p, u), u.isMeshPhysicalMaterial && m(p, u, R)) : u.isMeshMatcapMaterial ? (s(p, u), g(p, u)) : u.isMeshDepthMaterial ? s(p, u) : u.isMeshDistanceMaterial ? (s(p, u), v(p, u)) : u.isMeshNormalMaterial ? s(p, u) : u.isLineBasicMaterial ? (o(p, u), u.isLineDashedMaterial && a(p, u)) : u.isPointsMaterial ? l(p, u, T, x) : u.isSpriteMaterial ? c(p, u) : u.isShadowMaterial ? (p.color.value.copy(u.color), p.opacity.value = u.opacity) : u.isShaderMaterial && (u.uniformsNeedUpdate = !1);
  }
  function s(p, u) {
    p.opacity.value = u.opacity, u.color && p.diffuse.value.copy(u.color), u.emissive && p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity), u.map && (p.map.value = u.map, t(u.map, p.mapTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.bumpMap && (p.bumpMap.value = u.bumpMap, t(u.bumpMap, p.bumpMapTransform), p.bumpScale.value = u.bumpScale, u.side === yt && (p.bumpScale.value *= -1)), u.normalMap && (p.normalMap.value = u.normalMap, t(u.normalMap, p.normalMapTransform), p.normalScale.value.copy(u.normalScale), u.side === yt && p.normalScale.value.negate()), u.displacementMap && (p.displacementMap.value = u.displacementMap, t(u.displacementMap, p.displacementMapTransform), p.displacementScale.value = u.displacementScale, p.displacementBias.value = u.displacementBias), u.emissiveMap && (p.emissiveMap.value = u.emissiveMap, t(u.emissiveMap, p.emissiveMapTransform)), u.specularMap && (p.specularMap.value = u.specularMap, t(u.specularMap, p.specularMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
    const T = e.get(u).envMap;
    if (T && (p.envMap.value = T, p.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = u.reflectivity, p.ior.value = u.ior, p.refractionRatio.value = u.refractionRatio), u.lightMap) {
      p.lightMap.value = u.lightMap;
      const x = i._useLegacyLights === !0 ? Math.PI : 1;
      p.lightMapIntensity.value = u.lightMapIntensity * x, t(u.lightMap, p.lightMapTransform);
    }
    u.aoMap && (p.aoMap.value = u.aoMap, p.aoMapIntensity.value = u.aoMapIntensity, t(u.aoMap, p.aoMapTransform));
  }
  function o(p, u) {
    p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, u.map && (p.map.value = u.map, t(u.map, p.mapTransform));
  }
  function a(p, u) {
    p.dashSize.value = u.dashSize, p.totalSize.value = u.dashSize + u.gapSize, p.scale.value = u.scale;
  }
  function l(p, u, T, x) {
    p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, p.size.value = u.size * T, p.scale.value = x * 0.5, u.map && (p.map.value = u.map, t(u.map, p.uvTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
  }
  function c(p, u) {
    p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, p.rotation.value = u.rotation, u.map && (p.map.value = u.map, t(u.map, p.mapTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
  }
  function h(p, u) {
    p.specular.value.copy(u.specular), p.shininess.value = Math.max(u.shininess, 1e-4);
  }
  function d(p, u) {
    u.gradientMap && (p.gradientMap.value = u.gradientMap);
  }
  function f(p, u) {
    p.metalness.value = u.metalness, u.metalnessMap && (p.metalnessMap.value = u.metalnessMap, t(u.metalnessMap, p.metalnessMapTransform)), p.roughness.value = u.roughness, u.roughnessMap && (p.roughnessMap.value = u.roughnessMap, t(u.roughnessMap, p.roughnessMapTransform)), e.get(u).envMap && (p.envMapIntensity.value = u.envMapIntensity);
  }
  function m(p, u, T) {
    p.ior.value = u.ior, u.sheen > 0 && (p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen), p.sheenRoughness.value = u.sheenRoughness, u.sheenColorMap && (p.sheenColorMap.value = u.sheenColorMap, t(u.sheenColorMap, p.sheenColorMapTransform)), u.sheenRoughnessMap && (p.sheenRoughnessMap.value = u.sheenRoughnessMap, t(u.sheenRoughnessMap, p.sheenRoughnessMapTransform))), u.clearcoat > 0 && (p.clearcoat.value = u.clearcoat, p.clearcoatRoughness.value = u.clearcoatRoughness, u.clearcoatMap && (p.clearcoatMap.value = u.clearcoatMap, t(u.clearcoatMap, p.clearcoatMapTransform)), u.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap, t(u.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), u.clearcoatNormalMap && (p.clearcoatNormalMap.value = u.clearcoatNormalMap, t(u.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale), u.side === yt && p.clearcoatNormalScale.value.negate())), u.iridescence > 0 && (p.iridescence.value = u.iridescence, p.iridescenceIOR.value = u.iridescenceIOR, p.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1], u.iridescenceMap && (p.iridescenceMap.value = u.iridescenceMap, t(u.iridescenceMap, p.iridescenceMapTransform)), u.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = u.iridescenceThicknessMap, t(u.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), u.transmission > 0 && (p.transmission.value = u.transmission, p.transmissionSamplerMap.value = T.texture, p.transmissionSamplerSize.value.set(T.width, T.height), u.transmissionMap && (p.transmissionMap.value = u.transmissionMap, t(u.transmissionMap, p.transmissionMapTransform)), p.thickness.value = u.thickness, u.thicknessMap && (p.thicknessMap.value = u.thicknessMap, t(u.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = u.attenuationDistance, p.attenuationColor.value.copy(u.attenuationColor)), u.anisotropy > 0 && (p.anisotropyVector.value.set(u.anisotropy * Math.cos(u.anisotropyRotation), u.anisotropy * Math.sin(u.anisotropyRotation)), u.anisotropyMap && (p.anisotropyMap.value = u.anisotropyMap, t(u.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = u.specularIntensity, p.specularColor.value.copy(u.specularColor), u.specularColorMap && (p.specularColorMap.value = u.specularColorMap, t(u.specularColorMap, p.specularColorMapTransform)), u.specularIntensityMap && (p.specularIntensityMap.value = u.specularIntensityMap, t(u.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, u) {
    u.matcap && (p.matcap.value = u.matcap);
  }
  function v(p, u) {
    const T = e.get(u).light;
    p.referencePosition.value.setFromMatrixPosition(T.matrixWorld), p.nearDistance.value = T.shadow.camera.near, p.farDistance.value = T.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function cp(i, e, t, n) {
  let r = {}, s = {}, o = [];
  const a = t.isWebGL2 ? i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(T, x) {
    const R = x.program;
    n.uniformBlockBinding(T, R);
  }
  function c(T, x) {
    let R = r[T.id];
    R === void 0 && (g(T), R = h(T), r[T.id] = R, T.addEventListener("dispose", p));
    const D = x.program;
    n.updateUBOMapping(T, D);
    const w = e.render.frame;
    s[T.id] !== w && (f(T), s[T.id] = w);
  }
  function h(T) {
    const x = d();
    T.__bindingPointIndex = x;
    const R = i.createBuffer(), D = T.__size, w = T.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, R), i.bufferData(i.UNIFORM_BUFFER, D, w), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, x, R), R;
  }
  function d() {
    for (let T = 0; T < a; T++)
      if (o.indexOf(T) === -1)
        return o.push(T), T;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(T) {
    const x = r[T.id], R = T.uniforms, D = T.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, x);
    for (let w = 0, b = R.length; w < b; w++) {
      const W = Array.isArray(R[w]) ? R[w] : [R[w]];
      for (let S = 0, y = W.length; S < y; S++) {
        const z = W[S];
        if (m(z, w, S, D) === !0) {
          const j = z.__offset, ne = Array.isArray(z.value) ? z.value : [z.value];
          let C = 0;
          for (let O = 0; O < ne.length; O++) {
            const H = ne[O], X = v(H);
            typeof H == "number" || typeof H == "boolean" ? (z.__data[0] = H, i.bufferSubData(i.UNIFORM_BUFFER, j + C, z.__data)) : H.isMatrix3 ? (z.__data[0] = H.elements[0], z.__data[1] = H.elements[1], z.__data[2] = H.elements[2], z.__data[3] = 0, z.__data[4] = H.elements[3], z.__data[5] = H.elements[4], z.__data[6] = H.elements[5], z.__data[7] = 0, z.__data[8] = H.elements[6], z.__data[9] = H.elements[7], z.__data[10] = H.elements[8], z.__data[11] = 0) : (H.toArray(z.__data, C), C += X.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, j, z.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(T, x, R, D) {
    const w = T.value, b = x + "_" + R;
    if (D[b] === void 0)
      return typeof w == "number" || typeof w == "boolean" ? D[b] = w : D[b] = w.clone(), !0;
    {
      const W = D[b];
      if (typeof w == "number" || typeof w == "boolean") {
        if (W !== w)
          return D[b] = w, !0;
      } else if (W.equals(w) === !1)
        return W.copy(w), !0;
    }
    return !1;
  }
  function g(T) {
    const x = T.uniforms;
    let R = 0;
    const D = 16;
    for (let b = 0, W = x.length; b < W; b++) {
      const S = Array.isArray(x[b]) ? x[b] : [x[b]];
      for (let y = 0, z = S.length; y < z; y++) {
        const j = S[y], ne = Array.isArray(j.value) ? j.value : [j.value];
        for (let C = 0, O = ne.length; C < O; C++) {
          const H = ne[C], X = v(H), k = R % D;
          k !== 0 && D - k < X.boundary && (R += D - k), j.__data = new Float32Array(X.storage / Float32Array.BYTES_PER_ELEMENT), j.__offset = R, R += X.storage;
        }
      }
    }
    const w = R % D;
    return w > 0 && (R += D - w), T.__size = R, T.__cache = {}, this;
  }
  function v(T) {
    const x = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof T == "number" || typeof T == "boolean" ? (x.boundary = 4, x.storage = 4) : T.isVector2 ? (x.boundary = 8, x.storage = 8) : T.isVector3 || T.isColor ? (x.boundary = 16, x.storage = 12) : T.isVector4 ? (x.boundary = 16, x.storage = 16) : T.isMatrix3 ? (x.boundary = 48, x.storage = 48) : T.isMatrix4 ? (x.boundary = 64, x.storage = 64) : T.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", T), x;
  }
  function p(T) {
    const x = T.target;
    x.removeEventListener("dispose", p);
    const R = o.indexOf(x.__bindingPointIndex);
    o.splice(R, 1), i.deleteBuffer(r[x.id]), delete r[x.id], delete s[x.id];
  }
  function u() {
    for (const T in r)
      i.deleteBuffer(r[T]);
    o = [], r = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: u
  };
}
class oi {
  constructor(e = {}) {
    const {
      canvas: t = rc(),
      context: n = null,
      depth: r = !0,
      stencil: s = !0,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: d = !1
    } = e;
    this.isWebGLRenderer = !0;
    let f;
    n !== null ? f = n.getContextAttributes().alpha : f = o;
    const m = new Uint32Array(4), g = new Int32Array(4);
    let v = null, p = null;
    const u = [], T = [];
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
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = ct, this._useLegacyLights = !1, this.toneMapping = cn, this.toneMappingExposure = 1;
    const x = this;
    let R = !1, D = 0, w = 0, b = null, W = -1, S = null;
    const y = new Ze(), z = new Ze();
    let j = null;
    const ne = new ye(0);
    let C = 0, O = t.width, H = t.height, X = 1, k = null, V = null;
    const Z = new Ze(0, 0, O, H), Q = new Ze(0, 0, O, H);
    let le = !1;
    const G = new Es();
    let q = !1, ae = !1, me = null;
    const pe = new Qe(), Re = new Ue(), Le = new L(), Se = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function He() {
      return b === null ? X : 1;
    }
    let U = n;
    function mt(M, P) {
      for (let F = 0; F < M.length; F++) {
        const B = M[F], I = t.getContext(B, P);
        if (I !== null) return I;
      }
      return null;
    }
    try {
      const M = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: d
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${_s}`), t.addEventListener("webglcontextlost", ee, !1), t.addEventListener("webglcontextrestored", A, !1), t.addEventListener("webglcontextcreationerror", ie, !1), U === null) {
        const P = ["webgl2", "webgl", "experimental-webgl"];
        if (x.isWebGL1Renderer === !0 && P.shift(), U = mt(P, M), U === null)
          throw mt(P) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && U instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), U.getShaderPrecisionFormat === void 0 && (U.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (M) {
      throw console.error("THREE.WebGLRenderer: " + M.message), M;
    }
    let _e, be, ue, $e, Ie, E, _, N, $, K, J, de, se, ce, Me, Ne, Y, ke, Ge, Ae, ge, he, Pe, Ve;
    function et() {
      _e = new vd(U), be = new dd(U, _e, e), _e.init(be), he = new rp(U, _e, be), ue = new np(U, _e, be), $e = new Sd(U), Ie = new Vf(), E = new ip(U, _e, ue, Ie, be, he, $e), _ = new pd(x), N = new _d(x), $ = new Cc(U, be), Pe = new hd(U, _e, $, be), K = new xd(U, $, $e, Pe), J = new Ad(U, K, $, $e), Ge = new Td(U, be, E), Ne = new fd(Ie), de = new Hf(x, _, N, _e, be, Pe, Ne), se = new lp(x, Ie), ce = new Wf(), Me = new Zf(_e, be), ke = new cd(x, _, N, ue, J, f, l), Y = new tp(x, J, be), Ve = new cp(U, $e, be, ue), Ae = new ud(U, _e, $e, be), ge = new Md(U, _e, $e, be), $e.programs = de.programs, x.capabilities = be, x.extensions = _e, x.properties = Ie, x.renderLists = ce, x.shadowMap = Y, x.state = ue, x.info = $e;
    }
    et();
    const Oe = new op(x, U);
    this.xr = Oe, this.getContext = function() {
      return U;
    }, this.getContextAttributes = function() {
      return U.getContextAttributes();
    }, this.forceContextLoss = function() {
      const M = _e.get("WEBGL_lose_context");
      M && M.loseContext();
    }, this.forceContextRestore = function() {
      const M = _e.get("WEBGL_lose_context");
      M && M.restoreContext();
    }, this.getPixelRatio = function() {
      return X;
    }, this.setPixelRatio = function(M) {
      M !== void 0 && (X = M, this.setSize(O, H, !1));
    }, this.getSize = function(M) {
      return M.set(O, H);
    }, this.setSize = function(M, P, F = !0) {
      if (Oe.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      O = M, H = P, t.width = Math.floor(M * X), t.height = Math.floor(P * X), F === !0 && (t.style.width = M + "px", t.style.height = P + "px"), this.setViewport(0, 0, M, P);
    }, this.getDrawingBufferSize = function(M) {
      return M.set(O * X, H * X).floor();
    }, this.setDrawingBufferSize = function(M, P, F) {
      O = M, H = P, X = F, t.width = Math.floor(M * F), t.height = Math.floor(P * F), this.setViewport(0, 0, M, P);
    }, this.getCurrentViewport = function(M) {
      return M.copy(y);
    }, this.getViewport = function(M) {
      return M.copy(Z);
    }, this.setViewport = function(M, P, F, B) {
      M.isVector4 ? Z.set(M.x, M.y, M.z, M.w) : Z.set(M, P, F, B), ue.viewport(y.copy(Z).multiplyScalar(X).floor());
    }, this.getScissor = function(M) {
      return M.copy(Q);
    }, this.setScissor = function(M, P, F, B) {
      M.isVector4 ? Q.set(M.x, M.y, M.z, M.w) : Q.set(M, P, F, B), ue.scissor(z.copy(Q).multiplyScalar(X).floor());
    }, this.getScissorTest = function() {
      return le;
    }, this.setScissorTest = function(M) {
      ue.setScissorTest(le = M);
    }, this.setOpaqueSort = function(M) {
      k = M;
    }, this.setTransparentSort = function(M) {
      V = M;
    }, this.getClearColor = function(M) {
      return M.copy(ke.getClearColor());
    }, this.setClearColor = function() {
      ke.setClearColor.apply(ke, arguments);
    }, this.getClearAlpha = function() {
      return ke.getClearAlpha();
    }, this.setClearAlpha = function() {
      ke.setClearAlpha.apply(ke, arguments);
    }, this.clear = function(M = !0, P = !0, F = !0) {
      let B = 0;
      if (M) {
        let I = !1;
        if (b !== null) {
          const oe = b.texture.format;
          I = oe === yo || oe === Eo || oe === So;
        }
        if (I) {
          const oe = b.texture.type, fe = oe === hn || oe === an || oe === vs || oe === Tn || oe === xo || oe === Mo, xe = ke.getClearColor(), Te = ke.getClearAlpha(), Fe = xe.r, we = xe.g, Ce = xe.b;
          fe ? (m[0] = Fe, m[1] = we, m[2] = Ce, m[3] = Te, U.clearBufferuiv(U.COLOR, 0, m)) : (g[0] = Fe, g[1] = we, g[2] = Ce, g[3] = Te, U.clearBufferiv(U.COLOR, 0, g));
        } else
          B |= U.COLOR_BUFFER_BIT;
      }
      P && (B |= U.DEPTH_BUFFER_BIT), F && (B |= U.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), U.clear(B);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", ee, !1), t.removeEventListener("webglcontextrestored", A, !1), t.removeEventListener("webglcontextcreationerror", ie, !1), ce.dispose(), Me.dispose(), Ie.dispose(), _.dispose(), N.dispose(), J.dispose(), Pe.dispose(), Ve.dispose(), de.dispose(), Oe.dispose(), Oe.removeEventListener("sessionstart", gt), Oe.removeEventListener("sessionend", je), me && (me.dispose(), me = null), _t.stop();
    };
    function ee(M) {
      M.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), R = !0;
    }
    function A() {
      console.log("THREE.WebGLRenderer: Context Restored."), R = !1;
      const M = $e.autoReset, P = Y.enabled, F = Y.autoUpdate, B = Y.needsUpdate, I = Y.type;
      et(), $e.autoReset = M, Y.enabled = P, Y.autoUpdate = F, Y.needsUpdate = B, Y.type = I;
    }
    function ie(M) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", M.statusMessage);
    }
    function re(M) {
      const P = M.target;
      P.removeEventListener("dispose", re), Ee(P);
    }
    function Ee(M) {
      ve(M), Ie.remove(M);
    }
    function ve(M) {
      const P = Ie.get(M).programs;
      P !== void 0 && (P.forEach(function(F) {
        de.releaseProgram(F);
      }), M.isShaderMaterial && de.releaseShaderCache(M));
    }
    this.renderBufferDirect = function(M, P, F, B, I, oe) {
      P === null && (P = Se);
      const fe = I.isMesh && I.matrixWorld.determinant() < 0, xe = el(M, P, F, B, I);
      ue.setMaterial(B, fe);
      let Te = F.index, Fe = 1;
      if (B.wireframe === !0) {
        if (Te = K.getWireframeAttribute(F), Te === void 0) return;
        Fe = 2;
      }
      const we = F.drawRange, Ce = F.attributes.position;
      let nt = we.start * Fe, bt = (we.start + we.count) * Fe;
      oe !== null && (nt = Math.max(nt, oe.start * Fe), bt = Math.min(bt, (oe.start + oe.count) * Fe)), Te !== null ? (nt = Math.max(nt, 0), bt = Math.min(bt, Te.count)) : Ce != null && (nt = Math.max(nt, 0), bt = Math.min(bt, Ce.count));
      const ot = bt - nt;
      if (ot < 0 || ot === 1 / 0) return;
      Pe.setup(I, B, xe, F, Te);
      let Wt, Je = Ae;
      if (Te !== null && (Wt = $.get(Te), Je = ge, Je.setIndex(Wt)), I.isMesh)
        B.wireframe === !0 ? (ue.setLineWidth(B.wireframeLinewidth * He()), Je.setMode(U.LINES)) : Je.setMode(U.TRIANGLES);
      else if (I.isLine) {
        let Be = B.linewidth;
        Be === void 0 && (Be = 1), ue.setLineWidth(Be * He()), I.isLineSegments ? Je.setMode(U.LINES) : I.isLineLoop ? Je.setMode(U.LINE_LOOP) : Je.setMode(U.LINE_STRIP);
      } else I.isPoints ? Je.setMode(U.POINTS) : I.isSprite && Je.setMode(U.TRIANGLES);
      if (I.isBatchedMesh)
        Je.renderMultiDraw(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount);
      else if (I.isInstancedMesh)
        Je.renderInstances(nt, ot, I.count);
      else if (F.isInstancedBufferGeometry) {
        const Be = F._maxInstanceCount !== void 0 ? F._maxInstanceCount : 1 / 0, xr = Math.min(F.instanceCount, Be);
        Je.renderInstances(nt, ot, xr);
      } else
        Je.render(nt, ot);
    };
    function qe(M, P, F) {
      M.transparent === !0 && M.side === kt && M.forceSinglePass === !1 ? (M.side = yt, M.needsUpdate = !0, Ci(M, P, F), M.side = dn, M.needsUpdate = !0, Ci(M, P, F), M.side = kt) : Ci(M, P, F);
    }
    this.compile = function(M, P, F = null) {
      F === null && (F = M), p = Me.get(F), p.init(), T.push(p), F.traverseVisible(function(I) {
        I.isLight && I.layers.test(P.layers) && (p.pushLight(I), I.castShadow && p.pushShadow(I));
      }), M !== F && M.traverseVisible(function(I) {
        I.isLight && I.layers.test(P.layers) && (p.pushLight(I), I.castShadow && p.pushShadow(I));
      }), p.setupLights(x._useLegacyLights);
      const B = /* @__PURE__ */ new Set();
      return M.traverse(function(I) {
        const oe = I.material;
        if (oe)
          if (Array.isArray(oe))
            for (let fe = 0; fe < oe.length; fe++) {
              const xe = oe[fe];
              qe(xe, F, I), B.add(xe);
            }
          else
            qe(oe, F, I), B.add(oe);
      }), T.pop(), p = null, B;
    }, this.compileAsync = function(M, P, F = null) {
      const B = this.compile(M, P, F);
      return new Promise((I) => {
        function oe() {
          if (B.forEach(function(fe) {
            Ie.get(fe).currentProgram.isReady() && B.delete(fe);
          }), B.size === 0) {
            I(M);
            return;
          }
          setTimeout(oe, 10);
        }
        _e.get("KHR_parallel_shader_compile") !== null ? oe() : setTimeout(oe, 10);
      });
    };
    let Ye = null;
    function at(M) {
      Ye && Ye(M);
    }
    function gt() {
      _t.stop();
    }
    function je() {
      _t.start();
    }
    const _t = new zo();
    _t.setAnimationLoop(at), typeof self < "u" && _t.setContext(self), this.setAnimationLoop = function(M) {
      Ye = M, Oe.setAnimationLoop(M), M === null ? _t.stop() : _t.start();
    }, Oe.addEventListener("sessionstart", gt), Oe.addEventListener("sessionend", je), this.render = function(M, P) {
      if (P !== void 0 && P.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (R === !0) return;
      M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(), P.parent === null && P.matrixWorldAutoUpdate === !0 && P.updateMatrixWorld(), Oe.enabled === !0 && Oe.isPresenting === !0 && (Oe.cameraAutoUpdate === !0 && Oe.updateCamera(P), P = Oe.getCamera()), M.isScene === !0 && M.onBeforeRender(x, M, P, b), p = Me.get(M, T.length), p.init(), T.push(p), pe.multiplyMatrices(P.projectionMatrix, P.matrixWorldInverse), G.setFromProjectionMatrix(pe), ae = this.localClippingEnabled, q = Ne.init(this.clippingPlanes, ae), v = ce.get(M, u.length), v.init(), u.push(v), Ht(M, P, 0, x.sortObjects), v.finish(), x.sortObjects === !0 && v.sort(k, V), this.info.render.frame++, q === !0 && Ne.beginShadows();
      const F = p.state.shadowsArray;
      if (Y.render(F, M, P), q === !0 && Ne.endShadows(), this.info.autoReset === !0 && this.info.reset(), ke.render(v, M), p.setupLights(x._useLegacyLights), P.isArrayCamera) {
        const B = P.cameras;
        for (let I = 0, oe = B.length; I < oe; I++) {
          const fe = B[I];
          Rs(v, M, fe, fe.viewport);
        }
      } else
        Rs(v, M, P);
      b !== null && (E.updateMultisampleRenderTarget(b), E.updateRenderTargetMipmap(b)), M.isScene === !0 && M.onAfterRender(x, M, P), Pe.resetDefaultState(), W = -1, S = null, T.pop(), T.length > 0 ? p = T[T.length - 1] : p = null, u.pop(), u.length > 0 ? v = u[u.length - 1] : v = null;
    };
    function Ht(M, P, F, B) {
      if (M.visible === !1) return;
      if (M.layers.test(P.layers)) {
        if (M.isGroup)
          F = M.renderOrder;
        else if (M.isLOD)
          M.autoUpdate === !0 && M.update(P);
        else if (M.isLight)
          p.pushLight(M), M.castShadow && p.pushShadow(M);
        else if (M.isSprite) {
          if (!M.frustumCulled || G.intersectsSprite(M)) {
            B && Le.setFromMatrixPosition(M.matrixWorld).applyMatrix4(pe);
            const fe = J.update(M), xe = M.material;
            xe.visible && v.push(M, fe, xe, F, Le.z, null);
          }
        } else if ((M.isMesh || M.isLine || M.isPoints) && (!M.frustumCulled || G.intersectsObject(M))) {
          const fe = J.update(M), xe = M.material;
          if (B && (M.boundingSphere !== void 0 ? (M.boundingSphere === null && M.computeBoundingSphere(), Le.copy(M.boundingSphere.center)) : (fe.boundingSphere === null && fe.computeBoundingSphere(), Le.copy(fe.boundingSphere.center)), Le.applyMatrix4(M.matrixWorld).applyMatrix4(pe)), Array.isArray(xe)) {
            const Te = fe.groups;
            for (let Fe = 0, we = Te.length; Fe < we; Fe++) {
              const Ce = Te[Fe], nt = xe[Ce.materialIndex];
              nt && nt.visible && v.push(M, fe, nt, F, Le.z, Ce);
            }
          } else xe.visible && v.push(M, fe, xe, F, Le.z, null);
        }
      }
      const oe = M.children;
      for (let fe = 0, xe = oe.length; fe < xe; fe++)
        Ht(oe[fe], P, F, B);
    }
    function Rs(M, P, F, B) {
      const I = M.opaque, oe = M.transmissive, fe = M.transparent;
      p.setupLightsView(F), q === !0 && Ne.setGlobalState(x.clippingPlanes, F), oe.length > 0 && Qo(I, oe, P, F), B && ue.viewport(y.copy(B)), I.length > 0 && Ri(I, P, F), oe.length > 0 && Ri(oe, P, F), fe.length > 0 && Ri(fe, P, F), ue.buffers.depth.setTest(!0), ue.buffers.depth.setMask(!0), ue.buffers.color.setMask(!0), ue.setPolygonOffset(!1);
    }
    function Qo(M, P, F, B) {
      if ((F.isScene === !0 ? F.overrideMaterial : null) !== null)
        return;
      const oe = be.isWebGL2;
      me === null && (me = new Rn(1, 1, {
        generateMipmaps: !0,
        type: _e.has("EXT_color_buffer_half_float") ? xi : hn,
        minFilter: vi,
        samples: oe ? 4 : 0
      })), x.getDrawingBufferSize(Re), oe ? me.setSize(Re.x, Re.y) : me.setSize(ps(Re.x), ps(Re.y));
      const fe = x.getRenderTarget();
      x.setRenderTarget(me), x.getClearColor(ne), C = x.getClearAlpha(), C < 1 && x.setClearColor(16777215, 0.5), x.clear();
      const xe = x.toneMapping;
      x.toneMapping = cn, Ri(M, F, B), E.updateMultisampleRenderTarget(me), E.updateRenderTargetMipmap(me);
      let Te = !1;
      for (let Fe = 0, we = P.length; Fe < we; Fe++) {
        const Ce = P[Fe], nt = Ce.object, bt = Ce.geometry, ot = Ce.material, Wt = Ce.group;
        if (ot.side === kt && nt.layers.test(B.layers)) {
          const Je = ot.side;
          ot.side = yt, ot.needsUpdate = !0, Cs(nt, F, B, bt, ot, Wt), ot.side = Je, ot.needsUpdate = !0, Te = !0;
        }
      }
      Te === !0 && (E.updateMultisampleRenderTarget(me), E.updateRenderTargetMipmap(me)), x.setRenderTarget(fe), x.setClearColor(ne, C), x.toneMapping = xe;
    }
    function Ri(M, P, F) {
      const B = P.isScene === !0 ? P.overrideMaterial : null;
      for (let I = 0, oe = M.length; I < oe; I++) {
        const fe = M[I], xe = fe.object, Te = fe.geometry, Fe = B === null ? fe.material : B, we = fe.group;
        xe.layers.test(F.layers) && Cs(xe, P, F, Te, Fe, we);
      }
    }
    function Cs(M, P, F, B, I, oe) {
      M.onBeforeRender(x, P, F, B, I, oe), M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, M.matrixWorld), M.normalMatrix.getNormalMatrix(M.modelViewMatrix), I.onBeforeRender(x, P, F, B, M, oe), I.transparent === !0 && I.side === kt && I.forceSinglePass === !1 ? (I.side = yt, I.needsUpdate = !0, x.renderBufferDirect(F, P, B, I, M, oe), I.side = dn, I.needsUpdate = !0, x.renderBufferDirect(F, P, B, I, M, oe), I.side = kt) : x.renderBufferDirect(F, P, B, I, M, oe), M.onAfterRender(x, P, F, B, I, oe);
    }
    function Ci(M, P, F) {
      P.isScene !== !0 && (P = Se);
      const B = Ie.get(M), I = p.state.lights, oe = p.state.shadowsArray, fe = I.state.version, xe = de.getParameters(M, I.state, oe, P, F), Te = de.getProgramCacheKey(xe);
      let Fe = B.programs;
      B.environment = M.isMeshStandardMaterial ? P.environment : null, B.fog = P.fog, B.envMap = (M.isMeshStandardMaterial ? N : _).get(M.envMap || B.environment), Fe === void 0 && (M.addEventListener("dispose", re), Fe = /* @__PURE__ */ new Map(), B.programs = Fe);
      let we = Fe.get(Te);
      if (we !== void 0) {
        if (B.currentProgram === we && B.lightsStateVersion === fe)
          return Ps(M, xe), we;
      } else
        xe.uniforms = de.getUniforms(M), M.onBuild(F, xe, x), M.onBeforeCompile(xe, x), we = de.acquireProgram(xe, Te), Fe.set(Te, we), B.uniforms = xe.uniforms;
      const Ce = B.uniforms;
      return (!M.isShaderMaterial && !M.isRawShaderMaterial || M.clipping === !0) && (Ce.clippingPlanes = Ne.uniform), Ps(M, xe), B.needsLights = nl(M), B.lightsStateVersion = fe, B.needsLights && (Ce.ambientLightColor.value = I.state.ambient, Ce.lightProbe.value = I.state.probe, Ce.directionalLights.value = I.state.directional, Ce.directionalLightShadows.value = I.state.directionalShadow, Ce.spotLights.value = I.state.spot, Ce.spotLightShadows.value = I.state.spotShadow, Ce.rectAreaLights.value = I.state.rectArea, Ce.ltc_1.value = I.state.rectAreaLTC1, Ce.ltc_2.value = I.state.rectAreaLTC2, Ce.pointLights.value = I.state.point, Ce.pointLightShadows.value = I.state.pointShadow, Ce.hemisphereLights.value = I.state.hemi, Ce.directionalShadowMap.value = I.state.directionalShadowMap, Ce.directionalShadowMatrix.value = I.state.directionalShadowMatrix, Ce.spotShadowMap.value = I.state.spotShadowMap, Ce.spotLightMatrix.value = I.state.spotLightMatrix, Ce.spotLightMap.value = I.state.spotLightMap, Ce.pointShadowMap.value = I.state.pointShadowMap, Ce.pointShadowMatrix.value = I.state.pointShadowMatrix), B.currentProgram = we, B.uniformsList = null, we;
    }
    function Ls(M) {
      if (M.uniformsList === null) {
        const P = M.currentProgram.getUniforms();
        M.uniformsList = sr.seqWithValue(P.seq, M.uniforms);
      }
      return M.uniformsList;
    }
    function Ps(M, P) {
      const F = Ie.get(M);
      F.outputColorSpace = P.outputColorSpace, F.batching = P.batching, F.instancing = P.instancing, F.instancingColor = P.instancingColor, F.skinning = P.skinning, F.morphTargets = P.morphTargets, F.morphNormals = P.morphNormals, F.morphColors = P.morphColors, F.morphTargetsCount = P.morphTargetsCount, F.numClippingPlanes = P.numClippingPlanes, F.numIntersection = P.numClipIntersection, F.vertexAlphas = P.vertexAlphas, F.vertexTangents = P.vertexTangents, F.toneMapping = P.toneMapping;
    }
    function el(M, P, F, B, I) {
      P.isScene !== !0 && (P = Se), E.resetTextureUnits();
      const oe = P.fog, fe = B.isMeshStandardMaterial ? P.environment : null, xe = b === null ? x.outputColorSpace : b.isXRRenderTarget === !0 ? b.texture.colorSpace : Qt, Te = (B.isMeshStandardMaterial ? N : _).get(B.envMap || fe), Fe = B.vertexColors === !0 && !!F.attributes.color && F.attributes.color.itemSize === 4, we = !!F.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), Ce = !!F.morphAttributes.position, nt = !!F.morphAttributes.normal, bt = !!F.morphAttributes.color;
      let ot = cn;
      B.toneMapped && (b === null || b.isXRRenderTarget === !0) && (ot = x.toneMapping);
      const Wt = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color, Je = Wt !== void 0 ? Wt.length : 0, Be = Ie.get(B), xr = p.state.lights;
      if (q === !0 && (ae === !0 || M !== S)) {
        const Ct = M === S && B.id === W;
        Ne.setState(B, M, Ct);
      }
      let tt = !1;
      B.version === Be.__version ? (Be.needsLights && Be.lightsStateVersion !== xr.state.version || Be.outputColorSpace !== xe || I.isBatchedMesh && Be.batching === !1 || !I.isBatchedMesh && Be.batching === !0 || I.isInstancedMesh && Be.instancing === !1 || !I.isInstancedMesh && Be.instancing === !0 || I.isSkinnedMesh && Be.skinning === !1 || !I.isSkinnedMesh && Be.skinning === !0 || I.isInstancedMesh && Be.instancingColor === !0 && I.instanceColor === null || I.isInstancedMesh && Be.instancingColor === !1 && I.instanceColor !== null || Be.envMap !== Te || B.fog === !0 && Be.fog !== oe || Be.numClippingPlanes !== void 0 && (Be.numClippingPlanes !== Ne.numPlanes || Be.numIntersection !== Ne.numIntersection) || Be.vertexAlphas !== Fe || Be.vertexTangents !== we || Be.morphTargets !== Ce || Be.morphNormals !== nt || Be.morphColors !== bt || Be.toneMapping !== ot || be.isWebGL2 === !0 && Be.morphTargetsCount !== Je) && (tt = !0) : (tt = !0, Be.__version = B.version);
      let pn = Be.currentProgram;
      tt === !0 && (pn = Ci(B, P, I));
      let Ds = !1, li = !1, Mr = !1;
      const ut = pn.getUniforms(), mn = Be.uniforms;
      if (ue.useProgram(pn.program) && (Ds = !0, li = !0, Mr = !0), B.id !== W && (W = B.id, li = !0), Ds || S !== M) {
        ut.setValue(U, "projectionMatrix", M.projectionMatrix), ut.setValue(U, "viewMatrix", M.matrixWorldInverse);
        const Ct = ut.map.cameraPosition;
        Ct !== void 0 && Ct.setValue(U, Le.setFromMatrixPosition(M.matrixWorld)), be.logarithmicDepthBuffer && ut.setValue(
          U,
          "logDepthBufFC",
          2 / (Math.log(M.far + 1) / Math.LN2)
        ), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && ut.setValue(U, "isOrthographic", M.isOrthographicCamera === !0), S !== M && (S = M, li = !0, Mr = !0);
      }
      if (I.isSkinnedMesh) {
        ut.setOptional(U, I, "bindMatrix"), ut.setOptional(U, I, "bindMatrixInverse");
        const Ct = I.skeleton;
        Ct && (be.floatVertexTextures ? (Ct.boneTexture === null && Ct.computeBoneTexture(), ut.setValue(U, "boneTexture", Ct.boneTexture, E)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      I.isBatchedMesh && (ut.setOptional(U, I, "batchingTexture"), ut.setValue(U, "batchingTexture", I._matricesTexture, E));
      const Sr = F.morphAttributes;
      if ((Sr.position !== void 0 || Sr.normal !== void 0 || Sr.color !== void 0 && be.isWebGL2 === !0) && Ge.update(I, F, pn), (li || Be.receiveShadow !== I.receiveShadow) && (Be.receiveShadow = I.receiveShadow, ut.setValue(U, "receiveShadow", I.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (mn.envMap.value = Te, mn.flipEnvMap.value = Te.isCubeTexture && Te.isRenderTargetTexture === !1 ? -1 : 1), li && (ut.setValue(U, "toneMappingExposure", x.toneMappingExposure), Be.needsLights && tl(mn, Mr), oe && B.fog === !0 && se.refreshFogUniforms(mn, oe), se.refreshMaterialUniforms(mn, B, X, H, me), sr.upload(U, Ls(Be), mn, E)), B.isShaderMaterial && B.uniformsNeedUpdate === !0 && (sr.upload(U, Ls(Be), mn, E), B.uniformsNeedUpdate = !1), B.isSpriteMaterial && ut.setValue(U, "center", I.center), ut.setValue(U, "modelViewMatrix", I.modelViewMatrix), ut.setValue(U, "normalMatrix", I.normalMatrix), ut.setValue(U, "modelMatrix", I.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) {
        const Ct = B.uniformsGroups;
        for (let Er = 0, il = Ct.length; Er < il; Er++)
          if (be.isWebGL2) {
            const Us = Ct[Er];
            Ve.update(Us, pn), Ve.bind(Us, pn);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return pn;
    }
    function tl(M, P) {
      M.ambientLightColor.needsUpdate = P, M.lightProbe.needsUpdate = P, M.directionalLights.needsUpdate = P, M.directionalLightShadows.needsUpdate = P, M.pointLights.needsUpdate = P, M.pointLightShadows.needsUpdate = P, M.spotLights.needsUpdate = P, M.spotLightShadows.needsUpdate = P, M.rectAreaLights.needsUpdate = P, M.hemisphereLights.needsUpdate = P;
    }
    function nl(M) {
      return M.isMeshLambertMaterial || M.isMeshToonMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isShadowMaterial || M.isShaderMaterial && M.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return D;
    }, this.getActiveMipmapLevel = function() {
      return w;
    }, this.getRenderTarget = function() {
      return b;
    }, this.setRenderTargetTextures = function(M, P, F) {
      Ie.get(M.texture).__webglTexture = P, Ie.get(M.depthTexture).__webglTexture = F;
      const B = Ie.get(M);
      B.__hasExternalTextures = !0, B.__hasExternalTextures && (B.__autoAllocateDepthBuffer = F === void 0, B.__autoAllocateDepthBuffer || _e.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), B.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(M, P) {
      const F = Ie.get(M);
      F.__webglFramebuffer = P, F.__useDefaultFramebuffer = P === void 0;
    }, this.setRenderTarget = function(M, P = 0, F = 0) {
      b = M, D = P, w = F;
      let B = !0, I = null, oe = !1, fe = !1;
      if (M) {
        const Te = Ie.get(M);
        Te.__useDefaultFramebuffer !== void 0 ? (ue.bindFramebuffer(U.FRAMEBUFFER, null), B = !1) : Te.__webglFramebuffer === void 0 ? E.setupRenderTarget(M) : Te.__hasExternalTextures && E.rebindTextures(M, Ie.get(M.texture).__webglTexture, Ie.get(M.depthTexture).__webglTexture);
        const Fe = M.texture;
        (Fe.isData3DTexture || Fe.isDataArrayTexture || Fe.isCompressedArrayTexture) && (fe = !0);
        const we = Ie.get(M).__webglFramebuffer;
        M.isWebGLCubeRenderTarget ? (Array.isArray(we[P]) ? I = we[P][F] : I = we[P], oe = !0) : be.isWebGL2 && M.samples > 0 && E.useMultisampledRTT(M) === !1 ? I = Ie.get(M).__webglMultisampledFramebuffer : Array.isArray(we) ? I = we[F] : I = we, y.copy(M.viewport), z.copy(M.scissor), j = M.scissorTest;
      } else
        y.copy(Z).multiplyScalar(X).floor(), z.copy(Q).multiplyScalar(X).floor(), j = le;
      if (ue.bindFramebuffer(U.FRAMEBUFFER, I) && be.drawBuffers && B && ue.drawBuffers(M, I), ue.viewport(y), ue.scissor(z), ue.setScissorTest(j), oe) {
        const Te = Ie.get(M.texture);
        U.framebufferTexture2D(U.FRAMEBUFFER, U.COLOR_ATTACHMENT0, U.TEXTURE_CUBE_MAP_POSITIVE_X + P, Te.__webglTexture, F);
      } else if (fe) {
        const Te = Ie.get(M.texture), Fe = P || 0;
        U.framebufferTextureLayer(U.FRAMEBUFFER, U.COLOR_ATTACHMENT0, Te.__webglTexture, F || 0, Fe);
      }
      W = -1;
    }, this.readRenderTargetPixels = function(M, P, F, B, I, oe, fe) {
      if (!(M && M.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let xe = Ie.get(M).__webglFramebuffer;
      if (M.isWebGLCubeRenderTarget && fe !== void 0 && (xe = xe[fe]), xe) {
        ue.bindFramebuffer(U.FRAMEBUFFER, xe);
        try {
          const Te = M.texture, Fe = Te.format, we = Te.type;
          if (Fe !== zt && he.convert(Fe) !== U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const Ce = we === xi && (_e.has("EXT_color_buffer_half_float") || be.isWebGL2 && _e.has("EXT_color_buffer_float"));
          if (we !== hn && he.convert(we) !== U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(we === on && (be.isWebGL2 || _e.has("OES_texture_float") || _e.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !Ce) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          P >= 0 && P <= M.width - B && F >= 0 && F <= M.height - I && U.readPixels(P, F, B, I, he.convert(Fe), he.convert(we), oe);
        } finally {
          const Te = b !== null ? Ie.get(b).__webglFramebuffer : null;
          ue.bindFramebuffer(U.FRAMEBUFFER, Te);
        }
      }
    }, this.copyFramebufferToTexture = function(M, P, F = 0) {
      const B = Math.pow(2, -F), I = Math.floor(P.image.width * B), oe = Math.floor(P.image.height * B);
      E.setTexture2D(P, 0), U.copyTexSubImage2D(U.TEXTURE_2D, F, 0, 0, M.x, M.y, I, oe), ue.unbindTexture();
    }, this.copyTextureToTexture = function(M, P, F, B = 0) {
      const I = P.image.width, oe = P.image.height, fe = he.convert(F.format), xe = he.convert(F.type);
      E.setTexture2D(F, 0), U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL, F.flipY), U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL, F.premultiplyAlpha), U.pixelStorei(U.UNPACK_ALIGNMENT, F.unpackAlignment), P.isDataTexture ? U.texSubImage2D(U.TEXTURE_2D, B, M.x, M.y, I, oe, fe, xe, P.image.data) : P.isCompressedTexture ? U.compressedTexSubImage2D(U.TEXTURE_2D, B, M.x, M.y, P.mipmaps[0].width, P.mipmaps[0].height, fe, P.mipmaps[0].data) : U.texSubImage2D(U.TEXTURE_2D, B, M.x, M.y, fe, xe, P.image), B === 0 && F.generateMipmaps && U.generateMipmap(U.TEXTURE_2D), ue.unbindTexture();
    }, this.copyTextureToTexture3D = function(M, P, F, B, I = 0) {
      if (x.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const oe = M.max.x - M.min.x + 1, fe = M.max.y - M.min.y + 1, xe = M.max.z - M.min.z + 1, Te = he.convert(B.format), Fe = he.convert(B.type);
      let we;
      if (B.isData3DTexture)
        E.setTexture3D(B, 0), we = U.TEXTURE_3D;
      else if (B.isDataArrayTexture || B.isCompressedArrayTexture)
        E.setTexture2DArray(B, 0), we = U.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL, B.flipY), U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL, B.premultiplyAlpha), U.pixelStorei(U.UNPACK_ALIGNMENT, B.unpackAlignment);
      const Ce = U.getParameter(U.UNPACK_ROW_LENGTH), nt = U.getParameter(U.UNPACK_IMAGE_HEIGHT), bt = U.getParameter(U.UNPACK_SKIP_PIXELS), ot = U.getParameter(U.UNPACK_SKIP_ROWS), Wt = U.getParameter(U.UNPACK_SKIP_IMAGES), Je = F.isCompressedTexture ? F.mipmaps[I] : F.image;
      U.pixelStorei(U.UNPACK_ROW_LENGTH, Je.width), U.pixelStorei(U.UNPACK_IMAGE_HEIGHT, Je.height), U.pixelStorei(U.UNPACK_SKIP_PIXELS, M.min.x), U.pixelStorei(U.UNPACK_SKIP_ROWS, M.min.y), U.pixelStorei(U.UNPACK_SKIP_IMAGES, M.min.z), F.isDataTexture || F.isData3DTexture ? U.texSubImage3D(we, I, P.x, P.y, P.z, oe, fe, xe, Te, Fe, Je.data) : F.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), U.compressedTexSubImage3D(we, I, P.x, P.y, P.z, oe, fe, xe, Te, Je.data)) : U.texSubImage3D(we, I, P.x, P.y, P.z, oe, fe, xe, Te, Fe, Je), U.pixelStorei(U.UNPACK_ROW_LENGTH, Ce), U.pixelStorei(U.UNPACK_IMAGE_HEIGHT, nt), U.pixelStorei(U.UNPACK_SKIP_PIXELS, bt), U.pixelStorei(U.UNPACK_SKIP_ROWS, ot), U.pixelStorei(U.UNPACK_SKIP_IMAGES, Wt), I === 0 && B.generateMipmaps && U.generateMipmap(we), ue.unbindTexture();
    }, this.initTexture = function(M) {
      M.isCubeTexture ? E.setTextureCube(M, 0) : M.isData3DTexture ? E.setTexture3D(M, 0) : M.isDataArrayTexture || M.isCompressedArrayTexture ? E.setTexture2DArray(M, 0) : E.setTexture2D(M, 0), ue.unbindTexture();
    }, this.resetState = function() {
      D = 0, w = 0, b = null, ue.reset(), Pe.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Jt;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === xs ? "display-p3" : "srgb", t.unpackColorSpace = We.workingColorSpace === gr ? "display-p3" : "srgb";
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === ct ? bn : Ao;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === bn ? ct : Qt;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class hp extends oi {
}
hp.prototype.isWebGL1Renderer = !0;
class bi extends ht {
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
class up {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = us, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.version = 0, this.uuid = un();
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
    for (let r = 0, s = this.stride; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = un()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = un()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const vt = /* @__PURE__ */ new L();
class ur {
  constructor(e, t, n, r = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = r;
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
      vt.fromBufferAttribute(this, t), vt.applyMatrix4(e), this.setXYZ(t, vt.x, vt.y, vt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      vt.fromBufferAttribute(this, t), vt.applyNormalMatrix(e), this.setXYZ(t, vt.x, vt.y, vt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      vt.fromBufferAttribute(this, t), vt.transformDirection(e), this.setXYZ(t, vt.x, vt.y, vt.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = Xe(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Xe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Xe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Xe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = $t(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Xe(t, this.array), n = Xe(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Xe(t, this.array), n = Xe(n, this.array), r = Xe(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this;
  }
  setXYZW(e, t, n, r, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Xe(t, this.array), n = Xe(n, this.array), r = Xe(r, this.array), s = Xe(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[r + s]);
      }
      return new Tt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new ur(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[r + s]);
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
class Yo extends fn {
  constructor(e) {
    super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new ye(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let Yn;
const fi = /* @__PURE__ */ new L(), jn = /* @__PURE__ */ new L(), Kn = /* @__PURE__ */ new L(), Zn = /* @__PURE__ */ new Ue(), pi = /* @__PURE__ */ new Ue(), jo = /* @__PURE__ */ new Qe(), Qi = /* @__PURE__ */ new L(), mi = /* @__PURE__ */ new L(), er = /* @__PURE__ */ new L(), Ja = /* @__PURE__ */ new Ue(), es = /* @__PURE__ */ new Ue(), Qa = /* @__PURE__ */ new Ue();
class dp extends ht {
  constructor(e = new Yo()) {
    if (super(), this.isSprite = !0, this.type = "Sprite", Yn === void 0) {
      Yn = new At();
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
      ]), n = new up(t, 5);
      Yn.setIndex([0, 1, 2, 0, 2, 3]), Yn.setAttribute("position", new ur(n, 3, 0, !1)), Yn.setAttribute("uv", new ur(n, 2, 3, !1));
    }
    this.geometry = Yn, this.material = e, this.center = new Ue(0.5, 0.5);
  }
  raycast(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), jn.setFromMatrixScale(this.matrixWorld), jo.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Kn.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && jn.multiplyScalar(-Kn.z);
    const n = this.material.rotation;
    let r, s;
    n !== 0 && (s = Math.cos(n), r = Math.sin(n));
    const o = this.center;
    tr(Qi.set(-0.5, -0.5, 0), Kn, o, jn, r, s), tr(mi.set(0.5, -0.5, 0), Kn, o, jn, r, s), tr(er.set(0.5, 0.5, 0), Kn, o, jn, r, s), Ja.set(0, 0), es.set(1, 0), Qa.set(1, 1);
    let a = e.ray.intersectTriangle(Qi, mi, er, !1, fi);
    if (a === null && (tr(mi.set(-0.5, 0.5, 0), Kn, o, jn, r, s), es.set(0, 1), a = e.ray.intersectTriangle(Qi, er, mi, !1, fi), a === null))
      return;
    const l = e.ray.origin.distanceTo(fi);
    l < e.near || l > e.far || t.push({
      distance: l,
      point: fi.clone(),
      uv: Dt.getInterpolation(fi, Qi, mi, er, Ja, es, Qa, new Ue()),
      face: null,
      object: this
    });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function tr(i, e, t, n, r, s) {
  Zn.subVectors(i, t).addScalar(0.5).multiply(n), r !== void 0 ? (pi.x = s * Zn.x - r * Zn.y, pi.y = r * Zn.x + s * Zn.y) : pi.copy(Zn), i.copy(e), i.x += pi.x, i.y += pi.y, i.applyMatrix4(jo);
}
class Ko extends fn {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new ye(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const eo = /* @__PURE__ */ new L(), to = /* @__PURE__ */ new L(), no = /* @__PURE__ */ new Qe(), ts = /* @__PURE__ */ new Ms(), nr = /* @__PURE__ */ new Ai();
class fp extends ht {
  constructor(e = new At(), t = new Ko()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let r = 1, s = t.count; r < s; r++)
        eo.fromBufferAttribute(t, r - 1), to.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += eo.distanceTo(to);
      e.setAttribute("lineDistance", new It(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), nr.copy(n.boundingSphere), nr.applyMatrix4(r), nr.radius += s, e.ray.intersectsSphere(nr) === !1) return;
    no.copy(r).invert(), ts.copy(e.ray).applyMatrix4(no);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = new L(), h = new L(), d = new L(), f = new L(), m = this.isLineSegments ? 2 : 1, g = n.index, p = n.attributes.position;
    if (g !== null) {
      const u = Math.max(0, o.start), T = Math.min(g.count, o.start + o.count);
      for (let x = u, R = T - 1; x < R; x += m) {
        const D = g.getX(x), w = g.getX(x + 1);
        if (c.fromBufferAttribute(p, D), h.fromBufferAttribute(p, w), ts.distanceSqToSegment(c, h, f, d) > l) continue;
        f.applyMatrix4(this.matrixWorld);
        const W = e.ray.origin.distanceTo(f);
        W < e.near || W > e.far || t.push({
          distance: W,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: d.clone().applyMatrix4(this.matrixWorld),
          index: x,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const u = Math.max(0, o.start), T = Math.min(p.count, o.start + o.count);
      for (let x = u, R = T - 1; x < R; x += m) {
        if (c.fromBufferAttribute(p, x), h.fromBufferAttribute(p, x + 1), ts.distanceSqToSegment(c, h, f, d) > l) continue;
        f.applyMatrix4(this.matrixWorld);
        const w = e.ray.origin.distanceTo(f);
        w < e.near || w > e.far || t.push({
          distance: w,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: d.clone().applyMatrix4(this.matrixWorld),
          index: x,
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
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
const io = /* @__PURE__ */ new L(), ro = /* @__PURE__ */ new L();
class pp extends fp {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let r = 0, s = t.count; r < s; r += 2)
        io.fromBufferAttribute(t, r), ro.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + io.distanceTo(ro);
      e.setAttribute("lineDistance", new It(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class As extends fn {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new ye(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const so = /* @__PURE__ */ new Qe(), gs = /* @__PURE__ */ new Ms(), ir = /* @__PURE__ */ new Ai(), rr = /* @__PURE__ */ new L();
class Zo extends ht {
  constructor(e = new At(), t = new As()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ir.copy(n.boundingSphere), ir.applyMatrix4(r), ir.radius += s, e.ray.intersectsSphere(ir) === !1) return;
    so.copy(r).invert(), gs.copy(e.ray).applyMatrix4(so);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = n.index, d = n.attributes.position;
    if (c !== null) {
      const f = Math.max(0, o.start), m = Math.min(c.count, o.start + o.count);
      for (let g = f, v = m; g < v; g++) {
        const p = c.getX(g);
        rr.fromBufferAttribute(d, p), ao(rr, p, l, r, e, t, this);
      }
    } else {
      const f = Math.max(0, o.start), m = Math.min(d.count, o.start + o.count);
      for (let g = f, v = m; g < v; g++)
        rr.fromBufferAttribute(d, g), ao(rr, g, l, r, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
function ao(i, e, t, n, r, s, o) {
  const a = gs.distanceSqToPoint(i);
  if (a < t) {
    const l = new L();
    gs.closestPointToPoint(i, l), l.applyMatrix4(n);
    const c = r.ray.origin.distanceTo(l);
    if (c < r.near || c > r.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(a),
      point: l,
      index: e,
      face: null,
      object: o
    });
  }
}
class mp extends St {
  constructor(e, t, n, r, s, o, a, l, c) {
    super(e, t, n, r, s, o, a, l, c), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class dr extends At {
  constructor(e = 0.5, t = 1, n = 32, r = 1, s = 0, o = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = {
      innerRadius: e,
      outerRadius: t,
      thetaSegments: n,
      phiSegments: r,
      thetaStart: s,
      thetaLength: o
    }, n = Math.max(3, n), r = Math.max(1, r);
    const a = [], l = [], c = [], h = [];
    let d = e;
    const f = (t - e) / r, m = new L(), g = new Ue();
    for (let v = 0; v <= r; v++) {
      for (let p = 0; p <= n; p++) {
        const u = s + p / n * o;
        m.x = d * Math.cos(u), m.y = d * Math.sin(u), l.push(m.x, m.y, m.z), c.push(0, 0, 1), g.x = (m.x / t + 1) / 2, g.y = (m.y / t + 1) / 2, h.push(g.x, g.y);
      }
      d += f;
    }
    for (let v = 0; v < r; v++) {
      const p = v * (n + 1);
      for (let u = 0; u < n; u++) {
        const T = u + p, x = T, R = T + n + 1, D = T + n + 2, w = T + 1;
        a.push(x, R, w), a.push(R, D, w);
      }
    }
    this.setIndex(a), this.setAttribute("position", new It(l, 3)), this.setAttribute("normal", new It(c, 3)), this.setAttribute("uv", new It(h, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new dr(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength);
  }
}
class fr extends fn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new ye(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ye(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = bo, this.normalScale = new Ue(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
const oo = {
  enabled: !1,
  files: {},
  add: function(i, e) {
    this.enabled !== !1 && (this.files[i] = e);
  },
  get: function(i) {
    if (this.enabled !== !1)
      return this.files[i];
  },
  remove: function(i) {
    delete this.files[i];
  },
  clear: function() {
    this.files = {};
  }
};
class gp {
  constructor(e, t, n) {
    const r = this;
    let s = !1, o = 0, a = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      a++, s === !1 && r.onStart !== void 0 && r.onStart(h, o, a), s = !0;
    }, this.itemEnd = function(h) {
      o++, r.onProgress !== void 0 && r.onProgress(h, o, a), o === a && (s = !1, r.onLoad !== void 0 && r.onLoad());
    }, this.itemError = function(h) {
      r.onError !== void 0 && r.onError(h);
    }, this.resolveURL = function(h) {
      return l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, d) {
      return c.push(h, d), this;
    }, this.removeHandler = function(h) {
      const d = c.indexOf(h);
      return d !== -1 && c.splice(d, 2), this;
    }, this.getHandler = function(h) {
      for (let d = 0, f = c.length; d < f; d += 2) {
        const m = c[d], g = c[d + 1];
        if (m.global && (m.lastIndex = 0), m.test(h))
          return g;
      }
      return null;
    };
  }
}
const _p = /* @__PURE__ */ new gp();
class bs {
  constructor(e) {
    this.manager = e !== void 0 ? e : _p, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(r, s) {
      n.load(e, r, t, s);
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
bs.DEFAULT_MATERIAL_NAME = "__DEFAULT";
class vp extends bs {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, o = oo.get(e);
    if (o !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(o), s.manager.itemEnd(e);
      }, 0), o;
    const a = Mi("img");
    function l() {
      h(), oo.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(d) {
      h(), r && r(d), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      a.removeEventListener("load", l, !1), a.removeEventListener("error", c, !1);
    }
    return a.addEventListener("load", l, !1), a.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), s.manager.itemStart(e), a.src = e, a;
  }
}
class $o extends bs {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    const s = new St(), o = new vp(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      s.image = a, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, r), s;
  }
}
class Jo extends ht {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new ye(e), this.intensity = t;
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
const ns = /* @__PURE__ */ new Qe(), lo = /* @__PURE__ */ new L(), co = /* @__PURE__ */ new L();
class xp {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Ue(512, 512), this.map = null, this.mapPass = null, this.matrix = new Qe(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Es(), this._frameExtents = new Ue(1, 1), this._viewportCount = 1, this._viewports = [
      new Ze(0, 0, 1, 1)
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
    lo.setFromMatrixPosition(e.matrixWorld), t.position.copy(lo), co.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(co), t.updateMatrixWorld(), ns.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ns), n.set(
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
    ), n.multiply(ns);
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
const ho = /* @__PURE__ */ new Qe(), gi = /* @__PURE__ */ new L(), is = /* @__PURE__ */ new L();
class Mp extends xp {
  constructor() {
    super(new pt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Ue(4, 2), this._viewportCount = 6, this._viewports = [
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
      new Ze(2, 1, 1, 1),
      // negative X
      new Ze(0, 1, 1, 1),
      // positive Z
      new Ze(3, 1, 1, 1),
      // negative Z
      new Ze(1, 1, 1, 1),
      // positive Y
      new Ze(3, 0, 1, 1),
      // negative Y
      new Ze(1, 0, 1, 1)
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
    const n = this.camera, r = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), gi.setFromMatrixPosition(e.matrixWorld), n.position.copy(gi), is.copy(n.position), is.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(is), n.updateMatrixWorld(), r.makeTranslation(-gi.x, -gi.y, -gi.z), ho.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ho);
  }
}
class pr extends Jo {
  constructor(e, t, n = 0, r = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = r, this.shadow = new Mp();
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
class ws extends Jo {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class wi {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = uo(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
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
      const t = uo();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function uo() {
  return (typeof performance > "u" ? Date : performance).now();
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: _s
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = _s);
let Sp = class {
  constructor(e, t = {}) {
    this.frameId = 0, this.mouse = { x: 0, y: 0 }, this.targetRot = { x: 0, y: 0 }, this.clock = new wi(), this.container = e, this.opts = {
      width: t.width ?? 2.8,
      height: t.height ?? 4,
      depth: t.depth ?? 0.06,
      color: t.color ?? 6514417,
      emissiveColor: t.emissiveColor ?? 1708096,
      image: t.image ?? "",
      floatSpeed: t.floatSpeed ?? 1.2,
      floatAmplitude: t.floatAmplitude ?? 0.18,
      tiltStrength: t.tiltStrength ?? 0.35
    }, this.scene = new bi(), this.camera = new pt(45, e.clientWidth / e.clientHeight, 0.1, 100), this.camera.position.z = 8, this.renderer = new oi({ antialias: !0, alpha: !0 }), this.renderer.setSize(e.clientWidth, e.clientHeight), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), e.appendChild(this.renderer.domElement), this.buildCard(), this.addLights(), this.onMouseMoveBound = this.onMouseMove.bind(this), this.onResizeBound = this.onResize.bind(this), e.addEventListener("mousemove", this.onMouseMoveBound), window.addEventListener("resize", this.onResizeBound), this.animate();
  }
  buildCard() {
    const { width: e, height: t, depth: n, color: r, emissiveColor: s, image: o } = this.opts, a = new Ln(e, t, n), l = o ? new fr({
      map: new $o().load(o),
      emissive: new ye(s),
      emissiveIntensity: 0.1,
      metalness: 0.2,
      roughness: 0.5
    }) : new fr({
      color: new ye(r),
      emissive: new ye(s),
      emissiveIntensity: 0.4,
      metalness: 0.3,
      roughness: 0.35
    });
    this.mesh = new Gt(a, l), this.scene.add(this.mesh);
  }
  addLights() {
    this.scene.add(new ws(16777215, 0.5));
    const e = new pr(16777215, 2, 30);
    e.position.set(4, 4, 6), this.scene.add(e);
    const t = new pr(8490232, 1, 20);
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
    const e = this.clock.getElapsedTime(), { floatSpeed: t, floatAmplitude: n, tiltStrength: r } = this.opts;
    this.mesh.position.y = Math.sin(e * t) * n, this.targetRot.x += (this.mouse.y * r - this.targetRot.x) * 0.06, this.targetRot.y += (this.mouse.x * r - this.targetRot.y) * 0.06, this.mesh.rotation.x = this.targetRot.x, this.mesh.rotation.y = this.targetRot.y, this.renderer.render(this.scene, this.camera);
  }
  destroy() {
    cancelAnimationFrame(this.frameId), this.container.removeEventListener("mousemove", this.onMouseMoveBound), window.removeEventListener("resize", this.onResizeBound), this.renderer.dispose(), this.renderer.domElement.parentNode === this.container && this.container.removeChild(this.renderer.domElement);
  }
};
function Ep(i) {
  const t = document.createElement("canvas");
  t.width = 256, t.height = 256;
  const n = t.getContext("2d"), r = n.createRadialGradient(256 / 2, 256 / 2, 0, 256 / 2, 256 / 2, 256 / 2), s = "#" + i.toString(16).padStart(6, "0");
  r.addColorStop(0, s + "cc"), r.addColorStop(0.4, s + "55"), r.addColorStop(1, s + "00"), n.fillStyle = r, n.fillRect(0, 0, 256, 256);
  const o = new mp(t), a = new Yo({ map: o, blending: rs, depthWrite: !1, transparent: !0 });
  return new dp(a);
}
let yp = class {
  constructor(e, t = {}) {
    this.frameId = 0, this.mouse = { x: 0, y: 0 }, this.targetRot = { x: 0, y: 0 }, this.clock = new wi(), this.container = e, this.opts = {
      width: t.width ?? 2.8,
      height: t.height ?? 4,
      color: t.color ?? 986906,
      glowColor: t.glowColor ?? 6514417,
      glowIntensity: t.glowIntensity ?? 1.2,
      image: t.image ?? "",
      floatSpeed: t.floatSpeed ?? 1,
      tiltStrength: t.tiltStrength ?? 0.3,
      pulseSpeed: t.pulseSpeed ?? 1.5
    }, this.scene = new bi(), this.camera = new pt(45, e.clientWidth / e.clientHeight, 0.1, 100), this.camera.position.z = 8, this.renderer = new oi({ antialias: !0, alpha: !0 }), this.renderer.setSize(e.clientWidth, e.clientHeight), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), e.appendChild(this.renderer.domElement), this.buildCard(), this.buildGlow(), this.addLights(), this.onMouseMoveBound = this.onMouseMove.bind(this), this.onResizeBound = this.onResize.bind(this), e.addEventListener("mousemove", this.onMouseMoveBound), window.addEventListener("resize", this.onResizeBound), this.animate();
  }
  buildCard() {
    const { width: e, height: t, color: n, glowColor: r, image: s } = this.opts, o = new Ln(e, t, 0.06), a = s ? new fr({
      map: new $o().load(s),
      emissive: new ye(r),
      emissiveIntensity: 0.15
    }) : new fr({
      color: new ye(n),
      emissive: new ye(r),
      emissiveIntensity: 0.25,
      metalness: 0.6,
      roughness: 0.2
    });
    this.mesh = new Gt(o, a), this.scene.add(this.mesh);
  }
  buildGlow() {
    this.glowSprite = Ep(this.opts.glowColor), this.glowSprite.scale.set(6, 8, 1), this.glowSprite.position.z = -0.5, this.scene.add(this.glowSprite);
  }
  addLights() {
    this.scene.add(new ws(16777215, 0.3));
    const e = new pr(this.opts.glowColor, this.opts.glowIntensity * 2, 20);
    e.position.set(0, 0, 3), this.scene.add(e);
    const t = new pr(16777215, 0.8, 15);
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
    const e = this.clock.getElapsedTime(), { floatSpeed: t, tiltStrength: n, pulseSpeed: r, glowIntensity: s } = this.opts;
    this.mesh.position.y = Math.sin(e * t) * 0.15, this.glowSprite.position.y = this.mesh.position.y, this.targetRot.x += (this.mouse.y * n - this.targetRot.x) * 0.06, this.targetRot.y += (this.mouse.x * n - this.targetRot.y) * 0.06, this.mesh.rotation.x = this.targetRot.x, this.mesh.rotation.y = this.targetRot.y, this.glowSprite.rotation.z = this.targetRot.y * 0.3;
    const o = 0.5 + Math.sin(e * r) * 0.25;
    this.glowSprite.material.opacity = o * s;
    const a = this.mesh.material;
    a.emissiveIntensity = 0.15 + Math.sin(e * r) * 0.1, this.renderer.render(this.scene, this.camera);
  }
  destroy() {
    cancelAnimationFrame(this.frameId), this.container.removeEventListener("mousemove", this.onMouseMoveBound), window.removeEventListener("resize", this.onResizeBound), this.renderer.dispose(), this.renderer.domElement.parentNode === this.container && this.container.removeChild(this.renderer.domElement);
  }
}, Tp = class {
  constructor(e, t = {}) {
    this.frameId = 0, this.clock = new wi(), this.container = e, this.opts = {
      count: t.count ?? 150,
      color: t.color ?? 6514417,
      size: t.size ?? 0.04,
      speed: t.speed ?? 0.08,
      spread: t.spread ?? 10,
      connected: t.connected ?? !0,
      connectionDistance: t.connectionDistance ?? 2.5,
      connectionOpacity: t.connectionOpacity ?? 0.15,
      backgroundColor: t.backgroundColor ?? null
    }, this.scene = new bi(), this.opts.backgroundColor !== null && (this.scene.background = new ye(this.opts.backgroundColor)), this.camera = new pt(60, e.clientWidth / e.clientHeight, 0.1, 100), this.camera.position.z = 12, this.renderer = new oi({ antialias: !0, alpha: this.opts.backgroundColor === null }), this.renderer.setSize(e.clientWidth, e.clientHeight), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), e.appendChild(this.renderer.domElement), this.buildParticles(), this.opts.connected && this.buildLines(), this.onResizeBound = this.onResize.bind(this), window.addEventListener("resize", this.onResizeBound), this.animate();
  }
  buildParticles() {
    const { count: e, spread: t, color: n, size: r } = this.opts, s = new Float32Array(e * 3);
    this.velocities = new Float32Array(e * 3);
    for (let l = 0; l < e; l++)
      s[l * 3] = (Math.random() - 0.5) * t, s[l * 3 + 1] = (Math.random() - 0.5) * t, s[l * 3 + 2] = (Math.random() - 0.5) * t * 0.3, this.velocities[l * 3] = (Math.random() - 0.5) * 4e-3, this.velocities[l * 3 + 1] = (Math.random() - 0.5) * 4e-3, this.velocities[l * 3 + 2] = 0;
    const o = new At();
    o.setAttribute("position", new Tt(s, 3));
    const a = new As({
      color: new ye(n),
      size: r,
      sizeAttenuation: !0,
      transparent: !0,
      opacity: 0.85
    });
    this.particles = new Zo(o, a), this.scene.add(this.particles);
  }
  buildLines() {
    const e = new At(), t = this.opts.count * this.opts.count;
    e.setAttribute("position", new Tt(new Float32Array(t * 6), 3));
    const n = new Ko({
      color: new ye(this.opts.color),
      transparent: !0,
      opacity: this.opts.connectionOpacity
    });
    this.lines = new pp(e, n), this.scene.add(this.lines);
  }
  updateLines() {
    const e = this.particles.geometry.attributes.position.array, t = this.lines.geometry.attributes.position, n = t.array, r = this.opts.connectionDistance, s = this.opts.count;
    let o = 0;
    for (let a = 0; a < s; a++)
      for (let l = a + 1; l < s; l++) {
        const c = e[a * 3] - e[l * 3], h = e[a * 3 + 1] - e[l * 3 + 1];
        Math.sqrt(c * c + h * h) < r && (n[o++] = e[a * 3], n[o++] = e[a * 3 + 1], n[o++] = e[a * 3 + 2], n[o++] = e[l * 3], n[o++] = e[l * 3 + 1], n[o++] = e[l * 3 + 2]);
      }
    this.lines.geometry.setDrawRange(0, o / 3), t.needsUpdate = !0;
  }
  onResize() {
    const e = this.container.clientWidth, t = this.container.clientHeight;
    this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t);
  }
  animate() {
    this.frameId = requestAnimationFrame(this.animate.bind(this));
    const { count: e, spread: t, speed: n } = this.opts, r = t / 2, s = this.particles.geometry.attributes.position.array;
    for (let o = 0; o < e; o++)
      s[o * 3] += this.velocities[o * 3] * n * 10, s[o * 3 + 1] += this.velocities[o * 3 + 1] * n * 10, s[o * 3] > r && (s[o * 3] = -r), s[o * 3] < -r && (s[o * 3] = r), s[o * 3 + 1] > r && (s[o * 3 + 1] = -r), s[o * 3 + 1] < -r && (s[o * 3 + 1] = r);
    this.particles.geometry.attributes.position.needsUpdate = !0, this.opts.connected && this.updateLines(), this.renderer.render(this.scene, this.camera);
  }
  destroy() {
    cancelAnimationFrame(this.frameId), window.removeEventListener("resize", this.onResizeBound), this.renderer.dispose(), this.renderer.domElement.parentNode === this.container && this.container.removeChild(this.renderer.domElement);
  }
}, Ap = class {
  constructor(e, t = {}) {
    this.ripples = [], this.frameId = 0, this.clock = new wi(), this.container = e, this.opts = {
      color: t.color ?? 6514417,
      maxRipples: t.maxRipples ?? 6,
      duration: t.duration ?? 1.2,
      maxRadius: t.maxRadius ?? 2.5,
      thickness: t.thickness ?? 0.06,
      backgroundColor: t.backgroundColor ?? null
    };
    const n = e.clientWidth, r = e.clientHeight, s = n / r;
    this.scene = new bi(), this.opts.backgroundColor !== null && (this.scene.background = new ye(this.opts.backgroundColor)), this.camera = new Go(-s * 5, s * 5, 5, -5, 0.1, 100), this.camera.position.z = 10, this.renderer = new oi({ antialias: !0, alpha: this.opts.backgroundColor === null }), this.renderer.setSize(n, r), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), e.appendChild(this.renderer.domElement), this.onClickBound = this.onClick.bind(this), this.onResizeBound = this.onResize.bind(this), e.addEventListener("click", this.onClickBound), window.addEventListener("resize", this.onResizeBound), this.animate();
  }
  spawnRipple(e, t) {
    if (this.ripples.length >= this.opts.maxRipples) {
      const o = this.ripples.shift();
      this.scene.remove(o.mesh), o.mesh.geometry.dispose(), o.mesh.material.dispose();
    }
    const n = new dr(0.01, 0.01 + this.opts.thickness, 64), r = new Ss({
      color: new ye(this.opts.color),
      transparent: !0,
      opacity: 1,
      side: kt
    }), s = new Gt(n, r);
    s.position.set(e, t, 0), this.scene.add(s), this.ripples.push({ mesh: s, age: 0, duration: this.opts.duration });
  }
  onClick(e) {
    const t = this.container.getBoundingClientRect(), n = t.width / t.height, r = (e.clientX - t.left) / t.width * 2 - 1, s = -((e.clientY - t.top) / t.height) * 2 + 1, o = r * n * 5, a = s * 5;
    this.spawnRipple(o, a);
  }
  onResize() {
    const e = this.container.clientWidth, t = this.container.clientHeight, n = e / t;
    this.camera.left = -n * 5, this.camera.right = n * 5, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t);
  }
  animate() {
    this.frameId = requestAnimationFrame(this.animate.bind(this));
    const e = this.clock.getDelta(), { maxRadius: t, thickness: n } = this.opts;
    for (let r = this.ripples.length - 1; r >= 0; r--) {
      const s = this.ripples[r];
      s.age += e;
      const o = s.age / s.duration;
      if (o >= 1) {
        this.scene.remove(s.mesh), s.mesh.geometry.dispose(), s.mesh.material.dispose(), this.ripples.splice(r, 1);
        continue;
      }
      const l = (1 - Math.pow(1 - o, 3)) * t;
      s.mesh.geometry.dispose(), s.mesh.geometry = new dr(Math.max(0.01, l - n), l, 64), s.mesh.material.opacity = 1 - o;
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
function bp(i, e, t) {
  const s = document.createElement("canvas");
  s.width = 512, s.height = 160;
  const o = s.getContext("2d");
  o.clearRect(0, 0, 512, 160), o.fillStyle = "#fff", o.font = `bold ${e}px Arial, sans-serif`, o.textAlign = "center", o.textBaseline = "middle", o.fillText(i, 512 / 2, 160 / 2);
  const a = o.getImageData(0, 0, 512, 160), l = [], c = 3;
  for (let d = 0; d < 160; d += c)
    for (let f = 0; f < 512; f += c)
      a.data[(d * 512 + f) * 4 + 3] > 128 && l.push([f, d]);
  const h = new Float32Array(t * 3);
  for (let d = 0; d < t; d++) {
    const [f, m] = l[d % l.length];
    h[d * 3] = (f / 512 - 0.5) * 9, h[d * 3 + 1] = -(m / 160 - 0.5) * 2.8, h[d * 3 + 2] = (Math.random() - 0.5) * 0.2;
  }
  return h;
}
function wp(i) {
  return i < 0.5 ? 2 * i * i : -1 + (4 - 2 * i) * i;
}
let Rp = class {
  constructor(e, t) {
    this.frameId = 0, this.clock = new wi(), this.textPositions = [], this.currentIndex = 0, this.morphProgress = 1, this.intervalId = null, this.container = e, this.opts = {
      texts: t.texts,
      fontSize: t.fontSize ?? 72,
      color: t.color ?? 6514417,
      particleSize: t.particleSize ?? 0.045,
      particleCount: t.particleCount ?? 1800,
      interval: t.interval ?? 2500,
      morphDuration: t.morphDuration ?? 1
    }, this.scene = new bi(), this.camera = new pt(45, e.clientWidth / e.clientHeight, 0.1, 100), this.camera.position.z = 10, this.renderer = new oi({ antialias: !0, alpha: !0 }), this.renderer.setSize(e.clientWidth, e.clientHeight), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), e.appendChild(this.renderer.domElement), this.textPositions = this.opts.texts.map((n) => bp(n, this.opts.fontSize, this.opts.particleCount)), this.fromPositions = this.textPositions[0].slice(), this.toPositions = this.textPositions[0].slice(), this.buildPoints(), this.addLights(), this.startCycle(), this.onResizeBound = this.onResize.bind(this), window.addEventListener("resize", this.onResizeBound), this.animate();
  }
  buildPoints() {
    const e = new At();
    e.setAttribute("position", new Tt(this.fromPositions.slice(), 3));
    const t = new As({
      color: new ye(this.opts.color),
      size: this.opts.particleSize,
      sizeAttenuation: !0,
      transparent: !0,
      opacity: 0.9
    });
    this.points = new Zo(e, t), this.scene.add(this.points);
  }
  addLights() {
    this.scene.add(new ws(16777215, 1));
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
      const t = wp(this.morphProgress), n = this.points.geometry.attributes.position.array, r = this.opts.particleCount;
      for (let s = 0; s < r * 3; s++)
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
function Fp({ className: i, style: e, ...t }) {
  const n = wn(null);
  return Ei(() => {
    if (!n.current) return;
    const r = new Sp(n.current, t);
    return () => r.destroy();
  }, []), /* @__PURE__ */ Si(
    "div",
    {
      ref: n,
      className: i,
      style: { width: "100%", height: "420px", ...e }
    }
  );
}
function Op({ className: i, style: e, ...t }) {
  const n = wn(null);
  return Ei(() => {
    if (!n.current) return;
    const r = new yp(n.current, t);
    return () => r.destroy();
  }, []), /* @__PURE__ */ Si(
    "div",
    {
      ref: n,
      className: i,
      style: { width: "100%", height: "420px", ...e }
    }
  );
}
function Bp({ className: i, style: e, ...t }) {
  const n = wn(null);
  return Ei(() => {
    if (!n.current) return;
    const r = new Tp(n.current, t);
    return () => r.destroy();
  }, []), /* @__PURE__ */ Si(
    "div",
    {
      ref: n,
      className: i,
      style: { width: "100%", height: "100%", position: "absolute", inset: 0, ...e }
    }
  );
}
const zp = fo(
  function({ className: e, style: t, ...n }, r) {
    const s = wn(null), o = wn(null);
    return Ei(() => {
      if (s.current)
        return o.current = new Ap(s.current, n), () => {
          var a;
          return (a = o.current) == null ? void 0 : a.destroy();
        };
    }, []), po(r, () => ({
      trigger: () => {
        var a;
        return (a = o.current) == null ? void 0 : a.trigger();
      }
    })), /* @__PURE__ */ Si(
      "div",
      {
        ref: s,
        className: e,
        style: { width: "100%", height: "300px", cursor: "pointer", ...t }
      }
    );
  }
), Gp = fo(
  function({ className: e, style: t, ...n }, r) {
    const s = wn(null), o = wn(null);
    return Ei(() => {
      if (s.current)
        return o.current = new Rp(s.current, n), () => {
          var a;
          return (a = o.current) == null ? void 0 : a.destroy();
        };
    }, []), po(r, () => ({
      next: () => {
        var a;
        return (a = o.current) == null ? void 0 : a.next();
      }
    })), /* @__PURE__ */ Si(
      "div",
      {
        ref: s,
        className: e,
        style: { width: "100%", height: "180px", ...t }
      }
    );
  }
);
export {
  Sp as FloatingCard,
  Fp as FloatingCardReact,
  yp as GlowCard,
  Op as GlowCardReact,
  Rp as MorphText,
  Gp as MorphTextReact,
  Tp as ParticleBackground,
  Bp as ParticleBackgroundReact,
  Ap as RippleEffect,
  zp as RippleEffectReact
};
