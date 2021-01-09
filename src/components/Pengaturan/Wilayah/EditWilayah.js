import React, { Component } from 'react'
// import { Redirect, Link } from 'react-router-dom'
import API_ENDPOINT from '../../../Endpoint'

export class EditWilayah extends Component {

    state = {
        id: '',
        namaWilayah: ''
    }

    componentDidMount = () => {
        const id = this.props.match.params.idWil        

        API_ENDPOINT.get('/admin/wilayah/' + id)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    namaWilayah: res.data.namaWilayah
                })
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const paramEditProvinsi = {
            idProvinsi: this.props.match.params.idProv,
            idWilayah: this.props.match.params.idWil,
            namaWilayah: this.state.namaWilayah
        }

        API_ENDPOINT.put('/admin/wilayah/edit', paramEditProvinsi)
            .then(res => {
                // console.log(res);
                alert(res.data.message)
                this.props.history.push('/pengaturan/wilayah')
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
                                        <h3 class="card-title">Edit Wilayah</h3>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label>Nama Wilayah</label>
                                                <input className="form-control" type="text" name="namaWilayah" value={this.state.namaWilayah} onChange={this.handleChange} placeholder="Input Wilayah" />
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

export default EditWilayah
