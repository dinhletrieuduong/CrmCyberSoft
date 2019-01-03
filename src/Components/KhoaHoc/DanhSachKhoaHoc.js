import React, { Component } from 'react'
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import { KhoaHocService } from '../../service/KhoaHocService';
export default class DanhSachKhoaHoc extends Component {
  constructor() {
        super();
        this.state = {
            khoaHoc: []
        };
        this.khoaHocService = new KhoaHocService();
    }
    componentDidMount() {
      this.khoaHocService.getInfo().then(data => this.setState({
        khoaHoc: data
      }));
    }

    actionTemplate(rowData, column) {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{marginRight: '.5em'}}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

  render() {
    var header = <div className="p-clearfix" style={{'lineHeight':'1.87em'}}>Danh Sách Khóa Học<Button icon="pi pi-refresh" style={{'float':'right'}}/></div>;
    var footer = "Hiện có " + 0 + ' khóa học';
    return (
      <div>
        <div className="content-section implementation">
          <DataTable value={this.state.khoaHoc} header={header} footer={footer}>
            <Column field="tenKhoaHoc" header="Khóa học" />
            <Column field="soLuong" header="Số lượng" />
            <Column field="hocPhi" header="Học phí" />
            <Column field="ngayTao" header="Ngày tạo" body={this.brandTemplate} style={{textAlign:'center'}}/>
            <Column field="batDau" header="Thời gian bắt đầu" body={this.colorTemplate} />
            <Column field="ketThuc" header="Thời gian kết thúc" body={this.colorTemplate} />
            <Column body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
          </DataTable>
        </div>
      </div>
    );
  }
}
