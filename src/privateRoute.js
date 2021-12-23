import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import { AuthContext } from "./Auth";

const PrivateRoute = ({component: ReactComponent, ...rest}) => {
    const {currentUser} = useContext(AuthContext);
    return(
        <Route
        {...rest}
        render={routeProps =>
        !! currentUser ? (
            <RouteComponenet {... routeProps} />
        ) : (
            <Redirect to {"/login"} />
        )
    }
    />
   );
};