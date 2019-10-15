const socialNetwork = {
    pageLogIn: pageLogIn,
    pageCreateAccount: pageCreateAccount,
    btnLogIn: btnLogIn,
    firebaseNewAccount: firebaseNewAccount,
    close: close,
    showLostPet: showLostPet,
    lostForm: lostForm,
    savePost: savePost,
    showAdoptionPets: showAdoptionPets,
    adoptionForm: adoptionForm,
    savePostAdoption: savePostAdoption,
    showHelp: showHelp,
    goWelcomePage: goWelcomePage,
    homePage: homePage,
};


function buttons() {

    const allButtons = document.querySelectorAll(".typeButton");
    for (let i = 0; i < allButtons.length; i++) {
        if (window.location.pathname == "/logInPage" || window.location.pathname == "/createAccount") {

            allButtons[i].addEventListener("click", function(event) {
                socialNetwork[event.target.dataset.next](document.getElementById(event.target.attributes.dataFirst.value).value,
                    document.getElementById(event.target.attributes.dataSecond.value).value);
            });
        } else {

            allButtons[i].addEventListener("click", function(event) {
                socialNetwork[event.target.dataset.next]();
            });
        }
    }

}