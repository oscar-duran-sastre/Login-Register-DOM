
import { store, deletedUsers } from './store.js';
import { emailExistsInArray } from './check-email-exists.js';
import { sumAgesListener } from './sum-ages.js'

/* Login */

sumAgesListener();

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

/* Register */

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
    const checkEmailExistInArrayResult = checkEmailExistInArray(userEmailRegister.value);

    checkRegisterIsOK(checkEmailMatchResult, checkPasswordMatchResult, checkAgeOver18Result, checkEmailExistInArrayResult);

    if (checkEmailMatchResult && checkPasswordMatchResult && checkAgeOver18Result && checkEmailExistInArrayResult === undefined) {
      register(userEmailRegister.value, userPasswordRegister.value, userFirstNameRegister.value, userLastNameRegister.value, userAgeRegister.value);
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

const register = (email, password, name, surname, age) => store.push(
  { id: store.length + 1, email: email, password: password, name: name, surname: surname, age: age });

registerEventSubmit();

/* Delete User */

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

/* Reset Password */

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

resetPassword();

/* List Users */

const listUsersForm = document.querySelector('#listUsers');

const listUsersChecks = () => {
  listUsersForm.addEventListener('submit', event => {
    event.preventDefault();
    // const emailInputListUsers = document.querySelector('#emailListUsers');
    // const emailExistsInArrayResult = emailExistsInArray(emailInputListUsers.value);
    // if (emailExistsInArrayResult === -1) {
    //   return wrongEmail()
    // }
    return listUsers();
  });
};

const resultListUsers = document.querySelector('#resultListUsers');

// const wrongEmail = () => {
//   resultListUsers.innerHTML = ' ';
//   resultListUsers.insertAdjacentHTML('beforeEnd',
//     `<span class=resultLoginFalse>Este email no existe en nuestra base de datos.</span>`);
// }

const listUsers = (() => {
  resultListUsers.innerHTML = ' ';
  store.forEach((value) => {
    resultListUsers.insertAdjacentHTML('beforeEnd',
      `<ul class="navbar-nav resultLoginTrue">
        <li class="nav-item">${value.id}</li>
        <li class="nav-item">${value.email}</li>
        <li class="nav-item">${value.password}</li>
        <li class="nav-item">${value.name}</li>
        <li class="nav-item">${value.surname}</li>
        <li class="nav-item">${value.age}</li>
      </ul>`)
  })
});

listUsersChecks();
