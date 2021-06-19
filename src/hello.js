import React from 'react';
class Hello extends React.Component {
    constructor() {
        super();
        this.refInput = React.createRef();
    }
    handleClick = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }
    handleInput = e => {
        this.setState({
            count: e.target.value,
        })
    }
    state = {
        count: 10,
        testa: 'a',
        select: 2,
    }
    arr = [
        { label: 'label1', value: 1 },
        { label: 'label2', value: 2 },
        { label: 'label3', value: 3 },
    ]
    handleSelect = e => {
        console.log(this.refInput.current.value);
        this.setState({
            select: +e.target.value,
        })
    }
    render() {
        return (
            <div>
                <span onClick={ this.handleClick }>click me!</span>
                <input value={this.state.count} onChange={ this.handleInput }/>
                <span>{this.state.count}</span>
                <select value={this.state.select} onChange={ this.handleSelect }>
                    { this.arr.map(item => (
                        <option key={item.value} value={item.value}>
                            {item.label}
                        </option>
                    ))}
                </select>
                <input  ref={this.refInput}/>
            </div>
        )
    }
}
export default Hello;