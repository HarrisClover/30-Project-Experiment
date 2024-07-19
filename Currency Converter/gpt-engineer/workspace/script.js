document.getElementById('convert').addEventListener('click', function() {
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var amount = document.getElementById('amount').value;
    var resultDiv = document.getElementById('result');

    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
        .then(response => response.json())
        .then(data => {
            var rate = data.rates[to];
            var result = amount * rate;
            resultDiv.innerHTML = `${amount} ${from} = ${result} ${to}`;
        })
        .catch(error => {
            resultDiv.innerHTML = 'Error: ' + error;
        });
});
