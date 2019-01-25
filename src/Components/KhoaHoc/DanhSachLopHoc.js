import React, { Component } from 'react'
import { KhoaHocService } from '../../service/KhoaHocService';

import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';

class DanhSachLopHoc extends Component {
  constructor() {
    super();
    this.state = {
      khoaHoc: [],
      editKey: '',
      loading: true,
      first: 0,
      rows: 10,
      totalRecords: 0,
    };
    this.khoaHocService = new KhoaHocService();
  }
  componentDidMount() {
    this.khoaHocService.getInfo().then((data) => {
      this.setState({
        khoaHoc: data,
        totalRecords: data.length,
        loading: false
      });
    });
  }

  actionTemplate(rowData, column) {
    return (
      <div className="btn-group">
        <NavLink to={"/chitietlophoc/" + rowData._id} className="btn btn-primary">
          <i className="fas fa-search"></i>
        </NavLink>
        
        <NavLink to={"/chinhsualophoc/" + rowData._id} className="btn btn-warning">
          <i className="far fa-edit"></i>
        </NavLink>
      </div>
    );
  }
  render() {
    var header = <div>
        <div style={{'textAlign':'left'}}>
            <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
            <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" size="50"/>
        </div>

    </div> ;
    return (
      <div className={css(styles.main, styles.td) + " container-fluid"}>
        <div className="content-section implementation">
          <DataTable ref={(el) => this.dt = el} value={this.state.khoaHoc} header={header} paginator={true} rows={this.state.rows} globalFilter={this.state.globalFilter} 
            /*totalRecords={this.state.totalRecords}*/
             responsive={true}
          >
            <Column field="TenKhoaHoc" header="Lớp học"/>
            <Column field="DiaDiemHoc" header="Địa Điểm"/>
            <Column field="NgayBatDau" header="Ngày bắt đầu" />
            <Column field="ThoiGianHoc" header="Thời gian học"/>
            <Column field="SoLuong" header="Số lượng"/>
            <Column field="HocPhi" header="Học phí"/>
            <Column field="DanhSachGiangVien" header="Giảng viên"/>
            <Column field="DanhSachMentor" header="Mentor"/>
            <Column field="Thu2" header="Thứ 2"/>
            <Column field="Thu3" header="Thứ 3"/>
            <Column field="Thu4" header="Thứ 4"/>
            <Column field="Thu5" header="Thứ 5"/>
            <Column field="Thu6" header="Thứ 6"/>
            <Column field="Thu7" header="Thứ 7"/>
            <Column field="ChuNhat" header="Chủ nhật"/>
            <Column body={this.actionTemplate} header="Thao tác" style={{textAlign:'center', width: '8em'}}/>
          </DataTable>
        </div>
      </div>
    );
  }
}
const styles = StyleSheet.create({
  main:{
    marginTop: '120px',
  },
  td :{
    wordBreak: 'break-word'
  }
});
const mapStateToProps = (state, ownProps) => {
  return {
  }
};

export default connect(mapStateToProps)(DanhSachLopHoc);