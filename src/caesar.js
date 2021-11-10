// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  //make helper function that converts input to lowercase
  function getIndex(alphabet, char) {
    return alphabet.indexOf(char.toLowerCase())
  }
  // make helper function that shifts right for positive values
  function rightShift(char , shift) {
    if (!alphabet.includes(char.toLowerCase())) return char; //lets spaces stay spaces
    const currentIndex = getIndex(alphabet, char)
    let shiftIndex = currentIndex + Math.abs(shift);
    return alphabet[shiftIndex % 26];
  }

  // make helper function that shifts left for negative values
  function leftShift(char, shift){
    const reverseAlphabet = "zyxwvutsrqponmlkjihgfedcba"
    if (!reverseAlphabet.includes(char.toLowerCase())) return char; //lets spaces stay spaces
    const currentIndex = getIndex(reverseAlphabet, char)
    let shiftIndex = currentIndex + Math.abs(shift);
    return reverseAlphabet[shiftIndex % 26];
  }


  function caesar(input, shift = 0, encode = true) {
    // If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.
    if (shift == 0 || shift < -25 || shift > 25) return false;

    //decode message into a coherent string, if it passes the above if statement
    if(!encode) {
      return (shift > 0 ) ? [...input].map(char => leftShift(char, shift)).join("") : [...input].map(char => rightShift(char, shift)).join("");
    }else{
      return (shift > 0 ) ? [...input].map(char => rightShift(char, shift)).join("") : [...input].map(char => leftShift(char,shift)).join("");
       }
    }
  

  return {
    caesar,
  };
}) ();

module.exports = { caesar: caesarModule.caesar };
