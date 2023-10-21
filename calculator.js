// Coefficients for logistic regression
const coefficients = {
    // Add your coefficients here
};

// Object to store categorical values
const categoricalValues = {
    // Add your categorical values here
};

// Function to set categorical values and toggle the "selected" class
function setCategory(category, value) {
    categoricalValues[category] = value;
    
    // Remove the "selected" class from all buttons in the category
    const categoryButtons = document.querySelectorAll(`.category.${category} button`);
    categoryButtons.forEach(button => button.classList.remove('selected'));
    
    // Add the "selected" class to the clicked button
    const clickedButton = document.querySelector(`.category.${category} button[data-value="${value}"]`);
    clickedButton.classList.add('selected');
    
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
    const probabilityPercent = (probability * 100).toFixed(2); // Convert to percentage

    // Display the result
    const probabilityPercentElement = document.getElementById('probabilityPercent');
    probabilityPercentElement.textContent = probabilityPercent;

    // Provide a recommendation
    const recommendationElement = document.getElementById('recommendation');
    if (probability >= 0.8) {
        recommendationElement.textContent = 'Recommendation: Surgery Center';
    } else {
        recommendationElement.textContent = 'Recommendation: Hospital';
    }
}

// Add event listeners to input fields to trigger auto-calculation
const inputFields = document.querySelectorAll('input[type="number"]');
inputFields.forEach((input) => {
    input.addEventListener('input', calculateLogisticRegression);
});

// Initial calculation when the page loads
calculateLogisticRegression();
