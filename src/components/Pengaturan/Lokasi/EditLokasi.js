import React, { Component } from 'react'
// import { Redirect, Link } from 'react-router-dom'
import API_ENDPOINT from '../../../Endpoint'

export class EditLokasi extends Component {

    state = {
        id: '',
        namaLokasi: ''
    }

    componentDidMount = () => {
        const id = this.props.match.params.idLok

        API_ENDPOINT.get('/admin/lokasi/' + id)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    namaLokasi: res.data.namaLokasi
                })
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const paramEditLokasi = {
            idLokasi: this.props.match.params.idLok,
            idWilayah: this.props.match.params.idWil,
            namaLokasi: this.state.namaLokasi
        }

        API_ENDPOINT.put('/admin/lokasi/edit', paramEditLokasi)
            .then(res => {
                // console.log(res);
                alert(res.data.message)
                this.props.history.push('/pengaturan/lokasi')
            })
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-left">
                            <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                            <li className="breadcrumb-item active"><b>Edit Wilayah</b></li>
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
                                        <h3 class="card-title">Edit Lokasi</h3>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label>Nama Lokasi</label>
                                                <input className="form-control" type="text" name="namaLokasi" value={this.state.namaLokasi} onChange={this.handleChange} placeholder="Input Lokasi" />
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

export default EditLokasi
