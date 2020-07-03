import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import NavBar from './navBar/NavBar';


function App() {
  return (
    <Router>
        <NavBar/>
    </Router>
  );
}

export default App;
