class Person{
    constructor(name, age){
        this.name = 'John Doe';
        this.age =20;
    }

    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}
module.exports = Person;