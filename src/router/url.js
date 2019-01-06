import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DanhSachKhoaHoc from '../Components/KhoaHoc/DanhSachKhoaHoc';
import TaoKhoaHoc from '../Components/KhoaHoc/TaoKhoaHoc';
import ChinhSuaKhoaHoc from '../Components/KhoaHoc/ChinhSuaKhoaHoc';

class Url extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={DanhSachKhoaHoc}/>
                <Route exact path="/danhsachkhoahoc" component={DanhSachKhoaHoc}/>
                <Route exact path="/taokhoahoc" component={TaoKhoaHoc}/>
                <Route exact path="/chinhsuakhoahoc" component={ChinhSuaKhoaHoc}/>
            </div>
        );
    }
}

export default Url;