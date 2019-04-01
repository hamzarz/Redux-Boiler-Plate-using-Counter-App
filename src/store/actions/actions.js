debugger
export const increment = () => async dispatch => {
    //you can add async actions here
    dispatch({type:'INCREMENT'})
}
export const decrement = () => async dispatch => {
    //you can add async actions here
    dispatch({type:'DECREMENT'})
}
