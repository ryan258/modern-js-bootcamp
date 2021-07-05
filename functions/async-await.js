// we always get a promise back from an async function
// - the promise gets resolved w/ the value we return

const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number' ? resolve(num * 2) : reject('you really ought to provide a number if you want this thing to work...')
    }, 2000)
  })

const processData = async () => {
  // throw new Error('something went wrong') // this triggers .catch() immediately
  // return 12
  //////////////////////////////////////
  // getDataPromise(2).then((data) => {
  //   console.log(data)
  // })
  //! instead of a chain of .then()'s we'll use await
  let data = await getDataPromise(2)
  // let data = await getDataPromise('beep')
  data = await getDataPromise(data)
  // console.log(data)
  return data
}

// console.log(processData()) // we get a promise back from an async function

processData()
  .then((data) => {
    console.log('Data', data) // Data 8
  })
  .catch((err) => {
    console.log(err)
  })

// processData() // 4 // 8
