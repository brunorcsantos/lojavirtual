import { createContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    const signIn = ({email: email, senha: password}) =>{
        
    }

    useEffect(() => {
        const userToken = localStorage.getItem("Bearer");

        if(userToken){
            setUser()
        }
    }, []);

    

    const signOut = () => {
        setUser(null);
        localStorage.removeItem("Bearer");
    }
    
    
    
    return <AuthContext.Provider
        value={{ user ,signIn, signOut}}
    >{children}</AuthContext.Provider>
};




export default AuthContext;