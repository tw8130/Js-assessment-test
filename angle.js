// Write a JavaScript program to find the types of a given angle.

// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

let angle = Number(prompt("Enter angle in degrees(0-180):"));
if (angle > 0 && angle < 90) {
    alert("It is an Acute angle");
} else if (angle === 90) {
    alert(" It is a Right angle");
} else if (angle > 90 && angle < 180) {
    alert("It is an Obtuse angle");
} else if (angle === 180) {
    alert("It is a Straight angle");
} else {
    alert("Invalid angle. Please provide a value between 0 and 180 degrees.");
}