import React, { Component } from 'react'
import './header.css';
import logo from '../assets/img/logo.png';
import userImg from '../assets/img/users/avatar-1.jpg';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    changeSttSideBar = () => {
        var {dispatch } = this.props;
        dispatch({type: "CHANGE_STT_SIDEBAR"});
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    logout = () => {
        delete axios.defaults.headers.common["Authorization"];
        axios.defaults.headers.common['Authorization'] = "";
        this.props.dispatch({type: "LOGOUT"});
    }
    render () {
        return <nav className="navbar navbar-expand-sm fixed-top ">
            <div className="mr-0 title">
              <div className="logo">
                <NavLink to="/">
                  <img src={logo} alt="logo" />
                </NavLink>
              </div>
            </div>
            <div className="mr-auto title">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <NavLink to="#" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                    Quản lý lớp học
                  </NavLink>
                  <ul className="dropdown-menu">
                    <NavLink to="/danhsachlophoc" className="dropdown-item">
                      <span className="icon">
                        <i className="fa fa-list" aria-hidden="true" />
                      </span>
                      <span>Danh Sách Khóa Học</span>
                    </NavLink>
                    <NavLink to="/themlophoc" className="dropdown-item">
                      <span className="icon">
                        <i className="fas fa-plus" />
                      </span>
                      <span>Thêm Khóa Học</span>
                    </NavLink>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <NavLink to="#" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                    Quản lý Học Viên
                  </NavLink>
                  <div className="dropdown-menu">
                    <NavLink to="/danhsachhocvien" className="dropdown-item">
                      <span className="icon">
                        <i className="fas fa-users" />
                      </span>
                      <span>Danh Sách Học Viên</span>
                    </NavLink>
                    <NavLink to="/themhocvien" className="dropdown-item">
                      <span className="icon">
                        <i className="fas fa-user-plus" />
                      </span>
                      <span>Thêm Học Viên</span>
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <NavLink to="#" className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                    Quản lý Lịch Hẹn
                  </NavLink>
                  <div className="dropdown-menu">
                    <NavLink to="/" className="dropdown-item">
                      <span className="icon">
                        <i className="fas fa-users" />
                      </span>
                      <span>Danh Sách Lịch Hẹn</span>
                    </NavLink>
                    <NavLink to="/" className="dropdown-item">
                      <span className="icon">
                        <i className="fas fa-user-plus" />
                      </span>
                      <span>Thêm Lịch Hẹn</span>
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mr-1 mb-0 mb-lg-0">
              <button className="btn btn-outline-secondary btn-lg btn-sidebar">
                <i className="fas fa-bell" />
              </button>
            </div>
            <div className="mr-0 mb-0 mb-lg-0">
              <div className="nav-item dropdown media p-1">
                <NavLink className="nav-link" id="navbardrop" data-toggle="dropdown" to="#">
                  <div className="user">
                    <img src={userImg} alt="John Doe" className="mr-3 rounded-circle" />
                  </div>
                </NavLink>
                <div className="dropdown-menu">
                  <NavLink to="/account" className="dropdown-item">
                    My Profile
                  </NavLink>
                  <NavLink to="/setting" className="dropdown-item">
                    Setting
                  </NavLink>
                  <NavLink to="#" className="dropdown-item" onClick={() => {
                      this.logout();
                    }}>
                    Logout
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        logined: state.logined,
    }
}
export default connect(mapStateToProps)(Header)