'use strict';

const srch = document.getElementById('search-bar');
const googleBtn = document.getElementById('google');
const bingBtn = document.getElementById('bing');
const login = document.getElementById('login');
const enter = document.getElementById('enter');
const user = document.getElementById('userName');
const psw = document.getElementById('psw');
const search = document.getElementById('search-button')

let message = '';
let value = true;
let count = 0;
let validUser = 'judahP';
let validPsw = '12345';


// login form pop up
function openForm() {
    document.getElementById("loginForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("loginForm").style.display = "none";
  }

  enter.addEventListener('click', () => {

    const forms = document.getElementById('form');

    let $user = user.value.trim();
    let $psw = psw.value.trim();


     if ($user != validUser) {
        message += 'Must input valid username\n'
        value = false;
        count++;
        
    } else {
    
        if ($user === validUser){
          message += 'valid username'
          value = true;
        }
      }

  
    if ($psw != validPsw) {
        message += 'Must input valid password\n'
        value = false;
        count++
    } else {
      if ($psw === validPsw){
        message += 'valid password'
        value = true;
      }
    }

    if (count === 2){
      let popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
      popup.innerText = 'Must fill in all fields';
    } else if (!value){
      let popup = document.getElementById("myPopup");
      popup.innerText = 'Must input valid username and password';

    }else {
      let popup = document.getElementById("myPopup");
      popup.innerText = 'Thank you for loging in';
    }

  })

  // disable and inable buttons

enter.addEventListener('click', function() {
  document.getElementById('google').disabled = false;
  document.getElementById('bing').disabled = false;
})

// // google search 




// bing search

 
 