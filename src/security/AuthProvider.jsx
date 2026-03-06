import { useEffect, useState } from "react";
import { AuthContext } from "./authContext";

function AuthProvider({children}){
    const [session, setSession] = useState(null)
    
    useEffect(()=>{
        const session = localStorage.getItem("session")

        if(session){
            setSession(JSON.parse(session))
        }
        
    },[])

    const login = (username, password)=>{
        if(username === "admin" && password === "1234"){

            setSession({username:username})

            localStorage.setItem("session", JSON.stringify({username}))

            return true
        } else {
            return false
        }
    }

    const logout = () => {
        localStorage.removeItem("session")
        setSession(null)
    }

    return (
        <AuthContext.Provider value={{login, logout, session,
            isLoggedIn: session !== null
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
