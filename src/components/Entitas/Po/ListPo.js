import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import API_ENDPOINT from '../../../Endpoint'

export default class ListPo extends Component {

    hapusPo(idPo) {
        API_ENDPOINT.delete('/admin/po/' + idPo + '/delete')
        .then(res => {
            console.log(res);
            alert(res.data.message)
            window.location.reload(true)
        })
    }

    render() {
        return (
            <div>
                <Link className="btn btn-primary pull-right" to={"/entitas/tambahPo"}>
                    <i className="fa fa-plus"></i> Tambah PO
                </Link><br/><br/><br/>
                <div className="table-responsive">
                <table className="table table-bordered table-hover text-nowrap">
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>ID</th>
                            <th style={{ textAlign: 'center' }}>Nama PO</th>
                            <th style={{ textAlign: 'center' }}>Telepon</th>
                            <th style={{ textAlign: 'center' }}>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.dataPo.map((el) => (
                                <tr key={el.idPo}>
                                    <td style={{ textAlign: 'center' }}>{el.idPo}</td>
                                    <td style={{ textAlign: 'center' }}>{el.nama}</td>
                                    <td style={{ textAlign: 'center' }}>{el.telpon}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <Link className="btn btn-warning" to={"/entitas/editPo/" + el.idPo}>
                                            <i className="fa fa-pencil-alt"></i>
                                        </Link>&nbsp;&nbsp;&nbsp;
                                        <Button color="danger" onClick={() => this.hapusPo(el.idPo)}>
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
