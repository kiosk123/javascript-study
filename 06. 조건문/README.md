# 6. 조건문

```js
const a = 3

// if - else if - else
if (a + 1 === 2) 
    console.log('a + 1 = 2')
else 
    console.log('a + 1 != 2')


if (a + 1 === 2)
    console.log('a + 1 = 2')
else if (a + 1 !== 2)
    console.log('a + 1 != 2')
else 
    console.log("???")


// switch case
switch (a) {
    case 1: 
        console.log(1)
        break
    case 2:
    case 3:
        console.log(2 + ' or ' + 3)
        break
    default:
        console.log("???")
}
```