import React, { Component } from 'react';
import QuanLyKhoaHoc from './KhoaHoc/QuanLyKhoaHoc';
import './body.css';
export default class Body extends Component {
  render() {
    return (
      <div className="main">
        <QuanLyKhoaHoc></QuanLyKhoaHoc>
      </div>
    )
  }
}
