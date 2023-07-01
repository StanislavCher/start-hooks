import React from 'react'
import CollapseWrapper from '../common/collapse'
import PropTypes from 'prop-types'

const ListComponent = ({ children }) => {
    console.log(children)
    return (
        <>
            <ol>
                { React.Children.map(children, (child, index) => {
                // return (<div>
                //     { index + 1 }
                //     { child.innerText }
                // </div>)
                // return null
                    const config = {
                        ...child.props,
                        name: 'name' + index++
                    }
                    return React.cloneElement(
                        <li>
                            { child }
                        </li>,
                        config)
                })
                }
            </ol>
        </>
    )
}

ListComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
}

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{' '}
                <code>React.Children.map</code> так и{' '}
                <code>React.Children.toArray</code>
            </p>
            <ListComponent>
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
            </ListComponent>
        </CollapseWrapper>
    )
}

const Component = () => {
    return <div>Компонент списка</div>
}

export default ChildrenExercise