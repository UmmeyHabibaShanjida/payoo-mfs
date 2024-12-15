/**
 * 1. add event listener to the add money button (form submit)
 * make sure to preventDefault so that page doesn't reloads
 * 2.get the money user wants to add 
 * also, get the pin number provided
 * 3.verify the pin number .for,wrong pin number ==> failed to add for right pin number,allow to add the number to the account balance 
 * 4.get the current balance 
 * 5.add money to be added with the current balance 
 * 6.display/update the balance in the DOM/UI
 */

document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    const inputNumber = document.getElementById('input-pin-number').value;
    
    if(inputNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money. Please try again later');
    }
})