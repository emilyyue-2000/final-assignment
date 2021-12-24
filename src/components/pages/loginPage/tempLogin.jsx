import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../../firebase";

const [registerEmail, setRegisterEmail] = useState("")
const [registerPassword, setRegisterPassword] = useState("")
const [loginEmail, setLoginEmail] = useState("")
const [loginPassword, setLoginPassword] = useState("")

const register = async () => {
    try{
    const user= await createUserWithEmailAndPassword(firebaseAuth, registerEmail, registerPassword);
    console.log(user)
    }catch(error){
    console.log(error.message);
    }
};

const login = async () => {

    try{
        const user= await signInWithEmailAndPassword(firebaseAuth, loginEmail, loginPassword);
        console.log(user)
        }catch(error){
        console.log(error.message);
        }
    
}

const logout = async () => {
    
}

<button onClick = {register}>Create User</button>