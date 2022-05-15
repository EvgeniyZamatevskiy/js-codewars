function arrayPlusArray(arr1, arr2) {

   const arrSum = [...arr1, ...arr2]

   return arrSum.reduce((acc, item) => {
      return acc + item
   }, 0)
}

console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])) // 2100