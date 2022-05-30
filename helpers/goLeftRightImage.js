export function goRightImg(currentChild) {
  var boxes = document.querySelectorAll(".box");
  var currentBox = boxes[currentChild];
  currentBox.style.backgroundColor = "white";
  if (currentChild == boxes.length - 1) {
    currentChild = 0;
  } else {
    currentChild += 1;
  }
  currentBox = boxes[currentChild];
  currentBox.style.backgroundColor = "skyblue";
  var initialRightImage = document.querySelector(".rImg");
  var logos = document.querySelectorAll(".logo");
  initialRightImage.setAttribute("src", logos[currentChild].currentSrc);
  updateText(currentChild);
  return currentChild;
}

export function goLeftImg(currentChild) {
  var boxes = document.querySelectorAll(".box");
  var currentBox = boxes[currentChild];
  currentBox.style.backgroundColor = "white";
  if (currentChild == 0) {
    currentChild = boxes.length - 1;
  } else {
    currentChild -= 1;
  }
  currentBox = boxes[currentChild];
  currentBox.style.backgroundColor = "skyblue";
  var initialRightImage = document.querySelector(".rImg");
  var logos = document.querySelectorAll(".logo");
  initialRightImage.setAttribute("src", logos[currentChild].currentSrc);
  updateText(currentChild);
  return currentChild;
}

//Adding Text box Functionality
export function updateText(currentChild) {
  var textBox = document.getElementById("desc");
  var titles = document.querySelectorAll(".titleImage");
  textBox.value = titles[currentChild].innerText;
}
