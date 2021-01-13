import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <div>
            <div className="header-wrapper">
                <Header/>
            </div>
            <div className="main-wrapper">
                <Navbar state={props.state.userList}/>
                <div className="content">
                    <Route path='/profile' render={() => <Profile store={props.store} />}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
