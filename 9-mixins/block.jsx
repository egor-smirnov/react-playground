import React from 'react';
import reactMixin from 'react-mixin';
import testMixin from './testMixin';

@reactMixin.decorate(testMixin)

class Block extends React.Component {

    constructor() {
        super();
        this.initialStateFromMixin();
    }

    render() {
        return (
            <button onClick={this.increaseCounter.bind(this)}>{this.props.text} = {this.state.count} </button>
        );
    }
}

export default Block;