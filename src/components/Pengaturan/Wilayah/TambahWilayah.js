import React, { Component } from 'react'
// import { Redirect, Link } from 'react-router-dom'
import API_ENDPOINT from '../../../Endpoint'

export class TambahWilayah extends Component {

    state = {
        // id: '',
        nama: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()        

        const paramAddWilayah = {
            idProvinsi: this.props.match.params.id,
            namaWilayah: this.state.nama
        }
        // console.log(this);

        API_ENDPOINT.post('/admin/wilayah/add', paramAddWilayah)
            .then(res => {
                alert(res.data.message)
                this.props.history.push('/pengaturan/wilayah')
            })
            .catch(error => {
                // if(error === 500) {
                //     alert('Internal Server Error')                    
                // }                
                alert('Internal Server Error')
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
                            <li className="breadcrumb-item active"><b>Tambah Wilayah</b></li>
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
                                        <h3 class="card-title">Tambah Wilayah</h3>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label>Nama Wilayah</label>
                                                <input className="form-control" type="text" name="nama" value={this.state.nama} onChange={this.handleChange} />
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

export default TambahWilayah
