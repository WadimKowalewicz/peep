import React from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Newsfeed from "./components/newsfeed/Newsfeed";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                {/*<Navbar friends={props.state.sidebar?.friends3 ?? []}/>*/}
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <Login/>}/>

                        <Route path='/newsfeed'><Newsfeed/></Route>
                        <Route path='/music'><Music/></Route>
                        <Route path='/settings'><Settings/></Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

/*
export default connect(null, {getAuthUserData})(App);
*/
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
