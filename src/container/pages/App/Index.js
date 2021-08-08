import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Fragment } from 'react';
import './App.css';
import Dashboard from '../Dashboard/index';
import Login from '../Login/index';
import Register from '../Register/index';

function App() {
    return ( 
        <Router>
            <Fragment>
                <Route path="/" exact component={Dashboard}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/register" exact component={Register}></Route>
            </Fragment>
        </Router>
    );
}

export default App;