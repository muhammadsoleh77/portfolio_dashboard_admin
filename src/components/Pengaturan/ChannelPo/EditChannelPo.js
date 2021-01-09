import React, { Component } from 'react'
// import { Row, Col, Card, CardBody, Form, Label, Input, Button } from 'reactstrap'

import API_ENDPOINT from '../../../Endpoint'

export default class EditChannelPo extends Component {

    state = {
        id: '',
        idPo: '',
        isCashless: false,
        isPercentage: false,
        isValid: '',
        jmlhMdr: '',
        keterangan: '',
        mdrName: '',
        channelid: '',
        // showRadio: false,
        dataChannel: [],
    }

    componentDidMount = () => {
        const id = this.props.match.params.idChannelPo

        API_ENDPOINT.get('/admin/channel/po/' + id)
            .then(res => {
                console.log(res);
                this.setState({
                    id: res.data.id,
                    isCashless: res.data.isCashless,
                    isPercentage: res.data.isPercentage,
                    isValid: res.data.isValid,
                    jmlhMdr: res.data.jmlhMdr,
                    keterangan: res.data.keterangan,
                    mdrName: res.data.mdrName,
                    channelid: res.data.channelid
                })
            })
    }

    componentWillMount = () => {
        API_ENDPOINT.get('/admin/channel/list')
        .then(res => {
            console.log(res);            
            this.setState({
                dataChannel: res.data
            })
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleChangeCashless = (e) => {
        this.setState({ 
            [e.target.name]: !this.state.isCashless
        })
    }

    handleChangePrecentage = (e) => {
        this.setState({
            [e.target.name]: !this.state.isPercentage
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const paramEditChannelPo = {
            channelId: this.state.channelid,
            id: this.props.match.params.idChannelPo,
            idPo: this.props.match.params.idPo,
            isCashless: this.state.isCashless,
            isPercentage: this.state.isPercentage,
            isValid: this.state.isValid,
            jmlhMdr: this.state.jmlhMdr,
            keterangan: this.state.keterangan,
            mdrName: this.state.mdrName
        }

        API_ENDPOINT.put('/admin/channel/po/edit', paramEditChannelPo)
            .then(res => {
                console.log(res);
                alert(res.data.message)
                this.props.history.push('/pengaturan/channelPo')
            })
            .catch(error => {
                alert('Error, harap input semua data')
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
                                    <li className="breadcrumb-item active"><b>Edit Channel P.O</b></li>
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
                                        <h3 class="card-title">Edit Channel P.O</h3>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label>Pilih Channel</label>
                                                <select class="form-control" name="channelid" value={this.state.channelid} onChange={this.handleChange} style={{ width: '100%' }}>
                                                    <option disabled selected>Pilih Channel</option>
                                                    {
                                                        this.state.dataChannel.map((el) => {
                                                            return (
                                                                <option key={el.id} value={el.id}>{el.mdrName}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>Nama MDR</label>
                                                <input className="form-control" name="mdrName" type="text" value={this.state.mdrName} onChange={this.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label>Keterangan</label>
                                                <input className="form-control" name="keterangan" type="text" value={this.state.keterangan} onChange={this.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label>Cashless</label>
                                                <div className="radio">
                                                    <input
                                                        type="radio"
                                                        name="isCashless"
                                                        value="true"
                                                        checked={this.state.isCashless}
                                                        onChange={this.handleChangeCashless} /> Ya &nbsp;&nbsp;&nbsp;
                                                    <input
                                                        type="radio"
                                                        name="isCashless"
                                                        value="false"
                                                        checked={!this.state.isCashless}
                                                        onChange={this.handleChangeCashless} /> Tidak &nbsp;&nbsp;&nbsp;
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Presentasi</label>
                                                <div className="radio">
                                                    <input
                                                        type="radio"
                                                        name="isPercentage"
                                                        value="true"
                                                        checked={this.state.isPercentage}
                                                        onChange={this.handleChangePrecentage} /> Ya &nbsp;&nbsp;&nbsp;
                                                    <input
                                                        type="radio"
                                                        name="isPercentage"
                                                        value="false"
                                                        checked={!this.state.isPercentage}
                                                        onChange={this.handleChangePrecentage} /> Tidak &nbsp;&nbsp;&nbsp;
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Jumlah MDR</label>
                                                <input className="form-control" type="number" name="jmlhMdr" value={this.state.jmlhMdr} onChange={this.handleChange} />
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
