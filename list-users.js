
import { store } from './store.js';

const listUsersForm = document.querySelector('#listUsers');

const listUsersChecks = () => {
    listUsersForm.addEventListener('submit', event => {
        event.preventDefault();
        return listUsers();
    });
};

const resultListUsers = document.querySelector('#resultListUsers');

const listUsers = (() => {
    resultListUsers.innerHTML = ' ';
    store.forEach((value) => {
        resultListUsers.insertAdjacentHTML('beforeEnd',
            `<ul class="navbar-nav resultUsersList">
        <li class="nav-item"><span class="listUsersCards">Número de usuario: </span>${value.id}</li>
        <li class="nav-item"><span class="listUsersCards">Email: </span>${value.email}</li>
        <li class="nav-item"><span class="listUsersCards">Password: </span>${value.password}</li>
        <li class="nav-item"><span class="listUsersCards">Nombre: </span>${value.name}</li>
        <li class="nav-item"><span class="listUsersCards">Apellido: </span>${value.surname}</li>
        <li class="nav-item"><span class="listUsersCards">Edad: </span>${value.age} años</li>
      </ul>`)
    })
});

export { listUsersChecks };
