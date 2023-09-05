import React from "react";
import {Route, Switch} from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Newsfeed from "./components/newsfeed/Newsfeed";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import store from "./redux/reduxStore";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar store={props.store}/>
            {/*<Navbar friends={props.state.sidebar?.friends3 ?? []}/>*/}
            <div className="app-wrapper-content">
                <Switch>
                    <Route path='/profile'
                           render={ () => <Profile store={props.store}
                                                   dispatch={store.dispatch.bind(store)}/> }/>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer store={props.store}
                                                            dispatch={store.dispatch.bind(store)}/> }/>
                    <Route path='/newsfeed'><Newsfeed/></Route>
                    <Route path='/music'><Music/></Route>
                    <Route path='/settings'><Settings/></Route>
                </Switch>
            </div>
        </div>

    );
}

export default App;