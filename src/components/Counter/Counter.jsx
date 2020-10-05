import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement} from '../../store/actions/actions'
import Header from "../../views/Header/Header";
import "./index.css";

class Counter extends Component {
    render() {
        return(
            <div>
                <Header heading={"Counter"}/>
                <button onClick={this.props.increment} className="counter-btn">Increment</button>
                <span className="counter-number">{this.props.count}</span>
                <button onClick={this.props.decrement} className="counter-btn">Decrement</button>
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