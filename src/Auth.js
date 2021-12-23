import React, {useEffect, useState} from "react";
import App from "./App";
import firebaseConfig from "./firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=> {
        App.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return(
        <AuthContext.AuthProvider
        value={{
            currentUser
        }}
        >
            {children}
        </AuthContext.AuthProvider>
    );
};
