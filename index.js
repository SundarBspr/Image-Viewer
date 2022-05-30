import { createBox } from "./helpers/createBox.js";
import {
  goLeftImg,
  goRightImg,
  updateText,
} from "./helpers/goLeftRightImage.js";
import { ellipsify } from "./helpers/ellipsify.js";

function updateDom(items) {
  createBox(items);

  //global variables
  var logos = document.querySelectorAll(".logo");
  var boxes = document.querySelectorAll(".box");
  var titles = document.querySelectorAll(".titleImage");
  var textBox = document.getElementById("desc");
  var initialRightImage = document.querySelector(".rImg");
  var currentChild = 0;

  function handleClick() {
    boxes.forEach((box) => {
      box.addEventListener("click", (e) => {
        boxes.forEach((box) => {
          box.style.backgroundColor = "white";
        });
        box.style.backgroundColor = "skyblue";
        currentChild = Array.from(boxes).indexOf(box);
        initialRightImage.setAttribute("src", logos[currentChild].currentSrc);
        updateText(currentChild);
      });
    });
    textBox.addEventListener("input", (e) => {
      titles[currentChild].innerText = ellipsify(textBox.value, currentChild);
    });
  }
  function imageCarousel() {
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    prevBtn.addEventListener("click", () => {
      currentChild = goLeftImg(currentChild);
    });
    nextBtn.addEventListener("click", () => {
      currentChild = goRightImg(currentChild);
    });
  }

  handleClick();
  imageCarousel();

  //Adding Keyboard events
  document.onkeydown = function (e) {
    if (e.key == "ArrowDown") {
      currentChild = goRightImg(currentChild);
    } else if (e.key == "ArrowUp") {
      currentChild = goLeftImg(currentChild);
    }
  };
}

fetch("./Untitled.txt")
  .then((response) => response.json())
  .then((jsonResponse) => {
    updateDom(jsonResponse);
  });
