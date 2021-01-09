import React, { Component } from 'react'
import Select from 'react-select'
// import API_ENDPOINT from '../../../../Endpoint'

export default class TrayekAdd extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // dataPo: [],
            // selectedValue: null,
            // dataMaterial: [],
            // materials: {}
        }
    }

    // componentDidMount(){
    //     this.EndpointPo()
    // }

    // EndpointPo() {
    //     API_ENDPOINT.get('/admin/po/getAll')
    //     .then(res => {
    //         console.log(res);
    //         this.setState({
    //             dataPo: res.data
    //         })
    //     })
    // }

    // handleChangePo = (event) => {
    //     this.setState({
    //         selectedValue: event.target.value
    //     }, () => {console.log(this.state.selectedValue);})
    // }

    // changeSapTypeBus = (e) => {
    //     const idSap = e.target.value;
    //     API_ENDPOINT.get('/id/co/bisku/payload/sap/material?group=' + idSap)
    //     .then(res => {
    //         this.setState({
    //             dataMaterial: res.data.trayek
    //         })
    //     })
    //     .catch(error => {
    //         alert('error SAP Material')
    //     })
    // }

    // changeSapMaterial = (e) => {
    //     const material = e.target.value
    //     for(var i=0; i<this.state.dataMaterial.length; i++) {
    //         if(material === this.state.dataMaterial[i].MATERIAL) {
    //             var c = this.state.dataMaterial[i]
    //             this.setState({
    //                 materials: c
    //             })
    //         }
    //     }
    // }

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {

        const handleChange = this.props.handleChange
        const handleChangePenumpang = this.props.handleChangePenumpang
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
                                                <label>Pilih P.O</label>
                                                <Select
                                                    name="po"
                                                    placeholder="Pilih P.O"
                                                    value={this.props.dataPo.map(x => this.props.OptionPo(x)).filter(option => option.value === values.idPo)}
                                                    onChange={this.props.handleChangePo}
                                                    options={this.props.dataPo.map(x => this.props.OptionPo(x))}
                                                />
                                                {/* <select class="form-control" name="idPo" style={{ width: '100%' }} onChange={handleChange('idPo')} value={values.idPo}>
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
                                            {/* {
                                                values.idPo === 1 && (
                                                    <div class="form-group">
                                                        <label>Pilih TypeBus</label>
                                                        <Select
                                                            name="typeBus"
                                                            placeholder="Pilih Type Bus"
                                                            value={this.props.dataTypeBus.map(x => this.props.OptionTypeBus(x)).filter(option => option.value === values.sapType)}
                                                            onChange={this.props.handleChangeTypeBus}
                                                            options={this.props.dataTypeBus.map(x => this.props.OptionTypeBus(x))}
                                                        />
                                                    </div>
                                                )
                                            } */}
                                            {/* {
                                                values.idPo === 1 && (
                                                    <div class="form-group">
                                                        <label>Pilih S.A.P Material</label>
                                                        <Select
                                                            name="material"
                                                            placeholder="Pilih Material S.A.P"
                                                            value={this.props.dataMaterial.map(x => this.props.OptionMaterial(x)).filter(option => option.value === values.sapMaterial)}
                                                            onChange={this.props.handleChangeMaterial}
                                                            options={this.props.dataMaterial.map(x => this.props.OptionMaterial(x))}
                                                        />
                                                    </div>
                                                )
                                            } */}
                                            <div class="form-group">
                                                <label>Nama Trayek</label>
                                                <input className="form-control" type="text" name="nama" onChange={handleChange('nama')} value={values.nama} />
                                                {/* <span style={{ color: 'red' }}> {this.state.errors["mdrName"]} </span> */}
                                            </div>
                                            <div class="form-group">
                                                <label>Kode Trayek</label>
                                                <input className="form-control" type="text" name="kode" onChange={handleChange('kode')} value={values.kode} />
                                                {/* <span style={{ color: 'red' }}> {this.state.errors["keterangan"]} </span> */}
                                            </div>
                                            {/* <div class="form-group">
                                                <label>Keterangan</label>
                                                <input className="form-control" type="text" name="keterangan" onChange={handleChange('keterangan')} value={values.keterangan} />
                                            </div> */}
                                            <div class="form-group">
                                                <label>Kontak</label>
                                                <input className="form-control" type="number" name="kontak" onChange={handleChange('kontak')} value={values.kontak} />
                                                {/* <span style={{ color: 'red' }}> {this.state.errors["keterangan"]} </span> */}
                                            </div>
                                            <div class="form-group">
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
                                            </div>
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
