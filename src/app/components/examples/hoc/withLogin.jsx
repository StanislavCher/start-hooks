import React from 'react'
import SmallTitle from '../../common/typografy/smallTitle'
// import PropTypes from 'prop-types'

// eslint-disable-next-line react/display-name
const withLogin = (Component) => (props) => {
    const isLogin = localStorage.getItem('auth')
    return (
        <div>
            { isLogin ? <Component {...props} /> : <SmallTitle>Auth</SmallTitle> }
        </div>
    )
}

// withLogin.propTypes = {
//     prop: PropTypes.string
// }

export default withLogin
