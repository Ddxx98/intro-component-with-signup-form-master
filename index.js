// var myform = document.querySelector(".inputs")
// var email = document.querySelector(".email")
// email.addEventListener("keyup",(e)=>{
//     e.preventDefault()
//     var mail = email.value
//     var span = document.querySelector(".error")
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if(mail.match(mailformat)){
//         myform.classList.add("valid")
//         myform.classList.remove("invalid")
//         span.innerHTML = "Your email address is valid"
//         span.style.color = "#000ff00"
//     }else{
//         myform.classList.remove("valid")
//         myform.classList.add('invalid')
//         span.innerHTML = "Please enter valid email address"
//         span.style.color = "#ff0000"
//     }
// })

var myform = document.querySelector(".inputs")
var firstName = document.querySelector(".first-name")
var lastName = document.querySelector('.last-name')
var email = document.querySelector(".email")
var pass = document.querySelector('.password')
var span = document.querySelector(".error")

myform.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log("In")
    var mail = email.value
    if(firstName.value == ''){
        span.innerHTML = "First name cannot be empty"
        myform.classList.add("valid")
        myform.classList.remove("invalid")
    }else if(lastName.value == ''){
        span.innerHTML = "Last name cannot be empty"
        myform.classList.add("valid")
        myform.classList.remove("invalid")
    }else if(!mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        span.innerHTML = "Please enter valid email address"
        myform.classList.add("valid")
        myform.classList.remove("invalid")
    }else if(pass.value == ''){
        span.innerHTML = "Password cannot be empty"
        myform.classList.add("valid")
        myform.classList.remove("invalid")
    }else{
        myform.classList.add("valid")
        myform.classList.remove("invalid")
        myform.submit()
        span.innerHTML = ''
    }
})