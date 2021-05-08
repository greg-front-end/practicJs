// ===== Set 
// net Set(iterable) // создаёт Set, и если в качестве аргумента 
//был предоставлен итерируемый объект 
// (обычно это массив), то копирует его значения в новый Set
set.add(value) // добавляет значение (если оно уже есть, 
// то ничего не делает), возвращает тот же объект set
set.delete(value) //  удаляет значение, возвращает true, 
// если value было в множестве на момент вызова, иначе false
set.has(value) // возвращает true, если значение присутствует в множестве, иначе false
set.clear() // delete all elements in set
set.size // return count elements of set

// methods of set
set.values() // возвращает перебираемый объект для значений,
set.keys() // то же самое, что и set.values(), присутствует для обратной совместимости с Map
set.entries() // возвращает перебираемый объект для пар вида [значение, значение], 
// присутствует для обратной совместимости с Map.

let set = new Set(Array.from(arr))
console.log(set)
let arrMap = new Map(set)
console.log(arrMap)


const set = new Set([1, 2, 3, 3, 4, 5, 5, 6,])
set.add(23).add(3).add(24);
console.log(set)

console.log(set.values())

for (let key of set) {
    console.log(key)
}

// ==== practic

function unique(arr) {
    return [...new Set(arrya)]
}
console.log((unique(1, 2, 3, 4, 5, 2, 1, 4,3, 2, 4,)))

