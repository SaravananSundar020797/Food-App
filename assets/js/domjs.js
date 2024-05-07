// console.log(window.location);

// setInterval(() => {
//   document.title = 'My name is saravanan';
// }, 3000);

// Object


// const person = {
//   personName : "Saravanan Sundar",
//   place : "Pondicherry",
//   age : 27,
//   greetingUser () {
//     let msg = `My name is ${this.personName}. I m ${this.age} years ago, I m coming from ${this.place}`;
//     return msg;
//   }
// }

// // Dynamic get name and place

// person.personName = prompt("Whats Your name");
// person.age = prompt("Whats Your Age");
// person.place = prompt("Coming From");


// let personOne = person.greetingUser();

// // document.body.innerHTML = `<h1>${personOne}</h1>`;

// document.write(personOne);

// Dom Load Event

// const changeContent = document.getElementById("myapp");
// myapp.innerHTML = `<h1>I' m Saro ❤️‍🔥</h1>`

// addEventListener("DOMContentLoaded",()=>{

//   // Reference
//   const changeContent = document.getElementById("myapp");

//   // Get h1 content

//   const heading = changeContent.children[0];
//   const image = changeContent.children[1];

// heading.innerHTML = `<h1> I' m Saro ❤️‍🔥 </h1>`

// console.log(image.offsetWidth,image.offsetHeight)

// // ----> Dont check css js images file Load Only check html page load only <----

// })

// // Load

// window.addEventListener("load",()=>{

//   // Reference
//   const changeContent = document.getElementById("myapp");

//   // Get h1 content

//   const heading = changeContent.children[0];
//   const image = changeContent.children[1];

// heading.innerHTML = `<h1> I' m Saro ❤️‍🔥 </h1>`

// // Try palced new Image 

// console.log(image.offsetWidth,image.offsetHeight)

// // ----> Check All files are loaded <----

// })

// // Unload

// window.onunload = function(){
//   alert("You are about to be unloaded.");
// }

// // UnBeforeLoad

// window.onbeforeunload = function(){
//   alert("You are about to be unloaded onbeforeunload.");
// }

// --> Dom Nodes <--

// HTML Element Reference

// console.dir(document.documentElement.lang);
// console.dir(document.head);
// console.dir(document.body);

// Constructor

// console.dir(document.body.constructor.name);

// instanceof (Anga erruthu varutha);

// console.log(document.body instanceof HTMLBodyElement);
// console.log(document.body instanceof HTMLElement);
// console.log(document.body instanceof Element);
// console.log(document.body instanceof Node);
// console.log(document.body instanceof EventTarget);

// console.log(document.body.nodeType);

// ---> How to select DOM Element <---

// 1) getElementById
// 2) getElementsByClassName
// 3) getElementsByTagName()
// 4) Finding Elements by css Selectors

// 5) querySelector and querySelectorAll()

// let appInput = document.getElementById("input-foodBlock");
// let appAddBtn = document.getElementById("addBtn");
// let foodAdd = document.querySelector(".food-items");

// appAddBtn.addEventListener("click",()=>{
//   let createLi = document.createElement("li");
//   createLi.className = "food-item";
//   let foodChain = document.createTextNode(appInput.value);

//   createLi.append(foodChain);

//   foodAdd.prepend(createLi);

// })




// //  ---> Create Element <---


// /* <div class="success-alert">
//   <strong>👌Successfully</strong> Product Updated
// </div> */

//   let main = document.querySelector(".product-block");

// function createDomElement(message){


// // Create dic Tag

// let createDiv = document.createElement("div");

// // Assign Classname

// createDiv.className = "success-alert"

// // Create Node text

// let createNode =document.createTextNode(message);

// createDiv.append(createNode);

// main.prepend(createDiv);

// }

// createDomElement("👌Successfully Product Updated");

// ----> Content Add And Get <----

// 1) innerText
// 2) innerHTML
// 3) textContent

// let take = document.querySelector(".alert-message");


// console.log(take.innerText);
// console.log(take.innerHTML);
// console.log(take.textContent);

// take.innerHTML=`<strong>My name<strong> SaravananSundar`;

//   let main = document.querySelector(".product-block");

// function createDomElement(message){


// // Create dic Tag

// let createDiv = document.createElement("div");

// // Assign Classname

// createDiv.className = "success-alert"

// // Create Node text

// let createNode =document.createTextNode(message);

// createDiv.append(createNode);

// main.prepend(createDiv);

// console.log(typeof createDiv)

// }

// createDomElement("👌Successfully Product Updated");

// function createInnerHTML(message){
//   const template = `<div class="success-alert">${message}</div>`;

//   main.innerHTML += template;

//   console.log(typeof template)
// }

// createInnerHTML("👌Successfully Product Updated HTML");



// ----> Document Fragment Method <-----

// let foodAdd = document.querySelector(".food-items");

// // Normal Metod

// console.time("Normal Time")

// for(let i=1; i<=1000; i++){
//   let createLi = document.createElement("li");
//   createLi.textContent = `Food-intem ${i}`;
//   createLi.className = "food-item";
  
//   foodAdd.append(createLi);
// }

// console.timeEnd("Normal Time")

// // Document Fragment

// console.time("frag Time")

// let fragment = document.createDocumentFragment();

// for(let i=1; i<=1000; i++){
//   let createLi = document.createElement("li");
//   createLi.className = "food-item";
//   createLi.textContent = `Food-intem ${i}`;
//   fragment.append(createLi);

  
// }
// foodAdd.append(fragment);

// console.timeEnd("frag Time")

// ----> Insert DOM Element <-----

// let foodAdd = document.querySelector(".food-items");

//   let createLi = document.createElement("li");
//   createLi.textContent = `maggie`;
//   createLi.className = "food-item";

//   foodAdd.prepend(createLi);
//   foodAdd.append(createLi);
//   foodAdd.before(createLi);
//   foodAdd.after(createLi);

// ----> Insert Dom <----

// let foodAdd = document.querySelector(".food-items");

// foodAdd.insertAdjacentHTML("afterbegin",`<li class="food-item">afterbegin</li>`);
// foodAdd.insertAdjacentHTML("afterend",`<li class="food-item">afterend</li>`);
// foodAdd.insertAdjacentHTML("beforebegin",`<li class="food-item">beforebegin</li>`);
// foodAdd.insertAdjacentHTML("beforeend",`<li class="food-item">beforeend</li>`);


// foodAdd.insertAdjacentText("afterbegin",`<li class="food-item">afterbegin</li>`);
// foodAdd.insertAdjacentText("afterend",`<li class="food-item">afterend</li>`);
// foodAdd.insertAdjacentText("beforebegin",`<li class="food-item">beforebegin</li>`);
// foodAdd.insertAdjacentText("beforeend",`<li class="food-item">beforeend</li>`);

// let liTag = document.createElement("li");
// liTag.className="food-item";
// liTag.textContent = "foodName"

// foodAdd.insertAdjacentElement("afterbegin",liTag);
// foodAdd.insertAdjacentElement("afterend",liTag);
// foodAdd.insertAdjacentElement("beforebegin",liTag);
// foodAdd.insertAdjacentElement("beforeend",liTag);

// ----> Replace <----
// let foodAdd = document.querySelector(".food-items");
// let liFirst = document.querySelector(".food-item:first-child");
// let liTag = document.createElement("li");
// liTag.className="food-item";
// liTag.textContent = "Paruppu Sambar"

// liFirst.replaceChild(liTag);   // --> New Way

// Old way

// let maggie = document.createElement("li");
// maggie.className="food-item";
// maggie.textContent = "Maggie"

// let noodle = document.createElement("li");
// noodle.className="food-item";
// noodle.textContent = "Noodles"

// foodAdd.replaceChildren(maggie,noodle);   // ---> Old Way

// ----> Clone <----

// let appInput = document.getElementById("input-foodBlock");
// let appAddBtn = document.getElementById("addBtn");
// let foodAdd = document.querySelector(".food-items");
// let resyncBtn = document.getElementById("resynBtn");
// let cloneDateId = document.getElementById("cloneDateId");


// // cloneNode(false) default false value only clone the parent not clone childrean

// // let cloneData = foodAdd.cloneNode();

// // CloneNode(True) Clone the all data (parent and children)




// appAddBtn.addEventListener("click",()=>{
//   let createLi = document.createElement("li");
//   createLi.className = "food-item";
//   let foodChain = document.createTextNode(appInput.value);

//   createLi.append(foodChain);

//   foodAdd.prepend(createLi);

// })
 


// resyncBtn.addEventListener("click",()=>{
//   cloneDateId.innerHTML=" ";
//   let cloneDataTrue = foodAdd.cloneNode(true);
//   cloneDateId.append(cloneDataTrue);
// });

// ----> Remove <----

// let appInput = document.getElementById("input-foodBlock");
// let appAddBtn = document.getElementById("addBtn");
// let foodAdd = document.querySelector(".food-items");
// let foodApp = document.querySelector(".food");

// appAddBtn.addEventListener("click",()=>{
//   let createLi = document.createElement("li");

//   createLi.className = "food-item";

//   let createDiv = document.createElement("div");

//   createDiv.textContent = appInput.value;
//   createDiv.className="food";

//   let createBtnDiv = document.createElement("div");
  
//   createBtnDiv.className="xBtn"
//   createBtnDiv.setAttribute("onclick","removeItem(event)");
//   createBtnDiv.textContent = "X";

//   createLi.append(createDiv,createBtnDiv);
//   foodAdd.prepend(createLi);

// })

// function removeItem(event){

//   let extRemove = event.target.parentNode;
//   //Remove
//   extRemove.remove();

// }


// ----> Traverse <---


// let takepro = document.querySelectorAll(".food-item");
// let takearr = [];

// for(let item of takepro){
//   console.log(item.children[0].innerText);
//   takearr.push(item.children[0].innerText);
  
// }

// console.log(takearr);     

// console.log(take.parentElement);

// -----> Element Properties and HTML Attributes <-----

// let productInput = document.querySelector(".product-subCopy input");

// console.dir(productInput);
// console.log(productInput.type);
// console.log(productInput.name);
// console.log(productInput.id);
// console.log(productInput.className);
// console.log(productInput.placeholder);
// console.log(productInput.value);
// console.log(typeof productInput.value);
// // let userAge = prompt("Whats Your Age");
// // productInput.setAttribute("value",userAge);
// const saveInt = parseInt(productInput.value,10);
// console.log(saveInt);
// console.log(typeof saveInt);

// console.log(productInput.getAttribute("is-alive"));


// console.log(productInput.attributes[6])
// console.log(productInput.attributes['value'].name)

// productInput.removeAttribute("is-alive");
// console.log(productInput.hasAttribute("is-alive"));

// console.log(productInput.style);
// console.log(productInput.getAttribute("style"));


// console.log(productInput.dataset);

// for(let attr of productInput.attributes){
//   console.log(`${attr.name} : ${attr.value}`);
// }

//  ---> Inline Style <----

    // padding: 5px 10px;bfont-size: 12px;background: blue;color: #fff;border: none;border-radius: 5px;

    // let productInput = document.querySelector(".product-subCopy input");
    // let showBtn = document.querySelector(".addBtnIm");

    // showBtn.setAttribute("style","padding: 5px 10px;font-size: 13px;background: blue;color: #fff;border: none;border-radius: 5px;");

    // showBtn.style.padding = "5px 10px";
    // showBtn.style.fontSize = "13px";
    // showBtn.style.background = "blue";
    // showBtn.style.color = "#fff";
    // showBtn.style.borderRadius = "5px";
    // showBtn.style.border = "none";

    // console.log(showBtn.style.cssText)

    // showBtn.style.cssText = "padding: 5px 10px;font-size: 13px;background: blue;color: #fff;border: none;border-radius: 5px;";

    // console.log(window.getComputedStyle(showBtn))

    //  ---> Class <----

    // let productInput = document.querySelector(".product-subCopy");
    // let showBtn = document.querySelector("#showBtn");

    // showBtn.addEventListener("click",()=> {
    //   if(productInput.classList.contains("hide")){
    //     showBtn.className="btn btn-danger"
    //     showBtn.textContent = "Hide Bottom Div"
    //     productInput.classList.remove("hide");
        
    //   }
    //   else{
    //     showBtn.className="btn btn-success"
    //     showBtn.textContent = "Show Bottom Div"
    //     productInput.classList.add("hide");
    //   }
    // });


    // ----> Events <----

    /*
    ** AddEventListeners
    1) window.addEventListner()
    2) document.addEventListner()
    3) Element.addEventListner()
    */
    // let clc = document.querySelector(".nav-main span");

    // Wrong way

    // clc.onclick = function(){
    //     alert(`Click the alert`);
    // }

    // clc.onclick = function(){
    //     alert(`Click the alert2`);
    // }

    // function 

    // function hedter(event){
    //     alert(event.target.innerText)
    //     console.log(event.target)
    // }


    // // Arrow function

    // // let headerTake = (event) =>{
    // //     alert(`Click the alert2`)
    // //     console.log(event.target)
    // // }
    // // let headerTake2 = () =>{
    // //     alert(`Click the alert4`)

    // // }

    // clc.addEventListener("click",hedter);
    // // clc.removeEventListener("click",headerTake2);

// ----> Bubbling  && StopPropagation<----

// let formMain = document.querySelector(".formEle");
// let divMain = document.querySelector(".divEle");
// let paraMain = document.querySelector(".paraEle");


// formMain.addEventListener("click",()=>{
//     alert("Clicked FORM");
// });
// divMain.addEventListener("click",(event)=>{
//     alert("Clicked DIV");
//     event.stopImmediatePropagation();

// });
// paraMain.addEventListener("click",()=>{
//     alert("Clicked PARA");
// });
// divMain.addEventListener("click",(event)=>{
//     alert("Clicked DIV2");
// });

// for(let collect of document.querySelectorAll(".formEle, .formEle *")){
//     // console.log(collect);

//     // Capture Phase

//     collect.addEventListener(
//         "click",()=>{
//             console.log(`Capturing phase : ${collect.tagName}`);
//         },
//         true
//     );

//     // Bubbling Phase

//     collect.addEventListener(
//         "click",()=>{
//             console.log(`Bubbling phase : ${collect.tagName}`);
//         }
//     );
// }

// For-each

// let items = ["Shoe","Watch","Pant","Shirt"];

// items.forEach(product => {
//     console.log(product);
// });

// Default Action

// let formEl = document.querySelector(".formEle");
// let inputEl = document.querySelector(".formEle input");
// let checkboxEl = document.querySelector(".formEle input[type='checkbox']");

// formEl.addEventListener("submit",(event)=>{
//     // event.preventDefault(); //--> Default Prevent Method
//     if(!checkboxEl.checked){
//     alert('Terms and condition please Checked');
//     return
//     }
//     console.log("Form Submit", inputEl.value , checkboxEl.checked);
// }, 

// // {passive:true}
// );

// -----> Event Delegation <----

// let uld = document.querySelectorAll(".ulBlock li");

// uld.forEach(listItems => {
//     listItems.addEventListener("click",()=>{
//         console.log(`Clicked : ${listItems.innerText}`);
//     })
// });

// let tablek = document.querySelector("table");

// let selectedId;
// tablek.addEventListener("click",(event)=>{
//     let target = event.target;
//     let closestr = target.closest("tr");
//     if(target.tagName === "TH"){
//         return;
//     }
//     if(selectedId != undefined){
//         selectedId.classList.remove("active")
//         console.log(selectedId);
//     }

//     selectedId = closestr;

//     closestr.classList.add("active");

//     console.log("Clicked : ",closestr);
// })

// document.addEventListener("click",(event)=>{
//     let id = event.target.dataset.toggleId

//     let el = document.getElementById(id);

//     el.hidden = !el.hidden

// })

// const formEl = document.querySelector('#donate-form');

// formEl.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     let intarget = event.target.querySelector("input").value;
//     alert(`Donated amounted ₹${intarget}`);

// })

// ----> Mouse Event <-----

// document.addEventListener("mousedown",(e)=>{
// console.log("Mouse Down : ", event);
// });

// document.addEventListener("mouseup",(e)=>{
// console.log("Mouse up : ", event);
// });

// document.addEventListener("mouseenter",(e)=>{
// console.log("Mouse Enter : ", event);
// });

// document.addEventListener("mouseleave",(e)=>{
// console.log("Mouse Leave : ", event);
// });

// document.addEventListener("mousemove",(e)=>{
// console.log("Mouse Mouse : ", event);
// });

// document.addEventListener("mouseout",(e)=>{
// console.log("Mouse Out : ", event);
// });

// document.addEventListener("mouseover",(e)=>{
// console.log("Mouse Over : ", event);
// });

// document.addEventListener("mouseup",(event)=>{
//  switch (event.which) {
//     case 1:
//         alert(`Left Click`)
//         console.log(`Left Click : which = ${event.which}`)

//         break;

//     case 2:
//         alert(`Mid Click`)
//         console.log(`Mid Click : which = ${event.which}`)
//         break;

//     case 3:
//         alert(`Right Click`)
//         console.log(`Right Click : which = ${event.which}`)
//         break;
//     case 4:
//         alert(`Back Click`)
//         console.log(`Back Click : which = ${event.which}`)
//         break;
//     case 5:
//         alert(`Front Click`)
//         console.log(`Front Click : which = ${event.which}`)
//         break;
 
//     default:
//         alert(`Unknown Click`)
//         console.log(`Unknown Click`)
//         break;
//  }
// });


// ---> KeyBoard Event <---


// let appInput = document.getElementById("input-foodBlock");
// let appAddBtn = document.getElementById("addBtn");
// let foodAdd = document.querySelector(".food-items");
// let foodApp = document.querySelector(".food");

// let handleInput = () =>{
//   let createLi = document.createElement("li");

//   createLi.className = "food-item";

//   let createDiv = document.createElement("div");

//   createDiv.textContent = appInput.value;
//   createDiv.className="food";

//   let createBtnDiv = document.createElement("div");
  
//   createBtnDiv.className="xBtn"
//   createBtnDiv.setAttribute("onclick","removeItem(event)");
//   createBtnDiv.textContent = "X";

//   createLi.append(createDiv,createBtnDiv);
//   foodAdd.prepend(createLi);

// }

// appAddBtn.addEventListener("click",handleInput);
// appInput.addEventListener("keyup",(event)=>{
//   if(event.key === "Enter"){
//     handleInput();
//   }else if(event.key === "KeyZ" && (event.ctrlKey || event.metaKey)){
//     appInput.value = " ";
//   }
// });

// function removeItem(event){

//   let extRemove = event.target.parentNode;
//   //Remove
//   extRemove.remove();

// }

// ---> form <---

// let formEl = document.forms.feedBack;

// let handlerSubmit = (event)=>{

//     event.preventDefault();
    
//     let formData = [...new FormData(formEl)];
    
//     console.log(formData);
    
//     };

// let handlerFormData = (e)=>{

//     let formData = e.formData;
//     formData.append("api-key","sdfdsfmmsfjk");
//     console.log([...formData.entries()]);
//     console.log([...formData.values()]);
//     console.log([...formData.keys()]);
//     console.log(formData.getAll());
//     console.log(e.formData);
// }



// // let fullName = formEl.elements.fullName;
// // let type = formEl.elements.type;
// // let email = formEl.elements.email;
// // let description = formEl.elements.description;


// // const {fullName,type,email,description} = formEl.elements;

// // console.log(fullName,type,email,description);

// formEl.addEventListener("submit",handlerSubmit)
// formEl.addEventListener("formdata",handlerFormData)


// let formEl = document.forms.feedBack;

// let handlerSubmit = (event)=>{

//     event.preventDefault();
    
//     let formData = new FormData(formEl);
    
//     let data = [...formData.entries()];

//     // 1) QueryString

// //    let dataString =  data.map(x => `${encodeURIComponent(x[0])} = ${encodeURIComponent(x[1])}`).join("&");

// // let dataOldMethod =  data.map((key,value)=> `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`).join("&");

// // let dataString2 = new URLSearchParams(formData).toString();

// //     // console.log(dataString);
// //      console.log(dataOldMethod);
// //      console.log(dataString2);
    

//         // 2) Json

//         let jsonData = JSON.stringify(Object.fromEntries(formData));

//         console.log(jsonData);
    
//     };

//     formEl.addEventListener("submit",handlerSubmit)

// Api Fetch

// let formEl = document.forms.feedBack;

// let handlerSubmit = (event)=>{
//     event.preventDefault();

//     const formData = new FormData(formEl);

//     let jsonData = JSON.stringify(Object.fromEntries(formData));

    // Send to Backend

    // 1. XMLHTTPRequest
    // const xhr = new XMLHttpRequest();
    // xhr.open("GET","https://reqres.in/api/users/2",true);
    // xhr.onload = function(){
 
    //     let obj =JSON.parse(xhr.responseText);
    //     document.querySelector("#responseText").innerText = obj.data.first_name;
    //     }
    // xhr.send();

    // 2. fetch()

    // fetch("https://reqres.in/api/users?page=2",{
    //     method : "GET",
        

    // }) 
    // .then((res)=> res.json())
    // .then(data =>{
    //     console.log(data.data[0].first_name);
    // });
    
    // };

    // formEl.addEventListener("submit",handlerSubmit);

    // -----> Input Form <-----
    
    // let formEl = document.forms.feedBack;
    // let nameEl = formEl.elements.fullName;
    

        // 1) Attributes
        
        // nameEl.value = "Saravanan"
        // nameEl.readOnly = true;
        // nameEl.disabled = true;

        // 2) Event

        // nameEl.addEventListener("focus",(e)=>{
        //     console.log("FOCUSED");
        // });
        // nameEl.addEventListener("blur",(e)=>{
        //     console.log("BLUR");
        // });
        // nameEl.addEventListener("input",(e)=>{
        //     let spann = document.querySelector("#inputTrigger");
        //     spann.innerText = e.target.value;
        //     console.log("Enter The Input : " + e.target.value);
        // });
        // nameEl.addEventListener("change",(e)=>{
        //     console.log("Changed The Input : " + e.target.value);
        // })

        // 3) Methods
        // nameEl.focus();
        // nameEl.blur();


    // Form Radio button Value

        // let formEl = document.forms.feedBack;
        // let rad = formEl.elements.type;
        // let radioMain = document.querySelector("#radioMain");

        // let allRad = [...rad];

        // console.log(radioMain);


    // allRad.forEach(radList => {
    //    console.log(radList); 
    // });

    // radioMain.addEventListener("change",(event)=>{
    //     let checkedRad = allRad.find((list)=>{
    //         return list.checked;
    //     })
    //     console.log(`find Method ${checkedRad.value}`)
    //     console.log(event.target.value);
    // })

    // allRad[2].checked=true;
    // allRad[1].select()


    // radioMain.addEventListener("change",(event)=>{
    //     let getValue = event.target.value;
    //     if(getValue === "Contribution"){
    //         setTimeout(() => {
    //             alert(`Checked vale ${getValue}`);
    //         }, 1000);
    //     }
  
    // });


    // Checkbox

    // let formEl = document.forms.feedBack;
    // let terms = formEl.elements.terms;

    // terms.addEventListener("change",(event)=>{

    //     alert("Checked the term");

    // })

    // Selected

    // let formEl = document.forms.feedBack;
    // let countryEl = formEl.elements.country;

    // console.dir(countryEl) // get 

    // // countryEl.value="LK"; // set

    // countryEl.selectedIndex = 2;

    // console.log(countryEl.options[countryEl.selectedIndex].value)
    // console.log(countryEl.options[countryEl.selectedIndex])
    // let countryArr = countryEl.options;

    // console.log(countryArr);

    // // for(let arr of countryArr){
    // //     console.log(arr.value);
    // // }

    // countryEl.addEventListener("change",(e)=>{
    //     console.log(event.target.options[event.target.selectedIndex]);
    //     console.log(event.target.options[event.target.selectedIndex].value);
    //     console.log(event.target.options[event.target.selectedIndex].text);
    // })

    // let optionEl = document.createElement("option");
    // let optionEl2 = new Option("South-Africa","SAF");

    // optionEl.value="AFS";
    // optionEl.text="Africa";

    // countryEl.add(optionEl,1);
    // countryEl.add(optionEl2,6);