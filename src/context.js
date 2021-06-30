import React from 'react';
// const { Provider, Consumer } = React.createContext();
// const MyContext = React.createContext('my---context');
// console.log(MyContext);
// class Parent extends React.Component {
//     render() {
//         return <Provider value="pink">
//             <Child1 />
//             {this.props.children}
//         </Provider>
//     }
// }

class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: props.temp,
        }
        console.log(props, this.props, this.state);
    }
    render() {
        return (
            <span>{this.state.temp}</span>
        )
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
}

// const Child1 = (props) => {
//     return (
//         <Child2></Child2>
//     )
// }

// const Child2 = (props) => {
//     return (
//         <Child3 />
//     )
// }

// const Child3 = (props) => {
//     return (
//         <div>
//             <Consumer>
//                 { (data) => <h1>{data}</h1>}
//             </Consumer>
//         </div>
//     )
// }

class Parent3 extends React.Component {
    handleClick = () => {
        this.setState({
            age: 100,
        })
    }
    state = {
        age: 10,
    }
    render() {
        console.log('render');
        return (
            <div>
                <Text temp={this.state.age}/>
                
                <button onClick={this.handleClick}>按钮</button>
                {this.state.age}
            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount', document.querySelector('.text-span'));
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    // shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate');
    //     return false;
    // }
}
export default Parent3;