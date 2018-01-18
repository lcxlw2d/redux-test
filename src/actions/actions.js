const ADD_TODO = 'ADD_TODO'

export const addToDo = (text) => {
    console.warn('action创建了')
    return {
        type: ADD_TODO,
        text
    }
}