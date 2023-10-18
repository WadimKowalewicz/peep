import React from "react";
import c from './Login.module.css'
import s from '../common/FormsControls/FormsControls.module.css'
import {NavLink, Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";


const maxLength50 = maxLengthCreator(50);

const LoginForm = (props) => {
    return (<div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Email"} name={"email"} component={Input}
                           validate={[required, maxLength50]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input}
                           type={"password"} validate={[required, maxLength50]}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
                </div>
                {
                    props.error &&
                    <div className={s.formSummaryError}>{props.error}</div>
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