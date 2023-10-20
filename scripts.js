// Update output values for sliders
document.querySelectorAll('input[type="range"]').forEach(function(slider) {
    slider.addEventListener('input', function(e) {
        let outputId = e.target.id + "Output";
        document.getElementById(outputId).textContent = e.target.value;
    });
});

document.getElementById('calculate').addEventListener('click', function() {
    let intercept = 2.495213;
    let previousJointReplacement = parseFloat(document.getElementById('previousJointReplacement').value) * 0.042377;
    let typeOfSurgery = parseFloat(document.getElementById('typeOfSurgery').value) * -0.32406;
    let distance = parseFloat(document.getElementById('distance').value) * 0.00161;
    let sex = parseFloat(document.getElementById('sex').value) * -0.3021;
    let procedureAge = parseFloat(document.getElementById('procedureAge').value) * -0.04224;
    let race = parseFloat(document.getElementById('race').value) * -0.22617;

    let result = intercept + previousJointReplacement + typeOfSurgery + distance + sex + procedureAge + race;
    document.getElementById('result').textContent = result.toFixed(5); // showing up to 5 decimal places
});

