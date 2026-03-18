import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UserDetail () {

    const { id } = useParams();
    const [user, setUser] = useState(null)

    const getUser = async () => {

        const response = await fetch(`https://fakestoreapi.com/users/${id}`)
        const data = await response.json()

        setUser(data)
    }

    useEffect(()=>{
        getUser()
    },[])

    if(!user) return <p className="loading">Cargando usuario...</p>

    return (
        <div className="detail-container">

            <div className="detail-card">

                <h1 className="detail-title">Detalle del Usuario</h1>

                <div className="detail-item">
                    <strong>Nombre:</strong> {user.name.firstname} {user.name.lastname}
                </div>

                <div className="detail-item">
                    <strong>Username:</strong> {user.username}
                </div>

                <div className="detail-item">
                    <strong>Email:</strong> {user.email}
                </div>

                <div className="detail-item">
                    <strong>Teléfono:</strong> {user.phone}
                </div>

            </div>

        </div>
    )
}

export default UserDetail;