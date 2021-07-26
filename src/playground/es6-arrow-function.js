const user={
    name:"Harsh",
    cities:["Lucknow","Surat","Ahmedabad"],
    printplaceslived(){
        return this.cities.map((city)=>this.name+"has lived in"+city);
    }
}
console.log(user.printplaceslived());
const multiplier={
    numbers:[10,20,30],
    multiplyby:6,
    multiply(){
       return this.numbers.map((multiplyto)=>this.multiplyby*multiplyto);
    }
}
console.log(multiplier.multiply());