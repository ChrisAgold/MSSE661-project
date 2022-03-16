var array = [1, 2, 3, 4, 5].sort(function (a, b) {
});

function sort(a, b) {
    if (a > b) {
        return 1; // true
    } else if (a < b) {
        return -1; // false
    }
    return 0; // false
}

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
console.log(person.getLegalAge());

// function getLegalAge(Person) {
//     if (this.age > 21) {
//         return 1;
//     }
//     return -1;
// }

// console.log(getLegalAge(new Person("Cat", 25)))
