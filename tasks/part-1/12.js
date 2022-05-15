function sumArray(array) {
   if (array === null) {
      return 0
   } else if (array.length < 2) {
      return 0
   } else {
      array = array.sort((a, b) => {
         return a - b
      })
      let total = 0
      for (let i = 1; i < array.length - 1; i++) {
         total = total + array[i]
      }
      return total
   }
}
console.log(sumArray([1, 2, 3, 4])) // 5