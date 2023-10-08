const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
    modal.classList.toggle("is-open");
}

const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const loginForm = document.querySelector('#loginForm');
const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');

let login = null; 

function toggleModalAuth() {
    modalAuth.classList.toggle("is-open-auth");
}

function authorized() {
    console.log("Авторизован");

    function logOut() {
        login = null;
    
        buttonAuth.style.display = '';
        userName.style.display = '';
        buttonOut.style.display = '';
        userName.textContent = '';
        loginInput.value = ''; 
        passwordInput.value = '';
        modalAuth.classList.remove("is-open-auth");
        checkAuth();
    }

    userName.textContent = login;

    buttonAuth.style.display = 'none';
    userName.style.display = 'inline';
    buttonOut.style.display = 'block';

    buttonOut.addEventListener("click", logOut);
}

function notAuthorized() {
    console.log("Не авторизован");

    function logIn(event) {
        event.preventDefault();
        login = loginInput.value;
        toggleModalAuth();
        checkAuth();
    }

    buttonAuth.addEventListener("click", toggleModalAuth);
    closeAuth.addEventListener("click", toggleModalAuth);
    loginForm.addEventListener("submit", logIn);
}

function checkAuth() {
    if (login !== null) { 
        authorized();
    } else {
        notAuthorized();
    }
}

checkAuth();
