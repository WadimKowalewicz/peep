import React from "react";
import {Route, Switch} from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import Newsfeed from "./components/newsfeed/Newsfeed";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";



const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar friends={props.state.sidebar.friends}/>
            <div className="app-wrapper-content">
                <Switch>
                    <Route path='/profile' render={() => <Profile
                        posts={props.state.profilePage.posts}
                        newPostText={props.state.profilePage.newPostText}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}/>}
                    />
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogs={props.state.dialogsPage.dialogs}
                        messages={props.state.dialogsPage.messages}
                        newMessageText={props.state.dialogsPage.newMessageText}
                        addMessage={props.addMessage}
                        updateNewMessageText={props.updateNewMessageText}/>}
                    />
                    <Route path='/newsfeed'><Newsfeed/></Route>
                    <Route path='/music'><Music/></Route>
                    <Route path='/settings'><Settings/></Route>
                </Switch>
            </div>
        </div>

    );
}

export default App;

