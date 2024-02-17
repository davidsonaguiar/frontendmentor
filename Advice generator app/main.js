const MAIN = document.getElementById("main");
const ID = document.getElementById("id");
const ADVICE = document.getElementById("advice");
const BUTTON = document.getElementById("button");
const URL = "https://api.adviceslip.com/advice";

function addClassLoading() {
}

function removeClassLoading() {
}
async function getAdvice() {
  MAIN.classList.add("loading");
  const response = await fetch(URL);
  const data = await response.json();
  MAIN.classList.remove("loading");
  ID.textContent = data.slip.id;
  ADVICE.textContent = data.slip.advice;
}


window.onload = getAdvice;
BUTTON.addEventListener("click", getAdvice);
