var upperCaseCharacterArray = {
  password: true,
  array: ["P", "B", "V", "E", "M"],
};
var lowerCaseCharacterArray = {
  password: true,
  array: ["u", "n", "q", "r", "b"],
};
var specialCharacterArray = {
  password: true,
  array: ["#", "!", "*", "("],
};
var numberArray = {
  password: true,
  array: [7, 9, 2, 4, 5],
};
var prepArray = [];

var userPasswordLength;
do {
  if (userPasswordLength !== undefined) {
    alert("The number you typed in needs to be 8-128 characters. Try again!");
  }
  userPasswordLength = prompt(
    "Enter the number of characters you want in your password"
  );
  userPasswordLength = parseInt(userPasswordLength);
} while (
  userPasswordLength < 8 ||
  userPasswordLength > 128 ||
  isNaN(userPasswordLength) === true
);

specialCharacterArray.password = confirm("Do you want special characters?");
numberArray.password = confirm("Do you want numbers?");
lowerCaseCharacterArray.password = confirm(
  "Do you want the password to have lower case letters?"
);
upperCaseCharacterArray.password = confirm(
  "Do you want the password to have upper case letters?"
);

function moveToArray(obj) {
  if (obj.password === true) {
    prepArray.push(...obj.array);
  }
}
moveToArray(upperCaseCharacterArray);
moveToArray(lowerCaseCharacterArray);
moveToArray(specialCharacterArray);
moveToArray(numberArray);

var generatedPassword = "";

for (var i = 0; i < userPasswordLength; i++) {
  var index = Math.floor(Math.random() * prepArray.length);
  generatedPassword = generatedPassword + prepArray[index];
}

var tellUserPassword = alert("This is your password:" + generatedPassword);
