const navbar = document.querySelector(".navbar");
let title = document.querySelector(".title");
const navbtn = document.querySelector(".btn");

function scrollFunction(event) {
  event.preventDefault();
  if (window.pageYOffset > 60) {
    navbar.style.padding = "15px 10px";
    navbar.style.boxShadow = "0 1px 5px rgba(190, 190, 190, 0.7)";
    title.style.boxShadow = "none";
    title.classList.add("title-shrink");
  } else {
    navbar.style.padding = "25px 10px"; //스크롤이 내려가지 않으면
    navbar.style.boxShadow = "none";
    title.classList.remove("title-shrink");
  }
}

window.addEventListener("scroll", scrollFunction);
