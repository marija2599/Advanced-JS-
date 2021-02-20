let findFactorialofNumber = number => number == 0 ? 1 : number * findFactorialofNumber(number - 1)

console.log("The factorial of the number is:");
console.log(findFactorialofNumber(123));
console.log("The factorial of the number is:");
console.log(findFactorialofNumber(5));




//================SECOND ATTEMPT===================

function sumTo(num) {
    if (num === 0) {
        return 1;
    }
    console.log(num)
    return num * sumTo(num - 1);


}
console.log("The factorial of the number is:");
console.log(sumTo(5));
console.log("The factorial of the number is:");
console.log(sumTo(12))

