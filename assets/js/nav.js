(function () {
  var page = window.location.pathname.split('/').pop() || 'index.html';

  function a(href) { return page === href ? ' class="active"' : ''; }

  var visiePages  = ['visie-passion-swirl.html','visie-leiderschap.html','visie-hoe-wij-werken.html','visie-assessment.html'];
  var sectorPages = ['sector-industrie.html','sector-glastuinbouw.html'];
  var visieActive  = visiePages.indexOf(page)  !== -1;
  var sectorActive = sectorPages.indexOf(page) !== -1;

  var html = '<nav id="main-nav">'
    + '<a href="index.html" class="nav-logo"><img src="assets/img/ewp-logo-v3-nav.png" alt="Excellence with Passion" class="nav-logo-img"></a>'
    + '<button class="nav-hamburger" id="nav-hamburger" aria-label="Menu openen" aria-expanded="false"><span></span><span></span><span></span></button>'
    + '<div class="nav-overlay" id="nav-overlay"></div>'
    + '<ul class="nav-links" id="nav-links">'

    /* Visie dropdown */
    + '<li class="has-dropdown' + (visieActive ? ' parent-active' : '') + '">'
    + '<button class="nav-dropdown-toggle' + (visieActive ? ' active' : '') + '" aria-expanded="false">'
    + 'Visie<svg class="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    + '</button>'
    + '<ul class="nav-dropdown-menu">'
    + '<li><a href="visie-passion-swirl.html"' + a('visie-passion-swirl.html') + '>De Passion Swirl</a></li>'
    + '<li><a href="visie-leiderschap.html"'   + a('visie-leiderschap.html')   + '>Leiderschap</a></li>'
    + '<li><a href="visie-hoe-wij-werken.html"' + a('visie-hoe-wij-werken.html') + '>Hoe wij werken</a></li>'
    + '<li><a href="visie-assessment.html"'    + a('visie-assessment.html')    + '>Assessment</a></li>'
    + '</ul></li>'

    /* Sectoren dropdown */
    + '<li class="has-dropdown' + (sectorActive ? ' parent-active' : '') + '">'
    + '<button class="nav-dropdown-toggle' + (sectorActive ? ' active' : '') + '" aria-expanded="false">'
    + 'Sectoren<svg class="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    + '</button>'
    + '<ul class="nav-dropdown-menu">'
    + '<li><a href="sector-industrie.html"'    + a('sector-industrie.html')    + '><span class="nav-icon" aria-hidden="true">&#9881;</span>Industrie &amp; Maakindustrie</a></li>'
    + '<li><a href="sector-glastuinbouw.html"' + a('sector-glastuinbouw.html') + '><span class="nav-icon" aria-hidden="true">&#127807;</span>Glastuinbouw &amp; Tuinbouw</a></li>'
    + '</ul></li>'

    /* Succesverhalen */
    + '<li><a href="succesverhaal-bakkerij-fuite.html"' + a('succesverhaal-bakkerij-fuite.html') + '>Succesverhalen</a></li>'

    /* CTA */
    + '<li><a href="contact.html" class="nav-cta' + (page === 'contact.html' ? ' active' : '') + '">Plan een gesprek</a></li>'

    + '</ul></nav>';

  /* Inject synchronously before this script tag */
  document.currentScript.insertAdjacentHTML('beforebegin', html);

  /* Interactions after DOM is ready */
  document.addEventListener('DOMContentLoaded', function () {
    var nav       = document.getElementById('main-nav');
    var burger    = document.getElementById('nav-hamburger');
    var overlay   = document.getElementById('nav-overlay');
    var toggles   = nav.querySelectorAll('.nav-dropdown-toggle');

    function closeAll() {
      nav.querySelectorAll('.has-dropdown.open').forEach(function (li) { li.classList.remove('open'); });
      toggles.forEach(function (t) { t.setAttribute('aria-expanded', 'false'); });
    }

    /* Hamburger */
    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = nav.classList.toggle('menu-open');
      burger.setAttribute('aria-expanded', String(open));
    });

    overlay.addEventListener('click', function () {
      nav.classList.remove('menu-open');
      burger.setAttribute('aria-expanded', 'false');
      closeAll();
    });

    /* Dropdown toggles (click on mobile AND desktop for keyboard access) */
    toggles.forEach(function (toggle) {
      toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        var li     = this.closest('.has-dropdown');
        var isOpen = li.classList.contains('open');
        closeAll();
        if (!isOpen) {
          li.classList.add('open');
          this.setAttribute('aria-expanded', 'true');
        }
      });
    });

    /* Close on outside click */
    document.addEventListener('click', closeAll);

    /* Close on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeAll();
        nav.classList.remove('menu-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  });
}());
