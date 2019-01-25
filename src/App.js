import React, { Component } from 'react';
//import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Url from './router/url';
import { BrowserRouter as Router } from 'react-router-dom';

import { connect } from "react-redux";
import Login from './router/login';
class App extends Component {
  renderLayout = () => {
    if(!this.props.logined)
      return <Login></Login>;
    return (
      <Router>
        <div>
          <Header></Header>
          <Url/>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
  render() {
    return (
      <Router>
      {this.renderLayout()}
      </Router>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    logined: state.logined,
  }
}
export default connect(mapStateToProps)(App);
//export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);
