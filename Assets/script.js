// Assignment Code

var generateBtn = document.querySelector("#generate");

var output = document.querySelector('#password');

var specialCharacters = ['!', '@', '#', '$', '%', '&', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '^', '_', '`', '{', '|', '}', '~'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function generatePassword(optionsObj) {
  var passwordchoices = [];
  var password = '';

  if (optionsObj.specialCharacters) {
    passwordchoices = passwordchoices.concat(specialCharacters);
  }

  if (optionsObj.numbers) {
    passwordchoices = passwordchoices.concat(numbers);
  }

  if (optionsObj.uppercase) {
    passwordchoices = passwordchoices.concat(uppercase);
  }

  if (optionsObj.lowercase) {
    passwordchoices = passwordchoices.concat(lowercase);
  }

  for (var i = 0; i < optionsObj.length; i++) {
    var randomSelection = passwordchoices[ Math.floor(Math.random () * passwordchoices.length) ];

    password += randomSelection;
  }

  console.log(password);
  output.innerText = password;
}


function getOptions() {
  var lengthOfPassword = parseInt(prompt("what is the length of your password? Must be a numerical value of 8 characters or more."))
    console.log(lengthOfPassword)
 //isNaN()
  if(isNaN(lengthOfPassword) ){
      alert("Please enter numerical value")
      return "please try again"
  }
  if(lengthOfPassword < 8){
    alert("Invalid, must be greater then 8")
    return "please try again"
  }
  if(lengthOfPassword > 128){
    alert("Invalid, must be less than 128")
    return "please try again"
  }

 var optionspecialCharacters = confirm("do you want special characters in your password?");
  console.log(optionspecialCharacters);

 var optionnumbers = confirm("do you want numbers in your password?");
  console.log(optionnumbers);

 var optionuppercase = confirm("do you want uppercase letters in your password");
  console.log(optionuppercase);

 var optionlowercase = confirm("do you want lowercase letters in your password");
  console.log(optionlowercase);


  var passwordOptions = {
    specialCharacters: optionspecialCharacters,
    numbers: optionnumbers,
    uppercase: optionuppercase,
    lowercase: optionlowercase,
    length: lengthOfPassword
  };

  generatePassword(passwordOptions);
}

// Add event listener to generate button
generateBtn.addEventListener("click", getOptions);
