function solution(nums) {
   return nums !== null ? nums.sort((a, b) => a - b) : []
}

console.log(solution([1, 2, 3, 10, 5])) // [1, 2, 3, 5, 10]