//Write a JavaScript program to convert a given number into hours and minutes.
function convertHoursToMinutes(num) {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;

    return (`hours is  ${hours} :minutes is ${minutes}`);
}

console.log(convertHoursToMinutes(71));
console.log(convertHoursToMinutes(120));
console.log(convertHoursToMinutes(40));
console.log(convertHoursToMinutes(200));