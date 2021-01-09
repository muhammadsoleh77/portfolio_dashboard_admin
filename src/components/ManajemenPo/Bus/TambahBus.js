import React, { Component } from 'react'
import Select from 'react-select'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import '../../../index.css'
import './SeatForm.css'
import API_ENDPOINT from '../../../Endpoint'

import driver from '../../img/steer.png'
// import Sap from './Sap'
// import ButtonAddDelete from './ButtonAddDelete'

export default class TambahBus extends Component {

    constructor(props){
        super(props)

        this.fileInputLogo = React.createRef()

        this.state = {
            fields: {},
            errors: {},
            dataPo: [],
            // dataTypeSap: [],

            datas: [],
            fakeSeat: [],
            seatNo: [],
            // seats: ''
            // limit: ''

            dataKelas: [
                {id:'VIP', namaKelas:'VIP'},
                {id:'PREMIUM', namaKelas:'PREMIUM'},
                {id:'EXECUTIVE', namaKelas:'EXECUTIVE'}
            ],

            dataTypeSap: [
                {id:'JA', namaType:'JAC'},
                {id:'JR', namaType:'JRC'},
                {id:'JG', namaType:'TJR'}
            ],

            dataTypeBus: [
                {id:1, nama:'JAC'},
                {id:2, nama:'JRC'},
                {id:3, nama:'TJR'}
            ],

            ac: false,
            airMineral: false,
            audio: false,
            bantal: false,
            footRest: false,
            legRest: false,
            powerOutlet: false,
            recSeat: false,
            selimut: false,
            smokingArea: false,
            snack: false,
            toilet: false,
            video: false,
            voucherMakan: false,
            wifi: false,

            sapKodes: [],
            selectedValue: ''
        }
    }

    // handleChange = (e) => {
    //     this.setState({ [e.target.name]: e.target.value })
    // }

    handleChangeAc = (e) => {
        this.setState({
            [e.target.name]: !this.state.ac
        })
    }

    handleChangeAirMineral = (e) => {
        this.setState({
            [e.target.name]: !this.state.airMineral
        })
    }

    handleChangeAudio = (e) => {
        this.setState({
            [e.target.name]: !this.state.audio
        })
    }

    handleChangeBantal = (e) => {
        this.setState({
            [e.target.name]: !this.state.bantal
        })
    }

    handleChangeFootRest = (e) => {
        this.setState({
            [e.target.name]: !this.state.footRest
        })
    }

    handleChangeLegRest = (e) => {
        this.setState({
            [e.target.name]: !this.state.legRest
        })
    }

    handleChangePowerOutlet = (e) => {
        this.setState({
            [e.target.name]: !this.state.powerOutlet
        })
    }

    handleChangeRecSeat = (e) => {
        this.setState({
            [e.target.name]: !this.state.recSeat
        })
    }

    handleChangeSelimut = (e) => {
        this.setState({
            [e.target.name]: !this.state.selimut
        })
    }

    handleChangeSmokingArea = (e) => {
        this.setState({
            [e.target.name]: !this.state.smokingArea
        })
    }

    handleChangeSnack = (e) => {
        this.setState({
            [e.target.name]: !this.state.snack
        })
    }

    handleChangeToilet = (e) => {
        this.setState({
            [e.target.name]: !this.state.toilet
        })
    }

    handleChangeVideo = (e) => {
        this.setState({
            [e.target.name]: !this.state.video
        })
    }

    handleChangeWifi = (e) => {
        this.setState({
            [e.target.name]: !this.state.wifi
        })
    }

    // handleChangePo = (event) => {
    //     this.setState({
    //         selectedValue: event.target.value
    //     }, () => {console.log(this.state.selectedValue);})
    // }

    // START OPTION P.O
    OptionPo = (x) => {
        return {value: x.idPo, label: x.nama}
    }

    handleChangePo = (e) => {
        console.log(e);
        this.setState({selectedValue: e.value})
    }
    // END P.O

    // START OPTION KELAS
    OptionKelas = (x) => {
        return {value: x.id, label: x.namaKelas}
    }

    handleChangeKelas = (e) => {
        this.setState({kelas: e.value})
    }
    // END KELAS

    // START OPTION TYPE S.A.P
    OptionTypeSap = (x) => {
        return {value: x.id, label: x.namaType}
    }

    handleChangeTypeSap = (e) => {
        this.setState({sapType: e.value})

        API_ENDPOINT.get('/id/co/bisku/payload/sap/bus?group=' + e.value)
        .then(res => {
            // console.log(res);
            this.setState({
                sapKodes: res.data.data
            })
        })        
    }
    // END TYPE S.A.P
    
    // START OPTION PRODUK BUS S.A.P
    OptionProdukSap = (x) => {
        return {value: x.KODE, label: x.KODE}
    }

    handleChangeProdukSap = (e) => {
        this.setState({sapKode: e.value})
    }
    // END PRODUK BUS S.A.P

    // START OPTION TYPE BUS
    OptionTypeBus = (x) => {
        return {value: x.id, label: x.nama}
    }

    handleChangeTypeBus = (e) => {
        console.log(e);
        this.setState({typeBus: e.value}, () => {console.log(this.state.typeBus);})
    }
    // END TYPE BUS

    // typeSap = (e) => {
    //     this.setState({
    //         sapType: e.target.value
    //     })
    //     var kode = e.target.value;
    //     API_ENDPOINT.get('/id/co/bisku/payload/sap/bus?group=' + kode)
    //     .then(res => {
    //         console.log(res);
    //         this.setState({
    //             sapKode: res.data.data
    //         })
    //     })
    // }

    inputFileLogo = () => {
        if (this.fileInputLogo.current !== undefined && this.fileInputLogo.current.click !== undefined)
            this.fileInputLogo.current.click()
    }

    getInitialState = function() {
        return{file: []}
    }

    onChangeLogo = (event)=>{
        this.setState({
            imgLogo: event.target.files[0]
        })
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        // // Validasi po
        // if(!fields["idPo"]){
        //     formIsValid = false;
        //     errors["idPo"] = "Tidak boleh kosong";
        // }

        // // Validasi Kode Armada
        // if(!fields["name"]){
        //     formIsValid = false;
        //     errors["name"] = "Tidak boleh kosong";
        // }

        // // Validasi Plat
        // if(!fields["plat"]){
        //     formIsValid = false;
        //     errors["plat"] = "Tidak boleh kosong";
        // }

        // // Validasi Kelas
        // if(!fields["kelas"]){
        //     formIsValid = false;
        //     errors["kelas"] = "Tidak boleh kosong";
        // }

        // // Validasi KategoriBus
        // if(!fields["kategoriBus"]){
        //     formIsValid = false;
        //     errors["kategoriBus"] = "Tidak boleh kosong";
        // }

        // Validasi Seat Type
        if(!fields["seatType"]){
            formIsValid = false;
            errors["seatType"] = "Tidak boleh kosong";
        }

        // Validasi Seat Number
        if(!fields["seatNumber"]){
            formIsValid = false;
            errors["seatNumber"] = "Tidak boleh kosong";
        }

        // // Validasi Seat
        // if(!fields["seat"]){
        //     formIsValid = false;
        //     errors["seat"] = "Tidak boleh kosong";
        // }

        // // Validasi Bagasi
        // if(!fields["bagasi"]){
        //     formIsValid = false;
        //     errors["bagasi"] = "Tidak boleh kosong";
        // }

        this.setState({errors: errors});
        return formIsValid;
        
    }

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    EndpointPo() {
        API_ENDPOINT.get('/admin/po/getAll')
        .then(res => {
            this.setState({
                dataPo: res.data
            })
        })
    }

    componentDidMount(){
        this.EndpointPo();
    }

    handleChangeJmlKursi(e) {
        this.setState({
            jmlKursi: e.target.value
        })
    }

    tes(totalSeat) {
        var datas = [];
        this.state.datas.slice(this.state.datas.length, this.state.datas.length);
        for(var i=1; i<=totalSeat; i++) {
            datas.push(i);
        }
        return datas;
    }

    clickAddLayout(totalSeat) {
        // console.log(totalSeat);

        // var datas = [];
        // var fakeSeat = [];
        var datas = this.state.datas
        var limit;
        var a;

        var alphabet = ['A', 'B', 'NO', 'NO', 'C', 'D', 'E'];
        var alphabet2 = ['A', 'B', 'NO', 'C', 'D', 'E'];

        for(a=0; a<this.state.fakeSeat.length; a++) {
            this.state.fakeSeat.splice(a, this.state.fakeSeat.length);
        }

        for(a=0; a<this.state.datas.length; a++) {
            this.state.datas.splice(a, this.state.datas.length);
        }

        if(this.state.fields['seatType'] === "2-2") {
            // this.setState({
            //     limit: 4
            // })
            limit = 4
        } else {
            // this.setState({
            //     limit: 5
            // })
            limit = 5;
        }

        datas = this.tes(totalSeat);

        var y = 1;
        var z = 1;
        for(var x=0; x<datas.length; x++) {
            if(z === 3) {
                if(limit === 4) {
                    this.state.fakeSeat.push({
                        row: y,
                        col: z,
                        no: '',
                        type: 3,
                        index: this.state.fakeSeat.length
                    });
                    this.state.fakeSeat.push({
                        row: y,
                        col: z+1,
                        no: '',
                        type: 3,
                        index: this.state.fakeSeat.length
                    });
                    this.state.fakeSeat.push({
                        row: y,
                        col: z+2,
                        no: this.state.fields['seatNumber'] ? datas[x] : y + alphabet[z+1],
                        type: 'A',
                        status: 2,
                        index: this.state.fakeSeat.length
                    });
                    z = z+2;
                } else if (limit === 5) {
                    this.state.fakeSeat.push({
                        row: y,
                        col: z,
                        no: '',
                        type: 3,
                        index: this.state.fakeSeat.length
                    });
                    this.state.fakeSeat.push({
                        row: y,
                        col: z+1,
                        no: this.state.fields['seatNumber'] ? datas[x] : y + alphabet2[z],
                        type: 'A',
                        status: 2,
                        index: this.state.fakeSeat.length
                    });
                    z++
                }
            } else {
                if(limit === 4) {
                    this.state.fakeSeat.push({
                        row: y,
                        col: z,
                        no: this.state.fields['seatNumber'] ? datas[x] : y + alphabet[z-1],
                        type: 'A',
                        status: 2,
                        index: this.state.fakeSeat.length
                    });
                } else if(limit === 5) {
                    this.state.fakeSeat.push({
                        row: y,
                        col: z,
                        no: this.state.fields['seatNumber'] ? datas[x] : y + alphabet2[z-1],
                        type: 'A',
                        status: 2,
                        index: this.state.fakeSeat.length
                    });
                }
            }
            if(z === 6) {
                z = 1;
                y++
            } else {
                z++
            }
            // console.log(this.state.fakeSeat);
        }
        this.reloadData();
    }

    reloadData() {
        var sit = this.state.seatNo;
        for(var x=0; x<this.state.fakeSeat.length; x++) {
            sit[x] = this.state.fakeSeat[x].no
        }
        this.setState({
            seatNo: sit
        })
        // console.log(sit);
        // console.log(this.state.fakeSeat);
    }

    toNo = (index, event) => {
        var no = this.state.seatNo;
        no[index] = event.target.value;
        this.setState({
            seatNo: no
        }, () => {console.log(this.state.seatNo);})
        // this.reloadData();
    }

    addSeat = () => {
        if(this.state.fakeSeat[this.state.fakeSeat.length - 1].col === "6") {
            this.state.fakeSeat.push({
                row : parseInt(this.state.fakeSeat[this.state.fakeSeat.length - 1].row) + 1,
                col : "1",
                no : '',
                type : 2,
                index : this.state.fakeSeat.length
            });
        } else {
            this.state.fakeSeat.push({
                row : this.state.fakeSeat[this.state.fakeSeat.length - 1].row,
                col : parseInt(this.state.fakeSeat[this.state.fakeSeat.length - 1].col) + 1,
                no : '',
                type : 2,
                index : this.state.fakeSeat.length
            });
        }
        // this.reloadData();
    }

    deleteSeat = () => {
        this.state.fakeSeat.splice(this.state.fakeSeat.length-1, 1);
        // this.reloadData();
    }

    tambahData(e) {
        e.preventDefault();

        var seatLayout = '';
        var finalNum = '';

        for (var x=0; x<this.state.fakeSeat.length; x++) {
            seatLayout = seatLayout + '"' + this.state.fakeSeat[x].row + '"|"' + this.state.fakeSeat[x].col + '"|"';
        
            if(!this.state.seatNo[x]) {
                var sits = this.state.seatNo;
                sits[x] = "NO";
                this.setState({
                    seatNo: sits
                })

            }

            if(this.state.seatNo[x] === "NO") {
                seatLayout = seatLayout + this.state.seatNo[x] + '"|"3"';
            } else {
                seatLayout = seatLayout + this.state.seatNo[x] + '"|"A"|"2"';
                finalNum = finalNum + '"' + this.state.seatNo[x] + '",';
            }

            if(this.state.fakeSeat[x].col === 6) {
                seatLayout = seatLayout + ";";
            } else {
                seatLayout = seatLayout + ",";
            }
        }

        // console.log(seatLayout)
        // console.log(finalNum.slice(0, -1));

        // console.log(this.state.selectedValue);

        var layout = seatLayout.slice(0, -1);
        var seatNumber = finalNum.slice(0, -1);
        var seat = seatNumber.split(',').length;

        let formData = new FormData();

        formData.append('ac', this.state.ac);
        formData.append('airMineral', this.state.airMineral);
        formData.append('audio', this.state.audio);
        formData.append('bagasi', this.state.fields['bagasi']);
        formData.append('bantal', this.state.bantal);
        formData.append('ekonomi', this.state.fields['ekonomi']);
        formData.append('footRest', this.state.footRest);
        if(this.state.selectedValue === 1) {
            formData.append('id', this.state.sapKode)
        } else {
            formData.append('id', this.state.fields['id']);
        }
        formData.append('idPo', this.state.selectedValue);
        // formData.append('isPariwisata', this.state.isPariwisata);
        // formData.append('kategoriBus', this.state.fields['kategoriBus']);
        formData.append('kelas', this.state.kelas);
        formData.append('layout', layout);
        formData.append('legRest', this.state.legRest);
        if(!this.state.imgLogo) {

        } else {
            formData.append('logo', this.state.imgLogo);
        }
        formData.append('plat', this.state.fields['plat']);
        formData.append('powerOutlet', this.state.powerOutlet);
        formData.append('recSeat', this.state.recSeat);
        if(this.state.selectedValue === 1) {
            formData.append('sapKode', this.state.sapKode);
            formData.append('sapType', this.state.sapType);
        } else {}
        formData.append('seat', seat);
        formData.append('seatNumber', seatNumber);
        formData.append('seatType', this.state.fields['seatType']);
        formData.append('selimut', this.state.selimut);
        formData.append('smokingArea', this.state.smokingArea);
        formData.append('snack', this.state.snack);
        formData.append('toilet', this.state.toilet);
        if(this.state.selectedValue === 1) {
            formData.append('typeBus', this.state.typeBus);
        } else {
            formData.append('typeBus', '');
        }
        formData.append('valid', true);
        formData.append('video', this.state.video);
        formData.append('voucherMakan', this.state.fields['voucherMakan']);
        formData.append('wifi', this.state.wifi);

        if(this.handleValidation()){
            API_ENDPOINT({
                method: 'post',
                url: '/admin/bus/add',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                console.log(res);
                Swal.fire({
                    title: "Sukses!",
                    text: res.data.message,
                    icon: "success",
                    customClass: 'swal-modal',
                    timer: 2000,
                    showConfirmButton: false,
                })
                this.props.history.push('/manajemenPo/bus')
            }).catch(error => {
                console.log(error);
            })
        }

    }

    render() {

        const seatNo = this.state.seatNo;
        // console.log(this.state.fakeSeat);

        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid header-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-left">
                                    <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                                    <li className="breadcrumb-item active"><b>Tambah Bus</b></li>
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
                                        <h3 class="card-title">Tambah Bus</h3>
                                    </div>
                                    <form onSubmit={this.tambahData.bind(this)}>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label>Pilih P.O</label>
                                                <Select
                                                    name="po"
                                                    placeholder="Pilih P.O"
                                                    onChange={this.handleChangePo}
                                                    options={this.state.dataPo.map(x => this.OptionPo(x))}
                                                />
                                                {/* <select class="form-control" style={{ width: '100%' }} onChange={this.handleChangePo.bind(this)}>
                                                    <option disabled selected>Pilih P.O</option>
                                                    {
                                                        this.state.dataPo.map((el) => {
                                                            return (
                                                                <option key={el.idPo} value={el.idPo}>{el.nama}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                                <span style={{ color: 'red' }}> {this.state.errors["idPo"]} </span> */}
                                            </div>
                                            {
                                                this.state.selectedValue === 1  && (
                                                    <div class="form-group">
                                                        <label>S.A.P Type</label>
                                                        <Select
                                                            name="typeSap"
                                                            placeholder="Pilih S.A.P Type"
                                                            onChange={this.handleChangeTypeSap}
                                                            options={this.state.dataTypeSap.map(x => this.OptionTypeSap(x))}
                                                        />
                                                        {/* <select class="form-control" onChange={this.typeSap.bind(this)}>
                                                            <option disabled selected>Pilih S.A.P Type</option>
                                                            <option value="JA">JA</option>
                                                            <option value="JR">JR</option>
                                                            <option value="JG">JG</option>
                                                        </select> */}
                                                    </div>
                                                )
                                            }
                                            {
                                                this.state.selectedValue === 1 && (
                                                    <div class="form-group">
                                                        <label>Produk Bus S.A.P</label>
                                                        <Select
                                                            name="procukBusSap"
                                                            placeholder="Pilih Produk Bus S.A.P"
                                                            onChange={this.handleChangeProdukSap}
                                                            options={this.state.sapKodes.map(x => this.OptionProdukSap(x))}
                                                        />
                                                        {/* <select class="form-control" onChange={this.handleChange.bind(this, 'sapKode')}>
                                                            <option disabled selected>Pilih Produk Bus S.A.P</option>
                                                            {
                                                                this.state.sapKode.map((el) => {
                                                                    return (
                                                                        <option value={el.KODE}>{el.KODE}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select> */}
                                                    </div>
                                                )
                                            }
                                            {
                                                this.state.selectedValue === 1 && (
                                                    <div class="form-group">
                                                        <label>Type Bus</label>
                                                        <Select
                                                            name="typeBus"
                                                            placeholder="Pilih Type Bus"
                                                            onChange={this.handleChangeTypeBus}
                                                            options={this.state.dataTypeBus.map(x => this.OptionTypeBus(x))}
                                                        />
                                                        {/* <select class="form-control" onChange={this.handleChange.bind(this, "typeBus")} style={{ width: '100%' }}>
                                                            <option disabled selected>Pilih Type Bus</option>
                                                            <option value="1">JAC</option>
                                                            <option value="2">JRC</option>
                                                            <option value="3">TJR</option>
                                                        </select>
                                                        <span style={{ color: 'red' }}> {this.state.errors["typeBus"]} </span> */}
                                                    </div>
                                                )
                                            }
                                            {
                                                this.state.selectedValue === 1 ? (
                                                    <div class="form-group">
                                                        <label>Kode Armada</label>
                                                        <input className="form-control" type="text" value={this.state.sapKode} readOnly/>
                                                        {/* <span style={{ color: 'red' }}> {this.state.errors["id"]} </span> */}
                                                    </div>
                                                ) : (
                                                    <div class="form-group">
                                                        <label>Kode Armada</label>
                                                        <input className="form-control" type="text" onChange={this.handleChange.bind(this, 'id')}/>
                                                        <span style={{ color: 'red' }}> {this.state.errors["id"]} </span>
                                                    </div>
                                                )
                                            }
                                            <div class="form-group">
                                                <label>No. Plat</label>
                                                <input className="form-control" type="text" onChange={this.handleChange.bind(this, "plat")} />
                                                <span style={{ color: 'red' }}> {this.state.errors["plat"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Kelas Ekonomi</label>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <input
                                                        type="radio"
                                                        name="ekonomi" 
                                                        value="true"
                                                        onChange={this.handleChange.bind(this, "ekonomi")} /> <b>Ya</b>&nbsp;
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                        type="radio"
                                                        name="ekonomi" 
                                                        value="false"
                                                        onChange={this.handleChange.bind(this, "ekonomi")} /> <b>Tidak</b>&nbsp;
                                                    </div>
                                                </div>
                                                <span style={{ color: 'red' }}> {this.state.errors["kelas"]}</span>
                                            </div>
                                            <div class="form-group">
                                                <label>Kelas (Kategori Bus)</label>
                                                <Select
                                                    name="kelas"
                                                    placeholder="Pilih Kelas"
                                                    onChange={this.handleChangeKelas}
                                                    options={this.state.dataKelas.map(x => this.OptionKelas(x))}
                                                />
                                                {/* <select class="form-control" onChange={this.handleChange.bind(this, "kelas")} style={{ width: '100%' }}>
                                                    <option disabled selected>Pilih Kelas Bus</option>
                                                    <option value="VIP">VIP</option>
                                                    <option value="PREMIUM">PREMIUM</option>
                                                    <option value="EXECUTIVE">EXECUTIVE</option>
                                                </select>
                                                <span style={{ color: 'red' }}> {this.state.errors["kelas"]} </span> */}
                                            </div><hr/>
                                            <h5>Layout Kursi</h5><br/>
                                            <div class="form-group">
                                                <label>Tipe Kursi</label>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <input
                                                        type="radio"
                                                        name="seatType" 
                                                        value="2-2"
                                                        onChange={this.handleChange.bind(this, "seatType")} /> <b>2 - 2</b>&nbsp;
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                        type="radio"
                                                        name="seatType" 
                                                        value="2-3"
                                                        onChange={this.handleChange.bind(this, "seatType")} /> <b>2 -3</b>&nbsp;
                                                    </div>
                                                </div>
                                                <span style={{ color: 'red' }}> {this.state.errors["seatType"]}</span>
                                            </div>
                                            <div className="form-group">
                                                <label>Cara Penomoran</label>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <input
                                                        type="radio"
                                                        name="seatNumber" 
                                                        value="true"
                                                        onChange={this.handleChange.bind(this, "seatNumber")} /> <b>1 - 2 - 3 - 4</b><br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;<b>5 - 6 - 7 - 8</b>
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                        type="radio"
                                                        name="seatNumber" 
                                                        value="false"
                                                        onChange={this.handleChange.bind(this, "seatNumber")} /> <b>1A - 1B - 1C - 1D</b><br/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;<b>2A - 2B - 2C - 2D</b>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Jumlah Kursi</label>
                                                <div className="row">
                                                    <div className="col-9">
                                                        <input className="form-control" value={this.state.jmlKursi} name="seat" type="number" onChange={this.handleChangeJmlKursi.bind(this)} />
                                                    </div>
                                                    <div className="col-3">
                                                        <Link className="btn btn-dark btn-md" onClick={() => this.clickAddLayout (this.state.jmlKursi)}>Buat Layout</Link>
                                                    </div>
                                                </div>
                                                <span style={{ color: 'red' }}> {this.state.errors["seat"]} </span>
                                            </div>
                                            <div className="form-group">
                                                <label>Hasil Layout</label>
                                                <div className="row">
                                                    <div className="col-4"></div>
                                                    <div className="col-4 layout">
                                                        <div className="row" style={{display:'flex'}}>
                                                            <div class="col-xs-6" style={{marginLeft:'auto'}}>
                                                                {/* <p>Pengemudi</p> */}
                                                                <img src={driver} width="30" height="30" alt="" style={{marginTop:'10px', marginRight:'30px'}} />
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-4">
                                                                {/* <p>Pintu Depan</p> */}
                                                            </div>
                                                        </div>
                                                        <div class="row" style={{padding:'15px'}}>
                                                            <div class="seat-form">
                                                                {
                                                                    this.state.fakeSeat.map((seat, index) => {
                                                                        // console.log(index);
                                                                        console.log(seat);
                                                                        return (
                                                                            // <div key={index}>
                                                                            <input type="text" name="" value={seatNo[seat.index]} onChange={this.toNo.bind(this, seat.index)} style={{backgroundColor:'blue', color:'#ffffff', width:'14%', borderRadius:'4px'}} />
                                                                            // </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                        {/* {
                                                            this.state.fakeSeat.length !== 0 ? <ButtonAddDelete dataFakeSeat={this.state.fakeSeat} /> : ''
                                                        } */}
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <div class="row" style={{display: 'flex'}}>
                                                                    <Link class="btn btn-dark btn-xs" onClick={this.addSeat}>Tambah Kursi</Link>
                                                                    <Link class="btn btn-dark btn-xs" onClick={this.deleteSeat} style={{marginLeft: 'auto'}}>Hapus Kursi</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4"></div>
                                                </div>
                                            </div><hr/>
                                            {/* <h5>Fasilitas Bus</h5><br/> */}
                                            <div class="form-group">
                                                <label>Fasilitas Bus</label><br/><br/>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <input
                                                            type="checkbox"
                                                            name="ac"
                                                            checked={this.state.ac}
                                                            onChange={this.handleChangeAc} />&nbsp;&nbsp;
                                                        <label>AC</label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                            type="checkbox"
                                                            name="audio"
                                                            checked={this.state.audio}
                                                            onChange={this.handleChangeAudio} />&nbsp;&nbsp;
                                                        <label>Audio</label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                            type="checkbox"
                                                            name="ekonomi"
                                                            checked={this.state.ekonomi}
                                                            onChange={this.handleChangeEkonomi} />&nbsp;&nbsp;
                                                        <label>Ekonomi</label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                            type="checkbox"
                                                            name="footRest"
                                                            checked={this.state.footRest}
                                                            onChange={this.handleChangeFootRest} />&nbsp;&nbsp;
                                                        <label>Foot Rest</label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                            type="checkbox"
                                                            name="legRest"
                                                            checked={this.state.legRest}
                                                            onChange={this.handleChangeLegRest} />&nbsp;&nbsp;
                                                        <label>Leg Rest</label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                            type="checkbox"
                                                            name="powerOutlet"
                                                            checked={this.state.powerOutlet}
                                                            onChange={this.handleChangePowerOutlet} />&nbsp;&nbsp;
                                                        <label>Power Outlet</label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                            type="checkbox"
                                                            name="recSeat"
                                                            checked={this.state.recSeat}
                                                            onChange={this.handleChangeRecSeat} />&nbsp;&nbsp;
                                                        <label>Rec Seat</label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                            type="checkbox"
                                                            name="smokingArea"
                                                            checked={this.state.smokingArea}
                                                            onChange={this.handleChangeSmokingArea} />&nbsp;&nbsp;
                                                        <label>Smoking Area</label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                            type="checkbox"
                                                            name="toilet"
                                                            checked={this.state.toilet}
                                                            onChange={this.handleChangeToilet} />&nbsp;&nbsp;
                                                        <label>Toilet</label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                            type="checkbox"
                                                            name="video"
                                                            checked={this.state.video}
                                                            onChange={this.handleChangeVideo} />&nbsp;&nbsp;
                                                        <label>Video</label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                            type="checkbox"
                                                            name="wifi"
                                                            checked={this.state.wifi}
                                                            onChange={this.handleChangeWifi} />&nbsp;&nbsp;
                                                        <label>Wifi</label>
                                                    </div>
                                                </div>
                                            </div><hr/>
                                            <div class="form-group">
                                                <label>Fasilitas Layanan</label><br/><br/>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <input
                                                            type="checkbox"
                                                            name="airMineral" 
                                                            checked={this.state.airMineral}
                                                            onChange={this.handleChangeAirMineral} />&nbsp;&nbsp;
                                                        <label>Air Mineral</label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                            type="checkbox"
                                                            name="snack"
                                                            checked={this.state.snack}
                                                            onChange={this.handleChangeSnack} />&nbsp;&nbsp;
                                                        <label>Snack</label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                            type="checkbox"
                                                            name="selimut"
                                                            checked={this.state.selimut}
                                                            onChange={this.handleChangeSelimut} />&nbsp;&nbsp;
                                                        <label>Selimut</label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input
                                                            type="checkbox"
                                                            name="bantal"
                                                            checked={this.state.bantal}
                                                            onChange={this.handleChangeBantal} />&nbsp;&nbsp;
                                                        <label>Bantal</label>
                                                    </div>
                                                </div>
                                            </div><hr/>
                                            <div class="form-group">
                                                <label>Voucher Makan</label><br/><br/>
                                                <div className="row">
                                                    <div className="col-2">
                                                        <input
                                                        type="radio"
                                                        name="voucherMakan" 
                                                        value="0"
                                                        onChange={this.handleChange.bind(this, "voucherMakan")} /> <b>0</b>&nbsp;
                                                    </div>
                                                    <div className="col-2">
                                                        <input
                                                        type="radio"
                                                        name="voucherMakan" 
                                                        value="1"
                                                        onChange={this.handleChange.bind(this, "voucherMakan")} /> <b>1</b>&nbsp;
                                                    </div>
                                                    <div className="col-2">
                                                        <input
                                                        type="radio"
                                                        name="voucherMakan" 
                                                        value="2"
                                                        onChange={this.handleChange.bind(this, "voucherMakan")} /> <b>2</b>&nbsp;
                                                    </div>
                                                    <div className="col-2">
                                                        <input
                                                        type="radio"
                                                        name="voucherMakan" 
                                                        value="3"
                                                        onChange={this.handleChange.bind(this, "voucherMakan")} /> <b>3</b>&nbsp;
                                                    </div>
                                                    <div className="col-2">
                                                        <input
                                                        type="radio"
                                                        name="voucherMakan" 
                                                        value="4"
                                                        onChange={this.handleChange.bind(this, "voucherMakan")} /> <b>4</b>&nbsp;
                                                    </div>
                                                    <div className="col-2">
                                                        <input
                                                        type="radio"
                                                        name="voucherMakan" 
                                                        value="5"
                                                        onChange={this.handleChange.bind(this, "voucherMakan")} /> <b>5</b>&nbsp;
                                                    </div>
                                                </div>
                                                <span style={{ color: 'red' }}> {this.state.errors["voucherMakan"]}</span>
                                            </div><hr/>
                                            <div class="form-group">
                                                <label>Bagasi</label>
                                                <input className="form-control" type="number" onChange={this.handleChange.bind(this, "bagasi")} />
                                                <span style={{ color: 'red' }}> {this.state.errors["bagasi"]} </span>
                                            </div>
                                            {/* <div className="form-group">
                                                <label>Foto Fasilitas</label>
                                                <div className="row">
                                                    <input type="file" />
                                                </div>
                                            </div> */}
                                            <div class="form-group">
                                                <div className="row">
                                                    <div className="col-4"></div>
                                                    <div className="col-4 text-center">
                                                        {this.state.imgLogo && [this.state.imgLogo].map((file)=>(
                                                            <img src={URL.createObjectURL(file)} alt="" width="150" height="50" />
                                                        ))}<br/><br/>
                                                        <span className="btn btn-dark" onClick={() => this.inputFileLogo()}>Upload Logo</span>
                                                        <input ref={this.fileInputLogo} type="file" onChange={this.onChangeLogo} hidden />
                                                    </div>
                                                    <div className="col-4"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card-footer">
                                            <button type="submit" class="btn btn-primary">Tambah</button>
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
