import React, { Component } from 'react'
// import { Row, Col, Card, CardBody, Form, Label, Input, Button } from 'reactstrap'

import API_ENDPOINT from '../../../Endpoint'

export default class EditChannel extends Component {

    state = {
        id: '',
        isCashless: false,
        isPercentage: false,
        isValid: '',
        jmlhMdr: '',
        keterangan: '',
        mdrName: '',
        // showRadio: false
    }

    componentDidMount = () => {
        const id = this.props.match.params.idChannel

        API_ENDPOINT.get('/admin/channel/' + id)
            .then(res => {
                console.log(res);
                this.setState({
                    id: res.data.id,
                    isCashless: res.data.isCashless,
                    isPercentage: res.data.isPercentage,
                    isValid: res.data.isValid,
                    jmlhMdr: res.data.jmlhMdr,
                    keterangan: res.data.keterangan,
                    mdrName: res.data.mdrName
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

        const paramEditChannel = {
            id: this.props.match.params.idChannel,
            isCashless: this.state.isCashless,
            isPercentage: this.state.isPercentage,
            isValid: this.state.isValid,
            jmlhMdr: this.state.jmlhMdr,
            keterangan: this.state.keterangan,
            mdrName: this.state.mdrName
        }

        API_ENDPOINT.put('/admin/channel/edit', paramEditChannel)
            .then(res => {
                console.log(res);
                alert(res.data.message)
                this.props.history.push('/pengaturan/channel')
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
                                    <li className="breadcrumb-item active"><b>Edit Channel</b></li>
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
                                        <h3 class="card-title">Edit Channel</h3>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div class="card-body">
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
