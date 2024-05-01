
// Function to perform logistic regression calculation
function logisticRegression(age, asa, sex, surgeryType, exercise, stories) {
    const coefficients = [2.495213, -0.04224, -1.57505, -0.3021, -0.32406, 1.906765, 1.149678];
    let z = coefficients[0] + (coefficients[1] * age) + (coefficients[2] * asa) + 
            (coefficients[3] * sex) + (coefficients[4] * surgeryType) + 
            (coefficients[5] * exercise) + (coefficients[6] * stories);
    let probability = 1 / (1 + Math.exp(-z));
    return probability * 100;
}

// Function to set recommendation
function setRecommendation(probability) {
    if (probability < 80) {
        return "Hospital";
    } else {
        return "Surgery Center";
    }
}

// Function to toggle button selection and set the associated value
function toggleButton(button, otherButtons, valueSetter) {
    button.classList.add("selected");
    otherButtons.forEach((btn) => {
        btn.classList.remove("selected");
    });
    valueSetter();
}

// Main
document.addEventListener("DOMContentLoaded", function() {
    // Initialize variables
    let age, asa, sex, surgeryType, exercise, stories;
    
    // Add event listeners to input fields and buttons
    document.getElementById("age").addEventListener("input", function() {
        age = parseFloat(this.value);
    });
    
    document.getElementById("asa").addEventListener("input", function() {
        asa = parseFloat(this.value);
    });
    
    document.getElementById("sex-male").addEventListener("click", function() {
        toggleButton(this, [document.getElementById("sex-female")], () => { sex = 0; });
    });
    
    document.getElementById("sex-female").addEventListener("click", function() {
        toggleButton(this, [document.getElementById("sex-male")], () => { sex = 1; });
    });
    
    document.getElementById("surgery-tha").addEventListener("click", function() {
        toggleButton(this, [document.getElementById("surgery-tka")], () => { surgeryType = 0; });
    });
    
    document.getElementById("surgery-tka").addEventListener("click", function() {
        toggleButton(this, [document.getElementById("surgery-tha")], () => { surgeryType = 1; });
    });
    
    document.getElementById("exercise-no").addEventListener("click", function() {
        toggleButton(this, [document.getElementById("exercise-yes")], () => { exercise = 0; });
    });
    
    document.getElementById("exercise-yes").addEventListener("click", function() {
        toggleButton(this, [document.getElementById("exercise-no")], () => { exercise = 1; });
    });
    
    document.getElementById("stories-1").addEventListener("click", function() {
        toggleButton(this, [document.getElementById("stories-2"), document.getElementById("stories-3")], () => { stories = 1; });
    });
    
    document.getElementById("stories-2").addEventListener("click", function() {
        toggleButton(this, [document.getElementById("stories-1"), document.getElementById("stories-3")], () => { stories = 2; });
    });
    
    document.getElementById("stories-3").addEventListener("click", function() {
        toggleButton(this, [document.getElementById("stories-1"), document.getElementById("stories-2")], () => { stories = 3; });
    });
    
    document.getElementById("stories-3").addEventListener("click", function() {
        toggleButton(this, [document.getElementById("stories-1"), document.getElementById("stories-2")], () => { stories = 4; });
    });
    
    // Add event listener to Reset button
    document.getElementById("reset").addEventListener("click", function() {
        document.querySelectorAll(".btn").forEach((btn) => {
            btn.classList.remove("selected");
        });
        document.querySelectorAll("input[type='text']").forEach((input) => {
            input.value = "";
        });
        document.getElementById("outcome").textContent = "";
        document.getElementById("recommendation").textContent = "";
        document.getElementById("outcome").style.color = "black";
    });
    
    // Add event listeners for calculating outcome and recommendation
    document.querySelectorAll(".btn, input[type='text']").forEach((element) => {
        element.addEventListener("click", function() {
            if (age !== undefined && asa !== undefined && sex !== undefined && surgeryType !== undefined && exercise !== undefined && stories !== undefined) {
                let probability = logisticRegression(age, asa, sex, surgeryType, exercise, stories);
                document.getElementById("outcome").textContent = probability.toFixed(2) + "%";
                document.getElementById("recommendation").textContent = setRecommendation(probability);
                document.getElementById("outcome").style.color = (probability < 80) ? "red" : "green";
            }
        });
    });
});

// Existing functions and event listeners...

// Dark Mode Toggle Function
function toggleDarkMode() {
    const elementsToToggle = [
        document.body,
        document.querySelector(".container"),
        document.querySelector(".header"),
        ...document.querySelectorAll("label"),
        ...document.querySelectorAll("input[type='text']"),
        document.querySelector(".output-section")
    ];
    
    elementsToToggle.forEach((element) => element.classList.toggle("dark-mode"));
}

// Event Listener for Dark Mode Toggle Button
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
});
