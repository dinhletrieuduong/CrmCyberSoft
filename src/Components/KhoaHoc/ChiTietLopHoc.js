import React, { Component } from 'react';
import './ChiTietLopHoc.css';
import { NavLink } from 'react-router-dom';
import { KhoaHocService } from '../../service/KhoaHocService';
import { connect } from "react-redux";
import ThemXoaHocVien from './ThemXoaHocVien';

class ChiTietLopHoc extends Component {
    constructor (props) {
        super(props);
        this.state = {
            KhoaHoc: [],
            date: null
        };
        this.khoaHocService = new KhoaHocService();
    }
    componentDidMount() {
        this.khoaHocService.getInfo().then((data) => {
            this.setState({
                KhoaHoc: data,
                date: data.NgayBatDau
            });
        });
    }
    render () {
        return (
            <div className="main container">                               
                <h1 className="text-center">CHI TIẾT KHÓA HỌC</h1>
                {
                    this.state.KhoaHoc.map((el, key) => {
                    if (el._id === this.props.match.params.id) {
                        return(
                            <div key={key}>
                                <div className="row">
                                    <div className="col-md-4">Tên Khóa Học:</div>
                                    <div className="col-md-8">{el.TenKhoaHoc}</div>
                                    <div className="col-md-4">Địa Điểm:</div>
                                    <div className="col-md-8">{el.DiaDiem}</div>
                                    <div className="col-md-4">Số Lượng:</div>
                                    <div className="col-md-8">{el.SoLuong}</div>
                                    <div className="col-md-4">Học Phí:</div>
                                    <div className="col-md-8">{el.HocPhi}</div>
                                    <div className="col-md-4">Ngày Bắt Đầu:</div>
                                    <div className="col-md-8">{el.NgayBatDau}</div>
                                    <div className="col-md-4">Ngày Kết Thúc:</div>
                                    <div className="col-md-8">{el.NgayKetThuc}</div>
                                    <div className="col-md-4">Thời Gian Học:</div>
                                    <div className="col-md-8">{el.ThoiGianHoc}</div>
                                    <div className="col-md-4">Ngày Học:</div>
                                    <div className="col-md-8">{el.NgayHoc}</div>
                                    <div className="col-md-4">Danh Sách Giảng Viên:</div>
                                    <div className="col-md-8">{el.DanhSachGiangVien}</div>
                                    <div className="col-md-4">Danh Sách Mentor:</div>
                                    <div className="col-md-8">{el.DanhSachMentor}</div>
                                    <div className="col-md-4">Danh Sách Học Viên:</div>
                                    <div className="col-md-8">{el.DanhSachHocVien}</div>
                                </div>
                                <div className="row mt-2 ml-2">
                                    <div className="btn-group">
                                        <NavLink to={"/chinhsualophoc/" + el.TenKhoaHoc + "." + el._id} className="btn btn-outline-info">Chỉnh Sửa</NavLink>
                                        <ThemXoaHocVien KhoaHoc={el}></ThemXoaHocVien>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }
                    else return true;
                })}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        //sttSideBar: state.sttSideBar
    }
}
export default connect(mapStateToProps)(ChiTietLopHoc);