export let countLines = function (ele) {
  var styles = window.getComputedStyle(ele, null);
  var lh = parseInt(styles.lineHeight, 10);
  var h = parseInt(styles.height, 10);

  return Math.round(h / lh);
}

export let singleLineHeight = function (el) {
  var styles = window.getComputedStyle(ele, null);
  var fontSize = parseInt(styles.fontSize, 10);
  var h = parseInt(styles.height, 10);

  return h / fontSize
}
