import React, { Component } from "react";
import "./App.css";

class SettingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      box1: 0,
      box2: 0,
      box3: 0,
      box4: 0,
      box5: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "Connected to: " +
        this.state.box1 +
        "." +
        this.state.box2 +
        "." +
        this.state.box3 +
        "." +
        this.state.box4 +
        ":" +
        this.state.box5
    );
    event.preventDefault();
  }

  render() {
    console.log(this.state.box1);
    console.log(this.state.box2);

    return (
      <div>
        <h1>Settings</h1>
        <p>
          Connected To: {this.state.box1}.{this.state.box2}.{this.state.box3}.
          {this.state.box4}:{this.state.box5}
        </p>
        <p>
          <input
            name="box1"
            type="text"
            placeholder="000"
            onChange={this.handleChange}
            id="textbox"
            size="6"
          />
          .
          <input
            name="box2"
            type="text"
            placeholder="00"
            onChange={this.handleChange}
            id="textbox"
            size="6"
          />
          .
          <input
            name="box3"
            type="text"
            placeholder="000"
            onChange={this.handleChange}
            id="textbox"
            size="6"
          />
          .
          <input
            name="box4"
            type="text"
            placeholder="00"
            onChange={this.handleChange}
            id="textbox"
            size="6"
          />
          :
          <input
            name="box5"
            type="text"
            placeholder="0000"
            onChange={this.handleChange}
            id="textbox"
            size="6"
          />
        </p>
        <p>
          <button onClick={this.handleSubmit}>Connect To Interop</button>
        </p>
      </div>
    );
  }
}

export default SettingsPage;
