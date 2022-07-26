const add = document.getElementById("add");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");
const counter = document.getElementById("counter");

let count = 0;

const clicking = (element) => {
  element.addEventListener("click", (e) => {
    if (e.currentTarget.id == "add") {
      count += 1;
    }
    if (e.target.id == "minus") {
      count -= 1;
    }
    if (e.target.id == "reset") {
      count = 0;
    }

    if (count > 0) {
      counter.style.color = "green";
    } else {
      counter.style.color = "red";
    }
    counter.textContent = `Counter : ${count}`;
  });
};

clicking(add);
console.log("1");
clicking(minus);
console.log("2");
clicking(reset);
console.log("3");
