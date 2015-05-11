import React from 'react';
import reactMixin from 'react-mixin';
import testMixin from './testMixin';

class Label extends React.Component {

    render() {
        return (
            <label>{this.props.text}</label>
        );
    }
}

export default Label;