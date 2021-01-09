import React, { Component } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'

import UserKosong from './UserKosong'

import API_ENDPOINT from '../../../Endpoint'

export default class ListUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: '',
            dataUser: [],
            searchString: [],

            dataRole: [
                { id: 'ROLE_USER', nama: 'ROLE_USER' },
                { id: 'ROLE_ADMIN', nama: 'ROLE_ADMIN' },
                { id: 'ROLE_PO', nama: 'ROLE_PO' },
                { id: 'ROLE_AGEN', nama: 'ROLE_AGEN' },
                { id: 'ROLE_CREW', nama: 'ROLE_CREW' },
                { id: 'ROLE_LOKET', nama: 'ROLE_LOKET' },
                { id: 'ROLE_PARTNER', nama: 'ROLE_PARTNER' }
            ],

            dataIsi: false,
            dataKosong: false
        }
    }

    dropdownChanged = (e) => {
        this.setState({
            selectedRole: e.target.value
        })
    }

    // START OPTION ROLE
    OptionRole = (x) => {
        return { value: x.id, label: x.nama }
    }

    handleChangeRole = (e) => {
        this.setState({ selectedRole: e.value })
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

    hapusUser = (idUser) => {
        // console.log(user);
        API_ENDPOINT.delete('/admin/user/delete?idUser=' + idUser)
            .then(res => {
                console.log(res);
                alert('Berhasil Hapus Data User')
            })
            .catch(error => {
                console.log(error);
                alert('error')
            })
    }

    changeSearch = (e) => {
        // API_ENDPOINT.post('/admin/user/search?keyword=' + e.target.value)
        // .then(res => {
        //     console.log(res);
        // })
        this.setState({
            query: e.target.value
        }, () => {
            this.filterArray();
        })
    }

    filterArray = () => {
        let searchString = this.state.query;
        let responseData = this.state.dataUser;

        if (searchString.length > 0) {
            // console.log(responseData[i].name);
            responseData = responseData.filter(searchString);
            this.setState({ responseData })
        }

    }

    render() {

        if (this.state.dataKosong) {
            return (
                <UserKosong id={this.state.idProvinsi} />
            )
        } else if (this.state.dataIsi) {
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
                                        <div style={{ display: 'flex' }}>
                                            <Link className="btn btn-primary pull-right" to={"/user/tambahPengguna"} style={{ marginLeft: 'auto' }}>
                                                <i className="fa fa-plus"></i> Tambah User
                                            </Link>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-3">
                                                <Select
                                                    name="role"
                                                    placeholder="Pilih Role"
                                                    onChange={this.handleChangeRole}
                                                    options={this.state.dataRole.map(x => this.OptionRole(x))}
                                                /><br />
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
                                                <button type="submit" class="btn btn-primary" onClick={() => this.onClickOption(this.state.selectedRole)}>
                                                    <i className="fa fa-search"></i>
                                                </button><br /><br />
                                            </div>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-hover text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center" style={{ width: '1%' }}>ID</th>
                                                        <th className="text-center" style={{ width: '10%' }}>Nama User</th>
                                                        <th className="text-center" style={{ width: '10%' }}>Email</th>
                                                        <th className="text-center" style={{ width: '10%' }}>Aksi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* <tr>
                                                    <td></td>
                                                    <td>
                                                        <input className="form-control" type="text" onChange={this.changeSearch} placeholder="search..." />
                                                    </td>
                                                    <td></td>
                                                    <td></td>
                                                </tr> */}
                                                    {
                                                        this.props.dataUser.map((el) => {
                                                            console.log(el);
                                                            return (
                                                                <tr key={el.id}>
                                                                    <td className="text-center">{el.id}</td>
                                                                    <td className="text-center">{el.name}</td>
                                                                    <td className="text-center">{el.email}</td>
                                                                    <td>
                                                                        <div className="text-center">
                                                                            <Link className="btn btn-primary" to={"/user/ubahPassword/" + el.id}>
                                                                                <i className="fa fa-lock"></i>
                                                                            </Link>&nbsp;&nbsp;&nbsp;
                                                                            <Link className="btn btn-warning" to={"/user/editUser/" + el.id}>
                                                                                <i className="fa fa-pencil-alt"></i>
                                                                            </Link>&nbsp;&nbsp;&nbsp;
                                                                            <button type="button" className="btn btn-danger" onClick={() => this.hapusUser(el.id)}>
                                                                                <i className="fa fa-trash"></i>
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
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
