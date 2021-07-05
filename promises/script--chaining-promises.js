// console.log(`time for promises, a better way to structure our async code! 👻`)
// console.log(`we're going to simulate a delay with setTimeout()`)

//! /////////
//! Callback
// - here we have to depend on the order of the arguments to depend on how things went
// - usually we don't know what we're going to do w/ the data...
// - w/ callbacks it's possible to call your callbacks twice
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === 'number') {
      callback(undefined, num * 2)
    } else {
      callback('ERROR: PROVIDE A NUMBER')
    }
  }, 2000)
}

//!vvv🔥🔥🔥 callback hell! 🔥🔥🔥vvv
getDataCallback(2, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    getDataCallback(data, (err, data) => {
      if (err) {
        console.log('err')
      } else {
        console.log(data) // 8
      }
    })
  }
})

//! WE CAN AVOID THIS WITH PPROMISE CHAINING! vvvvvvv

//! /////////
//! Promise - much easier to reason about than callback
/*// - clearer semantics
// - can't run more than one of the functions - ie can't run twice on accident
// - once the promise starts its process it doesn't need to use .then() to start waiting right away
// - we could
//   - do something right away
//   - access it multiple times
//     - and calling .then() wouldn't request the data twice
//     - so we can do different things with the same info
// - pass it a callback function that gets run right away
const myPromise = new Promise((resolve, reject) => {
  // simulate a delay like above
  // - the promise gets 2 args
  // -- arg0 - resolve - things performed as expected
  // -- arg1 - reject - something failed
  setTimeout(() => {
    // resolve('this is the promise data - love resolve')
    reject('this is my promise error - fu reject')
    // nope can't run it twice
    // reject('this is my promise error - fu reject')
  }, 2000)
})*/

// -----  well give the promise some accompanying arguments
//        by returning the new promise
const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(`promise resolve call - num: ${num} `)
      // reject('this is my promise error - take 2')
      typeof num === 'number' ? resolve(num * 2) : reject('you really ought to provide a number if you want this thing to work...')
    }, 2000)
  })

getDataPromise(2).then(
  (data) => {
    getDataPromise(data).then(
      (data) => {
        console.log(`Promise data: ${data}`)
      },
      (err) => {
        console.log(err)
      }
    )
  },
  (err) => {
    console.log(err)
  }
)

//! PROMISE CHAINING! 🥳 - returning a promise from another promise handler we create promise chaining - via - a chain of '.then()'s 🤗
// this allows us to create complex async programs w/o creating complex async code
getDataPromise(10)
  .then((data) => {
    return getDataPromise(data)
  })
  .then((data) => {
    // return getDataPromise(data)
    return 'this is some test data'
  })
  .then((data) => {
    console.log(data) // 80
  })
  .catch((err) => {
    //! catch is our single error handler 🙌  on any 'reject' the code execution will stop and jump straight to '.catch()'
    console.log(`Error: ${err}`)
  })

/*// ----- now you can get the promise by calling it
const myPromise = getDataPromise(123)

// do something w/ our promise instance via ".then()"
// - what we're going to do when we finally get the information
//   - we pass it a function that runs when the promise resolves
//   - and we get access to the data via the 1st arg
//   - the 2nd arg is the error handler
myPromise.then(
  (data) => {
    console.log(data)
  },
  (err) => {
    console.log(err)
  }
)

myPromise.then(
  (data) => {
    console.log(data)
  },
  (err) => {
    console.log(err)
  }
)
*/
