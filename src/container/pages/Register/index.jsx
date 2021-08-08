import { Component } from "react";
import { Alert, Card, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import 'firebase/auth';
import firebase from '../../../config/firebase';
import { connect } from "react-redux";
import ActionType from '../../../redux/ActionType';


class Register extends Component {
    state = {
        email: '',
        password: '',
        statusMessage: '',
        disableButton: false,
        isRegisted: false,
    }

    changeUser = (e) => {
        e.preventDefault();
        this.props.changeUserName();
       
    }


    _handleInputChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        
        const {email, password} = this.state;
        
       this.setState({
           disableButton: true,
       })

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...

            this.setState({
                statusMessage: 'Register is successfully!',
                isRegisted: true,
                email: '',
                password: '',
            })
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            
            console.log(errorCode);
            console.log(errorMessage);
        });
    }

    _toLogin = () => {
        this.props.history.push('/login');
    }

    render(){
        
        return (
            <div className="container">
                <div className="row  mt-5 justify-content-center">
                    <div className="col-sm-4 mt-5">
                        <Card>
                            <Card.Body>
                            <Form>
                                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control onKeyUp={this._handleInputChange} type="text" name="username" placeholder="Enter username" />
                                </Form.Group> */}

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control onChange={this._handleInputChange} value={this.state.email} type="email" name="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onChange={this._handleInputChange} value={this.state.password} type="password" name="password" placeholder="Password" />
                                </Form.Group>
                               
                                <Button onClick={this._handleSubmit} aria-disabled={this.state.disableButton} variant="primary" className={this.state.disableButton ? 'col-sm-12 disabled' : 'col-sm-12'} type="submit">
                                    Register
                                </Button>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p>have account?<Link to="/login"><span>Login</span></Link></p>
                                    </div>
                                </div>
                            </Form>
                            </Card.Body>
                            {this.state.isRegisted ? <div className="row p-2">
                                <div className="col-sm-12">
                                    <Alert key="registerAlert" variant="success">
                                        This is a alert with{' '}
                                        <Alert.Link onClick={this._toLogin}>Login</Alert.Link>.
                                    </Alert>
                                </div>
                            </div> : null}
                        </Card>
                    </div>
                </div>
                
            </div>
        )
    }
}

const reduxState = (state) => ({
    isRegisterSuccess: state.isRegisterSuccess,
    username: state.userName
})

const reduxDispatch = (dispatch) => ({
    changeUserName: () => dispatch({type: ActionType.CHANGE_USERNAME, value: "faizal fernandi hhh"})
})


export default connect(reduxState, reduxDispatch)(Register)