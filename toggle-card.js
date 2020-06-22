
const linkLogin = document.querySelector('.headerLinkLogin');
const linkRegister = document.querySelector('.headerLinkRegister');
const linkDeleteUser = document.querySelector('.headerLinkDeleteUser');
const linkPasswordRecovery = document.querySelector('.headerLinkPasswordRecovery');
const linkUserList = document.querySelector('.headerLinkUsersList');

const loginRow = document.querySelector('.loginRow');
const registerRow = document.querySelector('.registerRow');
const deleteUserRow = document.querySelector('.deleteUserRow');
const resetPasswordRow = document.querySelector('.resetPasswordRow');
const listUsersRow = document.querySelector('.listUsersRow');

const loginCard = () => {
    linkLogin.addEventListener('click', event => {
        event.preventDefault();
        loginRow.classList.remove('d-none');
        registerRow.classList.add('d-none');
        deleteUserRow.classList.add('d-none');
        resetPasswordRow.classList.add('d-none');
        listUsersRow.classList.add('d-none');
        return;
    });
}

const registerCard = () => {
    linkRegister.addEventListener('click', event => {
        event.preventDefault();
        loginRow.classList.add('d-none');
        registerRow.classList.remove('d-none');
        deleteUserRow.classList.add('d-none');
        resetPasswordRow.classList.add('d-none');
        listUsersRow.classList.add('d-none');
        return;
    });
}

const deleteUserCard = () => {
    linkDeleteUser.addEventListener('click', event => {
        event.preventDefault();
        loginRow.classList.add('d-none');
        registerRow.classList.add('d-none');
        deleteUserRow.classList.remove('d-none');
        resetPasswordRow.classList.add('d-none');
        listUsersRow.classList.add('d-none');
        return;
    });
}

const resetPasswordCard = () => {
    linkPasswordRecovery.addEventListener('click', event => {
        event.preventDefault();
        loginRow.classList.add('d-none');
        registerRow.classList.add('d-none');
        deleteUserRow.classList.add('d-none');
        resetPasswordRow.classList.remove('d-none');
        listUsersRow.classList.add('d-none');
        return;
    });
}

const listUsersCard = () => {
    linkUserList.addEventListener('click', event => {
        event.preventDefault();
        loginRow.classList.add('d-none');
        registerRow.classList.add('d-none');
        deleteUserRow.classList.add('d-none');
        resetPasswordRow.classList.add('d-none');
        listUsersRow.classList.remove('d-none');
        return;
    });
}

export { loginCard, registerCard, deleteUserCard, resetPasswordCard, listUsersCard };
