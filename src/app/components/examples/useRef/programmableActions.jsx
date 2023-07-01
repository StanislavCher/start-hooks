import React, { useRef } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'
const ProgrammableActionsExample = () => {
    const inputRef = useRef()
    const handleClick = () => {
        console.log(inputRef.current.clientWidth)
        // console.log(inputRef.current.files)
        inputRef.current.focus()
    }
    const handleClickWidth = () => {
        // console.log(inputRef.current)
        inputRef.current.style.width = '100px'
    }
    return (
        <CardWrapper>
            <SmallTitle
                className="card-title"
            >
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label
                htmlFor="email"
                className="form-label"
            >
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                // type="file"
                className="form-control mb-2"
                name="email"
                id="email"
            />
            <button
                className="btn btn-primary"
                onClick={handleClick}
            >
                Focus input
            </button>
            <button
                className="btn btn-secondary m-2"
                onClick={handleClickWidth}
            >
                Change width
            </button>
        </CardWrapper>
    )
}

export default ProgrammableActionsExample
