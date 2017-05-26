import {getBounds} from '../offest/getBounds'
import {lettering} from './lettering'

function updateHeight(letters, center, elem) {
  var mid = getBounds(letters[center]),
    first = getBounds(letters[0]),
    h;
  if (mid.top < first.top) {
    h = first.top - mid.top + first.height;
  } else {
    h = mid.top - first.top + first.height;
  }
  elem.style.height = h + 'px';
}


export let circleType = function (elem, options = {}) {

  var settings = {
    dir: 1,
    position: 'relative',
  };

  Object.assign(settings, options);

  var styles = window.getComputedStyle(elem, null);
  var delta = (180 / Math.PI),
    fs = parseInt(styles.fontSize, 10),
    ch = parseInt(styles.lineHeight, 10) || fs,
    txt = elem.innerHTML.replace(/^\s+|\s+$/g, '').replace(/\s/g, '&nbsp;'),
    letters,
    center;

  elem.setAttribute('aria-label', txt)
  elem.innerHTML = lettering.char(elem.textContent)
  elem.style.position = settings.position;

  letters = elem.getElementsByTagName('span');
  center = Math.floor(letters.length / 2)

  var layout = function () {
    var tw = 0,
      i,
      offset = 0,
      minRadius,
      origin,
      innerRadius,
      l, style, r, transform;

    for (i = 0; i < letters.length; i++) {
      tw += letters[i].offsetWidth;
    }
    minRadius = (tw / Math.PI) / 2 + ch;

    if (settings.fluid) {
      settings.radius = Math.max(elem.offsetWidth / 2, minRadius);
    }
    else if (!settings.radius) {
      settings.radius = minRadius;
    }

    if (settings.dir === -1) {
      origin = 'center ' + (-settings.radius + ch) / fs + 'em';
    } else {
      origin = 'center ' + settings.radius / fs + 'em';
    }

    innerRadius = settings.radius - ch;

    for (i = 0; i < letters.length; i++) {
      l = letters[i];
      offset += l.offsetWidth / 2 / innerRadius * delta;
      l.rot = offset;
      offset += l.offsetWidth / 2 / innerRadius * delta;
    }
    for (i = 0; i < letters.length; i++) {
      l = letters[i]
      style = l.style
      r = (-offset * settings.dir / 2) + l.rot * settings.dir
      transform = 'rotate(' + r + 'deg)';

      style.position = 'absolute';
      style.left = '50%';
      style.marginLeft = -(l.offsetWidth / 2) / fs + 'em';

      style.webkitTransform = transform;
      style.MozTransform = transform;
      style.OTransform = transform;
      style.msTransform = transform;
      style.transform = transform;

      style.webkitTransformOrigin = origin;
      style.MozTransformOrigin = origin;
      style.OTransformOrigin = origin;
      style.msTransformOrigin = origin;
      style.transformOrigin = origin;
      if (settings.dir === -1) {
        style.bottom = 0;
      }
    }

    updateHeight(letters, center, elem)


    if (typeof settings.callback === 'function') {
      // Execute our callback with the element we transformed as `this`
      settings.callback.apply(elem);
    }
  };

  layout();
};


