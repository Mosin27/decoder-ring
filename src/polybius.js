// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  

    //polybius square grid in an array format
    let polybiusSquare = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"],
    ];

    //helper function ciphers letters to digits
    function letterDigits(polybiusSquare, letter) {
      if(!/[a-zA-Z]/.test(letter)) return letter;
      for (let i = 0; i < polybiusSquare.length; i++){
        for (let j = 0; j < polybiusSquare[i].length; j++){
          const character = polybiusSquare[i][j];
          const yCoord = j + 1;
          const xCoord = i + 1;
          if (character.toLowerCase().includes(letter.toLowerCase())) {
            return `${yCoord}${xCoord}`;
          }
        }
      }
    }

    //helper function to decipher digits to letters
    function digitLetters(polybiusSquare, digits) {
      if(!/[/0-9]/.test(digits)) return digits
      const xNumber = Number(digits[0] - 1);
      const yNumber = Number(digits[1] - 1);
      return polybiusSquare[yNumber][xNumber].toLowerCase();
    }

    //helper function to make number pairs
    function pairDigits(word) {
      let pairArray = [];
      if(word.length % 2 != 0) return false;
      for(let i = 1; i < word.length; i += 2) {
        const leftNumber = word[i -1]
        const rightNumber = word[i]
        pairArray.push(`${leftNumber}${rightNumber}`)
      }
      return pairArray;
    }


    function polybius(input, encode = true){
      //check to make sure number code is an even length before decoding
      if(input.split(" ").join("").length % 2 != 0 && !encode) return false;
      //encode words to numbers
      if(encode) {
        return [...input].map(letter => letterDigits(polybiusSquare, letter)).join("")
      }else{
        //decoding the message
        const digitArray = input.split(" ");
        const pairedDigits = digitArray.map(digits => pairDigits(digits));
        const words = pairedDigits.map(word => {
          return word.map(pairs => {
            return digitLetters(polybiusSquare, pairs)
          })
        })
        //return message
        return words.map(word => word.join("")).join(" ")
      }
    }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
