import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
// import { Col, Row, Card, CardBody } from 'reactstrap'

import API_ENDPOINT from '../../../Endpoint'

import ListTrayek from './ListTrayek'
import TrayekKosong from './TrayekKosong'

export default class Trayek extends Component {

    state = {
        dataKosong: false,
        dataIsi: false,
    }

    componentDidMount() {

        // const paramTrayek = {
        //     orderBy: 'id',
        //     pageNo: 0,
        //     pageRow: 100
        // }

        API_ENDPOINT.post('/admin/bumeltrayek/List?orderBy=id&pageNo=0&pageRow=100')
            .then(res => {
                // console.log(res);
                this.setState({
                    dataTrayek: res.data,
                    dataIsi: true
                })
            })
            .catch(error => {
                // alert(error)
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
                                    <div className="card-body">
                                        {
                                            this.state.dataIsi ? <ListTrayek dataTrayek={this.state.dataTrayek} /> : this.state.dataKosong ? <TrayekKosong /> : null
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
