import React from 'react';

class InputWidget extends React.Component {

    render() {

        return (
            <div>
                <input type="text" onChange={this.props.update}/>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default InputWidget;