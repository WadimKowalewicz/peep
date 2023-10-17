import React from "react";
import c from './Login.module.css'
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} name={"login"} component={Input}
                           validate={[required, maxLength10]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input}
                           validate={[required, maxLength10]}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
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