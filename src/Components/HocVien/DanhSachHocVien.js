import React, { Component } from 'react'
import { HocVienService } from '../../service/HocVienService';

import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';

//import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
class DanhSachHocVien extends Component {
    constructor() {
        super();
        this.state = {
            HocVien: [],
            editKey: '',
            loading: true,
            first: 0,
            rows: 10,
            totalRecords: 0,
        };
        this.HocVienService = new HocVienService();
    }
    componentDidMount() {
        this.HocVienService.getInfo().then((data) => {
            this.datasource = data;
            this.setState({
                HocVien: data,
                totalRecords: data.length,
                loading: false
            });
        });
    }
    
  actionTemplate(rowData, column) {
    return (
      <div className="btn-group">
        <NavLink to={"/chitiethocvien/" + rowData._id} className="btn btn-primary">
          <i className="fas fa-search"></i>
        </NavLink>
        
        <NavLink to={"/chinhsuahocvien/" + rowData._id} className="btn btn-warning">
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
          <DataTable ref={(el) => this.dt = el} value={this.state.HocVien} header={header} paginator={true} rows={this.state.rows} globalFilter={this.state.globalFilter} 
            /*totalRecords={this.state.totalRecords}*/
             responsive={true}
          >
            <Column field="HoTen" header="Họ Tên"/>
            <Column field="SinhNhat" header="Sinh Nhật"/>
            <Column field="SoDienThoai" header="Số Điện Thoại" />
            <Column field="Email" header="Email"/>
            <Column field="DiaChi" header="Địa Chỉ"/>
            <Column field="MucTieu" header="Mục Tiêu"/>
            <Column field="TruongDaVaDangHoc" header="Trường"/>
            <Column field="TiemNang" header="Tiềm Năng"/>
            <Column field="NgheNghiep" header="Nghề Nghiệp"/>
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

export default DanhSachHocVien