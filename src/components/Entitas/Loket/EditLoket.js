import React, { Component } from 'react'
import Select from 'react-select'
import API_ENDPOINT from '../../../Endpoint'

export default class EditLoket extends Component {

    constructor(props){
        super(props)

        this.state = {
            fields: {},
            errors: {},
            dataPo: [],
            dataWilayah: [],
            dataLokasi: [],
            isBandara: false,
            tempatBerangkat: false,
            idWilayah: '',

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

    handleChangeBandara = (e) => {
        this.setState({
            [e.target.name]: !this.state.isBandara
        })
    }

    handleChangeTempatBerangkat = (e) => {
        this.setState({
            [e.target.name]: !this.state.tempatBerangkat
        })
    }

    handleChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value 
        })
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        // Validasi po
        if(!fields["idPo"]){
            formIsValid = false;
            errors["idPo"] = "Tidak boleh kosong";
        }

        // Validasi shelter
        if(!fields["idShelter"]){
            formIsValid = false;
            errors["idShelter"] = "Tidak boleh kosong";
        }

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

        // Validasi jenis
        if(!fields["jenis"]){
            formIsValid = false;
            errors["jenis"] = "Tidak boleh kosong";
        }

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

        // Validasi typeBus
        if(!fields["typeBus"]){
            formIsValid = false;
            errors["typeBus"] = "Tidak boleh kosong";
        }

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

    EndpointLoketId() {
        API_ENDPOINT.get('/admin/loket/' + this.props.match.params.idLoket)
        .then(res => {
            this.setState({
                idPo: res.data.idPo,
                idWilayah: res.data.idWilayah,
                idLokasi: res.data.idLokasi,
                idShelter: res.data.idShelter,
                isBandara: res.data.isBandara,
                tempatBerangkat: res.data.tempatBerangkat,
                nama: res.data.nama,
                jenis: res.data.jenis,
                alamat: res.data.alamat,
                nomorTelepon: res.data.nomorTelepon,
                kontakPerson: res.data.kontakPerson,
                typeBus: res.data.typeBus
            })
            this.getLokasi(res.data.idWilayah)
        })
    }


    EndpointPo() {
        API_ENDPOINT.get('/admin/po/getAll')
        .then(res => {
            this.setState({
                dataPo: res.data
            })
        })
    }

    EndpointWilayah() {
        API_ENDPOINT.get('/admin/wilayah/list')
        .then(res=> {
            this.setState({
                dataWilayah: res.data
            })
        })
    }

    componentDidMount() {
        this.EndpointLoketId();
        this.EndpointPo();
        this.EndpointWilayah();
    }

    getLokasi(idWilayah) {
        API_ENDPOINT.get('/admin/lokasi/list/wilayah/' +idWilayah)
        .then(res => {
            this.setState({
                idWilayahs: idWilayah,
                dataLokasi: res.data
            })
        })
    }

    dropdownChanged = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.getLokasi(e.target.value)
    }

    // START OPTION P.O
    OptionPo = (x) => {
        return {value: x.idPo, label: x.nama}
    }

    handleChangePo = (e) => {
        this.setState({idPo: e.value})
    }
    // END P.O

    // START OPTION WILAYAH
    OptionWilayah = (x) => {
        return {value: x.id, label: x.namaWilayah}
    }

    handleChangeWilayah = (e) => {
        this.setState({idWilayah: e.value})
        this.getLokasi(e.value)
    }
    // END WILAYAH

    // START OPTION LOKASI
    OptionLokasi = (x) => {
        return {value: x.id, label: x.namaLokasi}
    }

    handleChangeLokasi = (e) => {
        this.setState({idLokasi: e.value})
    }
    // END LOKASI

    // START OPTION SHELTER
    OptionShelter = (x) => {
        return {value: x.id, label: x.namaShelter}
    }

    handleChangeShelter = (e) => {
        this.setState({idShelter: e.value})
    }
    // END SHELTER

    // START OPTION JENIS
    OptionJenis = (x) => {
        return {value: x.id, label: x.namaJenis}
    }

    handleChangeJenis = (e) => {
        this.setState({jenis: e.value})
    }
    // END JENIS

    // START OPTION TYPEBUS
    OptionTypeBus = (x) => {
        return {value: x.id, label: x.namaType}
    }

    handleChangeTypeBus = (e) => {
        this.setState({typeBus: e.value})
    }
    // END TYPEBUS

    tambahData(e) {
        e.preventDefault();

        const editDataLoket = {
            id: this.props.match.params.idLoket,
            alamat: this.state.alamat,
            idWilayah: this.state.idWilayah,
            idLokasi: this.state.idLokasi,
            idPo: this.state.idPo,
            idShelter: this.state.idShelter,
            isBandara: this.state.isBandara,
            jenis: this.state.jenis,
            kontakPerson: this.state.kontakPerson,
            nama: this.state.nama,
            nomorTelepon: this.state.nomorTelepon,
            tempatBerangkat: this.state.tempatBerangkat,
            typeBus: this.state.typeBus
        }
        console.log(editDataLoket);

        // if(this.handleValidation()){
            API_ENDPOINT.put('/admin/loket/edit', editDataLoket)
            .then(res => {
                alert('Berhasil Edit data Loket')
                this.props.history.push('/entitas/loket')
            })
            .catch(error => {
                alert('Error')
            })
        // }

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
                            <li className="breadcrumb-item active"><b>Edit Loket</b></li>
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
                                        <h3 class="card-title">Edit Loket</h3>
                                    </div>
                                    <form onSubmit={this.tambahData.bind(this)}>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label>Pilih P.O</label>
                                                <Select
                                                    name="po"
                                                    placeholder="Pilih P.O"
                                                    value={this.state.dataPo.map(x => this.OptionPo(x)).filter(option => option.value === this.state.idPo)}
                                                    onChange={this.handleChangePo}
                                                    options={this.state.dataPo.map(x => this.OptionPo(x))}
                                                />
                                                {/* <select class="form-control" style={{ width: '100%' }} value={this.state.idPo} onChange={this.handleChange.bind(this, "idPo")}>
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
                                                    value={this.state.dataWilayah.map(x => this.OptionWilayah(x)).filter(option => option.value === this.state.idWilayah)}
                                                    onChange={this.handleChangeWilayah}
                                                    options={this.state.dataWilayah.map(x => this.OptionWilayah(x))}
                                                />
                                                {/* <select class="form-control" name="idWilayah" value={this.state.idWilayah} onChange={this.dropdownChanged} style={{ width: '100%' }}>
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
                                                    value={this.state.dataLokasi.map(x => this.OptionLokasi(x)).filter(option => option.value === this.state.idLokasi)}
                                                    onChange={this.handleChangeLokasi}
                                                    options={this.state.dataLokasi.map(x => this.OptionLokasi(x))}
                                                />
                                                {/* <select class="form-control" name="idLokasi" value={this.state.idLokasi} onChange={this.handleChange} style={{ width: '100%' }}>
                                                    <option disabled selected>Pilih Lokasi</option>
                                                    {
                                                        this.state.dataLokasi.map((el) => {
                                                            return (
                                                                <option key={el.id} value={el.id}>{el.namaLokasi}</option>
                                                            )
                                                        })
                                                    }
                                                </select> */}
                                            </div>
                                            <div class="form-group">
                                                <label>Pilih Shelter</label>
                                                <Select
                                                    name="shelter"
                                                    placeholder="Pilih Shelter"
                                                    value={this.state.dataShelter.map(x => this.OptionShelter(x)).filter(option => option.value === this.state.idShelter)}
                                                    onChange={this.handleChangeShelter}
                                                    options={this.state.dataShelter.map(x => this.OptionShelter(x))}
                                                />
                                                {/* <select class="form-control" name="idShelter" value={this.state.idShelter} onChange={this.handleChange} style={{ width: '100%' }}>
                                                    <option disabled selected>Pilih Shelter</option>
                                                    <option value="1">Terminal 1</option>
                                                    <option value="2">Terminal 2</option>
                                                    <option value="3">Terminal 3</option>
                                                </select> */}
                                            </div>
                                            <div class="form-group">
                                                <label>Jenis</label>
                                                <Select
                                                    name="jenis"
                                                    placeholder="Pilih Jenis"
                                                    value={this.state.dataJenis.map(x => this.OptionJenis(x)).filter(option => option.value === this.state.jenis)}
                                                    onChange={this.handleChangeJenis}
                                                    options={this.state.dataJenis.map(x => this.OptionJenis(x))}
                                                />
                                                {/* <select class="form-control" name="jenis" value={this.state.jenis} onChange={this.handleChange} style={{ width: '100%' }}>
                                                    <option disabled selected>Pilih Jenis</option>
                                                    <option value="Loket">Loket</option>
                                                </select> */}
                                            </div>
                                            <div class="form-group">
                                                <label>Pilih TypeBus</label>
                                                <Select
                                                    name="typeBus"
                                                    placeholder="Pilih TypeBus"
                                                    value={this.state.dataTypeBus.map(x => this.OptionTypeBus(x)).filter(option => option.value === this.state.typeBus)}
                                                    onChange={this.handleChangeTypeBus}
                                                    options={this.state.dataTypeBus.map(x => this.OptionTypeBus(x))}
                                                />
                                                {/* <select class="form-control" name="typeBus" value={this.state.typeBus} onChange={this.handleChange} style={{ width: '100%' }}>
                                                    <option disabled selected>Pilih TypeBus</option>
                                                    <option value="1">JAC</option>
                                                    <option value="2">JRC</option>
                                                    <option value="3">TJR</option>
                                                </select> */}
                                            </div>
                                            <div class="form-group">
                                                <label>Nama Loket</label>
                                                <input className="form-control" type="text" name="nama" value={this.state.nama} onChange={this.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label>Alamat</label>
                                                <input className="form-control" type="text" name="alamat" value={this.state.alamat} onChange={this.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label>Telepon Loket</label>
                                                <input className="form-control" type="number" name="nomorTelepon" value={this.state.nomorTelepon} onChange={this.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label>Kontak Person</label>
                                                <input className="form-control" type="number" name="kontakPerson" value={this.state.kontakPerson} onChange={this.handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <label>Bandara</label>
                                                <div className="radio">
                                                    <input
                                                        type="radio"
                                                        name="isBandara" 
                                                        value="true"
                                                        checked={this.state.isBandara}
                                                        onChange={this.handleChangeBandara} /> Ya &nbsp;&nbsp;&nbsp;
                                                    <input
                                                        type="radio"
                                                        name="isBandara" 
                                                        value="false"
                                                        checked={!this.state.isBandara}
                                                        onChange={this.handleChangeBandara} /> Tidak &nbsp;&nbsp;&nbsp;
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
                                                        checked={this.state.tempatBerangkat}
                                                        onChange={this.handleChangeTempatBerangkat} /> Ya &nbsp;&nbsp;&nbsp;
                                                    <input
                                                        type="radio"
                                                        name="tempatBerangkat" 
                                                        value="false"
                                                        checked={!this.state.tempatBerangkat}
                                                        onChange={this.handleChangeTempatBerangkat} /> Tidak &nbsp;&nbsp;&nbsp;
                                                </div>
                                                <span style={{color:'red'}}> {this.state.errors["tempatBerangkat"]} </span><br/>
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
