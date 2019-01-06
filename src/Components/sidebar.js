import React, { Component } from 'react'
import './sidebar.css'
import logo from '../assets/img/logo.png'
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
class SideBar extends Component {
   constructor(props) {
      super(props);

      this.state = {};
   }
   changeTitle = (num) => {
      var {dispatch} = this.props;
      dispatch({type: "CHANGE_TITLE_" + num});
   }
   render() {
      return (
            <div className="sidenav">
               <div className="logo">
                  <NavLink to="/">
                     <img src={logo} alt="logo"/>
                  </NavLink>
               </div>
               <div className="sidebar">
                  <ul className="nav">
                     <li className="nav-item">
                        <span className="nav-item header-sidebar" href="#">Quản Lý Khóa Học</span>
                        <ul className="nav menu">
                           <li className="nav-item">
                              <NavLink to="/danhsachkhoahoc" className="nav-link active" onClick={() => this.changeTitle(0)}>
                                 <span>
                                    <i className="fa fa-list" aria-hidden="true"></i>
                                 </span>
                                 <span>
                                    Danh Sách Khóa Học
                                 </span>
                              </NavLink>
                           </li>
                           <li className="nav-item">
                              <NavLink to="/taokhoahoc" className="nav-link" onClick={() => this.changeTitle(1)}>Thêm Khóa Học</NavLink>
                           </li>
                           <li className="nav-item">
                              <NavLink to="/chinhsuakhoahoc" className="nav-link" onClick={() => this.changeTitle(2)}>Chỉnh Sửa</NavLink>
                           </li>
                        </ul>
                     </li>
                     <li className="nav-item">
                     <span className="nav-item header-sidebar" href="#">Quản Lý User</span>
                        <ul className="nav menu">
                            <li className="nav-item">
                              <NavLink to="#" className="nav-link">Thêm User</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="#" className="nav-link">Sửa</NavLink>
                            </li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </div>
        
      )
   }
}
const mapStateToProps = (state, ownProps) => {
   return {
      sttSideBar: state.sttSideBar,
      showTitle: state.showTitle,
      title: state.title
   }
};
export default connect(mapStateToProps)(SideBar);