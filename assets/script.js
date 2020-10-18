// Declared the required variables
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "01234567890123456789";
var symbols = "!#$%&'()*+,-./:;<=>?@[]\^_`{|}~";

// Declared variables with input ids
var lowercaseIs = document.getElementById('lowercase');
var uppercaseIs = document.getElementById('uppercase');
var numberIs = document.getElementById('numbers');
var symbolIs = document.getElementById('symbols');
var passwordLength = document.getElementById('passwordLength');
var submit = document.getElementById('genPass');
var newPassword = document.getElementById('password');


// If checked, one or more of these conditionals take effect & added to characters
submit.addEventListener("click", function conditionals(){
  var characters = '';
  (lowercaseIs.checked) ? characters += lowercase : '';
  (uppercaseIs.checked) ? characters += uppercase : '';
  (numberIs.checked) ? characters += numbers : '';
  (symbolIs.checked) ? characters += symbols : '';
  newPassword.value = ramdonPassword(passwordLength.value, characters)
});

// Password gets randomly generated and is based on selected length
function ramdonPassword(length,characters){
  var password = '';
  for(var i =0; i < length; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password
}

// Added copy on click onto password DOM
function copyOnClick(){
  var copyText =document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Password copied: " + copyText.value);
}

// Declare the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var mBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
mBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on Generate Password button, close the modal
genPass.onclick = function() {
  modal.style.display = "none";
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