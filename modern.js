//      *********  Arrow function  *********
const selamlama = () => {console.log("merhaba");}
//birden fazla satır kod yazmak için {}, tek satır kod için gerekli değiil

selamlama();

const selamlama2 = (isim) => {console.log("merhaba" + isim);}

selamlama2("ahmet");

const toplama = (a,b) => a + b;

const toplama2 = (a,b) => { return a + b};
//birden fazla satır kod olucaksa return yazmayı unutmamak lazım

sonuc= toplama(20,50);
console.log(sonuc); 

//      *********  Arrayler  *********

const sayilar = [1,5,7,3,2,67];


/*const tekSayiKontrol = (sayi) => sayi %2 == 1;
const tekSayilar = sayilar.filter(tekSayiKontrol); daha da kısaltılabilir */

const tekSayilar = sayilar.filter((sayi) => sayi %2 == 1);
//filter, çağırılan fonksiyonda belirtilen şarta uygun elemanları filtreleyip yazdırır

const tekSayilarMap = sayilar.map((sayi) => sayi %2 == 1);
//map değerlerin true veya false olduklarını bir liste içinde yazdırır

console.log(tekSayilar);

const urunler = [
    {urunAdi: "iphone 11", fiyat: 12000},
    {urunAdi: "iphone 12", fiyat: 15000},
    {urunAdi: "iphone 13", fiyat: 18000},
    {urunAdi: "iphone 13 Pro", fiyat: 22000}
];

const sonuc= urunler.map(urun => urun.urunAdi); //urun adlarını yazdırıyor

const sonuc2= urunler.filter(urun => urun.fiyat > 15000).map(urun => urun.urunAdi);
// kritere göre ürün filtreledik                    filtrelenen ürünlerin adlarını yazdırıyoruz
                            
console.log(sonuc);
console.log(sonuc2);

//birden fazla değer varsa bulduğu ilk değeri yazdırsın istiyorum
const sonuc3= urunler.find(urun => urun.fiyat > 12000);
// sadece indexini döndürsün istiyorsak -  findIndex()  - kullanabiliriz

console.log(sonuc3);

//      *********  Spread Operator  *********

const msj=["benim", "adım","ezgi","efe"];

console.log(...msj);
//spread operatörü ile tek bir string halinde yazdırabildik

const dizi1= ["bir","iki"];
const dizi2= ["üç","dört"];

/*  const dizi3= [dizi1, dizi2];
bu şekilde yazıldığında [["bir","iki"], ["üç","dört"]] şeklinde 2 elemanlı oluyor
ama biz elemanların hepsini bir diziye aktarmak istiyorsak teker teker aşağıdakini yapmamız gerek */

const dizi3= [...dizi1, ...dizi2, "beş", "altı"]; // ["bir","iki","üç","dört","beş", "altı"] olarak gelir

console.log(dizi3);

const sayilar1 = [1,2,3];
// const sayilar2 = sayilar1;  referans ile kopyalanır
const sayilar2 = [...sayilar1];  //value ile kopyalanır

sayilar[0]= 10; 
//iki diziyi de etkiler referansla kopyalanırsa

console.log(sayilar1, sayilar2);

const user= {
    username: "ezgiefe",
    email: "ezgiefe@gmail.com"
};

const address= {
    username: "abc",
    city: "İstanbul"
};

console.log({...user, ...address});
// tek bir obje içerisinde bilgileri yazdırdık bu sayede
// iki tane aynı objeden varsa sonuncusu geçerli olur yani username abc olarak yazdırılıcak


//      *********  Rest Parameters  *********

//spread operatörünün fonksiyon içindeki hali    

function toplam(...args){
    let sonuc= 0;

    for(let sayi of args){
        sonuc += sayi;      }
    
    return sonuc;
};

console.log(toplam(1,2,3));
console.log(toplam(1,2,3,10));
console.log(toplam(1,2,3,10,20));

function bilgileriGoster(isim, soyad, ...adres){
    console.log(isim, soyad,adres);
}

bilgileriGoster("ezgi", "efe", "istanbul", "ümraniye");


