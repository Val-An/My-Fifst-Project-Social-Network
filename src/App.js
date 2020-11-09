import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
    return (
        <BrowserRouter>
            <div>
                <div className="header-wrapper">
                    <Header/>
                </div>
                <div className="main-wrapper">
                    <Navbar/>
                    <div className="content">
                        <Route path='/profile' render={() => <Profile
                            postsData={props.postsData}/>}/>
                        <Route path='/friends' render={() => <Friends/>}/>
                        <Route path='/dialogs' render={() => <Dialogs
                            dialogData={props.dialogData}
                            messagesData={props.messagesData}/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </div>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
