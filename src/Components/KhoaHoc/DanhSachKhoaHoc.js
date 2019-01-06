import React, { Component } from 'react'
import { KhoaHocService } from '../../service/KhoaHocService';

import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite/no-important';

class DanhSachKhoaHoc extends Component {
  constructor() {
    super();
    this.state = {
      khoaHoc: [],
      width: 0,
      height: 0
    };
    this.khoaHocService = new KhoaHocService();
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    
  }
  componentDidMount() {
    this.khoaHocService.getInfo()
      .then((data) => 
      {
        this.setState({khoaHoc: data});
      });
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
  actionTemplate(rowData, column) {
    return <div>
      <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
    </div>;
  }
  render() {
    var header = <div className="p-clearfix" style={{'lineHeight':'1.87em'}}>Danh Sách Khóa Học<Button icon="pi pi-refresh" style={{'float':'right'}}/></div>;
    var footer = "Hiện có " + this.state.khoaHoc.length + ' khóa học';
    const style = {
      marginLeft: (this.props.sttSideBar && this.state.width > 750 ? 280: 20) + 'px'
    };
    return (
      <div className={css(styles.main, styles.td)} style={style}>
        <div className="content-section implementation">
          <DataTable value={this.state.khoaHoc} responsive={true} header={header} footer={footer}>
            <Column field="TenKhoaHoc" header="Khóa học"/>
            <Column field="SoLuong" header="Số lượng"/>
            <Column field="HocPhi" header="Học phí"/>
            <Column field="NgayBatDau" header="Ngày bắt đầu" />
            <Column field="ThoiGianHoc.BatDau" header="Thời gian bắt đầu"/>
            <Column field="ThoiGianHoc.KetThuc" header="Thời gian kết thúc" />
            <Column field="DanhSachGiangVien" header="Danh sách giảng viên" />
            <Column field="DanhSachHocVien" header="Danh sách học viên" />
            <Column field="DanhSachMentor" header="Danh sách mentor" />
            <Column body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
          </DataTable>
        </div>
      </div>
    );
  }
}
const styles = StyleSheet.create({
  main:{
    marginLeft: '280px',
    marginTop: '100px',
    marginRight: '15px',
    '@media (max-width: 750px)': {
      marginLeft: '10px'
    }
  },
  td :{
    wordBreak :'break-all'
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