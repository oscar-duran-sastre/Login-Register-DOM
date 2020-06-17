
import { store } from './store.js';

/* Crea las siguientes funciones para simular un sistema de
autentificación:
const users = [‘cgonzalez@hubescuela.com’, ‘test@test.com’ ];
login: recibe dos parámetros
- email
- password
Debe retornar el nombre del usuario en caso de que el email
que recibimos como parámetros se encuentra en el array de
usuarios. Si no lo encuentra retorna el mensaje “usuario no
encontrado”. */

const loginForm = document.querySelector('#loginForm');

const loginEventSubmit = () => {
    loginForm.addEventListener('submit', event => {
        event.preventDefault();
        const userEmail = document.querySelector('#emailLogin');
        const userPassword = document.querySelector('#passwordLogin');
        const checkEmailResult = checkEmail(userEmail.value);
        const checkPasswordResult = checkPassword(userPassword.value);
        return resultLogin(checkEmailResult, checkPasswordResult);
    })
}

const checkEmail = email => store.find((value) => value.email === email);

const checkPassword = password => store.find((value) => value.password === password);

const resultLogin = ((email, password) => {
    const resultCheckLogin = document.querySelector('#resultCheckLogin');
    resultCheckLogin.innerHTML = ' ';
    email === undefined || password === undefined
        ? resultCheckLogin.insertAdjacentHTML('beforeend', '<span class="resultLoginFalse">¡No puedes pasar!</span>')
        : resultCheckLogin.insertAdjacentHTML('beforeend', '<span class="resultLoginTrue">Puedes pasar</span>')
});

loginEventSubmit();

/* Register recibe 6 parámetros:
- nombre
- apellidos
- email
- contraseña
- contraseña2
- edad
Antes de añadir el email al array de users, comprueba que ese
email no existe en el array. Además debe comprobar que la edad
sea mayor de 18 y que las dos contraseñas coinciden.En caso de
no existir lo añadimos al principio del array ( por ahora
solamente el email ). Sí el usuario existe retornamos “El usuario
ya existe en la base de datos”. */

/* deleteUser recibe 1 parámetro:
- email
Debe eliminar el usuario del array users y guardalo en el array
deletedUsers. Para eliminarlo comprobamos que el usuario existe. */

/* Generar la función reset password. Recibe un parámetro ( email ) y retorna una url del tipo
“https://resetpassword.com/” que incluya el email en minúsculas y sustituyendo la arroba y el punto por
un guión medio.
ej:
https://resetpassword.com/email-prueba-com . */

/* Dashboard:
Generar una función que liste los usuarios existentes en el array
users. Para ello utiliza una callback que sí el usuario está en
la última posición del array, muestre el texto “ Pendiente de
activar ”. */

/* Dashboard:
Generar una función que calcule la suma de la edad total de los
usuarios registrados. */