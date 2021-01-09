import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import SudahBayar from '../Sudahbayar/SudahBayar'
import API_ENDPOINT from '../../../../Endpoint'

export default class BelumBayar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pageBelumBayar: false,
            pageSudahBayar: false,

            dataBelumBayar: []
        }
    }

    componentDidMount() {
        this.EndpointBelumBayar()
    }

    EndpointBelumBayar = () => {
        API_ENDPOINT.get('/admin/invoice/tagihan/po/belumbayar')
        .then(res => {
            console.log(res);
            this.setState({
                dataBelumBayar: res.data.data
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

    reloadEndpointBelumBayar = () => {
        setTimeout(() => {
            API_ENDPOINT.get('/admin/invoice/tagihan/po/belumbayar')
            .then(res => {
                this.setState({dataBelumBayar: res.data.data})
            })
        }, 500)
    }
    
    terimaInvoice = (el) => {
        API_ENDPOINT.post('/admin/invoice/tagihan/po/bayar?idTagihan=' + el.id)
        .then(res => {
            alert(res.data)
            console.log(res.data);
        })
        this.reloadEndpointBelumBayar()
    }

    hapusInvoice = (el) => {
        API_ENDPOINT.delete('/admin/invoice/tagihan/delete?idTagihan=' + el.id)
        .then(res => {
            console.log(res);
            alert(res.data)
        })
        .catch(error => {
            console.log(error);
            alert('errror')
        })
        this.reloadEndpointBelumBayar()
    }

    render() {

        if(this.state.pageSudahBayar) {
            return(
                <SudahBayar />
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
                                            <div class="menu">
                                                Belum Bayar
                                            </div>
                                        </Link>
                                    </div>
                                    {/* <div class="col-6 main-menu" onClick={this.clickSudahBayar}> */}
                                    <div class="col-6 main-menu">
                                        <Link to="/bumel/sudahBayar">
                                            <div class="menu disabled">
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
                                                this.state.dataBelumBayar.length !== 0 ? (
                                                    <div className="table-responsive">
                                                        <p><strong>DATA INVOICE BELUM BAYAR</strong></p>
                                                        <table className="table table-bordered table-striped text-nowrap">
                                                            <thead>
                                                                <tr>
                                                                    <th className="text-center">Tanggal Awal</th>
                                                                    <th className="text-center">Tanggal Akhir</th>
                                                                    <th className="text-center">No.Invoice</th>
                                                                    <th className="text-center">Transaksi</th>
                                                                    <th className="text-center">MDR</th>
                                                                    <th className="text-center">Keterangan</th>
                                                                    <th className="text-center">Aksi</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    this.state.dataBelumBayar.map((el, index) => (
                                                                        <tr>
                                                                            <td className="text-center">{el.tglAwal}</td>
                                                                            <td className="text-center">{el.tglAkhir}</td>
                                                                            <td className="text-center">{el.noInvoice}</td>
                                                                            <td className="text-right">{currency.format(el.jumlahRp)}</td>
                                                                            <td className="text-right">{currency.format(el.jumlahMdr)}</td>
                                                                            <td className="text-center">{el.keterangan}</td>
                                                                            <td>
                                                                                <div className="text-center">
                                                                                    <Button color="primary" onClick={this.terimaInvoice.bind(this, el)}>Terima</Button>&nbsp;&nbsp;&nbsp;
                                                                                    <Link className="btn btn-success" to={"/bumel/detailBelumBayar/" + el.id}>
                                                                                        Detail
                                                                                    </Link>&nbsp;&nbsp;&nbsp;
                                                                                    <Button color="danger" onClick={this.hapusInvoice.bind(this, el)}>Hapus</Button>
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
                                                        <p><strong>DATA INVOICE BELUM BAYAR KOSONG</strong></p>
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
