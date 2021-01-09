import React, { Component } from 'react'
import Select from 'react-select'
import API_ENDPOINT from '../../../Endpoint'

export default class TambahLoket extends Component {

    constructor(props){
        super(props)

        this.state = {
            fields: {},
            errors: {},
            dataPo: [],
            dataWilayah: [],
            dataLokasi: [],

            dataShelter: [
                {id: 1, namaShelter: 'Terminal 1'},
                {id: 2, namaShelter: 'Terminal 2'},
                {id: 3, namaShelter: 'Terminal 3'}
            ],

            dataJenis: [
                {id:'Loket', namaJenis:'Loket'}
            ],

            dataTypeBus: [
                {id:1, namaType:'JAC'},
                {id:2, namaType:'JRC'},
                {id:3, namaType:'TJR'}
            ]
        }
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        // // Validasi po
        // if(!fields["idPo"]){
        //     formIsValid = false;
        //     errors["idPo"] = "Tidak boleh kosong";
        // }

        // // Validasi shelter
        // if(!fields["idShelter"]){
        //     formIsValid = false;
        //     errors["idShelter"] = "Tidak boleh kosong";
        // }

        // // Validasi lokasi
        // if(!fields["idLokasi"]){
        //     formIsValid = false;
        //     errors["idLokasi"] = "Tidak boleh kosong";
        // }

        // Validasi alamat
        if(!fields["alamat"]){
            formIsValid = false;
            errors["alamat"] = "Tidak boleh kosong";
        }

        // // Validasi jenis
        // if(!fields["jenis"]){
        //     formIsValid = false;
        //     errors["jenis"] = "Tidak boleh kosong";
        // }

        // Validasi kontak person
        if(!fields["kontakPerson"]){
            formIsValid = false;
            errors["kontakPerson"] = "Tidak boleh kosong";
        }

        // Validasi nama Loket
        if(!fields["nama"]){
            formIsValid = false;
            errors["nama"] = "Tidak boleh kosong";
        }

        // Validasi no. telepon
        if(!fields["nomorTelepon"]){
            formIsValid = false;
            errors["nomorTelepon"] = "Tidak boleh kosong";
        }

        // Validasi tempat Berangkat
        if(!fields["tempatBerangkat"]){
            formIsValid = false;
            errors["tempatBerangkat"] = "Tidak boleh kosong";
        }

        // // Validasi typeBus
        // if(!fields["typeBus"]){
        //     formIsValid = false;
        //     errors["typeBus"] = "Tidak boleh kosong";
        // }

        // Validasi Bandara
        if(!fields["isBandara"]){
            formIsValid = false;
            errors["isBandara"] = "Tidak boleh kosong";
        }

        // Validasi Keberangkatan
        if(!fields["tempatBerangkat"]){
            formIsValid = false;
            errors["tempatBerangkat"] = "Tidak boleh kosong";
        }

        this.setState({errors: errors});
        return formIsValid;
        
    }

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    // START OPTION P.O
    OptionPo = (x) => {
        return {value: x.idPo, label: x.nama}
    }

    handleChangePo = (e) => {
        this.setState({selectedIdPo: e.value})
    }
    // END P.O

    // START OPTION WILAYAH
    OptionWilayah = (x) => {
        return {value: x.id, label: x.namaWilayah}
    }

    handleChangeWilayah = (e) => {

        this.setState({selectedIdWilayah: e.value})

        API_ENDPOINT.get('/admin/lokasi/list/wilayah/' + e.value)
        .then(res => {
            this.setState({
                idWilayah: e.value,
                dataLokasi: res.data
            })
        })
    }
    // END WILAYAH

    // START OPTION LOKASI
    OptionLokasi = (x) => {
        return {value: x.id, label: x.namaLokasi}
    }

    handleChangeLokasi = (e) => {
        this.setState({selectedIdLokasi: e.value})
    }
    // END LOKASI

    // START OPTION SHELTER
    OptionShelter = (x) => {
        return {value: x.id, label: x.namaShelter}
    }

    handleChangeShelter = (e) => {
        this.setState({selectedIdShelter: e.value})
    }
    // END SHELTER

    // START OPTION JENIS
    OptionJenis = (x) => {
        return {value: x.id, label: x.namaJenis}
    }

    handleChangeJenis = (e) => {
        this.setState({selectedIdJenis: e.value})
    }
    // END JENIS

    // START OPTION TYPEBUS
    OptionTypeBus = (x) => {
        return {value: x.id, label: x.namaType}
    }

    handleChangeTypebus = (e) => {
        this.setState({selectedIdTypeBus: e.value})
    }
    // END TYPEBUS


    endpointPo() {
        API_ENDPOINT.get('/admin/po/getAll')
        .then(res => {
            this.setState({
                dataPo: res.data
            })
        })
    }

    endpointWilayah() {
        API_ENDPOINT.get('/admin/wilayah/list')
        .then(res=> {
            this.setState({
                dataWilayah: res.data
            })
        })
    }

    componentDidMount(){
        this.endpointPo();
        this.endpointWilayah();
    }

    dropdownChanged = (e) => {
        const idWil = e.target.value;
        API_ENDPOINT.get('/admin/lokasi/list/wilayah/' + idWil)
        .then(res => {
            this.setState({
                dataLokasi: res.data
            })
        })
    }

    tambahData(e) {
        e.preventDefault();

        const tambahDataLoket = {
            alamat: this.state.fields['alamat'],
            idLokasi: this.state.selectedIdLokasi,
            idPo: this.state.selectedIdPo,
            idShelter: this.state.selectedIdShelter,
            idWilayah: this.state.selectedIdWilayah,
            isBandara: this.state.fields['isBandara'],
            jenis: this.state.selectedIdJenis,
            kontakPerson: this.state.fields['kontakPerson'],
            nama: this.state.fields['nama'],
            nomorTelepon: this.state.fields['nomorTelepon'],
            tempatBerangkat: this.state.fields['tempatBerangkat'],
            typeBus: this.state.selectedIdTypeBus
        }

        if(this.handleValidation()){
            API_ENDPOINT.post('/admin/loket/add', tambahDataLoket)
            .then(res => {
                alert('Berhasil Tambah data Loket')
                this.props.history.push('/entitas/loket')
            })
            .catch(error => {
                alert('Error')
            })
        }

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
                            <li className="breadcrumb-item active"><b>Tambah Loket</b></li>
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
                                        <h3 class="card-title">Tambah Loket</h3>
                                    </div>
                                    <form onSubmit={this.tambahData.bind(this)}>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label>Pilih P.O</label>
                                                <Select
                                                    name="po"
                                                    placeholder="Pilih P.O"
                                                    onChange={this.handleChangePo}
                                                    options={this.state.dataPo.map(x => this.OptionPo(x))}
                                                />
                                                {/* <select class="form-control" style={{ width: '100%' }} onChange={this.handleChange.bind(this, "idPo")}>
                                                    <option disabled selected>Pilih P.O</option>
                                                    {
                                                        this.state.dataPo.map((el) => {
                                                            return (
                                                                <option key={el.idPo} value={el.idPo}>{el.nama}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                                <span style={{color:'red'}}> {this.state.errors["idPo"]} </span><br/> */}
                                            </div>
                                            <div class="form-group">
                                                <label>Pilih Wilayah</label>
                                                <Select
                                                    name="wilayah"
                                                    placeholder="Pilih Wilayah"
                                                    onChange={this.handleChangeWilayah}
                                                    options={this.state.dataWilayah.map(x => this.OptionWilayah(x))}
                                                />
                                                {/* <select class="form-control" value={this.state.selectedId} onChange={this.dropdownChanged} style={{ width: '100%' }}>
                                                    <option disabled selected>Pilih Wilayah</option>
                                                    {
                                                        this.state.dataWilayah.map((el) => {
                                                            return (
                                                                <option key={el.id} value={el.id}>{el.namaWilayah}</option>
                                                            )
                                                        })
                                                    }
                                                </select> */}
                                            </div>
                                            <div class="form-group">
                                                <label>Pilih Lokasi</label>
                                                <Select
                                                    name="lokasi"
                                                    placeholder="Pilih Lokasi"
                                                    // value={this.state.dataLokasi.map(x => this.OptionLokasi(x)).filter(option => option.value === this.state.idLokasi)}
                                                    onChange={this.handleChangeLokasi}
                                                    options={this.state.dataLokasi.map(x => this.OptionLokasi(x))}
                                                />
                                                {/* <select class="form-control" onChange={this.handleChange.bind(this, "idLokasi")} style={{ width: '100%' }}>
                                                    <option disabled selected>Pilih Lokasi</option>
                                                    {
                                                        this.state.dataLokasi.map((el) => {
                                                            return (
                                                                <option key={el.id} value={el.id}>{el.namaLokasi}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                                <span style={{color:'red'}}> {this.state.errors["idLokasi"]} </span><br/> */}
                                            </div>
                                            <div class="form-group">
                                                <label>Pilih Shelter</label>
                                                <Select
                                                    name="shelter"
                                                    placeholder="Pilih Shelter"
                                                    onChange={this.handleChangeShelter}
                                                    options={this.state.dataShelter.map(x => this.OptionShelter(x))}
                                                />
                                                {/* <select class="form-control" onChange={this.handleChange.bind(this, "idShelter")} style={{ width: '100%' }}>
                                                    <option disabled selected>Pilih Shelter</option>
                                                    <option value="1">Terminal 1</option>
                                                    <option value="2">Terminal 2</option>
                                                    <option value="3">Terminal 3</option>
                                                </select>
                                                <span style={{color:'red'}}> {this.state.errors["idShelter"]} </span><br/> */}
                                            </div>
                                            <div class="form-group">
                                                <label>Jenis</label>
                                                <Select
                                                    name="jenis"
                                                    placeholder="Pilih Jenis"
                                                    onChange={this.handleChangeJenis}
                                                    options={this.state.dataJenis.map(x => this.OptionJenis(x))}
                                                />
                                                {/* <select class="form-control" onChange={this.handleChange.bind(this, "jenis")} style={{ width: '100%' }}>
                                                    <option disabled selected>Pilih Jenis</option>
                                                    <option value="Loket">Loket</option>
                                                </select>
                                                <span style={{color:'red'}}> {this.state.errors["jenis"]} </span><br/> */}
                                            </div>
                                            <div class="form-group">
                                                <label>Pilih TypeBus</label>
                                                <Select
                                                    name="typeBus"
                                                    placeholder="Pilih TypeBus"
                                                    onChange={this.handleChangeTypebus}
                                                    options={this.state.dataTypeBus.map(x => this.OptionTypeBus(x))}
                                                />
                                                {/* <select class="form-control" onChange={this.handleChange.bind(this, "typeBus")} style={{ width: '100%' }}>
                                                    <option disabled selected>Pilih TypeBus</option>
                                                    <option value="1">JAC</option>
                                                    <option value="2">JRC</option>
                                                    <option value="3">TJR</option>
                                                </select>
                                                <span style={{color:'red'}}> {this.state.errors["typeBus"]} </span><br/> */}
                                            </div>
                                            <div class="form-group">
                                                <label>Nama Loket</label>
                                                <input className="form-control" type="text" onChange={this.handleChange.bind(this,"nama")} />
                                                <span style={{color:'red'}}> {this.state.errors["nama"]} </span><br/>
                                            </div>
                                            <div class="form-group">
                                                <label>Alamat</label>
                                                <textarea className="form-control" rows="4" cols="50" onChange={this.handleChange.bind(this, "alamat")} />
                                                {/* <input className="form-control" type="text" onChange={this.handleChange.bind(this, "alamat")} /> */}
                                                <span style={{color:'red'}}> {this.state.errors["alamat"]} </span><br/>
                                            </div>
                                            <div class="form-group">
                                                <label>Telepon Loket</label>
                                                <input className="form-control" type="number" onChange={this.handleChange.bind(this, "nomorTelepon")} />
                                                <span style={{color:'red'}}> {this.state.errors["nomorTelepon"]} </span><br/>
                                            </div>
                                            <div class="form-group">
                                                <label>Kontak Person</label>
                                                <input className="form-control" type="number" onChange={this.handleChange.bind(this, "kontakPerson")} />
                                                <span style={{color:'red'}}> {this.state.errors["kontakPerson"]} </span><br/>
                                            </div>
                                            <div className="form-group">
                                                <label>Bandara</label>
                                                <div className="radio">
                                                    <input
                                                        type="radio"
                                                        name="isBandara" 
                                                        value="true"
                                                        //   checked={isPublished === true}
                                                        onChange={this.handleChange.bind(this, "isBandara")} /> Ya &nbsp;&nbsp;&nbsp;
                                                    <input
                                                        type="radio"
                                                        name="isBandara" 
                                                        value="false"
                                                        //   checked={isPublished === true}
                                                        onChange={this.handleChange.bind(this, "isBandara")} /> Tidak &nbsp;&nbsp;&nbsp;
                                                </div>
                                                <span style={{color:'red'}}> {this.state.errors["isBandara"]} </span><br/>
                                            </div>
                                            <div className="form-group">
                                                <label>Tempat Berangkat</label>
                                                <div className="radio">
                                                    <input
                                                        type="radio"
                                                        name="tempatBerangkat" 
                                                        value="true"
                                                        //   checked={isPublished === true}
                                                        onChange={this.handleChange.bind(this, "tempatBerangkat")} /> Ya &nbsp;&nbsp;&nbsp;
                                                    <input
                                                        type="radio"
                                                        name="tempatBerangkat" 
                                                        value="false"
                                                        //   checked={isPublished === true}
                                                        onChange={this.handleChange.bind(this, "tempatBerangkat")} /> Tidak &nbsp;&nbsp;&nbsp;
                                                </div>
                                                <span style={{color:'red'}}> {this.state.errors["tempatBerangkat"]} </span><br/>
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
