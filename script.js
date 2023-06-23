// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};
function rot13(encodedString) {
  // Helper function to decode a single character
  function decodeChar(char) {
    // Check if the character is within the range of uppercase letters
    if (/[A-Z]/.test(char)) {
      // Convert the character code to a value between 0 and 25 (A=0, B=1, etc.)
      const charCode = char.charCodeAt(0) - 65;

      // Perform the ROT13 decoding by shifting the character code by 13 positions
      // and wrapping around if it goes beyond the range of 26
      const decodedCharCode = (charCode + 13) % 26;

      // Convert the decoded character code back to its corresponding uppercase letter
      const decodedChar = String.fromCharCode(decodedCharCode + 65);

      return decodedChar;
    } else {
      // If the character is not an uppercase letter, return it as is
      return char;
    }
  }

  // Split the encoded string into an array of characters, decode each character,
  // and join them back into a string
  const decodedString = encodedString.split('').map(decodeChar).join('');

  return decodedString;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
