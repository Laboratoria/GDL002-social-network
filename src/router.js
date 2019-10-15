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
    '/help':`./help.html`,
    '/home': `./pages/home.html`,
  };

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