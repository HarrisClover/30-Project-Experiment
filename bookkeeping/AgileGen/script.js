
// Categorizing Transactions
const checkboxes = document.querySelectorAll('#categorizing-transactions input[type="checkbox"]');
const editInputs = document.querySelectorAll('#categorizing-transactions input[type="text"]');
const saveButton = document.querySelector('#categorizing-transactions button');

saveButton.addEventListener('click', () => {
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            console.log(`Transaction ${index + 1} category edited to ${editInputs[index].value}`);
        }
    });
});

// Creating an Invoice
const invoiceButton = document.querySelector('#creating-an-invoice button:first-of-type');
const saveInvoiceButton = document.querySelector('#creating-an-invoice button:last-of-type');

invoiceButton.addEventListener('click', () => {
    const selectedItems = document.querySelectorAll('#creating-an-invoice input[type="checkbox"]:checked');
    let invoiceHTML = '<h3>Invoice</h3>';

    selectedItems.forEach(item => {
        const itemName = item.parentNode.nextElementSibling.textContent;
        const itemPrice = item.parentNode.nextElementSibling.nextElementSibling.textContent;
        invoiceHTML += `<p>${itemName} - ${itemPrice}</p>`;
    });

    const subtotal = Array.from(selectedItems).reduce((total, item) => {
        const itemPrice = parseFloat(item.parentNode.nextElementSibling.nextElementSibling.textContent.replace('$', ''));
        return total + itemPrice;
    }, 0);

    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    invoiceHTML += '<hr>';
    invoiceHTML += `<p>Subtotal - $${subtotal.toFixed(2)}</p>`;
    invoiceHTML += `<p>Tax - $${tax.toFixed(2)}</p>`;
    invoiceHTML += `<p>Total - $${total.toFixed(2)}</p>`;

    document.querySelector('#creating-an-invoice .invoice').innerHTML = invoiceHTML;
});

// Tracking Expenses
const expenseCheckboxes = document.querySelectorAll('#tracking-expenses input[type="checkbox"]');
const expenseEditInputs = document.querySelectorAll('#tracking-expenses input[type="text"]');
const expenseSaveButton = document.querySelector('#tracking-expenses button');

expenseSaveButton.addEventListener('click', () => {
    expenseCheckboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            console.log(`Expense ${index + 1} category edited to ${expenseEditInputs[index].value}`);
        }
    });
});

// Generating a Report
const generateReportButton = document.querySelector('#generating-a-report button');
const reportDiv = document.querySelector('#generating-a-report .report');

generateReportButton.addEventListener('click', (event) => {
    event.preventDefault();

    const startDate = document.querySelector('#start-date').value;
    const endDate = document.querySelector('#end-date').value;

    const totalIncome = 100;
    const totalExpenses = 50;
    const totalProfit = totalIncome - totalExpenses;

    const reportHTML = `
        <h3>Report</h3>
        <p>Total Income - $${totalIncome.toFixed(2)}</p>
        <p>Total Expenses - $${totalExpenses.toFixed(2)}</p>
        <p>Total Profit - $${totalProfit.toFixed(2)}</p>
    `;

    reportDiv.innerHTML = reportHTML;
});
