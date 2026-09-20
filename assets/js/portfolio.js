/* ==========================================================================
   Avishai Gonen - portfolio behaviour

   Everything here is progressive enhancement. The page is fully readable and
   the CVE list is fully navigable with JavaScript disabled or broken:
     - cards are rendered server-side; filtering only toggles `hidden`
     - the metrics already contain their final numbers as text
     - the hero role line is static text until Typed attaches
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
      "Vulnerability Researcher",
      "CVE Author",
      "Bug Hunter",
      "Reverse Engineer",
      "CTF Competitor"
    ];

    // Respect reduced-motion: show one role, no animation loop.
    if (reduced) {
      el.textContent = roles[0];
      return;
    }

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
     CVE filtering

     Four independent facets. Each card carries data-severity, data-year,
     data-ecosystem and a pre-lowercased data-search blob, all emitted by Jekyll
     at build time - so this only has to compare strings.
     ------------------------------------------------------------------------ */

  function initCveFilter() {
    var grid = document.getElementById("cve-grid");
    if (!grid) return;

    var cards = Array.prototype.slice.call(
      grid.querySelectorAll(".cve-card")
    );
    if (!cards.length) return;

    var state = { severity: "", year: "", ecosystem: "", text: "" };

    var empty = document.getElementById("cve-no-results");
    var search = document.getElementById("cve-search");

    // Scope chip lookups to the enclosing section rather than document, so a
    // second filter UI on another page could never cross-talk with this one.
    var scope = grid.closest("section") || document;

    function matchText(card, needle) {
      if (!needle) return true;
      return (card.dataset.search || "").indexOf(needle) !== -1;
    }

    function apply() {
      var needle = state.text.trim().toLowerCase();
      var visible = 0;

      cards.forEach(function (card) {
        var ok =
          (!state.severity  || card.dataset.severity  === state.severity) &&
          (!state.year      || card.dataset.year      === state.year) &&
          (!state.ecosystem || card.dataset.ecosystem === state.ecosystem) &&
          matchText(card, needle);

        card.hidden = !ok;
        if (ok) visible++;
      });

      if (empty) empty.hidden = visible !== 0;
    }

    // Chip groups. Each group behaves as a radio set: exactly one active chip,
    // with the "All" chip carrying an empty value.
    scope.querySelectorAll("[data-filter]").forEach(function (chip) {
      chip.addEventListener("click", function () {
        var facet = chip.dataset.filter;

        scope
          .querySelectorAll('[data-filter="' + facet + '"]')
          .forEach(function (sibling) {
            sibling.setAttribute("aria-pressed", "false");
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

      // Escape clears the search, matching platform convention.
      search.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          search.value = "";
          state.text = "";
          apply();
        }
      });
    }

    apply();
  }

  /* ------------------------------------------------------------------------
     Bootstrap
     ------------------------------------------------------------------------ */

  // Each initialiser is isolated. The typeof guards below only cover a library
  // that is MISSING; a library that throws on init would otherwise abort this
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
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
