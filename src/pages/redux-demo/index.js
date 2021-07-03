import React from 'react';
import store from '../../store';
import { sendAction } from '../../action';
import { secondSendAction } from '../../action';

export class ReduxDemo extends React.Component {
    handleClick = () => {
        store.dispatch(sendAction());
    }
    handleSecClick = () => {
        store.dispatch(secondSendAction());
    }
    state = {
        value: {},
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                value: store.getState(),
            })
            console.log('监听到了subscribe', store.getState());
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    按钮
                </button>
                <button onClick={this.handleSecClick}>
                    按钮2
                </button>
                {this.state.value.type}----
                {this.state.value.value}
            </div>
        )
    }
}

export default ReduxDemo;