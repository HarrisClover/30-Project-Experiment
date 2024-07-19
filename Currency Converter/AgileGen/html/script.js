// Fetch exchange rates
var rates = {};
fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(response => response.json())
    .then(data => rates = data.rates);

function convert() {
    var amount = document.getElementById("amount").value;
    var sourceCurrency = document.getElementById("source-currency").value;
    var targetCurrency = document.getElementById("target-currency").value;

    // Perform currency conversion calculation here
    var convertedAmount = amount * rates[targetCurrency] / rates[sourceCurrency];

    document.getElementById("result").innerHTML = "Converted amount: " + convertedAmount.toFixed(2) + " " + targetCurrency;
}
