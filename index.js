function ellipsify (str) {
  if (str.length > 20) {
      return (str.substring(0, 20) + "..."+str.slice(-10));
  }
  else {
  return str;
}
}
function jsonTask(items){
  const InitialRightImage=document.querySelector(".rImg")
  InitialRightImage.setAttribute("src",items[0].previewImage)
  InitialRightImage.setAttribute("width","500px")
  InitialRightImage.setAttribute("height","700px")
    items.forEach(item => {
      const left=document.querySelector(".left-item")
      const Box=document.createElement("div")
      Box.style.display="grid";
      Box.style.gridTemplateColumns="60px 240px"
      Box.insertAdjacentHTML('beforeend',`
        <img src=${item["previewImage"]} class="logo" width="40px" height="40px" margin:"0px">
        <div class="titleImage" margin:"0px">${item["title"]}</div>
      `)
      const rightImg=document.createElement("img")
      rightImg.setAttribute("src",item["previewImage"])
      
      // console.log(logo)
      
      Box.style.margin="3px 0px"
      Box.classList.add("box")

      left.append(Box)
      
    });
    const titleImage=document.querySelectorAll(".titleImage")
    titleImage.forEach((item)=>{
      // console.log(item.innerHTML)
      item.innerHTML=ellipsify(item.innerHTML)
      item.style.marginTop+="10px"
      item.style.marginLeft="0px"
    })   
    const logos=document.querySelectorAll(".logo")
    console.log(logos)
    logos.forEach((logo)=>{
      logo.addEventListener("click",(e)=>{
        InitialRightImage.setAttribute("src",logo.currentSrc)
      })
    })
    const boxes=document.querySelectorAll(".box")
    console.log(boxes)
    boxes.forEach((box)=>{
      box.addEventListener("mouseover",(e)=>{
        box.style.backgroundColor="skyblue"
      })
    })
    boxes.forEach((box)=>{
      box.addEventListener("mouseleave",(e)=>{
        box.style.backgroundColor="white"
      })
    })
}



fetch('./Untitled.txt')
  .then(response => response.json())
  .then(jsonResponse => {
      // console.log(jsonResponse)
      jsonTask(jsonResponse)
    }) 

