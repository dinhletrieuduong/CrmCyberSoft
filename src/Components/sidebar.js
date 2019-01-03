import React, { Component } from 'react'
import './sidebar.css'
import logo from '../assets/img/logo.png'
import {PanelMenu} from 'primereact/panelmenu';
export default class SideBar extends Component {
    constructor(props, context) {
            super(props, context);

            this.state = {
                open: false,
                items:[
                {
                   label:'Danh Sách Khóa Học',
                   icon:'pi pi-fw pi-file',
                   items:[
                      {
                         label:'Thêm Khóa Học',
                         icon:'pi pi-fw pi-plus',
                      },
                      {
                         label:'Chỉnh Sửa',
                         icon: 'pi pi-fw pi-pencil'
                      }
                   ]
                },
                
                {
                   label:'Users',
                   icon:'pi pi-fw pi-user',
                   items:[
                      {
                         label:'New',
                         icon:'pi pi-fw pi-user-plus',
             
                      },
                      {
                         label:'Delete',
                         icon:'pi pi-fw pi-user-minus',
             
                      },
                      {
                         label:'Search',
                         icon:'pi pi-fw pi-users',
                         items:[
                            {
                               label:'Filter',
                               icon:'pi pi-fw pi-filter',
                               items:[
                                  {
                                     label:'Print',
                                     icon:'pi pi-fw pi-print'
                                  }
                               ]
                            },
                            {
                               icon:'pi pi-fw pi-bars',
                               label:'List'
                            }
                         ]
                      }
                   ]
                },
                {
                   label:'Events',
                   icon:'pi pi-fw pi-calendar',
                   items:[
                      {
                         label:'Edit',
                         icon:'pi pi-fw pi-pencil',
                         items:[
                            {
                               label:'Save',
                               icon:'pi pi-fw pi-calendar-plus'
                            },
                            {
                               label:'Delete',
                               icon:'pi pi-fw pi-calendar-minus'
                            }
                         ]
                      },
                      {
                         label:'Archieve',
                         icon:'pi pi-fw pi-calendar-times',
                         items:[
                            {
                               label:'Remove',
                               icon:'pi pi-fw pi-calendar-minus'
                            }
                         ]
                      }
                   ]
                }
             ]
            };
        }
   render() {
      return (
        <div className="sidenav">
            <div className="logo">
                <a href="/quantri">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            <div className="content-section implementation sidebar-menu menu">
               <PanelMenu model={this.state.items} style={{width:'256px'}}/>
            </div>
        </div>
      )
   }
}