const getTip = (total, tipPercent = 0.2) => {
  const tipAmount = total * tipPercent
  return `A ${tipPercent * 100}% tip on $${total} would be $${tipAmount}`
}

console.log(getTip(10, 0.5))
