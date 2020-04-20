document.getElementById("usernameSelectAlert").style.display = "none";
document.getElementById("firstNameSelectAlert").style.display = "none";
document.getElementById("lastNameSelectAlert").style.display = "none";
document.getElementById("emailSelectAlert").style.display = "none";
document.getElementById("passwordSelectAlert").style.display = "none";
document.getElementById("confirmPasswordSelectAlert").style.display = "none";
document.getElementById("colorSelectAlert").style.display = "none";
document.getElementById("avatarnameSelectAlert").style.display = "none";
document.getElementById("shapeSelectAlert").style.display = "none";

document.getElementById("usernameInvalidAlert").style.display = "none";
document.getElementById("firstNameInvalidAlert").style.display = "none";
document.getElementById("lastNameInvalidAlert").style.display = "none";
document.getElementById("emailInvalidAlert").style.display = "none";
document.getElementById("passwordInvalidAlert").style.display = "none";
document.getElementById("confirmPasswordInvalidAlert").style.display = "none";
document.getElementById("avatarnameInvalidAlert").style.display = "none";

// taken alerts not coded yet
document.getElementById("usernameTakenAlert").style.display = "none";
document.getElementById("emailTakenAlert").style.display = "none";
document.getElementById("avatarnameTakenAlert").style.display = "none";

document.getElementById("fieldFillAlert").style.visibility = "hidden";

/*need to code in input requirements checking for:
  1) First Name(after username) - No spaces, first letter capital, alphabets only
  2) Last Name(after first name) - No spaces, first letter capital, alphabets only
  3) Email(after last name) - Get whether email is valid or not from HTML type="email" part
*/

var e = document.getElementById("colorSelector");
var username = "";
var firstName = "";
var lastName = "";
var email = "";
var password = "";
var confirmPassword = "";
var avatarColor = "";
var avatarname = "";
var avatarShape = "";
var shapes = ["circle", "triangle", "square", "pentagon", "hexagon"];




function setUsername() {
  username = document.getElementById("usernameInput").value;
  console.log("Username: "+ username);
}
function setFirstName() {
  firstName = document.getElementById("firstNameInput").value;
  console.log("First Name: "+ firstName);
}
function setLastName() {
  lastName = document.getElementById("lastNameInput").value;
  console.log("Last Name: "+ lastName);
}
function setEmail() {
  email = document.getElementById("emailInput").value;
  console.log("Email: "+ email);
}
function setPassword() {
  password = document.getElementById("passwordInput").value;
  console.log("Password: "+ password);
}
function setConfirmPassword() {
  confirmPassword = document.getElementById("confirmPasswordInput").value;
  console.log("Confirm Password: "+ confirmPassword);
}
function setAvatarname() {
  avatarname = document.getElementById("avatarnameInput").value;
  console.log("Avatar Name: "+ avatarname);
}
function setColor() {
  avatarColor = e.options[e.selectedIndex].text;
  console.log("Avatar Color: "+ avatarColor);
}
function setShape() {
  console.log("Final Avatar Shape: "+ avatarShape);
}
function setValues() {
  setUsername();
  setFirstName();
  setLastName();
  setEmail();
  setPassword();
  setConfirmPassword();
  setColor();
  setAvatarname();
  setShape();
}





//adds border to the selected shape
//deletes all borders first, then borders the correct image
function changeShape(shape){

    var buttonType;

    for (var j = 0; j < shapes.length; j++){
      buttonType = shapes[j] + "Button";
      console.log("Button Type: "+buttonType);
      document.getElementById(buttonType).style.border = "0px";
    }
    
    for (var i = 0; i < shapes.length; i++){
      if (shape == shapes[i]){
        buttonType = shapes[i] + "Button";
        avatarShape = shapes[i];
        document.getElementById(buttonType).style.border = "3px solid black";
      }

    }
    console.log("Avatar Shape: "+avatarShape);
}

var usernameLength = "";
var passwordLength = "";
var avatarnameLength = "";

var usernamePars = [];
var passwordPars = [];
var avatarnamePars = [];

var passwordNum = false;
var passwordUppercase = false;
var passwordSpecial = false;

var confirmCorrect = false;

var usernameSpace = false;
var passwordSpace = false;
var avatarnameSpace = false;

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", ":", ";", "<", ">", "?"
                          , "/", "|"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
                        "T", "U", "V", "W", "X", "Y", "Z"];

//string comparison str1.localeCompare(str2);
function usernameRequirements() {
  usernameLength = username.length;
  usernamePars = username.split("");
  if(usernamePars.includes(" ")) {
    usernameSpace = true;
  } else {
    usernameSpace = false;
  }
  if((usernameLength<4)||(usernameLength>10)||(usernameSpace==true)) {
    document.getElementById("usernameInvalidAlert").style.display = "inline";
    return false;
  } else {
    document.getElementById("usernameInvalidAlert").style.display = "none";
    return true;
  }
}

function firstNameRequirements(){

}

function lastNameRequirements(){
  
}

function emailRequirements(){

}

function pasSetup() {
  passwordUppercase = false;
  passwordNum = false;
  passwordSpecial = false;
}


function passwordRequirements() {
  pasSetup();
  passwordLength = password.length;
  passwordPars = password.split("");
  //checks for spaces
  if(passwordPars.includes(" ")) {
    passwordSpace = true;
  } else {
    passwordSpace = false;
  }
  //checks for special characters
  for (var j = 0; j < specialCharacters.length; j++){
    if(passwordPars.includes(specialCharacters[j])) {
        console.log("helo");
        passwordSpecial = true;
    }
  }
  //checks for numbers
  for (var k = 0; k < numbers.length; k++){
      if (passwordPars.includes(numbers[k])){
           passwordNum = true;
      } 
  }
  //checks for Uppercase letters
  for (var u = 0; u < uppercaseLetters.length; u++){
    if (passwordPars.includes(uppercaseLetters[u])){
      passwordUppercase = true;
    }
  }
  if((passwordLength<6) || (passwordLength>15) || (passwordSpace==true) || (passwordNum==false) || (passwordSpecial==false) || (passwordUppercase==false)) {
    document.getElementById("passwordInvalidAlert").style.display = "inline";
    return false;
  } else {
    document.getElementById("passwordInvalidAlert").style.display = "none";
    return true;
  }
}

function confirmPasswordRequirements() {
  if((confirmPassword.localeCompare(password))!=0) {
    confirmCorrect = false;
  } else if((confirmPassword.localeCompare(password))==0) {
    confirmCorrect = true;
  }
  if((confirmCorrect==false)) {
    document.getElementById("confirmPasswordInvalidAlert").style.display = "inline";
    return false;
  } else if((confirmCorrect==true)){
    document.getElementById("confirmPasswordInvalidAlert").style.display = "none";
    return true;
  } else {
    document.getElementById("confirmPasswordInvalidAlert").style.display = "inline";
    return false;
  }
}

function avatarnameRequirements() {
  avatarnameLength = avatarname.length;
  avatarnamePars = avatarname.split("");
  if(avatarnamePars.includes(" ")) {
    avatarnameSpace = true;
  } else {
    avatarnameSpace = false;
  }
  if((avatarnameLength<4)||(avatarnameLength>10)||(avatarnameSpace==true)) {
    document.getElementById("avatarnameInvalidAlert").style.display = "inline";
    return false;
  } else {
    document.getElementById("avatarnameInvalidAlert").style.display = "none";
    return true;
  }
}



function usernameRequired() {
  if(username=="") {
    document.getElementById("usernameSelectAlert").style.display = "inline";
    return false;
  } else {
    document.getElementById("usernameSelectAlert").style.display = "none";
    return true;
  }
}
function firstNameRequired() {
  if(firstName=="") {
    document.getElementById("firstNameSelectAlert").style.display = "inline";
    return false;
  } else {
    document.getElementById("firstNameSelectAlert").style.display = "none";
    return true;
  }
}
function lastNameRequired() {
  if(lastName=="") {
    document.getElementById("lastNameSelectAlert").style.display = "inline";
    return false;
  } else {
    document.getElementById("lastNameSelectAlert").style.display = "none";
    return true;
  }
}
function emailRequired() {
  if(email=="") {
    document.getElementById("emailSelectAlert").style.display = "inline";
    return false;
  } else {
    document.getElementById("emailSelectAlert").style.display = "none";
    return true;
  }
}
function passwordRequired() {
  if(password=="") {
    document.getElementById("passwordSelectAlert").style.display = "inline";
    return false;
  } else {
    document.getElementById("passwordSelectAlert").style.display = "none";
    return true;
  }
}
function confirmPasswordRequired() {
  if(confirmPassword=="") {
    document.getElementById("confirmPasswordSelectAlert").style.display = "inline";
    return false;
  } else {
    document.getElementById("confirmPasswordSelectAlert").style.display = "none";
    return true;
  }
}
function avatarColorRequired() {
  if(avatarColor=="") {
    document.getElementById("colorSelectAlert").style.display = "inline";
    return false;
  } else {
    document.getElementById("colorSelectAlert").style.display = "none";
    return true;
  }
}
function avatarnameRequired() {
  if(avatarname=="") {
    document.getElementById("avatarnameSelectAlert").style.display = "inline";
    return false;
  } else {
    document.getElementById("avatarnameSelectAlert").style.display = "none";
    return true;
  }
}
function shapeRequired() {
    if(avatarShape=="") {
      document.getElementById("shapeSelectAlert").style.display = "inline";
      return false;
    } else {
      document.getElementById("shapeSelectAlert").style.display = "none";
      return true;
    }
}


function usReqMet() {
  if(usernameRequired()==true) {
    return usernameRequirements();
  }
}
function fnmReqMet() {
  if(firstNameRequired()==true) {
    return firstNameRequirements();
  }
}
function lnmReqMet() {
  if(lastNameRequired()==true) {
    return lastNameRequirements();
  }
}
function emReqMet() {
  if(emailRequired()==true) {
    return emailRequirements();
  }
}
function pwdReqMet() {
  if(passwordRequired()==true) {
    return passwordRequirements();
  }
}
function confPwdReqMet() {
  if(confirmPasswordRequired()==true) {
    return confirmPasswordRequirements();
  }
}
function avReqMet() {
  if(avatarnameRequired()==true) {
    return avatarnameRequirements();
  }
}




function checkSubmit() {
  // temporarily removed  || (usReqMet()==false) || (fnmReqMet()==false) || (lnmReqMet()==false) || (emReqMet()==false) || from  line 381
  if((usernameRequired()==false) || (firstNameRequired()==false) || (lastNameRequired()==false) || (emailRequired()==false) || (passwordRequired()==false) || 
  (confirmPasswordRequired()==false) || (avatarColorRequired()==false) || (avatarnameRequired()==false) || (shapeRequired()==false) (pwdReqMet()==false) || confPwdReqMet()==false || 
  (avReqMet()==false)) {
    document.getElementById("fieldFillAlert").style.visibility = "visible";
    return false;
  // temporarily removed && (fnmReqMet()==true) && (lnmReqMet()==true) && (emReqMet()==true) from line 388
  } else if((usernameRequired()==true) && (firstNameRequired()==true) && (lastNameRequired()==true) && (emailRequired()==true) && (passwordRequired()==true) && 
  (confirmPasswordRequired()==true) && (avatarColorRequired()==true) && (avatarnameRequired()==true) && (shapeRequired()==true) && 
  (usReqMet()==true) && (pwdReqMet()==true) && confPwdReqMet()==true && 
  (avReqMet()==true)) {
    document.getElementById("fieldFillAlert").style.visibility = "hidden";
    return true;
  } else {
    document.getElementById("fieldFillAlert").style.visibility = "visible";
    return false;
  }
}

function whenSubmit() {
  //setValues();
  usernameRequired();
  firstNameRequired();
  lastNameRequired();
  emailRequired();
  passwordRequired();
  confirmPasswordRequired();
  avatarColorRequired();
  avatarnameRequired();
  shapeRequired();
  usReqMet();
  fnmReqMet();
  lnmReqMet();
  emReqMet();
  pwdReqMet();
  confPwdReqMet();
  avReqMet();
  checkSubmit();
  if(checkSubmit()==false) {
    return false;
  } else if(checkSubmit()==true) {
    return true;
  } else {
    return false;
  }
}
