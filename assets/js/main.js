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
    navBarMenu.style.display = "block";
});

all.addEventListener('mouseout', (e)=> {
    navBarMenu.style.display = "none";
});

navBarMenu.addEventListener('mouseover', (e)=> {
        navBarMenu.style.display = "block";
})

navBarMenu.addEventListener('mouseout', (e)=> {
    navBarMenu.style.display = "none";
})

breakfast.addEventListener('mouseover', (e)=> {
    navBarMenu1.style.display = "block";
});

breakfast.addEventListener('mouseout', (e)=> {
    navBarMenu1.style.display = "none";
});

navBarMenu1.addEventListener('mouseover', (e)=> {
        navBarMenu1.style.display = "block";
})

navBarMenu1.addEventListener('mouseout', (e)=> {
    navBarMenu1.style.display = "none";
})

lunch.addEventListener('mouseover', (e)=> {
    navBarMenu2.style.display = "block";
});

lunch.addEventListener('mouseout', (e)=> {
    navBarMenu2.style.display = "none";
});

navBarMenu2.addEventListener('mouseover', (e)=> {
        navBarMenu2.style.display = "block";
})

navBarMenu2.addEventListener('mouseout', (e)=> {
    navBarMenu2.style.display = "none";
})

dinner.addEventListener('mouseover', (e)=> {
    navBarMenu3.style.display = "block";
});

dinner.addEventListener('mouseout', (e)=> {
    navBarMenu3.style.display = "none";
});

navBarMenu3.addEventListener('mouseover', (e)=> {
        navBarMenu3.style.display = "block";
})

navBarMenu3.addEventListener('mouseout', (e)=> {
    navBarMenu3.style.display = "none";
})

vendors.addEventListener('mouseover', (e)=> {
    navBarMenu4.style.display = "block";
});

vendors.addEventListener('mouseout', (e)=> {
    navBarMenu4.style.display = "none";
});

navBarMenu4.addEventListener('mouseover', (e)=> {
        navBarMenu4.style.display = "block";
})

navBarMenu4.addEventListener('mouseout', (e)=> {
    navBarMenu4.style.display = "none";
})

storeLocator.addEventListener('mouseover', (e)=> {
    navBarMenu5.style.display = "block";
});

storeLocator.addEventListener('mouseout', (e)=> {
    navBarMenu5.style.display = "none";
});

navBarMenu5.addEventListener('mouseover', (e)=> {
        navBarMenu5.style.display = "block";
})

navBarMenu5.addEventListener('mouseout', (e)=> {
    navBarMenu5.style.display = "none";
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





