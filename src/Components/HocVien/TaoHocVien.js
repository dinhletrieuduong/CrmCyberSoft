import React, { Component } from 'react';

import axios from 'axios';

import { Form, Button, Col } from 'react-bootstrap';

import {InputText} from 'primereact/inputtext';
import {MultiSelect} from 'primereact/multiselect';

class TaoHocVien extends Component {
    constructor(props) {
        super(props);
        this.state = {
            HoTen: "",
            SinhNhat: "",
            SoDienThoai: "",
            Email: "",
            NgheNghiep: "",
            DiaChi: "",
            TruongDaVaDangHoc: "",
            MucTieu: "",
            TiemNang: "",
            MaGioiThieu: ""
        };
    }
    onClear() {
        this.setState({
            HoTen: "",
            SinhNhat: "",
            SoDienThoai: "",
            Email: "",
            NgheNghiep: "",
            DiaChi: "",
            TruongDaVaDangHoc: "",
            MucTieu: "",
            TiemNang: "",
            MaGioiThieu: ""
        });
    }
    TaoHocVien = () => {
        let config = {
            headers: {
                Authorization: "Bearer " + axios.defaults.headers.common['Authorization']
            }
        };
        axios
            .post("https://sv-crm-cybersoft.herokuapp.com/api/customer/create", this.state, config)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.response);
            });

        console.log(this.state);
    }

    render () {
        return (
            <Form action="/" id="TaoLopHoc" className="container main">
                <h3 className="text-center justify-content-center mb-4">THÊM HỌC VIÊN MỚI</h3>
                <Form.Row>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Họ Tên</Form.Label>
                        <InputText value={this.state.HoTen} onChange={(e) => this.setState({HoTen: e.target.value})} placeholder="Nhập Tên Khóa Học"/>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Email</Form.Label>
                        <InputText value={this.state.Email} onChange={(e) => this.setState({Email: e.target.value})} placeholder="Nhập Email"/>
                    </Form.Group>
                    <Form.Group as={Col} md="2">
                        <Form.Label>Sinh Nhật</Form.Label>
                        <InputText value={this.state.SinhNhat} onChange={(e) => this.setState({SinhNhat: e.target.value})} placeholder="Nhập Sinh Nhật"/>
                    </Form.Group>
                    <Form.Group as={Col} md="2">
                        <Form.Label>Số Điện Thoại</Form.Label>
                        <InputText keyfilter="pint" value={this.state.SoDienThoai} onChange={(e) => this.setState({SoDienThoai: e.target.value})} placeholder="Nhập Số Điện Thoại"/>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Nghề Nghiệp</Form.Label>
                        <InputText value={this.state.NgheNghiep} onChange={(e) => this.setState({NgheNghiep: e.target.value})} placeholder="Nhập Nghề Nghiệp"/>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Địa Chỉ</Form.Label>
                        <InputText value={this.state.DiaChi} onChange={(e) => this.setState({DiaChi: e.target.value})} placeholder="Nhập Địa Chỉ"/>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Trường Đã Và Đang Học</Form.Label>
                        <InputText value={this.state.TruongDaVaDangHoc} onChange={(e) => this.setState({TruongDaVaDangHoc: e.target.value})} placeholder="Nhập Trường Đã Và Đang Học"/>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Mục Tiêu</Form.Label>
                        <InputText value={this.state.MucTieu} onChange={(e) => this.setState({MucTieu: e.target.value})} placeholder="Nhập Mục Tiêu"/>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Tiềm Năng</Form.Label>
                        <InputText value={this.state.TiemNang} onChange={(e) => this.setState({TiemNang: e.target.value})} placeholder="Nhập Tiềm Năng"/>
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Mã Giới Thiệu</Form.Label>
                        <InputText value={this.state.MaGioiThieu} onChange={(e) => this.setState({MaGioiThieu: e.target.value})} placeholder="Nhập Mã Giới Thiệu"/>
                    </Form.Group>
                </Form.Row>
                
                <Button type="button" className="btn btn-success btn-md" onClick={() => {this.TaoHocVien()}}>Tạo Học Viên</Button>
                <Button type="reset" className="btn btn-danger btn-md ml-1" onClick={() => {this.onClear()}}>Hủy</Button>
            </Form>
        )
    }
}

export default TaoHocVien