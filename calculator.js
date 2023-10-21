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
    employment: -0.01879,
    maritalStatus: -0.02358,
    ASAScore: -1.57505,
    CCI: -0.20137,
    exercise: 1.906765,
    drugUse: 0.676727,
    tobaccoUse: 0.023945,
    alcoholUse: 0.33429,
    alcoholIntake: 0.033555,
    requireMedsAssistance: 0.078272,
    impairedAmbulation: 0.28765,
    numberOfFalls: -0.00419,
    nursingHome: -0.24325,
    hospitalVisits: -0.4485,
    transportation: 0.713789,
    livesAlone: 0.057894,
    numberOfStories: 1.149678,
    stairsEnteringHome: -0.01941,
    firstFloorBathroom: 0.160448,
    firstFloorBedroom: 0.769372
};

// Function to calculate logistic regression
function calculateLogisticRegression() {
    // Get input values from the form
    const previousJointReplacement = parseFloat(document.getElementById('previousJointReplacement').value);
    const typeOfSurgery = parseFloat(document.getElementById('typeOfSurgery').value);
    const distanceFromHospital = parseFloat(document.getElementById('distanceFromHospital').value);
    const sex = parseFloat(document.getElementById('sex').value);
    const procedureAge = parseFloat(document.getElementById('procedureAge').value);
    const race = parseFloat(document.getElementById('race').value);
    const ethnicity = parseFloat(document.getElementById('ethnicity').value);
    const BMI = parseFloat(document.getElementById('BMI').value);
    const employment = parseFloat(document.getElementById('employment').value);
    const maritalStatus = parseFloat(document.getElementById('maritalStatus').value);
    const ASAScore = parseFloat(document.getElementById('ASAScore').value);
    const CCI = parseFloat(document.getElementById('CCI').value);
    const exercise = parseFloat(document.getElementById('exercise').value);
    const drugUse = parseFloat(document.getElementById('drugUse').value);
    const tobaccoUse = parseFloat(document.getElementById('tobaccoUse').value);
    const alcoholUse = parseFloat(document.getElementById('alcoholUse').value);
    const alcoholIntake = parseFloat(document.getElementById('alcoholIntake').value);
    const requireMedsAssistance = parseFloat(document.getElementById('requireMedsAssistance').value);
    const impairedAmbulation = parseFloat(document.getElementById('impairedAmbulation').value);
    const numberOfFalls = parseFloat(document.getElementById('numberOfFalls').value);
    const nursingHome = parseFloat(document.getElementById('nursingHome').value);
    const hospitalVisits = parseFloat(document.getElementById('hospitalVisits').value);
    const transportation = parseFloat(document.getElementById('transportation').value);
    const livesAlone = parseFloat(document.getElementById('livesAlone').value);
    const numberOfStories = parseFloat(document.getElementById('numberOfStories').value);
    const stairsEnteringHome = parseFloat(document.getElementById('stairsEnteringHome').value);
    const firstFloorBathroom = parseFloat(document.getElementById('firstFloorBathroom').value);
    const firstFloorBedroom = parseFloat(document.getElementById('firstFloorBedroom').value);

    // Calculate the linear combination of coefficients and input values
    const linearCombination =
        coefficients.intercept +
        coefficients.previousJointReplacement * previousJointReplacement +
        coefficients.typeOfSurgery * typeOfSurgery +
        coefficients.distanceFromHospital * distanceFromHospital +
        coefficients.sex * sex +
        coefficients.procedureAge * procedureAge +
        coefficients.race * race +
        coefficients.ethnicity * ethnicity +
        coefficients.BMI * BMI +
        coefficients.employment * employment +
        coefficients.maritalStatus * maritalStatus +
        coefficients.ASAScore * ASAScore +
        coefficients.CCI * CCI +
        coefficients.exercise * exercise +
        coefficients.drugUse * drugUse +
        coefficients.tobaccoUse * tobaccoUse +
        coefficients.alcoholUse * alcoholUse +
        coefficients.alcoholIntake * alcoholIntake +
        coefficients.requireMedsAssistance * requireMedsAssistance +
        coefficients.impairedAmbulation * impairedAmbulation +
        coefficients.numberOfFalls * numberOfFalls +
        coefficients.nursingHome * nursingHome +
        coefficients.hospitalVisits * hospitalVisits +
        coefficients.transportation * transportation +
        coefficients.livesAlone * livesAlone +
        coefficients.numberOfStories * numberOfStories +
        coefficients.stairsEnteringHome * stairsEnteringHome +
        coefficients.firstFloorBathroom * firstFloorBathroom +
        coefficients.firstFloorBedroom * firstFloorBedroom;

    // Calculate the logistic regression probability
    const probability = 1 / (1 + Math.exp(-linearCombination));

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Probability of Outcome: ${probability.toFixed(4)}`;
}
