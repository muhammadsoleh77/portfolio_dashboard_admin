import React, { Component } from 'react'
import Select from 'react-select'

import CrewKosong from './CrewKosong'
import ListCrew from './ListCrew'

import API_ENDPOINT from '../../../Endpoint'

export default class Loket extends Component {

    state = {
        dataPo: [],
        dataIsi: false,
        dataKosong: false
    }

    componentDidMount() {
        API_ENDPOINT.get('/admin/po/getAll')
        .then(res => {
            console.log(res);
            this.setState({
                dataPo: res.data
            })
        })
    }

    dropdownChanged(e) {
        this.setState({ selectedId: e.target.value })
    }

    OptionPo = (x) => {
        return {value: x.idPo, label: x.nama}
    }

    handleChangePo = (e) => {
        this.setState({selectedId: e.value})
    }

    onClickOption(selectedId) {
        // e.preventDefault()

        const paramCrew = {
            idPo: selectedId,
            orderBy: "id",
            pageNo: 0,
            pageRow: 100
        }

        API_ENDPOINT.post('/admin/crew/list', paramCrew)
            .then(res => {
                this.setState({
                    dataIsi: true,
                    dataCrew: res.data.content,
                    idPo: selectedId
                })
            })
            .catch(error => {
                this.setState({
                    dataKosong: true,
                    idPo: selectedId
                })
            })
    }

    render() {
        if(this.state.dataKosong) {
            return(
                <CrewKosong idPo={this.state.idPo} />
            )
        } else if(this.state.dataIsi) {
            return (
                <ListCrew dataCrew={this.state.dataCrew} dataPo={this.state.dataPo} idPo={this.state.idPo} />
            )
        }

        return (
            <div>
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="container-fluid header-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-left">
                                        <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                                        <li className="breadcrumb-item active"><b>Crew</b></li>
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
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <Select
                                                        name="po"
                                                        placeholder="Pilih P.O"
                                                        onChange={this.handleChangePo}
                                                        options={this.state.dataPo.map(x => this.OptionPo(x))}
                                                    /><br/>
                                                    {/* <select class="form-control" value={this.state.selectedId} onChange={this.dropdownChanged.bind(this)} style={{ width: '100%' }}>
                                                        <option disabled selected>Pilih P.O</option>
                                                        {
                                                            this.state.dataPo.map((el) => {
                                                                return (
                                                                    <option key={el.idPo} value={el.idPo}>{el.nama}</option>
                                                                )
                                                            })
                                                        }
                                                    </select><br/> */}
                                                </div>
                                                <div className="col-md-3">
                                                    <button type="submit" class="btn btn-primary" onClick={() => this.onClickOption (this.state.selectedId)}>
                                                        <i className="fa fa-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
