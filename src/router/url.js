import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DanhSachLopHoc from '../Components/KhoaHoc/DanhSachLopHoc';
import TaoLopHoc from '../Components/KhoaHoc/TaoLopHoc';
import ChinhSuaLopHoc from '../Components/KhoaHoc/ChinhSuaLopHoc';
import ChiTietLopHoc from '../Components/KhoaHoc/ChiTietLopHoc';
import DanhSachHocVien from '../Components/HocVien/DanhSachHocVien';
import TaoHocVien from '../Components/HocVien/TaoHocVien';
import ChinhSuaHocVien from '../Components/HocVien/ChinhSuaHocVien';

class Url extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={DanhSachLopHoc}/>
                <Route exact path="/danhsachlophoc" component={DanhSachLopHoc}/>
                <Route exact path="/themlophoc" component={TaoLopHoc}/>
                <Route exact path="/chinhsualophoc/:id" component={ChinhSuaLopHoc}/>
                <Route exact path="/chitietlophoc/:id" component={ChiTietLopHoc}/>
                <Route exact path="/danhsachhocvien" component={DanhSachHocVien}/>
                <Route exact path="/themhocvien" component={TaoHocVien}/>
                <Route exact path="/chinhsuahocvien/:id" component={ChinhSuaHocVien}/>
            </div>
        );
    }
}

export default Url;