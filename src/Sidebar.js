import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { loadTree } from "./MenuTreeHelper.js"; 

import Sap from './components/img/sap.svg'
import Refund from './components/img/refund_2.svg'
import Users from './components/img/users.svg'
import Akdp from './components/img/akdp.svg'
import Akap from './components/img/akap.svg'
import Manajemenpo from './components/img/manajemen_po.svg'
import Entitas from './components/img/entitas.svg'
import Pengaturans from './components/img/pengaturan.svg'
import Dashboards from './components/img/dashboard.svg'

export default class Sidebar extends Component {

  componentDidMount() { loadTree(); }

  render() {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{backgroundColor:'#041D46'}}>
        <NavLink to="/" class="brand-link" style={{borderBottom:'none', textAlign:'center', fontSize:'20px', fontWeight:'bold', padding:'8px 0px 8px 0px'}}>
          {/* <img src="./img/adminPO_icon.png" alt="AdminLTE Logo" class="brand-image" style={{opacity:'.8'}} /> */}
          <span className="brand-text font-weight-light"><b>DASHBOARD P.O</b></span>
        </NavLink>

        <div className="sidebar">
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-item" style={{ marginBottom: '10px', marginTop: '10px' }}>
                <NavLink to="/dashboard" className="nav-link" activeClassName="active">
                  {/* <i className="nav-icon fas fa-tachometer-alt"></i> */}
                  <img src={Dashboards} alt="S.A.P Logo" class="brand-image" />
                  <p style={{marginLeft:'20px'}}>
                    Dashboard
                  </p>
                </NavLink>
              </li>
              <li className="nav-item has-treeview" style={{ marginBottom: '10px' }}>
                <NavLink to="/pengaturan" className='nav-link disabled-link' activeClassName="active">
                  {/* <i className="nav-icon fas fa-cog"></i> */}
                  <img src={Pengaturans} alt="S.A.P Logo" class="brand-image" />
                  <p style={{marginLeft:'20px'}}>
                    Pengaturan
                    <i className="right fas fa-angle-down"></i>
                  </p>
                </NavLink>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/pengaturan/provinsi" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>Provinsi</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/pengaturan/wilayah" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>Wilayah</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/pengaturan/lokasi" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>Lokasi</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/pengaturan/channel" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>Channel</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/pengaturan/channelPo" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>Channel P.O</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview" style={{ marginBottom: '10px' }}>
                <NavLink to="/entitas" className="nav-link" activeClassName="active">
                  {/* <i className="nav-icon fa fa-gavel"></i> */}
                  <img src={Entitas} alt="S.A.P Logo" class="brand-image" />
                  <p style={{marginLeft:'20px'}}>
                    Entitas
                    <i className="right fas fa-angle-down"></i>
                  </p>
                </NavLink>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/entitas/po" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>P.O</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/entitas/partner" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>Partner</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/entitas/agen" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>Agen</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/entitas/loket" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>Loket</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/entitas/crew" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>Crew</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview" style={{ marginBottom: '10px' }}>
                <NavLink to="/manajemenPo" className="nav-link" activeClassName="active">
                  {/* <i className="nav-icon fa fa-tasks"></i> */}
                  <img src={Manajemenpo} alt="S.A.P Logo" class="brand-image" />
                  <p style={{marginLeft:'20px'}}>
                    Manajemen P.O
                    <i className="right fas fa-angle-down"></i>
                  </p>
                </NavLink>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/manajemenPo/bus" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>Bus</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview" style={{ marginBottom: '10px' }}>
                <NavLink to="/akap" className="nav-link" activeClassName="active">
                  {/* <i className="nav-icon fa fa-bus"></i> */}
                  <img src={Akap} alt="S.A.P Logo" class="brand-image" />
                  <p style={{marginLeft:'20px'}}>
                    AKAP
                    <i className="right fas fa-angle-down"></i>
                  </p>
                </NavLink>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/akap/trayek" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>Trayek</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/akap/transaksi" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>Transaksi</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/akap/settlement" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>Settlement</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview" style={{ marginBottom: '10px' }}>
                <NavLink to="/bumel" className="nav-link" activeClassName="active">
                  {/* <i className="nav-icon fa fa-bus"></i> */}
                  <img src={Akdp} alt="S.A.P Logo" class="brand-image" />
                  <p style={{marginLeft:'20px'}}>
                    AKDP / Bumel
                    <i className="right fas fa-angle-down"></i>
                  </p>
                </NavLink>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/bumel/trayek" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>Trayek</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/bumel/transaksi" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>Transaksi</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/bumel/settlement" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>Settlement</p>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/bumel/invoice" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>Invoice</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview" style={{ marginBottom: '10px' }}>
                <NavLink to="/refund" className="nav-link" activeClassName="active">
                  {/* <i className="nav-icon fas fa-money-bill-alt"></i> */}
                  <img src={Refund} alt="S.A.P Logo" class="brand-image" />
                  <p style={{marginLeft:'20px'}}>
                    Refund
                    <i className="right fas fa-angle-down"></i>
                  </p>
                </NavLink>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/refund/pengajuanRefund" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>Pengajuan Refund</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview" style={{ marginBottom: '10px' }}>
                <NavLink to="/user" className="nav-link" activeClassName="active">
                  {/* <i className="nav-icon fa fa-users"></i> */}
                  <img src={Users} alt="S.A.P Logo" class="brand-image" />
                  <p style={{marginLeft:'20px'}}>
                    User
                    <i className="right fas fa-angle-down"></i>
                  </p>
                </NavLink>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/user/daftarPengguna" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>Daftar Pengguna</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview" style={{ marginBottom: '10px' }}>
                <NavLink to="/sap" className="nav-link" activeClassName="active">
                  {/* <i className="nav-icon fa fa-user"></i> */}
                  <img src={Sap} alt="S.A.P Logo" class="brand-image" />
                  <p style={{marginLeft:'20px'}}>
                    S.A.P
                    <i className="right fas fa-angle-down"></i>
                  </p>
                </NavLink>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <NavLink to="/sap/updateHarga" className="nav-link" activeClassName="active">
                      <i className="far fa-circle nav-icon" style={{visibility:'hidden'}}></i>
                      <p style={{marginLeft:'10px'}}>Update Harga</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    )
  }
}

// export default {
//   items: [
//     {
//       name: 'Dashboard',
//       url: '/dashboard',
//       icon: 'icon-speedometer',
//       badge: {
//         variant: 'info',
//         // text: 'NEW',
//       },
//     },
//     // {
//     //   title: true,
//     //   name: 'Theme',
//     //   wrapper: {            // optional wrapper object
//     //     element: '',        // required valid HTML5 element tag
//     //     attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
//     //   },
//     //   class: ''             // optional class names space delimited list for title item ex: "text-center"
//     // },
//     {
//       name: 'Pengaturan',
//       url: '/pengaturan',
//       icon: 'icon-settings',
//       children: [
//         {
//           name: 'Provinsi',
//           url: '/pengaturan/provinsi',
//           // icon: 'icon-puzzle',
//         },
//         {
//           name: 'Wilayah',
//           url: '/pengaturan/wilayah',
//           // icon: 'icon-puzzle',
//         },
//         {
//           name: 'Lokasi',
//           url: '/pengaturan/lokasi',
//           // icon: 'icon-puzzle',
//         },
//         {
//           name: 'Channel',
//           url: '/pengaturan/channel',
//           // icon: 'icon-puzzle',
//         },
//         {
//           name: 'Channel PO',
//           url: '/pengaturan/channelPo',
//           // icon: 'icon-puzzle',
//         }
//       ]
//     },
//     {
//       name: 'Entitas',
//       url: '/entitas',
//       icon: 'icon-pencil',
//       children: [
//         {
//           name: 'PO',
//           url: '/entitas/po',
//         },
//         {
//           name: 'Partner',
//           url: '/entitas/partner',
//         },
//         {
//           name: 'Agen',
//           url: '/entitas/agen',
//         },
//         {
//           name: 'Loket',
//           url: '/entitas/loket',
//         },
//         {
//           name: 'Crew',
//           url: '/entitas/crew',
//         }
//       ]
//     },
//     {
//       name: 'Manajemen PO',
//       url: '/base',
//       icon: 'fa fa-database',
//       children: [
//         {
//           name: 'Bus',
//           url: '/base/breadcrumbs',
//         }
//       ],
//     },
//     {
//       name: 'Bumel',
//       url: '/buttons',
//       icon: 'fa fa-bus',
//       children: [
//         {
//           name: 'Trayek',
//           url: '/buttons/buttons',
//         },
//         {
//           name: 'Transaksi',
//           url: '/buttons/button-dropdowns',
//         },
//         {
//           name: 'Settlement',
//           url: '/buttons/button-groups',
//         },
//         {
//           name: 'Invoice',
//           url: '/buttons/brand-buttons',
//         },
//       ],
//     },
//     {
//       name: 'AKAP',
//       url: '/charts',
//       icon: 'fa fa-bus',
//       children: [
//         {
//           name: 'Trayek',
//           url: '/buttons/brand-buttons',
//         },
//         {
//           name: 'Transaksi',
//           url: '/buttons/brand-buttons',
//         },
//         {
//           name: 'Settlement',
//           url: '/buttons/brand-buttons',
//         },
//       ],
//     },
//     {
//       name: 'Refund',
//       url: '/icons',
//       icon: 'fa fa-money',
//       children: [
//         {
//           name: 'Pengajuan Refund',
//           url: '/icons/coreui-icons',
//         },
//       ],
//     },
//     {
//       name: 'User',
//       url: '/pengguna',
//       icon: 'fa fa-users',
//       children: [
//         {
//           name: 'Daftar Pengguna',
//           url: '/pengguna/daftar',
//           // icon: 'icon-bell',
//         },
//       ],
//     },
//     // {
//     //   name: 'Widgets',
//     //   url: '/widgets',
//     //   icon: 'icon-calculator',
//     //   badge: {
//     //     variant: 'info',
//     //     text: 'NEW',
//     //   },
//     // },
//     // {
//     //   divider: true,
//     // },
//     // {
//     //   title: true,
//     //   name: 'Extras',
//     // },
//     // {
//     //   name: 'Pages',
//     //   url: '/pages',
//     //   icon: 'icon-star',
//     //   children: [
//     //     {
//     //       name: 'Login',
//     //       url: '/login',
//     //       icon: 'icon-star',
//     //     },
//     //     {
//     //       name: 'Register',
//     //       url: '/register',
//     //       icon: 'icon-star',
//     //     },
//     //     {
//     //       name: 'Error 404',
//     //       url: '/404',
//     //       icon: 'icon-star',
//     //     },
//     //     {
//     //       name: 'Error 500',
//     //       url: '/500',
//     //       icon: 'icon-star',
//     //     },
//     //   ],
//     // },
//     // {
//     //   name: 'Disabled',
//     //   url: '/dashboard',
//     //   icon: 'icon-ban',
//     //   attributes: { disabled: true },
//     // },
//     // {
//     //   name: 'Download CoreUI',
//     //   url: 'https://coreui.io/react/',
//     //   icon: 'icon-cloud-download',
//     //   class: 'mt-auto',
//     //   variant: 'success',
//     //   attributes: { target: '_blank', rel: "noopener" },
//     // },
//     // {
//     //   name: 'Try CoreUI PRO',
//     //   url: 'https://coreui.io/pro/react/',
//     //   icon: 'icon-layers',
//     //   variant: 'danger',
//     //   attributes: { target: '_blank', rel: "noopener" },
//     // },
//   ],
// };
