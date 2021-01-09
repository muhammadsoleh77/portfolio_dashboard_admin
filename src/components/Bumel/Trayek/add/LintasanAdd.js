import React, { Component } from 'react'
import Select from 'react-select'
// import API_ENDPOINT from '../../../Endpoint'

// import { Button } from 'reactstrap'

export default class LintasanAdd extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dataWilayah: [],
            dataLokasi: [],
            lintasans: [],
            exist: false,
            idLokasi: '',
            // post: {
            //     lokasiId: '',
            //     namaLokasi: ''
            // }
        }
    }

    // componentDidMount() {
    //     this.EndpointWilayah()
    // }

    // EndpointWilayah() {
    //     API_ENDPOINT.get('/admin/wilayah/list')
    //     .then(res => {
    //         this.setState({
    //             dataWilayah: res.data
    //         })
    //     })
    // }

    // handleChangeWilayah = (e) => {
    //     const idWil = e.target.value
    //     API_ENDPOINT.get('/admin/lokasi/list/wilayah/' + idWil)
    //     .then(res => {
    //         this.setState({
    //             dataLokasi: res.data
    //         })
    //     })
    // }

    // handleChangeLokasi = (e) => {
    //     this.setState({
    //         idLokasi: e.target.value
    //     })
    // }

    // addLintasan = (city) => {
    //     var exists = false;
        
    //     if(this.state.lintasans.length > 0) {
    //         for(var a=0; a<this.state.lintasans.length; a++) {
    //             if(this.state.lintasans[a].namaLokasi === city.namaLokasi) {
    //                 // this.setState({
    //                     exists = true;
    //                     this.setState({
    //                         exist: exists
    //                     })
    //                 // })
    //                 a = this.state.lintasans.length;
    //             }
    //         }
    //         if(!exists) {
    //             this.state.lintasans.push(city);
    //         }
    //     } else {
    //         this.state.lintasans.push(city)
    //     }
    // }

    // removeLintasan = (index) => {
    //     // this.setState(prevState => ({
    //     //     lintasans: [...prevState.lintasans.slice(0, index), ...prevState.lintasans.slice(index + 1)]
    //     // }))
    //     var array = this.state.lintasans;
    //     if (index > -1) {
    //         array.splice(index, 1);
    //         this.setState({lintasans: array});
    //     }
    // }

    urutan = (e) => {
        this.setState({
            urutan: e.target.value
        }, () => {console.log(this.state.urutan);})
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        // const {values} = this.props
        
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
                                                <label>Pilih Wilayah</label>
                                                {/* <div className="row"> */}
                                                    {/* <div className="col-5"> */}
                                                        <Select
                                                            name="wilayah"
                                                            placeholder="Pilih Wilayah"
                                                            onChange={this.props.handleChangeWilayah}
                                                            options={this.props.dataWilayah.map(x => this.props.OptionWilayah(x))}
                                                        />
                                                        {/* <select class="form-control" style={{ width: '100%'}} onChange={this.props.handleChangeWilayah}>
                                                            <option disabled selected>Pilih Wilayah</option>
                                                            {
                                                                this.props.dataWilayah.map((el) => {
                                                                    return (
                                                                        <option key={el.id} value={el.id}>{el.namaWilayah}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select> */}
                                                    {/* </div> */}

                                                    {/* <div className="col-5">
                                                        <select class="form-control" style={{ width: '100%' }} onChange={this.handleChangeLokasi.bind(this)}>
                                                            <option disabled selected>Pilih Lokasi</option>
                                                            {
                                                                this.state.dataLokasi.map((el, index) => {
                                                                    return (
                                                                        <option key={el.id} value={el.id}>{el.namaLokasi}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </div> */}
                                                    
                                                    {/* <div className="col-1">
                                                        <span className="btn btn-dark" onClick={this.addLintasan}><i className="fa fa-plus"></i></span>
                                                    </div> */}
                                                {/* </div> */}
                                            </div>

                                            <div className="form-group">
                                                <table className="table table-bordered">
                                                    <tbody>
                                                        {
                                                            this.props.dataLokasi.map((el) => {
                                                                return(
                                                                    <tr class="city" key={el.id} onClick={this.props.addLintasan.bind(this, el)}>
                                                                        <td>{el.namaLokasi} <br/> <p style={{fontSize:'10'}}>(Click 2x to choice)</p></td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>

                                            {/* <div class="col-md-10">
                                            <div class="lintasan">
                                                <span  ng-repeat="k in lintasan">
                                                <button class="btn btn-city btn-xs" ng-class="{'first' : $first, 'last' : $last}">{{ k.namaSubKota }}&nbsp;&nbsp;&nbsp;<span ng-click="removeCity($index)" class="delete">&times;</span> <br> <small>({{ k.namaKota }})</small></button>
                                                <span ng-if="!$last" class="strip"> ---- </span>
                                                </span>
                                            </div>
                                            <!-- <pre>{{ lintasan | json }}</pre> -->
                                            </div> */}

                                            {/* <p>{JSON.stringify(this.props.lintasans)}</p> */}

                                            <div className="form-group">
                                                <label>Lintasan</label>
                                                <div className="lintasan">
                                                    {
                                                        this.props.lintasans.map((el, index) => {
                                                            // console.log(el);
                                                            return(
                                                                <span>
                                                                    <i class="btn btn-city btn-xs">
                                                                        {el.namaLokasi}&nbsp;&nbsp;&nbsp;
                                                                        <span onClick={this.props.removeLintasan.bind(this, index)}>&times;</span><br/>
                                                                        <input class="form-control" type="number" name="urutan" onChange={(e) => this.props.urutan(e, index)} placeholder="input urutan" />
                                                                    </i>
                                                                    <span class="strip">  </span>
                                                                </span>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>

                                            <div class="card-footer">
                                                <button onClick={this.back} className="btn btn-warning">Back</button>&nbsp;&nbsp;&nbsp;
                                                <button onClick={this.saveAndContinue} class="btn btn-primary pull-right">Next</button>
                                            </div>
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
