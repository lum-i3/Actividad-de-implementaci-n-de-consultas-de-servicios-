import { Navigate, Outlet } from "react-router-dom";


function ProtectedRoutes({ isAllowed }) {
    
    // si no es allowed, se redirige a la ruta raiz
    if (!isAllowed) {
        return <Navigate to="/"/>
    }

    // si hay children, se renderiza el children, si no, se renderiza el Outlet (el contenido de la ruta anidada)
    return <Outlet />
}

export default ProtectedRoutes;