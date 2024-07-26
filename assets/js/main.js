//This controls the slide show display

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}


// const hamburger = document.getElementById('hamburger');
// const hamburgerMenu = document.getElementById('hamburgerMenu');

// hamburger.addEventListener('click', () => {
//     if(hamburgerMenu.style.display === "none") {
//         hamburgerMenu.style.display = "block";
//     } else {
//         hamburgerMenu.style.display = "none";
//     }

// })

// Here to Open and close the login/signup modal
const login = document.getElementById('loginSignUp');
const loggedOut = document.getElementById('loggedOut');
const closeLogin = document.getElementById('closeLogin');

closeLogin.style.cursor = "pointer"
login.addEventListener('click', ()=> {
    if(loggedOut.style.display === "none") {
        loggedOut.style.display = "block";
    } else {
        loggedOut.style.display = "none";
    }
})

closeLogin.addEventListener('click', ()=> {
    if(loggedOut.style.display === "block") {
        loggedOut.style.display = "none";
    } 
})

// Here to highlight Nav Bar Menu Items and display options
const navBarMenu = document.getElementById('allMenus');
const all = document.querySelector('.allMenu')
const breakfast = document.querySelector('.breakfast')
const lunch = document.querySelector('.lunch')
const dinner = document.querySelector('.dinner')
const vendors = document.querySelector('.vendors')
const storeLocator = document.querySelector('.storeLocator')

all.addEventListener('click', (e)=> {
    if(navBarMenu.style.display === "none") {
        navBarMenu.style.display = "block";
    } else {
        navBarMenu.style.display = "none";
    }
})

breakfast.addEventListener('click', (e)=> {
    if(navBarMenu.style.display === "none") {
        navBarMenu.style.display = "block";
    } else {
        navBarMenu.style.display = "none";
    }
})

lunch.addEventListener('click', (e)=> {
    if(navBarMenu.style.display === "none") {
        navBarMenu.style.display = "block";
    } else {
        navBarMenu.style.display = "none";
    }
})

dinner.addEventListener('click', (e)=> {
    if(navBarMenu.style.display === "none") {
        navBarMenu.style.display = "block";
    } else {
        navBarMenu.style.display = "none";
    }
})

vendors.addEventListener('click', (e)=> {
    if(navBarMenu.style.display === "none") {
        navBarMenu.style.display = "block";
    } else {
        navBarMenu.style.display = "none";
    }
})

storeLocator.addEventListener('click', (e)=> {
    if(navBarMenu.style.display === "none") {
        navBarMenu.style.display = "block";
    } else {
        navBarMenu.style.display = "none";
    }
})


