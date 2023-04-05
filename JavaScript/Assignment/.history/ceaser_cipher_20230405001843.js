const caesarEncrypt = (plainText, shift) => {
let cipherText = "";
for (let i = 0; i < plainText.length; i++) {
const charCode = plainText.charCodeAt(i);
if (charCode >= 65 && charCode <= 90) { // Upper case letters
cipherText += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
} else if (charCode >= 97 && charCode <= 122) { // Lower case letters
cipherText += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
} else { // Non-alphabetic characters
cipherText += plainText.charAt(i);
}
}

 return cipherText;
};
const caesarDecrypt = (cipherText, shift) => {
let plainText = "";
for (let i = 0; i < cipherText.length; i++) {
const charCode = cipherText.charCodeAt(i);
if (charCode >= 65 && charCode <= 90) { // Upper case letters
plainText += String.fromCharCode((charCode - 65 - shift + 26) % 26 + 65);
} else if (charCode >= 97 && charCode <= 122) { // Lower case letters
plainText += String.fromCharCode((charCode - 97 - shift + 26) % 26 + 97);
} else { // Non-alphabetic characters
plainText += cipherText.charAt(i);
}
}
return plainText;
};