
import { store } from './store.js';

const showSumAges = (() => {
    const sumAges = store.map(item => item.age).reduce((prev, next) => +prev + +next);
    const resultSumAges = document.querySelector('#resultSumAges');
    resultSumAges.innerHTML = ' ';
    return resultSumAges.insertAdjacentHTML('beforeEnd',
        `<span class="resultSumAges">${sumAges} años</span>`);
});

export { showSumAges };
