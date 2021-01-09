import React, { Component } from 'react'
import Select from 'react-select';

import API_ENDPOINT from '../../../Endpoint'

export default class TambahAgen extends Component {

    constructor(props){
        super(props)

        this.fileInputLogo = React.createRef()

        this.state = {
            value: '',
            label: '',
            fields: {},
            errors: {},
            dataPo: [],
            dataWilayah: [],
            dataLokasi: [],
            options: [],
            idPo: '',
            dataArray: [],
            selectedOptions: [],
            valuePo: [],
            values: '',
            status: false,
            tempatBerangkat: false,
            idWilayah: '',
            pos: []
        }
        
    }

    handleChangeStatus = (e) => {
        this.setState({
            [e.target.name]: !this.state.status
        })
    }

    handleChangeBerangkat = (e) => {
        this.setState({
            [e.target.name]: !this.state.tempatBerangkat
        })
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        // // Validasi po
        // if(!fields["po"]){
        //     formIsValid = false;
        //     errors["po"] = "Tidak boleh kosong";
        // }

        // // Validasi wilayah
        // if(!fields["idWilayah"]){
        //     formIsValid = false;
        //     errors["idWilayah"] = "Tidak boleh kosong";
        // }

        // // Validasi lokasi
        // if(!fields["idLokasi"]){
        //     formIsValid = false;
        //     errors["idLokasi"] = "Tidak boleh kosong";
        // }

        // Validasi namaAgen
        if(!fields["namaAgen"]){
            formIsValid = false;
            errors["namaAgen"] = "Tidak boleh kosong";
        }

        // Validasi nomer telepon
        if(!fields["nomorTelpon"]){
            formIsValid = false;
            errors["nomorTelpon"] = "Tidak boleh kosong";
        }

        // Validasi longitude
        if(!fields["longitude"]){
            formIsValid = false;
            errors["longitude"] = "Tidak boleh kosong";
        }

        // Validasi latitude
        if(!fields["latitude"]){
            formIsValid = false;
            errors["latitude"] = "Tidak boleh kosong";
        }

        // Validasi status
        if(!fields["status"]){
            formIsValid = false;
            errors["status"] = "Tidak boleh kosong";
        }

        // Validasi tempat Berangkat
        if(!fields["tempatBerangkat"]){
            formIsValid = false;
            errors["tempatBerangkat"] = "Tidak boleh kosong";
        }

        this.setState({errors: errors});
        return formIsValid;
        
    }

    inputFileLogo = () => {
        if (this.fileInputLogo.current !== undefined && this.fileInputLogo.current.click !== undefined)
            this.fileInputLogo.current.click()
    }

    EndpointAgenId() {
        API_ENDPOINT.get('/admin/agen/' + this.props.match.params.idAgen)
        .then(res => {
            this.setState({
                idWilayah: res.data.idWilayah,
                idLokasi: res.data.idLokasi,
                alamat: res.data.alamat,
                nomorTelpon: res.data.nomorTelpon,
                kontakPerson: res.data.kontakPerson,
                tempatBerangkat: res.data.tempatBerangkat,
                namaAgen: res.data.namaAgen,
                pos: res.data.pos,
                logo: res.data.logo,
                latitude: res.data.latitude,
                longitude: res.data.longitude,
                status: res.data.status
            })
            this.getLokasi(res.data.idWilayah)
            this.endpointPoId(this.state.pos)
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
        .then(res => {
            this.setState({
                dataWilayah: res.data
            })
        })
    }

    componentDidMount() {
        this.EndpointAgenId();
        this.EndpointPo();
        this.EndpointWilayah();
    }

    getLokasi(idWilayah) {
        // console.log(idWilayah);
        API_ENDPOINT.get('/admin/lokasi/list/wilayah/' +idWilayah)
        .then(res => {
            this.setState({
                idWilayahs: idWilayah,
                dataLokasi: res.data
            })
        })
    }

    // dropdownChanged = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    //     this.getLokasi(e.target.value)
    // }

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


    handleChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value 
        })
    }

    getInitialState = function() {
        return{file: []}
    }

    onChangeLogo = (event)=>{
        this.setState({
            imgLogo: event.target.files[0]
        })
    }

        // MakeOption(x) {
        //     return { value: x.idPo, label: x.nama };
        // }

        // handleInputChange(value, e) {
        //     if (e.action === "input-change") {
        //         this.setState({ value });
        //     }
        // }

        // handleChangeSelect = (e) => {
        //     this.setState({
        //         po: e
        //     })
        // }
    endpointPoId(data) {
        for(var a=0; a<data.length; a++) {

        }
    }
    
    OptionPo = (x) => {
        return {value: x.idPo, label: x.nama}
    }

    handleChangePo = (e) => {
        // console.log(e);

        // const po = [...this.state.pos]
        // console.log(po);

        this.setState({
            idPo: e.value
        })
    }

    removePo = (index) => {
        var array = this.state.pos;
        if (index > -1) {
            array.splice(index, 1);
            this.setState({pos: array}, () => {console.log(this.state.pos);});
        }
    }

    tambahData(e){
        e.preventDefault();

        var c = []
        this.state.pos.forEach(function(data) {
            c.push(data.idPo)
        })
        // console.log(c);

        let formData = new FormData();

        formData.append('id', this.props.match.params.idAgen);
        formData.append('idLokasi', this.state.idLokasi);
        formData.append('idWilayah', this.state.idWilayah);
        formData.append('latitude', this.state.latitude);
        if(!this.state.imgLogo){
            // formData.append('logo', this.state.logo)
        } else {
            formData.append('logo', this.state.imgLogo);
        }
        formData.append('longitude', this.state.longitude);
        formData.append('namaAgen', this.state.namaAgen);
        formData.append('nomorTelpon', this.state.nomorTelpon);
        // if(this.state.po) {
        //     this.state.po.forEach(function(item) {
        //         formData.append('po', JSON.stringify(item.value));
        //     })
        // }
        formData.append('po', c);
        formData.append('status', this.state.status);
        formData.append('tempatBerangkat', this.state.tempatBerangkat);

        // new Response(formData).text().then(console.log)

        // if(this.handleValidation()){
            API_ENDPOINT({
                method: 'put',
                url: '/admin/agen/edit',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                console.log(res);
                alert("Berhasil edit data");
                this.props.history.push('/entitas/agen')
            })
            .catch(error => {
                alert('error')
                console.log(error);
            })
        // }

    }

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    render() {

        console.log(this.state.dataPo);
        // let options = [];
        // options = options.concat(this.state.dataPo.map((x) => x));

        // const { selectedOptionWil } = this.state.idWilayah;
        // console.log(selectedOptionWil);

        // console.log(this.state.pos);

        // this.state.pos.forEach(function(el) {
        //     console.log(el);
        // })

        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid header-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-left">
                            <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                            <li className="breadcrumb-item active"><b>Edit Agen</b></li>
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
                                        <h3 class="card-title">Edit Agen</h3>
                                    </div>
                                    <form onSubmit={this.tambahData.bind(this)}>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label>Pilih P.O</label>
                                                {/* <Select
                                                    isMulti
                                                    name="colors"
                                                    options={options.map(x => this.MakeOption(x))}
                                                    className="basic-multi-select"
                                                    classNamePrefix="select"
                                                    closeMenuOnSelect={false}
                                                    onInputChange={this.handleInputChange}
                                                    inputValue={this.state.value}
                                                /> */}
                                                <Select
                                                    // isMulti
                                                    name="po"
                                                    // value={selectedOption}
                                                    value={this.state.dataPo.map(x => this.OptionPo(x)).filter(option => option.value === this.state.idPo)}
                                                    onChange={this.handleChangePo}
                                                    closeMenuOnSelect={false}
                                                    placeholder="Pilih P.O"
                                                    // getOptionLabel={option => option.nama}
                                                    // getOptionValue={option => option.idPo}
                                                    // options={this.state.dataPo}
                                                    options={this.state.dataPo.map(x => this.OptionPo(x))}
                                                    // options={this.props.dataPo.map(x => this.props.OptionPo(x))}
                                                />
                                                {/* {this.state.dataPo.map(o => <p>{o.idPo}</p>)} */}
                                            </div>
                                            <div className="form-group">
                                                <label>P.O Terpilih</label>
                                                <div className="lintasan">
                                                    {
                                                        this.state.pos.map((el, index) => {
                                                            // console.log(el);
                                                            return(
                                                                <span>
                                                                    <i class="btn btn-city btn-xs">
                                                                        {el.nama}&nbsp;&nbsp;&nbsp;
                                                                        <span onClick={this.removePo.bind(this, index)}>&times;</span><br/>
                                                                    </i>
                                                                    <span class="strip"> &nbsp;&nbsp;&nbsp; </span>
                                                                </span>
                                                            )
                                                        })
                                                    }
                                                </div>
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
                                                {/* <span style={{color:'red'}}> {this.state.errors["idLokasi"]} </span><br/> */}
                                            </div>
                                            <div class="form-group">
                                                <label>Nama Agen</label>
                                                <input className="form-control" type="text" name="namaAgen" value={this.state.namaAgen} onChange={this.handleChange} />
                                                <span style={{color:'red'}}> {this.state.errors["namaAgen"]} </span><br/>
                                            </div>
                                            <div class="form-group">
                                                <label>No. Telepon</label>
                                                <input className="form-control" type="number" name="nomorTelpon" value={this.state.nomorTelpon} onChange={this.handleChange} />
                                                <span style={{color:'red'}}> {this.state.errors["nomorTelpon"]} </span><br/>
                                            </div>
                                            <div class="form-group">
                                                <label>Longitude</label>
                                                <input className="form-control" type="text" name="longitude" value={this.state.longitude} onChange={this.handleChange} />
                                                <span style={{color:'red'}}> {this.state.errors["longitude"]} </span><br/>
                                            </div>
                                            <div class="form-group">
                                                <label>Latitude</label>
                                                <input className="form-control" type="text" name="latitude" value={this.state.latitude} onChange={this.handleChange} />
                                                <span style={{color:'red'}}> {this.state.errors["latitude"]} </span><br/>
                                            </div>
                                            <div className="form-group">
                                                <label>Status Aktif</label>
                                                <div className="radio">
                                                    <input
                                                        type="radio"
                                                        name="status" 
                                                        value="true"
                                                        checked={this.state.status}
                                                        onChange={this.handleChangeStatus} /> Ya &nbsp;&nbsp;&nbsp;
                                                    <input
                                                        type="radio"
                                                        name="status" 
                                                        value="false"
                                                        checked={!this.state.status}
                                                        onChange={this.handleChangeStatus} /> Tidak &nbsp;&nbsp;&nbsp;
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Tempat Berangkat</label>
                                                <div className="radio">
                                                    <input
                                                        type="radio"
                                                        name="tempatBerangkat" 
                                                        value="true"
                                                        checked={this.state.tempatBerangkat}
                                                        onChange={this.handleChangeBerangkat} /> Ya &nbsp;&nbsp;&nbsp;
                                                    <input
                                                        type="radio"
                                                        name="tempatBerangkat" 
                                                        value="false"
                                                        checked={!this.state.tempatBerangkat}
                                                        onChange={this.handleChangeBerangkat} /> Tidak &nbsp;&nbsp;&nbsp;
                                                </div>
                                                <span style={{color:'red'}}> {this.state.errors["tempatBerangkat"]} </span><br/>
                                            </div>
                                            <div class="form-group">
                                                <label>Pilih Logo</label><br/>
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
