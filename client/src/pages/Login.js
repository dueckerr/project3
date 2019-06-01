import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container } from "../components/Grid";
import Bootstrap from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Navbar, Nav } from 'react-bootstrap';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.email === 'test@gmail.com' && this.state.password === '123456' ){
      return "Logged in"

    }

  }

  render() {
    return (
      <div className="Login">
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email" >
            <Form.Control
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              />
          </Form.Group>
          <Form.Group controlId="password" >
            <Form.Control
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              />
          </Form.Group>
          <Button
            block
            disabled={!this.validateForm()}
            type="submit"
            >
            Login
          </Button>
        </Form>
      </Container>
      </div>
    );
  }
}