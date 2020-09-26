!(function (window) {
  const $q = function (q, res) {
    if (document.querySelectorAll) {
      res = document.querySelectorAll(q);
    } else {
      const d = document;
      const a = d.styleSheets[0] || d.createStyleSheet();
      a.addRule(q, 'f:b');
      for (var l = d.all, b = 0, c = [], f = l.length; b < f; b++)
        l[b].currentStyle.f && c.push(l[b]);

      a.removeRule(0);
      res = c;
    }
    return res;
  };
  const addEventListener = function (evt, fn) {
    window.addEventListener ?
      this.addEventListener(evt, fn, false) :
      window.attachEvent ?
      this.attachEvent(`on${evt}`, fn) :
      (this[`on${evt}`] = fn);
  };
  const _has = function (obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  };

  function loadImage(el, fn) {
    const img = new Image();
    const src = el.getAttribute('data-src');
    img.onload = function () {
      if (el.parent) el.parent.replaceChild(img, el);
      else el.src = src;

      fn ? fn() : null;
    };
    img.src = src;
  }

  function elementInViewport(el) {
    const rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  const images = new Array();
  const query = $q('img.lazy');
  const processScroll = function () {
    for (var i = 0; i < images.length; i++) {
      if (elementInViewport(images[i])) {
        loadImage(images[i], () => {
          images.splice(i, i);
        });
      }
    }
  };
  // Array.prototype.slice.call is not callable under our lovely IE8
  for (let i = 0; i < query.length; i++) {
    images.push(query[i]);
  }

  processScroll();
  addEventListener('scroll', processScroll);
})(this);