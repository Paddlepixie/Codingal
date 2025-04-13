const form = document.querySelector('form');

form.addEventListener('submit', function(event) {

event.preventDefault(); // prevent default form submission behavior

// validate username and password
function submit()
{

const username = document.getElementById('username').value;

const password = document.getElementById('password').value;

if (username === 'myusername' && password === 'mypassword') {

alert('Login successful!');

} else {

alert('Username or password incorrect. Please try again.');

}

});