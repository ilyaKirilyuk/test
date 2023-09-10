let UserName = document.querySelector("#register-first-name");
let LastName = document.querySelector("#register-last-name");
let Email = document.querySelector("#register-email");
let Password = document.querySelector("#register-password");

let signUpBtn = document.querySelector('[data-btn="sign-up"]');
let authBtn = document.querySelector('[data-btn="auth"]');
let mainPage = document.querySelector(".main-page");

signUpBtn.addEventListener("click", () => {
  let registerUserName = UserName.value;
  let registerLastName = LastName.value;
  let registerEmail = Email.value;
  let registerPassword = Password.value;

  const maxLength = Math.pow(16, 9) - 1;
  const randomNumber = Math.floor(Math.random() * maxLength);
  const hexNumber = randomNumber.toString(16).toUpperCase();
  let registerUserNumber = hexNumber.padStart(length, "0");

  if (
    registerUserName === "" ||
    registerLastName === "" ||
    registerEmail === "" ||
    registerPassword === ""
  ) {
    alert("Заполните все поля");
  } else if (registerPassword.length < 8) {
    alert("Пароль должен содержать более 8 символов");
  } else {
    closeAllPopups();
  }

  const userData = {
    registerUserName,
    registerLastName,
    registerEmail,
    registerPassword,
    registerUserNumber,
  };
  localStorage.setItem("userData", JSON.stringify(userData));
});

authBtn.addEventListener("click", () => {
  const storedUserData = localStorage.getItem("userData");
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;

  if (storedUserData) {
    const userData = JSON.parse(storedUserData);
    if (userData.registerUserName === username || userData.registerUserNumber === username &&
        userData.registerPassword === password)
     {
      closeAllPopups();
      let userLogined = {
        logined: true,
      };
      
      localStorage.setItem("userLogined", JSON.stringify(userLogined));
      localStorage.getItem("userLogined");
      history.replaceState({}, document.title, window.location.pathname);

      location.reload()

    } else {
      alert("Что-то пошло не так");
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const storedUserStatus = localStorage.getItem("userLogined");
    if (storedUserStatus) {
      const userStatus = JSON.parse(storedUserStatus);
      if (userStatus.logined) {
        mainPage.classList.add("main-page--is-auth");
  
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
          const userData = JSON.parse(storedUserData);
          const firstLetterName = userData.registerUserName;
          const firstLetterLastName = userData.registerLastName;
  
          const firstLetterOne = firstLetterName.charAt(0);
          const firstLetterTwo = firstLetterLastName.charAt(0);
  
          const container = document.querySelector(".profile-btn__text");
  
          container.textContent = firstLetterOne + firstLetterTwo;
          container.setAttribute('title', `${firstLetterName}  ${firstLetterLastName}`);
  
          let cardNumber = document.querySelector('#card-number');
          let cardUser= document.querySelector('#card-user');
          let profileCardNumber = document.querySelector('.profile-menu__title'); 
  
          cardNumber.value = userData.registerUserNumber
          cardUser.value = userData.registerUserName + ' ' + userData.registerLastName;
          profileCardNumber.textContent = userData.registerUserNumber
        }
      }
    }
  });
  
  const logoutBtn = document.querySelector("[data-btn='logout']");
  
  logoutBtn.addEventListener("click", ()=> {
      localStorage.removeItem("userLogined");
      location.reload(); 
  });