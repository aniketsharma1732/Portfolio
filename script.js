function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  const toggleBtn = document.getElementById("toggle-mode");
  const body = document.body;

  
}

const toggleBtn = document.getElementById("toggle-mode");
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });