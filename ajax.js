const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/name/turkey')
request.send();

request.addEventListener('load', function(){
//  const data = this.responseText;
    const data = JSON.parse(this.responseText);
    
//    console.log(data[0]);
    console.log(typeof data); // string türünde ama jsona çevirmemiz lazım

    setCountry(data[0]);
});

function setCountry(data){
    console.log(data);

}




