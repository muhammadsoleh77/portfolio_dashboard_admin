import React, { Component } from 'react'
// import { Row, Card, CardBody, Form, Label, Input, Col, Button } from 'reactstrap'

import API_ENDPOINT from '../../../Endpoint'
// import axios from 'axios'

export default class EditPartner extends Component {

    constructor(props) {
        super(props)

        this.fileInputLogo = React.createRef()
        this.fileInputLogoPrint = React.createRef()

        this.state = {
            fields: {},
            errors: {},
            nama: '',
            selected: false,
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

    onChangeLogo = (event)=>{
        this.setState({
            imgLogo: event.target.files[0]
        })
    }

    onChangeLogoPrint = (event)=>{
        this.setState({
            imgLogoPrint: event.target.files[0]
        })
    }

    componentDidMount() {
        const id = this.props.match.params.idPartner

        API_ENDPOINT.get('/admin/partner/' + id)
            .then(res => {
                this.setState({
                    // dataPartner: res.data,
                    nama: res.data.nama,
                    kodePartner: res.data.kodePartner,
                    namaperusahaan: res.data.namaperusahaan,
                    alamat: res.data.alamat,
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
                    logo: res.data.logo,
                    logoPrint: res.data.logoPrint,
                    disclaimer: res.data.disclaimer,
                    mdrTagihan: res.data.mdrTagihan
                })
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    tambahData(e) {
        e.preventDefault();

        let formData = new FormData();

        formData.append('idPartner', this.props.match.params.idPartner);
        formData.append('alamat', this.state.alamat);
        formData.append('cabangBank', this.state.cabangBank);
        formData.append('disclaimer', this.state.disclaimer);
        formData.append('email', this.state.email);
        formData.append('fax', this.state.fax);
        formData.append('kodeBank', this.state.kodeBank);
        formData.append('kodePartner', this.state.kodePartner);
        if(!this.state.imgLogoPrint && !this.state.imgLogoPrint) {
            // formData.append('logo', this.state.logo);
            // formData.append('logoPrint', this.state.logoPrint);
        } else {
            formData.append('logo', this.state.imgLogo);
            formData.append('logoPrint', this.state.imgLogoPrint);
        }
        formData.append('mdrTagihan', this.state.mdrTagihan);
        formData.append('nama', this.state.nama);
        formData.append('namaRekening', this.state.namaRekening);
        formData.append('namaperusahaan', this.state.namaperusahaan);
        formData.append('namapimpinan', this.state.namapimpinan);
        formData.append('noRekening', this.state.noRekening);
        formData.append('picemail', this.state.picemail);
        formData.append('picjabatan', this.state.picjabatan);
        formData.append('picnama', this.state.picnama);
        formData.append('pictelpon', this.state.pictelpon);
        formData.append('ponsel1', this.state.ponsel1);
        formData.append('ponsel2', this.state.ponsel2);
        formData.append('telpon', this.state.telpon);

        API_ENDPOINT({
            method: 'put',
            url: '/admin/partner/edit',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            alert('berhasil Edit')
            this.props.history.push('/entitas/partner')
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
                                    <li className="breadcrumb-item active"><b>Edit Partner</b></li>
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
                                        <h3 class="card-title">Edit Partner</h3>
                                    </div>
                                    <form onSubmit={this.tambahData.bind(this)}>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label>Nama Partner</label>
                                                <input className="form-control" type="text" name="nama" value={this.state.nama} onChange={this.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label>Kode Partner</label>
                                                <input className="form-control" type="text" name="kodePartner" value={this.state.kodePartner} onChange={this.handleChange} />
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
                                                <input className="form-control" type="number" name="telpon" value={this.state.telpon} onChange={this.handleChange} />
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
                                                <label>Peraturan / Disclaimer PO</label>
                                                <textarea className="form-control" rows={5} cols={5} name="disclaimer" value={this.state.disclaimer} onChange={this.handleChange} />
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
                                                        {this.state.imgLogo ? [this.state.imgLogo].map((file)=>(
                                                            <img src={URL.createObjectURL(file)} alt="" width="150" height="50" />
                                                        )) : <img src={this.state.logo} alt="" width="150" height="50" /> }<br/><br/>
                                                        <span className="btn btn-dark" onClick={() => this.inputFileLogo()}>Upload Logo</span>
                                                        <input ref={this.fileInputLogo} type="file" onChange={this.onChangeLogo} hidden /><br/><br/>
                                                    </div>
                                                    <div className="col-4"></div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Pilih Logo Tiket</label>
                                                <div className="row">
                                                    <div className="col-4"></div>
                                                    <div className="col-4 text-center">
                                                        {this.state.imgLogoPrint ? [this.state.imgLogoPrint].map((file)=>(
                                                            <img src={URL.createObjectURL(file)} alt="" width="150" height="50" />
                                                        )) : <img src={this.state.logoPrint} alt="" width="150" height="50" /> }<br/><br/>
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
