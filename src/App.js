import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";


const App = () => {
    return (
        <div>
            <div className="header-wrapper">
                <Header/>
            </div>
            <div className="main-wrapper">
                <Navbar/>
                <div className="content">
                    <Profile/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
