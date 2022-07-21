// executes a given function on every element in an array.
// the callback fn takes three parameters.
// the value -- the current item / step in the loop.
// the index.
// and the array itself.

const devs = ["onyinye", "sultan", "femi", "ayo"]

const bonusCallback = (item, index, arr) => {
  console.log(`Hello, ${item} - you've been given a bonus of # 100,000.`)
}
devs.forEach(bonusCallback)

// we can also use it to calc. the sum of an Array.
const salaries = [35000, 60000, 80000, 120000, 80000]

let sum = 0
const totalSalaries = (item, index, arr) => {
  sum += item
}

salaries.forEach(totalSalaries)
console.log(sum)

// to see how many times a letter appears in an array.
const languages = [
  "spanish",
  "italian",
  "spanish",
  "english",
  "yoruba",
  "igbo",
  "hausa",
  "spanish",
]

let count = {}

languages.forEach((item) => {
  if (count[item]) {
    count[item] += 1
  } else {
    count[item] = 1
  }
})

console.log(count)
