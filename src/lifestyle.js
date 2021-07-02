import React from 'react';
import PropTypes from 'prop-types';

class Parent extends React.Component {
    render() {
        return this.props.children(this.state);
    }
    state = {
        x: 0,
        y: 0,
    }
    handleMove = e => {
        this.setState({
            x: e.clientX,
            y: e.clientY,
        });
    }
    componentDidMount() {
        window.addEventListener('mousemove', this.handleMove)
    }
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMove);
    }
}
Parent.propTypes = {
    children: PropTypes.func.isRequired,
}

class Child extends React.Component {
    state = {
        x: 0,
    }
    render() {
        return (
            <div>
                {/* <Parent render={ mouse => {
                    return (
                        <p>{mouse.x}-{mouse.y}</p>
                    )
                }}/> */}
                <Parent>
                    {mouse => {
                        return <p>{mouse.x}----{mouse.y}</p>  
                    }}
                </Parent>
            </div>
        )
    }
}
export default Child;