import { home } from "./home.js";
import { about } from "./about.js";
import { menu } from "./menu.js";
import "./style.css";

const homeBtn = document.querySelector("button.home");
const menuBtn = document.querySelector("button.menu");
const aboutBtn = document.querySelector("button.about");
const content = document.getElementById("content");

content.innerHTML = home;
homeBtn.setAttribute("isSelected", "true");

function resetSelectedPage() {
  document.querySelectorAll("button").forEach((btn) => {
    btn.setAttribute("isSelected", "false");
  });
}

homeBtn.addEventListener("click", () => {
  resetSelectedPage();
  homeBtn.setAttribute("isSelected", "true");
  content.innerHTML = home;
});
menuBtn.addEventListener("click", () => {
  resetSelectedPage();
  menuBtn.setAttribute("isSelected", "true");
  content.innerHTML = menu;
});
aboutBtn.addEventListener("click", () => {
  resetSelectedPage();
  aboutBtn.setAttribute("isSelected", "true");
  content.innerHTML = about;
});
