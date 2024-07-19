document.getElementById('convertButton').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;   
    const toCurrency = document.getElementById('toCurrency').value;       

    if (amount === '' || isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key    
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);
            document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Error fetching exchange rate:', error);        
            alert('Error fetching exchange rate. Please try again later.');
        });
});