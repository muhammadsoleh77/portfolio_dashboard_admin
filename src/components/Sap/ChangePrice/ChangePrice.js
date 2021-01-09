import React, { Component } from 'react'

import ListChangePrice from './ListChangePrice'
import ChangePriceKosong from './ChangePriceKosong'

import API_ENDPOINT from '../../../Endpoint'

export default class ChangePrice extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSap: [],

            dataIsi: false,
            dataKosong: false
        }
    }

    componentDidMount() {
        this.getSapPrice();
    }

    getSapPrice() {
        API_ENDPOINT.get('/admin/sap/price/list')
        .then(res => {
            console.log(res);
            this.setState({
                dataIsi: true,
                dataSap: res.data
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
                                    <li className="breadcrumb-item active"><b>S.A.P Price</b></li>
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
                                        <h3 className="card-title">S.A.P Price</h3>
                                    </div>
                                    <div className="card-body">
                                        {
                                            this.state.dataIsi ? <ListChangePrice dataSap={this.state.dataSap} /> : this.state.dataKosong ? <ChangePriceKosong /> : null
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
