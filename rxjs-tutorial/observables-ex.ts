import { Observer, Observable, Subscription } from 'rxjs';

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








