// will search inside the array and returns the first element for which the callback fn returns a truthy
// value,
// if it doesn't find one, it return a falsy value.

const students = ["Sam", "David", "Esther", "Mark"]

const dave = students.find((item) => item === "David")

console.log(dave)

// ex. 2
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

const findProductByPrice = store.find((item) => {
  return item.price > 1000 && item.price < 2000
})

console.log(findProductByPrice)
