"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
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
