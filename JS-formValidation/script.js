const form = document.querySelector('form');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const defaultColor = 'g'

// // Check if the background color is stored in localStorage
if (sessionStorage.getItem('formColor')){
  form.parentNode.style.backgroundColor = sessionStorage.getItem('formColor')
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (inputName.value.trim() === '') {
    nameError.textContent = 'Please enter your Name';
  } else {
    nameError.textContent = '';
  }

  if (inputEmail.value.trim === '') {
    emailError.textContent = 'Please enter your email';
  } else if (inputEmail.checkValidity()) {
    emailError.textContent = 'Please enter a valid email-adress';
  } else {
    emailError.textContent = '';
  }

  if (inputPassword.value.trim = '') {
    emailError.textContent = 'Please enter a password'
  }else if(inputPassword.value.length < 8)  {
    passwordError.textContent = 'Password must be at least - 8 characters'
  }else{
    emailError.textContent = ''
  }

  if (nameError.textContent === '' && emailError.textContent === '' && passwordError.textContent === '') {
    sessionStorage.setItem('formColor', 'blue')
    form.parentNode.style.backgroundColor = 'blue'
    form.submit()
  }

});

function resetFormColor() {
  sessionStorage.removeItem('formColor')
  form.parentNode.style.backgroundColor = defaultColor
}

document.addEventListener('DOMContentLoaded', () =>{
  resetFormColor()
})




