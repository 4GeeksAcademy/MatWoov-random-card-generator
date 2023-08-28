/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let generateRandomNumber = () => {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let indexNumber = Math.floor(Math.random() * numbers.length);
    return numbers[indexNumber];
  };
  let generateRandomSuit = () => {
    let suits = ["♦", "♥", "♠", "♣"];
    let indexSuit = Math.floor(Math.random(suits) * suits.length);
    return suits[indexSuit];
  };
  document.querySelector("#number").innerHTML = generateRandomNumber();

  var allSuits = generateRandomSuit();
  document.querySelector("#top").innerHTML = allSuits;
  document.querySelector("#bottom").innerHTML = allSuits;

  let colorClass = allSuits == "♦" || allSuits == "♥" ? "red" : "black";
  document.querySelector("#top").classList.add(colorClass);
  document.querySelector("#bottom").classList.add(colorClass);
};

const button = document.querySelector("#reload");
button.addEventListener("click", () => {
  window.location.reload();
});
