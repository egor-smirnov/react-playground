import React from 'react';
import Block from './block';
import Name from './name';

class HelloWorld extends React.Component {

    render() {
        return (
            <Block>Hi, I am <Name/></Block>
        );
    }
}

export default HelloWorld;