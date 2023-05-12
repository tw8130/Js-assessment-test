//Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

let num1 = parseInt(prompt("Enter first number"));

let num2 = parseInt(prompt("Enter second number"));

let sum = num1 + num2;
let diff = num1 - num2;

if (diff === 8) {
    alert("The difference: " +
        diff + " is equal 8 ");
} else if (sum === 8) {
    alert("The sum: " +
        sum + " is equal 8 ");
} else if (num1 === 8) {
    alert("The first number: " +
        num1 + " is equal 8 ");
} else if (num2 === 8) {
    alert("The second number: " +
        num2 + " is equal 8 ");
} else {
    alert("The sum is: " + sum);
    alert("The diff is: " + diff);
}