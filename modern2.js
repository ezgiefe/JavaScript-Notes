//      ********  Destructuring  ********

//      Array Destructuring

let user= ["ezgi", "efe", "istanbul", "ümraniye"];

// let [firstname, lastname]= name;

// let [firstname, lastname]= "Ezgi Efe".split(" ");

let [firstname, lastname, ...address] = user;
//iki eleman hariç bütün parametreler adres olucak

console.log(firstname, lastname, address);


//      Object Destructuring

let urun= {
    marka: "Apple",
    model: "Iphone 13",
    fiyat: 20000
};

function urunGoster(obj){
    let{marka, model, fiyat= 0, satisDurumu= false}= obj
    console.log(marka, model, fiyat, satisDurumu);
}

urunGoster(urun);
console.log("******************************");



//      ********  Maps  ********

const ogrenciler = new Map();  // key , value

ogrenciler.set(1, "ezgi efe");
ogrenciler.set("34567876543", "ali can");
ogrenciler.set(true, "efe can");
/* 
console.log(ogrenciler.get(1));
console.log(ogrenciler.get("34567876543"));
console.log(ogrenciler.get(true));
*/
let sonuc;

sonuc= ogrenciler.size;  // 3
sonuc= ogrenciler.has(2);
console.log(sonuc);
// sonuc= ogrenciler.delete(1);
// sonuc= ogrenciler.size;  // 2

//ogrenciler.clear();  temizliyor tamamen
/* 
for(let x of ogrenciler.keys()){
    console.log(x);
}

for(let x of ogrenciler.values()){
    console.log(x);
}
*/
for(let [key, value] of ogrenciler.entries()){
    console.log(key, value);
}

console.log("******************************");


//      ********  Sets  ********

//const sayilar= new Set([1,2,3]);
const sayilar= new Set();

sayilar.add(1);
sayilar.add(2);
sayilar.add(3);
sayilar.add(3); //dizi içerisinde 3 olduğu için sadece 1 kere yazar
sayilar.add("4");

// const dizi= [...sayilar];
// console.log(dizi);

sayilar.delete(1);
console.log(sayilar.has(1));

// .values yazmasak da aynı sonucu alırız çünkü key values yapısında değil de dizi yapısında
for(let x of sayilar.values()){ 
    console.log(x);
}
 
console.log(sayilar);
console.log("******************************");


//      ********  Class  ********

// Getter ve setter methodları:

class Kisi {
    constructor(ad, meslek, dogumYili){
        this.ad = ad;
        this.meslek = meslek;
        this.dogumYili = dogumYili;
        //console.log("nesne oluşturuldu");
    }

    yasHesapla(){
        let tarih = new Date().getFullYear();
        return tarih - this.dogumYili;
    }

    kendiniTanit(){
        return `benim adım ${this.ad}`;
    }

    get ad(){
        return this._ad;
    }
    set ad(value){
        if(value.length < 3){
            console.log("ad için çok az karakter girdiniz");
            return;
        }
        this._ad = value;
    }

    get dogumYili(){
        return this._dogumYili;
    }
    set dogumYili(value){
        if(value < 1900 || value > new Date().getFullYear()){
            console.log("tarih bilgisi yanlış");
            return;
        }
        this._dogumYili = value;
    }
}
//                  burda set methodunu kullanmış oluyorum
let kisi1= new Kisi("ezgi efe", "öğrenci", 2002);
let kisi2= new Kisi("engin efe", "öğretmen", 1996);

console.log(kisi1.yasHesapla());
console.log(kisi2.yasHesapla());

console.log(kisi1.ad); //burda da get methodunu kullanıyorum
console.log("******************************");


//      ********  Inheritance  ********

// Kisi sınıfı parent class, Ogrenci sınıfı child class
class Ogrenci extends Kisi{
    constructor(ad, meslek, dogumYili, okulNumarasi){
        super(ad, meslek, dogumYili);
        this.okulNumarasi = okulNumarasi;
    }

    dersCalis(){
        return` ${this.ad} ders çalışıyor. `;
    }

    kendiniTanit(){  //parent classdakini ezer
        return `benim adım ${this.ad} ve okul numaram: ${this.okulNumarasi}`;
    }
}

let og1 = new Ogrenci("ahmet", "öğrenci", 2001, 123);

console.log(og1);
console.log(og1.yasHesapla());
console.log(og1.dersCalis());

console.log(kisi1.kendiniTanit());
console.log(og1.kendiniTanit());



