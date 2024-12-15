// step-1:set event handler
// document.getElementById('button-login').addEventListener('click',function(event){
//     // step-2:prevent default behavior (prevent reloading browser)
//     event.preventDefault();
//     // step-3:get the phone number and the pin number
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber,pinNumber);

//     // step-4:validate phone and pin
//     // this isn't the ideal way. You shouldn't do like this
//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('you are logged in');

//         // step-5:allow user to use the website
//     }
//     else{
//         alert('Wrong phone Number or pin');
//     }
// })



document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are login');
        window.location.href = 'home.html';
    }
    else{
        alert('Wrong phone number or pin')
    }
})