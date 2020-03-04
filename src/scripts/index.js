import "@fortawesome/fontawesome-free/js/all";
import "../styles/index.scss";

function turnOn() {
  let color = document.getElementsByName("color")[0].value;
  if (!color) {
    color = "#ffeb00";
  }
  const bulbElement = document.getElementsByClassName("fa-lightbulb")[0];
  bulbElement.style.color = color;
  const bulbStatus = document.getElementById("headStyle");
  bulbStatus.innerHTML = "ON";
  bulbStatus.style.color = "#000000";
  const bodyElement = document.getElementsByTagName("body")[0];
  bodyElement.style.backgroundColor = "#ffffff";
}

function turnOff() {
  const bulbElement = document.getElementsByClassName("fa-lightbulb")[0];
  bulbElement.style.color = "#000000";
  const bulbStatus = document.getElementById("headStyle");
  bulbStatus.innerHTML = "OFF";
  bulbStatus.style.color = "#ffffff";
  const bodyElement = document.getElementsByTagName("body")[0];
  bodyElement.style.backgroundColor = "#696969";
}

window.turnOn = turnOn;
window.turnOff = turnOff;
