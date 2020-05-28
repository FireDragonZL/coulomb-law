// 参考 https://github.com/ecomfe/zrender/blob/master/src/core/vector.js

type Vector = [number, number];

/**
 * 创建向量
 * @param a
 * @param b
 */
export const create = (a: number, b: number): Vector => {
  return [a, b];
};

/**
 * 获取符号
 */
export const getSign = (a: Vector) => {
  return create(a[0] / Math.abs(a[0]), a[1] / Math.abs(a[1]));
};

/**
 * 向量相加
 * @param out
 * @param a
 * @param b
 */
export const add = (out: Vector, a: Vector, b: Vector) => {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
};

/**
 * 向量相减
 * @param {Vector2} out
 * @param {Vector2} v1
 * @param {Vector2} v2
 */
export function sub(out: Vector, v1: Vector, v2: Vector) {
  out[0] = v1[0] - v2[0];
  out[1] = v1[1] - v2[1];
  return out;
}

/**
 * 向量相乘
 * @param {Vector2} out
 * @param {Vector2} v1
 * @param {Vector2} v2
 */
export function mul(out: Vector, v1: Vector, v2: Vector) {
  out[0] = v1[0] * v2[0];
  out[1] = v1[1] * v2[1];
  return out;
}

/**
 * 向量相除
 * @param {Vector2} out
 * @param {Vector2} v1
 * @param {Vector2} v2
 */
export function div(out: Vector, v1: Vector, v2: Vector) {
  out[0] = v1[0] / v2[0];
  out[1] = v1[1] / v2[1];
  return out;
}

/**
 * 求负向量
 * @param {Vector2} out
 * @param {Vector2} v
 */
export function negate(out: Vector, v: Vector) {
  out[0] = -v[0];
  out[1] = -v[1];
  return out;
}

/**
 * 向量缩放后相加
 * @param out
 * @param v1
 * @param v2
 * @param a
 */
export const scaleAndAdd = (out: Vector, v1: Vector, v2: Vector, a: number) => {
  out[0] = v1[0] + v2[0] * a;
  out[1] = v1[1] + v2[1] * a;
  return out;
};

/**
 * 向量缩放
 * @param out
 * @param v
 * @param s
 */
export function scale(out: Vector, v: Vector, s: number) {
  out[0] = v[0] * s;
  out[1] = v[1] * s;
  return out;
}

/**
 * 向量平方和
 * @param v
 */
export function lenSquare(v: Vector) {
  return v[0] * v[0] + v[1] * v[1];
}

/**
 * 向量长度
 * @param v
 */
export function len(v: Vector) {
  return Math.sqrt(lenSquare(v));
}

/**
 * 点乘
 * @param a
 * @param b
 */
export const dot = (a: Vector, b: Vector) => {
  return a[0] * b[0] + a[1] * b[1];
};

/**
 * 向量修改
 * @param out
 * @param a
 * @param b
 */
export const set = (out: Vector, a: number, b: number) => {
  out[0] = a;
  out[1] = b;
  return out;
};

/**
 * 计算向量间距离
 * @param {Vector2} v1
 * @param {Vector2} v2
 * @return {number}
 */
export function distance(v1: Vector, v2: Vector) {
  return Math.sqrt(
    (v1[0] - v2[0]) * (v1[0] - v2[0]) + (v1[1] - v2[1]) * (v1[1] - v2[1])
  );
}

/**
 * 限制范围
 * @param out
 * @param min
 * @param max
 */
export function limit(out: Vector, min: number, max: number) {
  if (out[0] > max) {
    set(out, max, out[1]);
  }
  if (out[0] < min) {
    set(out, min, out[1]);
  }
  if (out[1] > max) {
    set(out, out[0], max);
  }
  if (out[1] < min) {
    set(out, out[0], -min);
  }
  return out;
}
