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

// This displays the hamburger menu
const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const hamburgerMenu2 = document.getElementById('loggedOut');


hamburger.addEventListener('click', () => {
    if(hamburgerMenu.style.display === "none") {
        hamburgerMenu.style.display = "block";
    } else {
        hamburgerMenu.style.display = "none";
    }

})

// This updates the cart number
let cartNumber = 0;

    document.getElementById('cardBtn').addEventListener('click', () => {
        cartNumber++;
        document.getElementById('cartItemCount').style.display = "block"
        document.getElementById('cartItemCount').textContent = cartNumber;
    });

// Here to Open and close the login/signup modal
const login = document.getElementById('loginSignUp');
const loggedOut = document.getElementById('loggedOut');
const closeLogin = document.getElementById('closeLogin');

closeLogin.style.cursor = "pointer"
login.addEventListener('click', ()=> {
    if(loggedOut.style.display == "none") {
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

// Display Cart Items 

const showCart =  document.getElementById('cartButton');
const cart = document.getElementById('cartDisplay');
const closeCart = document.getElementById('closeCart');
const hero = document.getElementById('heroSection');
// console.log(cart)

closeCart.style.cursor = "pointer";

// Click to display Cart Items and disable hero

showCart.addEventListener('click', (e) => {
    cart.style.display = 'block';
    hero.style.display = 'none';
    // hero.style.scrollBehavior = 'none';
})

// Here to close cart Display
closeCart.addEventListener('click', (e) => {
    if(cart.style.display === "block") {
        cart.style.display = 'none';
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

all.addEventListener('mouseover', (e)=> {
    navBarMenu.style.display = "block";
})

navBarMenu.addEventListener('mouseover', (e)=> {
        navBarMenu.style.display = "block";
})

navBarMenu.addEventListener('mouseout', (e)=> {
    navBarMenu.style.display = "none";
})

breakfast.addEventListener('mouseover', (e)=> {
    navBarMenu.style.display = "block";
})

breakfast.addEventListener('mouseout', (e)=> {
    if(navBarMenu.style.display === "block") {
        navBarMenu.style.display = "none";
    }
})

lunch.addEventListener('mouseover', (e)=> {
    navBarMenu.style.display = "block";
})

lunch.addEventListener('mouseout', (e)=> {
    if(navBarMenu.style.display === "block") {
        navBarMenu.style.display = "none";
    }
})

dinner.addEventListener('mouseover', (e)=> {
    navBarMenu.style.display = "block";
})

dinner.addEventListener('mouseout', (e)=> {
    if(navBarMenu.style.display === "block") {
        navBarMenu.style.display = "none";
    }
})

vendors.addEventListener('mouseover', (e)=> {
    navBarMenu.style.display = "block";
})

vendors.addEventListener('mouseout', (e)=> {
    if(navBarMenu.style.display === "block") {
        navBarMenu.style.display = "none";
    }
})

storeLocator.addEventListener('mouseover', (e)=> {
    navBarMenu.style.display = "block";
})

storeLocator.addEventListener('mouseout', (e)=> {
    if(navBarMenu.style.display === "block") {
        navBarMenu.style.display = "none";
    }
})





