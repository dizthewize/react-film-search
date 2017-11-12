import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

const Header = () => <h2>Header</h2>
const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Dashboard = () => <h2>Dashboard</h2>
const Footer = () => <h2>Footer</h2>

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;
