import React from 'react';
export class Parent extends React.Component {
    state = {
        count: 0,
    }
    handleCal = () => {
        this.setState({
            count: this.state.count + 1,
        }) 
    }
    render() {
        return (
            <div>
                <Child1 count={this.state.count}/>
                <Child2 cal={this.handleCal}/>
            </div>
        )
    }
}

const Child1 = (props) => {
    return (
        <h1>计算器{props.count}</h1>
    )
}
const Child2 = (props) => {
    return (
        <button onClick={props.cal}>+1</button>
    )
}
export default Parent;