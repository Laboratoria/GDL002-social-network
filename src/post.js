// Inicia Cloud Firestore a traves de Firebase
var db = firebase.firestore();
// Crear cuenta

// NEW VERSION (fusion)
 //editar documentos
function editLostPost(id, name, date, description, details, features, contact,select, user, share, who, whoId,fileButton, href){ //son los parametros
  var fileButton = document.querySelector("#fileButton");
  fileButton.addEventListener('change', function(e){
    var file = e.target.files[0];
    console.log(file.name);
    var storageRef = firebase.storage().ref('petPictures/' + file.name);
    var task = storageRef.put(file);
    
    var downloadURL = task.snapshot.ref.getDownloadURL().then(function (result){
      
  })
  });
  
  document.querySelector("#img").value =href;
  document.querySelector(".lostForm").style.display="block";
  document.querySelector("#lostForm").style.display="none";
  let saveBtn = document.querySelector(".saveBtn");
  saveBtn.innerHTML="Editar";
  eliminate(id);
	 document.querySelector(".name").value = name; 
	document.querySelector(".date").value = date;
	document.querySelector(".description").value = description;
	  document.querySelector(".details").value = details;
	 document.querySelector(".features").value = features;
    document.querySelector(".contact").value = contact;

   select = document.querySelector(".shareLost").value;
   user = firebase.auth().currentUser;
  share = select;
   who = user.displayName;
  console.log(who);
   whoId =user.uid;
  console.log (whoId);
  whoId=whoId
  who=who;
	saveBtn.onclick = function(){
		let petTemplate = db.collection("lostsPets").doc(id);
		let posts = document.querySelector(".printInfo").value;
	
return petTemplate.update({
    name: name,
    date: date,
    description: description,
    details: details,
    features: features,
    contact: contact, 
    share: share,
    who: who,
    whoId: whoId,
    img: fileButton,
    location:  href,
})
.then(function() {
    console.log("Document successfully updated!");
    saveBtn.innerHTML = 'Editar';
   // console.log(location);
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});

	}
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
  var fileButton = document.querySelector("#fileButton").value;
  var href=document.querySelector("#img").value;
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
    img: fileButton,
    location:href,
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
    document.querySelector(".lostForm").style.display="none";
    document.querySelector("#lostForm").style.display="block";
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

}


const printLostPets=(table)=>{
//leer documentos
db.collection("lostsPets").onSnapshot((querySnapshot) => { /*el onSnapshot escucha  cada  vez que se haga un 
cambio en la base de datos, lo refleja en la página */
	table.innerHTML = ""; /*es para que la table de HTML, este vacía y se vayan agregando los 
  nuevos usuarios porque sino va a repetir los datos */ 
  querySnapshot.forEach((doc) => { //es el ciclo que se va repitiendo por c/u de los objetos creados

        //es para que jale la data de c/ usuario y la imprima en pantalla
        table.innerHTML += `
        <div class = "table"><tr><br>
      <td><img class = "picture" src = "${doc.data().location}"></td><br>
        <td> ${doc.data().who}</td><br>
        <td>Nombre: ${doc.data().name}</td><br>
        <td>Visto por última vez: ${doc.data().date}</td><br>
        <td>Descripción: ${doc.data().description}</td><br>
        <td>Placa/Collar/Ropa: ${doc.data().details}</td><br>
        <td>Señas particulares: ${doc.data().features}</td><br>
        <td>Contacto: ${doc.data().contact}</td><br>
        <td><button class="btnsWarning hidden" onclick= "editLostPost('${doc.id}', '${doc.data().name}', '${doc.data().date}', '${doc.data().description}', '${doc.data().details}', '${doc.data().features}', '${doc.data().contact}')">Editar</button></td><br>
        <button class= "hidden" onclick="ConfirmDeleteLostPet('${doc.id}')">Eliminar</button><br>
        
        </tr> </div>`;
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
    var fileButton = document.querySelector("#fileButtonAdopt").value;
    var href=document.querySelector("#adoptImg").value;
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
    img:fileButton,
    location:href,
})
.then(function(docRef) {
    
    document.querySelector(".nameA").value = "";
    document.querySelector(".descriptionA").value = "";
    document.querySelector(".detailsA").value = "";
    document.querySelector(".featuresA").value = "";
    document.querySelector(".contactA").value = "";
    document.querySelector(".adoptionForm").style.display="none";
    document.querySelector("#adoptionForm").style.display="block";
    showAdoptionPets();
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

}


const printAdoptionPets=(table)=>{
//leer documentos
db.collection("adoptionPets").onSnapshot((querySnapshot) => { /*el onSnapshot escucha  cada  vez que se haga un 
cambio en la base de datos, lo refleja en la página */
	table.innerHTML = ""; /*es para que la table de HTML, este vacía y se vayan agregando los 
	nuevos usuarios porque sino va a repetir los datos */
    querySnapshot.forEach((doc) => { //es el ciclo que se va repitiendo por c/u de los objetos creados
        //es para que jale la data de c/ usuario y la imprima en pantalla
        table.innerHTML += `
        <div class = "table">
        <tr><br>
        <td><img class = "pictureAdopt" src = "${doc.data().location}"></td><br>
        <td>${doc.data().who}</td><br>
        <td>Nombre: ${doc.data().name}</td><br>
        <td>Descripción: ${doc.data().description}</td><br>
        <td>Convive con otras mascotas: ${doc.data().details}</td><br>
        <td>Caracter: ${doc.data().features}</td><br>
        <td>Contacto: ${doc.data().contact}</td><br>
        <button  class = "hidden" onclick="ConfirmDelete('${doc.id}')">Eliminar</button>
        <div class= " likeCount"><button  class = "hidden"  id='${doc.id}' onclick="addLikes('${doc.id}', '${doc.data().like}')">Like</button>
        <td><button class="btnsWarning hidden" onclick= "editAdoptionPost('${doc.id}', '${doc.data().name}', '${doc.data().date}', '${doc.data().description}', '${doc.data().details}', '${doc.data().features}', '${doc.data().contact}')">Editar</button></td><br>
        </tr> <br></div>` ;
    });
});
}


function editAdoptionPost(id, name, date, description, details, features, contact,select, user, share, who, whoId,fileButton, href){ //son los parametros
  var fileButton = document.querySelector("#fileButtonAdopt");
  fileButton.addEventListener('change', function(e){
    var file = e.target.files[0];
    console.log(file.name);
    var storageRef = firebase.storage().ref('petPictures/' + file.name);
    var task = storageRef.put(file);
    
    var downloadURL = task.snapshot.ref.getDownloadURL().then(function (result){
      
      document.querySelector("#adoptImg").value =result;
  })
  });
  document.querySelector("#adoptImg").value =href;
  document.querySelector(".adoptionForm").style.display="block";
  document.querySelector("#adoptionForm").style.display="none";
  let saveBtn = document.querySelector(".saveBtn");
  saveBtn.innerHTML="Editar";
  eliminateAdopt(id);
   document.querySelector(".nameA").value = name; 
	document.querySelector(".descriptionA").value = description;
	  document.querySelector(".detailsA").value = details;
	 document.querySelector(".featuresA").value = features;
	  document.querySelector(".contactA").value = contact;

    select = document.querySelector(".shareAdoption").value;
    user = firebase.auth().currentUser;
   share = select;
    who = user.displayName;
   console.log(who);
    whoId =user.uid;
   console.log (whoId);
   whoId=whoId
   who=who;
 

	saveBtn.onclick = function(){
		let petTemplate = db.collection("adoptionPets").doc(id);
	//let posts = document.querySelector(".printInfo").value;
	
return petTemplate.update({
    name: name,
    description: description,
    details: details,
    features: features,
    contact: contact, 
    share: share,
    who: who,
    whoId: whoId,
    img: fileButton,
    location:  href,
})
.then(function() {
    console.log("Document successfully updated!");
    saveBtn.innerHTML = 'Editar';
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});

	}
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
let table = document.querySelector(".printInfoAdption"); //es donde se va imprimir la info de los usuarios

    printAdoptionPets(table);
    document.querySelector(".adoptionForm").style.display="none";
    document.querySelector("#adoptionForm").style.display="block";
  });
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
