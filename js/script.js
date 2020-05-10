// Inspiration for logic found here - https://github.com/evcarone/password-generator/blob/master/script.js


var pwdLength
var numeric
var lowerCase
var upperCase
var specialChar 
var numericOptions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
var upperOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialcharOptions = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']; 
var newPwd = []; //generated password array
var generateelement = document.querySelector("#generate"); //Pull generate button element from html
var displaypwdelement = document.querySelector("#displaypwd"); //Pull display password field from html

generateelement.addEventListener("click", function() {
  pwdCriteria(); //function to get user's password criteria
  selectPwdchars(); //function to combine the available options for all selected password criteria
  generateNewpwd(); //function to generate new password
  pwdChars = []; //array for criteria options
});


//Ask user to choose password criteria
function pwdCriteria () {
  pwdLength = prompt("Enter password length between 8 and 128 characters");
  numeric = confirm("Do you want to include numbers?");
  lowerCase = confirm("Do you want to include lower case letters?");
  upperCase = confirm("Do you want to include upper case letters?");
  specialChar = confirm("Do you want to include special characters?");


  //test code
  console.log(pwdLength);
  console.log(numeric);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(specialChar);
};


//Take user's criteria and combine all possible options
var pwdChars = [];

function selectPwdchars() {
    if (upperCase == true) pwdChars = pwdChars.concat(upperOptions);
    if (lowerCase == true) pwdChars = pwdChars.concat(lowerOptions);
    if (numeric == true) pwdChars = pwdChars.concat(numericOptions);
    if (specialChar == true) pwdChars = pwdChars.concat(specialcharOptions);
    
    //test code
        console.log(pwdChars);
        
};

//Check password length entered, is it at least 8 charaters; Take pwdChars, pick random characters based on selected password length
function generateNewpwd() {
    if (pwdLength < 8 || pwdLength > 128) {
      alert("Password does not meet required specifications, please try again")
    } else {
        for (i = 0; i < pwdLength; i++) {
          newPwd += pwdChars[Math.floor(Math.random() * (pwdChars.length - 1))];
        }
        displaypwdelement.textContent = newPwd;
    };
    newPwd = [];

    //test code
      console.log(displaypwdelement.textContent);
} 

//Copy new password to clipboard
function copyFunction() {
  var copyText = document.getElementById("displaypwd");
  copyText.select();
  document.execCommand("copy");
  alert("Password copied");
}
