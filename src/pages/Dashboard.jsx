import { Link } from "react-router-dom";
import { useAuth } from "../security/authContext";

function Dashboard () {
    const {logout} = useAuth()

    return (
        <div>
            <h1>Dashboard</h1>
            <button
            onClick={logout}>
                Cerrar sesión
            </button>
            <Link to="/list">Users</Link>
        </div>
    );
}

export default Dashboard;