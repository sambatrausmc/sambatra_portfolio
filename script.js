const navToggle = document.querySelector(".nav-toggle");
const primaryNavigation = document.querySelector(".primary-nav");

if (navToggle && primaryNavigation) {
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
