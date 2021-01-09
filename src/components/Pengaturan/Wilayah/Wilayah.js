import React, { Component } from 'react'
import Select from 'react-select'
import API_ENDPOINT from '../../../Endpoint'

import ListWilayah from './ListWilayah'
import WilayahKosong from './WilayahKosong'

// import CariWilayah from './CariWilayah'

export default class Wilayah extends Component {

    state = {
        dataProvinsi: [],
        dataWilayah: [],
        dataKosong: false,
        dataIsi: false,
        idProvinsi: '',
        current_page: null
    }

    componentDidMount() {
        API_ENDPOINT.get('/admin/provinsi/list')
            .then(res => {
                this.setState({
                    dataProvinsi: res.data
                })
                // console.log(this);
            })
    }

    dropdownChanged(e) {
        this.setState({ selectedId: e.target.value });
        // console.log(this);

    }

    MakeOption(x) {
        // console.log(x);
        return { value: x.id, label: x.nama };
        // this.options.concat(this.state.dataPo.map((x) => x));
        // this.setState({
        //     value: x.idPo,
        //     label: x.nama
        // })
    }

    handleChangeSelect = (e) => {
        // console.log(e);
        this.setState({ selectedId: e.value });
    }

    onClickOption(selectedId) {
        // e.preventDefault()

        const paramWilayah = {
            id: selectedId,
            orderBy: "id",
            pageNo: 0,
            pageRow: 100
        }

        API_ENDPOINT.post('/admin/wilayah/list/provinsi', paramWilayah)
            .then(res => {
                // console.log(res);
                this.setState({
                    dataIsi: true,
                    dataWilayah: res.data.content,
                    idProvinsi: selectedId,
                    current_page: res.data.totalPages
                })
            })
            .catch(error => {
                this.setState({
                    dataKosong: true,
                    idProvinsi: selectedId
                })
            })
    }

    render() {

        if(this.state.dataKosong) {
            return(
                <WilayahKosong id={this.state.idProvinsi} />
            )
        } else if(this.state.dataIsi) {
            return (
                <ListWilayah dataProvinsi={this.state.dataProvinsi} dataWilayah={this.state.dataWilayah} id={this.state.idProvinsi} currentPage={this.state.current_page} />
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
                                        <li className="breadcrumb-item active"><b>Wilayah</b></li>
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
                                                        name="provinsi"
                                                        placeholder="Pilih Provinsi"
                                                        onChange={this.handleChangeSelect}
                                                        options={this.state.dataProvinsi.map(x => this.MakeOption(x))}
                                                    /><br/>
                                                    {/* <select class="form-control select2" value={this.state.selectedId} onChange={this.dropdownChanged.bind(this)} style={{ width: '100%' }}>
                                                        <option disabled selected>Pilih Provinsi</option>
                                                        {
                                                            this.state.dataProvinsi.map((el) => {
                                                                return (
                                                                    <option key={el.id} value={el.id}>{el.nama}</option>
                                                                )
                                                            })
                                                        }
                                                    </select><br/> */}
                                                </div>
                                                <div className="col-md-3">
                                                    <button type="submit" class="btn btn-primary" onClick={() => this.onClickOption (this.state.selectedId)}>
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
