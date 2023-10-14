import React from "react";
import c from './Login.module.css'
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} name={"login"} component={"input"}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={"input"}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <div className={c.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>
                    <h1>Login</h1>
                </NavLink>}
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}


export default Login;