import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {
        return(
             <button onClick={this.props.action}>{this.props.name}</button>
        )
    }
}

export default Button;