import { createContext, useState } from "react";


//Create a context
export const UserContext = createContext();

//Create Provider Component
export const UserProvider = ({children}) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () =>{
        setIsLoggedIn(true)
    }
    const handleLogout = () =>{
        setIsLoggedIn(false)
    }
    return (
        <UserContext.Provider value={{isLoggedIn, setIsLoggedIn, handleLogin, handleLogout}}>
            {children}
        </UserContext.Provider>
    )
}