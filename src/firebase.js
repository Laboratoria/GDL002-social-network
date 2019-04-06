import logInTemplate from './templates/logIn';
import registerTemplate from './templates/register';
import wallTemplate from './templates/wall';

import { elementClick, routes } from './index';

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      elementClick('/muro');
      var user = firebase.auth().currentUser;
      if(user != null){
      const emailId = user.email;
      console.log(emailId);
      document.getElementById('saludo').innerHTML = 'hola bienvenido' + emailId;
      }
    } else {
      // No user is signed in.
      elementClick('/ingresar');
    }
  });


  //Registrar Usuario con correo y contraseña
// document.querySelector('.btn-register').addEventListener('click', signUp);
export function signUp () {
const emailSignUp = document.getElementById('email').value;
const passwordSignUp = document.getElementById('password').value;
firebase.auth().createUserWithEmailAndPassword(emailSignUp, passwordSignUp).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // ...
  });
}

// Iniciar sesión

// document.querySelector('.btn-logIn').addEventListener('click', logIn);
export function logIn() {
    const emailLogIn = document.getElementById('emailIn').value;
    const passwordLogIn = document.getElementById('passwordIn').value;
    firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
    }

// Cerrar sesión
export function logOut() {
    firebase.auth().signOut();
};