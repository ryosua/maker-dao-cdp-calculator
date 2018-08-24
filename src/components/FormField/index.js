import React from 'react'
import PropTypes from 'prop-types'

const FormField = ({ value, stateKey, label, handleChange, readOnly }) => {
    return (
        <div>
            <label>{label}</label> <br />
            <input type="text" readOnly={readOnly} value={value} onChange={e => handleChange(e, stateKey)} />
        </div>
    )
}

FormField.propTypes = {
    value: PropTypes.number.isRequired,
    stateKey: PropTypes.string,
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
    readOnly: PropTypes.bool.isRequired
}

FormField.defaultProps = {
    readOnly: false
}

export default FormField
