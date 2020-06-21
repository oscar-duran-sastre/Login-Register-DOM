
const header = document.querySelector('#header');

const headerEventListener = () => {
  header.addEventListener('click', event => {
    event.preventDefault();
    console.log(event);
    console.log('hola');
    const linkLogin = document.querySelector('#headerLinkLogin');
    const linkRegister = document.querySelector('#headerLinkRegister');
    const linkDeleteUser = document.querySelector('#headerLinkDeleteUser');
    const linkPasswordRecovery = document.querySelector('#headerLinkPasswordRecovery');
    const linkUserList = document.querySelector('#headerLinkUsersList');

    const login = document.querySelector('#login');
    const register = document.querySelector('#register');
    const deleteUser = document.querySelector('#deleteUser');
    const resetPassword = document.querySelector('#resetPassword');
    const listUsers = document.querySelector('#listUsers');

    const loginRow = document.querySelector('#loginRow');
    const registerRow = document.querySelector('#registerRow');
    const deleteUserRow = document.querySelector('#deleteUserRow');
    const resetPasswordRow = document.querySelector('#resetPasswordRow');
    const listUsersRow = document.querySelector('#listUsersRow');
    // const checkEmailResult = checkEmail(userEmail.value);
    // const checkPasswordResult = checkPassword(userPassword.value);
    // return resultLogin(checkEmailResult, checkPasswordResult);

  });
}

headerEventListener();
