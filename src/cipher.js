var message = prompt("Digite sua mensagem:");

var offset = prompt("Digite seu deslocamento:");

document.getElementById('message').innerHTML = (message);


function stringOffset(string, offset){
  let asciiCode = string.charCodeAt(0);

  if(asciiCode >= 65 && asciiCode <= 90){
    asciiCode = ((asciiCode - 65 + offset) % 26);
    if (asciiCode < 0) asciiCode = 91 + asciiCode;    
  }

  if(asciiCode >= 97 && asciiCode <= 122){
    asciiCode = ((asciiCode - 97 + offset) % 26);
    if (asciiCode < 0) asciiCode = 123 + asciiCode;
    else asciiCode += 97;
  }
  return String.fromCharCode(asciiCode);   
}


function cipherEncode(string, offset){
  
  let textCoded = "";

  for (let i=0; i<string.length; i++){
    textCoded += stringOffset(string[i], offset);  
  }
  return textCoded;  
}

var coded = cipherEncode(message.toLowerCase(), parseInt(offset));

document.getElementById('message-cipher').innerHTML = (coded);


function cipherDecode(string, offset){
  return cipherEncode(string, -offset);
}

document.getElementById('message-decipher').innerHTML = (cipherDecode(coded, offset));






