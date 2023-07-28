import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import Newsfeed from "./components/newsfeed/Newsfeed";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path='/profile'><Profile/></Route>
                        <Route path='/dialogs'><Dialogs/></Route>
                        <Route path='/newsfeed'><Newsfeed/></Route>
                        <Route path='/music'><Music/></Route>
                        <Route path='/settings'><Settings/></Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
