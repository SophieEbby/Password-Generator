// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//global variables
var charOptions = [];
const generatedPassword = '';
  // ------------------------------------- Pseudo Code -----------------------------------
// You can store the generatedPassword as a string and concat each character OR
// as an array and push each character, then join once you have enough characters

// Function to prompt user for password options
function getPasswordOptions() {
  // ------------------------------------- Pseudo Code -----------------------------------
  // !Prompt for password length
  // !At least 8 characters, no more than 128 characters
  // !Conditional to check that the number that was entered is in range
  // !Prompts store data as strings, so need to parse into a number
  // !If the user's input is out of range, either return out of the function or call the function again

  // !Confirm which character sets to use
  // !If the user answers false for all, either return out of the function or call the function again

  // !Once they select a character set:
  // !Generate a random character for each selected character set
  // !Either push selected character sets to a mega-array of all selected characters ----EASIER TO DO!
  // !OR you can keep the arrays separate and generate a random number to select the array and another to select the index

  // !Once character sets are selected, move on to generating random characters

  // --------------------------------------- Code --------------------------------------------------------------
  charOptions = []; //resets the password to blank

  const passwordLengthString = prompt("How many characters would you like in your password?"); //Prompt for password length
  const passwordLength = parseInt(passwordLengthString, 10); // Convert string to integer
  console.log(`${passwordLength}`); //console log the password length

  //Validate the password length is At least 8 characters, no more than 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    confirm("Password length must be 8 Characters but less than 128 characters. Try again!") // if password length fails then print a message  
    generatePassword(); //recall the function generate password to start again.
  }
  const specialBool = confirm("Would you like Special Characters in your password?"); //confirm if the user wants Special Chars in password
  console.log(`${specialBool}`); //Console true or false
  const numericBool = confirm("Would you like Numeric Characters in your password?"); //confirm if the user wants Numeric Chars in password
  console.log(`${numericBool}`); //Console true or false
  const lowerBool = confirm("Would you like Lowercase Characters in your password?"); //confirm if the user wants lowercase Chars in password
  console.log(`${lowerBool}`); //Console true or false
  const upperBool = confirm("Would you like Uppercase Characters in your password?"); //confirm if the user wants uppercase Chars in password
  console.log(`${upperBool}`); //Console true or false

  if (!specialBool && !numericBool && !lowerBool && !upperBool) { // if all char options are false 
    confirm("At least one Character Type must be selected. Try again!") // print message
    generatePassword(); //recall the function generate password to start again.
  }

  let selectedCharSets = []; //if any of the char options are true then push the whole array into selectedCharSets (one massive array)
  if (specialBool) selectedCharSets.push(specialCharacters); 
  if (numericBool) selectedCharSets.push(numericCharacters);
  if (lowerBool) selectedCharSets.push(lowerCasedCharacters);
  if (upperBool) selectedCharSets.push(upperCasedCharacters);

  for (let i = 0; i < passwordLength; i++) { //the for loop uses the password length to generate a random set of chars from the selectedCharSets (one massive array)
    const randomCharSet = getRandom(selectedCharSets); // call the getRandom function
    charOptions.push(getRandom(randomCharSet));
  }

  console.log(`${charOptions}`); // console log the random characters
  return charOptions.join(''); // Join the array into a string and return
}

// Function to get a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  const password = getPasswordOptions();
  console.log("Generated Password:", password);
  return password;
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


