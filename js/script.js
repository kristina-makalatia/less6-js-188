let titleNew = document.createElement("h2");
// titleNew.textContent = 'Hello World';
titleNew.innerText = "Hello New";
titleNew.classList.add("title1", "title2");
titleNew.classList.replace("title2", "title-main");
titleNew.classList.remove("title1");

titleNew.style.color = "blue";
titleNew.style.backgroundColor = "yellow";

// document.getElementById('wraper').appendChild(titleNew);
// document.querySelector('#wraper').appendChild(titleNew);

document.querySelector(".main-element").appendChild(titleNew);

// let element = document.querySelectorAll(".main-element");
// console.log(element); //array

//
let newDiv = document.createElement("div");
newDiv.classList.add("new-div");

let link = document.createElement("a");
link.textContent = "Google Link";
link.classList.add("link-new");
link.setAttribute("href", "https://google.com");
link.setAttribute("target", "_blank");

newDiv.appendChild(link);
document.getElementById("wraper").appendChild(newDiv);

//innerHtml & innerText

// document.querySelector('.section-block').innerText = '<p>Hi</p>';

document.querySelector(".section-block").innerHTML = "<p>Hi</p>";

// events
let btn = document.getElementById("btn-new");

btn.addEventListener("click", function () {
  document.body.classList.toggle("bodyClass");
});

btn.addEventListener("mouseover", function () {
  btn.style.backgroundColor = "yellow";
});

btn.addEventListener("mouseout", function () {
  btn.style.backgroundColor = "green";
});

//
// let btnsArray = document.querySelectorAll(".submit");

// btnsArray.forEach( (item) => {
//   item.addEventListener("click", function () {
//     alert("hi");
//   });
// });

let btnMainParent = document.querySelector(".btns-wraper");

btnMainParent.addEventListener("click", function () {
  alert("Hi 3");
});

//
let inpuEl = document.getElementById("input-el");

inpuEl.addEventListener("focus", function () {
  inpuEl.style.outline = "none";
});

inpuEl.addEventListener("keydown", function (event) {
  console.log(event);

  //   inpuEl.style.border = "2px solid green";
  event.target.classList.add("input-new");
});

//
let boxEl = document.querySelector(".box");

boxEl.addEventListener("click", function (e) {
  console.log(e.target);
  e.target.style.backgroundColor = "yellow";
});
