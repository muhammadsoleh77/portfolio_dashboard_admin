import React, { Component } from 'react'
import Select from 'react-select'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import ChannelPoKosong from './ChannelPoKosong'

import API_ENDPOINT from '../../../Endpoint'

export default class ListChannelPo extends Component {

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

    hapusChannelPo(id) {
        API_ENDPOINT.delete('/admin/channel/po/' + id + '/delete')
            .then(res => {
                alert(res.data.message)
                window.location.reload(true)
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
                                                {/* <select class="form-control" value={this.state.selectedIdPO} onChange={this.dropdownChangedPO.bind(this)} style={{ width: '100%' }}>
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
                                        </Link><br /><br />
                                        <div className="table-responsive">
                                        <table className="table table-bordered table-hover text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th className="text-center">ID</th>
                                                    <th className="text-center">Nama MDR</th>
                                                    <th className="text-center">Jml MDR</th>
                                                    <th className="text-center">Keterangan</th>
                                                    <th className="text-center">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.props.dataChannelPo.data.map((el) => (
                                                        <tr key={el.id}>
                                                            <td style={{ textAlign: 'center' }}>{el.id}</td>
                                                            <td style={{ textAlign: 'center' }}>{el.mdrName}</td>
                                                            <td style={{ textAlign: 'center' }}>{el.jmlhMdr}</td>
                                                            <td style={{ textAlign: 'center' }}>{el.keterangan}</td>
                                                            <td style={{ textAlign: 'center' }}>
                                                                <Link className="btn btn-warning" to={"/pengaturan/editChannelPo/" + this.props.idPo + "/" + el.id}>
                                                                    <i className="fa fa-pencil-alt"></i>
                                                                </Link>&nbsp;&nbsp;&nbsp;
                                                                <Button color="danger" onClick={() => this.hapusChannelPo(el.id)}>
                                                                    <i className="fa fa-trash"></i>
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
