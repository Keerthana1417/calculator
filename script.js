let displayValue = "0";

function updateDisplay() {
    document.getElementById("display").innerText = displayValue;
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}
function appendCharacter(char) {
    if (displayValue === "0" && char !== '.') {
        displayValue = char;
    } else {
        displayValue += char;
    }
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}
