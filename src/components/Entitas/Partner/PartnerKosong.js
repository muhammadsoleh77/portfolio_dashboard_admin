import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PartnerKosong extends Component {
    render() {
        return (
            <div>
                <Link className="btn btn-primary pull-right" to={"/entitas/tambahPartner"}>
                    Tambah Partner
                </Link><br/><br/><br/>
                <p><strong>DATA PARTNER KOSONG</strong></p>
            </div>
        )
    }
}
