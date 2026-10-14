// Finds the mobile Menu button so JavaScript can control it.
const navToggle = document.querySelector(".nav-toggle");
// Finds the main navigation list that opens and closes on small screens.
const primaryNavigation = document.querySelector(".primary-nav");
// Finds the button that switches between the dark and light themes.
const themeToggle = document.querySelector(".theme-toggle");

// Runs the theme feature only when the page contains a theme button.
if (themeToggle) {
  // Finds the sun or moon symbol displayed inside the theme button.
  const themeIcon = themeToggle.querySelector(".theme-icon");
  // Reads the visitor's previously selected theme from browser storage.
  const savedTheme = localStorage.getItem("portfolio-theme");
  // Uses a saved light theme or defaults to the dark theme.
  let currentTheme = savedTheme === "light" ? "light" : "dark";

  // Applies one theme and updates the theme button's accessible information.
  const applyTheme = (theme) => {
    // Records whether the requested theme is the light theme.
    const isLightTheme = theme === "light";
    // Identifies the theme that the button will switch to next.
    const nextTheme = isLightTheme ? "dark" : "light";
    // Builds a clear label describing the button's next action.
    const buttonLabel = `Switch to ${nextTheme} theme`;

    // Adds the selected theme to the root HTML element for CSS to target.
    document.documentElement.setAttribute("data-theme", theme);
    // Tells assistive technology whether the light theme is currently active.
    themeToggle.setAttribute("aria-pressed", String(isLightTheme));
    // Gives screen-reader users the button's next available action.
    themeToggle.setAttribute("aria-label", buttonLabel);
    // Shows the same action as a tooltip when the button is hovered.
    themeToggle.title = buttonLabel;
    // Displays a moon in light mode and a sun in dark mode.
    themeIcon.textContent = isLightTheme ? "\u263E" : "\u263C";
  };

  // Applies the saved or default theme when the page first loads.
  applyTheme(currentTheme);

  // Listens for a visitor clicking the theme button.
  themeToggle.addEventListener("click", () => {
    // Changes the stored theme value to the opposite theme.
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    // Updates the page and button to use the newly selected theme.
    applyTheme(currentTheme);
    // Saves the selection so later page visits use the same theme.
    localStorage.setItem("portfolio-theme", currentTheme);
  });
}

// Runs the mobile navigation feature only when both required elements exist.
if (navToggle && primaryNavigation) {
  // Returns the mobile navigation and its button to their closed state.
  const closeNavigation = () => {
    // Removes the class that makes the mobile link list visible.
    primaryNavigation.classList.remove("is-open");
    // Tells assistive technology that the navigation is collapsed.
    navToggle.setAttribute("aria-expanded", "false");
    // Changes the accessible button action back to opening the navigation.
    navToggle.setAttribute("aria-label", "Open navigation");
    // Changes the visible button text back to Menu.
    navToggle.textContent = "Menu";
  };

  // Listens for a visitor clicking the mobile Menu button.
  navToggle.addEventListener("click", () => {
    // Decides whether this click should open the currently closed menu.
    const willOpen = navToggle.getAttribute("aria-expanded") === "false";

    // Adds or removes the open class according to the new menu state.
    primaryNavigation.classList.toggle("is-open", willOpen);
    // Reports the new open or closed state to assistive technology.
    navToggle.setAttribute("aria-expanded", String(willOpen));
    // Describes whether the button will close or open the navigation next.
    navToggle.setAttribute("aria-label", willOpen ? "Close navigation" : "Open navigation");
    // Shows Close while the menu is open and Menu while it is closed.
    navToggle.textContent = willOpen ? "Close" : "Menu";
  });

  // Goes through every link in the mobile navigation.
  primaryNavigation.querySelectorAll("a").forEach((link) => {
    // Closes the navigation after a visitor selects a destination.
    link.addEventListener("click", closeNavigation);
  });

  // Listens for keyboard presses anywhere in the document.
  document.addEventListener("keydown", (event) => {
    // Responds only when Escape is pressed while the menu is open.
    if (event.key === "Escape" && primaryNavigation.classList.contains("is-open")) {
      // Closes the mobile navigation.
      closeNavigation();
      // Returns keyboard focus to the Menu button.
      navToggle.focus();
    }
  });

  // Watches for the browser crossing from mobile to desktop width.
  window.matchMedia("(min-width: 761px)").addEventListener("change", (event) => {
    // Runs when the browser has entered the desktop-width range.
    if (event.matches) {
      // Clears any mobile open state before the desktop navigation appears.
      closeNavigation();
    }
  });
}

const projectFilters = document.querySelector(".project-filters");
const projectCards = document.querySelectorAll(".project-detail");

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

const revealItems = document.querySelectorAll(".reveal-item");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

const backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton) {
  const updateBackToTopButton = () => {
    const shouldShowButton = window.scrollY > 480;
    backToTopButton.classList.toggle("is-visible", shouldShowButton);
  };

  backToTopButton.hidden = false;
  updateBackToTopButton();

  window.addEventListener("scroll", updateBackToTopButton, { passive: true });

  backToTopButton.addEventListener("click", () => {
    const scrollBehavior = prefersReducedMotion ? "auto" : "smooth";

    window.scrollTo({
      top: 0,
      behavior: scrollBehavior,
    });
  });
}

const currentYearElements = document.querySelectorAll(".current-year");
const currentYear = String(new Date().getFullYear());

currentYearElements.forEach((yearElement) => {
  yearElement.textContent = currentYear;
  yearElement.setAttribute("datetime", currentYear);
});
