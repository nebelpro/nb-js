/**
 * 字符截取
 * @param str
 * @param n
 * @param appendFix
 * @returns {*}
 */
export default function (str, n, appendFix = '...') {
  var r = /[^\x00-\xff]/g
  if (str.replace(r, 'mm').length <= n) {return str}
  var m = Math.floor(n / 2)
  for (var i = m; i < str.length; i++) {
    if (str.substr(0, i).replace(r, 'mm').length >= n) {
      return str.substr(0, i) + appendFix
    }
  }
  return str
}
