import React, { Component } from "react";
import "./App.css";

class SettingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0,
      value5: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value1: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "Connected to: " +
        this.state.value1 +
        "." +
        this.state.value2 +
        "." +
        this.state.value3 +
        "." +
        this.state.value4 +
        ":" +
        this.state.value5
    );
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Settings</h1>
        <p>
          Connected To: {this.state.value1}.{this.state.value2}.
          {this.state.value3}.{this.state.value4}:{this.state.value5}
        </p>
        <p>
          <input
            type="text"
            placeholder="000"
            //value={this.state.value1}
            //onChange={this.handleChange}
            id="textbox"
            size="6"
          />
          .
          <input placeholder="00" id="textbox" size="6" />
          .
          <input placeholder="000" id="textbox" size="6" />
          .
          <input placeholder="00" id="textbox" size="6" />
          :
          <input placeholder="0000" id="textbox" size="6" />
        </p>
        <p>
          <button onClick={this.handleChange}>Connect To Interop</button>
        </p>
      </div>
    );
  }
}

export default SettingsPage;
