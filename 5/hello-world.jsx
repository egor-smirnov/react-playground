import React from 'react';
import InputWidget from './input-widget';

class HelloWorld extends React.Component {
    constructor() {
        super();
        this.state = {
            red: 0,
            green: 0,
            blue: 0
        };
    }

    render() {

        return (
            <div>
                <InputWidget ref="red" update={this.update.bind(this)} />
                <label>{this.state.red}</label>
                <br/>
                <InputWidget ref="green" update={this.update.bind(this)} />
                <label>{this.state.green}</label>
                <br/>
                <InputWidget ref="blue" update={this.update.bind(this)} />
                <label>{this.state.blue}</label>
            </div>
        );
    }

    update() {
        this.setState({
            red: React.findDOMNode(this.refs.red.refs.inp).value,
            green: React.findDOMNode(this.refs.green.refs.inp).value,
            blue: React.findDOMNode(this.refs.blue.refs.inp).value
        });
    }
}

export default HelloWorld;