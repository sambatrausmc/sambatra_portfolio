// this finds the navigation and theme controls that javascript needs to update
const navToggle = document.querySelector(".nav-toggle");
const primaryNavigation = document.querySelector(".primary-nav");
const themeToggle = document.querySelector(".theme-toggle");

// this loads the saved theme, updates the page and button, and saves any new theme choice
if (themeToggle) {
  const themeIcon = themeToggle.querySelector(".theme-icon");
  const savedTheme = localStorage.getItem("portfolio-theme");
  let currentTheme = savedTheme === "light" ? "light" : "dark";

  // this applies the selected theme and keeps the button text, icon, and accessibility details in sync
  const applyTheme = (theme) => {
    const isLightTheme = theme === "light";
    const nextTheme = isLightTheme ? "dark" : "light";
    const buttonLabel = `Switch to ${nextTheme} theme`;

    document.documentElement.setAttribute("data-theme", theme);
    themeToggle.setAttribute("aria-pressed", String(isLightTheme));
    themeToggle.setAttribute("aria-label", buttonLabel);
    themeToggle.title = buttonLabel;
    themeIcon.textContent = isLightTheme ? "\u263E" : "\u263C";
  };

  applyTheme(currentTheme);

  themeToggle.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(currentTheme);
    localStorage.setItem("portfolio-theme", currentTheme);
  });
}

// this opens and closes the mobile navigation and also handles links, the escape key, and screen resizing
if (navToggle && primaryNavigation) {
  // this returns the mobile navigation button and link list to their closed state
  const closeNavigation = () => {
    primaryNavigation.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
    navToggle.textContent = "Menu";
  };

  navToggle.addEventListener("click", () => {
    const willOpen = navToggle.getAttribute("aria-expanded") === "false";

    primaryNavigation.classList.toggle("is-open", willOpen);
    navToggle.setAttribute("aria-expanded", String(willOpen));
    navToggle.setAttribute("aria-label", willOpen ? "Close navigation" : "Open navigation");
    navToggle.textContent = willOpen ? "Close" : "Menu";
  });

  primaryNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && primaryNavigation.classList.contains("is-open")) {
      closeNavigation();
      navToggle.focus();
    }
  });

  window.matchMedia("(min-width: 761px)").addEventListener("change", (event) => {
    if (event.matches) {
      closeNavigation();
    }
  });
}

// this finds the project filter controls and all project cards that can be shown or hidden
const projectFilters = document.querySelector(".project-filters");
const projectCards = document.querySelectorAll(".project-detail");

// this activates the selected filter and only shows projects with a matching category
if (projectFilters && projectCards.length > 0) {
  const filterButtons = projectFilters.querySelectorAll("button");

  projectFilters.hidden = false;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;

      filterButtons.forEach((filterButton) => {
        const isSelected = filterButton === button;
        filterButton.setAttribute("aria-pressed", String(isSelected));
      });

      projectCards.forEach((project) => {
        const categories = project.dataset.category.split(" ");
        const shouldShow = selectedFilter === "all" || categories.includes(selectedFilter);

        project.hidden = !shouldShow;
      });
    });
  });
}

// this connects each show details button to its project panel and updates both when clicked
const projectDetailButtons = document.querySelectorAll(".project-details-toggle");

projectDetailButtons.forEach((button) => {
  const detailsId = button.getAttribute("aria-controls");
  const detailsPanel = document.getElementById(detailsId);
  const buttonLabel = button.querySelector(".details-toggle-label");

  if (detailsPanel && buttonLabel) {
    button.addEventListener("click", () => {
      const willOpen = button.getAttribute("aria-expanded") === "false";

      button.setAttribute("aria-expanded", String(willOpen));
      detailsPanel.hidden = !willOpen;
      buttonLabel.textContent = willOpen ? "Hide details" : "Show details";
    });
  }
});

// this checks the visitor's motion setting before preparing page elements for scroll reveals
const revealItems = document.querySelectorAll(".reveal-item");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// this reveals an item when it enters the screen and stops watching it after the first reveal
if (revealItems.length > 0 && "IntersectionObserver" in window && !prefersReducedMotion) {
  revealItems.forEach((item) => {
    item.classList.add("is-reveal-ready");
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px",
    },
  );

  revealItems.forEach((item) => {
    revealObserver.observe(item);
  });
}

// this finds the back-to-top button and shows it after the visitor scrolls down the page
const backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton) {
  // this checks the current scroll position and updates whether the button should be visible
  const updateBackToTopButton = () => {
    const shouldShowButton = window.scrollY > 480;
    backToTopButton.classList.toggle("is-visible", shouldShowButton);
  };

  backToTopButton.hidden = false;
  updateBackToTopButton();

  window.addEventListener("scroll", updateBackToTopButton, { passive: true });

  // this tells the browser to return to the top of the doc and applies the motion setting chosen for the user
  backToTopButton.addEventListener("click", () => {
    const scrollBehavior = prefersReducedMotion ? "auto" : "smooth";

    window.scrollTo({
      top: 0,
      behavior: scrollBehavior,
    });
  });
}

// this updates the visible footer year and its machine-readable date value to the current year
const currentYearElements = document.querySelectorAll(".current-year");
const currentYear = String(new Date().getFullYear());

currentYearElements.forEach((yearElement) => {
  yearElement.textContent = currentYear;
  yearElement.setAttribute("datetime", currentYear);
});
