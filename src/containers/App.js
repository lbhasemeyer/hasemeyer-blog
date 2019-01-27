import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import './App.css';
// import wixPosts from '../assets/data/wixPosts.xml'
import blogHelper from '../helpers/blogHelper.js';
import EverythingButEuroTrip from '../components/EverythingButEuroTrip.js';
const fs = require('fs');


export class App extends Component {
  render() {
    console.log(blogHelper);
    return (
      <div className="App">
        <EverythingButEuroTrip />
        HI MARK!
      </div>
    );
  }
}

App.propTypes = {
  count: PropTypes.number,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  count: state.count,
});

export default connect(mapStateToProps)(App);
