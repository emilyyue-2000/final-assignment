import React, { useCallback, useContext} from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseAuth } from "../../../firebase";
import { Link } from "react-router-dom";

const Login = ({history}) => {
const [registerEmail, setRegisterEmail] = useState("")
const [registerPassword, setRegisterPassword] = useState("")
const [loginEmail, setLoginEmail] = useState("")
const [loginPassword, setLoginPassword] = useState("")

const[user, setUser] = useState({});

onAuthStateChanged (firebaseAuth, (currentUser)=>{
    setUser(currentUser);
})

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
        console.log (loginEmail, loginPassword)
        }catch(error){
        console.log(error.message);
        }
    
}

const logout = async () => {
    await signOut(firebaseAuth);
}

/*
const email = "test@email.com"
        const password = "123456"

    const handleLogin = useCallback(

        
        async event => {
            event.preventDefault();
            //const {email, password} = event.target.elements;
            debugger
            console.log(loginEmail, loginPassword)
            try{
                const user= await signInWithEmailAndPassword(firebaseAuth, loginEmail, loginPassword);
                debugger
                

                /*await firebaseConfig
                    .auth()
                    .signInWithEmailandPassword(email.value, password.value);
                    history.push("/"); 
            }catch(error) {
                alert(error);
            }
        },
        [history]
    );
    const currentUser = useContext(AuthContext);

    if (currentUser) {
        return < Redirect to="/" />;
    }
*/
    return (
        <div> 
            <h1>Login</h1>
            <div>
                <label>
                        Email
                        <input placeholder="Email" onChange={(event)=> {
                        setRegisterEmail(event.target.value)
                        }}
                    />
                    </label>
                    <label>
                        Password
                        <input name="password" type="password" placeholder="Password" onChange={(event)=> {
                        setRegisterPassword(event.target.value)
                        }}
                        />
                    </label>
                    <button onClick={register}>Sign Up</button>
            </div>

            <div>
                <label>
                    Email
                    <input placeholder="Email" onChange={(event)=> {
                    setLoginEmail(event.target.value)
                    }}
                />
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" onChange={(event)=> {
                    setLoginPassword(event.target.value)
                    }}
                    />
                </label>
                <Link to ="/homepage">
                <button onClick={login}>Log In</button>
                </Link>
            </div>

            <h4>User Currently Logged In: </h4>
            {user?.email}

            <button onClick={logout}>Sign Out</button>
        </div>
    );
};
export default Login;

