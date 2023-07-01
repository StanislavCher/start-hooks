import React from 'react'
import CardWrapper from '../common/Card'

// eslint-disable-next-line react/display-name
const withFunctions = (SimpleComponent) => () => {
    const isAuth = localStorage.getItem('auth') === 'token'
    const onLogin = () => {
        localStorage.setItem('auth', 'token')
        return null
    }
    const onLogOut = () => {
        localStorage.removeItem('auth')
        return null
    }

    return (
        <CardWrapper>
            <SimpleComponent
                onLogin={onLogin}
                onLogOut={onLogOut}
                isAuth={isAuth}
            />
        </CardWrapper>
    )
}

export default withFunctions
