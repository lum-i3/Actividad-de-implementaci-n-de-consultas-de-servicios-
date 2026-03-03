
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home () {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    }

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default Home;