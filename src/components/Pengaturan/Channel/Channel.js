import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
// import { Col, Row, Card, CardBody } from 'reactstrap'

import API_ENDPOINT from '../../../Endpoint'

import ListChannel from './ListChannel'
import ChannelKosong from './ChannelKosong'

export default class Channel extends Component {
    state = {
        dataKosong: false,
        dataIsi: false,
    }

    componentDidMount() {

        API_ENDPOINT.get('/admin/channel/list')
            .then(res => {
                // console.log(res);
                this.setState({
                    dataChannel: res.data,
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
                                    <li className="breadcrumb-item active"><b>Channel</b></li>
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
                                        <h3 className="card-title">Channel</h3>
                                    </div>
                                    <div className="card-body">
                                        {
                                            this.state.dataIsi ? <ListChannel dataChannel={this.state.dataChannel} /> : this.state.dataKosong ? <ChannelKosong /> : null
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
