function Player(name){
    this.name= name;
    this.score = 0;
    this.start= function(){
        return `${this.name} oyuna başladı.`;
    };
    this.stop= function(){
        return `${this.name} oyundan çıktı.`;
    };
    this.pause= function(){
        return `${this.name} oyunu durdurdu.`;
    };
    this.add_score= function( value){
        return this.score+= value;
    };
    this.show_score= function(){
        return `${this.name} isimli oyuncunun skoru ${this.score}.`;
    };
}

const oyuncu1= new Player("Ahmet");
const oyuncu2= new Player("Ayşe");
const oyuncu3= new Player("Çınar");

console.log(oyuncu1.add_score(2));
console.log(oyuncu1.add_score(4));
console.log(oyuncu2.add_score(100));
console.log(oyuncu3.add_score(50));
console.log(oyuncu1.show_score());
console.log(oyuncu2.show_score());
console.log(oyuncu3.show_score());


