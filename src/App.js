import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Body from './Components/body';
import SideBar from './Components/sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <SideBar></SideBar>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
//export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);
