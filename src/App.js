import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Body from './Components/body';
import SideBar from './Components/sidebar';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

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
