let array = [];
let arrTest = new Array();

// we can converts obj to arrya 
let obj = {
    name: 'Ivan',
}
let arr = Object.entries(obj)
console.log(arr) // now we have array [ 'Ivan' ]

let arr = [
    'Holand', // index number 0
    'Smith', // index number 1
    'Sage', // index number 2

    {      // index 3
        type: 'JS',
        age: 36
    },
    function () {
        console.log('Hi i"am ' + arr[0] ) //  index 4
    }
]
console.log(arr[1])
console.log(arr[3].type)
console.log(arr[4]())
console.log(arr.length) // we have 5 elements ( not a index)

let arrTwo = ['Ivan', 'Stepan', 'Nicola'];

// add items on arrays
arr.push('some text') // add in the end
arr.unshift('some text, the same text') // add in the begin

// delete items in arryas
arr.pop() // delete in the end
arr.shift() // delete in the begin

// methods for change array
arr.splice(1, 1) // delete one element from index 1
arr.slice(1, 1, 'Kevin ') // change 1 element start with from 1 index
let copyArr = arr.slice() // copy all elemet from arryas arr we can copy some elements exemple .slice(1,3)
let copyNewArr = arr.concat('some new elements') // also copy and add new elements in arr

//methods for find in array
arr.indexOf('some name of elements'); // also we can find from some index exemple: .indexOf('item', 3)
let a = [3, 5, 7, 12]
let strArr = ['Hi', 'Hello', 'Ola Amigo']
if ( a.indexOf(3) !== -1 && strArr.indexOf('Ola Amigo') !== -1 ) {
    console.log('yes')
} else {
    console.log('No')
}
// the same like indexOf but includes return: true or false
arr.includes('item', 3);

// if array elements are object we can use for find elemetn this methods
let findArr = arr.find(function (item, index, array) {
    return item.element < 12 // for exemple
})
// this method the same as find but he don't stop his found
let arr = ['stick', 3, true]
let filterArr = arr.filter(item => console.log(item === true) ) // true

// method sort 
let arr = [3, 22, 8]
let sortArr = arr.sort((a, b) => a - b);
console.log(sortArr) // 3, 8, 22


// method map and return new array 
let arr = ['Ivan', 'Kate', 'Nicola']
let mapArr = arr.map(item => {
    console.log(item[0]) // I, K, N
})

// method split converts a string to an array
let str = 'Ivan, Kate, Nicola';
let splitToArr = str.split(',', 2) // if we want to converts a certain amount of elements
console.log(splitStr) // already we have array splitStr = [Ivan, Kate, Nicola]

// method join converts an array to a string
let arr = ['Ivan', 'Kate', 'Nicola'];
let joinToStr = arr.join(',');
console.log(joinToStr) // Ivan, Kate, Nicola

// method Array.isArray cheking array is array or not
let arr = [];
let obj = {};
if ( Array.isArray(arr) ) {
    console.log("I'am an array"); // we see the log
} else {
    console.log("I'am not an array")
}

// iterate array methods
// loop for
let arr = ['Ivan', 'Kate', 'Nicola'];
console.log(arr.length) // we see 3 elements

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]) // Ivan /n Kate...
}

// loop for of
let arr = ['Ivan', 'Kate', 'Nicola'];
for (let arrItem of arr) {
    console.log(arrItem)
}

// loop forEach method
let arr = ['Ivan', 'Kate', 'Nicola'];
arr.forEach( (item, index, array)=> {
    console.log(`${item} has number ${index} of the array: ${array}`) 
    // Ivan has number 0 of the array: Ivan,Kate,Nicola ...
})

// method reduce the same like a for of forEach but he return and create new arryas
let arr = [1, 2, 3, 4, 5, 6, 7];
let newReduceArray = arr.reduce( (prev, item, index, array) => {
    return item + prev;
}, 12); // we can add start number (28 + 12)
console.log(newReduceArray) // 40

let arr = ['Ivan', 'Kate', 'Nicola'];
let newRedArr = arr.reduce( (prev, item) => {
    return `${item}, ${prev}`
}).split(',')
console.log(newRedArr)

// home work

// Number 1
let arr = ['Ivan', 'Kate',];
arr.push('Nicola'); // add new item in the end of the array
arr[Math.floor( (arr.length - 1) / 2)] = 'name'; // change in the midle item of the array
let del = arr.shift() // delete first item of arr 
console.log(del)
arr.unshift('Lio', 'Kevin') // add two new items in the begin of arr
console.log(arr)

// Number 2
let arr = ['Ivan','Kate', 'Nicola'];
let midle = arr.splice(1, 1)
console.log(midle);

// Number 3
let str = 'Ivan, Kate, Nicola';
let strToArr = str.split(',')
console.log(strToArr)

// Number 4 
let arr = [3, 2, 8]
let prevArr = arr.reduce((prev, item) => {
    console.log(prev)
    console.log(item)
})

// Number 5
// ask user enter number and push it in array, so after sum numbers of array and show result
function sumInput() {
    
    let arr = [];
    let result = 0;
    while (true) {
        let numbers = prompt('Please, enter a number', 0);

        if (numbers === null || numbers === '' || !isFinite(numbers)) {
            break;
        }
        arr.push(+numbers)
        for (let num of arr) {
            result += num;
        }

    }
    return console.log(result);

}
sumInput()

// Number 6
// get MaxNumber from array
function getMaxSubSum(arr) {
    let result = 0;
    let maxNumber = 0;
    for (let num of arr) {
        
        if (num < 0){
          result = 0;
        } else {
          result += num;
          maxNumber = Math.max(maxNumber, result);
          // with start maxNumber = 0, and result = 100, so the variable save 100
          // for method Math.max()
          // after the loop check next item..
        } 
    }
    return console.log(maxNumber)
}
getMaxSubSum([100, -2, 3, -9])

// Number 7 
// toUpperCase first char of the item from arr
const arr = ['nAme', 'suRnamE', 'kaTe'];
let toUpperArr = arr.map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase())
console.log(toUpperArr)


const personal = [
    {name: 'Kate', salary: 220},
    {name: 'John', salary: 130},
    {name: 'Holand', salary: 50},
]
let salaryPerson = personal.reduce( (sum, count, item) => {

    if (item[0] === 'salary') {
        return item
    }

})
console.log(salaryPerson)

// Number 8
// Напишите функцию camelize(str), которая преобразует 
// строки вида «my-short-string» в «myShortString».
function camelize(str) {
    return console.log( str
    .split('-')
    .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('') )
}
camelize('background-color')


// number 9
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
// ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
function filterRange(arr, a, b) {
    return arr.filter( (number) => { return number >= a && number <= b})
}
console.log(filtered)

// number 10
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и 
// удаляет из него все значения кроме тех, которые находятся между a и b. 
// То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      if (a > val || val > b) {
        arr.splice(i, 1);
        i--;
      }
  }

}
filterRangeInPlace(arr, 1, 4);
console.log(arr)
