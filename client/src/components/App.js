import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Home from './Home';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';

const About = () => <h2>About</h2>
const Product = () => <h2>Product</h2>
const Dashboard = () => <h2>Dashboard</h2>
const Cart = () => <h2>Cart</h2>
const Footer = () => <h3>Footer</h3>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/product/:id" component={Product} />
                  <Route exact path="/cart" component={Cart} />
                  <Route path='/login' component={LoginForm} />
                  <Route path='/register' component={RegisterForm} />
                  <Route exact path="/admin" component={Dashboard} />
                  {/* <Route exact path="/admin/users" component={Users} /> */}
                  {/* <Route exact path="/admin/products" component={AdminProducts} /> */}
                </Switch>
            {/* <Footer /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, actions)(App);
