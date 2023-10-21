function calculate() {
    // Extract values from the form
    const previousJointReplacementValue = parseFloat(document.getElementById('previousJointReplacement').value);
    // Coefficients
    const coefficients = {
        intercept: 2.492513,
        previousJointReplacement: [0, 0.042377, 0.117596, 0.211251, 0.415966] // For None, THA, TKA, Hemi, Revision respectively
    };

    // Calculate using your coefficients
    let result = coefficients.intercept + coefficients.previousJointReplacement[previousJointReplacementValue];

    // Convert logistic regression result to probability
    const probability = 1 / (1 + Math.exp(-result));

    // Display the result
    document.getElementById('result').querySelector('span').textContent = (probability * 100).toFixed(2) + "%";
}
