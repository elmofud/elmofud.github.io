const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const top = section.offsetTop - 100;
    const id = section.getAttribute("id");
    if (window.scrollY >= top) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelector(`.nav-links a[href="#${id}"]`)
        .classList.add("active");
    }
  });
});
