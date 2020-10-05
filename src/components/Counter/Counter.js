import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement} from './../../store/actions/actions'
import Header from "../../views/Header/Header"

class Counter extends Component {

    render() {
        return(
            <div>
                <Header heading={"Counter"}/>
                <button onClick={this.props.increment}>Increment</button>
                <span>{this.props.count}</span>
                <button onClick={this.props.decrement}>Decrement</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        count:state.counter.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        increment:() =>  dispatch(increment()),
        decrement:() =>  dispatch(decrement())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);