const elements = document.querySelector('h1');
console.dir(elements.innerText);
elements.innerText = 'Hello, World';

let count = 0;

function counter() {
    count++;
    console.log(count)
}

const fibNumber = (num) => {
    if (num <=1) return 1;
    return fibNumber(num-1) + fibNumber(num-2);
}

const answers = () => {
    console.log(count, fibNumber(count))
    count++;
    elements.innerHTML = `Hello, World count ${count} fib number ${fibNumber(count)}`;
}

const test = () => {
count = 0;
elements.innerHTML = `Hello, World count ${count+1} fib number ${fibNumber(count)}`;
}

const number = () => {
    return Math.floor(Math.random() * (255 - 0) + 0)
}

const changeColor = () => {
    let div = document.querySelector('div');
    div.style.backgroundColor = `rgb(${number()}, ${number()},${number()}, ${Math.random()})`;
    console.log(div.style.backgroundColor)
}
function test1(e) {
    console.log(e)
}

const div1 = document.getElementById('color-button');
div1.addEventListener('click', changeColor);
div1.addEventListener('click', answers);
div1.addEventListener('click', test1)

// const fib = fibNumber(count);
// elements.innerText = `Hello World ${count} ${fib}`