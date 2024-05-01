document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('.option, .form-control');
    inputs.forEach(input => {
        input.addEventListener('click', calculateSuccess);
        input.addEventListener('change', calculateSuccess);
    });
    calculateSuccess();  // Initial calculation on page load
});

function selectOption(fieldId, value) {
    document.getElementById(fieldId).value = value;
    let buttons = document.querySelectorAll(`.option[data-field='${fieldId}']`);
    buttons.forEach(button => {
        if(button.getAttribute('data-value') === value.toString()) {
            button.classList.add('selected');
        } else {
            button.classList.remove('selected');
        }
    });
    calculateSuccess();
}

function calculateSuccess() {
    const intercept = 6.68;
    const surgeryType = parseFloat(document.getElementById('surgeryType').value);
    const sex = parseFloat(document.getElementById('sex').value);
    const age = parseFloat(document.getElementById('age').value) * -0.08;
    const race = parseFloat(document.getElementById('race').value);
    const maritalStatus = parseFloat(document.getElementById('maritalStatus').value);
    const asaScore = parseFloat(document.getElementById('asaScore').value) * -1.53;
    const exercise = parseFloat(document.getElementById('exercise').value);
    const hospitalAdmission = parseFloat(document.getElementById('hospitalAdmission').value);
    const transportation = parseFloat(document.getElementById('transportation').value);

    const logOdds = intercept + surgeryType + sex + age + race + maritalStatus + asaScore + exercise + hospitalAdmission + transportation;
    const probability = 1 / (1 + Math.exp(-logOdds));

    const resultElement = document.getElementById('result');
    resultElement.innerText = 'Probability of Success: ' + (probability * 100).toFixed(2) + '%';
    if (probability >= 0.8) {
        resultElement.style.backgroundColor = '#d1e7dd'; // Green for outpatient
    } else {
        resultElement.style.backgroundColor = '#f8d7da'; // Red for inpatient
    }
}
