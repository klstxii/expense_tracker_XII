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
            <td style="background-color: transparent;">${expenseName}</td>
            <td style="background-color: transparent;">PHP ${expenseAmount}</td>
            <td style="background-color: transparent;">${expenseDate}</td>
            <td style="background-color: transparent;"><button onclick="removeExpense()" tabindex="0">Remove</button></td>
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

function createMovingShape() {
    const shapes = document.querySelectorAll(".moving-shape");  
    if(shapes.length >9) {
        return;
      }
    var shape = document.createElement('div');
    shape.classList.add('moving-shape');
    var width = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
    shape.style.width = width + 'px';
    var right = Math.floor(Math.random() * (window.innerWidth * 0.9 - (-50) + 1)) + (-50);
    shape.style.right = right + 'px';
    var duration = Math.floor(Math.random() * (8 - 2 + 1)) + 2;
    shape.style.animationDuration = duration + 's';
    var randomColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
    shape.style.backgroundColor = randomColor;
    document.body.appendChild(shape);
    shape.addEventListener('animationend', function() {
        let shapes = document.querySelectorAll(".moving-shape"); 
        console.log(shapes.length);
        shape.remove();
        shapes = document.querySelectorAll(".moving-shape"); 
        console.log(" -1 = " + shapes.length);
    });
}

createMovingShape();
setInterval(createMovingShape, 4000);