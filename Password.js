var userChoice = prompt(
  "Enter the number of characters you want in your password"
);
if (userChoice < 8 || userChoice > 128 || userChoice !== "") {
  alert("Reload the page and try again");
}
