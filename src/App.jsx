import "./components/components-styles.css"
import { Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Page404 from "./pages/Page404";
import Users from "./pages/users/Users";
import UserList from "./pages/users/UserList";
import UserDetail from "./pages/users/UserDetail";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { useAuth } from "./security/authContext";
import CreateUser from "./pages/users/CreateUser";


function App() {
  const {isLoggedIn, session, isLoading} = useAuth()


  if (isLoading) return null


  return (
    <>
      {
        // rutas si tengo sesion
        isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard/>} />

            {/* Rutas anidadas */}
            <Route element={<Users/>}>
              <Route path="list" element={<UserList/>} />
              <Route path="find/:id" element={<UserDetail/>} />
              <Route path="/createUser" element={<CreateUser/>} /> 
            </Route>

            {/* Ruta protegida por un componente  AQUI SOLO ENTRA EL ADMIN*/}
            <Route element={<ProtectedRoutes isAllowed={session.username === "admin"}/>}>
              <Route path="/profile" element={<Profile/>} />
            </Route>

          </Routes>
        ): (
          // rutas si no tengo sesion
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )
      }
    </>
  );
}

export default App;
