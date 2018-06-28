

// classes

class Person {
    static nameOfClass = 'Person';
    static meta() {
        console.log('this is class person');
        console.log(this);
    }

    sayHello3 = (arg1: string) => {

    }

    // public firstName: string = 'Yariv';
    // public lastName: string = 'Katz';

    // constructor(firstName: string, lastName: string) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
    constructor(public firstName: string, public lastName: string) {
    }

    private _sayHello() {
        console.log('hello');
    }

    public get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    public set fullName(value: string) {
        this.firstName = value.split(" ")[0];
        this.lastName = value.split(" ")[1];
    }
}

const preson: Person = new Person('yariv', 'katz');

console.log(preson.fullName);
preson.fullName = 'yariv katz';
// console.log((preson as any)._sayHello()); // this is possible and will print hello
console.log(Person.meta());


/// abstract class

abstract class Pokemon {
    constructor(public name = 'pikachu') {}

    sayHello() {
        console.log('im pokemon');
    }

    abstract whatIsMyAge(): number;
}

// const pokemon: Pokemon = new Pokemon(); // can't instance abstract class

class WaterPokemon extends Pokemon {
    constructor(public name = 'pikachu') {
        super(name);
    }

    sayHello() {
        super.sayHello();
        console.log('im water pokemon');
    }

    whatIsMyAge() {
        return 33;
    }
}

// generic type

/// T will get a type
/// when doing instance to type we need to define T


class Student<T extends string | number> extends Person {

    whatIsMyId(id: T) {
        
    }
}

const student1: Student<string> = new Student('yariv', 'katz');
//student1.whatIsMyId(10);

// const student2: Student<boolean> = new Student('yariv', 'katz');

// interface

interface IHasToHaveAge {
    age: number;
    firstName: string;
}

class Child extends Person implements IHasToHaveAge {
    public age: number = 30;
}



