import React from 'react';
import {reduxForm} from "redux-form";
import {CreateField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import style from "../Common/FormsControls/FormsControls.module.css";

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
            {CreateField("text", "Email", "email", Input, [required])}
            {CreateField("password", "Password", "password", Input, [required])}
            {CreateField("checkbox",'', "rememberMe", Input, '')}
        <div>
            {error && <span className={style.formSummaryError}>{error}</span>}
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);