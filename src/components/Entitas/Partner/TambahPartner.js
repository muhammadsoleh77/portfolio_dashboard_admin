import React, { Component } from 'react'
// import { Row, Card, CardBody, Form, Label, Input, Col, Button } from 'reactstrap'

import API_ENDPOINT from '../../../Endpoint'
// import axios from 'axios'

export default class TambahPartner extends Component {

    constructor(props){
        super(props)

        this.fileInputLogo = React.createRef()
        this.fileInputLogoPrint = React.createRef()

        this.state = {
            fields: {},
            // fieldLogo: [],
            // fieldLogoPrint: [],
            errors: {},
            dataChannelPo: [],
            // logo: '',
            // logoPrint: ''
            akap: false,
            akdp: false,
            pariwisata: false,
            paket: false
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

    getInitialState = function() {
        return{file: []}
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

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        // Validasi namaPo
        if(!fields["nama"]){
            formIsValid = false;
            errors["nama"] = "Tidak boleh kosong";
        }

        // Validasi kodePo
        if(!fields["kodePartner"]){
            formIsValid = false;
            errors["kodePartner"] = "Tidak boleh kosong";
        }

        // Validasi namaPerusahaan
        if(!fields["namaperusahaan"]){
            formIsValid = false;
            errors["namaperusahaan"] = "Tidak boleh kosong";
        }

        // Validasi alamat
        if(!fields["alamat"]){
            formIsValid = false;
            errors["alamat"] = "Tidak boleh kosong";
        }

        // Validasi telepon
        if(!fields["telpon"]){
            formIsValid = false;
            errors["telpon"] = "Tidak boleh kosong";
        }

        // Validasi fax
        if(!fields["fax"]){
            formIsValid = false;
            errors["fax"] = "Tidak boleh kosong";
        }

        // Validasi email
        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Tidak boleh kosong";
        }

        // Validasi namaPimpinan
        if(!fields["namapimpinan"]){
            formIsValid = false;
            errors["namapimpinan"] = "Tidak boleh kosong";
        }

        // Validasi ponsel1
        if(!fields["ponsel1"]){
            formIsValid = false;
            errors["ponsel1"] = "Tidak boleh kosong";
        }

        // Validasi ponsel2
        if(!fields["ponsel2"]){
            formIsValid = false;
            errors["ponsel2"] = "Tidak boleh kosong";
        }

        // Validasi picNama
        if(!fields["picnama"]){
            formIsValid = false;
            errors["picnama"] = "Tidak boleh kosong";
        }

        // Validasi picJabatan
        if(!fields["picjabatan"]){
            formIsValid = false;
            errors["picjabatan"] = "Tidak boleh kosong";
        }

        // Validasi picTelpon
        if(!fields["pictelpon"]){
            formIsValid = false;
            errors["pictelpon"] = "Tidak boleh kosong";
        }

        // Validasi picEmail
        if(!fields["picemail"]){
            formIsValid = false;
            errors["picemail"] = "Tidak boleh kosong";
        }

        // Validasi kodeBank
        if(!fields["kodeBank"]){
            formIsValid = false;
            errors["kodeBank"] = "Tidak boleh kosong";
        }

        // Validasi cabangBank
        if(!fields["cabangBank"]){
            formIsValid = false;
            errors["cabangBank"] = "Tidak boleh kosong";
        }

        // Validasi noRekening
        if(!fields["noRekening"]){
            formIsValid = false;
            errors["noRekening"] = "Tidak boleh kosong";
        }

        // Validasi namaRekening
        if(!fields["namaRekening"]){
            formIsValid = false;
            errors["namaRekening"] = "Tidak boleh kosong";
        }

        // // Validasi akap
        // if(!fields["akap"]){
        //     formIsValid = false;
        //     errors["akap"] = "Tidak boleh kosong";
        // }

        // // Validasi akdp
        // if(!fields["akdp"]){
        //     formIsValid = false;
        //     errors["akdp"] = "Tidak boleh kosong";
        // }
        // // Validasi pariwisata
        // if(!fields["pariwisata"]){
        //     formIsValid = false;
        //     errors["pariwisata"] = "Tidak boleh kosong";
        // }
        // // Validasi paket
        // if(!fields["paket"]){
        //     formIsValid = false;
        //     errors["paket"] = "Tidak boleh kosong";
        // }

        // Validasi disclaimer
        if(!fields["disclaimer"]){
            formIsValid = false;
            errors["disclaimer"] = "Tidak boleh kosong";
        }

        // Validasi tagiihan MDR
        if(!fields["mdrTagihan"]){
            formIsValid = false;
            errors["mdrTagihan"] = "Tidak boleh kosong";
        }

        // // Validasi logo
        // if(!fieldLogo["logo"]){
        //     formIsValid = false;
        //     errors["logo"] = "Tidak boleh kosong";
        // }

        // // Validasi logoPrint
        // if(!fieldLogoPrint["logoPrint"]){
        //     formIsValid = false;
        //     errors["logoPrint"] = "Tidak boleh kosong";
        // }

        this.setState({errors: errors});
        return formIsValid;
        
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

    tambahData(e){
        e.preventDefault();

        let formData = new FormData();

        formData.append('alamat', this.state.fields['alamat']);
        formData.append('cabangBank', this.state.fields['cabangBank']);
        formData.append('disclaimer', this.state.fields['disclaimer']);
        formData.append('email', this.state.fields['email']);
        formData.append('fax', this.state.fields['fax']);
        formData.append('kodeBank', this.state.fields['kodeBank']);
        formData.append('kodePartner', this.state.fields['kodePartner']);
        if(!this.state.imgLogo && !this.state.imgLogoPrint){
            // formData.append('logo', '');
            // formData.append('logoPrint', '');
        } else {
            formData.append('logo', this.state.imgLogo);
            formData.append('logoPrint', this.state.imgLogoPrint);
        }
        formData.append('mdrTagihan', this.state.fields['mdrTagihan']);
        formData.append('nama', this.state.fields['nama']);
        formData.append('namaRekening', this.state.fields['namaRekening']);
        formData.append('namaperusahaan', this.state.fields['namaperusahaan']);
        formData.append('namapimpinan', this.state.fields['namapimpinan']);
        formData.append('noRekening', this.state.fields['noRekening']);
        formData.append('picemail', this.state.fields['picemail']);
        formData.append('picjabatan', this.state.fields['picjabatan']);
        formData.append('picnama', this.state.fields['picnama']);
        formData.append('pictelpon', this.state.fields['pictelpon']);
        formData.append('ponsel1', this.state.fields['ponsel1']);
        formData.append('ponsel2', this.state.fields['ponsel2']);
        formData.append('telpon', this.state.fields['telpon']);

        if(this.handleValidation()){
            API_ENDPOINT({
                method: 'post',
                url: '/admin/partner/add',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                console.log(res);
                alert("Berhasil tambah data");
                this.props.history.push('/entitas/partner')
            }).catch(error => {
                console.log(error);
                alert('Error, Harap input semua data');
            })
        }

    }

    handleChange(field, e){
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
                                    <li className="breadcrumb-item active"><b>Tambah Partner</b></li>
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
                                        <h3 class="card-title">Tambah Partner</h3>
                                    </div>
                                    <form onSubmit={this.tambahData.bind(this)}>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label>Nama Partner</label>
                                                <input className="form-control" type="text" onChange={this.handleChange.bind(this, "nama")} />
                                                <span style={{ color: 'red' }}> {this.state.errors["nama"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Kode Partner</label>
                                                <input className="form-control" type="text" onChange={this.handleChange.bind(this, "kodePartner")} />
                                                <span style={{ color: 'red' }}> {this.state.errors["kodePartner"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Nama Perusahaan</label>
                                                <input className="form-control" type="text" onChange={this.handleChange.bind(this, "namaperusahaan")} />
                                                <span style={{ color: 'red' }}> {this.state.errors["namaperusahaan"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Alamat</label>
                                                <input className="form-control" type="text" onChange={this.handleChange.bind(this, "alamat")} />
                                                <span style={{ color: 'red' }}> {this.state.errors["alamat"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Telepon</label>
                                                <input className="form-control" type="number" onChange={this.handleChange.bind(this, "telpon")} />
                                                <span style={{ color: 'red' }}> {this.state.errors["telpon"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Fax</label>
                                                <input className="form-control" type="number" onChange={this.handleChange.bind(this, "fax")} />
                                                <span style={{ color: 'red' }}> {this.state.errors["fax"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input className="form-control" type="email" onChange={this.handleChange.bind(this, "email")} />
                                                <span style={{ color: 'red' }}> {this.state.errors["email"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Nama Pimpinan</label>
                                                <input className="form-control" type="text" onChange={this.handleChange.bind(this, "namapimpinan")} />
                                                <span style={{ color: 'red' }}> {this.state.errors["namapimpinan"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Telepon</label>
                                                <div className="row">
                                                <div className="col-6">
                                                    <label>Ponsel 1</label>
                                                    <input className="form-control" type="number" onChange={this.handleChange.bind(this, "ponsel1")} />
                                                    <span style={{ color: 'red' }}> {this.state.errors["ponsel1"]} </span>
                                                </div>
                                                <div className="col-6">
                                                    <label>Ponsel 2</label>
                                                    <input className="form-control" type="number" onChange={this.handleChange.bind(this, "ponsel2")} />
                                                    <span style={{ color: 'red' }}> {this.state.errors["ponsel2"]} </span>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>PIC E-Ticketing</label>
                                                <div className="row">
                                                <div className="col-6">
                                                    <label>Nama</label>
                                                    <input className="form-control" type="text" onChange={this.handleChange.bind(this, "picnama")} />
                                                    <span style={{ color: 'red' }}> {this.state.errors["picnama"]} </span>
                                                </div>
                                                <div className="col-6">
                                                    <label>Jabatan</label>
                                                    <input className="form-control" type="text" onChange={this.handleChange.bind(this, "picjabatan")} />
                                                    <span style={{ color: 'red' }}> {this.state.errors["picjabatan"]} </span>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Kontak</label>
                                                <div className="row">
                                                <div className="col-6">
                                                    <label>Telepon</label>
                                                    <input className="form-control" type="number" onChange={this.handleChange.bind(this, "pictelpon")} />
                                                    <span style={{ color: 'red' }}> {this.state.errors["pictelpon"]} </span>
                                                </div>
                                                <div className="col-6">
                                                    <label>Email</label>
                                                    <input className="form-control" type="email" onChange={this.handleChange.bind(this, "picemail")} />
                                                    <span style={{ color: 'red' }}> {this.state.errors["picemail"]} </span>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Data Rekening</label>
                                                <div className="row">
                                                <div className="col-6">
                                                    <label>Kode Bank</label>
                                                    <input className="form-control" type="text" onChange={this.handleChange.bind(this, "kodeBank")} />
                                                    <span style={{ color: 'red' }}> {this.state.errors["kodeBank"]} </span>
                                                </div>
                                                <div className="col-6">
                                                    <label>Cabang Bank</label>
                                                    <input className="form-control" type="text" onChange={this.handleChange.bind(this, "cabangBank")} />
                                                    <span style={{ color: 'red' }}> {this.state.errors["cabangBank"]} </span>
                                                </div>
                                                <div className="col-6">
                                                    <label>Nomor Rekening</label>
                                                    <input className="form-control" type="number" onChange={this.handleChange.bind(this, "noRekening")} />
                                                    <span style={{ color: 'red' }}> {this.state.errors["noRekening"]} </span>
                                                </div>
                                                <div className="col-6">
                                                    <label>Nama Pemilik Rekening</label>
                                                    <input className="form-control" type="text" onChange={this.handleChange.bind(this, "namaRekening")} />
                                                    <span style={{ color: 'red' }}> {this.state.errors["namaRekening"]} </span>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Peraturan / Disclaimer PO</label>
                                                <textarea className="form-control" rows={5} cols={5} onChange={this.handleChange.bind(this, "disclaimer")} />
                                                <span style={{ color: 'red' }}> {this.state.errors["disclaimer"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Tagihan MDR</label>
                                                <input className="form-control" type="number" onChange={this.handleChange.bind(this, "mdrTagihan")} />
                                                <span style={{ color: 'red' }}> {this.state.errors["mdrTagihan"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Pilih Logo</label><br/>
                                                <div className="row">
                                                    <div className="col-4"></div>
                                                    <div className="col-4 text-center">
                                                        {this.state.imgLogo && [this.state.imgLogo].map((file)=>(
                                                            <img src={URL.createObjectURL(file)} alt="" width="150" height="50" />
                                                        ))}<br/><br/>
                                                        <span className="btn btn-dark" onClick={() => this.inputFileLogo()}>Upload Logo</span>
                                                        <input ref={this.fileInputLogo} type="file" onChange={this.onChangeLogo} hidden />
                                                        {/* <input type="file" ref="image" onChange={this.handleChange.bind(this, "logo")} /> */}
                                                    </div>
                                                    <div className="col-4"></div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Pilih Logo Tiket</label>
                                                <div className="row">
                                                    <div className="col-4"></div>
                                                    <div className="col-4 text-center">
                                                        {this.state.imgLogoPrint && [this.state.imgLogoPrint].map((file)=>(
                                                            <img src={URL.createObjectURL(file)} alt="" width="150" height="50" />
                                                        ))}<br/><br/>
                                                        <span className="btn btn-dark" onClick={() => this.inputFileLogoPrint()}>Upload Logo Tiket</span>
                                                        <input ref={this.fileInputLogoPrint} type="file" onChange={this.onChangeLogoPrint} hidden />
                                                        {/* <input type="file" ref="image" onChange={this.handleChange.bind(this, "logoPrint")} /> */}
                                                    </div>
                                                    <div className="col-4"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card-footer">
                                            <button type="submit" class="btn btn-primary">Tambah</button>
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
