import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Select from 'react-select'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import Moment from 'moment'

import API_ENDPOINT from '../../../../Endpoint'

import TransaksiKosong from './TransaksiKosong'
import ListTransaksi from './ListTransaksi'

const Loader = () =>
    <div class="loader">
        <div class="bar"></div>
    </div>;

export default class TransaksiTunai extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            dataKosong: false,
            dataIsi: false,

            startDate : '',
            endDate : '',
            dataPo: [],

            dataTypeBus: [
                {id:'0', nama:'ALL'},
                {id:'1', nama:'JAC'},
                {id:'2', nama:'JRC'},
                {id:'3', nama:'TJR'}
            ]
        }
    }

    hideLoader = () => {
        this.setState({ loading: false });
    }

    showLoader = () => {
        this.setState({ loading: true });
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
        this.setState({
            idPo: e.value,
            namaPo: e.label
        })
    }
    // END OPTION P.O

    // START OPTION TYPE BUS
    OptionTypeBus = (x) => {
        return {value: x.id, label: x.nama}
    }

    handleChangeTypeBus = (e) => {
        this.setState({idTypeBus: e.value})
    }
    // END OPTION TYPE BUS

    handleChangeStartDate = (date) => {
        this.setState({
            startDate: date
        })
    }

    handleChangeEndDate = (date) => {
        this.setState({
            endDate: date
        })
    }

    getDataTransaksi = (e) => {
        e.preventDefault()

        const tglAwal = Moment(this.state.startDate).format('YYYY-MM-DD')
        const tglAkhir = Moment(this.state.endDate).format('YYYY-MM-DD')

        this.showLoader()

        API_ENDPOINT.get('/admin/invoice/setoran/po?idPo=' + this.state.idPo + '&tglAkhir=' + tglAkhir + '&tglAwal=' + tglAwal + '&type=' + this.state.idTypeBus)
        .then(res => {
            console.log(res.data);
            if(res.data.data.length !== 0) {
                this.setState({
                    dataIsi: true,
                    listDataTransaksi: res.data.data
                })
            } else {
                this.setState({
                    dataKosong: true
                })
            }
            this.hideLoader()
        })
    }

    render() {

        if(this.state.dataKosong) {
            return(
                <TransaksiKosong id={this.state.idProvinsi} />
            )
        } else if(this.state.dataIsi) {
            return (
                <ListTransaksi 
                    dataTransaksi = {this.state.listDataTransaksi}
                    idPo = {this.state.idPo}
                    namaPo = {this.state.namaPo}
                    tglAwal = {this.state.startDate}
                    tglAkhir = {this.state.endDate}
                    typeBus = {this.state.idTypeBus}
                />
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
                                        <div class="menu">
                                            Tunai
                                            </div>
                                    </Link>
                                </div>
                                {/* <div class="col-6 main-menu" onClick={this.clickSudahBayar}> */}
                                <div class="col-6 main-menu">
                                    <Link to="/bumel/transaksiNonTunai">
                                        <div class="menu disabled">
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
                                                    // value={this.state.dataPo.filter(option => option.nama === this.state.namaPo)}
                                                /><br />
                                            </div>
                                            <div className="col-md-2">
                                                <DatePicker
                                                    className="form-control"
                                                    placeholderText="Tanggal Awal"
                                                    selected={this.state.startDate}
                                                    onChange={this.handleChangeStartDate}
                                                /><br /><br />
                                            </div>
                                            <div className="col-md-2">
                                                <DatePicker
                                                    className="form-control"
                                                    placeholderText="Tanggal Akhir"
                                                    selected={this.state.endDate}
                                                    onChange={this.handleChangeEndDate}
                                                /><br /><br />
                                            </div>
                                            <div className="col-md-2">
                                                <Select
                                                    name="typeBus"
                                                    placeholder="Pilih Type Bus"
                                                    onChange={this.handleChangeTypeBus}
                                                    options={this.state.dataTypeBus.map(x => this.OptionTypeBus(x))}
                                                /><br />
                                            </div>
                                            <div className="col-md-3">
                                                <button type="submit" class="btn btn-primary" onClick={this.getDataTransaksi}>
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                        {(this.state.loading) ? <Loader /> : null}
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
