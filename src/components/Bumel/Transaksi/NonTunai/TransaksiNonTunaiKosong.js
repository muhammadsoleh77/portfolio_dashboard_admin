import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Select from 'react-select'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import Moment from 'moment'

import API_ENDPOINT from '../../../../Endpoint'

import ListTransaksiNonTunai from './ListTransaksiNonTunai'

export default class TransaksiNonTunaiKosong extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataKosong: false,
            dataIsi: false,

            startDate : '',
            dataPo: [],
        }
    }

    componentDidMount() {
        this.endpointPo()
    }

    endpointPo = () => {
        API_ENDPOINT.get('/admin/po/getAll')
        .then(res=> {
            this.setState({
                dataPo: res.data
            })
        })
    }

    // START OPTION P.O
    OptionPo = (x) => {
        return {value: x.idPo, label: x.nama}
    }

    handleChangePo = (e) => {
        this.setState({idPo: e.value})
    }
    // END OPTION P.O

    handleChangeStartDate = (date) => {
        this.setState({
            startDate: date
        })
    }

    getDataTransaksi = (e) => {
        e.preventDefault()

        const tgl = Moment(this.state.startDate).format('YYYY-MM-DD')

        API_ENDPOINT.get('/admin/transaksi/nontunai?idPo=' + this.state.idPo + '&tanggal=' + tgl)
        .then(res => {
            if(res.data.length !== 0) {
                this.setState({
                    dataIsi: true,
                    listDataTransaksi: res.data
                })
            } else {
                this.setState({
                    dataKosong: true
                })
            }
        })
    }

    render() {

        if (this.state.dataIsi) {
            return (
                // <ListTransaksiNonTunai dataProvinsi={this.state.dataProvinsi} dataWilayah={this.state.dataWilayah} id={this.state.idProvinsi} currentPage={this.state.current_page} />
                <ListTransaksiNonTunai 
                    dataTransaksi = {this.state.listDataTransaksi}
                    idPo = {this.state.idPo}
                    tglAwal = {this.state.startDate}
                    // tglAkhir = {this.state.endDate}
                    // typeBus = {this.state.idTypeBus}
                />
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
                                        <li className="breadcrumb-item active"><b>Transaksi</b></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid">
                        <div class="col-md-12">
                            <div class="card" >
                                <div class="card-body" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    {/* <div class="col-6 main-menu" onClick={this.clickBelumBayar}> */}
                                    <div class="col-6 main-menu">
                                        <Link to="/bumel/transaksiTunai">
                                            <div class="menu disabled">
                                                Tunai
                                            </div>
                                        </Link>
                                    </div>
                                    {/* <div class="col-6 main-menu" onClick={this.clickSudahBayar}> */}
                                    <div class="col-6 main-menu">
                                        <Link to="/bumel/transaksiNonTunai">
                                            <div class="menu">
                                                Non Tunai
                                            </div>
                                        </Link>
                                    </div>
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
                                                <div className="col-md-2">
                                                    <Select
                                                        name="po"
                                                        placeholder="Pilih P.O"
                                                        onChange={this.handleChangePo}
                                                        options={this.state.dataPo.map(x => this.OptionPo(x))}
                                                    />
                                                </div>
                                                <div className="col-md-2">
                                                    <DatePicker
                                                        className="form-control"
                                                        placeholderText="Tanggal Awal"
                                                        selected={this.state.startDate}
                                                        onChange={this.handleChangeStartDate}
                                                    />
                                                </div>
                                                <div className="col-md-3">
                                                    <button type="submit" class="btn btn-primary" onClick={this.getDataTransaksi}>
                                                        <i className="fa fa-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <br /><p><strong>DATA TRANSAKSI NON TUNAI BUMEL KOSONG</strong></p>
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
