// Event listener for inputs
const input1 = document.getElementById("pw1");
const input2 = document.getElementById("pw2");
input1.addEventListener("input", equalCheck);
input2.addEventListener("input", equalCheck);
// Event listener for button
const button = document.getElementById("button");
button.addEventListener("click", toggleButton);

function equalCheck() {
  if (input1.value === input2.value) {
    console.log("PW EQUAL");
  } else {
    console.log("not equal");
  }
}

function toggleButton() {
  if (button.innerText === "Show Passwords") {
    button.innerText = "Hide Passwords";
    input1.type = "text";
    input2.type = "text";
  } else if (button.innerText === "Hide Passwords") {
    button.innerText = "Show Passwords";
    input1.type = "password";
    input2.type = "password";
  }
}
