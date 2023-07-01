import React from 'react'
import CardWrapper from '../../common/Card'
// import PropTypes from 'prop-types'

// eslint-disable-next-line react/display-name
const withPropsStyles = (Component) => (props) => {
    return (
        <CardWrapper>
            <Component {...props} name='new Name' />
        </CardWrapper>
    )
}

// withPropsStyles.propTypes = {
//     name: PropTypes.string
// }

export default withPropsStyles
