```javascript
// ==========================
// DOM READY
// ==========================

document.addEventListener("DOMContentLoaded", () => {

  // ==========================
  // DARK / LIGHT THEME TOGGLE
  // ==========================

  const themeToggle =
    document.getElementById("theme-toggle");

  if (themeToggle) {

    themeToggle.addEventListener("change", () => {

      document.body.classList.toggle(
        "dark",
        themeToggle.checked
      );

    });

  }


  // ==========================
  // ROTATING TITLES
  // ==========================

  const titles = [
    "Full Stack Developer",
    "Web Designer",
    "Tech Enthusiast"
  ];

  const rotatingTitle =
    document.getElementById("rotatingTitle");

  let index = 0;

  function rotateTitle() {

    if (!rotatingTitle) return;

    rotatingTitle.textContent =
      titles[index];

    index =
      (index + 1) % titles.length;

  }

  rotateTitle();

  setInterval(
    rotateTitle,
    2000
  );


  // ==========================
  // INPUT FOCUS EFFECT
  // ==========================

  const inputs =
    document.querySelectorAll(
      "#contact-form input, #contact-form textarea"
    );

  inputs.forEach(input => {

    input.addEventListener("focus", () => {

      input.style.borderColor = "#6366f1";

      input.style.boxShadow =
        "0 0 8px rgba(99,102,241,0.3)";

    });

    input.addEventListener("blur", () => {

      input.style.borderColor = "";

      input.style.boxShadow = "";

    });

  });


  // ==========================
  // FADE-IN ON SCROLL
  // ==========================

  const sections =
    document.querySelectorAll("section");

  function revealSections() {

    const scrollY =
      window.scrollY +
      window.innerHeight;

    sections.forEach(section => {

      if (
        scrollY >
        section.offsetTop + 100
      ) {

        section.style.opacity = "1";

        section.style.transform =
          "translateY(0)";

        section.style.transition =
          "all 0.8s ease";

      }

    });

  }

  window.addEventListener(
    "scroll",
    revealSections,
    { passive: true }
  );

  revealSections();

});
```
