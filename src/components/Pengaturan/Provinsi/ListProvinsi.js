import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

import API_ENDPOINT from '../../../Endpoint'

const ListProvinsi = ({dataProvinsi}) => {

    function hapusProvinsi(id) {
        API_ENDPOINT.delete('/admin/provinsi/' + id + '/delete')
        .then(res => {
            // console.log(res);
            alert(res.data.message)
            window.location.reload(true)
        })
    }

    return (
        <div className="table-responsive p-0">
            <table className="table table-bordered table-striped text-nowrap">
                <thead>
                <tr>
                    <th className="text-center" style={{width:'1%'}}>ID</th>
                    <th className="text-center" style={{width:'10%'}}>Nama</th>
                    <th className="text-center" style={{width:'10%'}}>Aksi</th>
                </tr>
                </thead>
                <tbody>
                    {
                        dataProvinsi.map((el) =>(
                        <tr key={el.id}>
                            <td className="text-center">{el.id}</td>
                            <td className="text-center">{el.nama}</td>
                            <td>
                            <div className="text-center">
                                <Link className="btn btn-warning" to={"/pengaturan/editProvinsi/" + el.id}>
                                    <i className="fa fa-pencil-alt"></i>
                                </Link>&nbsp;&nbsp;&nbsp;
                                <Button color="danger" onClick={()=>hapusProvinsi (el.id)}>
                                    <i className="fa fa-trash"></i>
                                </Button>
                            </div>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListProvinsi
