import React, { Component } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'

import BusKosong from './BusKosong'
import ListBus from './ListBus'

import API_ENDPOINT from '../../../Endpoint'

export default class Bus extends Component {

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

    render() {
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
            <div>
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="container-fluid header-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-left">
                                        <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                                        <li className="breadcrumb-item active"><b>Bus</b></li>
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
