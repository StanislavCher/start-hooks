import React, { useRef, useState, useEffect } from 'react'
// import React, { useRef } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'
const RenderCountExample = () => {
    const renderCount = useRef(0)
    const [otherState, setOtherState] = useState(false)
    // const [renderCount] = useState(0)
    const handleToggleState = () => {
        setOtherState(!otherState)
    }
    useEffect(() => {
        renderCount.current++
    })
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>Render count is: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={handleToggleState}>
                Toggle other state
            </button>
        </CardWrapper>
    )
}

export default RenderCountExample
