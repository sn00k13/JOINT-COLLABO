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
const login = document.getElementById('loginStatus');
const loggedOut = document.getElementById('loggedOut');
const closeLogin = document.getElementById('closeLogin');

closeLogin.style.cursor = "pointer"
login.addEventListener('click', ()=> {
    loggedOut.style.display = "block";
})

closeLogin.addEventListener('click', ()=> {
    if(loggedOut.style.display === "block") {
        loggedOut.style.display = "none";
    } 
})

// Here to open My account modal

const myAccountDisplay = document.getElementById('myAccount');

myAccountDisplay.addEventListener('mouseover', ()=> {
    hamburgerMenu.style.left = "78%";
    hamburgerMenu.style.display = "block";
})

hamburgerMenu.addEventListener('mouseover', (e)=> {
    hamburgerMenu.style.display = "block";
})

hamburgerMenu.addEventListener('mouseout', (e)=> {
    hamburgerMenu.style.display = "none";
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
const navBarMenu1 = document.getElementById('allMenus1');
const navBarMenu2 = document.getElementById('allMenus2');
const navBarMenu3 = document.getElementById('allMenus3');
const navBarMenu4 = document.getElementById('allMenus4');
const navBarMenu5 = document.getElementById('allMenus5');
const all = document.querySelector('.allMenu')
const breakfast = document.querySelector('.breakfast')
const lunch = document.querySelector('.lunch')
const dinner = document.querySelector('.dinner')
const vendors = document.querySelector('.vendors')
const storeLocator = document.querySelector('.storeLocator')

all.addEventListener('mouseover', (e)=> {
    navBarMenu.style.display = "flex";
    all.style.backgroundColor = "whitesmoke"
    all.style.color = "black"
});

all.addEventListener('mouseout', (e)=> {
    navBarMenu.style.display = "none";
    all.style.backgroundColor = "orangered"
    all.style.color = "white"
});

navBarMenu.addEventListener('mouseover', (e)=> {
        navBarMenu.style.display = "flex";
        all.style.backgroundColor = "whitesmoke"
        all.style.color = "black"
})

navBarMenu.addEventListener('mouseout', (e)=> {
    navBarMenu.style.display = "none";
    all.style.backgroundColor = "orangered"
    all.style.color = "white"
})

breakfast.addEventListener('mouseover', (e)=> {
    navBarMenu1.style.display = "flex";
    breakfast.style.backgroundColor = "whitesmoke"
    breakfast.style.color = "black"
});

breakfast.addEventListener('mouseout', (e)=> {
    navBarMenu1.style.display = "none";
    breakfast.style.backgroundColor = "orangered"
    breakfast.style.color = "white"
});

navBarMenu1.addEventListener('mouseover', (e)=> {
    navBarMenu1.style.display = "block";
    breakfast.style.backgroundColor = "whitesmoke"
    breakfast.style.color = "black"
})

navBarMenu1.addEventListener('mouseout', (e)=> {
    navBarMenu1.style.display = "none";
    breakfast.style.backgroundColor = "orangered"
    breakfast.style.color = "white"
})

lunch.addEventListener('mouseover', (e)=> {
    navBarMenu2.style.display = "block";
    lunch.style.backgroundColor = "whitesmoke"
    lunch.style.color = "black"
});

lunch.addEventListener('mouseout', (e)=> {
    navBarMenu2.style.display = "none";
    lunch.style.backgroundColor = "orangered"
    lunch.style.color = "white"
});

navBarMenu2.addEventListener('mouseover', (e)=> {
    navBarMenu2.style.display = "block";
    lunch.style.backgroundColor = "whitesmoke"
    lunch.style.color = "black"
})

navBarMenu2.addEventListener('mouseout', (e)=> {
    navBarMenu2.style.display = "none";
    lunch.style.backgroundColor = "orangered"
    lunch.style.color = "white"
})

dinner.addEventListener('mouseover', (e)=> {
    navBarMenu3.style.display = "block";
    dinner.style.backgroundColor = "whitesmoke"
    dinner.style.color = "black"
});

dinner.addEventListener('mouseout', ()=> {
    navBarMenu3.style.display = "none";
    dinner.style.backgroundColor = "orangered"
    dinner.style.color = "white"
});

navBarMenu3.addEventListener('mouseover', ()=> {
    navBarMenu3.style.display = "block";
    dinner.style.backgroundColor = "whitesmoke"
    dinner.style.color = "black"
})

navBarMenu3.addEventListener('mouseout', ()=> {
    navBarMenu3.style.display = "none";
    dinner.style.backgroundColor = "orangered"
    dinner.style.color = "white"
})

vendors.addEventListener('mouseover', (e)=> {
    navBarMenu4.style.display = "block";
    vendors.style.backgroundColor = "whitesmoke"
    vendors.style.color = "black"
});

vendors.addEventListener('mouseout', (e)=> {
    navBarMenu4.style.display = "none";
    vendors.style.backgroundColor = "orangered"
    vendors.style.color = "white"
});

navBarMenu4.addEventListener('mouseover', (e)=> {
    navBarMenu4.style.display = "block";
    vendors.style.backgroundColor = "whitesmoke"
    vendors.style.color = "black"
})

navBarMenu4.addEventListener('mouseout', (e)=> {
    navBarMenu4.style.display = "none";
    vendors.style.backgroundColor = "orangered"
    vendors.style.color = "white"
})

storeLocator.addEventListener('mouseover', (e)=> {
    navBarMenu5.style.display = "block";
    storeLocator.style.backgroundColor = "whitesmoke"
    storeLocator.style.color = "black"
});

storeLocator.addEventListener('mouseout', (e)=> {
    navBarMenu5.style.display = "none";
    storeLocator.style.backgroundColor = "orangered"
    storeLocator.style.color = "white"
});

navBarMenu5.addEventListener('mouseover', (e)=> {
    navBarMenu5.style.display = "block";
    storeLocator.style.backgroundColor = "whitesmoke"
    storeLocator.style.color = "black"
})

navBarMenu5.addEventListener('mouseout', (e)=> {
    navBarMenu5.style.display = "none";
    storeLocator.style.backgroundColor = "orangered"
    storeLocator.style.color = "white"
})

//Highlight Menu Items in Display mode
const navBarDisplayLeft1 = document.getElementById('navBarDisplayLeft1');
const navBarDisplayLeft2 = document.getElementById('navBarDisplayLeft2');
const navBarDisplayLeft3 = document.getElementById('navBarDisplayLeft3');
const navBarDisplayLeft4 = document.getElementById('navBarDisplayLeft4');
const navBarDisplayBreakfast = document.querySelector('.navBarDisplayBreakfast');
const navBarDisplayLunch = document.querySelector('.navBarDisplayLunch');
const navBarDisplayDinner = document.querySelector('.navBarDisplayDinner');
const navBarDisplayCustomize = document.querySelector('.navBarDisplayCustomize');

//Breakfast
navBarDisplayLeft1.addEventListener('mouseover', ()=> {
    navBarDisplayBreakfast.style.display = 'block'
    navBarDisplayLeft1.style.backgroundColor = 'white'
    navBarDisplayLeft1.style.color = 'orangered'
    navBarDisplayLeft1.style.cursor = 'pointer'
})

navBarDisplayLeft1.addEventListener('mouseout', ()=> {
    navBarDisplayBreakfast.style.display = 'none'
    navBarDisplayLeft1.style.backgroundColor = 'transparent'
    navBarDisplayLeft1.style.color = 'black'
})

navBarDisplayBreakfast.addEventListener('mouseover', ()=> {
    navBarDisplayBreakfast.style.display = 'block'
    navBarDisplayLeft1.style.backgroundColor = 'white'
    navBarDisplayLeft1.style.color = 'orangered'
})

navBarDisplayBreakfast.addEventListener('mouseout', ()=> {
    navBarDisplayBreakfast.style.display = 'none'
    navBarDisplayLeft1.style.backgroundColor = 'transparent'
    navBarDisplayLeft1.style.color = 'black'
})

//Lunch
navBarDisplayLeft2.addEventListener('mouseover', ()=> {
    navBarDisplayLunch.style.display = 'block'
    navBarDisplayLeft2.style.backgroundColor = 'white'
    navBarDisplayLeft2.style.color = 'orangered'
    navBarDisplayLeft2.style.cursor = 'pointer'
})

navBarDisplayLeft2.addEventListener('mouseout', ()=> {
    navBarDisplayLunch.style.display = 'none'
    navBarDisplayLeft2.style.backgroundColor = 'transparent'
    navBarDisplayLeft2.style.color = 'black'
})

navBarDisplayLunch.addEventListener('mouseover', ()=> {
    navBarDisplayLunch.style.display = 'block'
    navBarDisplayLeft2.style.backgroundColor = 'white'
    navBarDisplayLeft2.style.color = 'orangered'
})

navBarDisplayLunch.addEventListener('mouseout', ()=> {
    navBarDisplayLunch.style.display = 'none'
    navBarDisplayLeft2.style.backgroundColor = 'transparent'
    navBarDisplayLeft2.style.color = 'black'
})

//Dinner
navBarDisplayLeft3.addEventListener('mouseover', ()=> {
    navBarDisplayDinner.style.display = 'block'
    navBarDisplayLeft3.style.backgroundColor = 'white'
    navBarDisplayLeft3.style.color = 'orangered'
    navBarDisplayLeft3.style.cursor = 'pointer'
})

navBarDisplayLeft3.addEventListener('mouseout', ()=> {
    navBarDisplayDinner.style.display = 'none'
    navBarDisplayLeft3.style.backgroundColor = 'transparent'
    navBarDisplayLeft3.style.color = 'black'
})

navBarDisplayDinner.addEventListener('mouseover', ()=> {
    navBarDisplayDinner.style.display = 'block'
    navBarDisplayLeft3.style.backgroundColor = 'white'
    navBarDisplayLeft3.style.color = 'orangered'
    
})

navBarDisplayDinner.addEventListener('mouseout', ()=> {
    navBarDisplayDinner.style.display = 'none'
    navBarDisplayLeft3.style.backgroundColor = 'transparent'
    navBarDisplayLeft3.style.color = 'black'
})

//Customize
navBarDisplayLeft4.addEventListener('mouseover', ()=> {
    navBarDisplayCustomize.style.display = 'block'
    navBarDisplayLeft4.style.backgroundColor = 'white'
    navBarDisplayLeft4.style.color = 'orangered'
    navBarDisplayLeft4.style.cursor = 'pointer'
})

navBarDisplayLeft4.addEventListener('mouseout', ()=> {
    navBarDisplayCustomize.style.display = 'none'
    navBarDisplayLeft4.style.backgroundColor = 'transparent'
    navBarDisplayLeft4.style.color = 'black'
})

navBarDisplayCustomize.addEventListener('mouseover', ()=> {
    navBarDisplayCustomize.style.display = 'block'
    navBarDisplayLeft4.style.backgroundColor = 'white'
    navBarDisplayLeft4.style.color = 'orangered'
})

navBarDisplayCustomize.addEventListener('mouseout', ()=> {
    navBarDisplayCustomize.style.display = 'none'
    navBarDisplayLeft4.style.backgroundColor = 'transparent'
    navBarDisplayLeft4.style.color = 'black'
})

// Track Order Here

const trackOrder = document.querySelector('.trackOrder');

trackOrder.addEventListener('click', (e) => {
    location.href = 'track.html'
})

const form = document.getElementById("loginForm");
const check = JSON.parse(localStorage.getItem("entries")) || [];
const profileUser = JSON.parse(sessionStorage.getItem('signedInUser'))

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const password = form.password.value;
    const email = form.email.value;

    const user = check.find(users => users.email === email && users.password === password);

    if (user) {
        // Store the signed-in user info in session storage
        sessionStorage.setItem('signedInUser', JSON.stringify(user));


        alert("Login successful!");
        form.reset();
        location.href = 'index.html'
    } else {
        alert("Invalid login credentials!");
    }

    })


const profile = document.getElementById("profileName");
const validate = JSON.parse(localStorage.getItem("entries")) || [];
const myAccount = document.getElementById('myAccount');
const loginStatus = document.getElementById('loginStatus');
// console.log(validate.userName)

sessionStorage.getItem('logins');

function pageLoad() {

    console.log(check)

    const user = validate.find(users => users.firstName);
    if (user) {
        loginStatus.style.display = 'none';
        myAccount.style.display= 'block';
        profile.innerHTML = "Hi " + user.firstName;
      } else {
        loginStatus.style.display = 'block';
        myAccount.style.display= 'none';
      }
}

// To logout session from browser

const logoutProfile = document.getElementById('logoutProfile');

logoutProfile.addEventListener('click', (e)=> {
    e.preventDefault();
    localStorage.clear();
    sessionStorage.clear();
    location.reload();
})

//Trying to hide my google maps API key. If it works i will move this code block to a secure server and call it from there :)

function mapLoaded() {
    const googleMaps = document.getElementById('googleMaps');
    const srcUrl = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCVEGIx1ADCSCjlK0p1fM5ufrLoarkpYrw&q=Space+Needle,Seattle+WA'

    if (!googleMaps.src) {
        googleMaps.src = srcUrl
    } else {
        return;
    }
}




