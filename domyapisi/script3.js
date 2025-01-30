let sonuc;

sonuc= document.getElementsByClassName("item");
sonuc= document.getElementsByClassName("item")[0];

// const items= document.getElementsByClassName("item"); class ismine göre

//birden fazla liste grubu varsa ve hepsini seçmek istemiyorsak
// const grup1= document.getElementById("grup1");
// const items= grup1.getElementsByTagName("li");

//sayfa üzerindeki bütün li elementlerini istiyorum
// const items= document.querySelectorAll("li")

//birkaç koşulu tek satırda yazabilmek istiyorum
const items= document.querySelectorAll("#grup1 .item")

// for(let i=0; i< items.length; i++){
//     console.log(items[i]);
// };

for(let item of items){
    item.style.color="red";
    item.style.fontSize="20px";
    item.innerText= "Eleman";

}

// console.log(sonuc);