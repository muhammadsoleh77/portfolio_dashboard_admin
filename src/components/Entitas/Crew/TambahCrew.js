import React, { Component } from 'react'
import Select from 'react-select'
import API_ENDPOINT from '../../../Endpoint'

export default class TambahCrew extends Component {

    constructor(props){
        super(props)

        this.state = {
            fields: {},
            errors: {},
            dataPo: [],
            dataTypeSap: [],

            dataJenis: [
                {id:'JA', namaJenis: 'JAC'},
                {id:'JR', namaJenis: 'JRC'},
                {id:'JG', namaJenis: 'TJR'}
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

        // Validasi Nama Crew
        if(!fields["name"]){
            formIsValid = false;
            errors["name"] = "Tidak boleh kosong";
        }

        // // Validasi Type
        // if(!fields["type"]){
        //     formIsValid = false;
        //     errors["type"] = "Tidak boleh kosong";
        // }

        // Validasi NIK
        if(!fields["nik"]){
            formIsValid = false;
            errors["nik"] = "Tidak boleh kosong";
        }

        this.setState({errors: errors});
        return formIsValid;
        
    }

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }


    endpointPo() {
        API_ENDPOINT.get('/admin/po/getAll')
        .then(res => {
            this.setState({
                dataPo: res.data
            })
        })
    }

    componentDidMount(){
        this.endpointPo();
    }

    // handleChangeType = (e) => {
    //     const type = e.target.value
    //     API_ENDPOINT.get('/sap/customer?group=' + type)
    //     .then(res => {
    //         this.setState({
    //             dataTypeSap: res.data.data
    //         })
    //         console.log(res.data);
    //     })
    // }

    // START OPTION P.O
    OptionPo = (x) => {
        return {value: x.idPo, label: x.nama}
    }

    handleChangePo = (e) => {
        this.setState({idPo: e.value})
    }
    // END P.O

    // START OPTION JENIS
    OptionJenis = (x) => {
        return {value: x.id, label: x.namaJenis}
    }

    handleChangeJenis = (e) => {
        this.setState({idJenis: e.value})
        
        API_ENDPOINT.get('/id/co/bisku/payload/sap/customer?group=' + e.value)
        .then(res => {
            this.setState({
                dataTypeSap: res.data.data
            })
            // console.log(res.data);
        })
    }
    // END JENIS

    // START OPTION CREW
    OptionCrew = (x) => {
        return {value: x.NAME, label: x.NAME}
    }

    handleChangeCrew = (e) => {
        this.setState({name: e.value})
    }
    // END CREW

    // START OPTION NIK
    OptionNik = (x) => {
        return {value: x.CUSTOMER, label: x.CUSTOMER}
    }

    handleChangeNik = (e) => {
        this.setState({nik: e.value})
    }
    // END NIK

    tambahData(e) {
        e.preventDefault();

        const tambahDataCrew = {
            name: this.state.name,
            nik: this.state.nik,
            idPo: this.state.idPo,
            type: this.state.idJenis
        }

        // if(this.handleValidation()){
            API_ENDPOINT.post('/admin/crew/add', tambahDataCrew)
            .then(res => {
                alert('Berhasil Tambah data Crew')
                this.props.history.push('/entitas/crew')
            })
            .catch(error => {
                alert('Error')
            })
        // }

    }

    render() {
        console.log(this.props.match.params.idPo);
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid header-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-left">
                            <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                            <li className="breadcrumb-item active"><b>Tambah Crew</b></li>
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
                                        <h3 class="card-title">Tambah Crew</h3>
                                    </div>
                                    <form onSubmit={this.tambahData.bind(this)}>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label>Pilih P.O</label>
                                                <Select
                                                    name="po"
                                                    placeholder="Pilih P.O"
                                                    // value={this.state.dataPo.map(x => this.OptionPo(x)).filter(option => option.value === this.props.match.params.idPo)}
                                                    onChange={this.handleChangePo}
                                                    options={this.state.dataPo.map(x => this.OptionPo(x))}
                                                />
                                                {/* <select class="form-control" value={this.props.match.params.idPo} style={{ width: '100%' }} onChange={this.handleChange.bind(this, "idPo")}>
                                                    <option disabled selected>Pilih P.O</option>
                                                    {
                                                        this.state.dataPo.map((el) => {
                                                            return (
                                                                <option key={el.idPo} value={el.idPo}>{el.nama}</option>
                                                            )
                                                        })
                                                    }
                                                </select> */}
                                            </div>
                                            <div class="form-group">
                                                <label>Pilih Jenis</label>
                                                <Select
                                                    name="jenis"
                                                    placeholder="Pilih Jenis"
                                                    onChange={this.handleChangeJenis}
                                                    options={this.state.dataJenis.map(x => this.OptionJenis(x))}
                                                />
                                                {/* <select class="form-control" onChange={this.handleChangeType.bind(this)} style={{ width: '100%' }}>
                                                    <option disabled selected>Pilih Jenis</option>
                                                    <option value="JA">JAC</option>
                                                    <option value="JR">JRC</option>
                                                    <option value="JG">TJR</option>
                                                </select>
                                                <span style={{color:'red'}}> {this.state.errors["type"]} </span><br/> */}
                                            </div>
                                            <div class="form-group">
                                                <label>Nama Crew</label>
                                                <Select
                                                    name="crew"
                                                    placeholder="Pilih Crew"
                                                    onChange={this.handleChangeCrew}
                                                    options={this.state.dataTypeSap.map(x => this.OptionCrew(x))}
                                                />
                                                {/* <select class="form-control" style={{ width: '100%' }} onChange={this.handleChange.bind(this, "name")}>
                                                    <option disabled selected>Pilih Crew</option>
                                                    {
                                                        this.state.dataTypeSap.map((el) => {
                                                            return (
                                                                <option value={el.NAME}>{el.NAME}</option>
                                                            )
                                                        })
                                                    }
                                                </select> */}
                                            </div>
                                            <div class="form-group">
                                                <label>NIK</label>
                                                <Select
                                                    name="nik"
                                                    placeholder="Pilih N.I.K"
                                                    onChange={this.handleChangeNik}
                                                    options={this.state.dataTypeSap.map(x => this.OptionNik(x))}
                                                />
                                                {/* <select class="form-control" style={{ width: '100%' }} onChange={this.handleChange.bind(this, "nik")}>
                                                    <option disabled selected>N.I.K</option>
                                                    {
                                                        this.state.dataTypeSap.map((el) => {
                                                            return (
                                                                <option value={el.CUSTOMER}>{el.CUSTOMER}</option>
                                                            )
                                                        })
                                                    }
                                                </select> */}
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
