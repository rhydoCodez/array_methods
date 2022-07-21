// sorts the elements of an array by manipulating the array.
// the default order is "asc"
// it would convert the elements from the array to strings. and compares the sequence. in UTF 16

const girls = ["Ada", "Binta", "Zainab", "Seun", "Tola", "Sandra"]

// to avoid that, we can provide a compare function.
// and decide the algorithm we want to sort with.

const nums = [21, 33, 65, 90, 98, 59, 28, 65, 68, 92]

const compareFunc = (a, b) => {
  // we 've 3 scenarios.
  // 1. if < 0... a
  // 2. if 0... nothing chages.
  // 3. if > 0... b
  return a - b
}

nums.sort(compareFunc)

console.log(nums)

// it can also work with an array of Objects.
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

// it remains unchanged.

// sorting by price.
const sortedStore = store.sort((a, b) => {
  // if we want in "desc", b.price - a.price
  return a.price - b.price
})

console.log(sortedStore)
