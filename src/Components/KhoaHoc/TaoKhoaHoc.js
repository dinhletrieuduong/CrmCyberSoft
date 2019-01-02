import React, { Component } from 'react'
//import KhoaHoc from './KhoaHoc';

import { Form, Button, Col, InputGroup } from 'react-bootstrap';
import Calendar from 'react-calendar'
import './TaoKhoaHoc.css'

export default class TaoKhoaHoc extends Component {
  constructor(...args) {
    super(...args);

    this.state = { 
      validated: false,
      showCalen: true
    };
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }

  getDate = (date) => {
    this.setState({
      date
    });
    return date;
  }
  changeSttCalen = () => {
    this.setState({
      showCalen: !this.state.showCalen
    });
  }
  showCalendar = () => {
    if (this.state.showCalen)
        return <Calendar className="col-md-10" onChange={(date) =>this.getDate(date)} value={this.state.date}/>
    return true;
  }
  render() {
    const { validated } = this.state;
    return (
      <Form noValidate validated={validated} onSubmit={e => this.handleSubmit(e)}>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="tenKhoaHoc">
            <Form.Label>Tên Khóa Học</Form.Label>
            <Form.Control required type="text" placeholder="Nhập Tên Khóa Học"/>
            <Form.Control.Feedback type="invalid">
                Vui lòng nhập tên khóa học.
              </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="date">
            <Form.Label>Ngày Tạo</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <Button id ="ngayBatDau" className="btn btn-primary" onClick={() => this.changeSttCalen()}>
                  <i className="far fa-calendar-alt"></i>
                </Button>
              </InputGroup.Prepend>
              <Form.Control type="text" placeholder={this.state.date} required disabled/>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="hocPhi">
                <Form.Label>Học Phí</Form.Label>
                <Form.Control required type="number" placeholder="Nhập Học Phí"/>
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập học phí.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="soLuong">
                <Form.Label>Số Lượng</Form.Label>
                <Form.Control type="number" placeholder="Nhập Số Lượng" required />
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập số lượng.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="startTime">
                <Form.Label>Thời Gian Bắt Đầu</Form.Label>
                <Form.Control type="text" placeholder="Thời gian bắt đầu" required />
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập thời gian bắt đầu.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="endTime">
                <Form.Label>Thời Gian Kết Thúc</Form.Label>
                <Form.Control type="text" placeholder="Thời gian kết thúc" required />
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập thời gian kết thúc.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button type="submit" className="btn btn-success btn-md submit">Tạo Khóa Học</Button>

          </Form.Group>
          <Form.Row as={Col} md="6" id="calendar">
            {this.showCalendar()}
          </Form.Row>
        </Form.Row>
        
      </Form>
    );
  }
}
