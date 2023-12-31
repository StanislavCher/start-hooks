import React, { useEffect, useState } from 'react'
import PropTypes, { arrayOf, oneOfType } from 'prop-types'
import { validator } from '../../../utils/validator'

const FormComponent = ({ children, validatorConfig }) => {
    const [data, setData] = useState({})
    // const [data] = useState({})
    const [errors, setErrors] = useState({})
    // const [, setErrors] = useState({})
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            validate()
        }
    }, [data])

    const isValid = Object.keys(errors).length === 0
    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const clonedElements = React.Children.map(children, (child) => {
        const childType = typeof child.type
        let config = {}
        if (childType === 'function') {
            if (!child.props.name) {
                throw new Error(
                    'Name property is required for field components!',
                    child
                )
            }
            config = {
                ...child.props,
                onChange: handleChange,
                value: data[child.props.name] || '',
                error: errors[child.props.name]
            }
        }
        if (childType === 'string') {
            if (child.type === 'button') {
                if (child.props.type === 'submit' ||
                    child.props.type === undefined) {
                    config = {
                        ...child.props,
                        disabled: !isValid
                    }
                }
            }
        }
        // console.log(child)
        return React.cloneElement(child, config)
    })
    return (
        <form onSubmit={handleSubmit}>
            {clonedElements}
        </form>
    )
}

FormComponent.propTypes = {
    children: oneOfType([
        arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    validatorConfig: PropTypes.object
}

export default FormComponent
