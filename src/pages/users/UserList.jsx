import { useEffect, useState } from "react";


function UserList () {
    const [users, setUsers] = useState([])

    const getUsers = async ()=> {
        const response = await fetch('https://fakestoreapi.com/users')
        const data = await response.json()

        console.log(data)
        setUsers(data)
    }

    useEffect(()=>{
        getUsers()
    },[])

    return (
        <div>
            <h1>UserList</h1>
            <div className="container">
                {
                    users.map((user)=>{
                        return (
                            <div className="card" key={user.id}>
                                <h2>{user.name.firstname} {user.name.lastname}</h2>
                                <p>{user.email}</p>
                                <p>{user.phone}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UserList;