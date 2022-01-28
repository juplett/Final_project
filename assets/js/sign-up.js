'use strict';

const $firstName = document.getElementById('first-name');
const $lastName = document.getElementById('last-name');
const $age = document.getElementById('age');
const $email = document.getElementById('email');
const $send = document.getElementById('send');

// regex -regular expression
const emailPattern = /^(?=^.{8,}$)[-A-Za-z0-9]+([.-][a-zA-Z0-9]+)@[A-Za-z0-9]+([.-][a-zA-Z0-9]+).[A-Za-z]{2,}$/;

$send.addEventListener('click', function() {

    let firstName = $firstName.value.trim();
    let lastName = $lastName.value.trim();
    let age = $age.value.trim();
    let email = $email.value.trim();

    let message = '';
    let valid = true;
    let count = 0;

    if (firstName === '') {
        message += 'First name is requierd\n';
        valid = false;
        count++;
    }

    if (lastName === '') {
        message += 'Last name is requierd\n';
        valid = false;
        count++;
    }

    if (age === '') {
        message += 'age is requierd\n';
        count++;
    } else {
        let ageInt =parseInt(age);

        if(isNaN(age) (ageInt <= 16,  ageInt > 90)){
            message += 'Invalid input, Age must be in specified age range\n';
            valid = false;
            count++;

        }
    }

    if (email === '') {
        message += 'Email is requierd\n';
        count++;
    } else {
        if(!emailPattern.test(email)){
            message += 'Email is not valid\n';
            valid = false;
        }
    }

    if(count === 4) {
        let popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
      popup.innerText = 'Must fill in all fields';
    } else if (!valid) {
        let popup = document.getElementById("myPopup");
        popup.innerText = message;
    }else {
        
        let popup = document.getElementById("myPopup");
        popup.innerText = 'Thank you for signing up';
 
    
    }

 })