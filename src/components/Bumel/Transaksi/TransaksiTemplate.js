import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class TransaksiTemplate extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid header-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-left">
                                    <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                                    <li className="breadcrumb-item active"><b>Transaksi</b></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">
                    <div class="col-md-12">
                        <div class="card" >
                            <div class="card-body" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                {/* <div class="col-6 main-menu" onClick={this.clickBelumBayar}> */}
                                <div class="col-6 main-menu">
                                    <Link to="/bumel/transaksiTunai">
                                        <div class="menu">
                                            Tunai
                                            </div>
                                    </Link>
                                </div>
                                {/* <div class="col-6 main-menu" onClick={this.clickSudahBayar}> */}
                                <div class="col-6 main-menu">
                                    <Link to="/bumel/transaksiNonTunai">
                                        <div class="menu">
                                            Non Tunai
                                            </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
