
function convertCurrency() {
    var amount = document.getElementById('amount').value;
    var sourceCurrency = document.getElementById('sourceCurrency').value;
    var targetCurrency = document.getElementById('targetCurrency').value;
    var resultDisplay = document.getElementById('resultDisplay');
    var errorDisplay = document.getElementById('errorDisplay');

    if (isNaN(amount) || amount <= 0) {
        errorDisplay.textContent = 'Please enter a valid number';
        resultDisplay.textContent = '';
        return;
    }

    errorDisplay.textContent = ''; // Clear any previous errors

    // Dummy conversion rate for demonstration
    var conversionRates = {
        "USD": {"EUR": 0.85, "GBP": 0.75},
        "EUR": {"USD": 1.18, "GBP": 0.88},
        "GBP": {"USD": 1.33, "EUR": 1.14}
    };

    if (sourceCurrency === targetCurrency) {
        resultDisplay.textContent = `Result: ${amount} ${targetCurrency}`;
    } else {
        var convertedAmount = (amount * conversionRates[sourceCurrency][targetCurrency]).toFixed(2);
        resultDisplay.textContent = `Result: ${convertedAmount} ${targetCurrency}`;
    }
}
