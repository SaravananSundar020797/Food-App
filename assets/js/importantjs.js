let appInput = document.getElementById("input-foodBlock");
let appAddBtn = document.getElementById("addBtn");
let foodAdd = document.querySelector(".food-items");
let foodApp = document.querySelector(".food");
let emptySpace = document.querySelector(".emptyList");
let cout = document.querySelector("#foodCount");

document.addEventListener("DOMContentLoaded",() => {
  let localStore = [...JSON.parse(localStorage.getItem("foodItems"))];

localStore.forEach(localList => {
  console.log(localList.foodItem)
  let createLi = document.createElement("li");

  createLi.className = "food-item";

  let createDiv = document.createElement("div");

  createDiv.textContent = localList.foodItem;
  createDiv.className="food";

  let createBtnDiv = document.createElement("div");
  
  createBtnDiv.className="xBtn"
  createBtnDiv.setAttribute("onclick","removeItem(event)");
  createBtnDiv.textContent = "X";

  createLi.append(createDiv,createBtnDiv);
  foodAdd.prepend(createLi);
});

refreshUI();

})

let handleInput = () =>{

  if(appInput.value === ""){
    alert("Please Fill Input Filled");
  } 
  else{
    let createLi = document.createElement("li");

  createLi.className = "food-item";

  let createDiv = document.createElement("div");

  createDiv.textContent = appInput.value;
  createDiv.className="food";

  let createBtnDiv = document.createElement("div");
  
  createBtnDiv.className="xBtn"
  createBtnDiv.setAttribute("onclick","removeItem(event)");
  createBtnDiv.textContent = "X";

  createLi.append(createDiv,createBtnDiv);
  foodAdd.prepend(createLi);

  // Set Local storage value

  localStorage.setItem("foodItems",JSON.stringify([...JSON.parse(localStorage.getItem("foodItems")|| "[]"), {foodItem : appInput.value}]));

  // Resetting  the inputFood value

  appInput.value = "";
  }
  


 
  refreshUI()

}

appAddBtn.addEventListener("click",handleInput);
appInput.addEventListener("keyup",(event)=>{
  if(event.key === "Enter"){
    handleInput();
    console.log(event);
  }else if(event.key === "KeyZ" && (event.ctrlKey || event.metaKey)){
    appInput.value = " ";
  }
});

function removeItem(event){

  let extRemove = event.target.parentNode;
  //Remove
  extRemove.remove();

  // Remove LocalStorage

  let localStore = [...JSON.parse(localStorage.getItem("foodItems"))];

  localStore.forEach(localList => {
    if(localList.foodItem === extRemove.children[0].innerText){
      localStore.splice(localStore.indexOf(localList),1);
    }
  
  });

  localStorage.setItem("foodItems",JSON.stringify(localStore));

  refreshUI()

}

function refreshUI(){
  cout.innerText = `You have ${foodAdd.children.length} list`;
  // if (foodAdd.children.length > 0){
  //   emptySpace.hidden = true;
  //   
  // } else{
  //   emptySpace.hidden = false;
  // }

foodAdd.children.length > 0 ? ((emptySpace.hidden = true),(cout.hidden = false)) : ((emptySpace.hidden = false),(cout.hidden = true)) ;
}
