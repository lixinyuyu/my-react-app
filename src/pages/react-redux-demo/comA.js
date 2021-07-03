import React from 'react';
import { connect } from 'react-redux';
export class ComA extends React.Component {
    render() {
        return (
        <span>{this.props.count}</span>
        )
    }
}

const mapStateToProps = state => {
    console.log('state-comA', state);
    return state;
}
export default connect(mapStateToProps)(ComA);
