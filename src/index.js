import { login, logout, signUp } from "./auth"


const signUpForm = document.querySelector("#signupForm")
signUpForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    const firstname =document.getElementById("firstName").value
    const lastname =document.getElementById("lastName").value
    const email =document.getElementById("signupEmail").value
    const password =document.getElementById("signupPassword").value

    signUp(firstname,lastname,email,password)
     
})

const loginForm = document.querySelector("#loginForm")
loginForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    const email =document.getElementById("loginEmail").value
    const password =document.getElementById("loginPassword").value

    login(email,password)
     
})
const LogoutForm = document.querySelector("#logoutForm")
LogoutForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    logout()
})