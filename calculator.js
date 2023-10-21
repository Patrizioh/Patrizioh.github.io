// Coefficients for logistic regression
const coefficients = {
    // Add your coefficients here
};

// Object to store categorical values
const categoricalValues = {
    // Add your categorical values here
};

// Function to set categorical values
function setCategory(category, value) {
    categoricalValues[category] = value;
    calculateLogisticRegression(); // Auto-calculate when a value changes
}

// Function to calculate logistic regression
function calculateLogisticRegression() {
    // Get numerical input values from the form
    const procedureAge = parseFloat(document.getElementById('procedureAge').value);
    const CCI = parseFloat(document.getElementById('CCI').value);
    const ASAScore = parseFloat(document.getElementById('ASAScore').value);
    // Get values for other numerical input fields

    // Calculate the linear combination of coefficients and input values
    let linearCombination = coefficients.intercept;
    for (const category in categoricalValues) {
        linearCombination += coefficients[category] * categoricalValues[category];
    }
    linearCombination += coefficients.procedureAge * procedureAge;
    linearCombination += coefficients.CCI * CCI;
    linearCombination += coefficients.ASAScore * ASAScore;
    // Add other terms for remaining numerical categories

    // Calculate the logistic regression probability
    const probability = 1 / (1 + Math.exp(-linearCombination));

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Probability of Outcome: ${probability.toFixed(4)}`;
}

// Add event listeners to input fields to trigger auto-calculation
const inputFields = document.querySelectorAll('input[type="number"]');
inputFields.forEach((input) => {
    input.addEventListener('input', calculateLogisticRegression);
});

// Initial calculation when the page loads
calculateLogisticRegression();
