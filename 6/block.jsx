import React from 'react';

class Block extends React.Component {

    render() {

        return (
            <p>{this.props.children}</p>
        );
    }
}

export default Block;