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
      // console.log(item.title)
      const left=document.querySelector(".left-item")
      const right=document.querySelector(".right-item")
      const Box=document.createElement("div")
      Box.style.display="grid";
      Box.style.gridTemplateColumns="80px 250px"
      // Box.style.gridTemplateRows="70px"
      Box.insertAdjacentHTML('afterBegin',`
        <img src=${item["previewImage"]} width="40px" height="40px" margin:"0px">
        <div class="titleImage" margin:"0px">${item["title"]}</div>
      `)
      
      const rightImg=document.createElement("img")
      rightImg.setAttribute("src",item["previewImage"])
      
      // console.log(logo)
      
      Box.style.margin="3px"

      left.append(Box)
      rightImg.setAttribute("width","500px")
      rightImg.setAttribute("height","700px")
      // right.append(rightImg)//put event listener and change src of .rImg
      
    });
    const titleImage=document.querySelectorAll(".titleImage")
    titleImage.forEach((item)=>{
      console.log(item.innerHTML)
      item.innerHTML=ellipsify(item.innerHTML)
      item.style.marginTop+="10px"
      item.style.marginLeft="0px"
    })
    
}


fetch('./Untitled.txt')
  .then(response => response.json())
  .then(jsonResponse => {
      // console.log(jsonResponse)
      jsonTask(jsonResponse)
    }) 
