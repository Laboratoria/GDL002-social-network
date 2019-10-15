// //Publicaciones

//   // Initialize Cloud Firestore through Firebase
//   var db = firebase.firestore();

// const editProfile = () =>{
//   const name=document.querySelector(".userName").value;
//   const lastName=document.querySelector(".userLastName").value;
//   const age= document.querySelector (".ageUser").value;
//   db.collection("users").add({
//     first: name,
//     last: lastName,
//     born: age
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
//     const name=document.querySelector(".userName").value = "";
//     const lastName=document.querySelector(".userLastName").value = "";
//     const age= document.querySelector (".ageUser").value = "";
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });
// }
// //document.querySelector(".btnSave").addEventListener("click", editProfile);

// //post
// const newPostLostPet = () =>{
//   const name=document.querySelector(".petName").value;
//   const lastName=document.querySelector(".petColor").value;
//   const age= document.querySelector (".petAge").value;
//   db.collection("postLosts").add({
//     first: name,
//     last: lastName,
//     born: age
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
//     const name=document.querySelector(".petName").value= "";
//     const lastName=document.querySelector(".petColor").value="";
//     const age= document.querySelector (".petAge").value="";
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });
// }

// //document.querySelector(".btnPost").addEventListener("click",newPostLostPet );

// // const viewLosts = () =>{
// // db.collection("users").get().then((querySnapshot) => {
// //   querySnapshot.forEach((doc) => {
// //     document.querySelector(".lostPets").innerHTML= doc;
// //       console.log(`${doc.id} => ${doc.data()}`);
// //   });
// // });
// // }

// // viewLosts ();



function editLostpost(id) {

    document.querySelector(".name").value = name;
    document.querySelector(".date").value = date;
    document.querySelector(".description").value = description;
    document.querySelector(".details").value = details;
    document.querySelector(".features").value = features;
    document.querySelector(".contact").value = contact;

    var washingtonRef = db.collection("postLost").doc(id);
    // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
            name: name,
            date: date,
            description: description,
            details: details,
            features: features,
            contact: contact,
        })
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
}