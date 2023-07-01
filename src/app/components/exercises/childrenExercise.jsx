import React from 'react'
import CollapseWrapper from '../common/collapse'
import PropTypes, { oneOfType } from 'prop-types'

const ListComponent = ({ children }) => {
    // console.log('ch', children)
    const arrayOfChildren = React.Children.toArray(children)
    // console.log('arrCh', arrayOfChildren)
    return (
        // <>
        //     <ol>
        React.Children.map(arrayOfChildren, (child, index) => {
        // return (<div>
        //     { index + 1 }
        //     { child.innerText }
        // </div>)
        // return null
            const config = {
                ...child.props,
                // name: ++index,
                name: +child.key.replace('.', '') + 1
            }
            return React.cloneElement(
                // <li>
                // { child }
                // </li>
                child,
                config)
        })
        //     </ol>
        // </>
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

const Component = ({ name }) => {
    return <div>{name}. Компонент списка</div>
}

Component.propTypes = {
    name: oneOfType([PropTypes.number, PropTypes.string])
}

export default ChildrenExercise
