const gradeCalc = (score, totalScore) => {
  if (typeof score !== 'number' || typeof totalScore !== 'number') {
    throw Error('Both arguments must be numbers!')
  }

  const percentCorrect = (score / totalScore) * 100

  let letterGrade = ''

  if (percentCorrect >= 90) {
    letterGrade = 'A'
  } else if (percentCorrect >= 80) {
    letterGrade = 'B'
  } else if (percentCorrect >= 70) {
    letterGrade = 'C'
  } else if (percentCorrect >= 60) {
    letterGrade = 'D'
  } else {
    letterGrade = 'F'
  }

  return `You got an ${letterGrade}!`
}

try {
  const result = gradeCalc(10, 'beep')
  console.log(result)
} catch (error) {
  // console.log('please provide numbers')
  console.log(error.message)
}

// console.log(gradeCalculator(18, 20))
// console.log(gradeCalculator(17, 20))
// console.log(gradeCalculator(15, 20))
// console.log(gradeCalculator(5, 20))
