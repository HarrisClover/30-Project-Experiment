document.getElementById('transaction-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var type = document.getElementById('type').value;
    var description = document.getElementById('description').value;
    var amount = parseFloat(document.getElementById('amount').value);

    var table = document.getElementById('transaction-table').getElementsByTagName('tbody')[0];
    var row = table.insertRow();
    row.insertCell().innerText = type;
    row.insertCell().innerText = description;
    row.insertCell().innerText = amount;

    var totalIncome = document.getElementById('total-income');
    var totalExpense = document.getElementById('total-expense');
    var balance = document.getElementById('balance');

    if (type === 'income') {
        totalIncome.innerText = parseFloat(totalIncome.innerText) + amount;
    } else {
        totalExpense.innerText = parseFloat(totalExpense.innerText) + amount;
    }

    balance.innerText = parseFloat(totalIncome.innerText) - parseFloat(totalExpense.innerText);

    document.getElementById('transaction-form').reset();
});
