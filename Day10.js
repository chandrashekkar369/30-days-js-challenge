// Day 10: Event Handling
// Tasks/Activities:

// Activity 1: Basic Event Handling
// • Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const p0 = document.getElementById("P0");
const b0 = document.getElementById("b0");
function changeTextColor() {
  p0.textContent = "Paragraph_Text_0";
}
b0.addEventListener("click", changeTextColor);

// • Task 2: Add a double-click event listener to an image that toggles its visibility.
const img0 = document.getElementById("img0");
const b1 = document.getElementById("b1");
function toggleImageVisibilty() {
  if (img0.style.display === "none") {
    img0.style.display = "block";
  } else {
    img0.style.display = "none";
  }
}
b1.addEventListener("dblclick", toggleImageVisibilty);

// Activity 2: Mouse Events
// • Task 3: Add a mouseover event listener to an element that changes its background color.
// • Task 4: Add a mouseout event listener to an element that resets its background color.
const p1 = document.getElementById("p1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
function changeBackgroundColor() {
  p1.style.backgroundColor = "lightblue";
}
function resetBackgroundColor() {
  p1.style.backgroundColor = "";
}
p1.addEventListener("mouseover", changeBackgroundColor);
p1.addEventListener("mouseout", resetBackgroundColor);

// Activity 3: Keyboard Events
// • Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const i0 = document.getElementById("input0");
function logKeyPressed(event) {
  console.log(`Key Pressed is ${event.key}`);
}
i0.addEventListener("keydown", logKeyPressed);
// • Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const i1 = document.getElementById("input1");
const p2 = document.getElementById("p2");
function updateParagraphText() {
  p2.textContent = i1.value;
}
i1.addEventListener("keyup", updateParagraphText);

// Activity 4: Form Events
// • Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const f0 = document.getElementById("f0");
function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(f0);
  const simpleFormDataObject = {};
  formData.forEach((value, keyOrIndex) => {
    simpleFormDataObject[keyOrIndex] = value;
  });
  console.log("Form Data: ", simpleFormDataObject);
}
f0.addEventListener("submit", handleFormSubmit);

// • Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const s0 = document.getElementById("s0");
const p3 = document.getElementById("p3");
function updateParagraphText() {
  const selectedOption = s0.value;
  p3.textContent = `Selected option: ${selectedOption}`;
}
s0.addEventListener("change", updateParagraphText);

// Activity 5: Event Delegation
// • Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const u0 = document.getElementById("u0");
function handleClick(event) {
  if (event.target.tagName == "LI") {
    console.log(`Clicked item: ${event.target.textContent}`);
  }
}
u0.addEventListener("click", handleClick);

// • Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const parentDiv = document.getElementById("pd0");
const b4 = document.getElementById("b4");
let i = 0;
function addChildInParentElement() {
  const newElement = document.createElement("div");
  newElement.textContent = `Div Element${i}`;
  i += 1;
  parentDiv.appendChild(newElement);
}
b4.addEventListener("click", addChildInParentElement);
