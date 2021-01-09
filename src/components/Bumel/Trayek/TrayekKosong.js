import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class TrayekKosong extends Component {
    render() {
        return (
            <div>
                <Link className="btn btn-warning pull-right" to={"/bumel/tambahTrayek"}>
                    Tambah Trayek
                </Link><br/><br/>
                <p><strong>DATA TRAYEK KOSONG</strong></p>
            </div>
        )
    }
}
