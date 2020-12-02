function navigate(destination) {
  window.location.href = destination;
}

function loadMode() {
  if (localStorage.getItem("darkMode") == 1) {
    darkMode();
  } else {
    lightMode();
  }
}

function toggleMode() {
  if (localStorage.getItem("darkMode") == 1) {
    lightMode();
  } else {
    darkMode();
  }
}

function lightMode() {
  localStorage.setItem("darkMode", 0);
  let root = document.documentElement;
  root.style.setProperty("--background-color", "var(--light-background-color");
  root.style.setProperty("--section-color", "var(--light-section-color");
  root.style.setProperty("--text-color", "var(--light-text-color");
  root.style.setProperty("--video-shadow", "var(--light-video-shadow");
  root.style.setProperty("--mobile-shadow", "var(--light-mobile-shadow");
  root.style.setProperty("--home-icon-filter", "var(--light-home-icon-filter");
  if (document.getElementById("dark-mode-icon") != null) {
    document.getElementById("dark-mode-icon").className = "fa fa-moon-o";
  }
}

function darkMode() {
  localStorage.setItem("darkMode", 1);
  let root = document.documentElement;
  root.style.setProperty("--background-color", "var(--dark-background-color");
  root.style.setProperty("--section-color", "var(--dark-section-color");
  root.style.setProperty("--text-color", "var(--dark-text-color");
  root.style.setProperty("--video-shadow", "var(--dark-video-shadow");
  root.style.setProperty("--mobile-shadow", "var(--dark-mobile-shadow");
  root.style.setProperty("--home-icon-filter", "var(--dark-home-icon-filter");
  if (document.getElementById("dark-mode-icon") != null) {
    document.getElementById("dark-mode-icon").className = "fa fa-sun-o";
  }
}

function setGoHomeButton () {
  var icon = document.getElementById("go-home-icon");
  // Fade button in
  if (window.pageYOffset >= 300) {
    icon.style.transition = '0.8s';
    icon.style.opacity = 1;
  }
  // Fade button out
  else {
    icon.style.transition = '0.8s';
    icon.style.opacity = 0;
  }
}

function openVideo(videoId) {
  var modal = document.getElementById(videoId);
  modal.style.display = "flex";
}

function closeVideo(videoId) {
  var modal = document.getElementById(videoId);
  var video = modal.querySelector("video");
  modal.style.display = "none";
  video.pause();
}

// Load when before page loads to get correct background color
loadMode();

// Load once page loads to change dark mode icon
window.addEventListener('DOMContentLoaded', (event) => {
  loadMode();
  setGoHomeButton();
});

window.addEventListener('scroll', (event) => {
  setGoHomeButton();
});
