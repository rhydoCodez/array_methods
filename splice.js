// changes an array by removing or replacing all existing elements from it.
// it takes a starting index
// a count, -- how many move.
// optional --- new elements to add to the array.

// ex. 1
const nums = [1, 2, 3, 5, 6, 8, 9]

const deleted = nums.splice(1, 3)

console.log(deleted)
console.log(nums)

// modify the array by replacing the items instead of deleting them.
const replaced = nums.splice(1, 3, 5, "hello", 9)
console.log(replaced)

// Note: it would change the array...
