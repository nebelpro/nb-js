/**
 * 随机一个十六进制的颜色值
 * @returns {string}
 */
export function randomColor() {
  return "#" + (function (h) {
      return new Array(7 - h.length).join("0") + h
    })((Math.random() * 0x1000000 << 0).toString(16));
}
