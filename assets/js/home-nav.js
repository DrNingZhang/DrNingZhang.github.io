(function () {
  "use strict";

  var nav = document.getElementById("home-site-nav");
  var toggle = nav && nav.querySelector(".site-nav__toggle");
  var menu = document.getElementById("site-nav-links");

  if (!nav || !toggle || !menu) {
    return;
  }

  var links = Array.prototype.slice.call(menu.querySelectorAll("a[href*='#']"));

  function closeMenu() {
    menu.classList.remove("is-open");
    toggle.classList.remove("close");
    toggle.setAttribute("aria-expanded", "false");
  }

  function setActive(id) {
    links.forEach(function (link) {
      if (link.hash === "#" + id) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function getNavSectionId(id) {
    return id.indexOf("patents-") === 0 ? "inventive-patent" : id;
  }

  toggle.addEventListener("click", function () {
    var isOpen = menu.classList.toggle("is-open");
    toggle.classList.toggle("close", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
      toggle.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 925) {
      closeMenu();
    }
  });

  var sections = links.map(function (link) {
    return document.getElementById(link.hash.slice(1));
  }).filter(Boolean);

  if (window.location.hash) {
    setActive(getNavSectionId(window.location.hash.slice(1)));
  } else if (sections.length) {
    setActive(sections[0].id);
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, {
      rootMargin: "-18% 0px -70% 0px",
      threshold: 0
    });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  var patentGroups = Array.prototype.slice.call(document.querySelectorAll("details.patent-group"));
  var hoverPointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  patentGroups.forEach(function (group) {
    var summary = group.querySelector("summary");

    group.addEventListener("mouseenter", function () {
      if (hoverPointer.matches) {
        group.open = true;
      }
    });

    group.addEventListener("mouseleave", function () {
      if (hoverPointer.matches) {
        group.open = false;
      }
    });

    if (summary) {
      summary.addEventListener("click", function (event) {
        if (hoverPointer.matches && event.detail > 0) {
          event.preventDefault();
        }
      });
    }
  });

  Array.prototype.slice.call(document.querySelectorAll(".patent-summary__item")).forEach(function (link) {
    link.addEventListener("click", function () {
      var target = document.getElementById(link.hash.slice(1));
      if (target && target.matches("details.patent-group")) {
        target.open = true;
      }
    });
  });

  function openPatentGroupFromHash() {
    if (!window.location.hash) {
      return;
    }

    var target = document.getElementById(window.location.hash.slice(1));
    if (target && target.matches("details.patent-group")) {
      target.open = true;
    }
  }

  openPatentGroupFromHash();

  window.addEventListener("hashchange", function () {
    if (window.location.hash) {
      setActive(getNavSectionId(window.location.hash.slice(1)));
      openPatentGroupFromHash();
    }
  });
}());
