
let transactions = [];

function addTransaction(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);

    transactions.push({ date, description, category, amount });
    document.getElementById('transactions-list').innerHTML += `<tr>
        <td>${date}</td>
        <td>${description}</td>
        <td>${category}</td>
        <td>${amount.toFixed(2)}</td>
    </tr>`;
    document.getElementById('feedback-message').innerText = 'Transaction added successfully';
    setTimeout(() => document.getElementById('feedback-message').innerText = '', 3000);
}

function generateReport(event) {
    event.preventDefault();
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);

    let totalIncome = 0, totalExpenses = 0;
    transactions.forEach(transaction => {
        const transactionDate = new Date(transaction.date);
        if (transactionDate >= startDate && transactionDate <= endDate) {
            if (transaction.amount >= 0) {
                totalIncome += transaction.amount;
            } else {
                totalExpenses += transaction.amount;
            }
        }
    });

    const netProfitLoss = totalIncome - totalExpenses;
    document.getElementById('total-income').innerText = totalIncome.toFixed(2);
    document.getElementById('total-expenses').innerText = totalExpenses.toFixed(2);
    document.getElementById('net-profit-loss').innerText = netProfitLoss.toFixed(2);
}

function logout() {
    // Placeholder for logout functionality
    console.log('User logged out');
}
