// Update output when any slider moves
document.querySelectorAll('input[type="range"]').forEach(function(slider) {
    slider.addEventListener('input', function(e) {
        let outputId = e.target.id + "Output";
        document.getElementById(outputId).value = e.target.value;
    });
});

document.getElementById('calculate').addEventListener('click', function() {
    let result = 0;
    document.querySelectorAll('input[type="range"]').forEach(function(slider) {
        let value = parseFloat(slider.value);
        let coeff = parseFloat(slider.getAttribute('data-coeff'));
        result += value * coeff;
    });
    document.getElementById('result').textContent = result.toFixed(2);
});
