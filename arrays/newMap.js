
new Map() // создаёт коллекцию.
map.set(key, value) // записывает по ключу key значение value.
map.get(key) // возвращает значение по ключу или undefined, если ключ key отсутствует.
map.has(key) // возвращает true, если ключ key присутствует в коллекции, иначе false.
map.delete(key) // удаляет элемент по ключу key.
map.clear() //  очищает коллекцию от всех элементов.
map.size //  возвращает текущее количество элементов. 
// === iterate Map
// map.keys(); возвращает итерируемый объект по ключам,
// map.value(); возвращает итерируемый объект по значениям
// map.entries(); возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.
let obj = {
    name: 'Ivan',
    age: 23,
}

let map = new Map()
map.set('name', 'Ivan');
map.set('name', 'Ivan');
map.set('name1', 'Smith');
console.log(map.get('name'))

let john = {name:  'John'}; // create varibles of name
let visitDateMap = new Map(); // create visit map

visitDateMap.set(john,new Date()); // show user visit date
console.log(visitDateMap.get(john))

// Каждый вызов map.set возвращает объект map, 
// так что мы можем объединить вызовы в цепочку:

map.set("1", "str1")
.set(1, "num1")
.set(true, "bool1");
console.log(map)

let recipeMap = new Map([
    ['apple', 300],
    ['anans', 235],
    ['potato', 49],
]);

// iterate from keys
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable)
}

// iterate from values
for (let vegetable of recipeMap.values()) {
    console.log(vegetable);
}

//iterate from [key, value]
for (let all of recipeMap) {
    console.log(all)
}

recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value} from ${map}`)
})

// ==== Object.entries: Map из Object

let map1 = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1'],
]);
console.log(map1.get('1'))

let obj1 = {name: 'Ivan', age: 23};
let map2 = new Map(Object.entries(obj1))
console.log(map2)

// Object.fromEntries
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat',3],
])
let mapArr = new Map();
mapArr.set('name', 'Ivan').set(['name', 'surname'], ['Ivan', 'Ivanov']);
let nameObj = Object.fromEntries([...mapArr])
console.log(Object.fromEntries(Array.from(mapArr)))
console.log(nameObj)
console.log(nameObj['name,surname'])
console.log(prices.orange)

// exercize ===== 
// #1
// Создайте функцию unique(arr), которая вернёт массив уникальных, 
// не повторяющихся значений массива arr
function unique(arr) {
    return Array.from(new Set(arr))
}
let values = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Hare', ':-O', ]
console.log(unique(values))

// #2
// Напишите функцию aclean(arr), которая возвращает 
// массив слов, очищенный от анаграмм.
function aclean(arr) {
    let map = new Map();
    for (let word of arr) {
      let sorted = word
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      map.set(sorted, word)
    }
  
    return console.log( Array.from(map.values()) );
  }

let arr1 = [ 'nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares' ];
console.log(aclean(arr1))


// vladilen Map
const obj1 = {
    name: 'Ivan', age: 23, job: 'Fullstack',
}

const entries = [
    ['name', 'Ivan'],
    ['age', 23],
    ['job', 'Fullstack'],
]

console.log(Object.entries(obj1)) // now obj is arr
console.log(Object.fromEntries(entries)) // entries now is obj

const map3 = new Map(entries);
console.log(map3) // array from entries
console.log(map3.get('job')) // Fullstack

map3
    .set('newbuild', 42)
    .set(obj1, 'value of object')
console.log((map3.get(obj1)))

for (let entry of map.entries()) {
    console.log(entry);
}
for (let [key, value] of map) {
    console.log(key, value);
}
for (let val of map.values()) {
    console.log(val);
}
for (let key of map.key()) {
    console.log(key);
}
map.forEach((val, key, map) => {
    console.log(val, key)
})

// ====
const mapArray = Array.from(map) // = [...map], know map arr is Array
const mapObj = Object.fromEntries(map.entries()) // map arr is objetc
console.log(mapArray)
console.log(mapObj)
// ====
const users = [
    {name: 'Elena'},
    {name: 'Volodya'},
    {name: 'Ghost'},
]

const visits = new Map();
visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))
function lastVisit(user) {
    return visits.get(user)
}
console.log(lastVisit(users[1])) // date


// convert obj to map => new Map( Object.entries(obj) )
let obj = {
    name: 'Ivan',
    age: 23,
    job: 'Front-End',
  }
  let map = new Map(Object.entries(obj))
  
  // convert map to obj => Object.fromEntries(map) 
  let newMap = new Map([
    ['name', 'Ivan'],
    ['age', 23],
  ])
  let objFromMap = Object.fromEntries(newMap)
  