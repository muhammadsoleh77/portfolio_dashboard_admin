import React, { Component } from 'react'
// import { Row, Col, Card, CardBody } from 'reactstrap'

import API_ENDPOINT from '../../../Endpoint'

import ListPo from './ListPo'
import PoKosong from './PoKosong'

export default class Po extends Component {

    state = {
        dataIsi: false,
        dataKosong: false
    }

    componentDidMount() {
        const paramPo = {
            orderBy: "idPo",
            pageNo: 0,
            pageRow: 100
        }

        API_ENDPOINT.post('/admin/po/list', paramPo)
            .then(res => {
                // console.log(res);
                this.setState({
                    dataPo: res.data.content,
                    dataIsi: true
                })
            })
            .catch(error => {
                this.setState({
                    dataKosong: true
                })
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
                                    <li className="breadcrumb-item active"><b>P.O</b></li>
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
                                        <h3 className="card-title">P.O</h3>
                                    </div>
                                    <div className="card-body">
                                        {
                                            this.state.dataIsi ? <ListPo dataPo={this.state.dataPo} /> : this.state.dataKosong ? <PoKosong /> : null
                                        }
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
