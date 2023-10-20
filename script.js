document.getElementById('calculate').addEventListener('click', function() {
    // Get values from each input
    let intercept = parseFloat(document.getElementById('intercept').value);
    // Repeat for other inputs, like:
    // let previousJointReplacement = parseFloat(document.getElementById('previousJointReplacement').value);
    // ...

    // Calculate the result using the formula
    let result = intercept; 
    // Add the multiplication for other inputs, like:
    // result += previousJointReplacement * 0.042377;
    // ...

    // Display the result
    document.getElementById('result').textContent = result.toFixed(2);
});
