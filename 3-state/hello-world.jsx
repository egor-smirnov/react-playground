import React from 'react';

class HelloWorld extends React.Component {

    static defaultProps = {txt: 'txt default value'};
    static propTypes = {
        txt: React.PropTypes.string.isRequired,
        num: React.PropTypes.oneOfType([
            React.PropTypes.number,
            React.PropTypes.bool
        ]).isRequired
    };

    constructor() {
        super();
        this.state = {name: 'Your Name'};
    }

    render() {
        const txt = this.props.txt;
        const num = this.props.num;

        return (
            <div>
                <h1>Hello, world!</h1>
                <input type="text" onChange={this.update.bind(this)}/>

                <p>{this.state.name}</p>

                <p>{txt}</p>

                <p>Number: {num}</p>
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