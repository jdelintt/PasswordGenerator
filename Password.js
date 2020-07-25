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

var userPassword = prompt(
  "Enter the number of characters you want in your password"
);

if (userPassword < 8 || userPassword > 128) {
  alert("The number you typed in needs to be 8-128 characters. Try again!");
}

var userCharacterChoice = confirm("Do you want special characters?");
var userNumberChoice = confirm("Do you want numbers?");
var userLowerCaseChoice = confirm(
  "Do you want the password to have lower case letters?"
);
var userUpperCaseChoice = confirm(
  "Do you want the password to have upper case letters?"
);

var myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
