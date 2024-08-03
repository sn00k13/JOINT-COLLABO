const form = document.getElementById("profileForm");

let inputFields = JSON.parse(localStorage.getItem("entries"))

let arr = [];

console.log(inputFields)

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,        
        email: form.email.value,
        password: form.password.value,
        confirmPassword: form.confirmPassword.value,        
    }    

    // if(text.username == inputFields.username && text.email == inputFields.email) {
        
    //     document.getElementById("errMsg").innerHTML = "Username already exists!";
      
    //     return
    // }

  let game = arr.push(text)

    console.log(arr)    

    localStorage.setItem("entries", JSON.stringify(arr));


    if(game) {
        alert("Registration Successful")
        form.reset();

        location.href = "login.html"
        
    } else {
        alert("Registration failed")
    }



        
    console.log(text)
    
    
    
})
