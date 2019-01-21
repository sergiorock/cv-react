import React, { Component } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import '../css/default.css';
import '../css/layout.css';
import '../css/media-queries.css';


class App extends Component {
  render() {
    return (
      <div>
        < NavBar />
        < Header />
        < About />
        < Resume />
        < Contact />
        < Footer />
      </div>
    );
  }
}

export default App;
