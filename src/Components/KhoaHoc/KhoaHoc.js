import React, { Component } from 'react'

export default class KhoaHoc extends Component {
    constructor(props) {
        super(props);
        this.tenKhoaHoc = "";
        this.hocPhi = 0;
        this.soLuong = 0;
        this.ngayTao = "";
        this.thoiGianHoc = {
            start: "",
            end: ""
        };
        this.listGiangVien = [];
        this.listMentor = [];
        this.listHocVien = [];
    }
    // render() {
    //     return (
    //     <div>
            
    //     </div>
    //     )
    // }
}
