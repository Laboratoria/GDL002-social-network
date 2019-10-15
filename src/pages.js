 function logKey(e) {
    key = (document.all) ? e.keyCode : e.which;
    if (key==13) btnLogIn();
  }

// document.querySelector(".btnLogOut").addEventListener("click", close);

// document.querySelector(".logInPassword").addEventListener('keypress', logKey);
// //Función del enter

// //Función que muestra ¿Quienes somos? y ocualta las demás pantallas
// function pageInformation (){
//   document.querySelector(".aboutUs").style.display = "block";
//   document.querySelector(".insideFirstPage").style.display = "none";
// document.querySelector(".createAccountPage").style.display = "none";
// document.querySelector(".logInPage").style.display = "none";
// document.querySelector(".welcomePage").style.display = "none";
// }
// document.querySelector(".pageInformation").addEventListener("click", pageInformation);

// var user = firebase.auth().currentUser;



// function googleAccount(){
//   var provider = new firebase.auth.GoogleAuthProvider();
//   provider.addScope('profile');
//   provider.addScope('https://www.googleapis.com/auth/drive');
//   firebase.auth().signInWithRedirect(provider);
//   //add the code below to your previous lines
//   firebase.auth().getRedirectResult().then(function(authData) {
//       console.log(authData);
//   }).catch(function(error) {
//       console.log(error);
//   });
// }

// document.querySelector(".btnGoogle").addEventListener("click", googleAccount);


// function facebookAccount(){
//  //creo el provider de autenticación
// var provider = new firebase.auth.FacebookAuthProvider();
//  // opcionalmente modifico el scope
//  provider.addScope('user_friends');
//  // accedo al servicio de autenticación
// var authService = firebase.auth();
// // evento para el botón de login con facebook
//  document.querySelector('.btnFacebook').addEventListener('click', function() {
//  // autentico con Facebook
//  authService.signInWithPopup(provider)
//          .then(function(result) {
//             //todo correcto
//             console.log('autenticado usuario ', result.user);
//         })         .catch(function(error) {
//             console.log('Detectado un error:', error);
//         });
// }) 
// }
//  document.querySelector(".btnFacebook").addEventListener("click", facebookAccount);

function pageInformation (){
  onNavItemClick(`/aboutUs`);
  }
   document.querySelector(".pageInformation").addEventListener("click", pageInformation);
  
function goWelcomePage (){
  onNavItemClick(`/firstPage`);
    }
    

const endSesion =()=>{
  onNavItemClick(`/firstPage`);
  close();
}
document.querySelector(".btnLogOut").addEventListener("click", endSesion);

const homePage=()=>{
  let postArray=[];
  console.log (postArray);
  onNavItemClick(`/home`).then(function(){
 let mypostLost=document.querySelector(".postsLost"); 
 let mypostAdopt=document.querySelector(".postsAdopt");
 mypostLost.innerHTML = "";
 mypostAdopt.innerHTML = "";
  db.collection("lostsPets").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      printLostPets(mypostLost);
      postArray.push(doc);
    });
  });
  db.collection("adoptionPets").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      printAdoptionPets(mypostAdopt);
      postArray.push(doc);
    });
  });
  })/*.then(function(){
    setTimeout(function(){
     let hidenButtons= document.querySelectorAll(".hidden");
     hidenButtons.forEach(function(element) {
      element.style.display= "none";
     });
  },100)
  })*/
}

