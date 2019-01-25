import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DangNhap from '../Components/DangNhap';
import DangKy from '../Components/DangKy';

class Login extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={DangNhap}/>
                <Route exact path="/dangnhap" component={DangNhap}/>
                <Route exact path="/dangky" component={DangKy}/>
            </div>
        );
    }
}

export default Login;