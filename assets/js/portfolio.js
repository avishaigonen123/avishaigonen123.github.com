/* ==========================================================================
   Avishai Gonen - portfolio behaviour

   Everything here is progressive enhancement. The page is fully readable and
   the CVE list is fully navigable with JavaScript disabled or broken:
     - cards are rendered server-side; filtering only toggles `hidden`
     - the metrics already contain their final numbers as text
     - sort and the live count are hidden in the markup and revealed here, so a
       JS-off visitor never sees a control that does nothing
   Each feature is independently guarded, so one missing library never takes
   the rest of the page down.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     Mobile navigation
     ------------------------------------------------------------------------ */

  function initNav() {
    var toggle = document.querySelector(".nav__toggle");
    var links = document.getElementById("nav-links");
    if (!toggle || !links) return;

    function close() {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Tapping a link should close the panel rather than leave it covering the
    // section the user just jumped to.
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) close();
    });

    // Escape and outside-click are the conventional ways to dismiss a menu.
    // Without them a keyboard user had to Shift+Tab back to the toggle.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("is-open")) {
        close();
        toggle.focus();
      }
    });

    document.addEventListener("click", function (e) {
      if (!links.classList.contains("is-open")) return;
      if (e.target.closest(".nav__inner")) return;
      close();
    });

    // Collapsing back to desktop while the panel is open would otherwise leave
    // a stale aria-expanded="true" on a button that is now hidden.
    var mq = window.matchMedia("(min-width: 861px)");
    var onChange = function (e) { if (e.matches) close(); };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  /* ------------------------------------------------------------------------
     Hero role rotation
     ------------------------------------------------------------------------ */

  function initTyped() {
    var el = document.getElementById("typed-role");
    if (!el || typeof window.Typed !== "function") return;

    var reduced = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var roles = [
      "Security Enthusiast",
      "Bug Hunter",
      "CTF Competitor",
      "CVE Author"
    ];

    // Respect reduced-motion: leave the static text already in the span.
    if (reduced) return;

    new window.Typed(el, {
      strings: roles,
      typeSpeed: 55,
      backSpeed: 28,
      backDelay: 1800,
      startDelay: 300,
      loop: true,
      smartBackspace: true
    });
  }

  /* ------------------------------------------------------------------------
     Metric counters
     ------------------------------------------------------------------------ */

  function initCounters() {
    if (typeof window.PureCounter !== "function") return;

    var reduced = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    new window.PureCounter({
      duration: reduced ? 0 : 1.2,
      once: true
    });
  }

  /* ------------------------------------------------------------------------
     CVE filtering, sorting and shareable state

     Facets are ANDed. Each card carries data-severity, data-sev-rank,
     data-cvss, data-year, data-disclosed and data-ecosystem, all emitted at
     build time, so this only compares strings and numbers.
     ------------------------------------------------------------------------ */

  function initCveFilter() {
    var grid = document.getElementById("cve-grid");
    if (!grid) return;

    var cards = Array.prototype.slice.call(grid.querySelectorAll(".cve-card"));
    if (!cards.length) return;

    // Scope lookups to the enclosing section so a second filter UI elsewhere
    // could never cross-talk with this one.
    var scope = grid.closest("section") || document;
    var total = cards.length;
    var state = { severity: "", year: "", ecosystem: "", text: "", sort: "newest" };

    var empty = document.getElementById("cve-no-results");
    var search = document.getElementById("cve-search");
    var sortSel = document.getElementById("cve-sort");
    var sortGroup = document.getElementById("cve-sort-group");
    var countEl = document.getElementById("cve-count");

    var FACET_ATTR = {
      severity: "severity",
      year: "year",
      ecosystem: "ecosystem"
    };

    function num(v) { return parseFloat(v) || 0; }

    /* --- facet counts shown on each chip --- */

    function tallyFor(attr) {
      var t = {};
      cards.forEach(function (c) {
        var v = c.dataset[attr] || "";
        t[v] = (t[v] || 0) + 1;
      });
      return t;
    }

    function decorateChips() {
      Object.keys(FACET_ATTR).forEach(function (facet) {
        var tally = tallyFor(FACET_ATTR[facet]);
        scope.querySelectorAll('[data-filter="' + facet + '"]').forEach(function (chip) {
          var v = chip.dataset.value || "";
          var n = v === "" ? total : (tally[v] || 0);

          var badge = chip.querySelector(".chip__n");
          if (!badge) {
            badge = document.createElement("span");
            badge.className = "chip__n";
            chip.appendChild(badge);
          }
          badge.textContent = n;

          // A chip that would always yield nothing is dead weight.
          if (v !== "" && n === 0) chip.disabled = true;
        });
      });
    }

    /* --- ordering --- */

    function sortCards() {
      var ordered = cards.slice();

      if (state.sort === "cvss") {
        ordered.sort(function (a, b) { return num(b.dataset.cvss) - num(a.dataset.cvss); });
      } else if (state.sort === "severity") {
        ordered.sort(function (a, b) {
          var d = num(b.dataset.sevRank) - num(a.dataset.sevRank);
          return d !== 0 ? d : num(b.dataset.cvss) - num(a.dataset.cvss);
        });
      } else {
        // Newest first. ISO dates compare lexically; blanks sort to the end.
        ordered.sort(function (a, b) {
          return (b.dataset.disclosed || "").localeCompare(a.dataset.disclosed || "");
        });
      }

      ordered.forEach(function (c) { grid.appendChild(c); });
    }

    /* --- filter + count + url --- */

    function matches(card, needle) {
      if (!needle) return true;
      return (card.dataset.search || "").indexOf(needle) !== -1;
    }

    function writeUrl() {
      if (!window.history || !history.replaceState) return;
      var q = [];
      if (state.severity) q.push("sev=" + encodeURIComponent(state.severity));
      if (state.ecosystem) q.push("eco=" + encodeURIComponent(state.ecosystem));
      if (state.year) q.push("year=" + encodeURIComponent(state.year));
      if (state.text.trim()) q.push("q=" + encodeURIComponent(state.text.trim()));
      if (state.sort !== "newest") q.push("sort=" + state.sort);
      // replaceState, not pushState: filtering should not fill up the back stack.
      history.replaceState(null, "", location.pathname + (q.length ? "?" + q.join("&") : ""));
    }

    function apply() {
      var needle = state.text.trim().toLowerCase();
      var visible = 0;

      cards.forEach(function (card) {
        var ok =
          (!state.severity  || card.dataset.severity  === state.severity) &&
          (!state.year      || card.dataset.year      === state.year) &&
          (!state.ecosystem || card.dataset.ecosystem === state.ecosystem) &&
          matches(card, needle);

        card.hidden = !ok;
        if (ok) visible++;
      });

      if (empty) empty.hidden = visible !== 0;
      if (countEl) {
        countEl.textContent = visible === total
          ? "Showing all " + total
          : "Showing " + visible + " of " + total;
      }

      writeUrl();
    }

    function readUrl() {
      if (typeof URLSearchParams !== "function") return;
      var p = new URLSearchParams(location.search);
      state.severity  = p.get("sev")  || "";
      state.ecosystem = p.get("eco")  || "";
      state.year      = p.get("year") || "";
      state.text      = p.get("q")    || "";
      state.sort      = p.get("sort") || "newest";

      Object.keys(FACET_ATTR).forEach(function (facet) {
        var want = state[facet] || "";
        scope.querySelectorAll('[data-filter="' + facet + '"]').forEach(function (chip) {
          chip.setAttribute("aria-pressed", String((chip.dataset.value || "") === want));
        });
      });

      if (search && state.text) search.value = state.text;
      if (sortSel) sortSel.value = state.sort;
    }

    /* --- wiring --- */

    scope.querySelectorAll("[data-filter]").forEach(function (chip) {
      chip.addEventListener("click", function () {
        if (chip.disabled) return;
        var facet = chip.dataset.filter;

        scope.querySelectorAll('[data-filter="' + facet + '"]').forEach(function (s) {
          s.setAttribute("aria-pressed", "false");
        });

        chip.setAttribute("aria-pressed", "true");
        state[facet] = chip.dataset.value || "";
        apply();
      });
    });

    if (search) {
      search.addEventListener("input", function () {
        state.text = search.value;
        apply();
      });

      search.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          search.value = "";
          state.text = "";
          apply();
        }
      });
    }

    if (sortSel) {
      sortSel.addEventListener("change", function () {
        state.sort = sortSel.value;
        sortCards();
        apply();
      });
    }

    // "/" focuses search, the convention on sites that have one.
    document.addEventListener("keydown", function (e) {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey || !search) return;
      var t = e.target;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      e.preventDefault();
      search.focus();
      search.select();
    });

    // Reveal the JS-only controls now that they will actually do something.
    if (sortGroup) sortGroup.hidden = false;
    if (countEl) countEl.hidden = false;
    scope.querySelectorAll(".kbd-hint").forEach(function (h) { h.hidden = false; });

    readUrl();
    decorateChips();
    sortCards();
    apply();
  }

  /* ------------------------------------------------------------------------
     CVE carousel (coverflow)
     The markup is a working scroll strip on its own; this turns it into a
     3D coverflow with autoplay, arrows, keyboard and swipe. Clicking a side
     card brings it to the centre; clicking the centre card opens it.
     ------------------------------------------------------------------------ */

  function initCveCarousel() {
    var root = document.querySelector("[data-cvc]");
    if (!root) return;
    var stage = root.querySelector(".cvc__stage");
    var items = Array.prototype.slice.call(root.querySelectorAll("[data-cvc-item]"));
    var n = items.length;
    if (n < 2) return;

    var pos = root.querySelector("[data-cvc-pos]");
    var bar = root.querySelector("[data-cvc-bar]");
    var bug = root.querySelector(".cvc__bug");
    var playBtn = root.querySelector("[data-cvc-play]");
    var controls = root.querySelector("[data-cvc-controls]");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var DELAY = 4000;

    var active = 0, timer = null, userPaused = reduce, hoverPaused = false, dragged = false;

    root.classList.add("is-enhanced");
    if (controls) controls.hidden = false;
    root.style.setProperty("--cvc-delay", DELAY + "ms");

    function dist(i) {
      var d = i - active;
      if (d > n / 2) d -= n;
      if (d < -n / 2) d += n;
      return d;
    }

    function layout() {
      var w = stage.clientWidth || 800;
      var step = Math.max(70, Math.min(210, w * 0.24));
      items.forEach(function (el, i) {
        var d = dist(i), a = Math.abs(d);
        var link = el.firstElementChild;
        if (a > 3) {
          el.style.opacity = "0";
          el.style.visibility = "hidden";
          el.style.transform = "translateX(" + (d > 0 ? 4 : -4) * step + "px) translateZ(-500px) scale(.6)";
        } else {
          el.style.visibility = "";
          el.style.opacity = a === 3 ? "0.35" : "1";
          el.style.transform = "translateX(" + d * step + "px) translateZ(" + (-a * 130) + "px) rotateY(" +
            (d === 0 ? 0 : (d > 0 ? -1 : 1) * Math.min(35, 22 + a * 6)) + "deg) scale(" + (1 - a * 0.06) + ")";
        }
        el.style.zIndex = String(100 - a);
        el.style.filter = a === 0 ? "" : "brightness(" + (0.78 - a * 0.08) + ")";
        el.classList.toggle("is-active", d === 0);
        if (link) link.tabIndex = d === 0 ? 0 : -1;
        el.setAttribute("aria-hidden", d === 0 ? "false" : "true");
      });
      if (pos) pos.textContent = String(active + 1);
    }

    function hop() {
      if (!bug || reduce) return;
      bug.classList.remove("is-hop");
      void bug.offsetWidth;
      bug.classList.add("is-hop");
    }

    function schedule() {
      clearTimeout(timer);
      if (bar) { bar.classList.remove("is-running"); void bar.offsetWidth; }
      if (userPaused || hoverPaused || document.hidden) return;
      if (bar) bar.classList.add("is-running");
      timer = setTimeout(function () { go(active + 1); }, DELAY);
    }

    function go(i) {
      active = ((i % n) + n) % n;
      layout();
      hop();
      schedule();
    }

    function setPlay() {
      root.classList.toggle("is-paused", userPaused);
      if (!playBtn) return;
      playBtn.setAttribute("aria-label", userPaused ? "Start autoplay" : "Pause autoplay");
      playBtn.innerHTML = '<i class="bi ' + (userPaused ? "bi-play-fill" : "bi-pause-fill") + '" aria-hidden="true"></i>';
    }

    root.querySelector("[data-cvc-prev]").addEventListener("click", function () { go(active - 1); });
    root.querySelector("[data-cvc-next]").addEventListener("click", function () { go(active + 1); });
    if (playBtn) playBtn.addEventListener("click", function () { userPaused = !userPaused; setPlay(); schedule(); });

    items.forEach(function (el, i) {
      el.firstElementChild.addEventListener("click", function (e) {
        if (dragged) { e.preventDefault(); dragged = false; return; }
        if (i !== active) { e.preventDefault(); go(i); }
      });
    });

    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { e.preventDefault(); go(active - 1); }
      else if (e.key === "ArrowRight") { e.preventDefault(); go(active + 1); }
    });

    stage.addEventListener("mouseenter", function () { hoverPaused = true; schedule(); });
    stage.addEventListener("mouseleave", function () { hoverPaused = false; schedule(); });
    root.addEventListener("focusin", function () { hoverPaused = true; schedule(); });
    root.addEventListener("focusout", function (e) {
      if (!root.contains(e.relatedTarget)) { hoverPaused = false; schedule(); }
    });
    document.addEventListener("visibilitychange", schedule);

    var startX = null;
    stage.addEventListener("pointerdown", function (e) { startX = e.clientX; dragged = false; });
    stage.addEventListener("pointermove", function (e) {
      if (startX !== null && Math.abs(e.clientX - startX) > 10) stage.classList.add("is-dragging");
    });
    function endDrag(e) {
      if (startX === null) return;
      var dx = e.clientX - startX;
      startX = null;
      stage.classList.remove("is-dragging");
      if (Math.abs(dx) > 40) { dragged = true; go(active + (dx < 0 ? 1 : -1)); }
    }
    stage.addEventListener("pointerup", endDrag);
    stage.addEventListener("pointercancel", function () { startX = null; stage.classList.remove("is-dragging"); });

    var rz;
    window.addEventListener("resize", function () { clearTimeout(rz); rz = setTimeout(layout, 120); });

    setPlay();
    layout();
    schedule();
  }

  /* ------------------------------------------------------------------------
     Bootstrap
     ------------------------------------------------------------------------ */

  // Each initialiser is isolated. The typeof guards only cover a library that
  // is MISSING; a library that throws on init would otherwise abort this
  // function and take the CVE filter down with it.
  function safely(fn) {
    try { fn(); } catch (err) {
      if (window.console && console.warn) console.warn("portfolio:", err);
    }
  }

  function init() {
    safely(initNav);
    safely(initTyped);
    safely(initCounters);
    safely(initCveFilter);
    safely(initCveCarousel);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
