import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import AddMovie from '../AddMovie/AddMovie';
import Details from '../Details/Details';
import List from '../List/List';
import Footer from '../Footer/Footer';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
        <div>
          {/* nav bar */}
          <nav className="topnav">
                <Link to='/'>Home</Link>
                <Link to='/add-movie'>Add Movie</Link>
          </nav>
        </div>
          <Route exact path='/' component={List} />
          <Route path='/details' component={Details} />
          <Route path='/add-movie' component={AddMovie} />
          <Route path='/edit' component={Edit} />
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
