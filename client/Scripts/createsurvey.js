"use strict";
 
window.onload = function() {
  
  let addQustionBtn = document.getElementById("addQustionBtn");
  addQustionBtn.onclick = function() {

    event.preventDefault();
    let questionHere = document.getElementById("questionHere");
    
    let newDiv = document.createElement("div");
    let questionInput = document.createElement("input");
    let label = document.createElement("label");
    let labelName = document.createTextNode("Question");
    let delBtn = document.createElement("a");
    let delBtnName = document.createTextNode("Delete");
    let selectBtn = document.createElement("select");
    let selectOption1 = document.createElement("option");
    let selectOption2 = document.createElement("option");
    
    selectBtn.style.width = "80%";
    delBtn.style.width = "20%";
    questionInput.setAttribute("id", "questionInput");
    questionInput.setAttribute("class", "form-control1");
    questionInput.setAttribute("placeholder", "Enter Question");
    delBtn.setAttribute("onclick", "this.parentNode.remove();");
    questionInput.setAttribute("type", "text");
    delBtn.setAttribute("id", "btns4");
    selectOption1.text = "Short Answer";
    selectOption2.text = "Agree/Disagree"; 
    selectBtn.setAttribute("id", "btns4");
    newDiv.setAttribute("class", "newDiv"); 

    
    questionHere.appendChild(newDiv);
    newDiv.appendChild(label);
    label.appendChild(labelName);
    newDiv.appendChild(questionInput);
    newDiv.appendChild(selectBtn);
    newDiv.appendChild(delBtn);
    delBtn.appendChild(delBtnName);
    selectBtn.appendChild(selectOption1);
    selectBtn.appendChild(selectOption2);


}
}
