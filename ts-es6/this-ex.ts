// this

// this in class
/// in java and c# this in class will always point to the instance
/// this in javascript can change

// how this is determined
/// who is the object from which the call to funcion was made

function printThis() {
    console.log(this);
}

function printThis2() {
    "use strict"
    console.log(this);
}

printThis(); // in browsers window will be printed 
// is it always window? 

printThis2(); // in this case this will be undefined


const a = {'hello': printThis};
a['hello'](); // this will be a

const printThis3 = printThis.bind(a) // will bind this to a
printThis.bind(a)();

// call, apply
/// first argument is what is this

printThis2.call(a);









