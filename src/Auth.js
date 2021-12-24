import React, {useEffect, useState} from "react";
import { firebaseAuth } from "./firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=> {
        firebaseAuth.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return(
        <AuthContext.AuthProvider
        value={{
            currentUser
        }}

        debugger

        >
            {children}
        </AuthContext.AuthProvider>
    );
};
