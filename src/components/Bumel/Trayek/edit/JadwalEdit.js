import React, { Component } from 'react'

export default class JadwalEdit extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         push: [],
    //         jadwals: [],
    //         postWaktu: {
    //             waktu: ''
    //         }
    //     }
    // }

    // handleChange = e => {
    //     const { name, value } = e.target;

    //     this.setState(prevState => ({
    //         postWaktu: { ...prevState.postWaktu, [name]: value }
    //     }));
    // };
    
    // handleSubmit = e => {
    //     e.preventDefault();

    //     // const {values} = this.props 

    //     this.setState(prevState => ({
    //         jadwals: [...prevState.jadwals, prevState.postWaktu],
    //         postWaktu: { waktu: "" }
    //     }));
    // };

    // remove = (index) => {
    //     this.setState(prevState => ({
    //         jadwals: [...prevState.jadwals.slice(0, index), ...prevState.jadwals.slice(index + 1)]
    //     }))
    // }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid header-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-left">
                                    <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                                    <li className="breadcrumb-item active"><b>Tambah Trayek</b></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">Tambah Trayek</h3>
                                    </div>
                                    <form>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label>Input Jadwal</label>
                                                <div className="row">
                                                <div className="col-6">
                                                    <input className="form-control" type="text" name="waktu" placeholder="ex: 00:00" onChange={(e) => {
                                                        this.props.handleChangeWaktu(e.target)
                                                    }} value={this.props.postWaktu.waktu} />
                                                </div>
                                                <div className="col2">
                                                    <button className="btn btn-dark" onClick={this.props.handleSubmit.bind(this)}><i className="fa fa-plus"></i></button>
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                        {
                                            this.props.jadwals.map((el, index) => {
                                                // console.log(el);
                                                return(
                                                    <div className="form-group">
                                                        <div className="row" style={{paddingLeft:'20px'}}>
                                                            <div className="col-6">
                                                                <input className="form-control" value={el.waktu} readOnly />
                                                            </div>
                                                            <div className="col-2">
                                                                <button className="btn btn-danger" onClick={(e)=>{
                                                                e.stopPropagation();
                                                                e.preventDefault();
                                                                this.props.removeWaktu(index);
                                                            }}><i className="fa fa-trash"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                        <div class="card-footer">
                                            <button onClick={this.back} className="btn btn-warning">Back</button>&nbsp;&nbsp;&nbsp;
                                            <button onClick={this.saveAndContinue} class="btn btn-primary pull-right">Next</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
