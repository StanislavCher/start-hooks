import React, { useCallback, useEffect, useRef, useState } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'
// import prevState from "../useRef/prevState";

const UseCallBackExample = () => {
    const [data, setData] = useState({})
    const withoutCallback = useRef(0)
    const withCallback = useRef(0)
    const handleChange = ({ target }) => {
        setData((prevState) => (
            { ...prevState, [target.name]: target.value })
        )
    }
    // WithoutCallback
    const validateWithoutCallback = (data) => {
        console.log(data)
    }
    useEffect(() => {
        withoutCallback.current++
    }, [validateWithoutCallback])

    // WithCallback
    const validateWithCallback = useCallback((data) => {
        console.log(data)
    }, [])
    useEffect(() => {
        withCallback.current++
    }, [validateWithCallback])

    useEffect(() => {
        validateWithoutCallback(data)
        validateWithCallback(data)
    }, [data])

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <Divider/>
            <p>Render without callback: {withoutCallback.current}</p>
            <p>Render with callback: {withCallback.current}</p>
            <label
                htmlFor="email"
                className="form-label"
            >
                Email
            </label>
            <input
                // ref={inputRef}
                type="email"
                // type="file"
                className="form-control mb-2"
                name="email"
                id="email"
                value={data.email || ''}
                onChange={handleChange}
            />
        </CardWrapper>
    )
}

export default UseCallBackExample
