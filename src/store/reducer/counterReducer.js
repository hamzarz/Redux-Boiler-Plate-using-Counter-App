const initState = {
    count:0
}

const CounterReducer = (state=initState, action) => {
    switch(action.type) {
        case 'INCREMENT':
        return {count:state.count+1}
        case 'DECREMENT' :
            if(state.count>0) return {count:state.count-1}
        default :
        return state
    }
}
export default CounterReducer