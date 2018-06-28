// promises

const timerPromise: Promise<string> = new Promise((resolve, reject) => {
    console.log('the async code is running');
    setTimeout(() => {
        resolve('hello from promise');
        //reject(new Error("an error occured"));
    }, 1000);
});

// promise chaining

// const numberPromise: Promise<boolean> = timerPromise.then((msg: string) => {
//     console.log(msg);
//     return msg.length;
// }, (err: Error) => {
//     console.log(err.message)
//     return 0;
// }).then((num : number) => {
//     return true;
// })

// attach more than one listener

timerPromise.then((msg) => {
    console.log(`first listener ${msg}`);
});

timerPromise.then((msg) => {
    console.log(`second listener ${msg}`);
})

// async runs once for many listeners



/// how many values can a promise send
/// can send one data

/// is promise lazy
/// promise is not lazy

// is promise cancelable
// no!



