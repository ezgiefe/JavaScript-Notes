let siparis1= {  
    "siparis_id": 101,
    "musteri_id": 12,
    "tarih": "31.12.2025",
    "odeme_sekli": "kredi karti",
    "kargo_adresi": {
        "mahalle": "Yahya kaptan mah.",
        "ilce": "Umraniye",
        "Sehir": "Istanbul"  } ,
    "urunler": [{
        "urun_id": 5,
        "urun_basligi": "Iphone 16 Pro",
        "urun_url": "http://abc.com/iphone-16-pro",
        "urun_fiyati": 75000  },
        { "urun_id": 6,
        "urun_basligi": "Iphone 16 Pro Max",
        "urun_url": "http://abc.com/iphone-16-pro-max",
        "urun_fiyati": 85000  }]
}

let siparis2= {  
    "siparis_id": 102,
    "musteri_id": 12,
    "tarih": "30.11.2025",
    "odeme_sekli": "kredi karti",
    "kargo_adresi": {
        "mahalle": "Yahya kaptan mah.",
        "ilce": "Umraniye",
        "Sehir": "Istanbul"  } ,
    "urunler": [{
        "urun_id": 6,
        "urun_basligi": "Iphone 16 Pro Max",
        "urun_url": "http://abc.com/iphone-16-pro-max",
        "urun_fiyati": 85000  }
    ]
}
let sonuc;

let toplam1= ((siparis1.urunler[0].urun_fiyati + siparis1.urunler[1].urun_fiyati) * 1.2 );
sonuc= toplam1;
console.log(sonuc);

let toplam2= ((siparis2.urunler[0].urun_fiyati)* 1.2 );
sonuc= toplam2;
console.log(sonuc);

let tümtoplam= toplam1 + toplam2;
sonuc= tümtoplam;
console.log(sonuc);

