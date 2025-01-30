let sonuc;

//id'ye göre seçiceksek getElementById
sonuc= document.getElementById("title");
sonuc= document.getElementById("title").id;
sonuc= document.getElementById("title").className;

document.getElementById("title").style.fontsize="40px";
//fontsize ı 40 px olarak değiştirdik
//diğer style özelliklerini de bu şekilde değiştirebiliriz

document.getElementById("title").innerText="Alisveris Listesi";
//document.getElementById("title").innerHTML= " <p> Alisveris Listesi </p>";

//id, class, element name 'e göre seçiyor
sonuc= document.querySelector(".text-center"); //class a göre
sonuc= document.querySelector("h1");  //element etiketine göre
//seçmek istediği elementten birkaç tane varsa bulduğu ilk elementi getirir
//mesela iki tane h1 etiketi var ise ilk olanı yazdırır

sonuc= document.querySelector("input[type='submit']").id;
//sadece input deseydik bulduğu ilk input elementini getirirdi
//fakat biz submit type olanı istiyoruz

sonuc= document.querySelector("li:nth-child(3)");
//kaçıncı li elementini istiyorsam o geliyor
sonuc= document.querySelector("li:nth-child(3)").style.color="red";

const parentElement= document.querySelector("ul");
console.log(parentElement);

const firstElement = parentElement.querySelector("li");
firstElement.style.color="orange";

console.log(sonuc);