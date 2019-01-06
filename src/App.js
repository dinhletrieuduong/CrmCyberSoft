import React, { Component } from 'react';
//import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import SideBar from './Components/sidebar';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Url from './router/url';

import { connect } from "react-redux";
class App extends Component {
  renderSideBar = () => {
    if(this.props.sttSideBar)
      return <SideBar></SideBar>;
    return true;
  }
  render() {
    return (
      <Router>
        <div>
          <Header></Header>
          {this.renderSideBar()}
          <Url/>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    sttSideBar: state.sttSideBar
  }
}
export default connect(mapStateToProps)(App);
//export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);
