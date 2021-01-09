import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import API_ENDPOINT from '../../../Endpoint'

export default class ListChannel extends Component {

    hapusChannel(id) {
        API_ENDPOINT.delete('/admin/channel/' + id + '/delete')
        .then(res => {
            alert(res.data.message)
            window.location.reload(true)
        })
    }

    render() {        
        return (
            <div>
                <Link className="btn btn-primary pull-right" to={"/pengaturan/tambahChannel"}>
                    Tambah Channel
                </Link><br/><br/>
                <div className="table-responsive">
                <table className="table table-bordered table-hover text-nowrap">
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>ID</th>
                            <th style={{ textAlign: 'center' }}>Nama MDR</th>
                            <th style={{ textAlign: 'center' }}>Jml MDR</th>
                            <th style={{ textAlign: 'center' }}>Keterangan</th>
                            <th style={{ textAlign: 'center' }}>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.dataChannel.map((el) => (
                                <tr key={el.id}>
                                    <td style={{ textAlign: 'center' }}>{el.id}</td>
                                    <td style={{ textAlign: 'center' }}>{el.mdrName}</td>
                                    <td style={{ textAlign: 'center' }}>{el.jmlhMdr}</td>
                                    <td style={{ textAlign: 'center' }}>{el.keterangan}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <Link className="btn btn-warning" to={"/pengaturan/editChannel/" + el.id}>
                                            <i className="fa fa-pencil-alt"></i>
                                        </Link>&nbsp;&nbsp;&nbsp;
                                        <Button color="danger" onClick={() => this.hapusChannel(el.id)}>
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
