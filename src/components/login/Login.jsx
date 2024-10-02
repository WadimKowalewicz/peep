import React from "react";
import c from './Login.module.css'
import s from '../common/formsControls/FormsControls.module.css'
import {NavLink, Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formsControls/FormsControls.js";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer.ts";
import {createField} from '../common/formsControls/FormsControls.js';
//test

const maxLength50 = maxLengthCreator(50);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (<div>
            <form onSubmit={handleSubmit}>
                    {createField("Email", "email", [required, maxLength50], Input)}
                    {createField("Password", "password", [required, maxLength50], Input, {type: "password"})}
                    {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

                    {captchaUrl && <img src={captchaUrl} />}
                    {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}
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
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (<div>
            <div className={c.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>
                    <h1>Login</h1>
                </NavLink>}
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
            </div>
        </div>)
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);