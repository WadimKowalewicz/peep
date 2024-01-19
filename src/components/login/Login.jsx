import React from "react";
import c from './Login.module.css'
import s from '../common/FormsControls/FormsControls.module.css'
import {NavLink, Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formsControls/FormsControls.js";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {createField} from '../common/formsControls/FormsControls.js';


const maxLength50 = maxLengthCreator(50);

const LoginForm = ({handleSubmit, error}) => {
    return (<div>
            <form onSubmit={handleSubmit}>
                    {createField("Email", "email", [required, maxLength50], Input)}
                    {createField("Password", "password", [required, maxLength50], Input, {type: "password"})}
                    {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
                {
                    error &&
                    <div className={s.formSummaryError}>{error}</div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (<div>
            <div className={c.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>
                    <h1>Login</h1>
                </NavLink>}
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>)
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);