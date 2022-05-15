function getAverage(marks) {
   return Math.floor(marks.reduce((acc, num) => {
      return acc + num / marks.length
   }, 0))
}

console.log(getAverage([1, 2, 3, 4, 5])) // 3