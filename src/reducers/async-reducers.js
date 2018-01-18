import { combineReducers } from 'redux'
import { REQUEST_POST,RECEIVE_POST } from '../actions/async-actions'

const initState = {
    isFetching:false,
    didInvalidate:false,
    items:[]
}
const posts = (state = initState,action) => {
    switch (action.type) {
        case 'REQUEST_POST':
            return Object.assign({},state,{
                isFetching:true
            })
        case 'RECEIVE_POST':
            return Object.assign({},state,{
                isFetching:false,
                didInvalidate:false,
                items:action.posts,
                lastUpdate:action.receivedAt
            })
        default:
            return state    
    }
}

const rootReducer = combineReducers({
    posts
})

export default rootReducer