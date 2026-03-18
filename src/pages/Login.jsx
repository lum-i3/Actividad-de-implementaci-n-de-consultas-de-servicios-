import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../security/authContext";
import Swal from "sweetalert2"

function Login () {
    const navigate = useNavigate();
    const {login} = useAuth()
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {

    if (username === ""){
        alert("Usuario es requerido");
        return;
    }

    if (password === ""){
        alert("Contraseña es requerida");
        return;
    }

    const success = await login(username,password)

    if(success){
        navigate("/dashboard")
    }else{
        Swal.fire({
        icon: "error",
        title: "Error",
        text: "Credenciales incorrectas"
        })
    }
}

    return (
        <div>
            <h1>Iniciar sesión</h1>
            <input
            type="text" 
            placeholder="usuario" 
            onChange={(event) => setUsername(event.target.value)}
            />
            <input type="password" placeholder="contraseña" 
            onChange={(event) => setPassword(event.target.value)}
            />


            <Button text="Iniciar sesión" action={handleLogin} />
        </div>
    )
}

export default Login;