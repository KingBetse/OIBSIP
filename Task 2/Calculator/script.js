const display = document.querySelector(".input");
const buttons = document.querySelectorAll("button");
const specialChars = ["*", "/", "-", "+", "="];

let output = "";
display.setAttribute("disabled", "");
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output);
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DE") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }

  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
