document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumbers = document.getElementById('input-cash-out-pin').value;
    
    if(pinNumbers === '1234'){
       const balance = document.getElementById('account-balance').innerText;
       const balanceNumber = parseFloat(balance);
        // reduce the balance
        const newBalance = balanceNumber - cashOutNumber;

        // update the UI
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed To Cash Out. Please Try Again Later');
    }
})