const toggleBTN = document.getElementsByClassName("toggle-button")[0];
const links = document.getElementsByClassName("links2")[0];

toggleBTN.addEventListener("click", () => {
  links.classList.toggle("active");
});
