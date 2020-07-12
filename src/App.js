import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './navBar/NavBar';

const Home = () => <h1>Home</h1>;
const Host = () => <h1>Host</h1>;
const Help = () => <h1>Help</h1>;
const Signup = () => <h1>Sign up</h1>;
const Login = () => <h1>Login</h1>;


function App() {
  return (
    <Router>
        <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route  path="/host" component={Host}/>
        <Route  path="/help" component={Help}/>
        <Route  path="/signup" component={Signup}/>
        <Route  path="/login" component={Login}/>
    </Router>
  );
}

export default App;
