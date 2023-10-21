// Coefficients for logistic regression
const coefficients = {
    intercept: 2.495213,
    procedureAge: -0.04224,
    CCI: -0.20137,
    sex: -0.3021,
    typeOfSurgery: -0.32406,
    ASAScore: -1.57505,
    exercise: 1.906765,
    numberOfStoriesInHome: 1.149678,
    firstFloorBedroom: 0.769372,
    transportation: 0.713789,
    hospitalOrERVisitsInPast1Year: -0.4485,
};

// Object to store categorical values
const categoricalValues = {
    sex: 0,
    typeOfSurgery: 0,
    exercise: 0,
    numberOfStoriesInHome: 0,
    transportation: 0,
};

// Function to set categorical values
function setCategory(category, value) {
    categoricalValues[category] = value;
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
