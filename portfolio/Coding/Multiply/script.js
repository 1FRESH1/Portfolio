// Download page elements

let drawButton = document.getElementById("drawButton");
let checkButton = document.getElementById("checkButton");
let inputField = document.getElementById("input");
let randomNumberElement = document.getElementById("randomNumber");
let modalGoodElement = document.getElementById("modalGood");
let modalBadElement = document.getElementById("modalBad");
let modalCloseGoodElement = document.getElementById("closeGood");
let modalCloseBadElement = document.getElementById("closeBad");

// drawButton
let result;
function randomNum() {
  randomNumberElement.style.display = "block";
  const randomNumber1 = Math.floor(Math.random() * 9) + 2;
  const randomNumber2 = Math.floor(Math.random() * 9) + 2;
  const random = `${randomNumber1} x ${randomNumber2} =`;
  result = randomNumber1 * randomNumber2;
  inputField.value = "";
  inputField.focus();
  randomNumberElement.textContent = random;
  return result;
}
drawButton.onclick = randomNum;

// inputField

let answer;
inputField.addEventListener("keypress", function (event) {
  if (event.which == 13) {
    answer = inputField.value == result;
    checkButton.onclick();
    }
});

inputField.addEventListener("input", function () {
  answer = inputField.value == result;
  stateHandle();
});

inputField.addEventListener("input", function () {
  stateHandle();
});

function stateHandle() {
 checkButton.disabled = inputField.value === "";
}
stateHandle();

document.addEventListener("click", function () {
  inputField.focus();
});


modalBadElement.addEventListener("click", function (event) {
  if (event.target.matches(".close") || !event.target.closest(".close")) {
    modalCloseBadElement.onclick();
  }
});

modalGoodElement.addEventListener("click", function (event) {
  if (event.target.matches(".close") || !event.target.closest(".close")) {
    modalCloseGoodElement.onclick();
 }
});

document.addEventListener("keydown", function (event){
  if (event.key === "Enter" && modalGoodElement.style.display === "block" ) {
    event.preventDefault();
    modalCloseGoodElement.onclick();
  } else if (modalBadElement.style.display === "block") {
    event.preventDefault();
    modalCloseBadElement.onclick();
  }
});


// checkButton

checkButton.onclick = function () {
  if (answer === true) {
    modalGoodElement.style.display = "block";
  } else {
    modalBadElement.style.display = "block";
  }
  inputField.focus();
  checkButton.disabled = true;
  stateHandle();
};

modalCloseGoodElement.onclick = function () {
  inputField.value = "";
  inputField.focus();
  drawButton.onclick();
  checkButton.disabled = true;
  modalGoodElement.style.display = "none";
};

modalCloseBadElement.onclick = function () {
  inputField.value = "";
  inputField.focus();
  checkButton.disabled = true;
  modalBadElement.style.display = "none";
};
