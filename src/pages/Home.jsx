import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Home () {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    }

    return (
        <div>
            <h1>Home</h1>
            <Link to="/login">Login</Link>
            <Button text="Login" action={goToLogin} />
        </div>
    );
}

export default Home;