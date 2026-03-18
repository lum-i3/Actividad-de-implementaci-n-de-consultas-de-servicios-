import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import Input from "../../components/Input";
import Button from "../../components/Button";

function CreateUser () {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [phone, setPhone] = useState("")

    const createUser = async () => {

        if(!firstname || !lastname || !email || !username || !password || !phone){
            Swal.fire({
                icon: "warning",
                title: "Campos incompletos",
                text: "Debes llenar todos los campos"
            })
            return
        }

        if(!email.includes("@")){
            Swal.fire({
                icon: "error",
                title: "Email inválido",
                text: "Ingresa un correo válido"
            })
            return
        }

        try {

            const response = await fetch('https://fakestoreapi.com/users',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    email,
                    username,
                    password,
                    name:{
                        firstname,
                        lastname
                    },
                    phone
                })
            })

            const data = await response.json()

            console.log(data)

            Swal.fire({
                icon: "success",
                title: "Usuario creado",
                text: "El usuario fue registrado correctamente"
            })

            navigate("/list")

        } catch(error){

            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudo crear el usuario"
            })

            console.error(error)
        }
    }

    return (
        <div className="form-container">

            <div className="form-card">

                <h1 className="form-title">Crear Usuario</h1>

                <div className="form-group">
                    <Input
                        placeholder="First Name"
                        value={firstname}
                        onChange={setFirstname}
                    />
                </div>

                <div className="form-group">
                    <Input
                        placeholder="Last Name"
                        value={lastname}
                        onChange={setLastname}
                    />
                </div>

                <div className="form-group">
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={setEmail}
                    />
                </div>

                <div className="form-group">
                    <Input
                        placeholder="Username"
                        value={username}
                        onChange={setUsername}
                    />
                </div>

                <div className="form-group">
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={setPassword}
                    />
                </div>

                <div className="form-group">
                    <Input
                        placeholder="Phone"
                        value={phone}
                        onChange={setPhone}
                    />
                </div>

                <div className="form-button">
                    <Button
                        type="primary"
                        text="Crear Usuario"
                        action={createUser}
                    />
                </div>

            </div>

        </div>
    )
}

export default CreateUser;