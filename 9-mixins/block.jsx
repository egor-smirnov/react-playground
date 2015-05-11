import React from 'react';
import reactMixin from 'react-mixin';
import testMixin from './testMixin';

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

reactMixin(Block.prototype, testMixin);

export default Block;