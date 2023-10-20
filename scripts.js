document.querySelectorAll('input[type="range"]').forEach(function(slider) {
    slider.addEventListener('input', function(e) {
        let textBoxId = e.target.id + "Text";
        document.getElementById(textBoxId).value = e.target.value;
    });
});

document.querySelectorAll('input[type="text"]').forEach(function(textBox) {
    textBox.addEventListener('input', function(e) {
        let sliderId = e.target.id.replace("Text", "");
        document.getElementById(sliderId).value = e.target.value;
    });
});

document.getElementById('calculate').addEventListener('click', function() {
    let intercept = 2.495213;
    let previousJointReplacement = parseFloat(document.getElementById('previousJointReplacementText').value) * 0.042377;
    let typeOfSurgery = parseFloat(document.getElementById('typeOfSurgeryText').value) * -0.32406;
    let distance = parseFloat(document.getElementById('distanceText').value) * 0.00161;
    let sex = parseFloat(document.getElementById('sexText').value) * -0.3021;
    let procedureAge = parseFloat(document.getElementById('procedureAgeText').value) * -0.04224;
    let race = parseFloat(document.getElementById('raceText').value) * -0.22617;

    let result = intercept + previousJointReplacement + typeOfSurgery + distance + sex + procedureAge + race;
    document.getElementById('result').textContent = result.toFixed(5); 
});

