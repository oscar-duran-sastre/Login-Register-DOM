
import { store } from './store.js';

const sumAgesForm = document.querySelector('#headerLinkSumAges');

const sumAgesListener = () => {
    sumAgesForm.addEventListener('click', event => {
        event.preventDefault();
        return showSumAges();
    });
}

const showSumAges = (() => {
    const sumAges = store.map(item => item.age).reduce((prev, next) => +prev + +next);
    resultSumAges.innerHTML = ' ';
    resultSumAges.insertAdjacentHTML('beforeEnd',
        `<span class="resultSumAges">${sumAges} años</span>`);
});

export { sumAgesListener };
