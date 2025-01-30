function selamlama(mesaj){
    console.log(mesaj);
}

selamlama("merhaba");
selamlama("selam");

function yasHesapla(dogumYili){
    let present= new Date().getFullYear();
    return present - dogumYili;
}

console.log(yasHesapla(2002));

function yaziTura(){
    let random= Math.random();  //0-1

    if(random < 0.5){
        console.log("yazi");
    }
    else{
        console.log("tura");
    }
}

yaziTura();