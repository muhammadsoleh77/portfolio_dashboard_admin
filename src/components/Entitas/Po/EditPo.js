import React, { Component } from 'react'
// import { Row, Card, CardBody, Form, Label, Input, Col, Button } from 'reactstrap'

import API_ENDPOINT from '../../../Endpoint'
// import axios from 'axios'

export default class EditPo extends Component {

    constructor(props) {
        super(props)

        this.fileInputLogo = React.createRef()
        this.fileInputLogoPrint = React.createRef()

        this.state = {
            fields: {},
            errors: {},
            dataChannelPo: [],
            nama: '',
            selected: false,
            akap: false,
            akdp: false,
            pariwisata: false,
            paket: false,
            dataPo: {
                akap: false
            },
            value: ''
        }
    }

    inputFileLogo = () => {
        if (this.fileInputLogo.current !== undefined && this.fileInputLogo.current.click !== undefined)
            this.fileInputLogo.current.click()
    }

    inputFileLogoPrint = () => {
        if (this.fileInputLogoPrint.current !== undefined && this.fileInputLogoPrint.current.click !== undefined)
            this.fileInputLogoPrint.current.click()
    }

    handleChangeAktif = (e) => {
        this.setState({
            [e.target.name]: !this.state.enabled
        })
    }

    handleChangePublish = (e) => {
        this.setState({
            [e.target.name]: !this.state.publish
        })
    }

    handleChangeSetorBiayaLain = (e) => {
        this.setState({
            [e.target.name]: !this.state.tampilSetoranBiayaLain
        })
    }

    onChangeLogo = (event) => {
        this.setState({
            imgLogo: event.target.files[0]
        })
    }

    onChangeLogoPrint = (event) => {
        this.setState({
            imgLogoPrint: event.target.files[0]
        })
    }

    componentDidMount() {
        const id = this.props.match.params.idPo

        API_ENDPOINT.get('/admin/po/' + id)
            .then(res => {
                this.setState({
                    dataPo: res.data,
                    nama: res.data.nama,
                    kodepo: res.data.kodepo,
                    namaperusahaan: res.data.namaperusahaan,
                    alamat: res.data.alamat,
                    bgColor: res.data.bgColor,
                    telpon: res.data.telpon,
                    fax: res.data.fax,
                    email: res.data.email,
                    namapimpinan: res.data.namapimpinan,
                    ponsel1: res.data.ponsel1,
                    ponsel2: res.data.ponsel2,
                    picnama: res.data.picnama,
                    picjabatan: res.data.picjabatan,
                    pictelpon: res.data.pictelpon,
                    picemail: res.data.picemail,
                    kodeBank: res.data.kodeBank,
                    cabangBank: res.data.cabangBank,
                    noRekening: res.data.noRekening,
                    namaRekening: res.data.namaRekening,
                    akap: res.data.akap,
                    akdp: res.data.akdp,
                    pariwisata: res.data.pariwisata,
                    paket: res.data.paket,
                    enabled: res.data.enabled,
                    publish: res.data.publish,
                    tampilSetoranBiayaLain: res.data.tampilSetoranBiayaLain,
                    logo: res.data.logo,
                    logoPrint: res.data.logoPrint,
                    startDate: res.data.startDate,
                    disclaimer: res.data.disclaimer,
                    mdrTagihan: res.data.mdrTagihan
                })
            })
    }

    handleChangeAkap = (e) => {
        this.setState({
            [e.target.name]: !this.state.akap
        })
    }

    handleChangeAkdp = (e) => {
        this.setState({
            [e.target.name]: !this.state.akdp
        })
    }

    handleChangePariwisata = (e) => {
        this.setState({
            [e.target.name]: !this.state.pariwisata
        })
    }

    handleChangePaket = (e) => {
        this.setState({
            [e.target.name]: !this.state.paket
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    tambahData(e) {
        e.preventDefault();

        let formData = new FormData();

        formData.append('idPo', this.props.match.params.idPo);
        formData.append('akap', this.state.akap);
        formData.append('akdp', this.state.akdp);
        formData.append('alamat', this.state.alamat);
        formData.append('bgColor', this.state.bgColor);
        formData.append('cabangBank', this.state.cabangBank);
        formData.append('disclaimer', this.state.disclaimer);
        formData.append('email', this.state.email);
        formData.append('enabled', this.state.enabled);
        formData.append('fax', this.state.fax);
        formData.append('kodeBank', this.state.kodeBank);
        formData.append('kodepo', this.state.kodepo);
        // if(!this.state.imgLogo || !this.state.imgLogoPrint) {
        //     // formData.append('logo', this.state.logo);
        //     // formData.append('logoPrint', this.state.logoPrint);
        // } 
        if (this.state.imgLogo) {
            formData.append('logo', this.state.imgLogo);
        }
        if (this.state.imgLogoPrint) {
            formData.append('logoPrint', this.state.imgLogoPrint);
        }
        formData.append('mdrTagihan', this.state.mdrTagihan);
        formData.append('nama', this.state.nama);
        formData.append('namaRekening', this.state.namaRekening);
        formData.append('namaperusahaan', this.state.namaperusahaan);
        formData.append('namapimpinan', this.state.namapimpinan);
        formData.append('noRekening', this.state.noRekening);
        formData.append('paket', this.state.paket);
        formData.append('pariwisata', this.state.pariwisata);
        formData.append('picemail', this.state.picemail);
        formData.append('picjabatan', this.state.picjabatan);
        formData.append('picnama', this.state.picnama);
        formData.append('pictelpon', this.state.pictelpon);
        formData.append('ponsel1', this.state.ponsel1);
        formData.append('ponsel2', this.state.ponsel2);
        formData.append('publish', this.state.publish);
        formData.append('tampilSetoranBiayaLain', this.state.tampilSetoranBiayaLain);
        formData.append('telpon', this.state.telpon);
        formData.append('startDate', this.state.startDate);

        API_ENDPOINT({
            method: 'put',
            url: '/admin/po/edit',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                alert('berhasil Edit')
                this.props.history.push('/entitas/po')
                console.log(res);
            })
            .catch(error => {
                alert('Error, harap input semua data')
                console.log(error);
            });

    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({
            fields
        });
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid header-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-left">
                                    <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                                    <li className="breadcrumb-item active"><b>Edit P.O</b></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">Edit P.O</h3>
                                    </div>
                                    <form onSubmit={this.tambahData.bind(this)}>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label>Nama P.O</label>
                                                <input className="form-control" type="text" name="nama" value={this.state.nama} onChange={this.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label>Kode P.O</label>
                                                <input className="form-control" type="text" name="kodepo" value={this.state.kodepo} onChange={this.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label>Nama Perusahaan</label>
                                                <input className="form-control" type="text" name="namaperusahaan" value={this.state.namaperusahaan} onChange={this.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label>Alamat</label>
                                                <input className="form-control" type="text" name="alamat" value={this.state.alamat} onChange={this.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label>Telepon</label>
                                                <input className="form-control" type="text" name="telpon" value={this.state.telpon} onChange={this.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label>Fax</label>
                                                <input className="form-control" type="number" name="fax" value={this.state.fax} onChange={this.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label>Nama Pimpinan</label>
                                                <input className="form-control" type="text" name="namapimpinan" value={this.state.namapimpinan} onChange={this.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label>Telepon</label>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <label>Ponsel 1</label>
                                                        <input className="form-control" type="number" name="ponsel1" value={this.state.ponsel1} onChange={this.handleChange} />
                                                    </div>
                                                    <div className="col-6">
                                                        <label>Ponsel 2</label>
                                                        <input className="form-control" type="number" name="ponsel2" value={this.state.ponsel2} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>PIC E-Ticketing</label>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <label>Nama</label>
                                                        <input className="form-control" type="text" name="picnama" value={this.state.picnama} onChange={this.handleChange} />
                                                    </div>
                                                    <div className="col-6">
                                                        <label>Jabatan</label>
                                                        <input className="form-control" type="text" name="picjabatan" value={this.state.picjabatan} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Kontak</label>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <label>Telepon</label>
                                                        <input className="form-control" type="number" name="pictelpon" value={this.state.pictelpon} onChange={this.handleChange} />
                                                    </div>
                                                    <div className="col-6">
                                                        <label>Email</label>
                                                        <input className="form-control" type="email" name="picemail" value={this.state.picemail} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Data Rekening</label>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <label>Kode Bank</label>
                                                        <input className="form-control" type="text" name="kodeBank" value={this.state.kodeBank} onChange={this.handleChange} />
                                                    </div>
                                                    <div className="col-6">
                                                        <label>Cabang Bank</label>
                                                        <input className="form-control" type="text" name="cabangBank" value={this.state.cabangBank} onChange={this.handleChange} />
                                                    </div>
                                                    <div className="col-6">
                                                        <label>Nomor Rekening</label>
                                                        <input className="form-control" type="number" name="noRekening" value={this.state.noRekening} onChange={this.handleChange} />
                                                    </div>
                                                    <div className="col-6">
                                                        <label>Nama Pemilik Rekening</label>
                                                        <input className="form-control" type="text" name="namaRekening" value={this.state.namaRekening} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Jenis Pelayanan</label>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <label>AKAP</label>&nbsp;&nbsp;
                                                        <input
                                                            type="checkbox"
                                                            name="akap"
                                                            // value="true"
                                                            checked={this.state.akap}
                                                            onChange={this.handleChangeAkap} />
                                                    </div>
                                                    <div className="col-3">
                                                        <label>AKDP</label>&nbsp;&nbsp;
                                                        <input
                                                            type="checkbox"
                                                            name="akdp"
                                                            // value="true"
                                                            checked={this.state.akdp}
                                                            onChange={this.handleChangeAkdp} />
                                                    </div>
                                                    <div className="col-3">
                                                        <label>Pariwisata</label>&nbsp;&nbsp;
                                                        <input
                                                            type="checkbox"
                                                            name="pariwisata"
                                                            // value="true"
                                                            checked={this.state.pariwisata}
                                                            onChange={this.handleChangePariwisata} />
                                                    </div>
                                                    <div className="col-3">
                                                        <label>Paket</label>&nbsp;&nbsp;
                                                        <input
                                                            type="checkbox"
                                                            name="paket"
                                                            // value="true"
                                                            checked={this.state.paket}
                                                            onChange={this.handleChangePaket} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <label>Background Color</label>
                                                <input className="form-control" type="text" name="bgColor" value={this.state.bgColor} onChange={this.handleChange} /><br />
                                                {/* <span style={{ color: 'red' }}> {this.state.errors["bgColor"]} </span><br/> */}
                                            </div>
                                            <div class="form-group">
                                                <label>Status Aktif</label>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <input
                                                            type="radio"
                                                            name="enabled"
                                                            value="true"
                                                            checked={this.state.enabled}
                                                            onChange={this.handleChangeAktif} /> <b>Ya</b>&nbsp;
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                            type="radio"
                                                            name="enabled"
                                                            value="false"
                                                            checked={!this.state.enabled}
                                                            onChange={this.handleChangeAktif} /> <b>Tidak</b>&nbsp;
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Tanggal Live</label>
                                                <input className="form-control" type="date" name="startDate" value={this.state.startDate} onChange={this.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label>Status Publikasi</label>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <input
                                                            type="radio"
                                                            name="publish"
                                                            value="true"
                                                            checked={this.state.publish}
                                                            onChange={this.handleChangePublish} /> <b>Ya</b>&nbsp;
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                            type="radio"
                                                            name="publish"
                                                            value="false"
                                                            checked={!this.state.publish}
                                                            onChange={this.handleChangePublish} /> <b>Tidak</b>&nbsp;
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Peraturan / Disclaimer PO</label>
                                                <textarea className="form-control" rows={5} cols={5} name="disclaimer" value={this.state.disclaimer} onChange={this.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label>Tampilkan Setoran Biaya Lain</label>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <input
                                                            type="radio"
                                                            name="tampilSetoranBiayaLain"
                                                            value="true"
                                                            checked={this.state.tampilSetoranBiayaLain}
                                                            onChange={this.handleChangeSetorBiayaLain} /> <b>Ya</b>&nbsp;
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                            type="radio"
                                                            name="tampilSetoranBiayaLain"
                                                            value="false"
                                                            checked={!this.state.tampilSetoranBiayaLain}
                                                            onChange={this.handleChangeSetorBiayaLain} /> <b>Tidak</b>&nbsp;
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Tagihan MDR</label>
                                                <input className="form-control" type="number" name="mdrTagihan" value={this.state.mdrTagihan} onChange={this.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label>Pilih Logo</label>
                                                <div className="row">
                                                    <div className="col-4"></div>
                                                    <div className="col-4 text-center">
                                                        {this.state.imgLogo ? [this.state.imgLogo].map((file) => (
                                                            <img src={URL.createObjectURL(file)} alt="" width="150" height="50" />
                                                        )) : <img src={this.state.logo} alt="" width="150" height="50" />}<br /><br />
                                                        <span className="btn btn-dark" onClick={() => this.inputFileLogo()}>Upload Logo</span>
                                                        <input ref={this.fileInputLogo} type="file" onChange={this.onChangeLogo} hidden /><br /><br />
                                                    </div>
                                                    <div className="col-4"></div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Pilih Logo Tiket</label>
                                                <div className="row">
                                                    <div className="col-4"></div>
                                                    <div className="col-4 text-center">
                                                        {this.state.imgLogoPrint ? [this.state.imgLogoPrint].map((file) => (
                                                            <img src={URL.createObjectURL(file)} alt="" width="150" height="50" />
                                                        )) : <img src={this.state.logoPrint} alt="" width="150" height="50" />}<br /><br />
                                                        <span className="btn btn-dark" onClick={() => this.inputFileLogoPrint()}>Upload Logo Tiket</span>
                                                        <input ref={this.fileInputLogoPrint} type="file" onChange={this.onChangeLogoPrint} hidden />
                                                    </div>
                                                    <div className="col-4"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card-footer">
                                            <button type="submit" class="btn btn-primary">Edit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
