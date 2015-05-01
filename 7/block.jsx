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

    render() {
        console.log('rendering');
        return (
            <button onClick={this.update.bind(this)}>{this.state.value * this.state.multiplier}</button>
        );
    }

    componentWillMount() {
        this.setState({
            multiplier: 2
        });
        console.log('mounting');
    }

    componentDidMount() {
        interval = setInterval(this.update.bind(this), 500);
        console.log('mounted');
    }

    componentWillUnmount() {
        clearInterval(interval);
        console.log('unmounted');
    }
}

export default Block;