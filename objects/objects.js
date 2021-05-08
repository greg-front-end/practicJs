
// let fistPart = 'likes';
// let userInfo = {
//     name: 'Ivan',
//     age: 39,
//     'like javascript': true,
//     [fistPart]:  false,
//     address: {
//         city: 'Cheap',
//         street: 'Gues',
//     },

//     showInfo() {
//         console.log(`
//         ${this.name} is 
//         ${this.age} year old, he lives in 
//         ${this.address.city} and on the street 
//         ${this.address.street}`) // it is a method for objects
//     }
// }

// userInfo.showInfo();

// let key = 'name';
// console.log(userInfo[key]) // Ivan

// console.log(userInfo)
// console.log(userInfo.name);
// console.log(userInfo['like javascript'])
// console.log(userInfo[fistPart])

// console.log(userInfo.address.city)

// if ('name' in userInfo) {
//     console.log(userInfo.name)
// }
// for (let key in userInfo) {
//     console.log(key); // name, age..
//     console.log(userInfo[key]) // Ivan, 39...
// }


// // function costructor
// function UserInfo(name, age) {

//     this.name = name;
//     this.age = age;
// }
// console.log(new UserInfo('John', 23))

let userInfo = {};
userInfo.name = 'Holand';
console.log(userInfo)
userInfo.age = 23;
userInfo.name = 'Kate';
console.log(userInfo)
delete userInfo.name;
console.log(userInfo)