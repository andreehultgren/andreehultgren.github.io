// Wait for the page to load
document.documentElement.setAttribute("data-theme", "dark");

document.addEventListener("DOMContentLoaded", function (event) {
  // Remember color theme
  const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;

  // Load color theme if it exists
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }

  // Add a listener for the menu
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  hamburgerMenu.addEventListener("click", function (e) {
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    if (hamburgerMenu.classList.contains("open")) {
      hamburgerMenu.classList.remove("open");
    } else {
      hamburgerMenu.classList.add("open");
    }
  });

  // Remove animation blocker after loading
  setTimeout(function () {
    document.body.className = "";
  }, 500);

  // Close menu when URI changes
  window.addEventListener("hashchange", function () {
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    hamburgerMenu.classList.remove("open");
  });

  // Add eventlistener for dark mode switch
  const toggleSwitch = document.getElementById("dark-mode");
  toggleSwitch.addEventListener("click", function (e) {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });
});
