// Declared the required variables
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "01234567890123456789";
var symbols = "!#$%&'()*+,-./:;<=>?@[]\^_`{|}~";

var lowercaseIs = document.getElementById('lowercase');
var uppercaseIs = document.getElementById('uppercase');
var numberIs = document.getElementById('numbers');
var symbolIs = document.getElementById('symbols');
var passwordLength = document.getElementById('passwordLength');

// Assignment Code for button
var generateBtn = document.querySelector("#generate");

// Declare the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var slider = document.getElementById("passwordLength");
var output = document.getElementById("lengthValue");
output.innerHTML = slider.value; // Display the default slider value

// Update the slider value as it's moved
slider.oninput = function() {
  output.innerHTML = this.value;
} 

// Add event listener to generate button, then writePassword
generateBtn.addEventListener("click", writePassword);

// Text alert
// function writePassword() {
//     var txt;
//     var person = prompt("Please enter your name:", "");
//     if (person == null || person == "") {
//       txt = "User cancelled the prompt.";
//     } else {
//       txt = "Hello " + person + "! How are you today?";
//     }
//     document.getElementById("password").innerHTML = txt;
// }