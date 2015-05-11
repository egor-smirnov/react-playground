import React from 'react';
import reactMixin from 'react-mixin';
import testMixin from './testMixin';

class Label extends React.Component {

    constructor() {
        super();
        this.initialStateFromMixin();
    }

    componentWillMount() {
        setInterval(() => this.increaseCounter(), 500);
    }

    render() {
        return (
            <label>{this.props.text} = {this.state.count}</label>
        );
    }
}

reactMixin(Label.prototype, testMixin);

export default Label;