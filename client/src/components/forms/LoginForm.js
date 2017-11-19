import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import FormField from './FormField';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {

    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  componentDidMount() {
    this.props.submitUser();
    this.props.fetchUser();
  }

  handleInputChange(e, history) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onFormSubmit(e) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const errors = {};

    const email = this.state.email;
    const password = this.state.password;

    const values = {
      email,
      password
    }

    const emailCheck = re.test(values.email);


    if (!values.email || emailCheck === false) {
      errors.email = 'You forgot to provide us with a valid email';
    }

    if (!values.password) {
      errors.password = 'You forgot the secret password';
    }

    this.props.submitUser(values)
      .then(() => {
        this.props.history.push('/');
      })
      .then(() => {
        this.props.fetchUser();
      });
  }

  render(){

    const { handleSubmit } = this.props;

    const { history } = this.props;
    return (
      <div id='login-form'>
        <div className="row">
          <form
            className="col s12"
            onSubmit={this.onFormSubmit}>
            <input
              type="text"
              name='email'
              placeholder="Email"
              onChange={this.handleInputChange}
            />
            <input
              type="password"
              name='password'
              placeholder="Password"
              onChange={this.handleInputChange}
            />
            <button
              type="submit"
              className="btn waves-effect waves-light"
              >Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(withRouter(LoginForm));
