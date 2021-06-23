// try catch keeps the program from crashing if there is an error

const getTip = (amount) => {
  if (typeof amount === 'number') {
    return amount * 0.25
  } else {
    // throw 'Argument must be a number'
    throw Error('Argument must be a number')
  }
}

try {
  // const result = getTip(true)
  // const result = getTip('test')
  const result = getTip(10) // 2.5
  console.log(result)
} catch (error) {
  console.log('catch block is running')
}
