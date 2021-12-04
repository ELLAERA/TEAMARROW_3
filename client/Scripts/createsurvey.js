"use strict";
 
window.onload = function() {
  
  let addQustionBtn = document.getElementById("addQustionBtn");
  addQustionBtn.onclick = function() {

    event.preventDefault();
    let questionHere = document.getElementById("questionHere");
    let questionInput = document.createElement("input");

    questionInput.setAttribute("id", "questionInput");
    questionInput.setAttribute("class", "form-control1");
    questionInput.setAttribute("type", "text");
    questionInput.setAttribute("placeholder", "Question");
    questionHere.appendChild(questionInput);
    

 



}
}
