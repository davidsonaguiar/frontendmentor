const bars = document.getElementById("main-bars");
const labels = document.getElementById("main-labels");

function setHeight(element, value, max) {
  element.style.height = `${(value * 100) / max}%`;
}

function numberToCurrency(number) {
  return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

async function getData() {
  const response = await fetch("./assets/data.json");
  const data = await response.json();
  return data;
}

function createBar(label) {
  const bar = document.createElement("div");
  bar.id = label;
  bar.className = "bar";
  return bar;
}

function createBarAmount(amount) {
  const value = document.createElement("span");
  value.className = "bar-value";
  value.textContent = numberToCurrency(amount);
  return value;
}

function createLabel(text) {
  const label = document.createElement("div");
  label.className = "label";
  label.textContent = text;
  return label;
}

async function createChart() {
  const data = await getData();
  const max = Math.max(...data.map((item) => item.amount));

  data.forEach((item) => {
    const bar = createBar(item.day);
    const label = createLabel(item.day);
    const amount = createBarAmount(item.amount);
    
    if(item.amount === max) bar.classList.add("max");
    setHeight(bar, item.amount, max);
    
    bar.appendChild(amount);
    bars.appendChild(bar);
    labels.appendChild(label);
  });
  
}


createChart();