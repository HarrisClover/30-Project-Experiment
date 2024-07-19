
document.getElementById('convert-btn').addEventListener('click', function() {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = document.getElementById('amount').value;

    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);
            document.getElementById('result').textContent = `${amount} ${fromCurrency} is ${convertedAmount} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            document.getElementById('result').textContent = 'Error performing conversion.';
        });
});

window.addEventListener('load', () => {
    const apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD'; // Default to USD

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const currencyKeys = Object.keys(data.rates);
            const fromCurrencySelect = document.getElementById('from-currency');
            const toCurrencySelect = document.getElementById('to-currency');

            currencyKeys.forEach(currency => {
                const optionFrom = document.createElement('option');
                optionFrom.value = currency;
                optionFrom.textContent = currency;
                fromCurrencySelect.appendChild(optionFrom);

                const optionTo = document.createElement('option');
                optionTo.value = currency;
                optionTo.textContent = currency;
                toCurrencySelect.appendChild(optionTo);
            });
        })
        .catch(error => console.error('Error populating currencies: ', error));
});
