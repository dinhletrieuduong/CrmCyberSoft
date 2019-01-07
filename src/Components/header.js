import React, { Component } from 'react'
import './header.css'
import userImg from '../assets/img/users/avatar-1.jpg';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
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

    showedTitle = () => {
        if (window.location.pathname === "" || window.location.pathname === "/" || window.location.pathname === "/danhsachkhoahoc") {
            return <h2>Danh Sách Khóa Học</h2>;
        }
        if (window.location.pathname === "/taokhoahoc"){
            return <h2>Tạo Khóa Học</h2>;
        }
        if (window.location.pathname.includes("chinhsuakhoahoc")) {
            console.log(window.location.pathname.includes("chinhsuakhoahoc"));
            console.log(window.location.pathname.indexOf("chinhsuakhoahoc"));
            return <h2>Chỉnh Sửa Khóa Học</h2>;
        }
    }
    render () {
        const styleHead = {
            marginLeft: (this.props.sttSideBar && this.state.width > 750 ? 256 : 0) + 'px'
        };
        return (
            <nav className=" navbar navbar-expand-sm fixed-top" style={styleHead}>
                <button className="btn btn-outline-secondary btn-lg btn-sidebar" onClick={() => this.changeSttSideBar()}>☰</button>
                <div className="mr-auto title">
                    {this.showedTitle()}
                </div>
                <div className="mr-1 mb-0 mb-lg-0">
                    <button className="btn btn-outline-secondary btn-lg btn-sidebar">
                        <i className="fas fa-bell"></i>                        
                    </button>
                </div>
                <div className="mr-0 mb-0 mb-lg-0">
                    <div className="nav-item dropdown media p-1">
                        <NavLink className="nav-link" id="navbardrop" data-toggle="dropdown" to="#">
                            <div className="user">
                                <img src={userImg} alt="John Doe" className="mr-3 rounded-circle"/>
                            </div>
                        </NavLink>
                        <div className="dropdown-menu">
                            <NavLink className="dropdown-item" to="#">My Profile</NavLink>
                            <NavLink className="dropdown-item" to="#">Setting</NavLink>
                            <NavLink className="dropdown-item" to="#">Logout</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        sttSideBar: state.sttSideBar,
        showTitle: state.showTitle,
        title: state.title,
        ChinhSuaSTT: state.ChinhSuaSTT
    }
}
export default connect(mapStateToProps)(Header)