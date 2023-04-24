// This code creates an array of numbers called num and an empty array called oddNumbers.
const num=[2,4,6,8,11,20,15,22];
const oddNumbers = [];
// The for loop processes over each element in the num array and checks if it is odd.
for (let j=0; j<num.length; j++){
if( num[j] % 2 === 1){
// If an element is odd, it gets added to the oddNumbers array using the push() method.
oddNumbers.push(num[j]);
}


}
// Finally, the code logs the oddNumbers array to the console.
console.log(oddNumbers);
