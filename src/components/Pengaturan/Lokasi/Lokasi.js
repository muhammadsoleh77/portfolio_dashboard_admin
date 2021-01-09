import React, { Component } from 'react'
import Select from 'react-select'
import API_ENDPOINT from '../../../Endpoint'

import ListLokasi from './ListLokasi'
import LokasiKosong from './LokasiKosong'

export default class Lokasi extends Component {

    state = {
        dataProvinsi: [],
        dataWilayah: [],
        dataKosong: false,
        dataIsi: false,
        idProvinsi: ''
    }    

    componentDidMount() {
        API_ENDPOINT.get('/admin/wilayah/list')
        .then(res => {
            this.setState({
                dataWilayah: res.data
            })
            console.log(res);
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
            this.setState({
                dataKosong: true,
                idWilayah: selectedIdWil
            })
        })
    }

    render() {

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
            <div>
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-left">
                                        <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                                        <li className="breadcrumb-item active"><b>Lokasi</b></li>
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
                                                    <button type="submit" className="btn btn-primary" onClick={() => this.onClickOption (this.state.selectedIdWil)}>
                                                        <i className="fa fa-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            {/* {
                                                this.state.dataIsi ? <ListLokasi dataLokasi={this.state.dataLokasi} /> : this.state.dataKosong ? <LokasiKosong idWil={this.state.selectedIdWil} /> : null
                                                // button
                                            } */}
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
