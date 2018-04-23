import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Field from './field'
import fieldRedulcer from './fieldRedulcer'
// import ClassComponent from './classComponent'

// ReactDOM.render(<ClassComponent label='Contador' initialValue={10}/>, document.getElementById('app'))

const reducers = combineReducers({
    field: fieldRedulcer
})

ReactDOM.render(
    <Provider store={createStore(reducers)} >
        <Field initialValue='Teste'/>
    </Provider>
, document.getElementById('app'))