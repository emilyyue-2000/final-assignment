import React, { useCallBack, useContext} from "react";
import { withRouter, Redirect } from "react-router";
import firebaseConfig from "../../../firebase";
import { AuthContext } from "../../../Auth";

const Login = ({History}) => {
    const handleLogin = useCallBack(
        async event => {
            event.preventDefault();
            const {email, password} = event.targte.elements;
            try{
                await firebaseConfig
                    .auth()
                    .signInWithEmailandPassword(email.value, password.value);
                    history.push("/");
            }catch(error) {
                alert(error);
            }
        },
        [history]
    );
    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        return < Redirect to="/" />;
    }
}