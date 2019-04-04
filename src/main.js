firebase.initializeApp(window.data.config);
const db = firebase.database();
//Añadir evento al boton Sign In con correo y contraseña 
const loginEmail = (email, pass) =>{
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then((user) => {
        onNavItemClick('//timeLine');
        db.ref("/users/" + user.uid).once("value")
        .then(function(snapshot) {
            var username = (snapshot.val() && snapshot.val().name)  || 'Anonymous';
            console.log(snapshot.val())
            name = username;
            email1 = email;
            photo = "https://drogaspoliticacultura.net/wp-content/uploads/2017/09/placeholder-user.jpg";
            showProfile(name, email1, photo);

        });
    })
    .catch(e => {
        document.querySelector("#messageEmail").style.display = "block";
        const message = e.message;
        document.querySelector("#messageEmail").innerHTML = message;
    });
};
//Añadir evento al boton Login con correo y contraseña
const signUp = (email, pass, name1, last) =>{
    const nameComplete = name1 + last;
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(user =>{
        onNavItemClick('/timeLine');
        window.data.saveData(user.uid, nameComplete, user.email);
        name = nameComplete;
        email1 = email;
        photo = "https://drogaspoliticacultura.net/wp-content/uploads/2017/09/placeholder-user.jpg";
        post = null;
        showProfile(name, email1, photo);
    })
    .catch(e => {
        document.querySelector("#messageEmailSU").style.display = "block";
        const message = e.message;
        document.querySelector("#messageEmailSU").innerHTML = message;
    });
};
//Añadir evento al boton de Log Out
const logOut = () =>{
    document.querySelector("#logIn").style.display = "block";
    firebase.auth().signOut();
};
//Añadir un listener en tiempo real y guardar data en realtime
// firebase.auth().onAuthStateChanged( firebaseUser =>{
//     const btnLogOut = document.querySelector("#buttonLogOut");
//     if(firebaseUser){
//         btnLogOut.classList.remove("hide");
//         document.querySelector("#signUp").style.display = "none";
//         document.querySelector("#logIn").style.display = "none";
//     }else{
//         btnLogOut.classList.add("hide");
//     };
// });
//Login con google
const google = () =>{
    firebase.auth().signInWithPopup(window.data.provider).then(function(result){
        onNavItemClick('/timeLine');
        window.data.sendDataGoogle(result.user);
        console.log(result.user);
    return result.user;
    }).then(()=>{
        timeLinePosts();
    });
    
};
//Login con Facebook
const facebook = () =>{
    firebase.auth().signInWithPopup(window.data.providerFace).then((result) =>{
        onNavItemClick('/timeLine');
        window.data.sendDataGoogle(result.user);
        console.log(result.user);
        const name = result.user.displayName;
        const email = result.user.email;
        const photo = result.user.photoURL;
        timeLinePosts();
        // showProfile(name, email, photo);
        return result.user;
    });
};
//Funcion para mostrar la información del perfil
const showProfile = (name, email, photo) =>{
    document.querySelector("#profile").innerHTML = ` <img  src="${photo}"> 
    ${name}
    ${email}`;
};
//mostrar modal 
const showModal =() =>{
    var modal = document.querySelector("#modal");
    modal.style.marginTop = "100px";
    modal.style.left = ((document.body.clientWidth-350) / 2) +  "px";
    modal.style.display = "block";
};
//Almacenar los post en firebase 
const savePost = () =>{
    let messagePost = document.querySelector("#post").value;
    window.data.createPost(messagePost);
    document.querySelector("#post").value = "";
};
//Mostrar los post en pantalla
const timeLinePosts = () =>{
const printPost = firebase.database().ref('posts/');
printPost.on('child_added', function(s) {
    const user = s.val();
    let section = document.createElement("section");
    console.log(section);
    let btnUpdate = document.createElement("button");
    let btnDelete = document.createElement("button");
    let spanName = document.createElement("span");
    let span = document.createElement("span");
    let text = document.createTextNode(user.contenido);
    let userName = document.createTextNode(user.autor);
    btnDelete.textContent = 'Eliminar';
    btnUpdate.textContent = 'Editar';
    spanName.appendChild(userName);
    span.appendChild(text);
    section.appendChild(spanName);
    section.appendChild(span);
    section.appendChild(btnUpdate);
    section.appendChild(btnDelete);
    console.log(document.querySelector(".postSection"));
    document.querySelector(".postSection").appendChild(section);
});
};
//Quitar las comillas a la las rutas 
const socialNetwork = {
    "loginEmail" : loginEmail,
    "signUp" : signUp,
    "google" : google,
    "facebook": facebook,
    "timeLine": timeLinePosts,
};



//Función para conteo de me gusta 
// let i=0;
// document.querySelector("#heart").addEventListener("click", () => {
//     i++;
//     document.querySelector("#hearti").innerHTML = i;

//Limpiar y ocultar campos de Login 
// const hideLogIn = () =>{
//     txtEmailSignUp.value = "";
//     txtPasswordSignUp.value = "";
//     nameUser.value = "";
//     lastNameUser.value = "";
//     document.querySelector("#signUp").style.display = "block";
//     document.querySelector("#logIn").style.display = "none"; 
// };

//Ocultar modal 
// const hideModal = () =>{
//     document.querySelector("#modal").style.display = "none";
// };
// document.querySelector("#toPost").addEventListener("click", hideModal);