import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PoKosong extends Component {
    render() {
        return (
            <div>
                <Link className="btn btn-primary pull-right" to={"/entitas/tambahPo"}>
                    Tambah PO
                </Link><br/><br/><br/>
                <p><strong>DATA P.O KOSONG</strong></p>
            </div>
        )
    }
}
