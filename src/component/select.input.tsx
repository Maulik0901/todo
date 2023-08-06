import React from 'react'
import { Label } from 'reactstrap'
import Select from 'react-select'

import { ISelectInput } from '../types'

/**
 * @Name CustomSelectInput
 *
 * @description This component renders a custom select input (dropdown) with an associated label.
 *
 * @param {ISelectInput} props - The properties passed to the component.
 * @param {string} props.label - The label text for the select input.
 * @param {Array} props.options - An array of options to populate the select input's dropdown list.
 * @param {string} props.name - The name attribute for the select input element. This is used to identify the input in the form data when submitted.
 * @param {any} props.value - The current selected value of the select input.
 * @param {Function} props.handleChange - The function to handle select input value changes.
 * @param {Function} props.handleBlur - The function to handle when the select input loses focus.
 *
 * @returns {JSX.Element} A custom select input (dropdown) with an associated label.
 */
function CustomSelectInput(props: ISelectInput) {
    const { label, options, name, value, handleChange, handleBlur } = props
    return (
        <>
            <Label htmlFor={label}>{label}</Label>
            <Select
                name={name}
                options={options}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </>
    )
}

export default CustomSelectInput
