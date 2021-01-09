import React, { Component } from 'react'
import API_ENDPOINT from '../../../Endpoint'

export default class EditCrew extends Component {

    constructor(props){
        super(props)

        this.state = {
            fields: {},
            errors: {},
            dataPo: []
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

        // Validasi Type
        if(!fields["type"]){
            formIsValid = false;
            errors["type"] = "Tidak boleh kosong";
        }

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


    EndpointPo() {
        API_ENDPOINT.get('/admin/po/getAll')
        .then(res => {
            this.setState({
                dataPo: res.data
            })
        })
    }

    EndpointCrewId() {
        API_ENDPOINT.get('/admin/crew/' + this.props.match.params.idCrew)
        .then(res => {
            this.setState({
                id: res.data.id,
                nik: res.data.nik,
                name: res.data.name,
                type: res.data.type,
                idPo: res.data.idPo
            })
        })
    }

    componentDidMount(){
        this.EndpointPo();
        this.EndpointCrewId();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    tambahData(e) {
        e.preventDefault();

        const editDataCrew = {
            id: this.state.id,
            name: this.state.name,
            nik: this.state.nik,
            idPo: this.state.idPo,
            type: this.state.type,
        }

        // if(this.handleValidation()){
            API_ENDPOINT.put('/admin/crew/edit', editDataCrew)
            .then(res => {
                alert('Berhasil Edit data Crew')
                this.props.history.push('/entitas/crew')
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
                            <li className="breadcrumb-item active"><b>Edit Crew</b></li>
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
                                        <h3 class="card-title">Edit Crew</h3>
                                    </div>
                                    <form onSubmit={this.tambahData.bind(this)}>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label>Pilih P.O</label>
                                                <select class="form-control" name="idPo" value={this.state.idPo} style={{ width: '100%' }} onChange={this.handleChange}>
                                                    <option disabled selected>Pilih P.O</option>
                                                    {
                                                        this.state.dataPo.map((el) => {
                                                            return (
                                                                <option key={el.idPo} value={el.idPo}>{el.nama}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>Nama Crew</label>
                                                <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label>Pilih Jenis</label>
                                                <select class="form-control" value={this.state.type} name="type" onChange={this.handleChange} style={{ width: '100%' }}>
                                                    <option disabled selected>Pilih Jenis</option>
                                                    <option value="DRV">Driver</option>
                                                    <option value="CREW">Crew</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>NIK</label>
                                                <input className="form-control" type="text" name="nik" value={this.state.nik} onChange={this.handleChange} />
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
