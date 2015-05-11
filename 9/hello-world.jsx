import React from 'react';
import Block from './block';
import Label from './label';

class HelloWorld extends React.Component {

    constructor() {
        super();
        this.initialStateFromMixin();
    }

    render() {
        return (
            <div>
                <Block text="some text"/>
                <br/>
                <Label text="some other text"/>
            </div>
        );
    }
}

export default HelloWorld;