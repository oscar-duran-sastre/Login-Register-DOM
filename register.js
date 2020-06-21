
import { store } from './store.js';
import { showSumAges } from './sum-ages.js';

const registerForm = document.querySelector('#registerForm');

const register = () => {
    registerForm.addEventListener('submit', event => {
        event.preventDefault();

        const userFirstNameRegister = document.querySelector('#firstNameRegister');
        const userLastNameRegister = document.querySelector('#lastNameRegister');
        const userEmailRegister = document.querySelector('#emailRegister');
        const userEmailRegisterRepit = document.querySelector('#emailRegisterRepit');
        const userPasswordRegister = document.querySelector('#passwordRegister');
        const userPasswordRegisterRepit = document.querySelector('#passwordRegisterRepit');
        const userAgeRegister = document.querySelector('#ageRegister')

        const checkEmailMatchResult = checkEmailMatch(userEmailRegister.value, userEmailRegisterRepit.value);
        const checkPasswordMatchResult = checkPasswordMatch(userPasswordRegister.value, userPasswordRegisterRepit.value);
        const checkAgeOver18Result = checkAgeOver18(userAgeRegister.value);
        const checkEmailExistInArrayResult = checkEmailExistInArray(userEmailRegister.value);

        checkRegisterIsOK(checkEmailMatchResult, checkPasswordMatchResult, checkAgeOver18Result, checkEmailExistInArrayResult);

        if (checkEmailMatchResult && checkPasswordMatchResult && checkAgeOver18Result && checkEmailExistInArrayResult === undefined) {
            registerProcess(userEmailRegister.value, userPasswordRegister.value, userFirstNameRegister.value, userLastNameRegister.value, userAgeRegister.value);
        }
    });
};

const checkEmailMatch = ((email1, email2) => email1 === email2);

const checkPasswordMatch = ((password1, password2) => password1 === password2);

const checkAgeOver18 = (age => age >= 18);

const checkEmailExistInArray = email => store.find((value) => value.email === email);

const checkRegisterIsOK = ((email, password, age, emailInArray) => {
    resultCheckRegister.innerHTML = ' ';
    if (email === false) {
        return resultCheckRegister.insertAdjacentHTML('beforeend',
            '<span class="resultLoginFalse">Los emails no coinciden.</span>');
    }
    if (password === false) {
        return resultCheckRegister.insertAdjacentHTML('beforeend',
            '<span class="resultLoginFalse">Las contraseñas no coinciden.</span>');
    }
    if (age === false) {
        return resultCheckRegister.insertAdjacentHTML('beforeend',
            '<span class="resultLoginFalse">Necesitas ser mayor de edad para acceder.</span>');
    }
    if (emailInArray !== undefined) {
        return resultCheckRegister.insertAdjacentHTML('beforeend',
            '<span class="resultLoginFalse">Este email ya existe en nuestra base de datos.</span>');
    }
    return resultCheckRegister.insertAdjacentHTML('beforeend',
        '<span class="resultLoginTrue">Has sido registrado correctamente.</span>');
});

const registerProcess = ((email, password, name, surname, age) => {
    store.push({ id: store.length + 1, email: email, password: password, name: name, surname: surname, age: age });
    return showSumAges();
});

export { register };
