// creates a new array by removing all the elements which the callback fn returns a falsy value.
// test the values of an array.
// creates a new array, but not modify the Original array.

const num = [1, 2, 3, 5, 6, 8]

const evenNumbers = num.filter((value) => {
  return value % 2 === 0
})

console.log(evenNumbers)

// ex. 2
const users = [
  {
    name: "Femi",
    role: "Admin",
  },
  {
    name: "sola",
    role: "Engineer",
  },
  {
    name: "David",
    role: "Sub-Admin",
  },
]

const admin = users.filter((user) => user.role === "Admin")
console.log(admin, "is an Admin")

// ex. 3
// remove duplicates.
// not used in practice, cause there are better ways to go about this.

const newArr = [1, 1, 1, 3, 2, 2, 5, 5, 6, 8]

const filteredArr = newArr.filter((value, index, arr) => {
  return arr.indexOf(value) === index
})

// indexOf -- returns the first occurence of a value in an Array.

console.log(filteredArr)
