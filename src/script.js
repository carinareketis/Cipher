function cipherEncode(string, offset) {

  let encryptedLetters = '';
  let dislocatedLetterCode = '';

  for (let i = 0; i < string.length; i++) {

    dislocatedLetterCode = string.charCodeAt(i);

    if (dislocatedLetterCode >= 32 && dislocatedLetterCode <= 126) {
      dislocatedLetterCode = ((((dislocatedLetterCode - 32) + (offset % 95) + 95) % 95) + 32);

    }

    encryptedLetters += String.fromCharCode(dislocatedLetterCode);

  }

  return encryptedLetters;

}

function cipherDecode(string, offset) {

  return cipherEncode(string, -offset);

}

function buttonEncode() {

  const string = document.getElementById("id-string").value;
  const offset = parseInt(document.getElementById("id-offset").value);
  let result = document.getElementById("id-result");

  result.innerHTML = cipherEncode(string, offset);

}

function buttonDecode() {

  const string = document.getElementById("id-string").value;
  const offset = parseInt(document.getElementById("id-offset").value);
  let result = document.getElementById("id-result");

  result.innerHTML = cipherDecode(string, offset);

}

