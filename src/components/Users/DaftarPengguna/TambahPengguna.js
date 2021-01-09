import React, { Component } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import Moment from 'moment'

import API_ENDPOINT from '../../../Endpoint'

export default class TambahPengguna extends Component {

    constructor(props) {
        super(props)

        this.fileInputLogo = React.createRef()

        this.state = {
            dataPo: [],
            dataRole: [],
            dataRoles: [],
            dataLoket: [],
            dataBusCrew: [],
            dataBus: {},
            ada: false,

            roles: '',
            dateTglLahir: '',

            fields: {},
            errors: {},
        }
    }

    handleChangeDateTglLahir = (date) => {
        this.setState({
            dateTglLahir: date
        })
    }

    inputFileLogo = () => {
        if (this.fileInputLogo.current !== undefined && this.fileInputLogo.current.click !== undefined)
            this.fileInputLogo.current.click()
    }

    onChangeLogo = (event)=>{
        this.setState({
            imgLogo: event.target.files[0]
        })
    }

    componentDidMount() {
        this.endpointPo()
        this.endpointRole()
    }

    endpointPo() {
        API_ENDPOINT.get('/admin/po/getAll')
        .then(res => {
            this.setState({
                dataPo: res.data
            })
        })
    }

    endpointRole() {
        API_ENDPOINT.get('/admin/role/list')
        .then(res => {
            this.setState({
                dataRole: res.data
            })
        })
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        // // Validasi Bus
        // if(!fields["idTable"]){
        //     formIsValid = false;
        //     errors["idTable"] = "Tidak boleh kosong";
        // }

        // Validasi Nama
        if(!fields["name"]){
            formIsValid = false;
            errors["name"] = "Tidak boleh kosong";
        }

        // Validasi Role
        if(!fields["password"]){
            formIsValid = false;
            errors["password"] = "Tidak boleh kosong";
        }

        // Validasi Email
        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Tidak boleh kosong";
        }

        // Validasi Gender
        if(!fields["gender"]){
            formIsValid = false;
            errors["gender"] = "Tidak boleh kosong";
        }

        // Validasi idFb
        if(!fields["idfb"]){
            formIsValid = false;
            errors["idfb"] = "Tidak boleh kosong";
        }

        // Validasi idGplus
        if(!fields["idgplus"]){
            formIsValid = false;
            errors["idgplus"] = "Tidak boleh kosong";
        }

        // // Validasi Tgl Lahir
        // if(!fields["tglLahir"]){
        //     formIsValid = false;
        //     errors["tglLahir"] = "Tidak boleh kosong";
        // }

        // Validasi Tgl Lahir
        if(!this.state.dateTglLahir) {
            formIsValid = false;
            errors["tglLahir"] = "Tidak boleh kosong";
        }

        // Validasi No HP
        if(!fields["nohp"]){
            formIsValid = false;
            errors["nohp"] = "Tidak boleh kosong";
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    changePo = (e) => {
        
        this.setState({
            idPo: e.target.value
        })

        const idPo = e.target.value
        API_ENDPOINT.get('/admin/bus/' + idPo)
        .then(res => {
            this.setState({
                dataBus: res.data
            })
        })
    }

    // START OPTION ROLE
    OptionRole = (x) => {
        return {value: x.name, label: x.name}
    }

    handleChangeRole = (e) => {

        this.setState({namaRol: e.value})

        const role = e.value

        var exist = false;
        if(this.state.dataRoles.length>0) {
            for(var a=0; a<this.state.dataRoles.length; a++) {
                if(this.state.dataRoles[a].role === role) {
                    exist = true;
                    this.setState({
                        ada: exist
                    })
                    a = this.state.dataRoles.length
                }
            }
            if(!exist) {
                var z = this.state.dataRoles;
                z.push({
                    role: e.value,
                    idTabel: this.state.selectedPo
                })
                this.setState({
                    dataRoles: z
                })
                // this.state.dataRoles.push({name})
            }
        } else {
            var x = this.state.dataRoles;
                x.push({
                    role: e.value,
                    idTabel: this.state.selectedPo
                })
            this.setState({
                dataRoles: x
            })
            // this.state.dataRoles.push({name})
        }
        console.log(this.state.dataRoles);

    }

    removeRole = (index) => {
        // console.log(index);
        const dataRoles = [...this.state.dataRoles]
        // if(index > -1) {
            dataRoles.splice(index, 1)
            this.setState({dataRoles}, () => {console.log(this.state.dataRoles);})
        // }
    }
    // END ROLE

    // START OPTION P.O LOKET
    OptionPoLoket = (x) => {
        return {value: x.idPo, label: x.nama}
    }

    handleChangePoLoket = (e) => {
        this.setState({selectedPoLoket: e.value})

        const paramPo = {
            idPo: e.value,
            orderBy: 'idPo',
            pageNo: 0,
            pageRow: 100
        }

        API_ENDPOINT.post('/admin/loket/list', paramPo)
        .then(res => {
            console.log(res.data.content);
            this.setState({
                dataLoket: res.data.content
            })
        })

        // for(var i=0; i<this.state.dataRoles.length; i++) {
        //     var x = this.state.dataRoles
        //     x.push({
        //         name: this.state.dataRoles[i].name,
        //         idTabel: e.value
        //     })
        //     this.setState({
        //         dataRoles: x
        //     })
        //     console.log(x);
        // }
    }
    // END P.O LOKET

    // START OPTION P.O CREW
    OptionPoCrew = (x) => {
        return {value: x.idPo, label: x.nama}
    }

    handleChangePoCrew = (e) => {
        this.setState({selectedPoCrew: e.value})

        API_ENDPOINT.get('/admin/bus/listAll/' + e.value)
        .then(res => {
            this.setState({
                dataBusCrew : res.data
            })
        })
    }
    // END OPTION P.O CREW

    handleChangePos = (e, index) => {
        const dataRoles = [...this.state.dataRoles]

        dataRoles[index].idTabel = e.target.value

        this.setState({dataRoles})
    }

    handleChangeCrew = (e, index) => {
        const dataRoles = [...this.state.dataRoles]

        dataRoles[index].idTabel = e.target.value

        this.setState({dataRoles})
    }

    handleChangeLoket = (e, index) => {
        const dataRoles = [...this.state.dataRoles]

        dataRoles[index].idTabel = e.target.value

        this.setState({dataRoles})
    }

    tambahData(e) {
        e.preventDefault()

        const tglLahirs = Moment(this.state.dateTglLahir).format("YYYY-MM-DD")

        // let formData = new FormData();

        // if(this.state.imgLogo) {
        //     formData.append('foto', this.state.imgLogo);
        // }
        // formData.append('email', this.state.fields['email']);
        // formData.append('gender', this.state.fields['gender']);
        // formData.append('idfb', this.state.fields['idfb']);
        // formData.append('idgplus', this.state.fields['idgplus']);
        // formData.append('name', this.state.fields['name']);
        // formData.append('nohp', this.state.fields['nohp']);
        // formData.append('password', this.state.fields['password']);
        // formData.append('role', JSON.stringify(this.state.dataRoles));
        // formData.append('tglLahir', this.state.fields['tglLahir']);

        const addUser = {
            email: this.state.fields['email'],
            gender: this.state.fields['gender'],
            idfb: this.state.fields['idfb'],
            idgplus: this.state.fields['idgplus'],
            name: this.state.fields['name'],
            nohp: this.state.fields['nohp'],
            password: this.state.fields['password'],
            role: this.state.dataRoles,
            // tglLahir: this.state.fields['tglLahir']
            tglLahir: tglLahirs
        }
        console.log(addUser);

        if(this.handleValidation()){
            // API_ENDPOINT({
            //     method: 'post',
            //     url: '/admin/user/add',
            //     data: formData,
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //     }
            // }).then(res => {
            //     console.log(res);
            //     alert("Berhasil tambah data");
            //     this.props.history.push('/user/daftarPengguna')
            // }).catch(error => {
            //     console.log(error);
            //     alert('Error, Harap input semua data');
            // })
            API_ENDPOINT.post('/admin/user/add', addUser)
            .then(res => {
                // console.log(res.data);
                alert(res.data.message);
                this.props.history.push('/user/daftarPengguna');
            })
            .catch(error => {
                alert('error')
            })
        }
    }

    render() {

        let rol;
        // let dataTabel;

        if(this.state.namaRol === 'ROLE_PO') {
            rol = <div className="form-group">
                <label>Daftar P.O</label>
                <table className="table table-bordered text-nowrap">
                    <thead>
                        <tr>
                            <th className="text-center">ID TABEL</th>
                            <th className="text-center">Nama P.O</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.dataPo.map((el) => (
                                <tr>
                                    <td className="text-center">{el.idPo}</td>
                                    <td className="text-center">{el.nama}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        } else if(this.state.namaRol === 'ROLE_LOKET') {
            rol = <div className="form-group">
                <label>Pilih P.O</label>
                <Select
                    name="po"
                    placeholder="Pilih P.O"
                    onChange={this.handleChangePoLoket}
                    options={this.state.dataPo.map(x => this.OptionPoLoket(x))}
                />
            {
                this.state.selectedPoLoket && (
                    <div className="form-group">
                        <label>Daftar Loket</label>
                        <table className="table table-bordered text-nowrap">
                            <thead>
                                <tr>
                                    <th className="text-center">ID TABEL</th>
                                    <th className="text-center">Nama Loket</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.dataLoket.map((el) => (
                                        <tr>
                                            <td className="text-center">{el.id}</td>
                                            <td className="text-center">{el.nama}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }
            </div>
        } else if(this.state.namaRol === 'ROLE_CREW') {
            rol = <div className="form-group">
                <label>Pilih P.O</label>
                <Select
                    name="po"
                    placeholder="Pilih P.O"
                    onChange={this.handleChangePoCrew}
                    options={this.state.dataPo.map(x => this.OptionPoCrew(x))}
                />
            {
                this.state.selectedPoCrew && (
                <div className="form-group">
                    <label>Daftar Bus</label>
                    <table className="table table-bordered text-nowrap">
                        <thead>
                            <tr>
                                <th className="text-center">ID TABEL</th>
                                <th className="text-center">Nama Bus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.dataBusCrew.map((el) => (
                                    <tr>
                                        <td className="text-center">{el.idBus}</td>
                                        <td className="text-center">{el.id}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                )
            }
            </div>
        }

        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid header-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-left">
                            <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                            <li className="breadcrumb-item active"><b>Tambah Pengguna</b></li>
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
                                        <h3 class="card-title">Tambah Pengguna</h3>
                                    </div>
                                    <form onSubmit={this.tambahData.bind(this)}>
                                        <div class="card-body">
                                            {/* <div class="form-group">
                                                <label>Pilih P.O</label>
                                                <select class="form-control" onChange={this.changePo} style={{ width: '100%' }}>
                                                    <option disabled selected>Pilih P.O</option>
                                                    {
                                                        this.state.dataPo.map((el) => {
                                                            return (
                                                                <option key={el.idPo} value={el.idPo}>{el.nama}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div> */}
                                            {/* <div class="form-group">
                                                <label>Pilih Bus</label>
                                                <select class="form-control" onChange={this.handleChange.bind(this, 'idTable')} style={{ width: '100%' }}>
                                                    <option disabled selected>Pilih Bus</option>
                                                    <option value="1">BUS 001</option>
                                                    <option value="2">BUS 002</option>
                                                    <option value="3">BUS 003</option>
                                                </select>
                                                <span style={{color:'red'}}> {this.state.errors["idTable"]} </span><br/>
                                            </div> */}
                                            <div class="form-group">
                                                <label>No Handphone (Default Username)</label>
                                                <input className="form-control" type="text" onChange={this.handleChange.bind(this, "nohp")} />
                                                <span style={{color:'red'}}> {this.state.errors["nohp"]} </span><br/>
                                            </div>
                                            <div class="form-group">
                                                <label>Nama Pengguna</label>
                                                <input className="form-control" type="text" onChange={this.handleChange.bind(this, "name")} />
                                                <span style={{color:'red'}}> {this.state.errors["name"]} </span><br/>
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input className="form-control" type="text" name="password" onChange={this.handleChange.bind(this,"password")} />
                                                <span style={{color:'red'}}> {this.state.errors["password"]} </span><br/>
                                            </div>
                                            <div class="form-group">
                                                <label>Pilih Role</label>
                                                <Select
                                                    name="role"
                                                    placeholder="Pilih Role"
                                                    onChange={this.handleChangeRole}
                                                    options={this.state.dataRole.map(x => this.OptionRole(x))}
                                                />
                                                {/* <select class="form-control" onChange={this.handleChangeRole} style={{ width: '100%' }}>
                                                    <option disabled selected>Pilih Role</option>
                                                    {
                                                        this.state.dataRole.map((el) => {
                                                            return (
                                                                <option key={el.id} value={el.name}>{el.name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                                <span style={{color:'red'}}> {this.state.errors["roleName"]} </span><br/> */}
                                            </div>

                                            <div>
                                                {rol}
                                            </div>
                                            
                                            <div className="form-group">
                                                <label>Role Terpilih</label>
                                                <div className="lintasan">
                                                    {
                                                        this.state.dataRoles.map((el, index) => {
                                                            // console.log(el);
                                                            if(el.role === 'ROLE_PO') 
                                                                return(
                                                                    <span>
                                                                        <i class="btn btn-city btn-xs">
                                                                            {el.role}&nbsp;&nbsp;&nbsp;
                                                                            <span onClick={this.removeRole.bind(this, index)}>&times;</span><br/>
                                                                            {/* <Select
                                                                                name="po"
                                                                                placeholder="Pilih P.O"
                                                                                onChange={this.handleChangePo}
                                                                                options={this.state.dataPo.map(x => this.OptionPo(x))}
                                                                            /> */}
                                                                            <input class="form-control" type="number" onChange={(e) => this.handleChangePos(e, index)} name="urutan"  placeholder="Input ID Tabel" />
                                                                        </i>
                                                                        <span class="strip"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                                                                    </span>
                                                                )
                                                            
                                                            if(el.role === 'ROLE_USER') 
                                                                return(
                                                                    <span>
                                                                        <i class="btn btn-city btn-xs">
                                                                            {el.role}&nbsp;&nbsp;&nbsp;
                                                                            <span onClick={this.removeRole.bind(this, index)}>&times;</span><br/>
                                                                            {/* <Select
                                                                                name="po"
                                                                                placeholder="Pilih P.O"
                                                                                onChange={this.handleChangePo}
                                                                                options={this.state.dataPo.map(x => this.OptionPo(x))}
                                                                            /> */}
                                                                            {/* <input class="form-control" type="number" onChange={(e) => this.handleChangeUser(e, index)} name="urutan"  placeholder="Input ID Tabel" /> */}
                                                                        </i>
                                                                        <span class="strip"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                                                                    </span>
                                                                )

                                                            if(el.role === 'ROLE_ADMIN') 
                                                                return(
                                                                    <span>
                                                                        <i class="btn btn-city btn-xs">
                                                                            {el.role}&nbsp;&nbsp;&nbsp;
                                                                            <span onClick={this.removeRole.bind(this, index)}>&times;</span><br/>
                                                                            {/* <Select
                                                                                name="po"
                                                                                placeholder="Pilih P.O"
                                                                                onChange={this.handleChangePo}
                                                                                options={this.state.dataPo.map(x => this.OptionPo(x))}
                                                                            /> */}
                                                                            {/* <input class="form-control" type="number" onChange={(e) => this.handleChangeUser(e, index)} name="urutan"  placeholder="Input ID Tabel" /> */}
                                                                        </i>
                                                                        <span class="strip"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                                                                    </span>
                                                                )
                                                            
                                                            if(el.role === 'ROLE_AGEN') 
                                                                return(
                                                                    <span>
                                                                        <i class="btn btn-city btn-xs">
                                                                            {el.role}&nbsp;&nbsp;&nbsp;
                                                                            <span onClick={this.removeRole.bind(this, index)}>&times;</span><br/>
                                                                            {/* <Select
                                                                                name="po"
                                                                                placeholder="Pilih P.O"
                                                                                onChange={this.handleChangePo}
                                                                                options={this.state.dataPo.map(x => this.OptionPo(x))}
                                                                            /> */}
                                                                            {/* <input class="form-control" type="number" onChange={(e) => this.handleChangeUser(e, index)} name="urutan"  placeholder="Input ID Tabel" /> */}
                                                                        </i>
                                                                        <span class="strip"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                                                                    </span>
                                                                )
                                                            
                                                            if(el.role === 'ROLE_PARTNER') 
                                                                return(
                                                                    <span>
                                                                        <i class="btn btn-city btn-xs">
                                                                            {el.role}&nbsp;&nbsp;&nbsp;
                                                                            <span onClick={this.removeRole.bind(this, index)}>&times;</span><br/>
                                                                            {/* <Select
                                                                                name="po"
                                                                                placeholder="Pilih P.O"
                                                                                onChange={this.handleChangePo}
                                                                                options={this.state.dataPo.map(x => this.OptionPo(x))}
                                                                            /> */}
                                                                            {/* <input class="form-control" type="number" onChange={(e) => this.handleChangeCrew(e, index)} name="urutan"  placeholder="Input ID Tabel" /> */}
                                                                        </i>
                                                                        <span class="strip"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                                                                    </span>
                                                                )

                                                            // if(el.name === 'ROLE_CREW')
                                                            if(this.state.selectedPoCrew)
                                                                return(
                                                                    <span>
                                                                        <i class="btn btn-city btn-xs">
                                                                            {el.role}&nbsp;&nbsp;&nbsp;
                                                                            <span onClick={this.removeRole.bind(this, index)}>&times;</span><br/>
                                                                            {/* <Select
                                                                                name="po"
                                                                                placeholder="Pilih P.O"
                                                                                onChange={this.handleChangePo}
                                                                                options={this.state.dataPo.map(x => this.OptionPo(x))}
                                                                            /> */}
                                                                            <input class="form-control" type="number" onChange={(e) => this.handleChangeCrew(e, index)} name="urutan"  placeholder="Input ID Tabel" />
                                                                        </i>
                                                                        <span class="strip"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                                                                    </span>
                                                                )

                                                            // if(el.name === 'ROLE_LOKET')
                                                            if(this.state.selectedPoLoket)
                                                                return(
                                                                    <span>
                                                                        <i class="btn btn-city btn-xs">
                                                                            {el.role}&nbsp;&nbsp;&nbsp;
                                                                            <span onClick={this.removeRole.bind(this, index)}>&times;</span><br/>
                                                                            {/* <Select
                                                                                name="po"
                                                                                placeholder="Pilih P.O"
                                                                                onChange={this.handleChangePo}
                                                                                options={this.state.dataPo.map(x => this.OptionPo(x))}
                                                                            /> */}
                                                                            <input class="form-control" type="number" onChange={(e) => this.handleChangeLoket(e, index)} name="urutan"  placeholder="Input ID Tabel" />
                                                                        </i>
                                                                        <span class="strip"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                                                                    </span>
                                                                )

                                                            
                                                            // return (
                                                            //     <span>
                                                            //         <i class="btn btn-city btn-xs">
                                                            //             {el.name}&nbsp;&nbsp;&nbsp;
                                                            //             <span onClick={this.removeRole.bind(this, index)}>&times;</span><br/>
                                                            //             <input class="form-control" type="number" name="urutan"  placeholder="Input ID Tabel" />
                                                            //         </i>
                                                            //         <span class="strip"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                                                            //     </span>
                                                            // )
                                                            return(
                                                                <div></div>
                                                            )
                                                        })
                                                    }
                                                    {/* {
                                                        this.props.lintasans.map((el, index) => {
                                                            // console.log(el);
                                                            return(
                                                                <span>
                                                                    <i class="btn btn-city btn-xs">
                                                                        {el.namaLokasi}&nbsp;&nbsp;&nbsp;
                                                                        <span onClick={this.props.removeLintasan.bind(this, index)}>&times;</span><br/>
                                                                        <input class="form-control" type="number" name="urutan" onChange={(e) => this.props.urutan(e.target, el)} placeholder="input urutan" />
                                                                    </i>
                                                                    <span class="strip"> ---- </span>
                                                                </span>
                                                            )
                                                        })
                                                    } */}
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Jenis Kelamin</label>
                                                <div className="radio">
                                                    <input
                                                        type="radio"
                                                        name="gender" 
                                                        value="Laki-laki"
                                                        //   checked={isPublished === true}
                                                        onChange={this.handleChange.bind(this, "gender")} /> Laki-laki &nbsp;&nbsp;&nbsp;
                                                    <input
                                                        type="radio"
                                                        name="gender" 
                                                        value="Perempuan"
                                                        //   checked={isPublished === true}
                                                        onChange={this.handleChange.bind(this, "gender")} /> Perempuan &nbsp;&nbsp;&nbsp;
                                                </div>
                                                <span style={{color:'red'}}> {this.state.errors["gender"]} </span><br/>
                                            </div>
                                            <div class="form-group customDatePickerWidth">
                                                <label>Tanggal Lahir</label>
                                                <DatePicker
                                                    className="form-control" 
                                                    dateFormat="dd-MM-yyyy"
                                                    placeholderText="Tanggal Lahir" 
                                                    selected={this.state.dateTglLahir} 
                                                    onChange={this.handleChangeDateTglLahir}
                                                />
                                                <span style={{color:'red'}}> {this.state.errors["tglLahir"]} </span><br/>
                                            </div>
                                            {/* <div class="form-group">
                                                <label>Tanggal Lahir</label>
                                                <input className="form-control" type="date" onChange={this.handleChange.bind(this, "tglLahir")} />
                                                <span style={{color:'red'}}> {this.state.errors["tglLahir"]} </span><br/>
                                            </div> */}
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input className="form-control" type="email" onChange={this.handleChange.bind(this, "email")} />
                                                <span style={{color:'red'}}> {this.state.errors["email"]} </span><br/>
                                            </div>
                                            <div class="form-group">
                                                <label>Facebook ID</label>
                                                <input className="form-control" type="text" onChange={this.handleChange.bind(this, "idfb")} />
                                                <span style={{color:'red'}}> {this.state.errors["idfb"]} </span><br/>
                                            </div>
                                            <div class="form-group">
                                                <label>G-Plus ID</label>
                                                <input className="form-control" type="text" onChange={this.handleChange.bind(this, "idgplus")} />
                                                <span style={{color:'red'}}> {this.state.errors["idgplus"]} </span><br/>
                                            </div>
                                            {/* <div class="form-group">
                                                <label>Pilih Logo</label><br/>
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
                                            </div> */}
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
