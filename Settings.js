import React, { Component } from "react";
import {
  Container,
  Button,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";
import GoogleMap from "../Utils/GoogleMap/GoogleMap";
import "./Settings.css";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: "000.00.000.00.0000",
      gip: 0,
      un: "",
      pw: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert("Connected to: " + this.state.ip);
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <h1>Settings</h1>
        <p>Connected To: {this.state.ip}</p>
        <Col>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              Interop Username
            </InputGroupAddon>
            <Input
              name="un"
              type="text"
              placeholder="Enter username..."
              onChange={this.handleChange}
            />
          </InputGroup>
        </Col>
        <br />
        <Col>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              Interop Password
            </InputGroupAddon>
            <Input
              name="pw"
              type="text"
              placeholder="Enter password..."
              onChange={this.handleChange}
            />
          </InputGroup>
        </Col>
        <br />
        <Col>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Interop IP</InputGroupAddon>
            <Input
              name="ip"
              type="text"
              placeholder={this.state.ip}
              onChange={this.handleChange}
              maxLength="18"
            />
          </InputGroup>
          <br />
          <Button color="primary" onClick={this.handleSubmit}>
            Connect To Interop
          </Button>
        </Col>
        <br />
        <Col>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Ground IP</InputGroupAddon>
            <Input
              name="gip"
              type="text"
              placeholder="0"
              onChange={this.handleChange}
            />
          </InputGroup>
        </Col>
        <br />

        <Col>
          <Button color="primary" onClick={this.handleSubmit}>
            File Browser
          </Button>
          <Input type="file" />
        </Col>
      </Container>
    );
  }
}

export default Settings;
