let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
let submitButton = document.querySelector('#submit-button');

   
function clickListener(event) {
  event.preventDefault();

  let emailValue = emailElement.value;
  let messageValue = messageElement.value;

  if(emailValue.includes('@')) {
    // all good
    alert('alrighty thank you so much');
  } else {
    alert('tch tch nope try again')
  }
}

submitButton.addEventListener('click', clickListener);

// attaching 'click listener'
// geting user entered values
// javascript validations


