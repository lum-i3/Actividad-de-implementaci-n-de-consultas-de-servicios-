import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import Button from "../../components/Button";

function UserList () {

    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    const getUsers = async ()=> {
        const response = await fetch('https://fakestoreapi.com/users')
        const data = await response.json()

        console.log(data)
        setUsers(data)
    }

    useEffect(()=>{
        getUsers()
    },[])

    const deleteUser = async (id) => {

        const result = await Swal.fire({
            title: "¿Estás seguro?",
            text: "Este usuario será eliminado",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, borrar",
            cancelButtonText: "Cancelar"
        })

        if(result.isConfirmed){

            await fetch(`https://fakestoreapi.com/users/${id}`,{
                method:"DELETE"
            })

            Swal.fire(
                "Eliminado",
                "El usuario fue eliminado",
                "success"
            )

            getUsers()
        }
    }

    return (
        <div>
            <h1>UserList</h1>

            <div>
                <Button
                    type="primary"
                    text="Crear Usuario"
                    action={()=>navigate("/createUser")}
                />
            </div>

            <div className="container">
                {
                    users.map((user)=>{

                        return (
                            <div className="card" key={user.id}>

                                <h2>{user.name.firstname} {user.name.lastname}</h2>
                                <p>{user.email}</p>
                                <p>{user.phone}</p>

                                <Button
                                    type="secondary"
                                    text="Ver"
                                    action={()=>navigate(`/find/${user.id}`)}
                                />

                                <Button
                                    type="secondary"
                                    text="Borrar"
                                    action={()=>deleteUser(user.id)}
                                />

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UserList;