import React, { Component } from 'react'
import Select from 'react-select'
import API_ENDPOINT from '../../../Endpoint'

export default class TambahChannelPo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fields: {},
            errors: {},

            dataChannel: [],
            selectedChannel: ''
        }
    }

    componentDidMount() {
        API_ENDPOINT.get('/admin/channel/list')
        .then(res => {
            console.log(res);            
            this.setState({
                dataChannel: res.data
            })
        })
    }

    // dropdownChangedPO(e){
    //     this.setState({selectedIdPO: e.target.value});       
    // }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        // // Validasi channel
        // if (!fields["channelId"]) {
        //     formIsValid = false;
        //     errors["channelId"] = "Tidak boleh kosong";
        // }

        // Validasi mdrName
        if (!fields["mdrName"]) {
            formIsValid = false;
            errors["mdrName"] = "Tidak boleh kosong";
        }

        // Validasi keterangan
        if (!fields["keterangan"]) {
            formIsValid = false;
            errors["keterangan"] = "Tidak boleh kosong";
        }

        // Validasi isCashless
        if (!fields["isCashless"]) {
            formIsValid = false;
            errors["isCashless"] = "Tidak boleh kosong";
        }

        // Validasi isPercentage
        if (!fields["isPercentage"]) {
            formIsValid = false;
            errors["isPercentage"] = "Tidak boleh kosong";
        }

        // Validasi jmlhMdr
        if (!fields["jmlhMdr"]) {
            formIsValid = false;
            errors["jmlhMdr"] = "Tidak boleh kosong";
        }

        this.setState({ errors: errors });
        return formIsValid;

    }

    MakeOption = (x) => {
        return {value: x.id, label: x.mdrName}
    }

    handleChangeSelect = (e) => {
        this.setState({selectedChannel: e.value})
    }

    tambahData(e) {
        e.preventDefault();

        // console.log(this);

        const tambahData = {
            channelId: this.state.selectedChannel,
            idPo: this.props.match.params.idPo,
            isCashless: this.state.fields['isCashless'],
            isPercentage: this.state.fields['isPercentage'],
            jmlhMdr: this.state.fields['jmlhMdr'],
            keterangan: this.state.fields['keterangan'],
            mdrName: this.state.fields['mdrName'],
            isValid: true
        }
        console.log(tambahData);

        if (this.handleValidation()) {
            API_ENDPOINT.post('/admin/channel/po/add', tambahData)
                .then(res => {
                    console.log(res);
                    alert("Berhasil tambah data");
                    this.props.history.push('/pengaturan/channelPo')
                })
        }
        // else{
        //     alert("Error, terjadi kesalahan");
        // }

    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
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
                                    <li className="breadcrumb-item active"><b>Tambah Channel P.O</b></li>
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
                                        <h3 class="card-title">Tambah Channel P.O</h3>
                                    </div>
                                    <form onSubmit={this.tambahData.bind(this)}>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label>Pilih Channel</label>
                                                <Select
                                                    name="channel"
                                                    placeholder="Pilih Channel"
                                                    onChange={this.handleChangeSelect}
                                                    options={this.state.dataChannel.map(x => this.MakeOption(x))}
                                                />
                                                {/* <select class="form-control" value={this.state.selectedIdPO} onChange={this.handleChange.bind(this, "channelId")} style={{ width: '100%' }}>
                                                    <option disabled selected>Pilih Channel</option>
                                                    {
                                                        this.state.dataChannel.map((el) => {
                                                            return (
                                                                <option key={el.id} value={el.id}>{el.mdrName}</option>
                                                            )
                                                        })
                                                    }
                                                </select><br /> */}
                                                {/* <span style={{ color: 'red' }}> {this.state.errors["channelId"]} </span> */}
                                            </div>
                                            <div class="form-group">
                                                <label>Nama MDR</label>
                                                <input className="form-control" type="text" onChange={this.handleChange.bind(this, "mdrName")} />
                                                <span style={{ color: 'red' }}> {this.state.errors["mdrName"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Keterangan</label>
                                                <input className="form-control" type="text" onChange={this.handleChange.bind(this, "keterangan")} />
                                                <span style={{ color: 'red' }}> {this.state.errors["keterangan"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Cashless</label>
                                                <div className="radio">
                                                    <input
                                                        type="radio"
                                                        name="isCashless" 
                                                        value="true"
                                                        // checked={isCashless === true}
                                                        onChange={this.handleChange.bind(this, "isCashless")} /> Ya &nbsp;&nbsp;&nbsp;
                                                    <input
                                                        type="radio"
                                                        name="isCashless" 
                                                        value="false"
                                                        // checked={isCashless === false}
                                                        onChange={this.handleChange.bind(this, "isCashless")} /> Tidak &nbsp;&nbsp;&nbsp;
                                                </div>
                                                <span style={{color:'red'}}> {this.state.errors["isCashless"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Presentasi</label>
                                                <div className="radio">
                                                    <input
                                                        type="radio"
                                                        name="isPercentage" 
                                                        value="true"
                                                        //   checked={isPublished === true}
                                                        onChange={this.handleChange.bind(this, "isPercentage")} /> Ya &nbsp;&nbsp;&nbsp;
                                                    <input
                                                        type="radio"
                                                        name="isPercentage" 
                                                        value="false"
                                                        //   checked={isPublished === true}
                                                        onChange={this.handleChange.bind(this, "isPercentage")} /> Tidak &nbsp;&nbsp;&nbsp;
                                                </div>
                                                <span style={{color:'red'}}> {this.state.errors["isPercentage"]} </span>
                                            </div>
                                            <div class="form-group">
                                                <label>Jumlah MDR</label>
                                                <input className="form-control" type="number" onChange={this.handleChange.bind(this, "jmlhMdr")} />
                                                <span style={{ color: 'red' }}> {this.state.errors["jmlhMdr"]} </span>
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
