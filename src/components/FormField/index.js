import React from 'react'
import PropTypes from 'prop-types'

const FormField = ({ value, label }) => {
    return (
        <div>
            <p>
                {label}
                {value}
            </p>
        </div>
    )
}

FormField.propTypes = {
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
}

export default FormField
