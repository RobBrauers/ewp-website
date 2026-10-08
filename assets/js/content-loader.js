(function () {
  var page = (window.location.pathname.split('/').pop() || 'index').replace('.html', '') || 'index';
  fetch('content/' + page + '.json')
    .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
    .then(function (d) {
      Object.keys(d).forEach(function (k) {
        document.querySelectorAll('[data-cms="' + k + '"]').forEach(function (el) {
          el.innerHTML = d[k].replace(/\n/g, '<br>');
        });
      });
      document.dispatchEvent(new CustomEvent('cms-loaded'));
    })
    .catch(function () {
      document.dispatchEvent(new CustomEvent('cms-loaded'));
    });
})();
