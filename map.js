// executes a callback fn on every element in an array and
// returns a new array.
// but doesn't change the array itself.

// current / value
// index
// array

const arr = [1, 2, 3, 5, 6, 6, 9, 8]

const arr2 = arr.map((value, index, array) => {
  return value * 2
})

console.log(arr2)

// also, to see the index working.
const arr3 = arr.map((value, index, array) => {
  return value * index
})

console.log(arr3)

// ex. 3
const store = [
  {
    product: "T-Shirt",
    price: 12000,
    quantity: 3,
  },
  {
    product: "Sneakers",
    price: 500,
    quantity: 1,
  },
  {
    product: "Wrist Watch",
    price: 1200,
    quantity: 5,
  },
]

const totalPriceOfEachProducts = store.map((item) => {
  return { productName: item.product, totalPrice: item.price * item.quantity }
})

console.log(totalPriceOfEachProducts)

// ex. Four
// convert data types

const str = ["1", "3", "5", "9"]

const num = str.map((item) => Number(item))

console.log(num)

// we could also reverse this.
const nums = [1, 3, 2, 6]
const strs = nums.map((item) => String(item))

console.log(strs)
