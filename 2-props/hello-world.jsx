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

    render() {
        const txt = this.props.txt;
        const num = this.props.num;

        return (
            <div>
                <h1>Hello, world!</h1>
                <p>{txt}</p>
                <p>Number: {num}</p>
            </div>
        );
    }
}

export default HelloWorld;