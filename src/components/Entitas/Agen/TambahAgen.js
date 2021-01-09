import React, { Component } from 'react'
import Select from 'react-select';
// import 'react-select/dist/react-select.css';

import API_ENDPOINT from '../../../Endpoint'

export default class TambahAgen extends Component {

    constructor(props){
        super(props)

        this.fileInputLogo = React.createRef()

        this.state = {
            // itemtitle: '',
            // multi: true,
            // selected: [],
            value: '',
            label: '',
            fields: {},
            errors: {},
            dataPo: [],
            dataWilayah: [],
            dataLokasi: [],
            options: [],
            idPo: '',
            // pageNumbers: []
            dataArray: [],
            selectedOptions: [],
            valuePo: [],
            values: ''
        }
        
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
        this.EndpointPo();
        this.EndpointWilayah();
    }

    dropdownChanged = (e) => {
        const idWil = e.target.value;
        API_ENDPOINT.get('/admin/lokasi/list/wilayah/' + idWil)
        .then(res => {
            // console.log(res);
            this.setState({
                idWilayah: idWil,
                dataLokasi: res.data
            })
        })
    }

    OptionWilayah = (x) => {
        return {value: x.id, label: x.namaWilayah}
    }

    handleChangeWilayah = (e) => {
        API_ENDPOINT.get('/admin/lokasi/list/wilayah/' + e.value)
        .then(res => {
            console.log(res);
            this.setState({
                idWilayah: e.value,
                dataLokasi: res.data
            })
        })
    }

    OptionLokasi = (x) => {
        return {value: x.id, label: x.namaLokasi}
    }

    handleChangeLokasi = (e) => {
        this.setState({idLokasi: e.value})
    }

    // handleChange = (e) => {
    //     this.setState({ [e.target.name]: e.target.value })
    // }

    getInitialState = function() {
        return{file: []}
    }

    onChangeLogo = (event)=>{
        this.setState({
            imgLogo: event.target.files[0]
        })
    }

        // options = [];
        // options = options.concat(this.state.dataPo.map((x) => x));

        MakeOption(x) {
            // console.log(x);
            return { value: x.idPo, label: x.nama };
            // this.options.concat(this.state.dataPo.map((x) => x));
            // this.setState({
            //     value: x.idPo,
            //     label: x.nama
            // })
        }

        handleInputChange(value, e) {
            if (e.action === "input-change") {
                this.setState({ value });
            }
            console.log(e);
        }

        // handleInputChange = (x) => {
        //     console.log(x);
        //     // this.setState({ colors: value })
        //     // if (e.action === "input-change") {
        //         this.setState({ 
        //             value: x.idPo,
        //             label: x.nama
        //         });
        //     // }
        // }

        // handleInputChange = (selectedOption) => {
        //     // const id = options.value;
        //     console.log(selectedOption);
        //     // if (e.action === "input-change") {
        //     //     this.setState({ value });
        //     //     console.log(value);
        //     // }
        // };

        // handleInputChange(e) {
        //     console.log(e);
        //     // this.setState({ [e.target.name]: e.target.value })
        // }

        handleChangeSelect = (e) => {
            // console.log(e);

            // e.forEach((user) => {
            //     console.log(user);
            // })

            this.setState({
                po: e
            })

            // e.map((el) => {
            //     console.log(el);
            //     let values = el.value
            //     console.log(values);
            //     // this.setState({
            //     //     idPo: this.state.dataArray.push(el.label)
            //     // }, 
            //     // () => {console.log(this.state.idPo);
            //     // })
            // })

            // let pageNumbers = [];
            // for (let i = 0; i <= this.state.idPo; i++) {
            //     pageNumbers.push(i.idPo);
            // }
            // console.log(pageNumbers);
        }

    tambahData(e){
        e.preventDefault();

        // let a = this.state.po;
        // a.map((el) => {
        //     this.setState({
        //         pos: el.value
        //     }, () => {console.log(this.state.pos);})
        // })

        // let pageNumbers = [];
        // for (let i = 0; i < this.state.po; i++) {
        //     pageNumbers.push(i);
        // }
        // console.log(pageNumbers);

        // this.state.po.forEach(function(item) {
        //     pageNumbers = item.value
        // })

        let formData = new FormData();

        formData.append('idLokasi', this.state.idLokasi);
        formData.append('idWilayah', this.state.idWilayah);
        formData.append('latitude', this.state.fields['latitude']);
        if(this.state.imgLogo) {
            formData.append('logo', this.state.imgLogo);
        }
        formData.append('longitude', this.state.fields['longitude']);
        formData.append('namaAgen', this.state.fields['namaAgen']);
        formData.append('nomorTelpon', this.state.fields['nomorTelpon']);
        // for(var i=0; i<this.state.po; i++) {
        //     let a = this.state.po[i]
        //     console.log(a);
        // }
        if(this.state.po) {
            this.state.po.forEach(function(item) {
                formData.append('po', JSON.stringify(item.value));
            })
        }
        formData.append('status', this.state.fields['status']);
        formData.append('tempatBerangkat', this.state.fields['tempatBerangkat']);

        if(this.handleValidation()){
            API_ENDPOINT({
                method: 'post',
                url: '/admin/agen/add',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                console.log(res);
                alert("Berhasil tambah data");
                this.props.history.push('/entitas/agen')
            })
            .catch(error => {
                alert('error')
                console.log(error);
            })
        }

    }

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    render() {

        let options = [];
        options = options.concat(this.state.dataPo.map((x) => x));

        // function MakeOption(x) {
        //     return { value: x.idPo, label: x.nama };
        // }

        // function handleInputChange(value, e) {
        //     if (e.action === "input-change") {
        //         this.setState({ value });
        //         console.log(value);
        //     }
        // }

        const { selectedOption } = this.state;

        // console.log(this.state.dataPo);
        console.log(this.state.po);



        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid header-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-left">
                            <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                            <li className="breadcrumb-item active"><b>Tambah Agen</b></li>
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
                                        <h3 class="card-title">Tambah Agen</h3>
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
                                                    isMulti
                                                    name="po"
                                                    value={selectedOption}
                                                    onChange={this.handleChangeSelect}
                                                    closeMenuOnSelect={false}
                                                    // getOptionLabel={option => option.nama}
                                                    // getOptionValue={option => option.idPo}
                                                    // options={this.state.dataPo}
                                                    options={options.map(x => this.MakeOption(x))}
                                                />
                                                {/* {this.state.dataPo.map(o => <p>{o.idPo}</p>)} */}
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
                                                    placeholder=" Pilih Lokasi"
                                                    onChange={this.handleChangeLokasi}
                                                    options={this.state.dataLokasi.map(x => this.OptionLokasi(x))}
                                                />
                                                {/* <select class="form-control" value={this.state.nama} onChange={this.handleChange.bind(this, "idLokasi")} style={{ width: '100%' }}>
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
                                                <input className="form-control" type="text" name="namaAgen" onChange={this.handleChange.bind(this, "namaAgen")} />
                                                <span style={{color:'red'}}> {this.state.errors["namaAgen"]} </span><br/>
                                            </div>
                                            <div class="form-group">
                                                <label>No. Telepon</label>
                                                <input className="form-control" type="number" name="nomorTelpon" onChange={this.handleChange.bind(this,"nomorTelpon")} />
                                                <span style={{color:'red'}}> {this.state.errors["nomorTelpon"]} </span><br/>
                                            </div>
                                            <div class="form-group">
                                                <label>Longitude</label>
                                                <input className="form-control" type="text" name="longitude" onChange={this.handleChange.bind(this, "longitude")} />
                                                <span style={{color:'red'}}> {this.state.errors["longitude"]} </span><br/>
                                            </div>
                                            <div class="form-group">
                                                <label>Latitude</label>
                                                <input className="form-control" type="text" name="latitude" onChange={this.handleChange.bind(this, "latitude")} />
                                                <span style={{color:'red'}}> {this.state.errors["latitude"]} </span><br/>
                                            </div>
                                            <div className="form-group">
                                                <label>Status Aktif</label>
                                                <div className="radio">
                                                    <input
                                                        type="radio"
                                                        name="status" 
                                                        value="true"
                                                        //   checked={isPublished === true}
                                                        onChange={this.handleChange.bind(this, "status")} /> Ya &nbsp;&nbsp;&nbsp;
                                                    <input
                                                        type="radio"
                                                        name="status" 
                                                        value="false"
                                                        //   checked={isPublished === true}
                                                        onChange={this.handleChange.bind(this, "status")} /> Tidak &nbsp;&nbsp;&nbsp;
                                                </div>
                                                <span style={{color:'red'}}> {this.state.errors["status"]} </span><br/>
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
