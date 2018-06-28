

function sayHello(message?: string): number {
    return message.length;
}

//sayHello(10);
sayHello('hello world');
sayHello();

function sayHello2(message: string = 'hello world') {
    return message
}

sayHello2();

function sayHello3(message: string = 'hello', num: number) {

}

sayHello3(undefined, 10);

// sayHello3();

/// lambda functions

/// (arg1: string, arg2: number) => { ... }
/// (arg1: string, arg2: number) => arg1 // return arg1
/// arg1 => arg1

const sayHello4 = (message: string) => {
    return message.length;
}

const sayHello5 = message => message.length // (message) => {return message.length}

/// this in lambda is fixed

const b = {'hello': () => {console.log(this)}}




