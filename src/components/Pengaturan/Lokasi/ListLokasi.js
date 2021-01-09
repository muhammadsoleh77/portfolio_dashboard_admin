import React, { Component } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import API_ENDPOINT from '../../../Endpoint'

import LokasiKosong from './LokasiKosong'

export default class ListLokasi extends Component {

    state = {
        dataProvinsi: [],
        dataWilayah: [],
        dataKosong: false,
        dataIsi: false,
        idLokasi: ''
    }

    componentDidMount() {
        API_ENDPOINT.get('/admin/wilayah/list')
        .then(res => {
            this.setState({
                dataWilayah: res.data
            })
            // console.log(res);
        })
    }

    hapusWilayah(id) {
        API_ENDPOINT.delete('/admin/lokasi/' + id + '/delete')
            .then(res => {
                // console.log(res);
                alert(res.data.message)
                window.location.reload(true)
            })
    }

    dropdownChangedWil(e){
        this.setState({selectedIdWil: e.target.value});
    }

    MakeOption = (x) => {
        return {value: x.id, label: x.namaWilayah}
    }

    handleChangeSelect = (e) => {
        this.setState({selectedIdWil: e.value})
    }

    onClickOption(selectedIdWil) {
        // e.preventDefault()

        API_ENDPOINT.get('/admin/lokasi/list/wilayah/' + selectedIdWil)
        .then(res => {
            console.log(res);
            this.setState({
                dataIsi: true,
                dataLokasi: res.data,
                idWilayah: selectedIdWil
            })
        })
        .catch(error => {
            // alert(error)
            // console.log(error);
            this.setState({
                dataKosong: true,
                idWilayah: selectedIdWil
            })
        })
    }

    render() {

        const dataLokasi = this.props.dataLokasi
        console.log(this);

        if (this.state.dataKosong) {
            return (
                <LokasiKosong idWil={this.state.selectedIdWil} />
            )
        }

        if (this.state.dataIsi) {
            return (
                <ListLokasi dataLokasi={this.state.dataLokasi} idWil={this.state.idWilayah} />
            )
        }

        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-left">
                                    <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                                    <li className="breadcrumb-item active"><b>List Lokasi</b></li>
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
                                                    name="wilayah" 
                                                    placeholder="Pilih Wilayah"
                                                    onChange={this.handleChangeSelect}
                                                    options={this.state.dataWilayah.map(x => this.MakeOption(x))}
                                                /><br/>
                                                {/* <select className="form-control" value={this.state.selectedIdWil} onChange={this.dropdownChangedWil.bind(this)}>
                                                    <option disabled selected>Pilih Wilayah</option>
                                                    {
                                                        this.state.dataWilayah.map((el) => {
                                                            return (
                                                                <option key={el.id} value={el.id}>{el.namaWilayah}</option>
                                                            )
                                                        })                                                    
                                                    }
                                                </select><br/> */}
                                            </div>
                                            <div className="col-md-3">
                                                <button type="submit" class="btn btn-primary" onClick={() => this.onClickOption (this.state.selectedIdWil)}>
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <br/><Link className="btn btn-primary pull-right" to={"/pengaturan/tambahLokasi/" + this.props.idWil}>
                                            Tambah Lokasi
                                        </Link><br /><br />
                                        <table className="table table-bordered table-hover text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th className="text-center" style={{ width: '1%' }}>ID</th>
                                                    <th className="text-center" style={{ width: '10%' }}>Nama Lokasi</th>
                                                    <th className="text-center" style={{ width: '10%' }}>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    dataLokasi.map((el) => (
                                                        <tr key={el.id}>
                                                            <td className="text-center">{el.id}</td>
                                                            <td className="text-center">{el.namaLokasi}</td>
                                                            <td>
                                                                <div className="text-center">
                                                                    <Link className="btn btn-warning" to={"/pengaturan/editLokasi/" + el.id + "/" + this.props.idWil}>
                                                                        <i className="fa fa-pencil-alt"></i>
                                                                    </Link>&nbsp;&nbsp;&nbsp;
                                                                    <button type="button" className="btn btn-danger" onClick={() => this.hapusWilayah(el.id)}>
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
                </section>
            </div>
        )
    }
}


