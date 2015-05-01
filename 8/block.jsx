import React from 'react';

var interval;

class Block extends React.Component {

    constructor() {
        super();
        this.state = {
            value: 0
        };
    }

    update() {
        this.setState({
            value: this.state.value + 1
        });
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.value % 3 === 0;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState);
    }

    render() {
        console.log('rendering');
        return (
            <button onClick={this.update.bind(this)}>{this.state.value} and {this.props.text} </button>
        );
    }
}

export default Block;