import React, { Component } from 'react'
// import { NavLink } from 'reactstrap'

import TambahProvinsi from './TambahProvinsi'
import ListProvinsi from './ListProvinsi'

import API_ENDPOINT from '../../../Endpoint'

export default class Provinsi extends Component {
  state = {
    dataProvinsi: [],
    dataKosong: false
  }

  componentDidMount() {
    API_ENDPOINT.get('/admin/provinsi/list')
      .then(res => {
        this.setState({
          dataProvinsi: res.data
        })
        console.log(res);
      })
      .catch(error => {
        this.setState({
          dataKosong: true
        })
      })
  }
  render() {
    if(this.state.dataKosong) {
      return (
        <div className="content-wrapper" style={{backgroundColor:'#00173B'}}>
          <div className="content-header">
            <div className="container-fluid header-fluid">
              <div className="row mb-2">
                {/* <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Provinsi</h1>
                </div> */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-left">
                    <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                    <li className="breadcrumb-item active"><b>Provinsi</b></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
  
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Tambah Provinsi</h3>
                    </div>
                    <div className="card-body">
                        <TambahProvinsi />
                        <p>DATA KOSONG</p>
                    </div>
                    {/* <div className="card-footer clearfix">
                      <ul className="pagination pagination-sm m-0 float-right">
                        <li className="page-item"><NavLink className="page-link" href="#">&laquo;</NavLink></li>
                        <li className="page-item"><NavLink className="page-link" href="#">1</NavLink></li>
                        <li className="page-item"><NavLink className="page-link" href="#">2</NavLink></li>
                        <li className="page-item"><NavLink className="page-link" href="#">3</NavLink></li>
                        <li className="page-item"><NavLink className="page-link" href="#">&raquo;</NavLink></li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    }
    return (
      <div className="content-wrapper" style={{backgroundColor:'#00173B'}}>
        <div className="content-header">
          <div className="container-fluid header-fluid">
            <div className="row mb-2">
              {/* <div className="col-sm-6">
                <h1 className="m-0 text-dark">Provinsi</h1>
              </div> */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-left">
                  <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                  <li className="breadcrumb-item active"><b>Provinsi</b></li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Tambah Provinsi</h3>
                  </div>
                  <div className="card-body">
                      <TambahProvinsi />
                      <ListProvinsi dataProvinsi={this.state.dataProvinsi} />
                  </div>
                  {/* <div className="card-footer clearfix">
                    <ul className="pagination pagination-sm m-0 float-right">
                      <li className="page-item"><NavLink className="page-link" href="#">&laquo;</NavLink></li>
                      <li className="page-item"><NavLink className="page-link" href="#">1</NavLink></li>
                      <li className="page-item"><NavLink className="page-link" href="#">2</NavLink></li>
                      <li className="page-item"><NavLink className="page-link" href="#">3</NavLink></li>
                      <li className="page-item"><NavLink className="page-link" href="#">&raquo;</NavLink></li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
