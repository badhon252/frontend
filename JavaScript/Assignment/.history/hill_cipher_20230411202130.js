class HillCipher {
  constructor(key) {
    // Check for valid key
    const n = Math.sqrt(key.length);
    if (!Number.isInteger(n) || n < 1) {
      throw new Error("The key must be a square matrix of size n x n.");
    }

    this.key = key;
    this.blockSize = n;
    this.inverseKey = this.getInverseKey();
  }

  // Helper function to convert a character to a number
  charToNum(char) {
    return char.charCodeAt(0) - 65;
  }

  // Helper function to convert a number to a character
  numToChar(num) {
    return String.fromCharCode(num + 65);
  }

  // Helper function to calculate the determinant of a 2x2 matrix
  determinant(matrix) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
  }

  // Helper function to calculate the multiplicative inverse of a number
  multiplicativeInverse(num) {
    for (let i = 0; i < 26; i++) {
      if ((num * i) % 26 === 1) {
        return i;
      }
    }
    return -1;
  }

  // Helper function to calculate the inverse key
  getInverseKey() {
    const det = this.determinant(this.key);
    const detInv = this.multiplicativeInverse(det);

    if (detInv === -1) {
      throw new Error("The key is not invertible.");
    }

    const adjugate = [
      [this.key[1][1], -this.key[0][1]],
      [-this.key[1][0], this.key[0][0]],
    ];

    const inverseKey = [];

    for (let i = 0; i < this.blockSize; i++) {
      inverseKey[i] = [];
      for (let j = 0; j < this.blockSize; j++) {
        inverseKey[i][j] = (((detInv * adjugate[i][j]) % 26) + 26) % 26;
      }
    }

    return inverseKey;
  }

  // Function to encrypt a plaintext using the Hill Cipher
  encrypt(plainText) {
    // Check for valid input
    if (!plainText || plainText.length % this.blockSize !== 0) {
      throw new Error(
        "The plaintext length must be a multiple of the block size."
      );
    }

    let cipherText = "";

    // Pad the plaintext with X's if necessary
    while (plainText.length % this.blockSize !== 0) {
      plainText += "X";
    }

    // Iterate over the plaintext in blocks of size blockSize
    for (let i = 0; i < plainText.length; i += this.blockSize) {
      const block = plainText.substring(i, i + this.blockSize);
      const blockNums = [];

      // Convert the block to numbers
      for (let j = 0; j < this.blockSize; j++) {
        blockNums.push(this.charToNum(block.charAt(j)));
      }

      // Perform matrix multiplication
      const cipherNums = [];
      for (let j = 0; j < this.blockSize; j++) {
        let sum = 0;
        for (let k = 0; k < this.blockSize; k++) {
          sum += this.key[j][k] * blockNums[k];
        }
        cipherNums.push(sum % 26);
      }

      // Convert the cipher numbers to characters
      for (let j = 0; j < this.blockSize; j++) {
        cipherText += this.numToChar(cipherNums[j]);
      }
    }

    return cipherText;
  }

  // Function to decrypt a ciphertext using the Hill Cipher

  decrypt(cipherText) {
    let plainText = "";

    // Iterate over the ciphertext in blocks of size blockSize
    for (let i = 0; i < cipherText.length; i += this.blockSize) {
      const block = cipherText.substring(i, i + this.blockSize);
      const blockNums = [];

      // Convert the block to numbers
      for (let j = 0; j < this.blockSize; j++) {
        blockNums.push(this.charToNum(block.charAt(j)));
      }

      // Perform matrix multiplication
      const plainNums = [];
      for (let j = 0; j < this.blockSize; j++) {
        let sum = 0;
        for (let k = 0; k < this.blockSize; k++) {
          sum += this.inverseKey[j][k] * blockNums[k];
        }
        plainNums.push(sum % 26);
      }

      // Convert the plain numbers to characters
      for (let j = 0; j < this.blockSize; j++) {
        plainText += this.numToChar(plainNums[j]);
      }
    }

    return plainText;
  }
}

const cipher = new HillCipher("hello");
