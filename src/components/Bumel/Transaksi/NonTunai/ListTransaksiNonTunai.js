import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Select from 'react-select'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import Moment from 'moment'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
// import { Button } from 'reactstrap'

import API_ENDPOINT from '../../../../Endpoint'

import TransaksiNonTunaiKosong from './TransaksiNonTunaiKosong'

export default class ListTransaksiNonTunai extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataKosong: false,
            dataIsi: false,

            modal: false,
            modalTagihans: false,

            startDate: '',
            dataPo: [],
            dataDetail: {},
            dataDetail2: [],
        }
    }

    componentDidMount() {
        this.endpointPo()
    }

    endpointPo = () => {
        API_ENDPOINT.get('/admin/po/getAll')
            .then(res => {
                this.setState({
                    dataPo: res.data
                })
            })
    }

    // START OPTION P.O
    OptionPo = (x) => {
        return { value: x.idPo, label: x.nama }
    }

    handleChangePo = (e) => {
        this.setState({ idPo: e.value })
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
                if (res.data.length !== 0) {
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

    toggle = (el, index) => {
        this.setState({
            modal: true,
            dataDetail: el,
            dataDetail2: el.detail
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

    // PNP QRIS
    pnpQris = () => {
        var pnpQris = 0;
        this.props.dataTransaksi.forEach(function (el) {
            pnpQris += el.jmlPnp;
        })
        return pnpQris
    }

    // BAYAR QRIS
    bayarQris = () => {
        var bayarQris = 0;
        this.props.dataTransaksi.forEach(function (el) {
            bayarQris += el.jmlRpQris;
        })
        return bayarQris
    }

    // TOTAL QRIS
    totalQris = () => {
        var bayarTunai = 0;
        this.props.dataTransaksi.forEach(function (el) {
            bayarTunai += el.jmlQris;
        })
        return bayarTunai
    }

    // TOTAL MDRQRIS
    totalMDRQRIS = () => {
        var bayarMDRQRIS = 0;
        this.props.dataTransaksi.forEach(function (el) {
            bayarMDRQRIS += el.jmlMdrQris;
        })
        return bayarMDRQRIS
    }

    // BAYAR MDR
    bayarMdr = () => {
        var bayarMdr = 0
        this.props.dataTransaksi.forEach(function (el) {
            bayarMdr += el.jmlRpTap
        })
        return bayarMdr
    }

    // TOTAL MDR
    totalMdr = () => {
        var bayarMdr = 0
        this.props.dataTransaksi.forEach(function (el) {
            bayarMdr += el.jmlTap
        })
        return bayarMdr
    }

    // TOTAL MDR TAP
    totalsMDRTap = () => {
        var mdrTaps = 0
        this.props.dataTransaksi.forEach(function (el) {
            mdrTaps += el.jmlMdrTap
        })
        return mdrTaps
    }

    prosesTagihan = (e) => {
        e.preventDefault()

        this.setState({
            modalTagihans: false
        })

        // const paramTagihan = {
        //     idPo: this.props.idPo,
        //     nominalQRIS: this.totalQris(),
        //     nominalMDRQRIS: this.totalMDRQRIS(),
        //     nominalTap: this.totalMdr(),
        //     nominalMDRTap: this.totalsMDRTap(),
        //     tanggal: Moment(this.props.tglAwal).format('YYYY-MM-DD')
        // }
        // // console.log(paramTagihan);

        var a = this.props.dataTransaksi;
        const arr = [];
        // const arrDetail = [];

        a.forEach(function (el, index) {
            // console.log(el.detail[index]);
            arr.push({
                kodeBus: el.kodeBus,
                nominalMDRQRIS: el.jmlMdrQris,
                nominalMDRTap: el.jmlMdrTap,
                nominalQRIS: el.jmlQris,
                nominalTap: el.jmlTap,
                detail: el.detail.map((el2) => {
                    return {
                        jumlahQRIS: el2.jumlahQRIS,
                        jumlahTap: el2.jumlahTap,
                        mdrQRIS: el2.mdrQRIS,
                        mdrTap: el2.mdrTap,
                        pnpQRIS: el2.pnpQRIS,
                        pnpTap: el2.pnpTap,
                        trayek: el2.namaTrayek,
                    }
                }),
            })
        })
        // console.log(arr);

        const paramsTagihan = {
            idPo: this.props.idPo,
            tanggal: Moment(this.props.tglAwal).format('YYYY-MM-DD'),
            transaksiNonTunaiList: arr,
        }
        // console.log(paramsTagihan);

        API_ENDPOINT.post('/admin/transaksi/nontunai', paramsTagihan)
            .then(res => {
                alert(res.data.message);
                // console.log(this.props.dataProps.props);

                // const link = this.props.dataProps.props;
                // return link.history.push('/bumel/transaksiNonTunai')

                // const link = this.props.dataProps.props.location.pathname;
                // console.log(JSON.stringify(link));
                // return window.location.href(JSON.stringify(link))

                // this.props.dataProps.props.location('/bumel/transaksiNonTunai');
                // window.location.href('http://localhost:3000/#/bumel/transaksi')
            })
            .catch(error => {
                alert('error')
            })
    }

    render() {

        // if (this.state.dataKosong) {
        //     return (
        //         <TransaksiNonTunaiKosong dataProvinsi={this.state.dataProvinsi} dataWilayah={this.state.dataWilayah} id={this.state.idProvinsi} currentPage={this.state.current_page} />
        //     )
        // }

        if (this.state.dataKosong) {
            return (
                <TransaksiNonTunaiKosong id={this.state.idProvinsi} />
            )
        } else if (this.state.dataIsi) {
            return (
                <ListTransaksiNonTunai
                    dataProps={this}
                    dataTransaksi={this.state.listDataTransaksi}
                    idPo={this.state.idPo}
                    tglAwal={this.state.startDate}
                // tglAkhir = {this.state.endDate}
                // typeBus = {this.state.idTypeBus}
                />
            )
        }

        var currency = new Intl.NumberFormat();

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
                                        </div><br />
                                        <br /><p><strong>DATA TRANSAKSI NON TUNAI</strong></p>
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-striped text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th rowspan="2" className="text-center" style={{ verticalAlign: 'middle' }}>Produk Bus</th>
                                                        <th rowspan="2" className="text-center" style={{ verticalAlign: 'middle' }}>Pnp</th>
                                                        <th colspan="3" className="text-center">QRIS</th>
                                                        <th colspan="3" className="text-center">E-Money</th>
                                                        <th rowspan="2" className="text-center" style={{ width: '10%', verticalAlign: 'middle' }}>Aksi</th>
                                                    </tr>
                                                    <tr>
                                                        {/* <th className="text-center">Pnp</th> */}
                                                        <th className="text-center">Rp</th>
                                                        <th className="text-center">ODT</th>
                                                        <th className="text-center">MDR</th>
                                                        {/* <th className="text-center">Pnp</th> */}
                                                        <th className="text-center">Rp</th>
                                                        <th className="text-center">ODT</th>
                                                        <th className="text-center">MDR</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.props.dataTransaksi.map((el, index) => (
                                                            <tr>
                                                                <td className="text-center">{el.kodeBus}</td>
                                                                <td className="text-center">{el.jmlPnp}</td>
                                                                <td className="text-right">{currency.format(el.jmlRpQris)}</td>
                                                                <td className="text-right">{currency.format(el.jmlQris)}</td>
                                                                <td className="text-right">{currency.format(el.jmlMdrQris)}</td>
                                                                {/* <td className="text-center"></td> */}
                                                                <td className="text-right">{currency.format(el.jmlRpTap)}</td>
                                                                <td className="text-right">{currency.format(el.jmlTap)}</td>
                                                                <td className="text-right">{currency.format(el.jmlMdrTap)}</td>
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
                                                        <td className="text-center">{this.pnpQris()}</td>
                                                        <td className="text-right">{currency.format(this.bayarQris())}</td>
                                                        <td className="text-right">{currency.format(this.totalQris())}</td>
                                                        <td className="text-right">{currency.format(this.totalMDRQRIS())}</td>
                                                        <td className="text-right">{currency.format(this.bayarMdr())}</td>
                                                        <td className="text-right">{currency.format(this.totalMdr())}</td>
                                                        <td className="text-right">{currency.format(this.totalsMDRTap())}</td>
                                                        <td></td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <div>
                                            <button className="btn btn-primary" onClick={this.modalTagihan} style={{ float: 'right' }}><i className="fa fa-plus"></i> Create Settlement</button>
                                        </div>
                                        <div className="row">
                                            {/* <button className="btn btn-primary pull-right">Create Settlement</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                                        <th rowspan="2" className="text-center" style={{ verticalAlign: 'middle' }}>Trayek</th>
                                        <th colspan="3" className="text-center">E-Money</th>
                                        <th colspan="3" className="text-center">QRIS</th>
                                    </tr>
                                    <tr>
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
                                        this.state.dataDetail2.map((el) => (
                                            <tr>
                                                <td className="text-center">{el.namaTrayek}</td>
                                                <td className="text-center">{el.pnpTap}</td>
                                                <td className="text-right">{currency.format(el.jumlahTap)}</td>
                                                <td className="text-right">{currency.format(el.mdrTap)}</td>
                                                <td className="text-center">{el.pnpQRIS}</td>
                                                <td className="text-right">{currency.format(el.jumlahQRIS)}</td>
                                                <td className="text-right">{currency.format(el.mdrQRIS)}</td>
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
                    <ModalHeader toggle={this.closeModalTagihan}>Tagihan Non Tunai P.O</ModalHeader>
                    <ModalBody>
                        <div className="form-horizontal">
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-4 col-form-label">ODT QRIS</label>
                                <div class="col-sm-8">
                                    {/* <input type="text" class="form-control text-right" placeholder="Keterangan" value={currency.format(this.totalQris())} onChange={this.changeKeterangan} /> */}
                                    <input type="text" class="form-control text-right" placeholder="Keterangan" value={currency.format(this.totalQris())} readOnly />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-4 col-form-label">MDR QRIS</label>
                                <div class="col-sm-8">
                                    {/* <input type="text" class="form-control text-right" placeholder="Keterangan" value={currency.format(this.totalQris())} onChange={this.changeKeterangan} /> */}
                                    <input type="text" class="form-control text-right" placeholder="Keterangan" value={currency.format(this.totalMDRQRIS())} readOnly />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-4 col-form-label">ODT E-Money</label>
                                <div class="col-sm-8">
                                    {/* <input type="text" class="form-control text-right" placeholder="No.Invoice" value={currency.format(this.totalMdr())} onChange={this.changeInvoice} /> */}
                                    <input type="text" class="form-control text-right" placeholder="No.Invoice" value={currency.format(this.totalMdr())} readOnly />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-4 col-form-label">MDR E-Money</label>
                                <div class="col-sm-8">
                                    {/* <input type="text" class="form-control text-right" placeholder="No.Invoice" value={currency.format(this.totalMdr())} onChange={this.changeInvoice} /> */}
                                    <input type="text" class="form-control text-right" placeholder="No.Invoice" value={currency.format(this.totalsMDRTap())} readOnly />
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
