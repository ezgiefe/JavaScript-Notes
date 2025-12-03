const mesaj= document.getElementById("mesaj");
const button= document.querySelector("button");

function mesajGoster() {
    console.log(mesaj.value);
    mesaj.value= "";
}

button.addEventListener("click", mesajGoster);

