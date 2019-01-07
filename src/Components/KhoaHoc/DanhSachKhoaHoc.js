import React, { Component } from 'react'
import { KhoaHocService } from '../../service/KhoaHocService';

import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

class DanhSachKhoaHoc extends Component {
  constructor() {
    super();
    this.state = {
      khoaHoc: [],
      editKey: '',
      loading: true,
      first: 0,
      rows: 10,
      totalRecords: 0
    };
    this.khoaHocService = new KhoaHocService();
    this.onPage = this.onPage.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.khoaHocService.getInfo().then((data) => {
        this.datasource = data;
        this.setState({
          khoaHoc: data,
          totalRecords: data.length,
          loading: false
        });
      });
    }, 1000);
  }
  onPage(event) {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      const startIndex = event.first;
      const endIndex = event.first + this.state.rows;
      this.setState({
        first: startIndex,
        khoaHoc: this.datasource.slice(startIndex, endIndex),
        loading: false
      });
    }, 250);
  }
  
  handleClick = (event, num) => {
    event.preventDefault();
    var {dispatch} = this.props;
    dispatch({
      type: "CHANGE_TITLE_" + num,
    });
  }
  actionTemplate(rowData, column) {
    return (
      <NavLink to={"/chinhsuakhoahoc/" + rowData.TenKhoaHoc + "." + rowData._id} className="btn-warning btn" onClick={(e) => {this.handleClick(e, 2)}}>
        <i className="far fa-edit" style={{color: '#fff'}}></i>
      </NavLink>
    );
  }
  render() {
    var header = <div className="p-clearfix" style={{'lineHeight':'1.87em'}}>Danh Sách Khóa Học</div>;
    const style = {
      marginLeft: (this.props.sttSideBar ? 270: 15) + 'px'
    };
    return (
      <div className={css(styles.main, styles.td)} style={style}>
        <div className="content-section implementation">
          <DataTable value={this.state.khoaHoc} responsive={true} header={header} paginator={true} rows={this.state.rows} totalRecords={this.state.totalRecords}
                        lazy={true} first={this.state.first} onPage={this.onPage} loading={this.state.loading}>
            <Column field="TenKhoaHoc" header="Khóa học"/>
            <Column field="SoLuong" header="Số lượng"/>
            <Column field="HocPhi" header="Học phí"/>
            <Column field="NgayBatDau" header="Ngày bắt đầu" />
            <Column field="ThoiGianHoc.BatDau" header="Thời gian bắt đầu"/>
            <Column field="ThoiGianHoc.KetThuc" header="Thời gian kết thúc"/>
            <Column field="DanhSachGiangVien" header="Danh sách giảng viên"/>
            <Column field="DanhSachHocVien" header="Danh sách học viên"/>
            <Column field="DanhSachMentor" header="Danh sách mentor"/>
            <Column body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
          </DataTable>
        </div>
      </div>
    );
  }
}
const styles = StyleSheet.create({
  main:{
    marginLeft: '270px',
    marginTop: '100px',
    marginRight: '15px',
    '@media (max-width: 750px)': {
      marginLeft: '10px'
    }
  },
  td :{
    wordBreak: 'break-word'
  }
});
const mapStateToProps = (state, ownProps) => {
  return {
    sttSideBar: state.sttSideBar,
    showTitle: state.showTitle,
    title: state.title
  }
};

export default connect(mapStateToProps)(DanhSachKhoaHoc);