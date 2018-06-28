"use strict";
var stamNumber = 10;
var stamString = 'hello world';
var stamBoolean = true;
//stamBoolean = 'sdf';
if (true) {
    var stamNumber2 = 20;
}
stamNumber2 = 30;
function sayHello() {
    if (true) {
        var stamNumber3 = 40;
    }
}
// stamNumber3 = 50;
if (true) {
    var stamBoolean2 = false;
}
// stamBoolean2 = true;
var myArray = [];
myArray.push(1);
// variable declaration summary
/// var let const
/// var the scope is funcitonal
/// let const the scope is in the block
/// const single assignment
// when to use what
/// try to use const all the time
/// ask yourself if assigning again then use let
/// ask if you want the variable outside the block then user var
// type prediction
/// typescript will try to guess the type
// type checking
/// const/let/var variableName: <type> =? optional assignment
/// primitive  types
/// number, boolean, string
var myBoolean3 = true;
var myNumber4;
var myString4 = 'dfggfdh';
/// complex types
/// array
var myArray2 = [];
// myArray2.push(true); // error!
myArray2.push(10);
myArray2.push('hello world');
/// object
var myObject = { hello: 'world' };
//myObject['foo'] = 10;
/// date
var myDate = new Date();
/// promise
var myPromise = new Promise(function (resolve, reject) {
});
/// map
/// map is like object but with complex keys
/// iterable
/// any - disable compiler checking on this variable
var myAny = 10;
myAny = 'sdfsfd';
/// set
/// like array but items can't repeat ===
