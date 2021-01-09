import React, { Component } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import Moment from 'moment'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import API_ENDPOINT from '../../../Endpoint'

import TransaksiKosong from './TransaksiKosong'

const Loader = () =>
    <div class="loader">
        <div class="bar"></div>
    </div>;

export default class ListTransaksi extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            dataKosong: false,
            dataIsi: false,

            modal: false,
            modalTagihans: false,

            startDate : '',
            endDate : '',
            dataPo: [],
            dataDetail: {},
            dataDetail2: [],

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

    toggle = (el, index) => {
        this.setState({
            modal: true,
            dataDetail: el,
            dataDetail2: el.detail2
        })
    }

    modalTagihan = () => {
        this.setState({
            modalTagihans: true
        })
        // this.totalPnpTunai()
    }

    closeModal = () => {
        this.setState({
            modal: false
        })
    }

    closeModalTagihan = () => {
        this.setState({
            modalTagihans: false
        })
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

    // START TOTAL TUNAI
    totalPnpTunai = () => {
        var pnpTunai = 0
        this.props.dataTransaksi.forEach(function(el) {
            pnpTunai += el.jmlPnpTunai
        })
        return pnpTunai
    }

    totalBayarTunai = () => {
        var bayarTunai = 0
        this.props.dataTransaksi.forEach(function(el) {
            bayarTunai += el.jmlBayarTunai
        })
        return bayarTunai
    }

    totalMdrTunai = () => {
        var mdrTunais = 0
        this.props.dataTransaksi.forEach(function(el) {
            mdrTunais += el.mdrTunai
        })
        return mdrTunais
    }
    // END TOTAL TUNAI

    // START TOTAL E-MONEY
    totalPnpEmoney = () => {
        var pnpEmoney = 0
        this.props.dataTransaksi.forEach(function(el) {
            pnpEmoney += el.jmlPnpEmoney
        })
        return pnpEmoney
    }

    totalBayarEmoney = () => {
        var bayarEmoney = 0
        this.props.dataTransaksi.forEach(function(el) {
            bayarEmoney += el.jmlBayarEmoney
        })
        return bayarEmoney
    }

    totalMdrEmoney = () => {
        var mdrEmoneys = 0
        this.props.dataTransaksi.forEach(function(el) {
            mdrEmoneys += el.mdrTap
        })
        return mdrEmoneys
    }
    // END TOTAL E-MONEY

    // START TOTAL QRIS
    totalPnpQris = () => {
        var pnpQris = 0
        this.props.dataTransaksi.forEach(function(el) {
            pnpQris += el.jmlPnpQris
        })
        return pnpQris
    }

    totalBayarQris = () => {
        var bayarQris = 0
        this.props.dataTransaksi.forEach(function(el) {
            bayarQris += el.jmlBayarQris
        })
        return bayarQris
    }

    totalMdrQris = () => {
        var mdrQriss = 0
        this.props.dataTransaksi.forEach(function(el) {
            mdrQriss += el.mdrQRIS
        })
        return mdrQriss
    }
    // END TOTAL QRIS

    // START OPTION P.O
    OptionPo = (x) => {
        return {value: x.idPo, label: x.nama}
    }

    handleChangePo = (e) => {
        this.setState({idPo: e.value})
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

        this.showLoader();

        API_ENDPOINT.get('/admin/invoice/setoran/po?idPo=' + this.state.idPo + '&tglAkhir=' + tglAkhir + '&tglAwal=' + tglAwal + '&type=' + this.state.idTypeBus)
        .then(res => {
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
            this.hideLoader();
        })
    }

    changeInvoice = (e) => {
        this.setState({
            dataInvoice: e.target.value
        })
    }

    changeKeterangan = (e) => {
        this.setState({
            dataKeterangan: e.target.value
        })
    }

    prosesTagihan = (e) => {
        e.preventDefault()

        const paramTagihan = {
            idPo: this.props.idPo,
            invoice: this.state.dataInvoice,
            jumlahMDR: this.totalMdrTunai(),
            jumlahRp: this.totalBayarTunai(),
            keterangan: this.state.dataKeterangan,
            tglAkhir: Moment(this.props.tglAkhir).format('YYYY-MM-DD'),
            tglAwal: Moment(this.props.tglAwal).format('YYYY-MM-DD'),
            typeBus: this.props.typeBus
        }
        console.log(paramTagihan);

        API_ENDPOINT.post('/admin/invoice/tagihan/po', paramTagihan)
        .then(res => {
            alert(res.data.message);
            console.log(res.data.message);
            // this.props.history.push('/')
        })
        .catch(error => {
            alert('error')
        })
    }

    render() {

        if(this.state.dataKosong) {
            return (
                <TransaksiKosong dataProvinsi={this.state.dataProvinsi} dataWilayah={this.state.dataWilayah} id={this.state.idProvinsi} currentPage={this.state.current_page} />
            )
        } else if(this.state.dataIsi) {
            return (
                <ListTransaksi 
                    dataTransaksi = {this.state.listDataTransaksi}
                    idPo = {this.state.idPo}
                    tglAwal = {this.state.startDate}
                    tglAkhir = {this.state.endDate}
                    typeBus = {this.state.idTypeBus}
                />
            )
        }

        // const numberFormat = (value) =>
        // new Intl.NumberFormat('en-IN', {
        //     style: 'currency',
        //     currency: 'INR'
        // }).format(value);

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
                                        <li className="breadcrumb-item active"><b>Transaksi</b></li>
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
                                            </div><br/>
                                            {(this.state.loading) ? <Loader /> : null}
                                            <br/><p><strong>DATA TRANSAKSI</strong></p>
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-striped text-nowrap">
                                                    <thead>
                                                        <tr>
                                                            <th rowspan="2" className="text-center" style={{ width: '1%', verticalAlign:'middle' }}>Produk Bus</th>
                                                            <th colspan="3" className="text-center" style={{ width: '10%' }}>Tunai</th>
                                                            <th colspan="3" className="text-center" style={{ width: '10%' }}>E-Money</th>
                                                            <th colspan="3" className="text-center" style={{ width: '10%' }}>QRIS</th>
                                                            <th rowspan="2" className="text-center" style={{ width: '1%', verticalAlign:'middle' }}>Aksi</th>
                                                        </tr>
                                                        <tr>
                                                            <th className="text-center">Pnp</th>
                                                            <th className="text-center">Rp</th>
                                                            <th className="text-center">MDR</th>
                                                            <th className="text-center">Pnp</th>
                                                            <th className="text-center">Rp</th>
                                                            <th className="text-center">MDR</th>
                                                            <th className="text-center">Pnp</th>
                                                            <th className="text-center">Rp</th>
                                                            <th className="text-center">MDR</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            this.props.dataTransaksi.map((el, index) => (
                                                                <tr>
                                                                    <td className="text-center">{el.kodeBus}</td>
                                                                    <td className="text-center">{el.jmlPnpTunai}</td>
                                                                    <td className="text-right">{currency.format(el.jmlBayarTunai)}</td>
                                                                    <td className="text-right">{currency.format(el.mdrTunai)}</td>
                                                                    <td className="text-center">{el.jmlPnpEmoney}</td>
                                                                    <td className="text-right">{currency.format(el.jmlBayarEmoney)}</td>
                                                                    <td className="text-right">{currency.format(el.mdrTap)}</td>
                                                                    <td className="text-center">{el.jmlPnpQris}</td>
                                                                    <td className="text-right">{currency.format(el.jmlBayarQris)}</td>
                                                                    <td className="text-right">{currency.format(el.mdrQRIS)}</td>
                                                                    <td>
                                                                        <div className="text-center">
                                                                            {/* <Link className="btn btn-success" to={"/pengaturan/editWilayah/" + el.id + "/" + this.props.id}>
                                                                                Detail
                                                                            </Link> */}
                                                                            <Button color="success" onClick={(e) => this.toggle(el, index)}>Detail</Button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <td className="text-center"><b>TOTAL</b></td>
                                                            <td className="text-center">{this.totalPnpTunai()}</td>
                                                            <td className="text-right">{currency.format(this.totalBayarTunai())}</td>
                                                            <td className="text-right">{currency.format(this.totalMdrTunai())}</td>
                                                            <td className="text-center">{this.totalPnpEmoney()}</td>
                                                            <td className="text-right">{currency.format(this.totalBayarEmoney())}</td>
                                                            <td className="text-right">{currency.format(this.totalMdrEmoney())}</td>
                                                            <td className="text-center">{this.totalPnpQris()}</td>
                                                            <td className="text-right">{currency.format(this.totalBayarQris())}</td>
                                                            <td className="text-right">{currency.format(this.totalMdrQris())}</td>
                                                            <td></td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                                <button className="btn btn-primary" onClick={this.modalTagihan} style={{float:'right'}}><i className="fa fa-plus"></i> Create Tagihan</button>
                                            </div>
                                            {/* <div className="row"> */}
                                                {/* <button className="btn btn-primary pull-right">Create Settlement</button> */}
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* START MODAL DETAIL TRANSAKSI */}
                <Modal 
                    isOpen={this.state.modal} 
                    toggle={this.closeModal}
                    centered={true}
                    size="lg"
                >
                    <ModalHeader toggle={this.closeModal}>Detail Transaksi Bus ({this.state.dataDetail.kodeBus})</ModalHeader>
                    <ModalBody>
                        <div className="table-responsive">
                        <table className="table table-bordered table-striped text-nowrap">
                            <thead>
                                <tr>
                                    <th rowspan="2" className="text-center" style={{ width: '1%', verticalAlign:'middle' }}>Jurusan</th>
                                    <th rowspan="2" className="text-center" style={{ width: '1%', verticalAlign:'middle' }}>Asal</th>
                                    <th rowspan="2" className="text-center" style={{ width: '1%', verticalAlign:'middle' }}>Tujuan</th>
                                    <th colspan="2" className="text-center" style={{ width: '10%' }}>Tunai</th>
                                    <th colspan="2" className="text-center" style={{ width: '10%' }}>E-Money</th>
                                    <th colspan="2" className="text-center" style={{ width: '10%' }}>QRIS</th>
                                </tr>
                                <tr>
                                    <th className="text-center">Pnp</th>
                                    <th className="text-center">Rp</th>
                                    <th className="text-center">Pnp</th>
                                    <th className="text-center">Rp</th>
                                    <th className="text-center">Pnp</th>
                                    <th className="text-center">Rp</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.dataDetail2.map((el) => (
                                        <tr>
                                            <td className="text-center">{el.namaTrayek}</td>
                                            <td className="text-center">{el.lokasiAwal}</td>
                                            <td className="text-center">{el.lokasiAkhir}</td>
                                            <td className="text-center">{el.jmlPnpTunai}</td>
                                            <td className="text-right">{currency.format(el.jmlBayarTunai)}</td>
                                            <td className="text-center">{el.jmlPnpEmoney}</td>
                                            <td className="text-right">{currency.format(el.jmlBayarEmoney)}</td>
                                            <td className="text-center">{el.jmlPnpQris}</td>
                                            <td className="text-right">{currency.format(el.jmlBayarQris)}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="primary">Do Something</Button>{' '} */}
                        <Button color="primary" onClick={this.closeModal}>Tutup</Button>
                    </ModalFooter>
                </Modal>
                {/* END MODAL DETAIL TRANSAKSI */}


                {/* START MODAL CREATE TAGIHAN */}
                <Modal 
                    isOpen={this.state.modalTagihans} 
                    toggle={this.closeModalTagihan}
                    centered={true}
                    size="md"
                >
                    <ModalHeader toggle={this.closeModalTagihan}>Tagihan Tunai P.O</ModalHeader>
                    <ModalBody>
                        <div className="form-horizontal">
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-3 col-form-label">No. Invoice</label>
                                <div class="col-sm-8">
                                <input type="text" class="form-control" placeholder="No.Invoice" onChange={this.changeInvoice} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-3 col-form-label">Keterangan</label>
                                <div class="col-sm-8">
                                    <textarea type="text" class="form-control" placeholder="Keterangan" onChange={this.changeKeterangan} />
                                </div>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-primary text-center" onClick={(e) => this.prosesTagihan(e)}>Proses</button>
                            </div>
                        </div>
                    </ModalBody>
                    {/* <ModalFooter> */}
                        {/* <Button color="primary">Do Something</Button>{' '} */}
                        {/* <Button color="primary" onClick={this.closeModal}>Tutup</Button> */}
                    {/* </ModalFooter> */}
                </Modal>
                {/* END MODAL CREATE TAGIHAN */}

            </div>
        )
    }
}
