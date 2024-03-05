const form = document.getElementById("form");
const inputs = document.querySelectorAll(".app__form__fields");

function validateName(string) {
  if (string === "") return false;
  const min = 2;
  const max = 100;
  const regex = /^[a-zA-Z]+$/;
  return regex.test(string) && string.length >= min && string.length <= max;
}

function validateEmail(string) {
  if (string === "") return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(string);
}

function validatePassword(string) {
  if (string === "") return false;
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(string);
}

function switchError(input) {
  switch (input.name) {
    case "lastName":
    case "firstName":
      return validateName(input.value);
    case "email":
      return validateEmail(input.value);
    case "password":
      return validatePassword(input.value);
    default:
      break;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  let error = false;
  inputs.forEach((input) => {
    if(switchError(input)) {
      input.classList.remove("error");
    } else {
      input.parentElement.classList.add("error");
      error = true;
    }
  });
  
  if (!error) {
    form.reset();
    alert("Form submitted!");
  }
}

form.addEventListener("submit", handleSubmit);
