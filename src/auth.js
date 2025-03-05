import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "./config";
import { db } from "./config";
import { doc, setDoc } from "@firebase/firestore";

export async function signUp(firstName, lastName, email, password){
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log("User signed up:",userCredential.user.email)
        console.log("User ID:",userCredential.user.uid)
        const userRef = doc(db,"users",userCredential.user.uid)

        await setDoc(userRef,{
            firstname:firstName,
            lastname:lastName,
            timestamp: new Date()
        })

    }catch(error){
        console.error("Eroor fetching user data: ",error)
    }
}

export async function login(email,password) {
    try{
        const userCredential = await signInWithEmailAndPassword(auth,email,password)
        window.location.href = "citymanager.html"
    }catch(error){
        console.error("Login error: "+error.message)
    }
    
}