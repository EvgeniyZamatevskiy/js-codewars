function digitize(n) {
   return n.toString().split('').map(n => Number(n)).reverse()
}
console.log(digitize(35231)) // [1, 3, 2, 5, 3]