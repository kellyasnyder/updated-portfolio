import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/styles.scss';
import Header from './components/header';
import Main from './components/main';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route name="Work" exact path="/" render={props => (
            <Main {...props} />
          )} />
          <Route name="About" exact path="/about" render={props => (
            <About {...props} />
          )} />
          <Route name="Contact" exact path="/contact" render={props => (
            <Contact {...props} />
          )} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;