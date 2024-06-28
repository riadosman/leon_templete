let Links = document.querySelector(".links");
let list = document.querySelector(".links ul");
Links.addEventListener("click", () => {
  list.classList.toggle("active");
});
