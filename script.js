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
