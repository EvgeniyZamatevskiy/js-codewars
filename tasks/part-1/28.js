function SeriesSum(n) {
   let sum = 0
   for (let i = 0; i < n; i++) {
      sum = sum + 1 / (3 * i + 1)
   }
   return sum.toFixed(2)
}

console.log(SeriesSum(4)) // 1.49