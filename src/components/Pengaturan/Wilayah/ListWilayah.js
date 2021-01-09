import React, { Component } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import API_ENDPOINT from '../../../Endpoint'
// import ReactPaginate from 'react-paginate'
import '../../../App.css'

import WilayahKosong from './WilayahKosong'

export default class ListWilayah extends Component {

    state = {
        dataProvinsi: this.props.dataProvinsi,
        dataWilayah: [],
        dataKosong: false,
        dataIsi: false,
        idProvinsi: '',
        total: null,
        per_page: null,
        current_page: this.props.currentPage
        // pageNumbers: []
    }

    componentDidMount() {
        // API_ENDPOINT.get('/admin/provinsi/list')
        //     .then(res => {
        //         this.setState({
        //             dataProvinsi: res.data
        //         })
        //     })

        // this.makeHttpRequestWithPage(1)
    }

    dropdownChanged(e) {
        this.setState({ selectedId: e.target.value });
    }

    MakeOption(x) {
        // console.log(x);
        return { value: x.id, label: x.nama };
        // this.options.concat(this.state.dataPo.map((x) => x));
        // this.setState({
        //     value: x.idPo,
        //     label: x.nama
        // })
    }

    handleChangeSelect = (e) => {
        // console.log(e);
        this.setState({ selectedId: e.value });
    }

    onClickOption(selectedId) {
        // e.preventDefault()

        const paramWilayah = {
            id: selectedId,
            orderBy: "id",
            pageNo: 0,
            pageRow: 100
        }

        API_ENDPOINT.post('/admin/wilayah/list/provinsi', paramWilayah)
            .then(res => {
                this.setState({
                    dataIsi: true,
                    dataWilayah: res.data.content,

                    // users: data.data,
                    total: res.data.totalElements,
                    per_page: res.data.numberOfElements,
                    current_page: res.data.totalPages
                })
                console.log(this);
            })
            .catch(error => {
                this.setState({
                    dataKosong: true,
                    idProvinsi: selectedId
                })
            })
    }

    hapusWilayah(id) {
        API_ENDPOINT.delete('/admin/wilayah/' + id + '/delete')
            .then(res => {
                // console.log(res);
                alert(res.data.message)
                window.location.reload(true)
            })
    }

    render() {

        // var users, renderPageNumbers, classes;

        // if (this.state.dataWilayah) {
        //     users = this.state.dataWilayah.map(user => (
        //         <tr key={user.id}>
        //             <td>{user.id}</td>
        //             <td>{user.namaWilayah}</td>
        //         </tr>
        //     ));
        // }

        // const pageNumbers = [];
        // if (this.state.total !== null) {
        //     for (let i = 1; i <= Math.ceil(this.state.total / this.state.per_page); i++) {
        //         pageNumbers.push(i);
        //     }
        //     // console.log(pageNumbers);

        //     renderPageNumbers = pageNumbers.map(number => {
        //         // console.log(number);
        //         classes = this.state.current_page === number ? 'active' : '';
        
        //         return (
        //         <span key={number} className={classes} style={{color:'black'}}>{number}</span>
        //         );
        //     });
        //     // console.log(renderPageNumbers);
        // }

        const dataWilayah = this.props.dataWilayah

        // // if(this.state.current_page !== null) {

        //     var paging = this.state.current_page;
        //     // console.log(paging);

        // // }

        if (this.state.dataKosong) {
            return (
                <WilayahKosong id={this.state.idProvinsi} />
            )
        }

        if (this.state.dataIsi) {
            return (
                <ListWilayah dataProvinsi={this.props.dataProvinsi} dataWilayah={this.state.dataWilayah} id={this.state.selectedId} currentPage={this.state.current_page} />
            )
        }

        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid header-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-left">
                                    <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                                    <li className="breadcrumb-item active"><b>List Wilayah</b></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <Select
                                                    name="provinsi"
                                                    placeholder="Pilih Provinsi"
                                                    onChange={this.handleChangeSelect}
                                                    options={this.state.dataProvinsi.map(x => this.MakeOption(x))}
                                                /><br/>
                                                {/* <select class="form-control" value={this.state.selectedId} onChange={this.dropdownChanged.bind(this)} style={{ width: '100%' }}>
                                                    <option disabled selected>Pilih Provinsi</option>
                                                    {
                                                        this.state.dataProvinsi.map((el) => {
                                                            return (
                                                                <option key={el.id} value={el.id}>{el.nama}</option>
                                                            )
                                                        })
                                                    }
                                                </select><br/> */}
                                            </div>
                                            <div className="col-md-3">
                                                <button type="submit" class="btn btn-primary" onClick={() => this.onClickOption(this.state.selectedId)}>
                                                    <i className="fa fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <br/><Link className="btn btn-primary pull-right" to={"/pengaturan/tambahWilayah/" + this.props.id}>
                                            Tambah Wilayah
                                        </Link><br /><br />
                                        <table className="table table-bordered table-hover text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th className="text-center" style={{ width: '1%' }}>ID</th>
                                                    <th className="text-center" style={{ width: '10%' }}>Nama Wilayah</th>
                                                    <th className="text-center" style={{ width: '10%' }}>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    dataWilayah.map((el) => (
                                                        <tr key={el.id}>
                                                            <td className="text-center">{el.id}</td>
                                                            <td className="text-center">{el.namaWilayah}</td>
                                                            <td>
                                                                <div className="text-center">
                                                                    <Link className="btn btn-warning" to={"/pengaturan/editWilayah/" + el.id + "/" + this.props.id}>
                                                                        <i className="fa fa-pencil-alt"></i>
                                                                    </Link>&nbsp;&nbsp;&nbsp;
                                                                    <button type="button" className="btn btn-danger" onClick={() => this.hapusWilayah(el.id)}>
                                                                        <i className="fa fa-trash"></i>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                        {/* <div className="pages pagination">
                                            <span onClick={() => this.makeHttpRequestWithPage(1)}>&laquo;</span>
                                            {renderPageNumbers}
                                            <span onClick={() => this.makeHttpRequestWithPage(1)}>&raquo;</span>
                                        </div> */}
                            {/* <ReactPaginate
                            previousLabel={"prev"}
                            nextLabel={"next"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={paging}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}/> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


