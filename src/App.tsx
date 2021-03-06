import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Skills/>
        </div>
    );
}

export default App;
