import React, { Component } from 'react'
import Select from 'react-select'
import API_ENDPOINT from '../../../Endpoint'
// import Moment from 'moment'

export default class AddChangePrice extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fields: {},
            errors: {},
            selectedTypebus: '',
            dataPo: [],
            dataTrayek: [],
            dataArahTrayek: [],
            dataMaterial: [],

            dataTypeBus: [
                {id:'JA', nama:'JAC'},
                {id:'JR', nama:'JRC'},
                {id:'JG', nama:'TJR'}
            ]
        }
    }

    handleValidation() {
        let fields = this.state.fields
        let fieldTrayek = this.state.idTrayek
        let fieldArahTrayek = this.state.selectedArahTrayek
        let fieldTypeBus = this.state.selectedTypebus
        let fieldPriceCode = this.state.priceCode
        let eror = {}
        let formIsValid = true

        // Validasi trayek
        if (!fieldTrayek) {
            formIsValid = false;
            eror["idTrayek"] = "Tidak boleh kosong";
        }

        // Validasi arah trayek
        if (!fieldArahTrayek) {
            formIsValid = false;
            eror["arahTrayek"] = "Tidak boleh kosong";
        }

        // Validasi nama trayek
        if (!fields["trayek"]) {
            formIsValid = false;
            eror["trayek"] = "Tidak boleh kosong";
        }

        // Validasi tanggalAwal
        if (!fields["tanggalAwal"]) {
            formIsValid = false;
            eror["tanggalAwal"] = "Tidak boleh kosong";
        }

        // Validasi tanggalAkhir
        if (!fields["tanggalAkhir"]) {
            formIsValid = false;
            eror["tanggalAkhir"] = "Tidak boleh kosong";
        }

        // Validasi nominal
        if (!fields["nominal"]) {
            formIsValid = false;
            eror["nominal"] = "Tidak boleh kosong";
        }

        // Validasi typeBus
        if (!fieldTypeBus) {
            formIsValid = false;
            eror["idTypeBus"] = "Tidak boleh kosong";
        }

        // Validasi priceCode
        if (!fieldPriceCode) {
            formIsValid = false;
            eror["priceCode"] = "Tidak boleh kosong";
        }

        this.setState({ errors: eror });
        return formIsValid;

    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    componentDidMount() {
        this.endpointPo()
        this.endpointTrayek()
        // this.endpointTrayekTarif()
    }

    endpointPo() {
        API_ENDPOINT.get('/admin/po/getAll')
        .then(res => {
            this.setState({
                dataPo: res.data
            })
        })
        .catch(error => {
            alert('error');
        })
    }

    endpointTrayek() {
        API_ENDPOINT.get('/admin/bumeltrayek/List/Po/1')
        .then(res => {
            this.setState({
                dataTrayek: res.data
            })
        })
        .catch(error => {
            alert('error');
        })
    }

    // START OPTION TRAYEK
    OptionTrayek = (x) => {
        return {value: x.idTrayek, label: x.nama}
    }

    handleChangeTrayek = (e) => {
        this.setState({idTrayek: e.value})

        // endpointTrayekTarif = () => {
            API_ENDPOINT.get('admin/bumeltrayek/tarif/' + e.value)
            .then(res => {
                console.log(res.data);
                this.setState({
                    dataArahTrayek: res.data
                })
            })
        // }
    }
    // END TRAYEK

    // START ARAH TRAYEK
    OptionArahTrayek = (x) => {
        return {value: x.idTrayekTarif, label: x.lokasiAwalNama + ' - ' + x.lokasiAkhirNama}
    }

    handleChangeArahTrayek = (e) => {
        this.setState({selectedArahTrayek: e.value})
    }
    // END ARAH TRAYEK

    // START OPTION TYPE BUS
    OptionTypeBus = (x) => {
        return {value: x.id, label: x.nama}
    }

    handleChangeTypeBus = (e) => {
        this.setState({selectedTypebus: e.value})

        API_ENDPOINT.get('/id/co/bisku/payload/sap/material?group=' + e.value)
        .then(res => {
            this.setState({
                dataMaterial: res.data.trayek
            })
        })
    }
    // END TYPE BUS

    // START OPTION PRICE CODE
    OptionPriceCode = (x) => {
        return {value: x.PRICECODE, label: x.DESCRIPTION}
    }

    handleChangeTrayekPriceCode = (e) => {
        this.setState({priceCode: e.value})
    }
    // END PRICE CODE

    handleChangePo = (e) => {
        this.setState({
            idPo: e.target.value
        }, () => {console.log(this.state.idPo);})
        // const idPo = e.target.value
        // console.log(idPo);
        // API_ENDPOINT.get('/admin/trayek/listAll/' + idPo)
        // .then(res => {
        //     this.setState({
        //         dataTrayek: res.data
        //     })
        // })
        // .catch(error => {
        //     alert('error');
        // })
    }
    // handleChangeTrayek = (e) => {
    //     this.setState({
    //         idTrayek: e.target.value
    //     })
    // }

    tambahData(e) {
        e.preventDefault();

        const addPrice = {
            idTrayek: this.state.idTrayek,
            idTrayekTarif: this.state.selectedArahTrayek,
            nominal: this.state.fields['nominal'],
            priceCode: this.state.priceCode,
            // tanggalAkhir: Moment(this.state.fields['tanggalAkhir']).format("DD-MM-YYYY"),
            // tanggalAwal: Moment(this.state.fields['tanggalAwal']).format("DD-MM-YYYY"),
            tanggalAwal: this.state.fields['tanggalAwal'],
            tanggalAkhir: this.state.fields['tanggalAkhir'],
            trayek: this.state.fields['trayek']
        }

        if(this.handleValidation()) {
            API_ENDPOINT.post('/admin/sap/price/change', addPrice)
            .then(res => {
                console.log(res);
                alert('Berhasil');
            })
            .catch(error => {
                alert('error');
            })
        }
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
                                    <li className="breadcrumb-item active"><b>Add Price S.A.P</b></li>
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
                                        <h3 class="card-title">Add Price S.A.P</h3>
                                    </div>
                                    <form onSubmit={this.tambahData.bind(this)}>
                                        <div class="card-body">
                                        {/* <div class="form-group">
                                                <label>Pilih P.O</label>
                                                <select className="form-control" name="idPo" onChange={this.handleChangePo}>
                                                    <option selected disabled>Pilih P.O</option>
                                                    {
                                                        this.state.dataPo.map((el) => {
                                                            return(
                                                                <option key={el.idPo} value={el.idPo}>{el.nama}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                                <span style={{ color: 'red' }}> {this.state.errors["idTrayek"]} </span>
                                            </div> */}
                                            <div class="form-group">
                                                <label>Pilih Trayek</label>
                                                <Select
                                                    name="idTrayek"
                                                    placeholder="Pilih Trayek"
                                                    onChange={this.handleChangeTrayek}
                                                    options={this.state.dataTrayek.map(x => this.OptionTrayek(x))}
                                                />
                                                <span style={{ color: 'red' }}> {this.state.errors["idTrayek"]} </span>
                                                {/* <select className="form-control" name="idTrayek" onChange={this.handleChange.bind(this, 'idTrayek')}>
                                                    <option selected disabled>Pilih Trayek</option>
                                                    {
                                                        this.state.dataTrayek.map((el) => {
                                                            return(
                                                                <option key={el.idTrayek} value={el.idTrayek}>{el.nama}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                                <span style={{ color: 'red' }}> {this.state.errors["idTrayek"]} </span> */}
                                            </div>
                                            <div className="form-group">
                                                <label>Pilih Arah Trayek</label>
                                                <Select 
                                                    name="idTrayekTarif"
                                                    placeholder="Pilih Arah Trayek"
                                                    onChange={this.handleChangeArahTrayek}
                                                    options={this.state.dataArahTrayek.map(x => this.OptionArahTrayek(x))}
                                                />
                                                <span style={{ color: 'red' }}> {this.state.errors["arahTrayek"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Trayek</label>
                                                <input className="form-control" type="text" onChange={this.handleChange.bind(this, "trayek")} />
                                                <span style={{ color: 'red' }}> {this.state.errors["trayek"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Tanggal Awal</label>
                                                <input className="form-control" type="date" onChange={this.handleChange.bind(this, "tanggalAwal")} />
                                                <span style={{ color: 'red' }}> {this.state.errors["tanggalAwal"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Tanggal Akhir</label>
                                                <input className="form-control" type="date" onChange={this.handleChange.bind(this, "tanggalAkhir")} />
                                                <span style={{ color: 'red' }}> {this.state.errors["tanggalAkhir"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Nominal Harga</label>
                                                <input className="form-control" type="number" onChange={this.handleChange.bind(this, "nominal")} />
                                                <span style={{ color: 'red' }}> {this.state.errors["nominal"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Pilih Type Bus</label>
                                                <Select
                                                    name="typeBus"
                                                    placeholder="Pilih Type Bus"
                                                    onChange={this.handleChangeTypeBus}
                                                    options={this.state.dataTypeBus.map(x => this.OptionTypeBus(x))}
                                                />
                                                <span style={{ color: 'red' }}> {this.state.errors["idTypeBus"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Price Code (S.A.P)</label>
                                                <Select
                                                    name="priceCode"
                                                    placeholder="Pilih Trayek (Price Code)"
                                                    onChange={this.handleChangeTrayekPriceCode}
                                                    options={this.state.dataMaterial.map(x => this.OptionPriceCode(x))}
                                                />
                                                <span style={{ color: 'red' }}> {this.state.errors["priceCode"]} </span>
                                                {/* <select class="form-control" onChange={this.handleChange.bind(this, 'priceCode')}>
                                                    <option selected disabled>Pilih Price Code</option>
                                                    {
                                                        this.state.dataMaterial.map((el) => {
                                                            return(
                                                                <option value={el.PRICECODE}>{el.DESCRIPTION}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                                <span style={{ color: 'red' }}> {this.state.errors["priceCode"]} </span> */}
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
