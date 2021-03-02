const numbers = [10, 20, 30, 40, 50]

for (let number of numbers) {
    console.log(number) // 10, 20, 30, 40, 50
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}


const doggy = {
    name: 'puppy',
    sound: 'bark bark',
    age: 2
}

// for in은 object 반복에서 사용
for (let prop in doggy) {
    console.log(prop)
}

console.log(Object.entries(doggy)) //[ [ 'name', 'puppy' ], [ 'sound', 'bark bark' ], [ 'age', 2 ] ]
console.log(Object.keys(doggy))
console.log(Object.values(doggy))