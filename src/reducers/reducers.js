import { combineReducers } from 'redux'
import { ADD_TODO } from '../actions/actions'

const todos = (state=[],action) => {
    console.warn('reducer执行了')
    console.warn('action.type:'+action.type)
    switch (action.type) {
        case 'ADD_TODO' :
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}

const todoApp = combineReducers({
    todos
})

export default todoApp