import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import './style.scss'
// import Field from './field'
// import fieldRedulcer from './fieldRedulcer'
// import ClassComponent from './classComponent'

// ReactDOM.render(<ClassComponent label='Contador' initialValue={10}/>, document.getElementById('app'))

// const reducers = combineReducers({
//     field: fieldRedulcer
// })

import countReducer from './countReducer'
import Counter from './counter'

const reducers = combineReducers({
    counter: countReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)} >
        <Counter/>
    </Provider>
, document.getElementById('app'))