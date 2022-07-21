// executes a Callback fn on every element of an array and it would return one single output value.
// Think of it like, getting an array of items, and them adding all of the items into one resulting
// value.

const numbers = [1, 2, 3, 5, 6]

// reduce takes 2 parameters.
// a Callback fn.
// and an initialValue. -- which we're going to start when the execution starts.

// in this case, the initialValue should start with 0.

// the callback takes 4 parameters.
// the accumulator, value, index and the array
// value, index and array -- are used in Higher order functions.
// e.g map, filter, sum, every etc.

// the accumulator keeps track of the value that would be returned at the end.
// and it would be initialized with the "initialValue" provided.

// so, in our case, the accumulator would be 0 - initally
// value === every single element in the Array.
const callback = (accumulator, value) => {
  return accumulator + value
}

// if we don't provide an "initialValue", the initialValue would be the first value in the array.
// and that iteration would be skipped
const total = numbers.reduce(callback, 0)

console.log(total)

// ex. 2
const largeNumbers = [10, 20, 30, 50, 90, 80, 12]

// -Infinity, that's the lowest we can go.

const largeCallback = (accumulator, value) => {
  if (accumulator > value) {
    console.log("accumulator", accumulator)
    return accumulator
  } else {
    console.log("value", value)
    return value
  }
}

const max = largeNumbers.reduce(largeCallback, -Infinity)

console.log(max)

// ex. 3 -- store
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

// we want to get the total price of all the items in our store.
const totalPrice = store.reduce(
  (accumulator, item) => accumulator + item.price * item.quantity,
  0
)

console.log(totalPrice)
