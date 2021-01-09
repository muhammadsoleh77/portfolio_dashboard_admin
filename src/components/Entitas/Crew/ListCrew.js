import React, { Component } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'

import CrewKosong from './CrewKosong'

import API_ENDPOINT from '../../../Endpoint'


export default class ListCrew extends Component {

    state = {
        dataPo: [],
        dataIsi: false,
        dataKosong: false
    }

    componentDidMount() {
        API_ENDPOINT.get('/admin/po/getAll')
        .then(res => {
            console.log(res);
            this.setState({
                dataPo: res.data
            })
        })
    }

    dropdownChanged(e) {
        this.setState({ selectedId: e.target.value })
    }

    OptionPo = (x) => {
        return {value: x.idPo, label: x.nama}
    }

    handleChangePo = (e) => {
        this.setState({selectedId: e.value})
    }

    onClickOption(selectedId) {
        // e.preventDefault()

        const paramCrew = {
            idPo: selectedId,
            orderBy: "id",
            pageNo: 0,
            pageRow: 100
        }

        API_ENDPOINT.post('/admin/crew/list', paramCrew)
            .then(res => {
                this.setState({
                    dataIsi: true,
                    dataCrew: res.data.content,
                    idPo: selectedId
                })
            })
            .catch(error => {
                this.setState({
                    dataKosong: true,
                    idPo: selectedId
                })
            })
    }

    hapusAgen (id) {
        API_ENDPOINT.delete('/admin/loket/' + id + '/delete')
        .then(res => {
            console.log(res);
            alert('Berhasil Hapus Loket');
            // window.location.reload(true)
        }).catch(error => {
            console.log(error);
            alert('Error');
        })
    }

    render() {

        const dataCrew = this.props.dataCrew

        if(this.state.dataKosong) {
            return(
                <CrewKosong idPo={this.state.idPo} />
            )
        } else if(this.state.dataIsi) {
            return (
                <ListCrew dataCrew={this.state.dataCrew} dataPo={this.state.dataPo} idPo={this.state.idPo} />
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
                                    <li className="breadcrumb-item active"><b>List Crew</b></li>
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
                                        <div className="row">
                                            <div className="col-md-3">
                                                <Select
                                                    name="po"
                                                    placeholder="Pilih P.O"
                                                    onChange={this.handleChangePo}
                                                    options={this.state.dataPo.map(x => this.OptionPo(x))}
                                                /><br/>
                                                {/* <select class="form-control" value={this.state.selectedId} onChange={this.dropdownChanged.bind(this)} style={{ width: '100%' }}>
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
                                                <button type="submit" class="btn btn-primary" onClick={() => this.onClickOption(this.state.selectedId)}>
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <Link className="btn btn-primary" to={"/entitas/tambahCrew/" + this.props.idPo}>
                                                <i className="fa fa-plus"></i> Tambah Crew
                                            </Link>
                                        </div><br/>
                                        <div className="table-responsive">
                                        <table className="table table-bordered table-hover text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th className="text-center" style={{ width: '1%' }}>ID</th>
                                                    <th className="text-center" style={{ width: '10%' }}>Nama Crew</th>
                                                    <th className="text-center" style={{ width: '10%' }}>NIK</th>
                                                    <th className="text-center" style={{ width: '10%' }}>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    dataCrew.map((el) => (
                                                        <tr key={el.id}>
                                                            <td className="text-center">{el.id}</td>
                                                            <td className="text-center">{el.name}</td>
                                                            <td className="text-center">{el.nik}</td>
                                                            <td>
                                                                <div className="text-center">
                                                                    <Link className="btn btn-warning" to={"/entitas/editCrew/" + el.id}>
                                                                        <i className="fa fa-pencil-alt"></i>
                                                                    </Link>&nbsp;&nbsp;&nbsp;
                                                                    <button type="button" className="btn btn-danger" onClick={() => this.hapusAgen(el.id)}>
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
