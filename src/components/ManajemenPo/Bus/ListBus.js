import React, { Component } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../../../index.css'
import BusKosong from './BusKosong'

import API_ENDPOINT from '../../../Endpoint'

export default class ListBus extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataKosong: false,
            dataIsi: false,
            dataPo: [],
            dataBus: [],
            idPo: ''
        }
    }

    componentDidMount() {
        this.EndpointPo();
    }

    EndpointPo() {
        API_ENDPOINT.get('/admin/po/getAll')
        .then(res => {
            this.setState({
                dataPo: res.data
            })
        })
    }

    dropdownChanged(e) {
        this.setState({
            selectedIdPo: e.target.value
        })
    }

    OptionPo = (x) => {
        return {value: x.idPo, label: x.nama}
    }

    handleChangePo = (e) => {
        this.setState({selectedIdPo: e.value})
    }

    onClickOption(selectedIdPo) {
        const paramBus = {
            idPo: selectedIdPo,
            orderBy: 'id',
            pageNo: 0,
            pageRow: 100
        }

        API_ENDPOINT.post('/admin/bus/list', paramBus)
        .then(res => {
            this.setState({
                dataIsi: true,
                dataBus: res.data.content,
                idPo: selectedIdPo
            })
        })
        .catch(error => {
            this.setState({
                dataKosong: true,
                idPo: selectedIdPo
            })
        })
    }

    hapusBus(idBus) {
        Swal.fire({
            title: 'Yakin Hapus data?',
            text: "Data terhapus tidak dapat dikembalikan!",
            icon: 'warning',
            // customClass: 'swal-modal',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!'
            }).then((result) => {
            if (result.value) {
                API_ENDPOINT.delete('/admin/bus/' + idBus + '/delete')
                .then(res => {
                    Swal.fire(
                    'Terhapus!',
                    res.data.message,
                    'success'
                    )
                }).then(function() {
                    window.location.reload()
                })
                .catch(error => {
                    Swal.fire(
                        'Error!',
                        'Terjadi Kesalahan',
                        'error'
                    )
                })
            }
        })
    }


    render() {

        const dataBus = this.props.dataBus

        if(this.state.dataKosong) {
            return(
                <BusKosong idPo={this.state.idPo} />
            )
        } else if(this.state.dataIsi) {
            return (
                <ListBus dataBus={this.state.dataBus} dataPo={this.state.dataPo} idPo={this.state.idPo} />
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
                                    <li className="breadcrumb-item active"><b>List Bus</b></li>
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
                                            <Link className="btn btn-primary" to={"/manajemenPo/tambahBus"} style={{marginLeft:'auto'}}>
                                                <i className="fa fa-plus"></i> Tambah Bus
                                            </Link>
                                        </div><br/>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <Select
                                                    name="po"
                                                    placeholder="Pilih P.O"
                                                    onChange={this.handleChangePo}
                                                    options={this.state.dataPo.map(x => this.OptionPo(x))}
                                                /><br/>
                                                {/* <select class="form-control" value={this.state.selectedIdPo} onChange={this.dropdownChanged.bind(this)} style={{ width: '100%' }}>
                                                    <option disabled selected>Pilih P.O</option>
                                                    {
                                                        this.state.dataPo.map((el) => {
                                                            return (
                                                                <option key={el.idPo} value={el.idPo}>{el.nama}</option>
                                                            )
                                                        })
                                                    }
                                                </select><br /> */}
                                            </div>
                                            <div className="col-md-3">
                                                <button type="submit" class="btn btn-primary" onClick={() => this.onClickOption(this.state.selectedIdPo)}>
                                                    <i className="fa fa-search"></i>
                                                </button><br/><br/>
                                            </div>
                                        </div>
                                        <div className="table-responsive">
                                        <table className="table table-bordered table-hover text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th className="text-center" style={{ width: '1%' }}>ID</th>
                                                    <th className="text-center" style={{ width: '10%' }}>Produk Bus</th>
                                                    <th className="text-center" style={{ width: '10%' }}>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    dataBus.map((el, index) => (
                                                        <tr key={el.id}>
                                                            <td className="text-center">{el.idBus}</td>
                                                            <td className="text-center">{el.id}</td>
                                                            <td>
                                                                <div className="text-center">
                                                                    <Link className="btn btn-warning" to={"/manajemenPo/editBus/" + el.idBus}>
                                                                        <i className="fa fa-pencil-alt"></i>
                                                                    </Link>&nbsp;&nbsp;&nbsp;
                                                                    <button type="button" className="btn btn-danger" onClick={() => this.hapusBus(el.idBus)}>
                                                                        <i className="fa fa-trash"></i>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
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
