function setThemeLocalStorage(theme) {
  localStorage.setItem("theme", theme);
}

function getThemeLocalStorage() {
  return localStorage.getItem("theme");
}

function setTheme(theme) {
  setThemeLocalStorage(theme);
  document.body.className = theme;
}

function setToggleInput(theme) {
  const toggleInput = document.getElementById("dark");
  toggleInput.checked = theme === "dark";
}

function loadTheme() {
  const theme = getThemeLocalStorage();
  if (theme) {
    setTheme(theme);
    setToggleInput(theme);
  } else {
    setTheme("dark");
    setToggleInput("dark");
  }
}

function toggleTheme(event) {
  const theme = event.target.checked ? "dark" : "light";
  setTheme(theme);
}

window.addEventListener("load", loadTheme);
document.getElementById("dark").addEventListener("change", toggleTheme);
