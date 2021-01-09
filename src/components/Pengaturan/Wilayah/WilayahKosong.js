import React, { Component, Suspense } from 'react'
import Select from 'react-select'
import {Link} from 'react-router-dom'
import { Col, Row, Button, Card, CardBody } from 'reactstrap'
import API_ENDPOINT from '../../../Endpoint'
import ListWilayah from './ListWilayah'

export default class WilayahKosong extends Component {

    state = {
        dataProvinsi: [],
        dataWilayah: [],
        dataKosong: false,
        dataIsi: false
    }

    componentDidMount() {
        API_ENDPOINT.get('/admin/provinsi/list')
        .then(res => {
            this.setState({
                dataProvinsi: res.data
            })
            // console.log(this);
        })
    }

    dropdownChanged(e){
        this.setState({selectedId: e.target.value});
        // console.log(this);
        
    }

    MakeOption(x) {
        return { value: x.id, label: x.nama }
    }

    handleChangeSelect = (e) => {
        this.setState({selectedId: e.value})
    }

    onClickOption(selectedId) {
        // e.preventDefault()

        API_ENDPOINT.get('/admin/wilayah/list/provinsi/' + selectedId)
        .then(res => {
            console.log(res);
            this.setState({
                dataIsi: true,
                dataWilayah: res.data,
                idProvinsi: selectedId
            })
        })
        .catch(error => {
            this.setState({
                dataKosong: true,
                idProvinsi: selectedId
            })
        })
        
    }

    render() {

        if (this.state.dataIsi) {
            return (
                <ListWilayah dataWilayah={this.state.dataWilayah} id={this.state.idProvinsi} />
            )
        }

        const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
        return (
            <div>
                <Suspense fallback={loading()}>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <Col xs="12" lg="12">
                                    <Row>
                                        <Col xs="12" lg="3">
                                            <Select
                                                name="provinsi"
                                                placeholder="Pilih Provinsi"
                                                onChange={this.handleChangeSelect}
                                                options={this.state.dataProvinsi.map(x => this.MakeOption(x))}
                                            /><br/>
                                            {/* <select className="form-control" value={this.state.selectedId} onChange={this.dropdownChanged.bind(this)}>
                                                <option disabled selected>Pilih Provinsi</option>
                                                {
                                                    this.state.dataProvinsi.map((el) => {
                                                        return (
                                                            <option key={el.id} value={el.id}>{el.nama}</option>
                                                        )
                                                    })                                                    
                                                }
                                            </select> */}
                                        </Col>
                                        <Col xs="12" lg="6">
                                            <Button color="primary" onClick={() => this.onClickOption (this.state.selectedId)}><i className="fa fa-search"></i></Button><br/>
                                        </Col>
                                    </Row><br/>
                                    <Link className="btn btn-warning pull-right" to={"/pengaturan/tambahWilayah/" + this.props.id}>
                                        Tambah Wilayah
                                    </Link><br/><br/>
                                    <Suspense fallback={loading()}>
                                    <p><strong>DATA WILAYAH KOSONG</strong></p>
                                    </Suspense>
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                </Suspense>
            </div>
        )
    }
}
