import React from 'react'
import { Input, Label } from 'reactstrap'

import { ICheckboxInput } from '../types'

/**
 * @name CustomCheckBoxInput
 * @description This component renders a custom checkbox input with an associated label.
 * @param {ICheckboxInput} props - The properties passed to the component.
 * @param {string} props.label - The label text for the checkbox.
 * @param {string} props.name - The name attribute for the checkbox input element.
 * @param {string} props.value - The value attribute for the checkbox input element.
 * @param {boolean} props.isChecked - Indicates whether the checkbox is checked or not.
 * @param {Function} props.handleChange - The function to handle checkbox state changes.
 * @param {Function} props.handleBlur - The function to handle when the checkbox loses focus.
 *
 * @returns {JSX.Element} A custom checkbox input with an associated label.
 */
function CustomCheckBoxInput(props: ICheckboxInput) {
    const { label, name, value, isChecked, handleChange, handleBlur } = props
    return (
        <>
            <Input
                id={label}
                type="checkbox"
                name={name}
                value={value}
                checked={isChecked}
                onChange={handleChange}
                onBlur={handleBlur}
            />{' '}
            <Label htmlFor={label}>{label}</Label>
        </>
    )
}

export default CustomCheckBoxInput
