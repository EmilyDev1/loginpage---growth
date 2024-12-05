import React from "react";
import { Field, ErrorMessage } from "formik";

function Input(props) {
    const { name, label, ...rest } = props
    return (
        <div className="text-sm">
            <div className="flex"> <span></span> <label htmlFor={name} className='text-high font-medium text-base'> {label}</label></div>
            <Field name={name} {...rest} />
            <div className="text-red-500 text-sm text-left mt-1"><ErrorMessage name={name} /> </div>
        </div>
    )
}
export default Input;