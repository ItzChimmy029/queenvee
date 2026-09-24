(function () {
  'use strict';
  var VEE = window.VEE;
  if (!VEE) return;
  var B = VEE.business;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var naira = function (n) { return '₦' + n.toLocaleString('en-NG'); };
  var priceLabel = function (svc) {
    if (!svc.price) return 'Price on consultation';
    return naira(svc.price) + (svc.unit ? ' / ' + svc.unit : '');
  };
  var wa = function (text) { return 'https://wa.me/' + B.whatsapp + '?text=' + encodeURIComponent(text); };
  var byId = function (id) { return VEE.services.filter(function (x) { return x.id === id; })[0]; };
  var catLabel = function (id) {
    var c = VEE.categories.filter(function (x) { return x.id === id; })[0];
    return c ? c.label : '';
  };

  /* Shared links, year, icons */
  $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  $$('[data-whatsapp]').forEach(function (el) {
    el.href = wa('Hello Vee Skincare N’ Spa, I would like to make an enquiry.');
  });
  $$('[data-call]').forEach(function (el) { el.href = 'tel:' + B.phone; });
  $$('[data-book]').forEach(function (el) {
    el.href = 'booking.html';
    el.removeAttribute('target');
    el.removeAttribute('rel');
  });

  var ICONS = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 20.5l1.3-4.4A8.5 8.5 0 1 1 8 19.3z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8c-1-.4-1.9-1.3-2.3-2.3l.8-1-1-2z" fill="currentColor" stroke="none"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/></svg>',
    location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>'
  };
  $$('[data-icon]').forEach(function (el) {
    if (ICONS[el.dataset.icon]) el.insertAdjacentHTML('afterbegin', ICONS[el.dataset.icon]);
  });
  $$('.whatsapp-float').forEach(function (el) { el.innerHTML = ICONS.whatsapp; });

  $$('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!navigator.clipboard) { window.location.href = 'mailto:' + btn.dataset.copy; return; }
      navigator.clipboard.writeText(btn.dataset.copy).then(function () {
        btn.classList.add('is-done');
        setTimeout(function () { btn.classList.remove('is-done'); }, 1600);
      });
    });
  });

  /* Navigation */
  var toggle = $('.menu-toggle'), menu = $('#mobile-navigation'), header = $('.site-header');
  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.setAttribute('aria-hidden', String(!open));
    menu.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  }
  if (toggle && menu) {
    toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }
  var here = location.pathname.split('/').pop() || 'index.html';
  $$('.nav-links a, .mobile-menu a').forEach(function (a) {
    if (a.getAttribute('href') === here) a.setAttribute('aria-current', 'page');
  });
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 40); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Treatment menu rows (home) — shows the curated featured set */
  $$('[data-treatment-list]').forEach(function (box) {
    var limit = parseInt(box.dataset.limit, 10) || VEE.services.length;
    var rows = VEE.services.filter(function (x) { return x.featured; });
    if (!rows.length) rows = VEE.services;
    rows = rows.slice(0, limit);
    box.innerHTML = rows.map(function (x, i) {
      return '<a class="treatment-row reveal" href="booking.html?service=' + x.id + '"><span class="treatment-row__number">' + String(i + 1).padStart(2, '0') +
        '</span><span class="treatment-row__name">' + x.name + '<small>' + catLabel(x.category) + '</small></span><span class="treatment-row__price' + (x.price ? '' : ' treatment-row__price--ask') + '">' +
        priceLabel(x) + '</span><span class="treatment-row__arrow" aria-hidden="true">↗</span></a>';
    }).join('');
  });

  /* Service catalogue: filters, search, cards */
  function initCatalogue(list) {
    var scope = list.closest('[data-page]') || document;
    var limit = parseInt(list.dataset.limit, 10) || 0;
    var params = new URLSearchParams(location.search);
    var state = { cat: params.get('category') || 'All', q: '' };
    var filters = $$('.filter', scope), count = $('[data-service-count]', scope), search = $('[data-service-search]', scope);
    function render() {
      var q = state.q.trim().toLowerCase();
      var rows = VEE.services.filter(function (x) {
        var inCat = state.cat === 'All' || x.category === state.cat;
        return inCat && (!q || (x.name + ' ' + catLabel(x.category)).toLowerCase().indexOf(q) > -1);
      });
      if (limit) rows = rows.slice(0, limit);
      list.innerHTML = '';
      rows.forEach(function (x) {
        var card = document.createElement('article');
        card.className = 'service-card';
        card.innerHTML = '<p class="eyebrow"></p><h3></h3><div class="service-card__meta"><p class="service-card__price"></p><a class="service-card__book">Book <span aria-hidden="true">↗</span></a></div>';
        $('.eyebrow', card).textContent = catLabel(x.category);
        $('h3', card).textContent = x.name;
        var priceEl = $('.service-card__price', card);
        priceEl.textContent = priceLabel(x);
        if (!x.price) priceEl.classList.add('service-card__price--ask');
        $('.service-card__book', card).href = 'booking.html?service=' + x.id;
        list.appendChild(card);
      });
      if (!rows.length) {
        var empty = document.createElement('p');
        empty.className = 'notice';
        empty.innerHTML = 'Treatments in this category are shared directly by Vee. <a class="text-link" target="_blank" rel="noopener">Ask on WhatsApp <span aria-hidden="true">↗</span></a>';
        $('a', empty).href = wa('Hello Vee Skincare N’ Spa, please share your ' + (catLabel(state.cat) || 'treatment') + ' services and prices.');
        list.appendChild(empty);
      }
      if (count) count.textContent = rows.length + (rows.length === 1 ? ' treatment' : ' treatments');
      filters.forEach(function (f) {
        var on = f.dataset.filter === state.cat;
        f.classList.toggle('active', on);
        f.setAttribute('aria-pressed', String(on));
      });
    }
    filters.forEach(function (f) { f.addEventListener('click', function () { state.cat = f.dataset.filter; render(); }); });
    if (search) search.addEventListener('input', function () { state.q = search.value; render(); });
    render();
  }
  $$('[data-service-list]').forEach(initCatalogue);

  /* Booking form -> WhatsApp enquiry (never claims a confirmation) */
  var form = $('[data-booking-form]');
  if (form) {
    var select = $('[name="service"]', form), dateInput = $('[name="date"]', form), status = $('.form-status', form);
    select.insertAdjacentHTML('beforeend', VEE.services.map(function (x) {
      return '<option value="' + x.id + '">' + x.name + ' — ' + priceLabel(x) + '</option>';
    }).join('') + '<option value="consultation">Not sure yet — I need a consultation</option>');
    var pre = new URLSearchParams(location.search).get('service');
    if (pre && $('option[value="' + pre + '"]', select)) select.value = pre;
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var iso = function (d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
    dateInput.min = iso(today);
    var setError = function (name, msg) {
      var field = $('[name="' + name + '"]', form).closest('.field');
      field.classList.toggle('has-error', !!msg);
      $('.field-error', field).textContent = msg || '';
      return !msg;
    };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = { name: form.name.value.trim(), service: select.value, date: dateInput.value, time: form.time.value, notes: form.notes.value.trim() };
      var day = v.date ? new Date(v.date + 'T00:00:00') : null;
      var ok = [
        setError('name', v.name.length < 2 ? 'Please enter your name.' : ''),
        setError('service', v.service ? '' : 'Please choose a treatment.'),
        setError('date', !day ? 'Please choose a preferred date.' : day < today ? 'Please choose a date from today onward.' : day.getDay() === 0 ? 'Vee is closed on Sundays — please pick Monday to Saturday.' : '')
      ].every(Boolean);
      if (!ok) { status.hidden = true; return; }
      var svc = byId(v.service);
      var lines = ['Hello Vee Skincare N’ Spa, I would like to request an appointment.',
        'Name: ' + v.name,
        'Treatment: ' + (svc ? svc.name + ' (' + priceLabel(svc) + ')' : 'Consultation — not sure yet'),
        'Preferred date: ' + day.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
        'Preferred time: ' + v.time];
      if (v.notes) lines.push('Notes: ' + v.notes);
      var url = wa(lines.join('\n'));
      status.hidden = false;
      status.innerHTML = 'Your request is ready. WhatsApp will open so you can send it to Vee — <strong>this is an enquiry, not a confirmed appointment</strong>; Vee will confirm availability with you. <a class="text-link" target="_blank" rel="noopener">Open WhatsApp ↗</a>';
      $('a', status).href = url;
      window.open(url, '_blank', 'noopener');
    });
  }

  /* Scroll reveal */
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
    }, { threshold: .12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* Intro: auto-enters after a soothing beat, no click required.
     Still skippable by tap, Escape, or scroll/click-through, and never
     traps focus or blocks access once it has played once per session. */
  var intro = $('#intro-screen');
  if (intro) {
    var seen = false;
    try { seen = sessionStorage.getItem('vee-intro') === '1'; } catch (err) { seen = false; }
    var closed = false;
    var close = function () {
      if (closed) return;
      closed = true;
      intro.classList.add('is-leaving');
      document.body.classList.remove('intro-active');
      try { sessionStorage.setItem('vee-intro', '1'); } catch (err) { /* storage unavailable */ }
      setTimeout(function () { intro.hidden = true; }, reduced ? 0 : 1100);
    };
    if (seen) {
      intro.hidden = true;
    } else {
      document.body.classList.add('intro-active');
      $$('[data-intro-close]', intro).forEach(function (b) { b.addEventListener('click', close); });
      intro.addEventListener('click', function (e) { if (e.target === intro) close(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !intro.hidden) close(); });
      var skip = $('.intro__skip', intro);
      if (skip) skip.focus({ preventScroll: true });
      setTimeout(close, reduced ? 0 : 4200);
    }
  }

  /* Scroll-to-top */
  var toTop = $('.to-top');
  if (toTop) {
    var toggleTop = function () { toTop.classList.toggle('is-visible', window.scrollY > 560); };
    toggleTop();
    window.addEventListener('scroll', toggleTop, { passive: true });
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    });
  }
})();
