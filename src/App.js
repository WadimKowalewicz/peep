import React from "react";
import store from "./redux/reduxStore";
import { Route, Switch, withRouter, BrowserRouter, HashRouter } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Newsfeed from "./components/newsfeed/Newsfeed";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import { Provider, connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/preloader/Preloader";
import {withSuspense as withSuspense} from "./hoc/withSuspense";
const DialogsContainer = React.lazy(() => import("./components/dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/profile/ProfileContainer"));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                {/*<Navbar friends={props.state.sidebar?.friends3 ?? []}/>*/}
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path='/profile/:userId?'
                            render={withSuspense(ProfileContainer)} />
                        <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)} />
                        <Route path='/users'
                            render={() => <UsersContainer />} />
                        <Route path='/login'
                            render={() => <Login />} />

                        <Route path='/newsfeed'><Newsfeed /></Route>
                        <Route path='/music'><Music /></Route>
                        <Route path='/settings'><Settings /></Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

const PeepApp = (props) => {
    //<BrowserRouter basename = {process.env.PUBLIC_URL}>
    //because of 'gh-pages we use hashrouter, but....
   return <HashRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}


export default PeepApp;