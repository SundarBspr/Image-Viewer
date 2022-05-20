function jsonTask(items){
    items.forEach(item => {
      // console.log(item.title)
      const left=document.querySelector(".left-item")
      const Box=document.createElement("div")
      left.append(Box)
      Box.style.display="flex";
      Box.insertAdjacentHTML('beforeend',`
        <img class="logo" src=${item["previewImage"]}>
        <p class="titleImage">${item["title"]}</p>
      `)
      const logo=document.querySelector(".logo")
      const titleImage=document.querySelector(".titleImage")
      logo.style.width="70px"
      logo.style.height="70px"
      console.log(titleImage)
    });
    
    
}


fetch('./Untitled.txt')
  .then(response => response.json())
  .then(jsonResponse => {
      console.log(jsonResponse)
      jsonTask(jsonResponse)
    }) 
