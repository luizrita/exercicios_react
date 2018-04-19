import React from 'react'

function childrenWithProps(props) {
    return React.Children.map(props.children, 
            child => React.cloneElement(child, { ...props}))
}

/*
    React.cloneElement funciona para clonar as propriedades para um elemento.
*/

export { childrenWithProps }