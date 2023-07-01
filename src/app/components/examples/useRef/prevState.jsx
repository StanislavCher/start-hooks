import React, { useEffect, useRef, useState } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'
const PrevStateExample = () => {
    const prevState = useRef('')
    const [currentState, setOtherState] = useState('black')
    // const [renderCount] = useState(0)
    const handleToggleState = () => {
        setOtherState((prevState) => prevState === 'black'
            ? 'white'
            : 'black'
        )
    }
    useEffect(() => {
        prevState.current = currentState
    }, [currentState])
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>Prev state is: {prevState.current}</p>
            <p>Current state is: {currentState}</p>
            <button className="btn btn-primary" onClick={handleToggleState}>
                Toggle other state
            </button>
        </CardWrapper>
    )
}

export default PrevStateExample
