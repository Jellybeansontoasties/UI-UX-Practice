const sections = document.querySelectorAll(".section");
const mainContainer = document.querySelector(".main-container");

// Default dimensions for all sections
const defaultDimensions = {
  work: { top: "0%", left: "0%", height: "40%", width: "60%" },
  connect: { top: "0%", right: "0%", height: "60%", width: "40%" },
  about: { bottom: "0%", left: "0%", height: "60%", width: "40%" },
  community: { bottom: "0%", right: "0%", height: "40%", width: "60%" },
  logo: { top: "50%", left: "50%", height: "20%", width: "20%" },
};

// Hover states for each section
const hoverStates = {
  work: {
    work: { top: "0%", left: "0%", height: "50%", width: "70%" },
    connect: { top: "0%", right: "0%", height: "70%", width: "30%" },
    about: { bottom: "0%", left: "0%", height: "50%", width: "50%" },
    community: { bottom: "0%", right: "0%", height: "30%", width: "50%" },
    logo: { top: "60%", left: "60%", height: "20%", width: "20%" },
  },
  connect: {
    work: { top: "0%", left: "0%", height: "60%", width: "50%" },
    connect: { top: "0%", right: "0%", height: "80%", width: "50%" },
    about: { bottom: "0%", left: "0%", height: "40%", width: "30%" },
    community: { bottom: "0%", right: "0%", height: "20%", width: "70%" },
    logo: { top: "70%", left: "40%", height: "20%", width: "20%" },
  },
  about: {
    work: { top: "0%", left: "0%", height: "20%", width: "70%" },
    connect: { top: "0%", right: "0%", height: "40%", width: "30%" },
    about: { bottom: "0%", left: "0%", height: "80%", width: "50%" },
    community: { bottom: "0%", right: "0%", height: "60%", width: "50%" },
    logo: { top: "30%", left: "60%", height: "20%", width: "20%" },
  },
  community: {
    work: { top: "0%", left: "0%", height: "30%", width: "50%" },
    connect: { top: "0%", right: "0%", height: "50%", width: "50%" },
    about: { bottom: "0%", left: "0%", height: "70%", width: "30%" },
    community: { bottom: "0%", right: "0%", height: "50%", width: "70%" },
    logo: { top: "40%", left: "40%", height: "20%", width: "20%" },
  },
};

// Apply hover styles when a section is hovered
sections.forEach((section) => {
  section.addEventListener("mouseenter", () => {
    const hoverState = section.classList[1]; // Get the hovered section (work, connect, etc.)
    applyHoverStyles(hoverState);
  });

  section.addEventListener("mouseleave", () => {
    resetToDefaultStyles(); // Reset everything to default
  });
});

// Apply hover styles to all sections
function applyHoverStyles(hoverState) {
  const newDimensions = hoverStates[hoverState]; // Get the hover-specific dimensions

  Object.keys(newDimensions).forEach((key) => {
    const section = document.querySelector(`.${key}`);
    Object.assign(section.style, newDimensions[key]);
  });
}

// Reset all sections to their default dimensions
function resetToDefaultStyles() {
  Object.keys(defaultDimensions).forEach((key) => {
    const section = document.querySelector(`.${key}`);
    Object.assign(section.style, defaultDimensions[key]);
  });
}

document.querySelectorAll(".section, .logo").forEach((section) => {
  section.addEventListener("click", () => {
    const lightboxId = section.getAttribute("data-lightbox");
    const lightbox = document.getElementById(lightboxId);
    if (lightbox) {
      lightbox.style.display = "flex";
    }
  });
});

document.querySelectorAll(".lightbox .close-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    const lightbox = e.target.closest(".lightbox");
    if (lightbox) {
      lightbox.style.display = "none";
    }
  });
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".lightbox").forEach((lightbox) => {
      lightbox.style.display = "none";
    });
  }
});

