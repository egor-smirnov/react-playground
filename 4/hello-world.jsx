import React from 'react';
import InputWidget from './input-widget';

class HelloWorld extends React.Component {
    constructor() {
        super();
        this.state = {name: 'Your Name'};
    }

    render() {

        return (
            <div>
                <InputWidget name={this.state.name} update={this.update.bind(this)} />
                <InputWidget name={this.state.name} update={this.update.bind(this)} />
                <InputWidget name={this.state.name} update={this.update.bind(this)} />
            </div>
        );
    }

    update(event) {
        this.setState({
            name: event.target.value
        });
    }
}

export default HelloWorld;