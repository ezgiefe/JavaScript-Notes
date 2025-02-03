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


