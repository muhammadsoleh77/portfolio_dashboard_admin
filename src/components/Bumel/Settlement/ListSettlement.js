import React, { Component } from 'react'
import Moment from 'moment'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import API_ENDPOINT from '../../../Endpoint'

import SettlementKosong from './SettlementKosong'

export default class ListSettlement extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // dataSap: this.props.dataSap,
            dataKosong: false,
            dataIsi: false,
            currentPage: 1,
            perPage: 10,

            dataPo: [],

            modal: false,
            dataDetail: {},
            dataDetail2: []
        }

        this.handleClick = this.handleClick.bind(this)
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

    toggle = (el, index) => {
        this.setState({
            modal: true,
            dataDetail: el,
            dataDetail2: el.detail
        })
    }

    closeModal = () => {
        this.setState({
            modal: false
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

    handleClick = (e) => {
        this.setState({
            currentPage: Number(e.target.id)
        })
    }

    getParsedDate(strDate) {
        var strSplitDate = String(strDate).split(' ');
        var date = new Date(strSplitDate[0]);
        // alert(date);
        var dd = date.getDate();
        var mm = date.getMonth() + 1; //January is 0!

        var yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        date = dd + "-" + mm + "-" + yyyy;
        return date.toString();
    }

    render() {

        // if (this.state.dataKosong) {
        //     return (
        //         <SettlementKosong id={this.state.idProvinsi} />
        //     )
        // }

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

        var currency = new Intl.NumberFormat();

        const listSap = this.props.dataSettlement

        const { currentPage, perPage } = this.state;

        // Display listSap
        const indexOfLastData = currentPage * perPage
        const indexOfFirstData = indexOfLastData - perPage
        const currentListSap = listSap.slice(indexOfFirstData, indexOfLastData)


        const renderSap = currentListSap.map((el, index) => {
            return (
                <tr key={index}>
                    <td style={{ textAlign: 'center' }}>{index+1}</td>
                    <td style={{ textAlign: 'center' }}>{el.kodeBus ? el.kodeBus : '--'}</td>
                    <td style={{ textAlign: 'right' }}>{currency.format(el.nominalQRIS)}</td>
                    <td style={{ textAlign:'right' }}>{currency.format(el.nominalMDRQRIS)}</td>
                    <td style={{ textAlign: 'right' }}>{currency.format(el.nominalTap)}</td>
                    <td style={{ textAlign: 'right' }}>{currency.format(el.nominalMDRTap)}</td>
                    {/* <td style={{ textAlign: 'center' }}>{this.getParsedDate(el.tanggalProses)}</td> */}
                    <td style={{ textAlign: 'center' }}>{Moment(el.tanggalProses).format('DD-MM-YYYY HH:mm:ss')}</td>
                    <td style={{ textAlign: 'center' }}><Button color="success" onClick={(e) => this.toggle(el, index)}>Detail</Button></td>
                </tr>
            )
        })

        // Display Page Number
        const pageNumber = []
        for (var i = 1; i <= Math.ceil(listSap.length / perPage); i++) {
            pageNumber.push(
                i
            )
        }

        const renderPageNumber = pageNumber.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                    style={{
                        display: 'inline-block',
                        padding: '5px 9px',
                        marginRight: '4px',
                        border: '1px solid #c0c0c0',
                        borderRadius: '3px',
                        background: '#e9e9e9',
                        fontSize: '12px',
                        fontWeight: 'bold',

                        // margin:'0 2px 0 2px',
                        width: '30px',
                        height: '30px',
                        // textAlign:'center',
                        // verticalAlign:'middle',
                        cursor: 'pointer'
                    }}
                >
                    {number}
                </li>
            )
        })

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
                                        <br /><p><strong>DATA SETTLEMENT NON TUNAI</strong></p>
                                        <div className="table-responsive">
                                            <table className="table table-bordered table-striped text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th rowspan="2" className="text-center" style={{verticalAlign:'middle'}}>No</th>
                                                        <th rowspan="2" className="text-center" style={{verticalAlign:'middle'}}>Produk(Bus)</th>
                                                        <th colspan="2" className="text-center">QRIS</th>
                                                        <th colspan="2" className="text-center" style={{verticalAlign:'middle'}}>E-Money</th>
                                                        <th rowspan="2" className="text-center" style={{verticalAlign:'middle'}}>Waktu Proses</th>
                                                        <th rowspan="2" className="text-center" style={{verticalAlign:'middle'}}>Aksi</th>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-center">ODT</th>
                                                        <th className="text-center">MDR</th>
                                                        <th className="text-center">ODT</th>
                                                        <th className="text-center">MDR</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        renderSap
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <ul className="text-center">{renderPageNumber}</ul>
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
                                                <td className="text-center">{el.trayek}</td>
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

            </div>
        )
    }
}
