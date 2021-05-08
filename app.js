// function CreateObject(name, age, hobby) {

//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;

// }

// const obj1 = new CreateObject('John', 23, 'play guitar');

// console.log(obj1);


// push and pop methods for arrays
// exemple
const car = [];
const elem = document.querySelector('#elem');
const message = document.querySelector('.message');
document.querySelector('.push').onclick = () => {
    let id = +document.querySelector('#goods').value;
    if (!car.includes(id)) {
        car.push(id);
        elem.textContent += ' ' + id;
        message.textContent = 'You are add new element, good!';
        setTimeout( () => message.textContent = '', 3000 );
    }


    console.log(car);
};

document.querySelector('.pop').onclick = () => {
    let id = +document.querySelector('#goods').value;
    let goods = car.pop();
    elem.textContent = car.join(' ');
    message.textContent = `The item of number id ${goods} was delete`;
    setTimeout( () => message.textContent = '', 3000 );
    console.log(`The item of number id ${goods} was delete`);
    console.log(car);
};