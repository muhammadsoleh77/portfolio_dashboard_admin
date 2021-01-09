import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'reactstrap'
import API_ENDPOINT from '../../../Endpoint'

export default class TambahProvinsi extends Component {
    state = {
        provinsi: ''
    }

    handleChangeProvinsi = event => {
        this.setState({provinsi: event.target.value});
    }

    tambahProvinsi = event => {
        event.preventDefault();

        const addProvinsi = {
            nama : this.state.provinsi
        }

        API_ENDPOINT.post('/admin/provinsi/add', addProvinsi)
        .then(res => {
            console.log(res);
            if (res.status === 200) {
                window.location.reload(true);
            }
        })
    }
    
    render() {
        return (
            <div>
                <Row>
                    <Col xs="12" lg="12">
                    {/* <p className="text-muted">Tambah Provinsi</p> */}
                        <Row>
                            <Col xs="12" lg="3">
                                <Input type="text" name="username" placeholder="Input Provinsi baru" autoComplete="username" onChange={this.handleChangeProvinsi} /><br/>
                            </Col>
                            <Col xs="12" lg="6">
                                <Button color="primary" onClick={this.tambahProvinsi}><i className="fa fa-plus"></i></Button><br/><br/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}
