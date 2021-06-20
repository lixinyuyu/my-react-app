import React from 'react';
const { Provider, Consumer } = React.createContext();

class Parent extends React.Component {
    render() {
        return <Provider value="pink">
            <Child1 />
            {this.props.children}
        </Provider>
    }
}

const Child1 = (props) => {
    return (
        <Child2></Child2>
    )
}

const Child2 = (props) => {
    return (
        <Child3 />
    )
}

const Child3 = (props) => {
    return (
        <div>
            <Consumer>
                { (data) => <h1>{data}</h1>}
            </Consumer>
        </div>
    )
}
export default Parent;