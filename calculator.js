let currentInput = "";

function clearDisplay() {
  currentInput = "";
  document.calculator.display.value = currentInput;
}

function appendToDisplay(value) {
  currentInput += value;
  document.calculator.display.value = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput);
    document.calculator.display.value = currentInput;
  } catch(e) {
    document.calculator.display.value = 'Error';
    currentInput = "";
  }
}
