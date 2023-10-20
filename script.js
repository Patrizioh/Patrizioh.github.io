function computeProbability(inputs) {
    let coefficients = {
        "Knee Surgery": -0.41,
        "Age": -0.06,
        "Marital Status": {
            "Single": 0,
            "Married": 0.59,
            "Divorced": -0.45,
            "Widowed": 0.05
        },
        // Add other coefficients similarly
    };
    
    let z = 0;
    z += coefficients["Knee Surgery"] * inputs["Knee Surgery"];
    z += coefficients["Age"] * inputs["Age"];
    z += coefficients["Marital Status"][inputs["Marital Status"]];
    // ... (other input calculations here)
    
    return 1 / (1 + Math.exp(-z));
}

function calculateProbability() {
    let userInputs = {
        "Knee Surgery": parseFloat(document.getElementById("KneeSurgery").value),
        "Age": parseFloat(document.getElementById("Age").value),
        "Marital Status": document.getElementById("MaritalStatus").value,
        // Fetch other inputs similarly
    };
    let result = computeProbability(userInputs);
    document.getElementById("resultValue").innerText = result.toFixed(4); // Display the result with 4 decimal places
}
