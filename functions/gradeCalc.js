const gradeCalculator = (score, maxScore) => {
  const percentCorrect = (score / maxScore) * 100
  if (percentCorrect >= 90) return `You got an A (${percentCorrect}%)`
  if (percentCorrect >= 80) return `You got a B (${percentCorrect}%)`
  if (percentCorrect >= 70) return `You got a C (${percentCorrect}%)`
  if (percentCorrect >= 60) return `You got a D (${percentCorrect}%)`
  return 'F'
}
console.log(gradeCalculator(18, 20))
console.log(gradeCalculator(17, 20))
console.log(gradeCalculator(15, 20))
console.log(gradeCalculator(5, 20))
