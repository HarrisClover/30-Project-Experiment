
document.getElementById("currency-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var amount = document.getElementById("amount").value;
  var currency = document.getElementById("currency").value;
  
  fetch("https://api.exchangerate-api.com/v4/latest/USD")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var exchangeRate = data.rates[currency];
      var convertedAmount = amount * exchangeRate;
      document.getElementById("result").textContent = convertedAmount.toFixed(2) + " " + currency;
    })
    .catch(function(error) {
      console.log(error);
      document.getElementById("result").textContent = "Error converting currency. Please try again.";
    });
});
