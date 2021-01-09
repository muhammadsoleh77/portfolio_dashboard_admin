import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ChannelKosong extends Component {
    render() {
        return (
            <div>
                <Link className="btn btn-warning pull-right" to={"/pengaturan/tambahChannel"}>
                    Tambah Channel
                </Link><br/><br/>
                <p><strong>DATA CHANNEL KOSONG</strong></p>
            </div>
        )
    }
}
