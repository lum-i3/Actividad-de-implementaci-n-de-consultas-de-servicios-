import { useState } from "react";
import Button from "../components/Button";

function Login () {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        alert(`El usuario es ${username} y la contraseña es ${password}`);
    }


    return (
        <div>
            <h1>Iniciar sesión</h1>
            <input 
            type="text" 
            placeholder="usuario" 
            onChange={(event) => setUsername(event.target.value)}
            />
            <input type="password" placeholder="contraseña" />
            <Button text="Iniciar sesión" action={handleLogin} />
        </div>
    )
}

export default Login;