const paragraph = document.querySelector("#demo");
const button = document.querySelector("#bttn");

paragraph.innerHTML = "Gary Steve";

function changeColor() {
  console.log("Green!");
}

button.addEventListener("click", changeColor);
