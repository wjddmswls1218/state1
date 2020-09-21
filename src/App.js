import React from "react";
import "./Button";
import "./styles/App.js";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }


  render() {
    return (
      <div ClassName="Red">Red
        <Button name={`_Blue`} action={this._Blue}></Button>

      </div>
    )
  }

_Blue = () => {
  this.setState()
}
}

export default App;
