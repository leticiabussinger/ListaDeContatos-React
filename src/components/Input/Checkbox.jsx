// eslint-disable-next-line no-unused-vars
import React from 'react'
import { CheckboxContainer } from './styled'

// eslint-disable-next-line react/prop-types
const Checkbox = ({ checked, onChange, label, id, ...props }) => {
    return (
        <>
            <CheckboxContainer>
                <label htmlFor={id}>{label}</label>
                <input id={id} type="checkbox" checked={checked} onChange={onChange} {...props} />
            </CheckboxContainer>
        </>
    )
}

export default Checkbox