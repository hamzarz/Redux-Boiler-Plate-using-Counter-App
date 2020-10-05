import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement} from './store/actions/actions'

class ImageToggle extends Component {
    render() {
        return(
            <div>
                <h1>Counter</h1>
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


export default connect(mapStateToProps, mapDispatchToProps)(ImageToggle);