import React from "react";
import style from "./FormsControls.module.css";
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, child, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input}{...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input}{...restProps} /></FormControl>
}

export const CreateField = (type, placeholder, name, component, validate) => {
    return (
        <div>
        <Field type="type" placeholder={"placeholder"} name={"name"} component={component}
               validate={validate}/>
        </div>
    )
}
