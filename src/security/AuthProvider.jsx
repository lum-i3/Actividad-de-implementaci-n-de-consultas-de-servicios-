import { useEffect, useState } from "react";
import { AuthContext } from "./authContext";

function AuthProvider({children}){
    const [session, setSession] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(()=>{
        const session = localStorage.getItem("session")

        if(session){
            setSession(JSON.parse(session))
        }

        setIsLoading(false)

    },[])

    const login = async (username, password)=>{

    const response = await fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })

    const data = await response.json()

    if(data.token){
        const newSession = {username, token: data.token}

        setSession(newSession)
        localStorage.setItem("session", JSON.stringify(newSession))

        return true
    }

    return false
}

    const logout = () => {
        localStorage.removeItem("session")
        setSession(null)
    }


    return (
        <AuthContext.Provider value={{login, logout, session,
            isLoggedIn: session !== null, isLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
