// encryption algorithm
function vigenereEncrypt(plainText, key) {
var cipherText = "";
var keyIndex = 0;
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Convert plainText and key to uppercase
plainText = plainText.toUpperCase();
key = key.toUpperCase();
for (var i = 0; i < plainText.length; i++) {
var char = plainText.charAt(i);
var charIndex = alphabet.indexOf(char);
// Ignore non-alphabetic characters
if (charIndex === -1) {
cipherText += char;
continue;
}


var keyChar = key.charAt(keyIndex);
var keyIndexInAlphabet = alphabet.indexOf(keyChar);
var newIndex = (charIndex + keyIndexInAlphabet) % 26;
var newChar = alphabet.charAt(newIndex);
cipherText += newChar;
// Move to next key character
keyIndex++;
if (keyIndex === key.length) {
keyIndex = 0;
}
}
return cipherText;
}
// Vigenere cipher decryption algorithm
function vigenereDecrypt(cipherText, key) {
var plainText = "";
var keyIndex = 0;
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Convert cipherText and key to uppercase
cipherText = cipherText.toUpperCase();
key = key.toUpperCase();
for (var i = 0; i < cipherText.length; i++) {
var char = cipherText.charAt(i);
var charIndex = alphabet.indexOf(char);
// Ignore non-alphabetic characters
if (charIndex === -1) {
plainText += char;
continue;
}

var keyChar = key.charAt(keyIndex);
var keyIndexInAlphabet = alphabet.indexOf(keyChar);
var newIndex = (charIndex - keyIndexInAlphabet + 26) % 26;
var newChar = alphabet.charAt(newIndex);
plainText += newChar;
// Move to next key character
keyIndex++;
if (keyIndex === key.length) {
keyIndex = 0;
}
}
return plainText;
}
var plainText = "HELLO WORLD";
var key = "SECRET";
var cipherText = vigenereEncrypt(plainText, key);
console.log("Encrypted text: " + cipherText); // Output: Encrypted text: DPOAR OARLD
var decryptedText = vigenereDecrypt(cipherText, key);
console.log("Decrypted text: " + decryptedText); // Output: Decrypted text: HELLO WORLD