
import { store, deletedUsers } from './store.js';

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

const registerForm = document.querySelector('#registerForm');

const registerEventSubmit = () => {
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
    const checkEmailExitsInArrayResult = checkEmailExitsInArray(userEmailRegister.value);

    checkRegisterIsOK(checkEmailMatchResult, checkPasswordMatchResult, checkAgeOver18Result, checkEmailExitsInArrayResult);

    if (checkEmailMatchResult && checkPasswordMatchResult && checkAgeOver18Result && checkEmailExitsInArrayResult === undefined) {
      register(userEmailRegister.value, userPasswordRegister.value, userFirstNameRegister.value, userLastNameRegister.value, userAgeRegister.value);
    }
  });
};

const checkEmailMatch = ((email1, email2) => email1 === email2);

const checkPasswordMatch = ((password1, password2) => password1 === password2);

const checkAgeOver18 = (age => age >= 18);

const checkEmailExitsInArray = email => store.find((value) => value.email === email);

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

const register = (email, password, name, surname, age) => store.push(
  { id: store.length + 1, email: email, password: password, name: name, surname: surname, age: age });

registerEventSubmit();

/* deleteUser recibe 1 parámetro:
- email
Debe eliminar el usuario del array users y guardalo en el array
deletedUsers. Para eliminarlo comprobamos que el usuario existe. */

const deleteForm = document.querySelector('#deleteForm');

const checkEmailsMatch = () => {
  deleteForm.addEventListener('submit', event => {
    event.preventDefault();

    const userEmail = document.querySelector('#emailDelete');
    const userEmailRepit = document.querySelector('#emailDeleteRepit');

    const emailsMatchResult = emailsMatch(userEmail.value, userEmailRepit.value);
    const emailExistsInArrayResult = emailExistsInArray(userEmail.value);

    messagesDeleteForm(emailsMatchResult, emailExistsInArrayResult);

    if (emailsMatchResult === true && emailExistsInArrayResult !== -1) {
      deleteUser(emailExistsInArrayResult);
    }
  })
}

const emailsMatch = ((email1, email2) => email1 === email2);

const emailExistsInArray = email => store.findIndex((value) => value.email === email);

const deleteUser = (index => {
  const deletedUser = store.splice(index, 1);
  deletedUsers.push(deletedUser);
  console.log(store);
  console.log(deletedUsers);
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

checkEmailsMatch();

/* Generar la función reset password. Recibe un parámetro ( email ) y retorna una url del tipo
“https://resetpassword.com/” que incluya el email en minúsculas y sustituyendo la arroba y el punto por
un guión medio.
ej:
https://resetpassword.com/email-prueba-com . */

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
  return resultResetPassword.insertAdjacentHTML('beforeend',
    '<span class=resultLoginFalse>Este email no existe en nuestra base de datos.</span>')
}

resetPassword();

/* Dashboard:
Generar una función que liste los usuarios existentes en el array
users. Para ello utiliza una callback que sí el usuario está en
la última posición del array, muestre el texto “ Pendiente de
activar ”. */

const header = document.querySelector('#header');

const listUsers = email => {

}

/* Dashboard:
Generar una función que calcule la suma de la edad total de los
usuarios registrados. */

/* toogle card */

// const header = document.querySelector('#header');

// const headerEventListener = () => {
//     header.addEventListener('submit', event => {
//         event.preventDefault();
//         const userEmail = document.querySelector('#headerLinkLogin');
//         const userPassword = document.querySelector('#headerLinkRegister');
//         const userPassword = document.querySelector('#headerLinkDeleteUser');
//         const userPassword = document.querySelector('#headerLinkPasswordRecovery');
//         const userPassword = document.querySelector('#headerLinkUsersList');
//         const checkEmailResult = checkEmail(userEmail.value);
//         const checkPasswordResult = checkPassword(userPassword.value);
//         return resultLogin(checkEmailResult, checkPasswordResult);
//       });
// }

// headerEventListener();
