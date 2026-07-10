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
    setActive(window.location.hash.slice(1));
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

  window.addEventListener("hashchange", function () {
    if (window.location.hash) {
      setActive(window.location.hash.slice(1));
    }
  });
}());
