import React, { Component } from 'react'

import PartnerKosong from './PartnerKosong'
import ListPartner from './ListPartner'
import API_ENDPOINT from '../../../Endpoint'

export default class Partner extends Component {

    state = {
        dataPartner: [],
        dataIsi: false,
        dataKosong: false
    }

    componentDidMount() {
        const paramPartner = {
            orderBy: "idPartner",
            pageNo: 0,
            pageRow: 100
        }

        API_ENDPOINT.post('/admin/partner/list', paramPartner)
            .then(res => {
                console.log(res);
                this.setState({
                    dataPartner: res.data.content,
                    dataIsi: true
                })
            })
            .catch(error => {
                console.log(error);
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
                                    <li className="breadcrumb-item active"><b>Partner</b></li>
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
                                        <h3 className="card-title">Partner</h3>
                                    </div>
                                    <div className="card-body">
                                        {
                                            this.state.dataIsi ? <ListPartner dataPartner={this.state.dataPartner} /> : this.state.dataKosong ? <PartnerKosong /> : null
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
