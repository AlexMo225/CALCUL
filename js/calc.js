function calculate() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operation').value;
    const resultsDiv = document.getElementById('results');
    const errorDiv = document.querySelector('.error');

    if (isNaN(number1) || isNaN(number2)) {
        errorDiv.textContent = 'Veuillez entrer des nombres valides.';
        resultsDiv.textContent = '';
    } else {
        errorDiv.textContent = '';
        let result;
        switch (operation) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                if (number2 !== 0) {
                    result = number1 / number2;
                } else {
                    errorDiv.textContent = 'Division par zéro non autorisée.';
                    resultsDiv.textContent = '';
                    return;
                }
                break;
            default:
                errorDiv.textContent = 'Opération non valide.';
                resultsDiv.textContent = '';
                return;
        }

        resultsDiv.textContent = 'Résultat: ' + result;
    }
}
document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    calculate();
    document.getElementById('results').style.display = 'block'; 
});

document.getElementById('resetButton').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('calculatorForm').reset();
    document.querySelector('.error').textContent = '';
    document.getElementById('results').style.display = 'none'; 
});