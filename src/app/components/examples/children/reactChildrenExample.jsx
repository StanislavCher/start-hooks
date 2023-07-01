import React, { useEffect, useState } from 'react'
// import React from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'
import TextField from '../../common/form/textField'
import PropTypes from 'prop-types'

const FormComponent = ({ children }) => {
    const [data, setData] = useState({})
    useEffect(() => {
        // console.log(data)
    }, [data])
    const handleChange = (target) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }))
    }
    console.log('1 ', children)
    // return children
    // return React.Children.map(children, (child) => {
    //     console.log(child)
    //     return child
    // })
    return React.Children.map(children, (child) => {
        // console.log(child)
        // return child
        const config = {
            ...child.props,
            onChange: handleChange,
            value: data[child.props.name] || ''
        }
        return React.cloneElement(child, config)
    })
}
FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider/>
            <FormComponent>
                <TextField name='email' type='email' label='Email'/>
                <TextField name='password' type='password' label='Пароль'/>
            </FormComponent>
        </CardWrapper>
    )
}

export default ReactChildrenExample
