import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/async-reducers'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { fetchPosts } from './actions/async-actions'

import App from './App'

const loggerMiddleware = createLogger()

const store = createStore(reducer,applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
))

store.dispatch(fetchPosts())
    .then(() =>
        console.log(store.getState())
    )

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app')
)


store.subscribe(()=>{
    console.log(store.getState(),'globalState')
})