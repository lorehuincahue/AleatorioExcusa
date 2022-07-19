/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My granma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let ex1 = Math.floor(Math.random() * who.length);
  let ex2 = Math.floor(Math.random() * action.length);
  let ex3 = Math.floor(Math.random() * what.length);
  let ex4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[ex1] + " " + action[ex2] + " " + what[ex3] + " " + when[ex4];
};
