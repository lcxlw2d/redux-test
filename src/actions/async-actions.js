const REQUEST_POST = 'REQUEST_POST'
const RECEIVE_POST = 'RECEIVE_POST'

export const requestPost = () => ({
    type:REQUEST_POST
})

export const receivePost = (json) => ({
    type:RECEIVE_POST,
    posts:json.data.children.map(child => child.data),
    receivedAt:Date.now()
})

export const fetchPosts = () => dispatch => {
    dispatch(requestPost())
    return fetch('https://www.reddit.com/r/reactjs.json')
        .then(resp => resp.json())
        .then(json => dispatch(receivePost(json)))
        .catch(err => console.error(err))
}