import { Link } from "react-router-dom";
import { useAuth } from "../security/authContext";
import Button from "../components/Button";

function Dashboard () {

    const { logout } = useAuth()

    return (
        <div className="dashboard-container">

            <div className="dashboard-card">

                <h1 className="dashboard-title">Dashboard</h1>

                <p className="dashboard-subtitle">
                    Bienvenido al panel de administración
                </p>

                <div className="dashboard-actions">

                    <Link to="/list">
                        <Button
                            type="primary"
                            text="Ver Usuarios"
                        />
                    </Link>

                    <Button
                        type="secondary"
                        text="Cerrar sesión"
                        action={logout}
                    />

                </div>

            </div>

        </div>
    );
}

export default Dashboard;