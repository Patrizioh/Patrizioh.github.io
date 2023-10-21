let selectedJoint = 'None';
let selectedDiabetes = 'No';
let selectedSex = 'Male';

function calculateProbability() {
    const bmi = parseFloat(document.getElementById('bmiInput').value);
    const age = parseInt(document.getElementById('ageInput').value);

    // This is just a dummy formula for the sake of demonstration
    let probability = 0;
    if (selectedJoint === 'THA') {
        probability += 0;
    } else if (selectedJoint === 'TKA') {
        probability += 1;
    }

    if (selectedDiabetes === 'Yes') {
        probability += 0.25;
    }

    if (selectedSex === 'Male') {
        probability += 0.10;
    }

    probability += (bmi / 100) + (age / 100);

    probability = Math.min(probability, 1);  // Ensure the maximum value is 1 (or 100%)
    document.getElementById('probabilityOutput').innerText = `${(probability * 100).toFixed(2)}%`;
}

function setJoint(joint) {
    selectedJoint = joint;
    updateButtons('jointGroup', joint);
    calculateProbability();
}

function setDiabetes(diabetes) {
    selectedDiabetes = diabetes;
    updateButtons('diabetesGroup', diabetes);
    calculateProbability();
}

function setSex(sex) {
    selectedSex = sex;
    updateButtons('sexGroup', sex);
    calculateProbability();
}

function updateButtons(groupId, value) {
    const group = document.getElementById(groupId);
    const buttons = group.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.textContent === value) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}
