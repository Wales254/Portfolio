// ==========================
// DOM READY WRAPPER
// ==========================
document.addEventListener("DOMContentLoaded", () => {

  // ==========================
  // THEME TOGGLE (FULLY SYNCED)
  // ==========================
  const themeToggle = document.getElementById("theme-toggle");

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  if (themeToggle) {
    themeToggle.checked = document.body.classList.contains("dark");

    themeToggle.addEventListener("change", () => {
      document.body.classList.toggle("dark");

      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
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

    const current = titles[titleIndex];

    rotatingTitle.textContent = current.substring(0, charIndex);

    if (!deleting) {
      charIndex++;

      if (charIndex > current.length) {
        deleting = true;
        setTimeout(typeEffect, 1200);
        return;
      }
    } else {
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
      }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
  }

  typeEffect();

  // ==========================
  // SMOOTH SCROLL
  // ==========================
  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");

      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();

        const target = document.querySelector(targetId);

        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // ==========================
  // SECTION REVEAL
  // ==========================
  const sections = document.querySelectorAll("section");

  const revealSections = () => {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;

      if (top < trigger) {
        section.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revealSections);
  revealSections();

  // ==========================
  // NAVBAR EFFECT
  // ==========================
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (!navbar) return;

    navbar.classList.toggle("nav-scrolled", window.scrollY > 50);
  });

  // ==========================
  // ACTIVE LINK
  // ==========================
  const navLinks = document.querySelectorAll(".navbar a");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;

      if (window.scrollY >= sectionTop) {
        currentSection = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });

  // ==========================
  // CONTACT FORM (NO REDIRECT + SUCCESS POPUP)
  // ==========================
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault(); // stop Formspree redirect

      const formData = new FormData(contactForm);

      try {
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        });

        if (response.ok) {
          showSuccessMessage();
          contactForm.reset();
        } else {
          alert("❌ Something went wrong. Please try again.");
        }

      } catch (error) {
        alert("❌ Network error. Please check your connection.");
      }
    });
  }

  // ==========================
  // SUCCESS MESSAGE UI
  // ==========================
  function showSuccessMessage() {
    const msg = document.createElement("div");

    msg.textContent = "✅ Message sent successfully!";
    msg.style.position = "fixed";
    msg.style.bottom = "20px";
    msg.style.right = "20px";
    msg.style.background = "#22c55e";
    msg.style.color = "white";
    msg.style.padding = "15px 20px";
    msg.style.borderRadius = "10px";
    msg.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
    msg.style.zIndex = "9999";
    msg.style.fontWeight = "bold";

    document.body.appendChild(msg);

    setTimeout(() => {
      msg.remove();
    }, 3000);
  }

});
