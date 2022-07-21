// returns a shallow copy of a portion of an array.
// won't modify the Original array.

// we can provide the intial index and ending index.
const num = [1, 2, 3, 5, 6, 8, 9]

const div = num.slice(1, 5)

console.log(div)

// we can also provide a -ve number, so it'ld start from the end.

// if you pass a single, it returns the items starting from that index.

const participants = ["FIH Hub", "Kuda", "Money Point", "First Mobile"]

const winner = participants.slice(0, 1)
console.log(winner)

// for blog posts.
