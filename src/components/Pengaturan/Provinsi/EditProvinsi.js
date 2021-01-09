import React, { Component } from 'react'
// import { Redirect, Link } from 'react-router-dom'
import API_ENDPOINT from '../../../Endpoint'

export class EditProvinsi extends Component {

    state = {
        id: '',
        nama: ''
    }

    componentDidMount = () => {
        const id = this.props.match.params.id

        API_ENDPOINT.get('/admin/provinsi/' + id)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    nama: res.data.nama
                })
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const paramEditProvinsi = {
            idX: this.props.match.params.id,
            nama: this.state.nama
        }

        API_ENDPOINT.put('/admin/provinsi/edit', paramEditProvinsi)
            .then(res => {
                // console.log(res);
                alert(res.data.message)
                this.props.history.push('/pengaturan/provinsi')
            })
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
                            <li className="breadcrumb-item active"><b>Edit Provinsi</b></li>
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
                                        <h3 class="card-title">Edit Provinsi</h3>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Nama Provinsi</label>
                                                <input className="form-control" type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Input Provinsi" />
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

export default EditProvinsi
