import { Component, Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
class Dashboard extends Component {
    render(){
        return (
            <Fragment>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <div className="container">
                        <Navbar.Brand href="#home">ToDo</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/group">Group</Nav.Link>
                                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                                </Nav>
                                <Nav>
                                <Link className="nav-item nav-link" to="/login">Login</Link>
                                <Link className="nav-item nav-link" to="/register">Register</Link>
                                </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </Fragment>
        )
    }
}


export default Dashboard