// Function Rewrites
// Rewrite the following normal functions into callback functions.

// function add(x, y) {
//    var result = x + y;
//    return result;
// }

// function subtract(x, y) {
//    return x - y;
// }

// function greeting(person) {
//    return 'Hola, ' + person + '!';
// }

// function product(numbers) {
//    return numbers.reduce(function(a, b) {
//       return a * b;
//    }, 1);
// }

//Exercise #1
add = ((x,y) => {
    return x + y;
})

subtract = ((x,y) => {
    return x - y;
})

calc = ((x,y,operation) => {
    return operation(x,y);
})

//Exercise #2
greeting = (person => {
    return `Hola, ${person}!`
})

firstName = ((person, newName) => {
    return newName(person);
})

//Exercise #3
product = (numbers => {
    return numbers.reduce((a, b) => {
        return a * b;
    }, 1)
})

var arr1 = [3, 6]

calcNum = ((numbers, product) => {
        return product(numbers);
})

setTimeout(() => {
console.log(firstName('Michael', greeting));
console.log(calc(5, 9 ,add));
console.log(calc(5, 9, subtract));
console.log(calcNum(arr1, product));
}, 1000);
