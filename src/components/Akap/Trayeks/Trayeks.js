import React, { Component } from 'react'
import Select from 'react-select'
// import API_ENDPOINT from '../../../Endpoint'
import axios from 'axios'

// import ListTrayekAkap from './ListTrayekAkap'
// import TrayekKosongAkap from './TrayekKosongAkap'

export default class Trayeks extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tanggal: '',
            dataCitiesAsal: [],
            dataCitiesTujuan: [],
            cityAsal: '',
            cityTujuan: ''
        }
    }

    componentDidMount = () => {
        this.endpointCitiesAsal()
        this.endpointCitiesTujuan()
    }

    endpointCitiesAsal = () => {
        axios.get('http://52.163.218.136:8080/allCities')
            .then(res => {
                this.setState({
                    dataCitiesAsal: res.data.data
                })
            })
    }

    endpointCitiesTujuan = () => {
        axios.get('http://52.163.218.136:8080/allCities')
            .then(res => {
                this.setState({
                    dataCitiesTujuan: res.data.data
                })
            })
    }

    // START OPTION ASAL
    OptionCitiesAsal = (x) => {
        return { value: x.cityID, label: x.cityName }
    }

    handleChangeAsal = (e) => {
        this.setState({ cityAsal: e.value })
    }
    // END OPTION ASAL

    // START OPTION TUJUAN
    OptionCitiesTujuan = (x) => {
        return { value: x.cityID, label: x.cityName }
    }

    handleChangeTujuan = (e) => {
        this.setState({ cityTujuan: e.value })
    }
    // END OPTION TUJUAN

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    proses = (e) => {
        e.preventDefault()

        const paramCity = {
            startId: this.state.cityAsal,
            destinationId: this.state.cityTujuan,
            tanggal: this.state.tanggal
        }

        console.log(paramCity);

        axios.post('http://52.163.218.136:8080/availableRoutes/', paramCity)
        .then(res => {
            this.setState({
                dataList: res.data
            })
        })
        .catch(error => {
            alert('Tidak Ditemukan')
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
                                    <li className="breadcrumb-item active"><b>Trayek</b></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Trayek</h3>
                                    </div>
                                    {/* <div className="card-body">
                                        {
                                            this.state.dataIsi ? <ListTrayek dataTrayek={this.state.dataTrayek} /> : this.state.dataKosong ? <TrayekKosong /> : null
                                        }
                                    </div> */}
                                    <form>
                                        <div className="card-body">
                                            <div class="form-group">
                                                {/* <label>Telepon</label> */}
                                                <div className="row">
                                                    <div className="col-6">
                                                        <label>Asal</label>
                                                        {/* <input className="form-control" type="number" onChange={this.handleChange.bind(this, "ponsel1")} /> */}
                                                        {/* <span style={{ color: 'red' }}> {this.state.errors["ponsel1"]} </span> */}
                                                        <Select
                                                            name="asal"
                                                            placeholder="Pilih Asal"
                                                            onChange={this.handleChangeAsal}
                                                            options={this.state.dataCitiesAsal.map(x => this.OptionCitiesAsal(x))}
                                                        />
                                                    </div>
                                                    <div className="col-6">
                                                        <label>Tujuan</label>
                                                        {/* <input className="form-control" type="number" onChange={this.handleChange.bind(this, "ponsel2")} /> */}
                                                        {/* <span style={{ color: 'red' }}> {this.state.errors["ponsel2"]} </span> */}
                                                        <Select
                                                            name="asal"
                                                            placeholder="Pilih Tujuan"
                                                            onChange={this.handleChangeTujuan}
                                                            options={this.state.dataCitiesTujuan.map(x => this.OptionCitiesTujuan(x))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                {/* <label>Telepon</label> */}
                                                <div className="row">
                                                    <div className="col-6">
                                                        <label>Tanggal</label>
                                                        <input className="form-control" type="date" name="tanggal" onChange={this.handleChange} />
                                                        {/* <span style={{ color: 'red' }}> {this.state.errors["ponsel1"]} </span> */}
                                                    </div>
                                                    <div className="col-2">
                                                        <label>---</label>
                                                        <div className="row">
                                                            &nbsp;&nbsp;<button className="btn btn-dark" onClick={this.proses.bind(this)}>Tampil</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
