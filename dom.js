// todo how interact with elements DOM
const howInteractMain = document.getElementsByClassName('how-interact');
const titleH2 = document.getElementsByTagName('h2');
const idBtn = document.getElementById('button');
const btns = document.querySelectorAll('.btn');

btns.forEach((item, i) => {
    // console.dir(item);
    if (i % 2 === 0) {
        item.textContent = 'Click Me';
        item.style.padding = '10px';
    } else {
        item.innerHTML = 'Send me';
        item.style.padding = '6px';
    }
});
btns[3].remove(); // delete one button from green block
//* old methods for remove
// todo howInteractMain.remove(btns[0]) // need write parents and which element we want rm

console.dir(howInteractMain);
// add style for main_div
howInteractMain[0].style.cssText = `display: flex; align-items: center; justify-content: center;
    margin: 0 auto; background-color: green; width: 300px; height: 300px;`;

const newDiv = document.createElement('div'); // create new div
// const newText = document.createTextNode('Here was I'); // create new text

document.body.append(newDiv); // add div to end
// * old methods
// todo appendChild()
newDiv.classList.add('black'); // add css class from style.css

const newDiv2 = document.createElement('div'); // create new div
document.body.prepend(newDiv2); // add div to begin;
newDiv2.style.cssText = 'background-color: black; height: 100px; '; // add style for newDiv2

const newBtn = document.createElement('button'); // create new button
newBtn.style.cssText = 'display: block; margin: 10px auto; padding: 10px; border-radius: 10px; background-color: red;';
newBtn.innerText = 'Click me';
newDiv.before(newBtn); // add button before newDiv
// todo insertBefore(btn, div) // add btn before div

const newBtn1 = document.createElement('button'); // create new button
newBtn1.style.cssText = 'display: block; margin: 10px auto; padding: 10px; border-radius: 10px; background-color: blue;';
newBtn1.innerText = 'Click me';
newDiv.after(newBtn1); // add button after newDiv


// newDiv.replaceWith(newDiv2); // replace one div to other

//////////////////////////////////////

//todo add in the HTML some tegs or text

// add h2 in the newDiv
newDiv.innerHTML = '<h2> Hello World1</h2>'; 

// add text
newDiv.textContent = 'New Hello!';

//todo add tegs after or before some tegs

// add h3 before newBtn
newBtn1.insertAdjacentElement('beforebegin', '<h3>Learn JS</h3>'); 










