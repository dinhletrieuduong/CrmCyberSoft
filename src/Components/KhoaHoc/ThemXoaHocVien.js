import React, { Component } from 'react';
import {Dialog} from 'primereact/dialog';
import axios from 'axios';
import { HocVienService } from '../../service/HocVienService';

import {MultiSelect} from 'primereact/multiselect';
class ThemXoaHocVien extends Component {
    constructor(props) {
        super(props);
        this.state = {
            KhoaHoc: this.props.KhoaHoc,
            visible: false,
            visibleXoa: false,
            MaHocVien: [],
            ListHocVien: []
        };
        this.HocVien = {
            MaHocVien: "",
            MaKhoaHoc: this.props.KhoaHoc._id
        };

        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);

        this.HocVienService = new HocVienService();
    }
    onClick(event) {
        this.setState({
            visible: true
        });
    }
    onHide(event) {
        this.setState({
            visible: false
        });
    }
    componentDidMount() {
        this.HocVienService.getInfo().then((data) => {
            this.setState({
                ListHocVien: data
            });
        });
    }
    ThemHocVien = () => {
        let config = {
            headers: {
                Authorization: "Bearer " + axios.defaults.headers.common['Authorization']
            }
        };
        this.HocVien.MaHocVien = this.state.MaHocVien.map(el => el._id).toString();
        axios
            .post("https://sv-crm-cybersoft.herokuapp.com/api/course/join", this.HocVien, config)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.response);
            });

        console.log(this.HocVien);
    }
    XoaHocVien = () => {
        let config = {
            headers: {
                Authorization: "Bearer " + axios.defaults.headers.common['Authorization']
            }
        };
        this.HocVien.MaHocVien = this.state.MaHocVien.map(el => el._id).toString();
        axios
            .post("https://sv-crm-cybersoft.herokuapp.com/api/course/removeMember", this.HocVien, config)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.response);
            });

        console.log(this.HocVien);
    }

    onClear() {
        this.setState({
            MaHocVien: ""
        });
    }
    render() {
        const ListHocVien = this.state.ListHocVien;
        
        return (
            <div className="btn-group">
                <div className="content-section implementation">
                    <Dialog header="Thêm/Xóa Học Viên" visible={this.state.visible} style={{width: '50vw'}} onHide={this.onHide} >
                        <div className="content-section implementation">
                                <MultiSelect value={this.state.MaHocVien} options={ListHocVien} onChange={(e) => this.setState({MaHocVien: e.value})} optionLabel="HoTen" filter={true} style={{width: '30%'}} placeholder="Chọn Học Viên"/>
                                <div className="btn-group float-right">
                                    <button onClick={() => this.ThemHocVien()} className="btn btn-info">Thêm</button>
                                    <button onClick={() => this.XoaHocVien()} className="btn btn-warning">Xóa</button>
                                    <button onClick={() => this.onClear()} className="btn btn-danger">Hủy</button>
                                </div>
                        </div>
                            
                    </Dialog>
                </div>
                <button onClick={this.onClick} className="btn btn-outline-primary">Thêm/Xóa Học Viên</button>
            </div>
        )
    }
}

export default ThemXoaHocVien;