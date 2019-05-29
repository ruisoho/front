import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Resource from './components/Resource';
import Updates from './components/Updates';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar />
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/contact" component={ Contact } />
          <Route path="/resource" component={ Resource } />
          <Route path="/updates" component={ Updates } />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
