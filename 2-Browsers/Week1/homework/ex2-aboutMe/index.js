'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
const nickName = document.getElementById("nickname");
nickName.textContent = "Zephyr";
const favFood = document.getElementById("fav-food");
favFood.textContent = "Pizza";
const homeTown = document.getElementById("hometown");
homeTown.textContent = "Jhang";

const li = document.querySelectorAll("li")
const liArray = Array.from(li);
for (let i = 0; i < liArray.length; i++) {
  li[i].className = "list-item";
}
