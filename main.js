// Scroll-to-top button
const scrollToTopBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Fade-in on scroll
const fadeElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
fadeElements.forEach(el => observer.observe(el));

// Theme Toggle
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Rotating Typing Effect
const typing = document.querySelector(".typing");
const titles = [
  "Full Stack Developer",
  "Tech Explorer",
  "UI/UX Enthusiast",
  "Problem Solver"
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let currentTitle = "";

function typeEffect() {
  currentTitle = titles[titleIndex];
  
  if (isDeleting) {
    typing.textContent = currentTitle.substring(0, charIndex--);
  } else {
    typing.textContent = currentTitle.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentTitle.length) {
    isDeleting = true;
    setTimeout(typeEffect, 2000); // pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    setTimeout(typeEffect, 500); // pause before typing new
  } else {
    setTimeout(typeEffect, isDeleting ? 60 : 100);
  }
}

typeEffect();
