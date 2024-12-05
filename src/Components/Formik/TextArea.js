import React from "react"
import { Field, ErrorMessage } from "formik"

function TextArea(props) {
    const { label, name, ...rest } = props
    return (
        <div>
            <div className="flex"> <span></span> <label htmlFor={name} className='text-high font-medium text-base'> {label}</label></div>
            <Field as="textarea" id={name} name={name} {...rest} />
            <div className="text-red-500 text-sm"><ErrorMessage name={name} /> </div>
        </div>
    )
}
export default TextArea