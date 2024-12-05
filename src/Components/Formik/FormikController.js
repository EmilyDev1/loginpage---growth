import React from "react"
import Input from "./Input.js"
import TextArea from "./TextArea.js"
import Select from "./Select.js"
import RadioButton from "./RadioButton.js"
import Checkbox from "./Checkbox.js"

function FormikController(props) {
    const { control, ...rest } = props
    switch (control) {
        case "input":
            return <Input {...rest} className="border border-gray-200 rounded w-full py-2 px-2" />
        case "textArea":
            return <TextArea {...rest} className="border border-gray-200 rounded w-full py-1.5 px-2" />
        case "select":
            return <Select {...rest} className="border border-gray-200 rounded w-full py-1.5 px-2" />
        case "radio":
            return <RadioButton {...rest} className="" />
        case "checkbox":
            return <Checkbox {...rest} className="" />
        default:
            return null
    }
}
export default FormikController