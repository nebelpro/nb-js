export let getBounds = function (elem) {
  var docElem = document.documentElement,
    box = elem.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset - docElem.clientTop,
    left: box.left + window.pageXOffset - docElem.clientLeft,
    height: box.height,
    width:box.width
  };
};
