import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import AddMovie from '../AddMovie/AddMovie';
import Details from '../Details/Details';
import List from '../List/List';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <Header />
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/details'>Details</Link>
              </li>
              <li>
                <Link to='/add-movie'>Add Movie</Link>
              </li>
            </ul>
          </nav>
          <Route exact path='/' component={List} />
          <Route path='/details' component={Details} />
          <Route path='/add-movie' component={AddMovie} />
        </Router>
      </div>
    );
  }
}

export default App;
