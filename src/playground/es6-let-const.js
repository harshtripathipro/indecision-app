class Person{
constructor(name="Anonymous",age=0){
    this.name=name;
    this.age=age;
}
getGreetings(){
    return `${this.name} is ${this.age} years old`;
}
}
const me=new Person("Harsh",19);
const you=new Person();
console.log(me.getGreetings());
console.log(you.getGreetings());
