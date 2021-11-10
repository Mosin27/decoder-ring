// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  //function to get the count of each character
  function characterCount(str, char) {
    return str.split("").reduce((acc, character) => {
      return (character === char) ? acc += 1 : acc
    }, 0);
  };

  //function to get the alphabet index and make lowercase
  const alphabetCipher = "abcdefghijklmnopqrstuvwxyz";
  function alphabetIndex(alphabet, char) {
    return alphabet.indexOf(char.toLowerCase())
  }
  
  

  function substitution(input, alphabet, encode = true) {
    //alphabet has to be 26 characters
    if (!alphabet || alphabet.length !== 26) return false;
    //check if new alphabet doesn't contain all characters
    if(alphabet.split("").some(letter => characterCount(alphabet, letter) != 1)) return false;

    if(encode){
      return [...input].map(character => (
        /[a-zA-Z]/.test(character) ? alphabet.charAt(alphabetIndex(alphabetCipher, character)) : character
      )).join("");
    }else{
      return [...input].map(character => (
        alphabet.includes(character) ? alphabetCipher.charAt(alphabetIndex(alphabet, character)) : character
      )).join("");
    }
    

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
