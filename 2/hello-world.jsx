import React from 'react';

class HelloWorld extends React.Component {
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

HelloWorld.defaultProps = {
    txt: 'txt default value'
};

HelloWorld.propTypes = {
    txt: React.PropTypes.string.isRequired,
    num: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.bool
    ]).isRequired
};

export default HelloWorld;