import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'


import Navbar from './screen/navbar/navbar'
import Homepage from './components/homepage/Homepage'
import Screen from './screen/Screen';
import Footer from './screen/footer/footer';

function App() {
  return (
    <div className="App">
      <div className="head-nav">
        <img id="head-nav-icon" src={require("./assets/AtomGIF.gif")}/>
        <h4>Welcome, Erikherl</h4>
      </div> 
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
}

export default App;
