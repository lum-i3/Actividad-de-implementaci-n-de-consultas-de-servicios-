import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Users() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Users</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default Users;
