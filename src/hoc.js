import React from 'react';
function withHoc(WrappedComponent) {
    class Hoc extends React.Component {
        state = {
            x: 0,
            y: 0,
        }
        componentDidMount() {
            window.addEventListener('mousemove', this.handleChange);
        }
        componentWillUnmount() {
            window.removeEventListener('mousemove', this.handleChange);
        }
        handleChange = e => {
            this.setState({
                x: e.clientX,
                y: e.clientY,
            })
        }
        render() {
            return <WrappedComponent {...this.state} />
        }
    }
    return Hoc;
}

class Mouse extends React.Component {
    render() {
        return (
            <p className="add-text">{this.props.x}----{this.props.y}</p>
        );
    }
}
const Temp = withHoc(Mouse);
export default Temp;