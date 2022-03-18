// OBJECTS
var object = {
    name: 'Mittens',
    age: 50
};

class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getLegalAge() {
        if (this.age > 21) {
            return 1;
        }
        return -1;
    }
}

const person = new Person('Mittens', 2);
 // console.log(person.getLegalAge());

