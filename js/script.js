// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Hambuerger Menu di Klik
document.querySelector("#humburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar side bar untuk menghilangkan nav
const humburger = document.querySelector("#humburger-menu");
document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
