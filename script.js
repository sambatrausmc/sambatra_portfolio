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

// Finds the container that holds all project filter buttons.
const projectFilters = document.querySelector(".project-filters");
// Finds every project entry that can be filtered.
const projectCards = document.querySelectorAll(".project-detail");

// Runs filtering only when the controls and at least one project exist.
if (projectFilters && projectCards.length > 0) {
  // Finds each filter button inside the controls.
  const filterButtons = projectFilters.querySelectorAll("button");

  // Reveals the controls now that JavaScript is available to operate them.
  projectFilters.hidden = false;

  // Goes through every project filter button.
  filterButtons.forEach((button) => {
    // Listens for a click on the current filter button.
    button.addEventListener("click", () => {
      // Reads the category name stored in the clicked button's data attribute.
      const selectedFilter = button.dataset.filter;

      // Goes through all filter buttons to update their selected states.
      filterButtons.forEach((filterButton) => {
        // Checks whether this is the button that was just clicked.
        const isSelected = filterButton === button;
        // Reports the selected or unselected state to CSS and assistive technology.
        filterButton.setAttribute("aria-pressed", String(isSelected));
      });

      // Goes through every project to decide whether it matches the filter.
      projectCards.forEach((project) => {
        // Turns the project's space-separated category text into a list.
        const categories = project.dataset.category.split(" ");
        // Shows every project for All or projects that include the selected category.
        const shouldShow = selectedFilter === "all" || categories.includes(selectedFilter);

        // Hides projects that do not match and shows those that do.
        project.hidden = !shouldShow;
      });
    });
  });
}

// Finds every button that expands a project's additional details.
const projectDetailButtons = document.querySelectorAll(".project-details-toggle");

// Sets up the expand and collapse behavior for each details button.
projectDetailButtons.forEach((button) => {
  // Reads the ID of the details panel controlled by this button.
  const detailsId = button.getAttribute("aria-controls");
  // Finds that details panel elsewhere in the page.
  const detailsPanel = document.getElementById(detailsId);
  // Finds the visible Show details or Hide details label in the button.
  const buttonLabel = button.querySelector(".details-toggle-label");

  // Adds behavior only when both the panel and label were found.
  if (detailsPanel && buttonLabel) {
    // Listens for a visitor clicking this project's details button.
    button.addEventListener("click", () => {
      // Decides whether this click should open the currently closed panel.
      const willOpen = button.getAttribute("aria-expanded") === "false";

      // Reports the panel's new expanded state to assistive technology.
      button.setAttribute("aria-expanded", String(willOpen));
      // Shows the panel when opening and hides it when closing.
      detailsPanel.hidden = !willOpen;
      // Updates the label to describe the button's next action.
      buttonLabel.textContent = willOpen ? "Hide details" : "Show details";
    });
  }
});

// Finds every page element marked for a scroll-reveal animation.
const revealItems = document.querySelectorAll(".reveal-item");
// Checks whether the visitor has requested less animation on their device.
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Runs scroll reveal when items exist, the browser supports it, and motion is allowed.
if (revealItems.length > 0 && "IntersectionObserver" in window && !prefersReducedMotion) {
  // Prepares each reveal item in its hidden starting position.
  revealItems.forEach((item) => {
    // Adds the CSS class that supplies the starting animation styles.
    item.classList.add("is-reveal-ready");
  });

  // Creates a browser observer that reports when items enter the viewport.
  const revealObserver = new IntersectionObserver(
    // Receives all visibility changes detected by the observer.
    (entries, observer) => {
      // Checks each item whose viewport visibility changed.
      entries.forEach((entry) => {
        // Continues only when the item has entered the visible area.
        if (entry.isIntersecting) {
          // Adds the class that moves and fades the item into view.
          entry.target.classList.add("is-visible");
          // Stops watching the item after its one-time reveal.
          observer.unobserve(entry.target);
        }
      });
    },
    {
      // Triggers the reveal after 15 percent of an item is visible.
      threshold: 0.15,
      // Moves the bottom trigger upward so reveals begin before the screen edge.
      rootMargin: "0px 0px -40px",
    },
  );

  // Registers every reveal item with the viewport observer.
  revealItems.forEach((item) => {
    // Starts watching this item for its first entrance into view.
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
