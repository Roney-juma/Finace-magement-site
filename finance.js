/* pull income and savings */

/*button for pulling the income and savings form data */

window.onload = function (){
    var pullData = document.getElementById('income-submit');
    pullData.onclick = formData()
};

function formData(){

    var myArray = [];

    myArray.push(document.getElementById("income").value);
    myArray.push(document.getElementById("savings").value);

    var incomeInput = myArray[0];

    
        


};


var findExpences = document.getElementById("submit-expense");
    findExpences.onclick = expenseDetails;


function expenseDetails(){

    var expenseArray = [];

    expenseArray.push(document.getElementById('expense').value);
    expenseArray.push(document.getElementById('date').value);
    expenseArray.push(document.getElementById('amount').value);

    var expenseName = expenseArray[0];
    var expenseDate = expenseArray[1];
    var expenseAmount = expenseArray[2];


    document.getElementById("display-expenses").innerHTML = expenseName + "-" + expenseAmount + "-" + expenseDate ;

};