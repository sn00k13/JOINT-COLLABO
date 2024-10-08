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
