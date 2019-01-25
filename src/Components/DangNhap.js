import React, { Component } from 'react';

import {InputText} from "primereact/inputtext";
import {Button} from 'primereact/button';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import { connect } from "react-redux";
class DangNhap extends Component {
    constructor (props) {
        super(props)
        this.state = {
            Email:"",
            MatKhau: "",
            validated: true,
            wrongAccount: true
        }
    }
    
    login = () => {
        var account = {
            Email: this.state.Email,
            MatKhau: this.state.MatKhau
        }
        
        var { dispatch } = this.props;
        if (account.Email === "" || account.Email === undefined || account.MatKhau === "" || account.MatKhau === undefined)
            this.setState({validated: false});
        else{
            axios.post("https://sv-crm-cybersoft.herokuapp.com/api/account/login",account).then(res => {
                axios.defaults.headers.common['Authorization'] = res.data.token.split("Bearer ")[1];
                if (res.data.infoAccount.isActive) {
                    dispatch({type: "LOGIN"});
                }
                console.log(res.data);
            }).catch(err =>{
                //console.log(err.response.data.message);
                this.setState({wrongAccount: false});
            });
        }
        
    }
    clear = () => {
        this.setState({
            Email: "",
            MatKhau: ""
        })
    }
    render () {
        return (
            <div className="p-md-4">
                <div className="content-section implementation container">
                    <div className="p-grid p-fluid">
                        <div className="p-col-12">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-user"></i>
                                </span>
                                <InputText placeholder="Username" id="Email" value={this.state.Email} onChange={(e) => this.setState({Email: e.target.value})}/>
                            </div>
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-key"></i>
                                </span>
                                <InputText placeholder="Password" type="password" id="MatKhau" value={this.state.MatKhau} onChange={(e) => this.setState({MatKhau: e.target.value})}/>
                            </div>
                            {
                                !this.state.validated ? <span style={{color: 'red'}}>Vui lòng nhập thông tin</span> : true
                            }
                            {
                                !this.state.wrongAccount ? <span style={{color: 'red'}}>Sai username hoặc password</span> : true
                            }
                        </div>
                    </div>
                </div>
            
                <div className="content-section implementation container button-demo">
                    <div className="p-col-12 ">
                    <span>Chưa có tài khoản? </span>
                    <NavLink to="/dangky">Đăng Ký</NavLink>
                    </div>
                    <div className="p-col-12 ">
                        <Button label="Đăng Nhập" className="p-button-success p-button-raised" onClick={() => {this.login()}}/>
                        <Button label="Hủy" className=" p-button-raised p-button-danger" onClick={() => {this.clear()}}/>
                    </div>
                </div> 
            </div>       
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        logined: state.logined,
    }
}
export default connect(mapStateToProps)(DangNhap);