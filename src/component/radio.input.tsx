import React from 'react'
import { Input, Label } from 'reactstrap'

import { IRadioInput } from '../types'

/**
 * @name CustomRadioInput
 * @description This component renders a custom radio input (radio button) with an associated label.
 * @param {IRadioInput} props - The properties passed to the component.
 * @param {string} props.label - The label text for the radio input.
 * @param {string} props.name - The name attribute for the radio input element. This is used to group related radio inputs together.
 * @param {string} props.value - The value attribute for the radio input element. This value will be submitted if the radio input is selected.
 * @param {boolean} props.isChecked - Indicates whether the radio input is checked or not.
 * @param {Function} props.handleChange - The function to handle radio input state changes.
 * @param {Function} props.handleBlur - The function to handle when the radio input loses focus.
 *
 * @returns {JSX.Element} A custom radio input (radio button) with an associated label.
 */
function CustomRadioInput(props: IRadioInput) {
    const { label, name, value, isChecked, handleChange, handleBlur } = props
    return (
        <>
            <Input
                id={label}
                type="radio"
                name={name}
                value={value}
                checked={isChecked}
                onChange={handleChange}
                onBlur={handleBlur}
            />{' '}
            <Label>{label}</Label>
        </>
    )
}

export default CustomRadioInput
