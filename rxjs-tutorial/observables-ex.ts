import { Observer, Observable, Subscription, Subject, interval, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

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

const timerObservable: Observable<string> = Observable.create((stringObserver: Observer<string>) => {
    console.log('the async code');
    setTimeout(() => {
        stringObserver.next("hello");
        stringObserver.next("world");
    }, 1000);

    setTimeout(() => {
        stringObserver.next("foo");
        stringObserver.next("bar");
    }, 2000);

    setTimeout(() => {
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

const myIntervalObservable: Observable<number> = Observable.create((numberObserver: Observer<number>) => {
    let counter = 0;
    let intervalId = setInterval(() => {
        console.log('is interval still running?');
        if (counter < 5) {
            numberObserver.next(counter);
        } else {
            numberObserver.complete();
        }
        
        counter++;        
    }, 1000);

    // fetch('https://google.com').then(() => {

    // }, () => {
    //     numberObserver.error(new Error());
    // })

    return function() {
        console.log('clean function');
        clearInterval(intervalId);
    }
});

const sub2: Subscription =  myIntervalObservable.subscribe((counter: number) => {
    console.log(counter);
    // sub2.unsubscribe();
});

const sub3: Subscription =  myIntervalObservable.subscribe((counter: number) => {
    console.log(counter);
    // sub2.unsubscribe();
});

setTimeout(() => {
    sub2.unsubscribe();
}, 3000);


// subject

// represents data stream
// 1 data stream for multiple listensers
// not wrapping the async funciton
// define pulses from outside

// every one sec pulse of counter

let counter = 0;
const intervalSubject: Subject<number> = new Subject();


setInterval(() => {
    if (counter < 5) {
        intervalSubject.next(counter);
    } else {
        intervalSubject.complete();
    }

    counter++
}, 1000);

intervalSubject.subscribe(function next(counter: number) {
    console.log(`subject listener1: ${counter}`);
}, function error() {
    console.log('error listener1')
}, function complete() {
    console.log('complete listener1')
})

const singleSubscirptionObject: Subscription = intervalSubject.subscribe(function(counter: number) {
    console.log(`subject listener2: ${counter}`);
}, function error() {
    console.log('error listener2')
}, function complete() {
    console.log('complete listener2')
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

const myHelloObservable: Observable<string> = interval(1000).pipe(
    map((counter: number) => 'hello')
)


interface ITodo {
    title: string;
}


const sub4: Subject<number> = new Subject();
const sub5: Subject<string> = new Subject();

combineLatest(sub4, sub5).subscribe((arrayOfSub4AndSub5: Array<string | number>) => {
    console.log('so this operator takes the latest from each data stream');
    console.log(arrayOfSub4AndSub5);
})

sub4.next(0);
sub4.next(1);
sub4.next(2);

sub5.next('hello');
sub5.next('world');

