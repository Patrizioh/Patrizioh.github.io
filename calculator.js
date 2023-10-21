// Coefficients for logistic regression
const coefficients = {
    intercept: 2.495213,
    previousJointReplacement: 0.042377,
    typeOfSurgery: -0.32406,
    distanceFromHospital: 0.00161,
    sex: -0.3021,
    procedureAge: -0.04224,
    race: -0.22617,
    ethnicity: 0.692926,
    BMI: 0.007833,
    employmentStatus: -0.01879,
    maritalStatus: -0.02358,
    ASAScore: -1.57505,
    CCI: -0.20137,
    exercise: 1.906765,
    drugUse: 0.676727,
    tobaccoUse: 0.023945,
    alcoholUse: 0.33429,
    alcoholIntake: 0.033555,
    requiresHomeMedicationAssistance: 0.078272,
    unrelatedImpairedAmbulation: 0.28765,
    fallsWithin1Year: -0.00419,
    nursingHomeInPast6Months: -0.24325,
    hospitalOrERVisitsInPast1Year: -0.4485,
    transportation: 0.713789,
    livesAlone: 0.057894,
    numberOfStoriesInHome: 1.149678,
    numberStairsEnteringHome: -0.01941,
    firstFloorBathroom: 0.160448,
    firstFloorBedroom: 0.769372,
};

// Object to store categorical values
const categoricalValues = {
    previousJointReplacement: 0,
    typeOfSurgery: 0,
    sex: 0,
    race: 0,
    ethnicity: 0,
    maritalStatus: 0,
    alcoholUse: 0,
    alcoholIntake: 0,
    tobaccoUse: 0,
    employmentStatus: 0,
    exercise: 0,
    drugUse: 0,
    requiresHomeMedicationAssistance: 0,
    unrelatedImpairedAmbulation: 0,
    fallsWithin1Year: 0,
    nursingHomeInPast6Months: 0,
    hospitalOrERVisitsInPast1Year: 0,
    transportation: 0,
    livesAlone: 0,
    numberOfStoriesInHome: 0,
    numberStairsEnteringHome: 0,
    firstFloorBathroom: 0,
    firstFloorBedroom: 0,
};

// Function to set categorical values
function setCategory(category, value) {
    categoricalValues[category] = value;
}

// Function to calculate logistic regression
function calculateLogisticRegression() {
    // Get numerical input values from the form
    const procedureAge = parseFloat(document.getElementById('procedureAge').value);
    const BMI = parseFloat(document.getElementById('BMI').value);
    const ASAScore = parseFloat(document.getElementById('ASAScore').value);
    const CCI = parseFloat(document.getElementById('CCI').value);
    const distanceFromHospital = parseFloat(document.getElementById('distanceFromHospital').value);
    // Get values for other numerical input fields

    // Calculate the linear combination of coefficients and input values
    let linearCombination = coefficients.intercept;
    for (const category in categoricalValues) {
        linearCombination += coefficients[category] * categoricalValues[category];
    }
    linearCombination += coefficients.procedureAge * procedureAge;
    linearCombination += coefficients.BMI * BMI;
    linearCombination += coefficients.ASAScore * ASAScore;
    linearCombination += coefficients.CCI * CCI;
    linearCombination += coefficients.distanceFromHospital * distanceFromHospital;
    // Add other terms for remaining numerical categories

    // Calculate the logistic regression probability
    const probability = 1 / (1 + Math.exp(-linearCombination));

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Probability of Outcome: ${probability.toFixed(4)}`;
}
