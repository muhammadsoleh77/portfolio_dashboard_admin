import React, { Component } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'

import API_ENDPOINT from '../../../Endpoint'

import ListChannelPo from './ListChannelPo'

export default class ChannelPoKosong extends Component {

    state = {
        dataPo: [],
        dataChannel: [],
        dataKosong: false,
        dataIsi: false,
        idPo: ''
    }

    componentDidMount() {
        const paramPo = {
            orderBy: "idPo",
            pageNo: 0,
            pageRow: 10
        }

        API_ENDPOINT.post('/admin/po/list', paramPo)
        .then(res => {
            console.log(res);            
            this.setState({
                dataPo: res.data.content
            })
        })
    }

    dropdownChangedPO(e){
        this.setState({selectedIdPO: e.target.value});       
    }

    MakeOption = (x) => {
        return {value: x.idPo, label: x.nama}
    }

    handleChangeSelect = (e) => {
        this.setState({selectedIdPO: e.value})
    }

    onClickOption(selectedIdPO) {
        // e.preventDefault()

        const paramChannel = {
            idPo: selectedIdPO,
            orderBy: "idPo",
            pageNo: 0,
            pageRow: 10
        }

        API_ENDPOINT.post('/admin/channel/po/list', paramChannel)
        .then(res => {
            // console.log(res);
            this.setState({
                dataIsi: true,
                dataChannelPo: res.data,
                // idProvinsi: selectedId
            })
        })
        .catch(error => {
            // alert(error)
            this.setState({
                dataKosong: true,
                // idProvinsi: selectedId
            })
        })
    }

    render() {

        if(this.state.dataKosong) {
            return(
                <ChannelPoKosong idPo={this.state.selectedIdPO} idChannel={this.state.selectedIdChannel} />
            )
        } else if(this.state.dataIsi) {
            return (
                <ListChannelPo idPo={this.state.selectedIdPO} dataChannelPo={this.state.dataChannelPo} />
            )
        }

        return (
            // <div>
            //     <Link className="btn btn-warning pull-right" to={"/pengaturan/tambahChannelPo/" + this.props.idPo}>
            //         Tambah Channel PO
            //     </Link><br/><br/>
            //     <p><strong>DATA CHANNEL PO KOSONG</strong></p>
            // </div>

            <div>
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="container-fluid header-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-left">
                                        <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                                        <li className="breadcrumb-item active"><b>List Channel P.O</b></li>
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
                                                        onChange={this.handleChangeSelect}
                                                        options={this.state.dataPo.map(x => this.MakeOption(x))}
                                                    /><br/>
                                                    {/* <select className="form-control" value={this.state.selectedIdPO} onChange={this.dropdownChangedPO.bind(this)}>
                                                        <option disabled selected>Pilih P.O</option>
                                                        {
                                                            this.state.dataPo.map((el) => {
                                                                return (
                                                                    <option key={el.idPo} value={el.idPo}>{el.nama}</option>
                                                                )
                                                            })
                                                        }
                                                    </select><br /> */}
                                                </div>
                                                <div className="col-md-3">
                                                    <button type="submit" class="btn btn-primary" onClick={() => this.onClickOption(this.state.selectedIdPO)}>
                                                        <i className="fa fa-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <br/><Link className="btn btn-primary pull-right" to={"/pengaturan/tambahChannelPo/" + this.props.idPo}>
                                                Tambah Channel P.O
                                            </Link><br/><br/>
                                            <p><strong>DATA CHANNEL P.O KOSONG</strong></p>
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
