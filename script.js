// PASWORD GENERATOR js SCRIPT BY ANTONY MN 

   //Get Dom elements
var results =  document.querySelector("#result");
var copy =  document.querySelector("h6");
var tooltip = document.querySelector(".copy span");
var paswordLength =  document.querySelector("#length");
var upperCase =  document.querySelector("#uppercase");
var lowerCase =  document.querySelector("#lowercase");
var numbers =  document.querySelector("#numbers");
var symbols =  document.querySelector("#symbols");
var generater =  document.querySelector("#generate");

 
 // Create random generator functions
function randomUppercase() {
   var uppercase;
    uppercase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    return uppercase;
}

function randomLowercase() {
   var lowercase;
    lowercase = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    return lowercase;
}

function randomNumber() {
    var number;
    number = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    return number;
}

function randomSymbols() {
    const symbols = "@.%,!(){}[]/*+=&<>";
    var symbol;
    symbol= symbols[Math.floor(Math.random() * symbols.length)];
    return symbol;
}

 // Group generator functions into a randomfunc object
const randomFunc = {
   upper: randomUppercase,
   lower: randomLowercase,
   numbers: randomNumber,
   symbols: randomSymbols
 };

  // button click event & function
generater.addEventListener("click", passwordGenerator);


 // pasword generater function
function passwordGenerator() {
    
   var finalPassword = '';  //declare final pasword variable;
    // log generator functions for tracking
   console.log(randomLowercase());    
   console.log(randomUppercase());    
   console.log(randomSymbols());    
   console.log(randomNumber ());  
 //check for event preriquisites  
  var pwdLength = +paswordLength.value; // plus sign to change from string to number
  var hasUpper = upperCase.checked;
   var hasLower = lowerCase.checked;
   var hasNumber  = numbers.checked;
   var hasSymbol = symbols.checked;
   var typesCount= 0 ;
        var checkedBoxes = [hasUpper, hasLower, hasNumber, hasSymbol]; // create an array of checked boxes
        checkedBoxes.filter(item => Object.values(item)[0]);
        for (let i= 0; i<checkedBoxes.length; i++) {
        if(checkedBoxes[i]== true){
        typesCount += 1;      
        }
        }
  if (typesCount==0){
      return "";
  }
   
   // finally, generate the password
 for (let i = 0; i < pwdLength; i += typesCount) {
    finalPassword += randomUppercase();
       finalPassword += randomLowercase();
       finalPassword += randomSymbols();
       finalPassword += randomNumber(); 
  }
results.value = finalPassword.slice(0,pwdLength);
return finalPassword;
 
 }
copy.addEventListener('click', funcCopy);
function funcCopy() {
    results.select();
    document.execCommand("copy");
    if (tooltip.style.visibility= "hidden") {
        tooltip.style.visibility ="visible";
        $("h6").mouseout(function(){
  $(".copy span").fadeOut(1500);
   });
    } 
   
}
















