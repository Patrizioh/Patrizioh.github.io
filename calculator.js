const coefficients = {
    intercept: 2.495213,
    procedureAge: -0.4224,
    CCI: -0.20137,
    sex: -0.3021,
    typeOfSurgery: -0.32406,
    ASAScore: -1.57505,
    exercise: 1.906765,
    numberOfStoriesInHome: 1.149678
};

const categoricalValues = {};

function setCategory(category, value) {
    categoricalValues[category] = value;

    const categoryButtons = document.querySelectorAll(`.category.${category} button`);
    categoryButtons.forEach(button => button.classList.remove('selected'));

    const clickedButton = document.querySelector(`.category.${category} button[data-value="${value}"]`);
    clickedButton.classList.add('selected');

    calculateLogisticRegression();
}

function calculateLogisticRegression() {
    const procedureAge = parseFloat(document.getElementById('procedureAge').value);
    const CCI = parseFloat(document.getElementById('CCI').value);
    const ASAScore = parseFloat(document.getElementById('ASAScore').value);

    let linearCombination = coefficients.intercept;
    for (const category in categoricalValues) {
        linearCombination += coefficients[category] * categoricalValues[category];
    }
    linearCombination += coefficients.procedureAge * procedureAge;
    linearCombination += coefficients.CCI * CCI;
    linearCombination += coefficients.ASAScore * ASAScore;

    const probability = 1 / (1 + Math.exp(-linearCombination));
    const probabilityPercent = (probability * 100).toFixed(2);

    const probabilityPercentElement = document.getElementById('probabilityPercent');
    probabilityPercentElement.textContent = probabilityPercent;

    const recommendationElement = document.getElementById('recommendation');
    if (probability >= 0.8) {
        recommendationElement.textContent = 'Recommendation: Surgery Center';
    } else {
        recommendationElement.textContent = 'Recommendation: Hospital';
    }
}

const inputFields = document.querySelectorAll('input[type="number"]');
inputFields.forEach((input) => {
    input.addEventListener('input', calculateLogisticRegression);
});

calculateLogisticRegression();
