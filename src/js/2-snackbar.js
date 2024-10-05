import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const delay = parseInt(event.target.delay.value);
    const state = event.target.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise
    .then(delay => {
        iziToast.success({
            title: 'Success',
            message: `✅ Fulfilled promise in ${delay}ms`,
        });
    })
    .catch(delay => {
        iziToast.error({
            title: 'Error',
            message: `❌ Rejected promise in ${delay}ms`,
        });
    });
});

// Перероби функцію на проміс таким чином, щоб проміс повертав значення
// через 2 секунди після виклику функції

function greet() {
  return "hello world";
}

const newPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('hello world')
    }, 2000);
})

newPromise.then(response => {
    console.log(response);
})

// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і повертатиме проміс.
// Додай перевірку:
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

const value = prompt('Enter value');
function checkValue(value) {
    const numberValue = Number(value);
    return new Promise((resolve, reject) => {
if (Number.isNaN(numberValue)) {
    reject('error')
}
if (numberValue % 2 === 0) {
    setTimeout(() => {
        resolve('even')
    }, 1000);
}
if (numberValue % 2 !== 0) {
    setTimeout(() => {
        resolve('odd')
    }, 2000);
}
    })
}

checkValue(value)
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
});