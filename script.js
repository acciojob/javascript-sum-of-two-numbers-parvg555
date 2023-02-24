let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

// Check that the input is numerical
if (input1 === "" || input2 === "" || isNaN(input1) || isNaN(input2)) {
  alert("Invalid input. Please enter a valid number.");
} else {
  // Add the two input numbers
  let sum = Number(input1) + Number(input2);

  // Display the sum to the user
  alert(`The sum of ${input1} and ${input2} is ${sum}.`);
}
