import React from 'react'
import { Input, Label } from 'reactstrap'

import { ITextInput } from '../types'

/**
 * @name CustomInput
 *
 * @description This component renders a custom text input field with an associated label.
 *
 * @param {ITextInput} props - The properties passed to the component.
 * @param {string} props.name - The name attribute for the text input element. This is used to identify the input in the form data when submitted.
 * @param {string} props.value - The current value of the text input.
 * @param {Function} props.handleChange - The function to handle text input value changes.
 * @param {Function} props.handleBlur - The function to handle when the text input loses focus.
 * @param {string} props.label - The label text for the input field.
 *
 * @returns {JSX.Element} A custom text input field with an associated label.
 */
function CustomInput(props: ITextInput) {
    const { name, value, handleChange, handleBlur, label } = props
    return (
        <>
            <Label>{label}:</Label>
            <Input
                type="text"
                name={name}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </>
    )
}

export default CustomInput
