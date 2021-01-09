import React, { Component } from 'react'
// import Select from 'react-select'

export default class TrayekAdd extends Component {

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    
    render() {

        const handleChange = this.props.handleChange
        // const handleChangePenumpang = this.props.handleChangePenumpang
        const {values} = this.props

        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid header-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-left">
                                    <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                                    <li className="breadcrumb-item active"><b>Tambah Trayek</b></li>
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
                                        <h3 class="card-title">Tambah Trayek</h3>
                                    </div>
                                    <form>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label>Tanggal</label>
                                                <input className="form-control" type="date" name="tanggal" onChange={handleChange('tanggal')} value={values.tanggal} />
                                            </div>
                                            {/* <div class="form-group">
                                                <label>Pilih P.O</label>
                                                <Select
                                                    name="po"
                                                    placeholder="Pilih P.O"
                                                    value={this.props.dataPo.map(x => this.props.OptionPo(x)).filter(option => option.value === values.idPo)}
                                                    onChange={this.props.handleChangePo}
                                                    options={this.props.dataPo.map(x => this.props.OptionPo(x))}
                                                />
                                            </div> */}
                                            {/* <div class="form-group">
                                                <label>Nama Trayek</label>
                                                <input className="form-control" type="text" name="nama" onChange={handleChange('nama')} value={values.nama} />
                                            </div> */}
                                            {/* <div class="form-group">
                                                <label>Kode Trayek</label>
                                                <input className="form-control" type="text" name="kode" onChange={handleChange('kode')} value={values.kode} />
                                            </div> */}
                                            {/* <div class="form-group">
                                                <label>Kontak</label>
                                                <input className="form-control" type="number" name="kontak" onChange={handleChange('kontak')} value={values.kontak} />
                                            </div> */}

                                            {/* <div class="form-group">
                                                <label>Penumpang</label>
                                                <div className="radio">
                                                    <input
                                                        type="radio"
                                                        name="isPenumpang" 
                                                        value="true"
                                                        onChange={handleChangePenumpang('isPenumpang')}
                                                        checked={values.isPenumpang}
                                                        /> Ya &nbsp;&nbsp;&nbsp;
                                                    <input
                                                        type="radio"
                                                        name="isPenumpang" 
                                                        value="false"
                                                        onChange={handleChangePenumpang('isPenumpang')}
                                                        checked={!values.isPenumpang}
                                                        /> Tidak &nbsp;&nbsp;&nbsp;
                                                </div>
                                            </div> */}
                                        </div>

                                        <div class="card-footer">
                                            <button onClick={this.saveAndContinue} class="btn btn-primary pull-right">Next</button>
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
