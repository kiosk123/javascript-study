const numbers = [10, 20, 30, 40];

const shift = numbers.shift()
console.log(shift) // 10

const pop = numbers.pop()
console.log(pop) // 40

numbers.unshift(50)
console.log(numbers) // [ 50, 20, 30 ]

numbers.push(70)
console.log(numbers) // [ 50, 20, 30, 70 ]
