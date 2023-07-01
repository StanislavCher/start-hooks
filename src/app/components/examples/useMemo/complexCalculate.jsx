import React, { useEffect, useState, useMemo } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(50)
    const [otherState, setOtherState] = useState(false)
    // const btnColor = useMemo(() => ({ value: otherState ? 'primary' : 'secondary' }), [otherState])
    const btnColor = otherState ? 'primary' : 'secondary'
    const fact = useMemo(() => runFactorial(value), [value])
    // const fact = runFactorial(value)
    function runFactorial(n) {
        console.log('runFactorial')
        return factorial(n)
    }

    const handleIncrement = () => {
        setValue(prevState => prevState + 10)
    }
    const handleDecrement = () => {
        setValue(prevState => prevState - 10)
    }
    function factorial(n) {
        return n ? n * factorial(n - 1) : 1
    }
    useEffect(() => {
        console.log('render button color')
    }, [btnColor])

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <Divider />
                <p>{value}</p>
                <p>{fact}</p>
                <button
                    className="btn btn-primary mx-2"
                    onClick={handleIncrement}
                >
                    Increment
                </button>
                <button
                    className="btn btn-primary mx-2"
                    onClick={handleDecrement}
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    // className={'btn m-2 btn-' + btnColor.value}
                    className={'btn mx-2 btn-' + btnColor}
                    onClick={() => {
                        setOtherState(prevState => !prevState)
                    }
                    }
                >
                    Change color
                </button>
            </CardWrapper>
        </>
    )
}

export default ComplexCalculateExample
