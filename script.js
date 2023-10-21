function calculate() {
    // Extract values from the form
    const previousJointReplacementValue = parseFloat(document.getElementById('previousJointReplacement').value);
    const bodyMassIndexValue = parseFloat(document.getElementById('bodyMassIndex').value);
    const diabetesValue = parseFloat(document.getElementById('diabetes').value);
    const sexValue = parseFloat(document.getElementById('sex').value);
    const ageValue = parseFloat(document.getElementById('age').value);

    // Coefficients
    const coefficients = {
        intercept: 2.492513,
        previousJointReplacement: [0, 0.042377, 0.117596, 0.211251, 0.415966], // For None, THA, TKA, Hemi, Revision respectively
        bodyMassIndex: 0.03, // Example coefficient, adjust as necessary
        diabetes: 0.2, // Example coefficient, adjust as necessary
        sex: 0.1, // Example coefficient, adjust as necessary
        age: 0.05 // Example coefficient, adjust as necessary
    };

    // Calculate using your coefficients
    let result = coefficients.intercept +
                 coefficients.previousJointReplacement[previousJointReplacementValue] +
                 coefficients.bodyMassIndex * bodyMassIndexValue +
                 coefficients.diabetes * diabetesValue +
                 coefficients.sex * sexValue +
                 coefficients.age * ageValue;

    // Convert logistic regression result to probability
    const probability = 1 / (1 + Math.exp(-result));

    // Display the result
    document.getElementById('result').querySelector('span').textContent = (probability * 100).toFixed(2) + "%";
}
