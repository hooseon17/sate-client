import React, { Component } from 'react';

class Button extends Component { //This component handles Button press. 
    static PropTypes = {
        onClick: React.PropTypes.func,
        title: React.PropTypes.string
    }

    render() {
        return ( 
        <button onClick = { this.props.onClick } > 
            { this.props.title } 
        </button>
        )
    }
}

export default Button; 