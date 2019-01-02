import React, { Component } from 'react'
import './header.css'
import userImg from '../assets/img/users/avatar-1.jpg'
class Header extends Component {
    
    changeSttSideBar = () => {
        /*if (document.querySelector('.sidenav').style.display === 'block' || document.querySelector('.sidenav').style.display === '') {
            document.querySelector('.sidenav').style.display = 'none';
            document.querySelector('.navbar').style.marginLeft = '0';
            document.querySelector('.main').style.marginLeft = '0';
        } else {
            (document.querySelector('.sidenav')).style.display = 'block';
            (document.querySelector('.navbar')).style.marginLeft = '196px';
            (document.querySelector('.main')).style.marginLeft = '196px';
        }*/
    }
    render () {
        return (
            <nav className="navbar navbar-expand-sm fixed-top">
                <button className="btn btn-outline-secondary btn-lg btn-sidebar" onClick={this.changeSttSideBar()}>☰</button>
                
                <div className="mr-auto title">
                    <h4>Hello</h4>
                </div>
                <div className="mr-1 mb-0 mb-lg-0">
                    <button className="btn btn-outline-secondary btn-lg btn-sidebar">
                        <i className="fas fa-bell"></i>                        
                    </button>
                </div>
                <div className="mr-0 mb-0 mb-lg-0">
                    <div className="nav-item dropdown media p-1">
                        <a className="nav-link" href="#" id="navbardrop" data-toggle="dropdown">
                            <div className="user">
                                <img src={userImg} alt="John Doe" className="mr-3 rounded-circle"/>
                            </div>
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">My Profile</a>
                            <a className="dropdown-item" href="#">Setting</a>
                            <a className="dropdown-item" href="#">Logout</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header