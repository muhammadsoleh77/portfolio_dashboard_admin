import React, { Component } from 'react'
import Select from 'react-select'

export default class TarifAdd extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         tarifs: [],
    //         postTarif: {
    //             lokasiAkhirId: '',
    //             lokasiAwalId: '',
    //             tarif: ''
    //         },
    //         from: '',
    //         to: '',
    //         tujuanKota: [],
    //         // ruteKota: []
    //         arahTrayek: []
    //     }
    // }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.submit();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    // handleChangekotaAsal = (e) => {
    //     // this.setState(prevStep => ({
    //     //     postTarif: {...prevStep.postTarif, : e.target.value}
    //     // }))

    //     // var from = this.state.from
    //     // from = e.target.value
    //     this.setState({
    //         from: e.target.value
    //     })
    //     var tujuanKota = this.state.tujuanKota;
    //     this.props.dataLintasan.forEach(function(el) {
    //         tujuanKota.push(el)
    //     })
    //     var item = parseInt(e.target.value) + 1;
    //     tujuanKota.splice(0, item);
    // }

    // handleChangekotaAkhir = (e) => {
    //     // this.setState(prevStep => ({
    //     //     postTarif: {...prevStep.postTarif, [e.target.name]: e.target.value}
    //     // }))
    //     this.setState({
    //         to: e.target.value
    //     })
    // }

    // addTarif = e => {
    //     e.preventDefault();

    //     // this.setState(prevStep => ({
    //     //     tarifs: [...prevStep.tarifs, prevStep.postTarif],
    //     //     postTarif: {lokasiAwalId:"", lokasiAkhirId:""}
    //     // }))

    //     var dari = this.props.dataLintasan[this.state.from];
    //     var ke = this.state.tujuanKota[this.state.to];
    //     var arahTrayek = {
    //         idDari: dari.id,
    //         namaDari: dari.namaLokasi,
    //         idKe: ke.id,
    //         namaKe: ke.namaLokasi
    //     }
    //     var exist = false;
    //     for(var i = 0; i<this.state.arahTrayek.length; i++) {
    //         if(this.state.arahTrayek[i].idDari === arahTrayek.idDari && this.state.arahTrayek[i].idKe === arahTrayek.idKe) {
    //             exist = true;
    //         }
    //     }

    //     if(!exist) {
    //         var b = this.state.arahTrayek
    //         b.push(arahTrayek)
    //         this.setState({
    //             arahTrayek: b
    //         })
    //     }
    //     // console.log(this.state.arahTrayek);
    // }

    // changeTarif = (e) => {
    //     this.setState({
    //         tarif: e.target.value
    //     })
    // }
    
    render() {

        const dataLintasan = this.props.dataLintasan

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
                                                <label>Arah Trayek</label>
                                                <div className="row">
                                                    <div className="col-md-5">
                                                        <Select
                                                            name="kotaAsal"
                                                            placeholder="Pilih Kota Asal"
                                                            onChange={this.props.handleChangekotaAsal}
                                                            options={dataLintasan.map(this.props.OptionKotaAsal)}
                                                        /><br/>
                                                    {/* <select className="form-control" onChange={this.props.handleChangekotaAsal.bind(this)}>
                                                        <option disabled selected>Pilih Kota Asal</option>
                                                        {
                                                            dataLintasan.map((el, index) => {
                                                                return(
                                                                    <option key={el.id} value={index}>{el.namaLokasi}</option>
                                                                )
                                                            })
                                                        }
                                                    </select><br/> */}
                                                    </div>
                                                    <div className="col-md-5">
                                                        <Select
                                                            name="kotaAkhir"
                                                            placeholder="Pilih Kota Akhir"
                                                            onChange={this.props.handleChangekotaAkhir}
                                                            options={this.props.tujuanKota.map(this.props.OptionKotaAkhir)}
                                                        /><br/>
                                                    {/* <select className="form-control" onChange={this.props.handleChangekotaAkhir}>
                                                        <option disabled selected>Pilih Kota Tujuan</option>
                                                        {
                                                            this.props.tujuanKota.map((el, index) => {
                                                                return(
                                                                    <option key={el.id} value={index}>{el.namaLokasi}</option>
                                                                )
                                                            })
                                                        }
                                                    </select><br/> */}
                                                    </div>
                                                    <div className="col-md-2">
                                                        <button className="btn btn-dark" onClick={this.props.addTarif.bind(this)}><i className="fa fa-plus"></i></button>
                                                    </div>
                                                </div>
                                                    {/* <select class="form-control" style={{ width: '100%' }} value={this.state.selectedId} onChange={this.handleChangeWilayah}>
                                                        <option disabled selected>Pilih Wilayah</option>
                                                        {
                                                            this.state.dataWilayah.map((el) => {
                                                                return (
                                                                    <option key={el.id} value={el.id}>{el.namaWilayah}</option>
                                                                )
                                                            })
                                                        }
                                                    </select> */}
                                            </div>

                                            <div className="form-group">
                                                <table class="table">
                                                    <col width="10%"/>
                                                    <col width="10%"/>
                                                    <col width="10%"/>
                                                    <col width="10%"/>
                                                    <col width="10%"/>
                                                    <col width="10%"/>
                                                    <col width="20%"/>
                                                    <col width="40%"/>
                                                    <thead>
                                                        <tr>
                                                            <th>No.</th>
                                                            <th>Kota Asal</th>
                                                            <th>Kota Tujuan</th>
                                                            <th>Tarif Normal</th>
                                                            <th>Tarif Member</th>
                                                            <th>Tarif Non Tunai</th>
                                                                        <th>Pilih Type Bus</th>
                                                                        <th>Pilih Material</th>
                                                            <th>Aksi</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            this.props.arahTrayek.map((el, index) => {
                                                                // console.log(el);
                                                                return(
                                                                    <tr>
                                                                        <td>{index + 1}</td>
                                                                        <td>{el.namaDari}</td>
                                                                        <td>{el.namaKe}</td>
                                                                        <td>
                                                                            <input class="form-control" type="number" value={el.tarif} onChange={(e) => this.props.changeTarif(e, index)} />
                                                                        </td>
                                                                        <td>
                                                                            <input class="form-control" type="number" value={el.tarifMember} onChange={(e) => this.props.changeTarifMember(e, index)} />
                                                                        </td>
                                                                        <td>
                                                                            <input class="form-control" type="number" value={el.tarifNonTunai} onChange={(e) => this.props.changeTarifNonTunai(e, index)} />
                                                                        </td>
                                                                                    <td>
                                                                                        <Select
                                                                                            name="typeBus"
                                                                                            placeholder="Pilih Type Bus"
                                                                                            value={this.props.dataTypeBus.map(x => this.props.OptionTypeBus(x)).filter(option => option.value === el.typeBus)}
                                                                                            onChange={(e) => this.props.handleChangeTypeBus(e, index)}
                                                                                            options={this.props.dataTypeBus.map(x => this.props.OptionTypeBus(x))}
                                                                                        />
                                                                                    </td>
                                                                                    <td>
                                                                                        <Select
                                                                                            name="material"
                                                                                            placeholder="Pilih Material"
                                                                                            value={this.props.dataMaterial.map(x => this.props.OptionMaterial(x)).find(option => { return option.value === el.sapMaterial})}
                                                                                            onChange={(e) => this.props.handleChangeMaterial(e, index)}
                                                                                            options={this.props.dataMaterial.map(x => this.props.OptionMaterial(x))}
                                                                                        />
                                                                                    </td>
                                                                        <td>
                                                                        <button className="btn btn-danger" onClick={(e) => this.props.removeTarif(e, index)}><i className="fa fa-trash"></i></button><br/>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div class="card-footer">
                                                <button onClick={this.back} className="btn btn-warning">Back</button>&nbsp;&nbsp;&nbsp;
                                                <button onClick={this.props.submit} class="btn btn-primary pull-right">Submit</button>
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
