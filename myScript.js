const setNavInteractions = () => {
  const navLinks = document.getElementById("navLinks");
  const checkBox = document.getElementById("check");

  if (!navLinks || !checkBox) {
    return;
  }

  checkBox.addEventListener("change", function handleNavToggle() {
    navLinks.style.display = this.checked ? "block" : "none";
  });

  const currentPage = window.location.pathname.split("/").pop();
  navLinks.querySelectorAll("a[href]").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
};

const initNetworkingCards = () => {
  const cards = document.querySelectorAll(".network-card");
  if (!cards.length) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const canAnimateOnScroll = "IntersectionObserver" in window && !prefersReducedMotion.matches;
  const observer = canAnimateOnScroll
    ? new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      )
    : null;

  const recalcOpenPanels = () => {
    cards.forEach((card) => {
      if (!card.classList.contains("is-open")) {
        return;
      }
      const panel = card.querySelector(".card-panel");
      if (panel) {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });
  };

  cards.forEach((card) => {
    const panel = card.querySelector(".card-panel");
    const toggle = card.querySelector(".card-toggle");
    if (!panel || !toggle) {
      return;
    }

    const isOpen = card.classList.contains("is-open");
    panel.style.maxHeight = isOpen ? `${panel.scrollHeight}px` : "0px";
    toggle.setAttribute("aria-expanded", String(isOpen));

    toggle.addEventListener("click", () => {
      const nextState = !card.classList.contains("is-open");
      card.classList.toggle("is-open", nextState);
      toggle.setAttribute("aria-expanded", String(nextState));
      panel.style.maxHeight = nextState ? `${panel.scrollHeight}px` : "0px";
    });

    if (observer) {
      if (!card.classList.contains("is-visible")) {
        observer.observe(card);
      }
    } else {
      card.classList.add("is-visible");
    }
  });

  window.addEventListener("resize", recalcOpenPanels);
  window.addEventListener("load", recalcOpenPanels);
};

document.addEventListener("DOMContentLoaded", () => {
  setNavInteractions();
  initNetworkingCards();
});
