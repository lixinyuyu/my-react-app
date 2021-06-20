import PropTypes from 'prop-types';
import React from 'react';

class ValidCom extends React.Component {
    state = {
        count: 10,
        value: 'val',
    }
    render() {
        return <Child name="names" custom={this.state}/>
    }
}

const Child = (props) => {
    return (
        <div>child{props.custom.count}
            <p>{props.pageSize}</p>
        </div>
    )
}
Child.propTypes = {
    name: PropTypes.string,
    custom: PropTypes.shape({
        count: PropTypes.number,
        value: PropTypes.string,
    }).isRequired,
}
Child.defaultProps = {
    pageSize: 10,
}
export default ValidCom;