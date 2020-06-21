
import { store } from './store.js';

const loginForm = document.querySelector('#loginForm');

const login = () => {
    loginForm.addEventListener('submit', event => {
        event.preventDefault();
        const userEmail = document.querySelector('#emailLogin');
        const userPassword = document.querySelector('#passwordLogin');
        const checkEmailResult = checkEmail(userEmail.value);
        const checkPasswordResult = checkPassword(userPassword.value);
        return resultLogin(checkEmailResult, checkPasswordResult);
    });
};

const checkEmail = email => store.find((value) => value.email === email);

const checkPassword = password => store.find((value) => value.password === password);

const resultLogin = ((email, password) => {
    const resultCheckLogin = document.querySelector('#resultCheckLogin');
    resultCheckLogin.innerHTML = ' ';
    email === undefined || password === undefined
        ? resultCheckLogin.insertAdjacentHTML('beforeend', '<span class="resultLoginFalse">¡No puedes pasar!</span>')
        : resultCheckLogin.insertAdjacentHTML('beforeend', '<span class="resultLoginTrue">Puedes pasar</span>')
});

export { login };
