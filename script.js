// Event listener for inputs
const input1 = document.getElementById("pw1");
const input2 = document.getElementById("pw2");
input1.addEventListener("input", pwChecks);
input2.addEventListener("input", pwChecks);
// Event listener for button
const button = document.getElementById("button");
button.addEventListener("click", toggleButton);

function pwChecks() {
  equalCheck();
  if (equalCheck()) {
    lowercaseCheck();
    uppercaseCheck();
    numberCheck();
    minChars();
  } else {
    uncheckAll();
  }
}

function equalCheck() {
  if (input1.value === input2.value) {
    const pwEqual = document.getElementById("pw-equal");
    pwEqual.innerText = "✅";
    return true;
  } else {
    const pwEqual = document.getElementById("pw-equal");
    pwEqual.textContent = "❌";
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

function lowercaseCheck() {
  if (input1.value != input1.value.toUpperCase()) {
    const lowercase = document.getElementById("lowercase");
    lowercase.innerText = "✅";
  }
}

function uppercaseCheck() {
  if (input1.value != input1.value.toLowerCase()) {
    const uppercase = document.getElementById("uppercase");
    uppercase.innerText = "✅";
  } else {
    const uppercase = document.getElementById("uppercase");
    uppercase.textContent = "❌";
  }
}

function uncheckAll() {
  const uncheck = document.querySelectorAll(".checks");
  for (let i = 0; i < uncheck.length; i++) {
    uncheck[i].textContent = "❌";
  }
}

function numberCheck() {
  const numbers = document.getElementById("numbers");

  var input1 = document.getElementById("pw1").value;

  pattern = /\d/;

  //checks is text contains a number

  if (pattern.test(input1)) {
    numbers.innerText = "✅";
    console.log(pattern.test(input1));
  } else {
    numbers.innerText = "❌";
    console.log(pattern.test(input1));
  }
}

function minChars() {
  if (input1.value.length > 10) {
    const min = document.getElementById("characters");
    min.textContent = "✅";
  } else {
    const min = document.getElementById("characters");
    min.textContent = "❌";
  }
}
