const lostForm = () => {
    onNavItemClick("/lostPet").then(() => {
        document.querySelector(".lostForm").style.display = "block";
        document.querySelector("#lostForm").style.display = "none";
    }).then(() => {
        var fileButton = document.querySelector("#fileButton");
        fileButton.addEventListener('change', function(e) {
            var file = e.target.files[0];
            console.log(file.name);
            var storageRef = firebase.storage().ref('petPictures/' + file.name);
            var task = storageRef.put(file);


            var downloadURL = task.snapshot.ref.getDownloadURL().then(function(result) {
                console.log(result);
                console.log(downloadURL);
                document.querySelector("#img").value = result;

            })
        });
    })
}

const adoptionForm = () => {
    onNavItemClick("/adoptionPets").then(() => {
        document.querySelector(".adoptionForm").style.display = "block";
        document.querySelector("#adoptionForm").style.display = "none";
    }).then(() => {
        var fileButton = document.querySelector("#fileButtonAdopt");
        fileButton.addEventListener('change', function(e) {
            var file = e.target.files[0];
            console.log(file.name);
            var storageRef = firebase.storage().ref('petPictures/' + file.name);
            var task = storageRef.put(file);

            var downloadURL = task.snapshot.ref.getDownloadURL().then(function(result) {

                document.querySelector("#adoptImg").value = result;
            })
        });
    })
}

showLostPet = () => {
    onNavItemClick("/lostPet").then(
        () => {
            let table = document.querySelector(".printInfo"); //es donde se va imprimir la info de los usuarios
            printLostPets(table);
            document.querySelector(".lostForm").style.display = "none";
            document.querySelector("#lostForm").style.display = "block";
        });
}

let contentDiv = document.querySelector('#firstContent');

function pageLogIn() {
    onNavItemClick("/logIn");
    console.log("DONE!!");
}

function pageCreateAccount() {
    onNavItemClick('/createAccount');
}

//Función que llama a la información que va dentro del formulario
function modal(message) {
    document.querySelector("#errors").innerHTML = message;
}

function showHelp() {
    onNavItemClick('/help');
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
document.querySelector(".firstHeader").style.display = "block";
document.querySelector(".firstFooter").style.display = "block";
document.querySelector(".secondHeader").style.display = "none";
document.querySelector(".secondFooter").style.display = "none";