const expenseForm = document.getElementById('addExpenseForm');
const expenseTable = document.getElementById('expenseTable');
const totalExpenseElement = document.getElementById('totalExpense');

let totalExpense = 0;

expenseForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const expenseName = document.getElementById('expenseName').value;
    const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);
    const expenseDate = document.getElementById('expenseDate').value;

    if (expenseName && expenseAmount) {
        document.getElementById('expenseTable').style.display = 'block';
        totalExpense += expenseAmount;
        const newExpenseRow = document.createElement('tr');
        newExpenseRow.innerHTML = `
            <td>${expenseName}</td>
            <td>PHP ${expenseAmount}</td>
            <td>${expenseDate}</td>
            <td><button onclick="removeExpense()" tabindex="0">Remove</button></td>
        `;
        expenseTable.appendChild(newExpenseRow);
        totalExpenseElement.textContent = `${totalExpense}`;
        document.getElementById('expenseName').value = '';
        document.getElementById('expenseAmount').value = '';
    }
});

expenseTable.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const removeButton = event.target;
        const expenseRow = removeButton.parentNode.parentNode;
        removeExpense(expenseRow);
    }
});


function removeExpense(expenseRow) {
    const expenseAmount = parseFloat(expenseRow.querySelector('td:nth-child(2)').textContent.replace('PHP ', ''));
    totalExpense -= expenseAmount;
    expenseRow.parentNode.removeChild(expenseRow);
    totalExpenseElement.textContent = `${totalExpense}`;
    if (expenseTable.querySelectorAll('tr').length <= 1) {
        expenseTable.style.display = 'none';
    }
}