import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import API_ENDPOINT from '../../../Endpoint'

export default class ListTrayek extends Component {

    hapusTrayek(id) {
        API_ENDPOINT.delete('/admin/bumeltrayek/' + id + '/delete')
        .then(res => {
            // console.log(res);
            alert(res.data.message)
            window.location.reload(true)
        })
        .catch(error => {
            // console.log(error.response.data);
            alert(error.response.data.message)
        })
    }

    render() {        
        return (
            <div>
                <Link className="btn btn-primary pull-right" to={"/bumel/tambahTrayek"}>
                    Tambah Trayek
                </Link><br/><br/>
                <div className="table-responsive">
                <table className="table table-bordered table-hover text-nowrap">
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>ID</th>
                            <th style={{ textAlign: 'center' }}>Kode Trayek</th>
                            <th style={{ textAlign: 'center' }}>Nama Trayek</th>
                            <th style={{ textAlign: 'center' }}>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.dataTrayek.map((el) => {
                                return(
                                    <tr key={el.id}>
                                        <td style={{ textAlign: 'center' }}>{el.idTrayek}</td>
                                        <td style={{ textAlign: 'center' }}>{el.kodeTrayek}</td>
                                        <td style={{ textAlign: 'center' }}>{el.trayek}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            <Link className="btn btn-warning" to={"/bumel/editTrayek/" + el.idTrayek}>
                                                <i className="fa fa-pencil-alt"></i>
                                            </Link>&nbsp;&nbsp;&nbsp;
                                            <Button color="danger" onClick={() => this.hapusTrayek(el.idTrayek)}>
                                                <i className="fa fa-trash"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}
