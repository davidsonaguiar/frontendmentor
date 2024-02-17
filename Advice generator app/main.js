const ID = document.getElementById("id");
const ADVICE = document.getElementById("advice");
const BUTTON = document.getElementById("button");
const URL = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const response = await fetch(URL);
  const data = await response.json();
  const advice = data.slip.advice;
  ID.textContent = data.slip.id;
  ADVICE.textContent =  advice;
}

window.onload = getAdvice;
BUTTON.addEventListener("click", getAdvice);
