var isim= "Ezgi"; //global scope
var isim= "Ezgi";
//iki tane aynı "var" değeri tanımlamakta bir sorun yok
//fakat bu "let" için aynı değil
//iki tane aynı let değeri tanımlayamazsın bu hata yapmanın önüne geçer

function yazdir(){
//fonksiyonun içinde tanımlanan değişkenler globalde görülmez
    var isim= "Nur";  //function scope
    console.log(isim); 
}

yazdir();

if(true){
//let kendi block scope unu oluşturur
    let isim= "Canan";
    let cinsiyet= "kadin"
//let değilde var diye tanımlasaydık bir sorun olmazdı globalde tanımlı olurdu
    console.log(isim); //o yüzden burada çağırıldığında gelir
}

console.log(cinsiyet); //not found der çünkü cinsiyet globalde tanımlu değil
console.log(isim); //ama burda globaldeki değer geçerli 

//const -> sabit tanımlama

const TC= "4536475869078";

// TC= "23456789045678"; hata verir const olarak tnaımlanmış 
// bir değerin üstüne yeni değer tanımlayamazsın
