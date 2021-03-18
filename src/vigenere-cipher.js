const CustomError = require("../extensions/custom-error");
const A_CODE = 65
const Z_CODE = 90

class VigenereCipheringMachine {

  constructor(isDirect) {
    this.isDirect = isDirect ?? true
  }

  // equalKeyword = 'alphon se alph'
  
  getEqualLengthKeyword(text, keyword) {
    let newKeyword = '';
  
    let j = 0
    for (let i = 0; i < text.length; i++) {

      let char = text[i]
      if (/[a-z]/gi.test(char)) {
        newKeyword += keyword[j]
        j++
      } else {
        newKeyword += char
      }

      if (j === keyword.length) j = 0;

    }

    return newKeyword.toUpperCase()
  }
  
  encrypt(text, keyword) {
    if (!text || !keyword) throw new Error();
    let encrypted = ''
    let equalKeyword = this.getEqualLengthKeyword(text, keyword)
    
    text = text.toUpperCase()

    if (!this.isDirect) {
      text = text.split('').reverse().join('')
      equalKeyword = equalKeyword.split('').reverse().join('')
    }

    for (let i = 0; i < text.length; i++) {

      if (/[a-z]/i.test(text[i])) {

        let keywordCode = equalKeyword[i].charCodeAt(0)
        let textCode = text[i].charCodeAt(0)

        let keywordDistance = keywordCode - A_CODE
        let textDistance = Z_CODE - textCode

        if (textCode + keywordDistance > Z_CODE) {
          encrypted += String.fromCharCode(A_CODE + keywordDistance - textDistance - 1);
        } else {
          encrypted += String.fromCharCode(textCode + keywordDistance);
        }


      } else {
        encrypted += text[i]
      }
    }
    return encrypted
  }    
  decrypt(text, keyword) {
    if (!text || !keyword) throw new Error();
    let decrypted = ''
    let equalKeyword = this.getEqualLengthKeyword(text, keyword)

    if (!this.isDirect) {
      text = text.split('').reverse().join('')
      equalKeyword = equalKeyword.split('').reverse().join('')
    }

    for (let i = 0; i < text.length; i++) {

      if (/[a-z]/i.test(text[i])) {

        let keywordCode = equalKeyword[i].charCodeAt(0)
        let textCode = text[i].charCodeAt(0)

        let keywordDistance = Z_CODE - keywordCode
        let textDistance = textCode - A_CODE + 1
        
        let charCode = (keywordDistance + textDistance) % 26
        decrypted += String.fromCharCode(65 + charCode)

      } else {
        decrypted += text[i]
      }
    }
    return decrypted


    
  }
}

module.exports = VigenereCipheringMachine;
