import { elementClick } from './index';
import { signUp, logIn, logOut } from './firebase';

function homeEvents() {
  const logInTab = document.querySelector('.logInWindow');
  const signUpTab = document.querySelector('.registerWindow');
  const btnSignUp = document.querySelector('.btn-register');
  const btnLogIn = document.querySelector('.btn-logIn');


  if (logInTab) {
    logInTab.addEventListener('click', logInOption);
  }

  if (signUpTab) {
    signUpTab.addEventListener('click', registerOption);

  }

  function logInOption(event) {
    event.preventDefault();
    console.log('loginoption');
    elementClick('/ingresar');
  }

  function registerOption(event) {
    event.preventDefault();
    elementClick('/registrar');
  }


if (btnSignUp) {
  btnSignUp.addEventListener('click', signUp);
}



if (btnLogIn) {
  btnLogIn.addEventListener('click', logIn);
}
}

function wallEvents() {
  const logOutBtn = document.querySelector('#logout');
  if (logOutBtn) {
    logOutBtn.addEventListener('click', logOut);
  }

//Ejecuta boton publicar
const form = document.querySelector('#submit-post');
const datePublished = new Date().toLocaleDateString();
const btnPublish = document.querySelector('#publish');
const actualUser = firebase.auth().currentUser.email;
form.comment.value = '';

  btnPublish.addEventListener('click', (e) => {
    e.preventDefault();
    db.collection("post").add({
      comment: form.comment.value,
      user: actualUser,
      date: datePublished
    })
  })


//Publica los post

const postList = document.querySelector('#post-list');

function createPost(doc){
  let section = document.createElement('section');
  let header = document.createElement('header');
  let user2 = document.createElement('span');
  let date = document.createElement('span');
  let divComment = document.createElement('div');
  let headerComment = document.createElement('div');
  let edit = document.createElement('button');
  let exit = document.createElement('button');
  let comment = document.createElement('p');

  section.setAttribute('data-id', doc.id);
  section.setAttribute('class', 'each-post')

  user2.textContent = doc.data().user;
  date.textContent = doc.data().date;
  edit.textContent = "edit";
  exit.textContent = "x";
  comment.textContent = doc.data().comment;

  section.appendChild(header)
  header.appendChild(user2);
  header.appendChild(date);
  section.appendChild(divComment);
  divComment.appendChild(headerComment);
  headerComment.appendChild(edit);
  headerComment.appendChild(exit);
  divComment.appendChild(comment);
  postList.appendChild(section);

  //Borrar data
  exit.addEventListener('click', (e) => {
    e.stopPropagation();
    let id = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
    db.collection('post').doc(id).delete();
  })
}

// db.collection("post").orderBy('date').get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//   createPost(doc);
//   });
// });

//Escuha en tiempo real
db.collection("post").orderBy('date').onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if (change.type == 'added') {
      createPost(change.doc);
    } else if (change.type == 'removed') {
      let li = postList.querySelector('[data-id=' + change.doc.id + ']');
      postList.removeChild(li);
    }
  })
})

}

export default {
  homeEvents,
  wallEvents
}