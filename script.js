```javascript
// ==========================
// DOM READY WRAPPER
// ==========================
document.addEventListener("DOMContentLoaded", () => {

  // ==========================
  // DARK / LIGHT MODE
  // ==========================
  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      themeToggle.checked = true;
    }

    themeToggle.addEventListener("change", () => {
      document.body.classList.toggle("dark");

      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark")
          ? "dark"
          : "light"
      );
    });
  }

  // ==========================
  // TYPING EFFECT
  // ==========================
  const titles = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Software Engineer",
    "Tech Enthusiast"
  ];

  const rotatingTitle = document.getElementById("rotatingTitle");

  let titleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    if (!rotatingTitle) return;

    const currentTitle = titles[titleIndex];

    rotatingTitle.textContent =
      currentTitle.substring(0, charIndex);

    if (!deleting) {
      charIndex++;

      if (charIndex > currentTitle.length) {
        deleting = true;

        setTimeout(typeEffect, 1200);
        return;
      }
    } else {
      charIndex--;

      if (charIndex <= 0) {
        charIndex = 0;
        deleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
      }
    }

    setTimeout(
      typeEffect,
      deleting ? 50 : 100
    );
  }

  typeEffect();

  // ==========================
  // SMOOTH SCROLL
  // ==========================
  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      // Ignore empty "#" links
      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  });

  // ==========================
  // FADE-IN ON SCROLL
  // ==========================
  const sections = document.querySelectorAll("section");

  function revealSections() {

    const trigger =
      window.innerHeight * 0.85;

    sections.forEach(section => {

      const top =
        section.getBoundingClientRect().top;

      if (top < trigger) {
        section.classList.add("show");
      }

    });

  }

  window.addEventListener(
    "scroll",
    revealSections,
    { passive: true }
  );

  revealSections();

  // ==========================
  // NAVBAR SCROLL EFFECT
  // ==========================
  const navbar =
    document.querySelector(".navbar");

  function updateNavbar() {

    if (!navbar) return;

    navbar.classList.toggle(
      "nav-scrolled",
      window.scrollY > 50
    );

  }

  window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
  );

  updateNavbar();

  // ==========================
  // ACTIVE NAVIGATION LINK
  // ==========================
  const navLinks =
    document.querySelectorAll(".navbar a");

  function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

      const sectionTop =
        section.offsetTop - 200;

      if (window.scrollY >= sectionTop) {
        currentSection = section.id;
      }

    });

    navLinks.forEach(link => {

      link.classList.remove("active");

      if (
        link.getAttribute("href") ===
        `#${currentSection}`
      ) {
        link.classList.add("active");
      }

    });

  }

  window.addEventListener(
    "scroll",
    updateActiveNav,
    { passive: true }
  );

  updateActiveNav();

});
```
