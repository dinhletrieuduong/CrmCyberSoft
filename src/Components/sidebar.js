import React, { Component } from 'react'
import './sidebar.css'
import logo from '../assets/img/logo.png'
export default class SideBar extends Component {
  render() {
    return (
        <div className="sidenav">
            <div className="logo">
                <a href="/quantri">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
                <div id="sidebar-menu">
                <ul className="menu">
                    <li>
                        <a href="/quantri/quanlycauhoi">
                            <i className="far fa-question-circle"></i><span>Quản Lý Câu Hỏi</span>
                        </a>
                    </li>
                    <li>
                        <a href="/quantri/quanlydethi">
                            <i className="far fa-file"></i><span>Quản Lý Đề Thi</span>
                        </a>
                    </li>
                    <li>
                        <a href="/quantri/quanlynguoidung">
                        <i className="far fa-user-circle"></i><span>Quản Lý Người Dùng</span>
                        </a>
                    </li>
                    <li>
                        <a href="/quantri">
                        <i className="far fa-envelope"></i><span>Quản Lý Khóa Học</span>
                        </a>
                    </li>
                    <li>
                        <a href="/quantri">
                        <i className="fas fa-calendar"></i><span>Calendar</span>
                        </a>
                    </li>
                    <li>
                        <a href="/quantri">
                        <i className="fas fa-table"></i><span>Table</span>
                        </a>
                    </li>
                    <li>
                        <a href="/quantri">
                        <i className="fas fa-shopping-cart"></i><span>Shop</span>
                        </a>
                    </li>
                    <li>
                        <a href="/quantri">
                        <i className="fas fa-list-alt"></i><span>Todo List</span>
                        </a>
                    </li>
                    <li>
                        <a href="/quantri">
                        <i className="far fa-sticky-note"></i><span>Notes</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
  }
}
