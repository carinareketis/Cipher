document.querySelector("#btn-encode").addEventListener("click", () => btnSelected("encode"));
document.querySelector("#btn-decode").addEventListener("click", () => btnSelected("decode"));

function btnSelected(btnClicked) {
  const string = document.getElementById("textarea").value;
  const offset = parseInt(document.getElementById("offset").value);

  if(btnClicked === "encode") {
    document.getElementById("textarea").value = encode(string, offset);
  } else {
    document.getElementById("textarea").value = encode(string, -offset);
  }

}

function encode(string, offset) {
  let encrypted = "";
  let message = string.split("").map(elem => elem.charCodeAt());

  message.map(elem => {
    if(elem >= 65 && elem <= 90) {
			encrypted += String.fromCharCode(((elem - 65 + (offset %26) +26) %26) +65);
		} else if(elem >= 97 && elem <= 122){
			encrypted += String.fromCharCode(((elem - 97 + (offset  %26) +26) %26) +97);
		} else {
			encrypted += String.fromCharCode(elem);
    }

  });
  return encrypted;
}












