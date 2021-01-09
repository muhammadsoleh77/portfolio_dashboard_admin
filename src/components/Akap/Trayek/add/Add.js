import React, { Component } from 'react'
import API_ENDPOINT from '../../../../Endpoint'
import axios from 'axios'

import TrayekAdd from './TrayekAdd'
import LintasanAdd from './LintasanAdd'
import ArahTrayekAdd from './ArahTrayekAdd'
import AgenAdd from './AgenAdd'

export default class Add extends Component {

    constructor(props) {
        super(props)

        this.state = {
            step: 1,
            tanggal: '',
            dataCities: [],
            // idPo: '',
            // nama: '',
            // kode: '',
            // keterangan: '',
            // kontak: '',
            // isPenumpang: false,
            dataPo: [],
            // dataWilayah: [],
            // dataLokasi: [],

            // sapType: '',
            // sapMaterial: '',
            // materials: {},
            // dataMaterial: [],

            // jadwals: [],
            // postWaktu: {
            //     waktu: ''
            // },

            exist: false,
            lintasans: [],
            waktuTiba: '',
            // postLintasan: [],
            // postingLin: {
            //     lokasiId: '',
            //     urutan: ''
            // },

            // from: '',
            // to: '',
            // tujuanKota: [],
            // arahTrayek: [],

            // dataTypeBus: [
            //     {id:'JA', namaTypeBus:'JAC'},
            //     {id:'JR', namaTypeBus:'JRC'},
            //     {id:'JG', namaTypeBus:'TJR'}
            // ],

            // tarif: '',
            // tarifMember: '',
            // tarifNonTunai: ''
        }
    }

    nextStep = () => {
        const {step} = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const {step} = this.state
        this.setState({
            step: step - 1
        })
    }

    componentDidMount() {
        this.endpointPo()
        this.endpointCities()
        // this.endpointWilayah()
    }

    endpointPo() {
        API_ENDPOINT.get('/admin/po/getAll')
        .then((res) => {
            this.setState({
                dataPo: res.data
            })
        })
    }

    endpointCities() {
        axios.get(`http://52.163.218.136:8080/allCities`)
        .then(res => {
            // console.log(res.data.data);
            this.setState({
                dataCities: res.data.data
            })
        })
    }

    // START OPTION P.O
    OptionPo = (x) => {
        return {value: x.idPo, label: x.nama}
    }

    handleChangePo = (e) => {
        this.setState({idPo: e.value})
    }
    // END P.O

    handleChange = input => event => {
        this.setState({
            [input] : event.target.value
        })
    }

    // START OPTION WILAYAH
    OptionWilayah = (x) => {
        return {value: x.cityID, label: x.cityName}
    }

    handleChangeWilayah = (e) => {
        // console.log(e);
        // const id = e.value
        // API_ENDPOINT.get('/admin/lokasi/list/wilayah/' + id)
        // .then(res => {
        //     this.setState({
        //         dataLokasi: res.data
        //     })
        // })
        // this.setState({idCity: e.value})

        var exists = false;

        if(this.state.lintasans.length > 0) {
            for(var a=0; a<this.state.lintasans.length; a++) {
                if(this.state.lintasans[a].label === e.label) {
                    exists = true
                }
            }
            if(!exists) {
                this.setState({
                    lintasans : [
                        ...this.state.lintasans,
                        e
                    ]
                })
            }
        } else {
            this.setState({
                lintasans : [
                    ...this.state.lintasans,
                    e
                ]
            })
        }
    }
    // END WIILAYAH

    removeLintasan = (index) => {
        var array = this.state.lintasans;
        if (index > -1) {
            array.splice(index, 1);
            this.setState({lintasans: array});
        }
    }

    onTimeChange = (e, index) => {
        const lintasans = [...this.state.lintasans]

        console.log(e.target.value);

        lintasans[index].waktuTiba = e.target.value

        // this.setState({waktuTiba: e})

        // this.setState({
        //     lintasans : [
        //         ...this.state.lintasans,
        //         e
        //     ]
        // })

        // const newTime = value.replace(/-/g, ':');
        // const time = newTime.substr(0, 5);
        // const timeSeconds = newTime.padEnd(8, this.state.timeSeconds.substr(5, 3));
        // const timeSecondsCustomColon = timeSeconds.replace(/:/g, '-');

        this.setState({ lintasans });
    }

    render() {

        const {step} = this.state
        const {dataPo, tanggal, dataCities, lintasans, waktuTiba} = this.state
        const values = {dataPo, tanggal, dataCities, lintasans, waktuTiba}

        switch(step) {
            case 1:
                return <TrayekAdd
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    // handleChangePenumpang = {this.handleChangePenumpang}
                    values = {values}
                    dataPo = {dataPo}
                    OptionPo = {this.OptionPo}
                    handleChangePo = {this.handleChangePo}
                    // dataTypeBus = {dataTypeBus}
                    // OptionTypeBus = {this.OptionTypeBus}
                    // handleChangeTypeBus = {this.handleChangeTypeBus}
                    // dataMaterial = {dataMaterial}
                    // OptionMaterial = {this.OptionMaterial}
                    // handleChangeMaterial = {this.handleChangeMaterial}
                    // // changeSapTypeBus = {this.changeSapTypeBus}
                    // changeSapMaterial = {this.changeSapMaterial}
                />
            case 2:
                return <LintasanAdd 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values = {values}
                    // dataWilayah = {dataWilayah}
                    // dataLokasi = {dataLokasi}
                    dataCities = {dataCities}
                    OptionWilayah = {this.OptionWilayah}
                    handleChangeWilayah = {this.handleChangeWilayah}
                    // addLintasan = {this.addLintasan}
                    lintasans = {lintasans}
                    removeLintasan = {this.removeLintasan}
                    // postLintasan = {postLintasan}
                    // urutan = {this.urutan}
                    onTimeChange = {this.onTimeChange}
                />
            case 3:
                return <ArahTrayekAdd 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    // dataWilayah = {dataWilayah}
                    // dataLokasi = {dataLokasi}
                    // OptionWilayah = {this.OptionWilayah}
                    // handleChangeWilayah = {this.handleChangeWilayah}
                    // addLintasan = {this.addLintasan}
                    // lintasans = {lintasans}
                    // removeLintasan = {this.removeLintasan}
                    // postLintasan = {postLintasan}
                    // urutan = {this.urutan}
                />
            case 4:
                return <AgenAdd
                    submit = {this.submit}
                    prevStep = {this.prevStep}
                    // idPo = {idPo}
                    // dataLintasan = {lintasans}
                    // OptionKotaAsal = {this.OptionKotaAsal}
                    // handleChangekotaAsal = {this.handleChangekotaAsal}
                    // OptionKotaAkhir = {this.OptionKotaAkhir}
                    // handleChangekotaAkhir = {this.handleChangekotaAkhir}
                    // addTarif = {this.addTarif}
                    // changeTarif = {this.changeTarif}
                    // changeTarifMember = {this.changeTarifMember}
                    // changeTarifNonTunai = {this.changeTarifNonTunai}
                    // tujuanKota = {tujuanKota}
                    // arahTrayek = {arahTrayek}

                    // dataTypeBus = {dataTypeBus}
                    // OptionTypeBus = {this.OptionTypeBus}
                    // handleChangeTypeBus = {this.handleChangeTypeBus}

                    // dataMaterial = {dataMaterial}
                    // OptionMaterial = {this.OptionMaterial}
                    // handleChangeMaterial = {this.handleChangeMaterial}

                    // removeTarif = {this.removeTarif}
                />
            default:
                return false
        }
    }
}
