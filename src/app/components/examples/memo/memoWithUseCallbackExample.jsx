// import React, { useEffect, useState } from 'react'
import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log('render button')
    })
    return <button className="btn btn-primary m-2" onClick={onLogOut}>LogOut</button>
}

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
}

function areEqual(prevState, nextState) {
    return prevState.onLogOut === nextState.onLogOut
    // return true
}

const MemoizedLogOutButton = React.memo(LogOutButton,
    // (prevProps, nextProps) => {
    //     return prevProps === nextProps
    // }
    areEqual
)
const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false)
    // const handleLogOut = () => {
    //     localStorage.removeItem('auth')
    // }
    const handleLogOut = useCallback(() => {
        localStorage.removeItem('auth')
    }, [])
    return (
        <>
            <button className="btn btn-primary m-2" onClick={() => { setState(!state) }}>initiate rerender</button>
            {/* <LogOutButton onLogOut={handleLogOut} />*/}
            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </>
    )
}

export default MemoWithUseCallbackExample
