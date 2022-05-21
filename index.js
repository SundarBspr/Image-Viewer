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
  InitialRightImage.setAttribute("width","500px")
  InitialRightImage.setAttribute("height","700px")
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
      Box.style.margin="3px 0px"
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
    var textBox=document.querySelector("#desc")
    var currentChild=0
    textBox.placeholder=titleImage[currentChild].innerText
    
    boxes[currentChild].style.backgroundColor="skyblue"
    logos.forEach((logo)=>{
      logo.addEventListener("click",(e)=>{
        boxes.forEach((box)=>{
          box.style.backgroundColor="white"
        })
        logo.parentElement.style.backgroundColor="skyblue"
        console.log(logo)
        InitialRightImage.setAttribute("src",logo.currentSrc)
        currentChild=Array.from(logos).indexOf(logo)
        updateText()
      })
    })

    //Adding Keyboard events
    
    document.onkeydown=function(e){
      if(e.key=="ArrowDown"){
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
    else if(e.key=="ArrowUp"){
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
    else if(e.key=="Enter"){
      if(textBox.value!=""){
        titleImage[currentChild].innerText=textBox.value
      }
      textBox.value=""
      textBox.placeholder=titleImage[currentChild].innerText
    }
    }

    //Adding Text Box Functionality
    function updateText(){
      textBox.placeholder=titleImage[currentChild].innerText
      textBox.value=""
    }


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

