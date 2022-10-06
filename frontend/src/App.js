import React from 'react';
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom"

import Header from './components/Header';
import { Home } from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import "./App.css"
import AddProduct from './components/AddProduct';

function App() {
  return (
    <Router>
    <div className="App">
     <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Login' element={ <Login/>}/>
    <Route path='/AddProduct' element={<AddProduct/>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
