let kullanici= {
    "ad": "Ezgi",
    "soyad": "Efe",
    "yas": "22",
    "adres": {
        "sehir": "istanbul",
        "ilce": "umraniye" },
    "hobiler": ["sinema", "spor"]
};
let kullanici2= {
    "ad": "Engin",
    "soyad": "Efe",
    "yas": "28",
    "adres": {
        "sehir": "istanbul",
        "ilce": "umraniye" },
    "hobiler": ["sinema", "oyun"]
};
let kullanicilar= [kullanici, kullanici2];
let sonuc;

sonuc= kullanici;
sonuc= kullanici["ad"];
sonuc= kullanici["soyad"];
sonuc= kullanici["adres"]["sehir"];
sonuc= kullanici.ad;
sonuc= kullanici.adres.sehir;
sonuc= kullanici.hobiler[0];

sonuc= kullanicilar[0].ad;

console.log(sonuc);
