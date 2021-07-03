import React from 'react';
import { connect } from 'react-redux';

export class ComB extends React.Component {
    handleClick = () => {
        console.log(this.props);
        this.props.sendAction();
    }
    render() {
        return (
            <button onClick={this.handleClick}>点击</button>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendAction: () => {
            dispatch({
                type: 'send_test',
                value: '测试使用connect',
            });
        }
    }
}
export default connect(null, mapDispatchToProps)(ComB)