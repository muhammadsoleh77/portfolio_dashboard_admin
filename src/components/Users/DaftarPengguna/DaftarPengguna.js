import React, { Component } from 'react'
import Select from 'react-select'
import {Link} from 'react-router-dom'

import ListUser from './ListUser'
import UserKosong from './UserKosong'

import API_ENDPOINT from '../../../Endpoint'

export default class DaftarPengguna extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataUser: [],
            dataRole: [
                {id:'ROLE_USER', nama:'ROLE_USER'},
                {id:'ROLE_ADMIN', nama:'ROLE_ADMIN'},
                {id:'ROLE_PO', nama:'ROLE_PO'},
                {id:'ROLE_AGEN', nama:'ROLE_AGEN'},
                {id:'ROLE_CREW', nama:'ROLE_CREW'},
                {id:'ROLE_LOKET', nama:'ROLE_LOKET'},
                {id:'ROLE_PARTNER', nama:'ROLE_PARTNER'}
            ],

            dataIsi: false,
            dataKosong: false
        }
    }

    // dropdownChanged = (e) => {
    //     this.setState({
    //         selectedRole: e.target.value
    //     })
    // }

    // START OPTION ROLE
    OptionRole = (x) => {
        return {value: x.id, label: x.nama}
    }

    handleChangeRole = (e) => {
        this.setState({selectedRole: e.value})
    }
    // END ROLE

    onClickOption(role) {
        const paramUser = {
            orderBy: 'id',
            pageNo: 0,
            pageRow: 100,
            role: role
        }

        API_ENDPOINT.post('/admin/user/list', paramUser)
        .then(res => {
            this.setState({
                dataIsi: true,
                dataUser: res.data.content
            })
        })
        .catch(error => {
            this.setState({
                dataKosong: true
            })
        })
    }

    render() {

        if(this.state.dataKosong) {
            return(
                <UserKosong id={this.state.idProvinsi} />
            )
        } else if(this.state.dataIsi) {
            return (
                <ListUser dataUser={this.state.dataUser} />
            )
        }

        return (
            <div>
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="container-fluid header-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-left">
                                        <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                                        <li className="breadcrumb-item active"><b>User</b></li>
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
                                        <div className="card-body">
                                            <div style={{display:'flex'}}>
                                            <Link className="btn btn-primary pull-right" to={"/user/tambahPengguna"} style={{marginLeft:'auto'}}>
                                                <i className="fa fa-plus"></i> Tambah User
                                            </Link>
                                            </div><br/>
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <Select
                                                        name="role"
                                                        placeholder="Pilih Role"
                                                        onChange={this.handleChangeRole}
                                                        options={this.state.dataRole.map(x => this.OptionRole(x))}
                                                    /><br/>
                                                    {/* <select class="form-control" value={this.state.selectedRole} onChange={this.dropdownChanged.bind(this)} style={{ width: '100%' }}>
                                                        <option disabled selected>Pilih Role</option>
                                                        <option value="ROLE_USER">ROLE_USER</option>
                                                        <option value="ROLE_ADMIN">ROLE_ADMIN</option>
                                                        <option value="ROLE_PO">ROLE_PO</option>
                                                        <option value="ROLE_AGEN">ROLE_AGEN</option>
                                                        <option value="ROLE_CREW">ROLE_CREW</option>
                                                        <option value="ROLE_LOKET">ROLE_LOKET</option>
                                                        <option value="ROLE_PARTNER">ROLE_PARTNER</option>
                                                    </select><br/> */}
                                                </div>
                                                <div className="col-md-3">
                                                    <button type="submit" class="btn btn-primary" onClick={() => this.onClickOption (this.state.selectedRole)}>
                                                        <i className="fa fa-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
