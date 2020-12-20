import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import '../../unsemantic-grid-tablet-no-ie7-rtl.css';
import Header from '../Header/Header';
import AddMovie from '../AddMovie/AddMovie';
import Details from '../Details/Details';
import List from '../List/List';
import Footer from '../Footer/Footer';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
        <div>
          <nav className="topnav">
                <Link to='/'>Home</Link>
                <Link to='/details'>Details</Link>
                <Link to='/add-movie'>Add Movie</Link>
          </nav>
        </div>
          <Route exact path='/' component={List} />
          <Route path='/details' component={Details} />
          <Route path='/add-movie' component={AddMovie} />
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
