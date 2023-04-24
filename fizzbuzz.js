// This code initializes a variable called num with the value of 100.
const num=100;
// It then loops through each number from 1 to num using a for loop and checks if it's divisible by 3 and/or 5 using the modulus operator.
for (let i=1;i<=num;i++){
// If a number is divisible by both 3 and 5, it logs "FizzBuzz" to the console.   
if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
}
// If a number is only divisible by 3, it logs "Fizz" to the console.
else if (i%3===0) {
    console.log("Fizz")
// If a number is only divisible by 5, it logs "Buzz" to the console.   
}else if(i%5===0){
    console.log("Buzz")
// If a number is not divisible by either 3 or 5, it logs the number itself to the console.
} else{ 
    console.log(i)
}

}