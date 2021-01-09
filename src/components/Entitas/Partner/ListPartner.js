import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

import API_ENDPOINT from '../../../Endpoint'

export default class ListPartner extends Component {

    hapusPartner(idPartner) {
        API_ENDPOINT.delete('/admin/partner/' + idPartner + '/delete')
        .then(res => {
            console.log(res);
            alert(res.data.message)
            window.location.reload(true)
        })
    }

    render() {
        return (
            <div>
                <Link className="btn btn-primary pull-right" to={"/entitas/tambahPartner"}>
                    <i className="fa fa-plus"></i> Tambah Partner
                </Link><br/><br/><br/>
                <div className="table-responsive">
                <table className="table table-bordered table-hover text-nowrap">
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>ID</th>
                            <th style={{ textAlign: 'center' }}>Nama Partner</th>
                            <th style={{ textAlign: 'center' }}>Telepon</th>
                            <th style={{ textAlign: 'center' }}>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.dataPartner.map((el) => (
                                <tr key={el.idPo}>
                                    <td style={{ textAlign: 'center' }}>{el.idPartner}</td>
                                    <td style={{ textAlign: 'center' }}>{el.nama}</td>
                                    <td style={{ textAlign: 'center' }}>{el.telpon}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <Link className="btn btn-warning" to={"/entitas/editPartner/" + el.idPartner}>
                                            <i className="fa fa-pencil-alt"></i>
                                        </Link>&nbsp;&nbsp;&nbsp;
                                        <Button color="danger" onClick={() => this.hapusPartner(el.idPartner)}>
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
        )
    }
}
