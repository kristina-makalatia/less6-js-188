// "use strict";
//lesson 6

// let titleNew = document.createElement("h2");
// // titleNew.textContent = 'Hello World';
// titleNew.innerText = "Hello New";
// titleNew.classList.add("title1", "title2");
// titleNew.classList.replace("title2", "title-main");
// titleNew.classList.remove("title1");

// titleNew.style.color = "blue";
// titleNew.style.backgroundColor = "yellow";

// // document.getElementById('wraper').appendChild(titleNew);
// // document.querySelector('#wraper').appendChild(titleNew);

// document.querySelector(".main-element").appendChild(titleNew);

// let element = document.querySelectorAll(".main-element");
// console.log(element); //array

//
// let newDiv = document.createElement("div");
// newDiv.classList.add("new-div");

// let link = document.createElement("a");
// link.textContent = "Google Link";
// link.classList.add("link-new");
// link.setAttribute("href", "https://google.com");
// link.setAttribute("target", "_blank");

// newDiv.appendChild(link);
// document.getElementById("wraper").appendChild(newDiv);

//innerHtml & innerText

// document.querySelector('.section-block').innerText = '<p>Hi</p>';

// document.querySelector(".section-block").innerHTML = "<p>Hi</p>";

// events
// let btn = document.getElementById("btn-new");

// btn.addEventListener("click", function () {
//   document.body.classList.toggle("bodyClass");
// });

// btn.addEventListener("mouseover", function () {
//   btn.style.backgroundColor = "yellow";
// });

// btn.addEventListener("mouseout", function () {
//   btn.style.backgroundColor = "green";
// });

//
// let btnsArray = document.querySelectorAll(".submit");

// btnsArray.forEach( (item) => {
//   item.addEventListener("click", function () {
//     alert("hi");
//   });
// });

// let btnMainParent = document.querySelector(".btns-wraper");

// btnMainParent.addEventListener("click", function () {
//   alert("Hi 3");
// });

// //
// let inpuEl = document.getElementById("input-el");

// inpuEl.addEventListener("focus", function () {
//   inpuEl.style.outline = "none";
// });

// inpuEl.addEventListener("keydown", function (event) {
//   console.log(event);

//   //   inpuEl.style.border = "2px solid green";
//   event.target.classList.add("input-new");
// });

//
//

// lesson 7
let linkNew = document.getElementById("link-google");

linkNew.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Hello");
});

//to do list example
let inputElement = document.querySelector(".input-el");
let btnAddItem = document.querySelector(".btn-add");
let ulResult = document.querySelector(".ul-items");
let clearAllBtn = document.querySelector(".clear-all");
let formElement = document.querySelector(".form-element");

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  // 1.get input value
  let valueItem = inputElement.value;

  if (valueItem === " ") {
    return;
  }

  // 2.input value - > li -> ul
  let li = document.createElement("li");

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete This List";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.textContent = valueItem;

  li.appendChild(deleteBtn);
  ulResult.appendChild(li);

  // 3.clear input value
  inputElement.value = " ";
});

clearAllBtn.addEventListener("click", function () {
  ulResult.innerHTML = " ";
});

// burger Bar
let navBar = document.getElementById("navBar");
let burgerBar = document.getElementById("burgerBar");

burgerBar.addEventListener("click", function () {
  navBar.classList.toggle("newNavigation");
});

// header bg color
let headerElement = document.getElementById("header-element");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    headerElement.classList.add("headerNewClass");
  } else {
    headerElement.classList.remove("headerNewClass");
  }
});

// this
// 1.default binding
// function test() {
//   console.log(this); //window
// }

// test();
// 2. implicit binding
let user = {
  fname: "anna",
  printName: function () {
    console.log(this.fname);
  },
};

user.printName();

// 3.explicit binding - call, aplly, bind
function newFnc(name1, name2) {
  console.log(name1);
  console.log(name2);
  console.log(this);
}

// newFnc.call({}, 'nini', 'nika');
newFnc.apply({}, ["nini", "nika"]);

//
let userObj = {
  fname: "nini",
};
let userObj2 = {
  fname: "anna",
};

function getInfo(age) {
  console.log(this.fname + "არის" + age + "წლის");
}

let bindFnc = getInfo.bind(userObj);
bindFnc(33);

// getInfo.call(userObj2, 30);
// getInfo.apply(userObj, [24]);

//
// let arrFnc = () => {
//   console.log(this);

// }
// arrFnc(); //window

let obj = {
  fname: "lasha",
  printName: () => console.log(this.fname),
};

obj.printName(); //window

//

let boxEl = document.querySelector(".box");

boxEl.addEventListener("click", function () {
  // console.log(e.target);
  console.log(this);

  this.style.backgroundColor = "yellow";
});
