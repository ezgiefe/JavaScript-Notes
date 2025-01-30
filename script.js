console.log("Merhaba");

var a = 5000;
var b = 5000;
var c= 6000;
var d= 7000;
var kdv= 1.2;

console.log(a * kdv);
console.log(b * kdv);
console.log(c * kdv);
console.log(d * kdv);

var ad = "Ezgi";
var soyad = "Efe";
var yas= 22;
var sehir= "Istanbul";

var mesaj = `Benim adim ${ad} ve soyadim ${soyad}. ${sehir}'da yasiyorum. 40 yasina basmama ${40 - yas} yil kaldi.`;
console.log(mesaj);

var kursAdi = "  Web Tasarim  ";
var sonuc;

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.length;
sonuc = kursAdi[0];
sonuc = kursAdi.slice(0,6);

sonuc = kursAdi.replace("Tasarim", "Gelistirme");
sonuc = kursAdi.trim();  //sağlı sollu boşlukları keser eposta alırken işe yarıyor baya

console.log(sonuc);

let num;
num = 10;
num = "10";
num = Number("10");
num = parseInt("10.7");
num = parseFloat("10.7");
num = parseInt("105a");
num = parseInt("a105"); //Not a Number 
num = Number.isInteger(10.7);

let sayi = 10.12345;

sonuc = sayi.toPrecision(5);  //5 basamaklı yazdırır (yuvarlar gerikalanını)
sonuc = sayi.toFixed(2);  //ondalıklı kısmı 2 basamaklı gelir her zaman
sonuc = Math.round(2.4);
sonuc = Math.sqrt(4);

sonuc = Math.random();



console.log(typeof sonuc);
console.log(sonuc);






