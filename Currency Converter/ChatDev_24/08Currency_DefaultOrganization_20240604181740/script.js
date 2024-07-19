function convert() {
    var amount = document.getElementById("amount").value;
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerHTML = "Invalid amount entered.";
        return;
    }
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    // Make API call to get the conversion rate
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.exchangerate-api.com/v4/latest/" + from, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var rate = response.rates[to];
            if (rate) {
                var result = amount * rate;
                document.getElementById("result").innerHTML = amount + " " + from + " = " + result.toFixed(2) + " " + to;
            } else {
                document.getElementById("result").innerHTML = "Invalid currency selected or conversion rate not available.";
            }
        } else {
            document.getElementById("result").innerHTML = "Error occurred while fetching conversion rate.";
        }
    };
    xhr.onerror = function() {
        document.getElementById("result").innerHTML = "Error occurred while making the API request.";
    };
    xhr.send();
}