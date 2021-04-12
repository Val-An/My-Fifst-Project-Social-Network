import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Redirect, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = (props) => {
    return (
        <div>
            <div className="header-wrapper">
                <HeaderContainer />
            </div>
            <div className="main-wrapper">
                <Navbar />
                <div className="content">
                    {/*<Redirect from='/' to='/profile'/>*/}
                    <Route path='/profile/:userId?' render={() => <ProfileContainer store={props.store} />}/>
                    <Route path='/friends' render={() => <FriendsContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
