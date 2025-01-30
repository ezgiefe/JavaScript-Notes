/*  objeler
const product= {
    //properties
    title: "Samsung S25",
    description: "Güzel bir telefon",
    price: 7000,
    stock: 100,

    //methods
    display: function(){
        return `
        Ürün Başlığı ${this.title} 
        Ürün Açıklaması: ${this.description}
        Fiyat Bilgisi: ${this.price}`;
    },
    is_active: function(){
        return (this.stock > 0) ? "satışta": "stok yok";
    }
};

console.log(product.title);

console.log(product.display());
console.log(product.is_active());
*/

//constractor

function Product(title, description, price, stock){
    this.title= title;
    this.description= description;
    this.price= price;
    this.stock= stock;
    //methodlar
    this.display= function(){
        return `
        Ürün Başlığı ${this.title} 
        Ürün Açıklaması: ${this.description}
        Fiyat Bilgisi: ${this.price}`;
    };
    this.is_active= function(){
        return (this.stock > 0) ? "satışta": "stok yok";
    };
}

const product1= new Product("Samsung S25","Güzel bir telefon", 7000, 100);
const product2= new Product("Samsung S26","iyi telefon", 8000,0);

// console.log(product1.price);
// console.log(product2.title);
// console.log(product1.display());
// console.log(product2.is_active());

//Properties

function Rectangle(name, width, height){
    this.name= name;
    this.width= width;
    this.height= height;
    this.area= function(){
        return this.width * this.height;
    }
}

const rect1= new Rectangle("Rectangle 1", 10,5);
const rect2= new Rectangle("Rectangle 2", 20,15);

rect1.color = "Red";  //nesneye özel property

rect2.perimeter = function(){
    return 2 * (this.width + this.height);
};  //nesneye özel propery

console.log(rect1.hasOwnProperty("color"));

//remove propery
delete rect1.color;

console.log(rect1.name);
console.log(rect2.name);
console.log(rect2.area());

console.log(rect2.hasOwnProperty("color"));
console.log(rect1.hasOwnProperty("color"));


//get keys
console.log(Object.keys(rect1));

//get values
console.log(Object.values(rect1));

//get entries
console.log(Object.entries(rect1));
console.log(Object.entries(rect1));


for(let [key, value] of Object.entries(rect1)){
    if(typeof value !== "function"){
        console.log(key, value);
    }
}


