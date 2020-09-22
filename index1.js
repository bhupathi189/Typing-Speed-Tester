const hrs = document.querySelector(".hours");
const startb = document.querySelector(".start-button");
const lapb = document.querySelector(".lap-button");
const stopb = document.querySelector(".stop-button");
const clearb = document.querySelector(".clear-button");
const original = document.querySelector(".original-content");
const typing = document.querySelector(".typing-content");
const origin = Array.from(
  "A good paragraph is composed of a topic sentence (or key sentence), relevant supporting sentences, and a closing (or transition) sentence. This structure is key to keeping your paragraph focused on the main idea and creating a clear and concise image. While creative writing does not necessarily follow the traditional paragraph structure, it’s more about scene building and continuing a narrative. Efficient, well-written paragraphs are a staple of good flash fiction and short fiction writing, as short stories need to stay more focused on a central idea. As long as your sentences form cohesive ideas and connect to one another, you can write a good paragraph."
);
var keyDetector = false;

const interval = function () {
  window.setTimeout(startTest, 5000);
};
var timer = new Array();
// timer = [0, 0, 0];

function startTest() {
  if (keyDetector === true) {
    console.log("typing test finished");
    let enteredValue = typing.value;
    typing.style.display = "none";
    document.querySelector(".button-container").style.display = "flex";
    document.querySelector(".result-part").style.display = "flex";
    // createPara(enteredValue);
    detectErrors();
    wpm();
    keyDetector = false;
    //   window.clearTimeout(interval());
  }
}

function createPara(x) {
  console.log("creating paragraph");
  let h = document.createElement("p");
  let t = document.createTextNode(x);
  h.appendChild(t);
  document.querySelector(".testing-area").appendChild(h);
}
function wpm() {
  let testLength = typing.value.length;
  console.log(testLength);
  let wpm = Math.floor(testLength / 5);
  console.log("word per minute " + wpm);
  showResult(wpm);
}
function showResult(y) {
  let j = document.createElement("h3");
  let k = document.createTextNode("Average Words Per Minute: " + y);
  j.appendChild(k);
  document.querySelector(".lap-div").appendChild(j);
}
function detectErrors() {
  // let origin = Array.from(origina);
  let given = Array.from(typing.value);
  for (let i = 0; i <= origin.length; i++) {
    if (given[i] != undefined) {
      let p = document.createElement("text");
      let h = document.createTextNode(given[i]);
      p.setAttribute("class", "error");
      p.appendChild(h);
      if (origin[i] == given[i]) {
        p.toggleAttribute("class");
      } else {
        // p.toggleAttribute("error");
      }
      document.querySelector(".review-part").appendChild(p);
    }
  }
}
function clear() {
  clearTimeout(interval());
  typing.value = "";
  document.querySelector(".review-part").innerHTML = "";
  document.querySelector(".lap-div").innerHTML = "";
  document.querySelector(".result-part").style.display = "none";
  typing.style.display = "block";
  typing.value = "";
  document.querySelector(".button-container").style.display = "none";
}
typing.addEventListener(
  "keypress",
  function () {
    keyDetector = true;
    console.log("test started");
    interval();
  },
  false
);
clearb.addEventListener(
  "click",
  function () {
    console.log("clear clicked");
    clear();
    window.location.reload;
  },
  false
);
window.addEventListener("load", clear, false);
