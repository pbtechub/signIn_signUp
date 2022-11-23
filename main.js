const loginBtn = document.getElementById('login-btn');
const loginReg = document.getElementById('login-reg');
const loginform = document.getElementById('login-form');
const resetform = document.getElementById('reset-form');
const signUpForm = document.getElementById('sign_up-form');
const loignPage = document.querySelector('.login');
const date = document.getElementById('date')


//  New div element for error 0

function showAlert01(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const firstNameErr = document.querySelector('.first-name-err');
    const signUpformErr = document.querySelector('#sign_up-form');
    signUpformErr.insertBefore(div, firstNameErr);

    
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  //  New div element for error 01

  function showAlert02(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const lastNameErr = document.querySelector('.last-name-err');
    const signUpformErr = document.querySelector('#sign_up-form');
    signUpformErr.insertBefore(div, lastNameErr);

  
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  //  New div element for error 1

function showAlert03(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const signUpEmailErr = document.querySelector('.email-err');
    const signUpformErr = document.querySelector('#sign_up-form');
    signUpformErr.insertBefore(div, signUpEmailErr);

    
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  //  New div element for error 2

  function showAlert04(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const mobileNubErr = document.querySelector('.mobile-err');
    const signUpformErr = document.querySelector('#sign_up-form');
    signUpformErr.insertBefore(div, mobileNubErr);

  
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }



//  New div element for error 1

function showAlert1(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const emailError = document.querySelector('.form-group-1');
    const loginformErr = document.querySelector('#login-form');
    loginformErr.insertBefore(div, emailError);

    
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  //  New div element for error 2

  function showAlert2(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const passWordError = document.querySelector('.forget-password');
    const loginformErr = document.querySelector('#login-form');
    loginformErr.insertBefore(div, passWordError);

  
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  //  New div element for error 3

function showAlert3(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const newPassError = document.querySelector('.form-group-2');
    const resetform = document.querySelector('#reset-form');
    resetform.insertBefore(div, newPassError);

    
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  //  New div element for error 4

  function showAlert4(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const reNewPassError = document.getElementById('reset-btn');
    const resetform = document.querySelector('#reset-form');
    resetform.insertBefore(div, reNewPassError);

  
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

// Login Page open

loginBtn.addEventListener('click', () => {
    start.classList.add('d-none');
    loignPage.classList.remove('d-none');
    signUp.classList.add('d-none');
    resetP.classList.add('d-none');
    confirmP.classList.add('d-none');
    registrationConf.classList.add('d-none');
    
    
    
});



loginReg.addEventListener('click', () => {
    loignPage.classList.remove('d-none');
    registrationConf.classList.add('d-none');
    start.classList.add('d-none');
    
    
});

// Starting Page

const start = document.querySelector('.start');
const signUpBtn = document.getElementById('sign-up-btn');

signUpBtn.addEventListener('click', () => {
    start.classList.add('d-none');
    signUp.classList.remove('d-none');
    
})

//  Registration form

const signUp = document.querySelector('.sign-up');
const registrationConf = document.querySelector('.reg-conf');

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const signUpEmail = document.getElementById('signup-email');
    const mobileNumber = document.getElementById('mobile-number');

        const firstNameValue = firstName.value.trim();
        const lastNameValue = lastName.value.trim();
        const signUpEmailValue = signUpEmail.value.trim();
        const mobileNumberValue = mobileNumber.value.trim();

   const firstNameArray = [].slice.call(firstNameValue);
   const lastNameArray = [].slice.call(lastNameValue);
   const signUpEmailArray = [].slice.call(signUpEmailValue);
   const mobileNumberArray = [].slice.call(mobileNumberValue);

   var letters = /^[A-Za-z]+$/;
  
// Password validation

    if (firstNameValue === ''){
        showAlert01('Please enter your first name', 'danger');
    }  else if (lastNameValue === ''){
        showAlert02('Please enter your last name', 'danger');
    } else if (signUpEmailValue === ''){
        showAlert03('Please enter your email id', 'danger');
    } else if (mobileNumberValue === ''){
        showAlert04('Please enter your mobile number', 'danger');
    } else {
        signUp.classList.add('d-none');
        registrationConf.classList.remove('d-none');
    // const firstName = document.getElementById('first-name').value = '';
    // const lastName = document.getElementById('last-name').value = '';
    // const signUpEmail = document.getElementById('signup-email').value = '';
    // const mobileNumber = document.getElementById('mobile-number').value = '';
    
    }
    

    
});


  //   Form submission for login

// const loignPage = document.querySelector('.login');
const loginConfPage = document.querySelector('.login-conf');

loginform.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');

        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

   const emailArray = [].slice.call(emailValue);
   const passwordArray = [].slice.call(passwordValue);

   var letters = /^[A-Za-z]+$/;
  
// Password validation

    if (emailValue === ''){
        showAlert1('Please enter your email', 'danger');
    }  else if (passwordValue === ''){
        showAlert2('Please enter your password', 'danger');
    } else {
        loignPage.classList.add('d-none');
        loginConfPage.classList.remove('d-none');
        const email = document.getElementById('email').value = '';
        const password = document.getElementById('password').value = '';
    
    }

    
});

// Forget Password


const forgetPassword = document.querySelector('.forget-password');

forgetPassword.addEventListener('click', () => {
    resetP.classList.remove('d-none');
    loignPage.classList.add('d-none')
})

//   Form submission for change password

const resetP = document.querySelector('.password-reset');
const confirmP = document.querySelector('.reset-conf');

resetform.addEventListener('submit', (e) => {
    e.preventDefault();
    const newPassword = document.getElementById('new-password');
    const reNewPassword = document.getElementById('re-new-password');

        const newPasswordValue = newPassword.value.trim();
        const reNewPasswordValue = reNewPassword.value.trim();

   const newPasswordArray = [].slice.call(newPasswordValue);
   const reNewPasswordArray = [].slice.call(reNewPasswordValue);

   var letters = /^[A-Za-z]+$/;
  
// Password validation

    if (newPasswordValue === ''){
        showAlert3('Please enter your new password', 'danger');
    } else if (!newPasswordValue.match(letters)){
        showAlert3('Password must be alphabatic characters only ', 'danger');
    } else if (newPasswordArray.length < 7) {
        showAlert3('Password must be atleast 8 characters ', 'danger');
    } else if (reNewPasswordValue === ''){
        showAlert4('Please confirm your new password', 'danger');
    } else if (!reNewPasswordValue.match(letters)){
        showAlert4('Password must be alphabatic characters only ', 'danger');
    } else if (reNewPasswordArray.length < 7) {
        showAlert4('Password must be atleast 8 characters ', 'danger');
    } else if (reNewPasswordValue !== newPasswordValue) {
        showAlert4("Passwords doesn't match", 'danger');
    } else {
        resetP.classList.add('d-none');
        confirmP.classList.remove('d-none');
    
    }
    

});


const today =  new Date();

date.innerText = today.getFullYear();








