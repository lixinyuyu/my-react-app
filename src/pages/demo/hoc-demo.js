import React from 'react';

function calcData() {
    return [
        { label: 'label1', value: 1 },
        { label: 'label2', value: 2 },
        { label: 'label3', value: 3 },
    ];
}
class MovieList extends React.Component {
    render() {
        return (
            <ul>
                { this.props.list.map(item => {
                    return (<li key={item.value}>{item.label}</li>)
                })}
            </ul>
        )
    }
}


function withHoc(WrappedComponent, fetchingMethod) {
    class Hoc extends React.Component {
        state = {
            listData: [],
        }
        componentDidMount() {
            this.setState({
                listData: fetchingMethod(),
            })
        }
        render() {
            return <WrappedComponent list={this.state.listData}/>
        }
    }
    return Hoc;
}
const Temp = withHoc(MovieList, calcData);

export default Temp;