// Helper function to convert a character to a number
function charToNum(char) {
    return char.charCodeAt(0) - 65;
}

// Helper function to convert a number to a character
function numToChar(num) {
    return String.fromCharCode(num + 65);
}

function hillEncrypt(plainText, key) {
    var cipherText = "";
    var blockSize = key.length;
    
    // Pad the plaintext with X's if necessary
    while (plainText.length % blockSize != 0) {
        plainText += "X";
    }
    
    // Iterate over the plaintext in blocks of size blockSize
    for (var i = 0; i < plainText.length; i += blockSize) {
        var block = plainText.substring(i, i + blockSize);
        var blockNums = [];
        
        // Convert the block to numbers
        for (var j = 0; j < blockSize; j++) {
            blockNums.push(charToNum(block.charAt(j)));
        }
        
        // Perform matrix multiplication
        var cipherNums = [];
        for (var j = 0; j < blockSize; j++) {
            var sum = 0;
            for (var k = 0; k < blockSize; k++) {
                sum += key[j][k] * blockNums[k];
            }
            cipherNums.push(sum % 26);
        }
        
        // Convert the cipher numbers to characters
        for (var j = 0; j < blockSize; j++) {
            cipherText += numToChar(cipherNums[j]);
        }
    }
    
    return cipherText;
}

function hillDecrypt(cipherText, key) {
    var plainText = "";
    var blockSize = key.length;
    
    // Iterate over the ciphertext in blocks of size blockSize
    for (var i = 0; i < cipherText.length; i += blockSize) {
        var block = cipherText.substring(i, i + blockSize);
        var blockNums = [];
        
        // Convert the block to numbers
        for (var j = 0; j < blockSize; j++) {
            blockNums.push(charToNum(block.charAt(j)));
        }
        
        // Perform matrix multiplication
        var plainNums = [];
        var inverseKey = math.inv(key);
        for (var j = 0; j < blockSize; j++) {
            var sum = 0;
            for (var k = 0; k < blockSize; k++) {
                sum += inverseKey[j][k] * blockNums[k];
            }
            plainNums.push(sum % 26);
        }
        
        // Convert the plain numbers to characters
        for (var j = 0; j < blockSize; j++) {
            plainText += numToChar(plainNums[j]);
        }
    }
    
    return plainText;
}

var plainText = "HELLO";
var key = [
    [5, 8],
    [17, 3]
];

var cipherText = hillEncrypt(plainText, key);
console.log("Encrypted text: " + cipherText); // Output: Encrypted text: YJLOR

var decrypted = hillDecrypt(cipherText, key)
console.log("Decrypted text: " + decrypted); // Output: Encrypted text: YJLOR