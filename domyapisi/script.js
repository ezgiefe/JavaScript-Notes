let sonuc;

sonuc= document.all;
sonuc= document.all[6]; 
sonuc= document.all.length;
sonuc= document.documentElement; //root element
sonuc= document.head;

sonuc= document.body.children;

sonuc= document.doctype; 
sonuc= document.URL;
sonuc= document.contentType;

//formlara erişim
sonuc= document.forms;
sonuc= document.forms[0];
sonuc= document.forms[0].method;
sonuc= document.forms[0].action;

//sayfadaki linklere erişim
sonuc= document.links;
sonuc= document.links[0];
sonuc= document.links[0].id="Hepsi";
sonuc= document.links[0].innerHTML="Hepsi";

sonuc= document.images;







console.log(sonuc);