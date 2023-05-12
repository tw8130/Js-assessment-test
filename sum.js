//What will be logged to the console from the below expression.explain why.


let sum = 5 + 5 + "5";

console.log(sum);

//105 will be logged
//The reason for this is that in JavaScript, addition is performed before concatenation.So, the first 5 is added to the second 5,
//and then the string "5"is concatenated to the result to log 105 to the console.