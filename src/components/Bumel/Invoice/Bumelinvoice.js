import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BelumBayar from './Belumbayar/BelumBayar'
import SudahBayar from './Sudahbayar/SudahBayar'

export default class Bumelinvoice extends Component {

    constructor (props) {
        super(props)

        this.state = {
            pageBelumBayar: false,
            pageSudahBayar: false
        }

    }

    clickBelumBayar = () => {
        this.setState({
            pageBelumBayar: true
        })
    }

    clickSudahBayar = () => {
        this.setState({
            pageSudahBayar: true
        })
    }

    render() {

        if(this.state.pageBelumBayar) {
            return(
                <BelumBayar />
            )
        } else if (this.state.pageSudahBayar) {
            return(
                <SudahBayar />
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
                                        <li className="breadcrumb-item active"><b>Invoice</b></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid">
                        <div class="col-md-12">
                            <div class="card" >
                                <div class="card-body" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                    {/* <div class="col-6 main-menu" onClick={this.clickBelumBayar}> */}
                                    <div class="col-6 main-menu">
                                        <Link to="/bumel/belumBayar">
                                            <div class="menu">
                                                Belum Bayar
                                            </div>
                                        </Link>
                                    </div>
                                    {/* <div class="col-6 main-menu" onClick={this.clickSudahBayar}> */}
                                    <div class="col-6 main-menu">
                                        <Link to="/bumel/sudahBayar">
                                            <div class="menu">
                                                Sudah Bayar
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="content">
                        <div className="container-fluid">
                            <div className="">
                                {/* <div class="col-md-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div className="">
                                            <a href="# ">
                                                <div class="col-md-6 main-menu">
                                                    <div class="menu disabled">
                                                        Laporan Setoran
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="# ">
                                                <div class="col-md-6 main-menu">
                                                    <div class="menu">
                                                        Laporan Transaksi
                                                    </div>
                                                </div>
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <Select
                                                        name="po"
                                                        placeholder="Pilih P.O"
                                                        onChange={this.handleChangePo}
                                                        options={this.state.dataPo.map(x => this.OptionPo(x))}
                                                    /><br/>
                                                </div>
                                                <div className="col-md-2">
                                                    <DatePicker
                                                        className="form-control" 
                                                        placeholderText="Tanggal Awal" 
                                                        selected={this.state.startDate} 
                                                        onChange={this.handleChangeStartDate}
                                                    /><br/><br/>
                                                </div>
                                                <div className="col-md-2">
                                                    <DatePicker 
                                                        className="form-control" 
                                                        placeholderText="Tanggal Akhir" 
                                                        selected={this.state.endDate} 
                                                        onChange={this.handleChangeEndDate}
                                                    /><br/><br/>
                                                </div>
                                                <div className="col-md-2">
                                                    <Select
                                                        name="typeBus"
                                                        placeholder="Pilih Type Bus"
                                                        onChange={this.handleChangeTypeBus}
                                                        options={this.state.dataTypeBus.map(x => this.OptionTypeBus(x))}
                                                    /><br/>
                                                </div>
                                                <div className="col-md-3">
                                                    <button type="submit" class="btn btn-primary" onClick={this.getDataTransaksi}>
                                                        <i className="fa fa-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
