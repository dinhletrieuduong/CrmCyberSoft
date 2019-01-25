import React, { Component } from 'react';
import './TaoLopHoc.css';

import {connect} from 'react-redux';
import axios from 'axios';

import { Form, Button, Col } from 'react-bootstrap';

import {Calendar} from 'primereact/calendar';
import {InputText} from 'primereact/inputtext';
import {MultiSelect} from 'primereact/multiselect';

class TaoLopHoc extends Component {
  constructor() {
    super();
    this.state = {
      TenKhoaHoc: "",
      DiaDiemHoc: "",
      HocPhi: "",
      SoLuong: "",
      TrangThaiBuoiHoc: "",
      NgayBatDau: null,
      ThoiGianBatDau: "",
      ThoiGianKetThuc: "",
      BuoiHoc: [],
      DanhSachGiangVien: [],
      DanhSachMentor: []
    };
  }
  onClear() {
    this.setState({
      TenKhoaHoc: "",
      HocPhi: 0,
      SoLuong: 0,
      ThoiGianBatDau: "",
      ThoiGianKetThuc: "",
      DanhSachGiangVien: [],
      DanhSachMentor: [],
      NgayBatDau: null,
      BuoiHoc: [],
      TrangThaiBuoiHoc: ""
    });
  }

  TaoKhoaHoc = () => {
    let config = {
      headers: {
        Authorization: "Bearer " + axios.defaults.headers.common['Authorization']
      }
    };

    axios
      .post("https://sv-crm-cybersoft.herokuapp.com/api/course/create", this.state, config)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });

    console.log(this.state);
  }
  render() {
    const buoihoc = [
            {label: 'Thứ 2', value: '5c40b37bd055380ac0e681d5'},
            {label: 'Thứ 3', value: '5c40b37bd055380ac0e681d6'},
            {label: 'Thứ 4', value: '5c40b37bd055380ac0e681d7'},
            {label: 'Thứ 5', value: '5c40b37bd055380ac0e681d8'},
            {label: 'Thứ 6', value: '5c40b37bd055380ac0e681d9'},
            {label: 'Thứ 7', value: '5c40b37bd055380ac0e681da'},
            {label: 'Chủ Nhật', value: '5c40b37bd055380ac0e681db'}
    ];
    const giangvien = [
            {label: 'Khai', value: '123'},
            {label: 'Truc', value: '456'},
            {label: 'Huy', value: '789'},
            {label: 'Duong', value: '147'},
    ];
    const mentor = [
            {label: 'Khai', value: '123'},
            {label: 'Truc', value: '456'},
            {label: 'Huy', value: '789'},
    ];
    return (
      <Form action="/" id="TaoLopHoc" className="container main">
        <h3 className="text-center justify-content-center mb-4">THÊM KHÓA HỌC MỚI</h3>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="TenKhoaHoc">
            <Form.Label>Tên Khóa Học</Form.Label>
            <InputText value={this.state.TenKhoaHoc} onChange={(e) => this.setState({TenKhoaHoc: e.target.value})} placeholder="Nhập Tên Khóa Học"/>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="DiaDiemHoc">
            <Form.Label>Địa Điểm Học</Form.Label>
            <InputText value={this.state.DiaDiemHoc} onChange={(e) => this.setState({DiaDiemHoc: e.target.value})}  placeholder="Nhập Địa Điểm Học"/>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="NgayBatDau">
            <Form.Label>Ngày Bắt Đầu</Form.Label>
            <div id="calendar">
              <Calendar value={this.state.NgayBatDau} onChange={(e) => this.setState({NgayBatDau: e.value})} showButtonBar={true} placeholder="Chọn ngày bắt đầu"/>
            </div>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="HocPhi">
            <Form.Label>Học Phí</Form.Label>
            <InputText keyfilter="pint" onChange={(e) => this.setState({HocPhi: e.target.value})} placeholder="Nhập Học Phí"/>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="SoLuong">
            <Form.Label>Số Lượng</Form.Label>
            <InputText keyfilter="pint" onChange={(e) => this.setState({SoLuong: e.target.value})} placeholder="Nhập Số Lượng"/>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="DanhSachGiangVien">
            <Form.Label>Danh Sách Giảng Viên</Form.Label>
            <MultiSelect value={this.state.DanhSachGiangVien} options={giangvien} onChange={(e) => this.setState({DanhSachGiangVien: e.value})} style={{width: '100%', minWidth:'12em'}} filter={true} placeholder="Chọn Danh Sách Giảng Viên" />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="DanhSachMentor">
            <Form.Label>Danh Sách Mentor</Form.Label>
            <MultiSelect value={this.state.DanhSachMentor} options={mentor} onChange={(e) => this.setState({DanhSachMentor: e.value})} style={{width: '100%', minWidth:'12em'}} filter={true} optionLabel="label" placeholder="Chọn Danh Sách Mentor" />              
          </Form.Group>
          <Form.Group as={Col} md="8">
            <Form.Label>Buổi Học</Form.Label>
            <Form.Row>
              <div className="col-md-4">
                <MultiSelect value={this.state.BuoiHoc} options={buoihoc} onChange={(e) => this.setState({BuoiHoc: e.value})} style={{width: '100%', minWidth:'12em'}} filter={true} optionLabel="label" placeholder="Chọn Buổi Học 1" />
              </div>
              <div className="col-md-4">
                <InputText value={this.state.ThoiGianBatDau} onChange={(e) => this.setState({ThoiGianBatDau : e.target.value})} placeholder="Thời Gian Bắt đầu. VD: 8:00, 12:00" style={{width: '100%'}}/>
              </div>
              <div className="col-md-4">
                <InputText value={this.state.ThoiGianKetThuc} onChange={(e) => this.setState({ThoiGianKetThuc : e.target.value})} placeholder="Thời Gian Kết Thúc. VD: 14:00, ..." style={{width: '100%'}}/>
              </div>
            </Form.Row>
          </Form.Group>
        </Form.Row>

        <Button type="button" className="btn btn-success btn-md" onClick={() => {this.TaoKhoaHoc()}}>Tạo Khóa Học</Button>
        <Button type="reset" className="btn btn-danger btn-md ml-1" onClick={() => {this.onClear()}}>Hủy</Button>
      </Form>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
  }
};

export default connect(mapStateToProps)(TaoLopHoc);