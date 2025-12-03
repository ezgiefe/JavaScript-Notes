const input= document.getElementById("text");
/*
function onKeyPress() { console.log("keypress"); }
function onKeyUp() { console.log("onKeyUp"); }

input.addEventListener("keypress", onKeyPress);
input.addEventListener("keyup", onKeyUp);
*/

function onKeyDown(e) { 
    // console.log("onKeyDown"); 
    //console.log(e.key); 
    //document.querySelector("h2").innerText += e.key;
        //yazdığın sayfanın üstünde h2 olarak görünüyor

/*    if(e.key === 'Enter'){
        alert("Enter tıklandı");
    } */


/*    if(e.repeat){
        alert(`${e.key} tuşuna basılı kaldı`);
    } */

        
}




input.addEventListener("keydown", onKeyDown);

