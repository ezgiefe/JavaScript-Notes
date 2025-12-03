const div = document.querySelectorAll("div");

function onClick(e) {
    //console.log(e);
    //console.log(e.target);
    //console.log(e.timeStamp); //event ne zaman gerçeklerşti
    //console.log(e.clientX); //window'a göre eventin gerçeklerştiği yerin x 
    //console.log(e.clientY); // ve y konumunu veriyor
    console.log(e.offsetX); //bu da window'a göre değil elemente göre
    console.log(e.offsetY); // x ve y konumunu gösteriyor

}

div[0].addEventListener("click", onClick);
div[1].addEventListener("click", onClick);
div[2].addEventListener("click", onClick);

document.querySelector("a").addEventListener("click", function(e) {
    e.preventDefault();
    
    console.log("link tıklandı");
})

/* eğer bir fonksiyonu tek bir elemente bağlarken kullanıcaksan içeride tanımlamak daha mantılı ama başka  
elementlerde de kullanılacaksa global olarak tanımlamak daha mantıklı tabi
fonksiyonu dışarıya aldığımızda isimlendirmek zorundayız ama içeride tanımlandığında tanımsız olabilir
*/




