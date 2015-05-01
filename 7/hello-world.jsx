import React from 'react';
import Block from './block';

class HelloWorld extends React.Component {

    mount() {
        React.render(
            <Block />,
            document.getElementById('mountingBlock')
        );
    }

    unmount() {
        React.unmountComponentAtNode(document.getElementById('mountingBlock'));
    }

    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="mountingBlock"></div>
            </div>
        );
    }
}

export default HelloWorld;