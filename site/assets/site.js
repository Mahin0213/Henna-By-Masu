(function () {
  "use strict";
  document.documentElement.classList.add("js-reveal");

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = el.getAttribute("data-reveal-delay") || 0;
          setTimeout(function () { el.classList.add("is-visible"); }, Number(delay));
          io.unobserve(el);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -10% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Homepage header background ---------- */
  function initHeader() {
    var header = document.getElementById("site-header");
    var hero = document.getElementById("top");
    if (!header || !hero) return;
    var ticking = false;
    function update() {
      ticking = false;
      var past = window.scrollY > hero.offsetHeight - header.offsetHeight;
      header.classList.toggle("is-scrolled", past);
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* ---------- Header menu overlay ---------- */
  function initMenu() {
    var btn = document.getElementById("menu-btn");
    var overlay = document.getElementById("menu-overlay");
    if (!btn || !overlay) return;
    var openIcon = document.getElementById("menu-btn-open-icon");
    var closeIcon = document.getElementById("menu-btn-close-icon");
    var label = document.getElementById("menu-btn-label");
    var hideTimer = null;
    function setOpen(open) {
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      overlay.setAttribute("aria-hidden", open ? "false" : "true");
      // [hidden] keeps the overlay out of the page when closed; it has to be
      // lifted before the fade-in and restored only after the fade-out.
      clearTimeout(hideTimer);
      if (open) {
        overlay.hidden = false;
        void overlay.offsetWidth;
        overlay.classList.add("is-open");
      } else {
        overlay.classList.remove("is-open");
        hideTimer = setTimeout(function () { overlay.hidden = true; }, 500);
      }
      if (openIcon) openIcon.hidden = open;
      if (closeIcon) closeIcon.hidden = !open;
      if (label) label.textContent = open ? "Close" : "Menu";
      overlay.querySelectorAll("a").forEach(function (a) { a.tabIndex = open ? 0 : -1; });
      if (open) document.addEventListener("keydown", onKey);
      else document.removeEventListener("keydown", onKey);
    }
    function onKey(e) { if (e.key === "Escape") setOpen(false); }
    btn.addEventListener("click", function () {
      setOpen(btn.getAttribute("aria-expanded") !== "true");
    });
    overlay.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
  }

  /* ---------- Hero video controls ---------- */
  // The hero clip is a decorative full-bleed background loop, not content —
  // on phones it costs real money and battery on a cellular connection for
  // no benefit over the poster frame, so it is never fetched there at all.
  // preload="none" plus no `src` in the static HTML (only `data-src`) means a
  // mobile visitor downloads zero bytes of video; only this script — and
  // only on wider viewports — ever assigns `src` and starts playback.
  function initHero() {
    var video = document.getElementById("hero-video");
    var btn = document.getElementById("hero-video-toggle");
    var bar = document.getElementById("hero-progress-bar");
    var controls = document.getElementById("hero-video-controls");
    var track = document.getElementById("hero-progress-track");
    if (!video || !btn) return;
    if (!window.matchMedia("(min-width: 768px)").matches) {
      if (controls) controls.hidden = true;
      if (track) track.hidden = true;
      return;
    }
    var src = video.getAttribute("data-src");
    if (src) { video.setAttribute("src", src); video.load(); }
    video.play().catch(function () {});
    var playIcon = document.getElementById("hero-ctl-play");
    var pauseIcon = document.getElementById("hero-ctl-pause");
    function sync() {
      var playing = !video.paused;
      btn.setAttribute("aria-label", playing ? "Pause background video" : "Play background video");
      if (playIcon) playIcon.hidden = playing;
      if (pauseIcon) pauseIcon.hidden = !playing;
    }
    btn.addEventListener("click", function () {
      if (video.paused) video.play(); else video.pause();
    });
    video.addEventListener("play", sync);
    video.addEventListener("pause", sync);
    video.addEventListener("timeupdate", function () {
      if (bar && video.duration) bar.style.width = (video.currentTime / video.duration * 100) + "%";
    });
    sync();
  }

  /* ---------- Gallery filter + lightbox ---------- */
  function initGallery() {
    var grid = document.getElementById("gallery-grid");
    var dataEl = document.getElementById("gallery-data");
    if (!grid || !dataEl) return;
    var items = JSON.parse(dataEl.textContent);
    var tiles = Array.prototype.slice.call(grid.querySelectorAll(".gallery-tile"));
    var filterBtns = Array.prototype.slice.call(document.querySelectorAll(".filter-btn"));
    var visibleIndexes = items.map(function (_, i) { return i; });

    function applyFilter(cat) {
      visibleIndexes = [];
      tiles.forEach(function (tile, i) {
        var match = cat === "All" || tile.getAttribute("data-cat") === cat;
        tile.hidden = !match;
        if (match) visibleIndexes.push(i);
      });
      filterBtns.forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-filter") === cat ? "true" : "false"); });
    }
    filterBtns.forEach(function (b) {
      b.addEventListener("click", function () { applyFilter(b.getAttribute("data-filter")); });
    });

    var lightbox = document.getElementById("lightbox");
    if (!lightbox) return;
    var mediaEl = document.getElementById("lightbox-media");
    var catEl = document.getElementById("lightbox-cat");
    var titleEl = document.getElementById("lightbox-title");
    var countEl = document.getElementById("lightbox-count");
    var closeBtn = document.getElementById("lightbox-close");
    var prevBtn = document.getElementById("lightbox-prev");
    var nextBtn = document.getElementById("lightbox-next");
    var current = -1;
    var lastFocused = null;

    function render() {
      var item = items[current];
      catEl.textContent = item.cat;
      titleEl.textContent = item.title;
      var pos = visibleIndexes.indexOf(current) + 1;
      countEl.textContent = pos + " / " + visibleIndexes.length;
      mediaEl.innerHTML = "";
      if (item.video) {
        var v = document.createElement("video");
        v.src = item.video; v.poster = item.src; v.controls = true; v.autoplay = true; v.loop = true; v.muted = true; v.defaultMuted = true; v.playsInline = true;
        v.className = "lightbox-media";
        mediaEl.appendChild(v);
      } else {
        var img = document.createElement("img");
        img.src = item.src; img.alt = item.title; img.className = "lightbox-media";
        mediaEl.appendChild(img);
      }
    }
    function open(index) {
      current = index;
      lastFocused = document.activeElement;
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      render();
      lightbox.focus();
      document.addEventListener("keydown", onKey);
    }
    function close() {
      lightbox.hidden = true;
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    }
    function step(delta) {
      var pos = visibleIndexes.indexOf(current);
      var nextPos = (pos + delta + visibleIndexes.length) % visibleIndexes.length;
      current = visibleIndexes[nextPos];
      render();
    }
    function onKey(e) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }
    tiles.forEach(function (tile, i) {
      tile.addEventListener("click", function () { open(i); });
    });
    if (closeBtn) closeBtn.addEventListener("click", close);
    if (prevBtn) prevBtn.addEventListener("click", function () { step(-1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { step(1); });
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox) close(); });
    var touchStartX = 0;
    lightbox.addEventListener("touchstart", function (e) { touchStartX = e.changedTouches[0].clientX; });
    lightbox.addEventListener("touchend", function (e) {
      var d = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(d) > 50) step(d < 0 ? 1 : -1);
    });
  }

  /* ---------- Journal post expand/collapse ---------- */
  function initBlog() {
    document.querySelectorAll(".post-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var body = document.getElementById(btn.getAttribute("aria-controls"));
        if (!body) return;
        var open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", open ? "false" : "true");
        body.hidden = open;
        btn.querySelector(".post-toggle-label").textContent = open ? "Read the piece" : "Close";
        var openIcon = btn.querySelector(".post-toggle-open");
        var closeIcon = btn.querySelector(".post-toggle-close");
        if (openIcon) openIcon.hidden = !open;
        if (closeIcon) closeIcon.hidden = open;
      });
    });
  }

  /* ---------- Enquiry form ---------- */
  function initEnquiryForm() {
    var form = document.getElementById("enquiry-form");
    if (!form) return;
    var idleEl = document.getElementById("enquiry-idle");
    var sentEl = document.getElementById("enquiry-sent");
    var failedEl = document.getElementById("enquiry-failed");
    var errorEl = document.getElementById("enquiry-error");
    var statusEl = document.getElementById("enquiry-status");
    var submitBtn = document.getElementById("enquiry-submit");
    var waLinks = document.querySelectorAll(".enquiry-wa-link");
    var mailLinks = document.querySelectorAll(".enquiry-mail-link");
    var startAgainBtn = document.getElementById("enquiry-start-again");
    var backToFormBtn = document.getElementById("enquiry-back-to-form");
    var WA_NUMBER = "447388905164";
    var ENDPOINT = "send-enquiry.php";

    function fieldValue(name) {
      var el = form.elements[name];
      return el ? el.value : "";
    }
    function buildMessage() {
      var lines = [
        "HENNA ENQUIRY",
        "Name: " + fieldValue("name"),
        "Phone: " + fieldValue("phone"),
        "Email: " + fieldValue("email"),
        "Address: " + fieldValue("address"),
        "Occasion: " + fieldValue("occasion"),
      ];
      if (fieldValue("date")) lines.push("Date: " + fieldValue("date"));
      if (fieldValue("notes")) lines.push("Notes: " + fieldValue("notes"));
      return lines.join("\n");
    }
    function updateFallbackLinks() {
      var message = buildMessage();
      var waHref = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(message);
      var mailHref = "mailto:Masuma0205@icloud.com?subject=" + encodeURIComponent("Henna enquiry") + "&body=" + encodeURIComponent(message);
      waLinks.forEach(function (a) { a.href = waHref; });
      mailLinks.forEach(function (a) { a.href = mailHref; });
    }
    function show(el) { [idleEl, sentEl, failedEl].forEach(function (s) { if (s) s.hidden = s !== el; }); }

    updateFallbackLinks();
    form.addEventListener("input", updateFallbackLinks);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      updateFallbackLinks();
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
      if (statusEl) statusEl.textContent = "Sending your enquiry";
      var payload = {
        name: fieldValue("name"), phone: fieldValue("phone"), email: fieldValue("email"),
        address: fieldValue("address"), occasion: fieldValue("occasion"), date: fieldValue("date"),
        notes: fieldValue("notes"), company: fieldValue("company"),
      };
      fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
        .then(function (res) {
          return res.json().catch(function () { return {}; }).then(function (out) {
            if (res.ok && out.ok) { show(sentEl); return; }
            throw new Error(out.error || ("Server responded " + res.status));
          });
        })
        .catch(function (err) {
          if (errorEl) errorEl.textContent = String((err && err.message) || err);
          show(failedEl);
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send enquiry";
          if (statusEl) statusEl.textContent = "We reply within two days";
        });
    });
    if (startAgainBtn) startAgainBtn.addEventListener("click", function () { form.reset(); updateFallbackLinks(); show(idleEl); });
    if (backToFormBtn) backToFormBtn.addEventListener("click", function () { show(idleEl); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initReveal();
    initHeader();
    initMenu();
    initHero();
    initGallery();
    initBlog();
    initEnquiryForm();
  });
})();
