// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
 var lengthOfPassword = parseInt(prompt("what is the length of your password?"))
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
 var specialCharacters = confirm("do you want special characters in your password?")
 console.log(specialCharacters)
 var numbers = confirm("do you want numbers in your password?")
 console.log(numbers)
 var uppercase = confirm("do you want uppercase letters in your password")
 console.log(uppercase)
 var lowercase = confirm("do you want lowercase letters in your password")
console.log(lowercase)
}
// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
