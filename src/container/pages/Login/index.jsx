import { Component } from "react";
import { Card, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
class Login extends Component {
    render(){
        return (
            <div className="container">
                <div className="row  mt-5 justify-content-center">
                    <div className="col-sm-4 mt-5">
                        <Card>
                            <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    {/* We'll never share your email with anyone else. */}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                               
                                <Button variant="primary" className="col-sm-12" type="submit">
                                    Login
                                </Button>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p>Don't have account?<Link to="/register"><span>Register</span></Link></p>
                                    </div>
                                </div>
                            </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Login