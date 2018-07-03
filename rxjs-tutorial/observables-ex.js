"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// rxjs
/// observer
/// observable
/// subject
/// operators
/// observer
//// is our listener
/// contains: next, error, complete
/// next function that runs on every pulse
/// data stream can close with error
/// data stream can close with complete
// Observable
/// represents the data stream
var timerObservable = rxjs_1.Observable.create(function (stringObserver) {
    console.log('the async code');
    setTimeout(function () {
        stringObserver.next("hello");
        stringObserver.next("world");
    }, 1000);
    setTimeout(function () {
        stringObserver.next("foo");
        stringObserver.next("bar");
    }, 2000);
    setTimeout(function () {
        stringObserver.complete();
    }, 3000);
});
/// can emit more than one value
// how do i attach a listener?
// const sub: Subscription = timerObservable.subscribe(function(msg: string){
//     console.log('will run on every next ' + msg);
// }, function() {
//     console.log('will run once or not at all (in this case not at all)');
// }, function() {
//     console.log('will run once or not at all (in this case not at all)');
// });
// const sub1: Subscription = timerObservable.subscribe(function(msg: string){
//     console.log('will run on every next');
// }, function() {
//     console.log('will run once or not at all (in this case not at all)');
// }, function() {
//     console.log('will run once or not at all (in this case not at all)');
// });
/// is observable lazy? 
/// YES!
/// what is subscription
/// object defines a connection between observer and observable
//sub.unsubscribe();
// is observable cancelabale
/// YES!
// observable will run async code for every listener
// interval observable
var myIntervalObservable = rxjs_1.Observable.create(function (numberObserver) {
    var counter = 0;
    var intervalId = setInterval(function () {
        console.log('is interval still running?');
        if (counter < 5) {
            numberObserver.next(counter);
        }
        else {
            numberObserver.complete();
        }
        counter++;
    }, 1000);
    // fetch('https://google.com').then(() => {
    // }, () => {
    //     numberObserver.error(new Error());
    // })
    return function () {
        console.log('clean function');
        clearInterval(intervalId);
    };
});
var sub2 = myIntervalObservable.subscribe(function (counter) {
    console.log(counter);
    // sub2.unsubscribe();
});
var sub3 = myIntervalObservable.subscribe(function (counter) {
    console.log(counter);
    // sub2.unsubscribe();
});
setTimeout(function () {
    sub2.unsubscribe();
}, 3000);
// subject
// represents data stream
// 1 data stream for multiple listensers
// not wrapping the async funciton
// define pulses from outside
// every one sec pulse of counter
var counter = 0;
var intervalSubject = new rxjs_1.Subject();
setInterval(function () {
    if (counter < 5) {
        intervalSubject.next(counter);
    }
    else {
        intervalSubject.complete();
    }
    counter++;
}, 1000);
intervalSubject.subscribe(function next(counter) {
    console.log("subject listener1: " + counter);
}, function error() {
    console.log('error listener1');
}, function complete() {
    console.log('complete listener1');
});
var singleSubscirptionObject = intervalSubject.subscribe(function (counter) {
    console.log("subject listener2: " + counter);
}, function error() {
    console.log('error listener2');
}, function complete() {
    console.log('complete listener2');
});
// intervalSubject.unsubscribe() // will cancel all listener
// singleSubscirptionObject.unsubscribe() // will cancel only one connection
// operators
/// operator create data stream 
/// operator can manipulate data stream
/// create observable from operator
// createOperator(arguments) : Observable<...>
// interval(1000).subscribe(function(count: number) {
//     console.log(`this is from interval operator ${count}`)
// }); // Observalbe<number>
// create operators the import is from 'rxjs'
/// manipuate data stream
// myObservable.pipe(
//     map(),
//     mergeMap(),
//     distinctUntilChanged(),
//     operator4(),
//     operator5()
// )
// npm install rxjs-compat --save-dev
// backward compatability from rxjs5 to rxjs6
var myHelloObservable = rxjs_1.interval(1000).pipe(operators_1.map(function (counter) { return 'hello'; }));
var sub4 = new rxjs_1.Subject();
var sub5 = new rxjs_1.Subject();
rxjs_1.combineLatest(sub4, sub5).subscribe(function (arrayOfSub4AndSub5) {
    console.log('so this operator takes the latest from each data stream');
    console.log(arrayOfSub4AndSub5);
});
sub4.next(0);
sub4.next(1);
sub4.next(2);
sub5.next('hello');
sub5.next('world');
