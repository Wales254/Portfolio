// Dark/Light Theme Toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", themeToggle.checked);
});

// Rotating titles / Typing effect
const titles = ["Full Stack Developer", "Web Designer", "Tech Enthusiast"];
const rotatingTitle = document.getElementById("rotatingTitle");
let index = 0;

function rotateTitle() {
  rotatingTitle.textContent = titles[index];
  index = (index + 1) % titles.length;
}

setInterval(rotateTitle, 2000);
rotateTitle();
// Fancy focus effect for inputs
const inputs = document.querySelectorAll("#contact-form input, #contact-form textarea");

inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.style.borderColor = "#007bff";
    input.style.boxShadow = "0 0 8px rgba(0,123,255,0.3)";
  });
  input.addEventListener("blur", () => {
    input.style.borderColor = "";
    input.style.boxShadow = "";
  });
});
// Simple fade-in on scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + window.innerHeight;
  sections.forEach(section => {
    if(scrollY > section.offsetTop + 100){
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      section.style.transition = "all 0.8s ease";
    }
  });
});
