import React, { Component } from 'react'
import {Calendar} from 'primereact/calendar';
import { Form, Button, Col } from 'react-bootstrap';
import './TaoKhoaHoc.css';
import {connect} from 'react-redux';
class TaoKhoaHoc extends Component {
  constructor() {
    super();
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;

    let minDate = new Date();
    minDate.setMonth(prevMonth);
    minDate.setFullYear(prevYear);
    let maxDate = new Date();
    maxDate.setMonth(nextMonth);
    maxDate.setFullYear(nextYear);

    this.state = {
      validated: false,
      date: null,
      minDate: minDate,
      maxDate: maxDate,
      invalidDates: [today]
    };
    this.dateTemplate = this.dateTemplate.bind(this);
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }

  dateTemplate(date) {
    if (date.day > 10 && date.day < 15) {
      return (
        <span style={{backgroundColor: '#1d8ccb', color: '#ffffff', fontWeight: 'bold', borderRadius: '50%', padding: '.25em'}}>{date.day}</span>
      );
    }
    else
      return date.day;
  }
  render() {
    const style = {
      marginLeft: (this.props.sttSideBar ? 270 : 15) + 'px'
    };
    const { validated } = this.state;
    return (
      <Form noValidate validated={validated} onSubmit={e => this.handleSubmit(e)} id="TaoKhoaHoc" className="main" style={style}>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="tenKhoaHoc">
            <Form.Label>Tên Khóa Học</Form.Label>
            <Form.Control required type="text" placeholder="Nhập Tên Khóa Học"/>
            <Form.Control.Feedback type="invalid">
                Vui lòng nhập tên khóa học.
              </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="date">
            <Form.Label>Ngày Tạo</Form.Label>
            <div id="calendar">
              <Calendar value={this.state.date} onChange={(e) => this.setState({date: e.value})} showButtonBar={true} placeholder="Chọn ngày tạo"/>
            </div>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="hocPhi">
            <Form.Label>Học Phí</Form.Label>
            <Form.Control required type="number" placeholder="Nhập Học Phí"/>
            <Form.Control.Feedback type="invalid">
              Vui lòng nhập học phí.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="soLuong">
            <Form.Label>Số Lượng</Form.Label>
            <Form.Control type="number" placeholder="Nhập Số Lượng" required />
            <Form.Control.Feedback type="invalid">
              Vui lòng nhập số lượng.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="startTime">
            <Form.Label>Thời Gian Bắt Đầu</Form.Label>
            <Form.Control type="text" placeholder="Thời gian bắt đầu" required />
            <Form.Control.Feedback type="invalid">
              Vui lòng nhập thời gian bắt đầu.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="endTime">
            <Form.Label>Thời Gian Kết Thúc</Form.Label>
            <Form.Control type="text" placeholder="Thời gian kết thúc" required />
            <Form.Control.Feedback type="invalid">
              Vui lòng nhập thời gian kết thúc.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="endTime">
            <Form.Label>Danh Sách Giảng Viên</Form.Label>
            <Form.Control type="text" placeholder="Danh sách giảng viên" required></Form.Control>
            <Form.Control.Feedback type="invalid">
              Vui lòng nhập thông tin.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="endTime">
            <Form.Label>Danh Sách Mentor</Form.Label>
            <Form.Control type="text" placeholder="Danh sách mentor" required></Form.Control>
            <Form.Control.Feedback type="invalid">
              Vui lòng nhập thông tin.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="endTime">
            <Form.Label>Danh Sách Học Viên</Form.Label>
            <Form.Control type="text" placeholder="Danh sách học viên" required></Form.Control>
            <Form.Control.Feedback type="invalid">
              Vui lòng nhập thông tin.
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" className="btn btn-success btn-md submit">Tạo Khóa Học</Button>
        </Form.Row>
      </Form>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    sttSideBar: state.sttSideBar,
    showTitle: state.showTitle,
    title: state.title
  }
};

export default connect(mapStateToProps)(TaoKhoaHoc);