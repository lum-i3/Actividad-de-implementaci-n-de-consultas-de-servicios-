import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../security/authContext";

function Login () {
    const navigate = useNavigate();
    const {login} = useAuth()
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        if (username === "" || username === null){
            alert("Usuario es requerido");
            return;
        }

        if (password === "" || password === null){
            alert("Contraseña es requerida");
            return;
        }

        alert(`El usuario es ${username} y la contraseña es ${password}`);

        if(login(username,password)){
            navigate("/dashboard");
        }{
            alert("Invalid credentials");
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