import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class NavigationBar extends Component {


  render() {
    return(<div className="nav">
      <h1><Link to="/">CodeVerse</Link></h1>
    </div>)
  }

}

export default NavigationBar;
