// Activity 1: Selecting and Manipulating Elements
// • Task 1: Select an HTML element by its ID and change its text content.
function setTextById() {
  document.getElementById("dom").innerHTML = "Happy Go Lucky!";
}
// • Task 2: Select an HTML element by its class and change its background color.
function setTextByClass() {
  var elements = document.getElementsByClassName("domx");
  if (elements.length > 0) {
    elements[0].innerHTML = "Enjoy your life!";
  }
}

// Activity 2: Creating and Appending Elements
// • Task 3: Create a new div element with some text content and append it to the body.
function appendNewDiv() {
  var newDiv = document.createElement("div");
  newDiv.textContent = "I love my INDIA!";
  newDiv.id = "newItem";
  newDiv.style.backgroundColor = "lightblue";
  document.body.appendChild(newDiv);
}
// • Task 4: Create a new li element and add it to an existing ul list.
function appendLiInUl() {
  var ulElement = document.getElementById("ulEl0");
  console.log(ulElement);
  if (ulElement) {
    var newLi = document.createElement("li");
    newLi.textContent = "item 4";
    newLi.id = "newItem";
    newLi.style.backgroundColor = "lightblue";
    console.log(newLi);
    ulElement.appendChild(newLi);
  }
}
// Activity 3: Removing Elements
// • Task 5: Select an HTML element and remove it from the DOM.
function RemoveLiInUl() {
  var elementToRemove = document.getElementById("newItem");
  if (elementToRemove) {
    elementToRemove.remove();
  }
}
// • Task 6: Remove the last child of a specific HTML element.
function RemoveLastLiInUl() {
  var ulElement = document.getElementById("ulEl0");
  if (ulElement) {
    var elementToRemove = ulElement.lastElementChild;
    if (elementToRemove) {
      elementToRemove.remove();
    } else {
      console.log("no li element in ul found");
    }
  } else {
    console.log("no ul element found");
  }
}
// Activity 4: Modifying Attributes and Classes
// • Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
function changeAttribute() {
  var element = document.getElementById("image1");
  element.src = "image.jpg";
}
// • Task 8: Add and remove a CSS class to/from an HTML element.
var element = document.getElementById("pEl");
function addCSSClass() {
  element.classList.add("highlight");
}
function removeCSSClass() {
  element.classList.remove("highlight");
}
// Activity 5: Event Handling
// • Task 9: Add a click event listener to a button that changes the text content of a paragraph.
function changeText() {
  var element = document.getElementById("newP");
  element.textContent = "New Text";
}
// • Task 10: Add a mouseover event listener to an element that changes its border color.
var element1 = document.getElementById("boxcontainer");
function changeBorderColor() {
  element1.style.borderColor = "red";
}
function resetBorderColor() {
  element1.style.borderColor = "black";
}
element1.addEventListener("mouseover", changeBorderColor);
element1.addEventListener("mouseout", resetBorderColor);
