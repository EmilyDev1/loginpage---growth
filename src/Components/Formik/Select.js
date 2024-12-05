import React from "react";
import { Field, ErrorMessage } from "formik";

function Select(props) {
    const { label, name, options, ...rest } = props
    return (
        <div>
            <div className="flex"> <span></span> <label htmlFor={name} className='text-high font-medium text-base'> {label}</label></div>
            <Field as="select" id={name} name={name} {...rest}>
                <option></option>
                {options.map(option => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.key}
                        </option>
                    )
                })}
            </Field>
            <div className="text-red-500 text-sm text-left mt-1"><ErrorMessage name={name} /> </div>
        </div>
    )
}

export default Select;