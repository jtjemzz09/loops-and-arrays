// This function takes a string of lowercase letters and counts the number of vowels and consonants in it.
function countVowelsAndConsonants(str) {
  let vowels = 'a,e,i,o,u'; // Define a string containing all vowels
  let vowelsCount = 0; // Initialize a variable to keep track of the number of vowels
  let consonantsCount = 0; // Initialize a variable to keep track of the number of consonants

  // Loop through each letter in the input string
  for (let letter of str) {
    // If the current letter is a vowel, increment the vowel count
    if (vowels.includes(letter)) {
      vowelsCount++;
    } else { // Otherwise, it must be a consonant, so increment the consonant count
      consonantsCount++;
    }
  }

  // Print the results to the console
  console.log(`The word "${str}" has ${vowelsCount} vowels and ${consonantsCount} consonants.`);
}

// Call the function with the input string "hello"
countVowelsAndConsonants("hello");
