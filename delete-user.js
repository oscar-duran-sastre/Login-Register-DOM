
import { store, deletedUsers } from './store.js';
import { emailExistsInArray } from './check-email-exists.js';
import { showSumAges } from './sum-ages.js'

const deleteForm = document.querySelector('#deleteForm');

const deleteUser = () => {
    deleteForm.addEventListener('submit', event => {
        event.preventDefault();

        const userEmail = document.querySelector('#emailDelete');
        const userEmailRepit = document.querySelector('#emailDeleteRepit');

        const emailsMatchResult = emailsMatch(userEmail.value, userEmailRepit.value);
        const emailExistsInArrayResult = emailExistsInArray(userEmail.value);

        messagesDeleteForm(emailsMatchResult, emailExistsInArrayResult);

        if (emailsMatchResult === true && emailExistsInArrayResult !== -1) {
            checkEmailsMatch(emailExistsInArrayResult);
        }
    })
}

const emailsMatch = ((email1, email2) => email1 === email2);

const checkEmailsMatch = (index => {
    const deletedUser = store.splice(index, 1);
    deletedUsers.push(deletedUser);
    return showSumAges();
})

const messagesDeleteForm = ((email, emailExists) => {
    resultCheckDelete.innerHTML = ' ';

    if (email === false) {
        return resultCheckDelete.insertAdjacentHTML('beforeend',
            '<span class="resultLoginFalse">Los emails no coinciden.</span>');
    }
    if (emailExists === -1) {
        return resultCheckDelete.insertAdjacentHTML('beforeend',
            '<span class="resultLoginFalse">Este email no existe en nuestra base de datos.</span>')
    }
    return resultCheckDelete.insertAdjacentHTML('beforeend',
        '<span class="resultLoginTrue">El usuario ha sido eliminado correctamente.</span>')
});

export { deleteUser };
