import React, { Component } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'

import API_ENDPOINT from '../../../Endpoint'

export default class Trayek extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataPo: [],
            idPo: '',
            dataIsi: false,
            dataKosong: false
        }
    }

    componentDidMount(){
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

    OptionPo = (x) => {
        return {value: x.idPo, label: x.nama}
    }

    handleChangePo = (e) => {
        this.setState({selectedIdPo: e.value})
    }

    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="container-fluid header-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-left">
                                        <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                                        <li className="breadcrumb-item active"><b>Trayek</b></li>
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
                                                <Link className="btn btn-primary" to={"/akap/tambahTrayek"} style={{marginLeft:'auto'}}>
                                                    <i className="fa fa-plus"></i> Tambah Trayek
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
                                                    </select><br/> */}
                                                </div>
                                                <div className="col-md-3">
                                                    <button type="submit" class="btn btn-primary" onClick={() => this.onClickOption (this.state.selectedIdPo)}>
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
