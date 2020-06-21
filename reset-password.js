
import { store } from './store.js';

const resetPasswordForm = document.querySelector('#resetPasswordForm');

const resetPassword = () => {
    resetPasswordForm.addEventListener('submit', event => {
        event.preventDefault();
        const emailResetPasswordInput = document.querySelector('#emailResetPassword');

        const emailExistsResult = emailExists(emailResetPasswordInput.value);

        const modifiedEmail = modifyEmail(emailResetPasswordInput.value);

        printResetPasswordResult(emailExistsResult, modifiedEmail);
    });
};

const emailExists = email => store.find((value) => value.email === email);

const modifyEmail = (email) => {
    const replaceAt = email.replace('@', '-');
    const replaceDot = replaceAt.replace('.', '-');
    return replaceDot;
};

const printResetPasswordResult = (email, emailModified) => {
    resultResetPassword.innerHTML = ' ';
    if (email !== undefined) {
        return resultResetPassword.insertAdjacentHTML('beforeEnd',
            `<span class=resultLoginTrue>https://resetpassword.com/${emailModified}</span>`);
    }
    return store.forEach(
        resultResetPassword.insertAdjacentHTML('beforeend',
            '<span class=resultLoginFalse>Este email no existe en nuestra base de datos.</span>'))
}

export { resetPassword };
