// Helper function to calculate the matrix inverse
const matrixInverse = (matrix) => {
    var det = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

    if (det === 0) {
        throw new Error("Matrix is not invertible");
    }

    var invDet = 1 / det;
    var invMatrix = [[0, 0], [0, 0]];

    invMatrix[0][0] = invDet * matrix[1][1];
    invMatrix[0][1] = -invDet * matrix[0][1];
    invMatrix[1][0] = -invDet * matrix[1][0];
    invMatrix[1][1] = invDet * matrix[0][0];

    return invMatrix;
}

const hillEncrypt=(plainText, keyMatrix) => {
    // Ensure that the length of the plaintext is a multiple of the key matrix size
    while (plainText.length % keyMatrix.length !== 0) {
        plainText += "X";
    }

    var cipherText = "";
    var blockSize = keyMatrix.length;

    for (var i = 0; i < plainText.length; i += blockSize) {
        // Get a block of plaintext and convert it to a column vector
        var plainBlock = [];
        for (var j = 0; j < blockSize; j++) {
            var charCode = plainText.charCodeAt(i + j) - 65;
            plainBlock.push([charCode]);
        }

        // Encrypt the block by multiplying it with the key matrix
        var cipherBlock = [];
        for (var k = 0; k < blockSize; k++) {
            cipherBlock[k] = [0];
            for (var l = 0; l < blockSize; l++) {
                cipherBlock[k][0] += keyMatrix[k][l] * plainBlock[l][0];
            }
            cipherBlock[k][0] %= 26;
        }

        // Convert the cipher block back to letters and add it to the cipher text
        for (var m = 0; m < blockSize; m++) {
            cipherText += String.fromCharCode(cipherBlock[m][0] + 65);
        }
    }

    return cipherText;
}

const hillDecrypt=(cipherText, keyMatrix) => {
    var plainText = "";
    var blockSize = keyMatrix.length;
    var invKeyMatrix = matrixInverse(keyMatrix);

    for (var i = 0; i < cipherText.length; i += blockSize) {
        // Get a block of ciphertext and convert it to a column vector
        var cipherBlock = [];
        for (var j = 0; j < blockSize; j++) {
            var charCode = cipherText.charCodeAt(i + j) - 65;
            cipherBlock.push([charCode]);
        }

        // Decrypt the block by multiplying it with the inverse of the key matrix
        var plainBlock = [];
        for (var k = 0; k < blockSize; k++) {
            plainBlock[k] = [0];
            for (var l = 0; l < blockSize; l++) {
                plainBlock[k][0] += invKeyMatrix[k][l] * cipherBlock[l][0];
            }
            plainBlock[k][0] %= 26;
        }

        // Convert the plaintext block back to letters and add it to the plaintext
        for (var m = 0; m < blockSize; m++) {
            plainText += String.fromCharCode(plainBlock[m][0] + 65);
        }
    }

    return plainText;
}
