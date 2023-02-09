import React from "react";
import { createContext, useState } from "react";

const UserContext = createContext();
// {checkLogin: localStorage.getItem("checkLogin")}
function Provider({ children }){
    const[user, setUser] = useState({loggedIn :localStorage.getItem("checkLogin")})
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
export {UserContext, Provider}