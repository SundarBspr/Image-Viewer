import { ellipsify } from "./ellipsify.js";
export function createBox(items) {
  items.forEach((item) => {
    const left = document.querySelector(".left-item");
    const box = document.createElement("div");
    box.style.display = "grid";
    box.style.gridTemplateColumns = "50px auto";
    box.insertAdjacentHTML(
      "beforeend",
      `
          <img src=${item["previewImage"]} class="logo" width="40px" height="40px" margin:"0px">
          <div class="titleImage" margin:"0px">${item["title"]}</div>
        `
    );
    const rightImg = document.createElement("img");
    rightImg.setAttribute("src", item["previewImage"]);
    box.style.margin = "3px 7px";
    box.style.borderRadius = "10px";
    box.classList.add("box");
    left.append(box);
  });
  var boxes = document.querySelectorAll(".box");
  var titles = document.querySelectorAll(".titleImage");
  var textBox = document.getElementById("desc");
  var initialRightImage = document.querySelector(".rImg");
  var currentChild = 0;
  textBox.value = titles[currentChild].innerText;
  boxes[currentChild].style.backgroundColor = "skyblue";
  initialRightImage.setAttribute("src", items[0].previewImage);
  initialRightImage.style.maxHeight = "700px";
  titles.forEach((title) => {
    title.innerText = ellipsify(
      title.innerText,
      Array.from(titles).indexOf(title)
    );
    title.style.marginTop += "10px";
    title.style.marginLeft = "0px";
  });
  boxes[currentChild].style.backgroundColor = "skyblue";
}
