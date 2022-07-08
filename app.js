const filterOutOdds = (...nums) => nums.filter( (num) => num % 2 === 0)

const findMin = (...nums) => nums.reduce( (lowest, current) => current > lowest ? lowest : current)