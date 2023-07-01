import React, { useRef } from 'react'
import CollapseWrapper from '../common/collapse'
const UseRefExercise = () => {
    const refBlock = useRef()
    const handleClickChangeBlock = () => {
        // refBlock.current.style.color = 'red'
        // console.log(refBlock.current.style.height)
        if (refBlock.current.style.height === '40px') refBlock.current.style.height = '150px'
        else refBlock.current.style.height = '40px'
        // refBlock.current.style.height === '40px' ? '150px' : '40px'
        if (refBlock.current.style.width === '60px') refBlock.current.style.width = '80px'
        else refBlock.current.style.width = '60px'
        // refBlock.current.style.width = 80
        if (refBlock.current.innerText === 'Блок') refBlock.current.innerText = 'text'
        else refBlock.current.innerText = 'Блок'
        // refBlock.current.innerText = 'text'
    }

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: 'white'
                }}
                ref={refBlock}
            >
                <small>Блок</small>
            </div>
            <button
                className="btn btn-secondary mt-2 p-2"
                onClick={handleClickChangeBlock}
            >
                Change Block
            </button>
        </CollapseWrapper>
    )
}

export default UseRefExercise
