import React, { Component } from 'react'
import API_ENDPOINT from '../../../Endpoint'
import Moment from 'moment'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

import ListSettlement from './ListSettlement'
import SettlementKosong from './SettlementKosong'

export default class Settlement extends Component {

    // state = {
    //     dataKosong: false,
    //     dataIsi: false,
    // }

    // componentDidMount() {

    //     // const paramTrayek = {
    //     //     orderBy: 'id',
    //     //     pageNo: 0,
    //     //     pageRow: 100
    //     // }

    //     API_ENDPOINT.get('/admin/transaksi/nontunai/laporan')
    //         .then(res => {
    //             console.log(res);
    //             this.setState({
    //                 dataSettlement: res.data,
    //                 dataIsi: true
    //             })
    //         })
    //         .catch(error => {
    //             // alert(error)
    //             this.setState({
    //                 dataKosong: true
    //             })
    //         })
    // }

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

        API_ENDPOINT.get('/admin/transaksi/nontunai/laporan?idPo=' + this.state.idPo + '&tanggal=' + tgl)
        .then(res => {
            if(res.data.length !== 0) {
                this.setState({
                    dataIsi: true,
                    dataSettlement: res.data
                })
            } else {
                this.setState({
                    dataKosong: true
                })
            }
        })
    }

    render() {

        if(this.state.dataKosong) {
            return(
                <SettlementKosong id={this.state.idProvinsi} />
            )
        } else if(this.state.dataIsi) {
            return (
                <ListSettlement 
                    dataSettlement = {this.state.dataSettlement}
                    idPo = {this.state.idPo}
                    tglAwal = {this.state.startDate}
                    // tglAkhir = {this.state.endDate}
                    // typeBus = {this.state.idTypeBus}
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
                                    <li className="breadcrumb-item active"><b>Settlement</b></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Settlement</h3>
                                    </div>
                                    <div className="card-body">
                                        {
                                            this.state.dataIsi ? <ListSettlement dataSettlement={this.state.dataSettlement} /> : this.state.dataKosong ? <SettlementKosong /> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

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
                                                /><br />
                                            </div>
                                            <div className="col-md-2">
                                                <DatePicker
                                                    className="form-control"
                                                    placeholderText="Tanggal"
                                                    selected={this.state.startDate}
                                                    onChange={this.handleChangeStartDate}
                                                /><br /><br />
                                            </div>
                                            <div className="col-md-3">
                                                <button type="submit" class="btn btn-primary" onClick={this.getDataTransaksi}>
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
        )
    }
}
