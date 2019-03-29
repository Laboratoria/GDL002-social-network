window.data = {
    provider: new firebase.auth.GoogleAuthProvider(),
    providerFace: new firebase.auth.FacebookAuthProvider(),
    config: {
        apiKey: "AIzaSyBImEucNY2TK77Vvs1dmdQYYGi8jduZ4bk",
        authDomain: "parentips-93346.firebaseapp.com",
        databaseURL: "https://parentips-93346.firebaseio.com",
        projectId: "parentips-93346",
        storageBucket: "parentips-93346.appspot.com",
        messagingSenderId: "77351177292"
    },

    saveData: (uid, name, email) =>{
        let user = {
            uid: uid,
            name: name,
            email: email ,
            photo: "https://drogaspoliticacultura.net/wp-content/uploads/2017/09/placeholder-user.jpg",
            post: "null",
        }
        firebase.database().ref("users/" + uid)
        .set(user);
        // firebase.database().collection("users/" + user.uid +  "Post/").add({
        //     Contenido: "Hola",
        //     Fecha: 29/03/2019
        // });
    },

    sendDataGoogle: (user) =>{
        const users = {
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            post: "null",
        }
        firebase.database().ref("users/" + user.uid)
        .set(users);
    }
};