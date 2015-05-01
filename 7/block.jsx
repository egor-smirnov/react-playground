import React from 'react';

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
            <button onClick={this.update.bind(this)}>{this.state.value}</button>
        );
    }

    componentWillMount() {
        console.log('mounting');
    }

    componentDidMount() {
        console.log('mounted');
    }

    componentWillUnmount() {
        console.log('unmounted');
    }
}

export default Block;