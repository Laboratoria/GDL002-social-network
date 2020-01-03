let contentDiv = document.getElementById("content");

let routes = {
    "/src/" : "./templates/login.html",
    "/signUp" : "./src/templates/signUp.html",
    "/timeLine": "./src/templates/timeLine.html",
    "/profile" : "./src/templates/profile.html",
};

window.onpopstate = () => {
    fetchContent(routes[window.location.pathname])
    .then(html => contentDiv.innerHTML = html);
}

let onNavItemClick = (pathName) => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    fetchContent(routes[window.location.pathname])
    .then(html => contentDiv.innerHTML = html)
    .then(() => addEventListeners());
}

const fetchContent = (url) => fetch(url)
.then(function(response) {
    return response.text();
})
.then(function(html){
    return html;
})
.catch(function(err){
    console.log("Failed to fetch page: ", err);
});

fetchContent(routes[window.location.pathname])
.then(html => contentDiv.innerHTML = html)
.then(() => addEventListeners());

const addEventListeners = () =>{
    const btnList = document.querySelectorAll(".js");
    for(let i=0; i<btnList.length; i++){
        if(window.location.pathname === "/src/"){
            console.log("hola de nuevo");
            document.querySelector(".special").addEventListener("click", function(event){
                const email = document.querySelector("#e-mailLogIn").value;
                const pass =  document.querySelector("#passwordLogIn").value;
                loginEmail(email,pass);
            });
            document.querySelector("#linkSignUp").addEventListener("click", (e) => {
                e.preventDefault();
                console.log('hola');
                onNavItemClick("/signUp");
            });
            document.querySelector(".js").addEventListener("click",(event)=>{
                event.preventDefault();
                socialNetwork[event.target.dataset.next]();
                
                // onNavItemClick("#/src/timeLine");
            });
            document.getElementById("loginFacebook").addEventListener("click",(event)=>{
                // onNavItemClick("/src/timeLine");
                socialNetwork[event.target.dataset.next]();
            });
        }else if(window.location.pathname === "/src/signUp"){
            document.querySelector("#linkLogIn").addEventListener("click", (e) => {
                e.preventDefault();
                console.log('hola');
                onNavItemClick('/');
            });
            btnList[i].addEventListener("click",function(event){
                event.preventDefault()
                console.log("registrar")
                socialNetwork[event.target.dataset.next](
                    document.getElementById(event.target.attributes.dataEmail.value).value,
                    document.getElementById(event.target.attributes.dataPass.value).value,
                    document.getElementById(event.target.attributes.dataName.value).value,
                    document.getElementById(event.target.attributes.dataLast.value).value
                );
            });
        }else{
                console.log("hola others");
                btnList[i].addEventListener("click",function(event){
                    event.preventDefault()
                    socialNetwork[event.target.dataset.next]();
            });
        };
    };
};