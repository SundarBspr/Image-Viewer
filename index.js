function ellipsify (str) {
  if (str.length > 20) {
      return (str.substring(0, 20) + "..."+str.slice(-10))
  }
  else {
  return str;
}
}
function jsonTask(items){
  const InitialRightImage=document.querySelector(".rImg")
  InitialRightImage.setAttribute("src",items[0].previewImage)
  InitialRightImage.style.maxHeight="700px";
    items.forEach(item => {
      const left=document.querySelector(".left-item")
      const Box=document.createElement("div")
      Box.style.display="grid"
      Box.style.gridTemplateColumns="60px 240px"
      Box.insertAdjacentHTML('beforeend',`
        <img src=${item["previewImage"]} class="logo" width="40px" height="40px" margin:"0px">
        <div class="titleImage" margin:"0px">${item["title"]}</div>
      `)
      const rightImg=document.createElement("img")
      rightImg.setAttribute("src",item["previewImage"])
      Box.style.margin="3px 7px"
      Box.style.borderRadius="10px"
      Box.classList.add("box")
      left.append(Box)
    });
    const titleImage=document.querySelectorAll(".titleImage")
    titleImage.forEach((item)=>{
      item.innerHTML=ellipsify(item.innerHTML)
      item.style.marginTop+="10px"
      item.style.marginLeft="0px"
    })   
    //global variables
    var logos=document.querySelectorAll(".logo")
    var boxes=document.querySelectorAll(".box")
    var titles=document.querySelectorAll(".titleImage")
    var textBox=document.getElementById("desc")
    var currentChild=0
    textBox.value=titleImage[currentChild].innerText
    
    boxes[currentChild].style.backgroundColor="skyblue"
    boxes.forEach((box)=>{
      box.addEventListener("click",(e)=>{
        boxes.forEach((box)=>{
          box.style.backgroundColor="white"
        })
        box.style.backgroundColor="skyblue"
        currentChild=Array.from(boxes).indexOf(box)
        console.log(boxes[currentChild])
        InitialRightImage.setAttribute("src",logos[currentChild].currentSrc)
        updateText()
      })
    })
    textBox.addEventListener("input",(e)=>{
      titles[currentChild].innerText=textBox.value
    })

    //Adding Keyboard events
    function goRightImg(){
      currentBox=logos[currentChild].parentElement
      currentBox.style.backgroundColor="white"
      if(currentChild==logos.length-1){
        currentChild=0
      }
      else{
        currentChild+=1
      }
      currentBox=logos[currentChild].parentElement
      currentBox.style.backgroundColor="skyblue"
      InitialRightImage.setAttribute("src",logos[currentChild].currentSrc)
      updateText()
    }
    function goLeftImg(){
      currentBox=logos[currentChild].parentElement
      currentBox.style.backgroundColor="white"
      if(currentChild==0){
        currentChild=logos.length-1
      }
      else{
        currentChild-=1
      }
      currentBox=logos[currentChild].parentElement
      currentBox.style.backgroundColor="skyblue"
      InitialRightImage.setAttribute("src",logos[currentChild].currentSrc)
      updateText()
    }
    document.onkeydown=function(e){
      if(e.key=="ArrowDown"){
        goRightImg();
    }
      else if(e.key=="ArrowUp"){
        goLeftImg();
    }
    // else if(e.key=="Enter"){
    //   if(textBox.value!=""){
    //     titleImage[currentChild].innerText=textBox.value
    //   }
    //   textBox.value=titleImage[currentChild].innerText
    // }
    }

    //Adding Text Box Functionality
    function updateText(){
      textBox.value=titleImage[currentChild].innerText
    }

    //Image Carousel
    prevBtn=document.querySelector(".prev")
    nextBtn=document.querySelector(".next")
    prevBtn.addEventListener("click",()=>{
      goLeftImg();
    })
    nextBtn.addEventListener("click",()=>{
      goRightImg();
    })

    //THIS IS FOR HOVERING THE MOUSE(NOT REQUIRED)
    // const boxes=document.querySelectorAll(".box")
    // console.log(boxes)
    // boxes.forEach((box)=>{
    //   box.addEventListener("mouseover",(e)=>{
    //     box.style.backgroundColor="skyblue"
    //   })
    // })
    // boxes.forEach((box)=>{
    //   box.addEventListener("mouseleave",(e)=>{
    //     box.style.backgroundColor="white"
    //   })
    // })
}



fetch('./Untitled.txt')
  .then(response => response.json())
  .then(jsonResponse => {
      // console.log(jsonResponse)
      jsonTask(jsonResponse)
    }) 

