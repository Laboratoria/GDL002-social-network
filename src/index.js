// Inicia Cloud Firestore a traves de Firebase
var db = firebase.firestore();
// Crear cuenta
const firebaseNewAccount = () => {
  name =document.querySelector(".createAccountName").value;
 email = document.querySelector(".createAccountEmail").value;
password = document.querySelector(".createAccountPassword").value;

 firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
   verify();
 })
   .catch(function (error) {
     // Handle Errors here.
     let errorMessage = error.message;
     let errors = errorMessages(errorMessage);
     modal(errors);
     console.log("error createacount");
     // ...

   });
}
var user = firebase.auth().currentUser;
//Verificar cuenta
//Función que envía correo de verificación al usuario que se registra
const verify = () => {
  let user = firebase.auth().currentUser;
  console.log(user.displayName)
  user.updateProfile({
    displayName: document.querySelector(".createAccountName").value
    
  })
  user.sendEmailVerification().then(function () {
    modal("Te enviamos un  correo de autentificación");
    console.log("autentificación");
   
  }).catch(function (error) {
    
    console.log("error");
  });
}

//Iniciar sesión
//Función que se ejecuta al dar click en el botón de entrar
function btnLogIn() {
  console.log("Hi");
  //Obtenemos los valores de los inputs
  const email = document.querySelector(".logInEmail").value;
  const password = document.querySelector(".logInPassword").value;
  firebaseLogIn(email, password);

}


const firebaseLogIn = (email, password) => {

  firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
    observer();

  })
    .catch(function (error) {
      // Handle Errors here.
      let errorMessage = error.message;
      let logInError = errorMessages(errorMessage);
      modal(logInError);
      console.log(error.message);
      console.log(error);
      document.querySelector(".btn").setAttribute("class", "btnCreateAccount modalBtn");
      // ...

    });

}
//Función que permite saber si el usurio está activo, es decir que está dentro de su cuenta y abre la pantalla de la red social
const observer = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      activeUser(user);
      // User is signed in.
      let displayName = user.displayName;
    
      console.log(user);
      console.log(user.emailVerified);
      let email = user.email;
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      uid = user.uid;
      let providerData = user.providerData;
      
    } else {
      
    }

  });
}

//Función que desactiva los formularios de registro y de inicio de sesión y activa la pantalla de la red social
const activeUser = (user) => {
  user = user;
  if (user.emailVerified) {
  } else {
   
    const errorMessage = "Verifica tu cuenta";
    console.log("error active");
    modal(errorMessage);
  }
}

// NEW VERSION (fusion)
function edit(id, name, date, description, details, features, contact){
  let elements = [];
  elements.push(document.getElementsByTagName('td'));
  for (let i = 0; i < elements.length; i++){
     elements[i].innerHTML += elements[i];
  }
document.getElementsByTagName('td').value = name, date, description, details, features, contact; //es el nombre de la clase del input
let btn = document.querySelector(".saveBtn");
btn.innerHTML = "Editar";
btn.onclick = function(){
  let petTemplate = db.collection("lostsPets").doc(id);
  let posts = (elements).value;
  return petTemplate.update({
    name: name,
    date: date,
    description: description,
    details: details,
    features: features,
    contact: contact, 
    share: share,
  })
  .then(function() {
        console.log("Document successfully updated!");
        btn.innerHTML = "Guardar";
        document.getElementsByTagName('td').value = "";
        btn.innerHTML = ""
        let select = document.getElementById("shareLost").value;
        share = select;
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
}
}

const lostForm= () =>{
  onNavItemClick("/postLost");
}
showLostPet=()=>{
  onNavItemClick("/lostPet").then(
    () => {
      printLostPets();
    }
  );
  
}


//Nuevo post para mascotas perdidas
function savePost(){
	let name = document.querySelector(".name").value;
	let date = document.querySelector(".date").value;
	let description = document.querySelector(".description").value;
	let details = document.querySelector(".details").value;
	let features = document.querySelector(".features").value;
  let contact = document.querySelector(".contact").value;
  let select = document.querySelector(".shareLost").value;
  let user = firebase.auth().currentUser;
  share = select;
  let who = user.displayName;
  console.log(who);
  let whoId =user.uid;
  console.log (whoId);
  whoId=whoId
  who=who;
db.collection("lostsPets").add({ //agrega un ID automatico a cada usuario
    name: name,
    date: date,
    description: description,
    details: details,
    features: features,
    contact: contact, 
    share:share,
    who:who,
    whoId:whoId,

})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    document.querySelector(".name").value = "";
    document.querySelector(".date").value = "";
    document.querySelector(".description").value = "";
    document.querySelector(".details").value = "";
    document.querySelector(".features").value = "";
    document.querySelector(".contact").value = "";
    showLostPet();
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

}


const printLostPets=()=>{
//leer documentos
let table = document.querySelector(".printInfo"); //es donde se va imprimir la info de los usuarios
console.log (table);
db.collection("lostsPets").onSnapshot((querySnapshot) => { /*el onSnapshot escucha  cada  vez que se haga un 
cambio en la base de datos, lo refleja en la página */
	table.innerHTML = ""; /*es para que la table de HTML, este vacía y se vayan agregando los 
  nuevos usuarios porque sino va a repetir los datos */
    querySnapshot.forEach((doc) => { //es el ciclo que se va repitiendo por c/u de los objetos creados
        console.log(`${doc.id} => ${doc.data().name}`);
        //es para que jale la data de c/ usuario y la imprima en pantalla
        table.innerHTML += `
        <tr>
        <td> ${doc.data().who}</td><br>
        <td>Nombre: ${doc.data().name}</td><br>
        <td>Visto por última vez: ${doc.data().date}</td><br>
        <td>Descripción: ${doc.data().description}</td><br>
        <td>Placa/Collar/Ropa: ${doc.data().details}</td><br>
        <td>Señas particulares: ${doc.data().features}</td><br>
        <td>Contacto: ${doc.data().contact}</td><br>
        <td><button class="btnsWarning" onclick= edit('${doc.id}', '${doc.data().name}', '${doc.data().date}', '${doc.data().description}', '${doc.data().details}', '${doc.data().features}', '${doc.data().contact}')>Editar</button></td><br>
        <button onclick="ConfirmDeleteLostPet('${doc.id}')">Eliminar</button>
        </tr> `;
    });
});
}
//borrar documentos
function eliminate(id){
	db.collection("lostsPets").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
}); 
}
//Función para cerrar sesión
const close = () => {
  firebase.auth().signOut()
    .then(function () {
      onNavItemClick(`/firstPage`)
      document.querySelector(".firstHeader").style.display = "block";
      document.querySelector(".firstFooter").style.display = "block";
      document.querySelector(".secondHeader").style.display = "none";
      document.querySelector(".secondFooter").style.display = "none";
      document.querySelector("#firstContent").style.display = "block";
      document.querySelector("#secondContent").style.display = "none";

    }).catch(function (error) {
      console.log(error);
    })
}

const socialNetwork = {
  pageLogIn: pageLogIn,
  pageCreateAccount: pageCreateAccount,
  btnLogIn: btnLogIn,
  firebaseNewAccount: firebaseNewAccount,
  close: close,
  showLostPet: showLostPet,
  lostForm:lostForm,
  savePost:savePost,
  showAdoptionPets:showAdoptionPets,
  adoptionForm:adoptionForm,
  savePostAdoption:savePostAdoption,
};


const buttons = () => {

  const allButtons = document.querySelectorAll(".typeButton");
  console.log(allButtons);
  for (let i = 0; i < allButtons.length; i++) {
    if (window.location.pathname == "/logInPage" || window.location.pathname == "/createAccount") {

      allButtons[i].addEventListener("click", function (event) {
        socialNetwork[event.target.dataset.next](document.getElementById(event.target.attributes.dataFirst.value).value,
          document.getElementById(event.target.attributes.dataSecond.value).value);
      });
    }
    else {

      allButtons[i].addEventListener("click", function (event) {
        socialNetwork[event.target.dataset.next]();
      });
    }
  }

}

let contentDiv = document.querySelector('#firstContent');

let routes = {
  '/': `./pages/firstPage.html`,
  '/firstPage': `./pages/firstPage.html`,
  '/aboutUs': `./pages/aboutUs.html`,
  '/logIn': `./pages/logInPage.html`,
  '/createAccount': `./pages/createAccount.html`,
  '/lostPet': `./pages/lostPet.html`,
  '/postLost': `./pages/postLost.html`,
  '/adoptionPets':`./pages/adoptionPets.html`,
  '/postAdoptionPets':`./pages/postAdoptionPets.html`,
};

window.onpopstate = () => {
  fetchContent(routes[window.location.pathname])
    .then(html => contentDiv.innerHTML = html);
}

let onNavItemClick = (pathName) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  return fetchContent(routes[window.location.pathname])
    .then(html => contentDiv.innerHTML = html)
    .then(() => buttons());
}

const fetchContent = (url) => fetch(url)
  .then(function (response) {

    return response.text()
  })
  .then(function (html) {


    return html;
  })
  .catch(function (err) {
    console.log('Failed to fetch page: ', err);
  });

fetchContent(routes[window.location.pathname])
  .then(html => contentDiv.innerHTML = html)
  .then(() => buttons());




function pageLogIn() {
  onNavItemClick("/logIn");
  console.log("DONE!!");
}

function pageCreateAccount() {
  onNavItemClick('/createAccount');
}




//Función que llama a la información que va dentro del formulario
function modal(message) {
  let btn = document.querySelector(".modalBtn");
  btn.classList.add("btn-primary")
  document.querySelector(".modal-body").innerHTML = message;

}





//Función para mostrar mensajes de error en español
const errorMessages = (errorMessage) => {
  switch (errorMessage) {
    case 'The password must be 6 characters long or more.':
      return "La contraseña debe tener al menos 6 dígitos";
    case 'The email address is badly formatted.':
      return "Introduce un email válido";
    case "The email address is already in use by another account.":
      return "Este email ya está registrado";
    case "The password is invalid or the user does not have a password.":
      return "La contrseña es incorrecta";
    case "There is no user record corresponding to this identifier. The user may have been deleted.":
      return "No hay un usuario registrado con éste correo";
      break;
    default:
      return errorMessage;
  }
}
//Si la sesión está iniciada en el navegador
const sesiónIniciada = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      
      document.querySelector(".firstHeader").style.display = "none";
      document.querySelector(".firstFooter").style.display = "none";
      document.querySelector(".secondHeader").style.display = "block";
      document.querySelector(".secondFooter").style.display = "block";
      document.querySelector("#firstContent").innerHTML="";
    } else {
      document.querySelector(".firstHeader").style.display = "block";
      document.querySelector(".firstFooter").style.display = "block";
      document.querySelector(".secondHeader").style.display = "none";
      document.querySelector(".secondFooter").style.display = "none";
      // No user is signed in.
    }
  });
}

sesiónIniciada();

//Nuevo post para mascotas en adopción
function savePostAdoption(){
	let name = document.querySelector(".nameA").value;
	let description = document.querySelector(".descriptionA").value;
	let details = document.querySelector(".detailsA").value;
	let features = document.querySelector(".featuresA").value;
  let contact = document.querySelector(".contactA").value;
  let like=0;
  let select = document.querySelector(".shareAdoption").value;
    share = select;
    let user = firebase.auth().currentUser;
    share = select;
    let who = user.displayName;
    console.log(who);
  
    let whoId =user.uid;
    console.log (whoId);
    whoId=whoId
    who=who;
  
db.collection("adoptionPets").add({ //agrega un ID automatico a cada usuario
    name: name,
    description: description,
    details: details,
    features: features,
    contact: contact, 
    like:like,
    share:share,
    who:who,
    whoId:whoId,
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    document.querySelector(".nameA").value = "";
    document.querySelector(".descriptionA").value = "";
    document.querySelector(".detailsA").value = "";
    document.querySelector(".featuresA").value = "";
    document.querySelector(".contactA").value = "";
  
    showAdoptionPets();
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

}


const printAdoptionPets=()=>{
//leer documentos
let tableAdopt = document.querySelector(".printInfoAdption"); //es donde se va imprimir la info de los usuarios
console.log (tableAdopt);
db.collection("adoptionPets").onSnapshot((querySnapshot) => { /*el onSnapshot escucha  cada  vez que se haga un 
cambio en la base de datos, lo refleja en la página */
	tableAdopt.innerHTML = ""; /*es para que la table de HTML, este vacía y se vayan agregando los 
	nuevos usuarios porque sino va a repetir los datos */
    querySnapshot.forEach((doc) => { //es el ciclo que se va repitiendo por c/u de los objetos creados
        console.log(`${doc.id} => ${doc.data().name}`);
        //es para que jale la data de c/ usuario y la imprima en pantalla
        tableAdopt.innerHTML += `
        <tr>
        <td>${doc.data().who}</td><br>
        <td>Nombre: ${doc.data().name}</td><br>
        <td>Descripción: ${doc.data().description}</td><br>
        <td>Convive con otras mascotas: ${doc.data().details}</td><br>
        <td>Caracter: ${doc.data().features}</td><br>
        <td>Contacto: ${doc.data().contact}</td><br>
        <button  onclick="ConfirmDelete('${doc.id}')">Eliminar</button>
        <div class= "likeCount"><button  id='${doc.id}' onclick="addLikes('${doc.id}', '${doc.data().like}')">Like</button>
        </tr> `;
    });
    console.log(document.querySelector(".likeCount"));
});
}
function ConfirmDeleteLostPet(id)
{
  var x = confirm("¿Estás seguro de eliminarlo?");
  if (x)
  eliminate(id);
  else
    return false;
 }

function ConfirmDelete(id)
{
  var x = confirm("¿Estás seguro de eliminarlo?");
  if (x)
  eliminateAdopt(id);
  else
    return false;
 }
//borrar documentos
function eliminateAdopt(id){
	db.collection("adoptionPets").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
}); 
}



function showAdoptionPets (){
  onNavItemClick("/adoptionPets").then(()=>{
    printAdoptionPets();
  });
}
function adoptionForm(){
  onNavItemClick("/postAdoptionPets");
}


function addLikes(id, likes) {
  likes++;

  likes = parseInt(likes);
  let washingtonRef = db.collection("adoptionPets").doc(id);

  return washingtonRef
    .update({
      like: likes,
      
    }).then(function(){
      let washingtonRef = (db.collection("adoptionPets").doc(id)).id;
    
       let buttonLike= document.getElementById(washingtonRef);
        buttonLike.innerHTML+= " " + likes;
      })
    .then(function() {
      console.log('Document successfully updated!');
    })

    .catch(function(error) {
      // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
}