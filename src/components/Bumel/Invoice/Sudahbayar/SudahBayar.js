import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BelumBayar from '../Belumbayar/BelumBayar'
// import { Button } from 'reactstrap'
import API_ENDPOINT from '../../../../Endpoint'

export default class SudahBayar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pageBelumBayar: false,
            pageSudahBayar: false,

            dataSudahBayar: []
        }
    }

    componentDidMount() {
        this.EndpointSudahBayar()
    }

    EndpointSudahBayar = () => {
        API_ENDPOINT.get('/admin/invoice/tagihan/po/sudahbayar')
        .then(res => {
            console.log(res);
            this.setState({
                dataSudahBayar: res.data.data
            })
        })
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
        }

        var currency = new Intl.NumberFormat();

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
                                            <div class="menu disabled">
                                                Belum Bayar
                                            </div>
                                        </Link>
                                    </div>
                                    {/* <div class="col-6 main-menu" onClick={this.clickSudahBayar}> */}
                                    <div class="col-6 main-menu">
                                        <Link to="/bumel/invoice/sudahBayar">
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
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            {
                                                this.state.dataSudahBayar.length !== 0 ? (
                                                    <div className="table-responsive">
                                                    <br/><p><strong>DATA INVOICE SUDAH BAYAR</strong></p>
                                                        <table className="table table-bordered table-striped text-nowrap">
                                                            <thead>
                                                                <tr>
                                                                    <th className="text-center">Tanggal Awal</th>
                                                                    <th className="text-center">Tanggal Akhir</th>
                                                                    <th className="text-center">No.Invoice</th>
                                                                    <th className="text-center">Transaksi</th>
                                                                    <th className="text-center">MDR</th>
                                                                    <th className="text-center">Keterangan</th>
                                                                    <th className="text-center">Status Bayar</th>
                                                                    <th className="text-center">Aksi</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    this.state.dataSudahBayar.map((el, index) => (
                                                                        <tr>
                                                                            <td className="text-center">{el.tglAwal}</td>
                                                                            <td className="text-center">{el.tglAkhir}</td>
                                                                            <td className="text-center">{el.noInvoice}</td>
                                                                            <td className="text-right">{currency.format(el.jumlahRp)}</td>
                                                                            <td className="text-right">{currency.format(el.jumlahMdr)}</td>
                                                                            <td className="text-center">{el.keterangan}</td>
                                                                            <td className="text-center">{el.isPaid ? <i class="fa fa-check"></i> : 'Belum Terbayar'}</td>
                                                                            <td>
                                                                                <div className="text-center">
                                                                                    <Link className="btn btn-success" to={"/bumel/detailSudahBayar/" + el.id}>
                                                                                        Detail
                                                                                    </Link>
                                                                                    {/* <Button color="success" onClick={(e) => this.toggle(el, index)}>Detail</Button> */}
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    ))
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <p><strong>TIDAK ADA DATA INVOICE SUDAH BAYAR</strong></p>
                                                    </div>
                                                )
                                            }
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
