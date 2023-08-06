import React from 'react'
import { Input, Label } from 'reactstrap'

import { IRangeInput } from '../types'

/**
 * @name CustomRangeInput
 * @description This component renders a custom range input (slider) with an associated label.
 * @param {IRangeInput} props - The properties passed to the component.
 * @param {string} props.label - The label text for the range input.
 * @param {string} props.name - The name attribute for the range input element. This is used to identify the input in the form data when submitted.
 * @param {number} props.value - The current value of the range input.
 * @param {number} props.min - The minimum value allowed for the range input.
 * @param {number} props.max - The maximum value allowed for the range input.
 * @param {Function} props.handleChange - The function to handle range input state changes.
 * @param {Function} props.handleBlur - The function to handle when the range input loses focus.
 *
 * @returns {JSX.Element} A custom range input (slider) with an associated label.
 */
function CustomRangeInput(props: IRangeInput) {
    const { label, name, value, min, max, handleChange, handleBlur } = props
    return (
        <>
            <Label htmlFor={label}>{label}</Label>
            <Input
                id={label}
                type="range"
                name={name}
                value={value}
                min={min}
                max={max}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </>
    )
}

export default CustomRangeInput
