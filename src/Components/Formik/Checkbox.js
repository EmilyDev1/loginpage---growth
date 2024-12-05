import React from "react"
import { Field, ErrorMessage } from "formik"

function Checkbox(props) {
    const { label, name, options, ...rest } = props
    return (
        <div>
            <div className="flex"> <span></span> <label htmlFor={name} className='text-high font-medium text-base'> {label}</label></div>
            <div className="border p-3 rounded"> <Field name={name}>
                {formik => {
                    const { field } = formik
                    return options.map(option => {
                        return (
                            <div key={option.key}>
                                <input
                                    type="checkbox"
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value && field.value.includes(option.value)}
                                />
                                <label className="ml-2">{option.key}</label>
                            </div>
                        )
                    })
                }}
            </Field></div>
            <ErrorMessage name={name} />
        </div>
    )
}

export default Checkbox