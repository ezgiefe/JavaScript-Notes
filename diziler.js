let urunler = ["Iphone 15", "Iphone 16", "Iphone 17"];
let fiyatlar = [50000, 60000, 70000];
let renkler = ["gold", "black", "silver"];

let sonuc = `${urunler[0]} - ${fiyatlar[0]} - ${renkler[0]}`;

console.log(sonuc);

let ogrenciler = ["cinar", "yigit", "ada"];
let result;

result= ogrenciler.length; 
result= ogrenciler.toString();
result= ogrenciler.join(' ');

//eleman silme
result= ogrenciler.pop(); //son elemanı sildi ve silinen elemanı result a attı ve bildirdi
result= ogrenciler.shift(); //ilk elemanı sildi ve silinen elemanı bildirdi 

//eleman ekleme
result= ogrenciler.push("Sena"); //sona ekler
result= ogrenciler.unshift("Sena"); //başa ekler

//eleman arama
result= ogrenciler.indexOf('yigit'); //hangi indexde
result= ogrenciler.lastIndexOf('yigit'); //iki tane varsa eleman son index numarasını verir
result= ogrenciler.includes('yigit'); //var mı yok mu

//eleman silme/ekleme
result= ogrenciler.splice(0,1); //sıfırıncı indexden itibaren bir elemanı sil
result= ogrenciler.splice(0,0, "ali, canan");
// splice( hangi index numarasından itibaren, kaç eleman silinecek, ne eklenecek )

console.log(result);






