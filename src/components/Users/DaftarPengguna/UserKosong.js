import React, { Component } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import API_ENDPOINT from '../../../Endpoint'

import ListUser from './ListUser'

export default class UserKosong extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: '',
            dataUser: [],
            searchString: [],

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
                dataUser: res.data.content,
                searchString: res.data.content
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
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid header-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-left">
                                    <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                                    <li className="breadcrumb-item active"><b>List User</b></li>
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
                                            </div>
                                            <div className="col-md-3">
                                                <button type="submit" class="btn btn-primary" onClick={() => this.onClickOption (this.state.selectedRole)}>
                                                    <i className="fa fa-search"></i>
                                                </button><br/><br/>
                                            </div>
                                        </div>
                                        <p><strong>DATA USER KOSONG</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
