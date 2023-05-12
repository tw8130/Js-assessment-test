//Write a JavaScript program to create an array by taking the first and last elements from a given array of integers.The length must be larger than or equal to 1.




function createArray(arr) {
    if (arr.length >= 1) {
        var newArray = [arr[0], arr[arr.length - 1]];
        return newArray;
    } else {
        console.log("Array length must be larger than or equal to 1.");
    }
}


const cars = ["BMW", "Audi", "RangeRover", "Ford", "Tesla"];
var result = createArray(cars);
console.log(result);

const YOM = [];
const new_array2 = createArray(YOM);
console.log(new_array2);