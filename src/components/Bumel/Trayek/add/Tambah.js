import React, { Component } from 'react'
import API_ENDPOINT from '../../../../Endpoint'

import TrayekAdd from './TrayekAdd'
import JadwalAdd from './JadwalAdd'
import LintasanAdd from './LintasanAdd'
import TarifAdd from './TarifAdd'

export default class Tambah extends Component {

    constructor(props) {
        super(props)

        this.state = {
            step: 1,
            idPo: '',
            nama: '',
            kode: '',
            keterangan: '',
            kontak: '',
            isPenumpang: false,
            dataPo: [],
            dataWilayah: [],
            dataLokasi: [],

            sapType: '',
            sapMaterial: '',
            materials: {},
            dataMaterial: [],

            jadwals: [],
            postWaktu: {
                waktu: ''
            },

            exist: false,
            lintasans: [],
            postLintasan: [],
            postingLin: {
                lokasiId: '',
                urutan: ''
            },

            from: '',
            to: '',
            tujuanKota: [],
            arahTrayek: [],

            dataTypeBus: [
                {id:'JA', namaTypeBus:'JAC'},
                {id:'JR', namaTypeBus:'JRC'},
                {id:'JG', namaTypeBus:'TJR'}
            ],

            tarif: '',
            tarifMember: '',
            tarifNonTunai: ''
        }
    }

    componentDidMount() {
        this.endpointPo()
        this.endpointWilayah()
    }

    endpointPo() {
        API_ENDPOINT.get('/admin/po/getAll')
        .then(res => {
            // console.log(res);
            this.setState({
                dataPo: res.data
            })
        })
    }

    endpointWilayah() {
        API_ENDPOINT.get('/admin/wilayah/list')
        .then(res => {
            this.setState({
                dataWilayah: res.data
            })
        })
    }

    // state = {
    //     step: 1,
    // }

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

    // START OPTION P.O
    OptionPo = (x) => {
        return {value: x.idPo, label: x.nama}
    }

    handleChangePo = (e) => {
        this.setState({idPo: e.value})
    }
    // END P.O

    // START OPTION TYPE BUS
    OptionTypeBus = (x) => {
        return {value: x.id, label: x.namaTypeBus}
    }

    handleChangeTypeBus = (e, index) => {
        const arahTrayek = [...this.state.arahTrayek]

        arahTrayek[index].typeBus = e.value

        this.getEndpointMaterial(arahTrayek[index].typeBus)
        this.setState({arahTrayek})

        // API_ENDPOINT.get('/id/co/bisku/payload/sap/material?group=' + arahTrayek[index].typeBus)
        // .then(res => {
        //     this.setState({
        //         dataMaterial: res.data.trayek
        //     })
        // })
        // .catch(error => {
        //     alert('error SAP Material')
        // })
    }

    getEndpointMaterial(value) {
        API_ENDPOINT.get('/id/co/bisku/payload/sap/material?group=' + value)
        .then(res => {
            this.setState({
                dataMaterial: res.data.trayek
            })
        })
        .catch(error => {
            alert('error SAP Material')
        })
    }
    // END TYPE BUS

    // START OPTION MATERIAL S.A.P
    OptionMaterial = (x) => {
        return {value: x.MATERIAL, label: x.DESCRIPTION}
    }

    handleChangeMaterial = (e, index) => {

        // this.setState({sapMaterial: e.value})

        const arahTrayek = [...this.state.arahTrayek]

        // UNTUK MENDAPATKAN PRICECODE, QRIS, EMONEY, ETIKET
        const material = e.value
        for(var i=0; i<this.state.dataMaterial.length; i++) {
            if(material === this.state.dataMaterial[i].MATERIAL) {
                var c = this.state.dataMaterial[i]
                
                arahTrayek[index].sapCash = c.CASH
                arahTrayek[index].sapEtiket = c.ETIKET
                arahTrayek[index].sapMaterial = c.MATERIAL
                arahTrayek[index].sapPriceCode = c.PRICECODE
                arahTrayek[index].sapQris = c.QRIS

                this.setState({
                    arahTrayek
                })
            }
        }
        // END PRICECODE, QRIS, EMONEY, ETIKET
    }
    // END MATERIAL S.A.P

    handleChange = input => event => {
        this.setState({
            [input] : event.target.value
        })
    }

    // changeSapTypeBus = (e) => {

    //     this.setState({
    //         sapType: e.target.value
    //     })

    //     const idSap = e.target.value;
    //     API_ENDPOINT.get('/id/co/bisku/payload/sap/material?group=' + idSap)
    //     .then(res => {
    //         this.setState({
    //             dataMaterial: res.data.trayek
    //         })
    //     })
    //     .catch(error => {
    //         alert('error SAP Material')
    //     })
    // }

    // changeSapMaterial = (e) => {

    //     this.setState({
    //         sapMaterial: e.target.value
    //     })

    //     const material = e.target.value
    //     for(var i=0; i<this.state.dataMaterial.length; i++) {
    //         if(material === this.state.dataMaterial[i].MATERIAL) {
    //             var c = this.state.dataMaterial[i]
    //             this.setState({
    //                 materials: c
    //             })
    //         }
    //     }
    // }

    handleChangePenumpang = input => event => {
        this.setState({
            isPenumpang : !this.state.isPenumpang
        })
    }

    handleChangeWaktu (target) {
        // console.log(target)
        const { name, value } = target;

        this.setState(prevState => ({
            postWaktu: { ...prevState.postWaktu, [name]: value }
        }));
    };

    handleSubmit = e => {
        e.preventDefault();

        this.setState(prevState => ({
            jadwals: [...prevState.jadwals, prevState.postWaktu],
            postWaktu: { waktu: "" }
        }));
    };

    removeWaktu = (index) => {
        this.setState(prevState => ({
            jadwals: [...prevState.jadwals.slice(0, index), ...prevState.jadwals.slice(index + 1)]
        }))
    }

    // START OPTION WILAYAH
    OptionWilayah = (x) => {
        return {value: x.id, label: x.namaWilayah}
    }

    handleChangeWilayah = (e) => {
        const id = e.value
        API_ENDPOINT.get('/admin/lokasi/list/wilayah/' + id)
        .then(res => {
            this.setState({
                dataLokasi: res.data
            })
        })
    }
    // END WIILAYAH

    addLintasan = (city) => {
        // console.log(city);
        var exists = false;
        
        if(this.state.lintasans.length > 0) {
            for(var a=0; a<this.state.lintasans.length; a++) {
                if(this.state.lintasans[a].namaLokasi === city.namaLokasi) {
                    // this.setState({
                        exists = true;
                        this.setState({
                            exist: exists
                        })
                    // })
                    a = this.state.lintasans.length;
                }
            }
            if(!exists) {
                this.state.lintasans.push(city);
                // this.setState(prevState => ({
                //     lintasans: [...prevState.lintasans, prevState.postLintasan],
                //     postLintasan: city
                //     // postLintasan: {lokasiId: "", urutan: ""}
                // }));
            }
        } else {
            this.state.lintasans.push(city)
            // this.setState(prevState => ({
            //     lintasans: [...prevState.lintasans, prevState.postLintasan],
            //     postLintasan: city
            //     // postLintasan: {lokasiId: "", urutan: ""}
            // }));
        }
    }

    removeLintasan = (index) => {
        // this.setState(prevState => ({
        //     lintasans: [...prevState.lintasans.slice(0, index), ...prevState.lintasans.slice(index + 1)]
        // }))
        var array = this.state.lintasans;
        if (index > -1) {
            array.splice(index, 1);
            this.setState({lintasans: array});
        }
    }

    urutan = (e, index) => {
        // const { name, value } = target;

        const lintasans = [...this.state.lintasans]

        lintasans[index].urutan = e.target.value

        this.setState({lintasans})

        // var z = this.state.dataLintasan
        // z.concat(datas)
        // this.setState({
        //     postLintasan: z
        // })

        // this.setState(prevState => ({
        //     // lintasans: [...prevState.lintasans, prevState.postingLin],
            // postLintasan: [...prevState.postLintasan, {lokasiId: el.id, [name]: value}],
        //     // postingLin: {...prevState.postingLin, lokasiId: el.id, [name]: value}
        // }));
    }

    // START OPTION KOTA ASAL
    OptionKotaAsal = (x, index) => {
        return {value: index, label: x.namaLokasi}
    }

    handleChangekotaAsal = (e) => {
        // this.setState(prevStep => ({
        //     postTarif: {...prevStep.postTarif, : e.target.value}
        // }))

        // var from = this.state.from
        // from = e.target.value
        this.setState({
            from: e.value
        })
        var tujuanKota = []
        this.state.lintasans.forEach(function(el) {
            tujuanKota.push(el)
        })
        var item = parseInt(e.value) + 1;
        tujuanKota.splice(0, item);
        this.setState({
            tujuanKota: tujuanKota
        })
    }
    // END KOTA ASAL

    // START OPTION KOTA AKHIR
    OptionKotaAkhir = (x, index) => {
        return {value: index, label: x.namaLokasi}
    }

    handleChangekotaAkhir = (e) => {
        // this.setState(prevStep => ({
        //     postTarif: {...prevStep.postTarif, [e.target.name]: e.target.value}
        // }))
        this.setState({
            to: e.value
        })
    }
    // END KOTA AKHIR

    addTarif = e => {
        e.preventDefault();

        // this.setState(prevStep => ({
        //     tarifs: [...prevStep.tarifs, prevStep.postTarif],
        //     postTarif: {lokasiAwalId:"", lokasiAkhirId:""}
        // }))

        var dari = this.state.lintasans[this.state.from];
        var ke = this.state.tujuanKota[this.state.to];
        var arahTrayek = {
            idDari: dari.id,
            namaDari: dari.namaLokasi,
            idKe: ke.id,
            namaKe: ke.namaLokasi,
            // tarif: this.state.tarif,
            // tarifMember: this.state.tarifMember,
            // tarifNonTunai: this.state.tarifNonTunai
        }
        var exist = false;
        for(var i = 0; i<this.state.arahTrayek.length; i++) {
            if(this.state.arahTrayek[i].idDari === arahTrayek.idDari && this.state.arahTrayek[i].idKe === arahTrayek.idKe) {
                exist = true;
            }
        }

        if(!exist) {
            var b = this.state.arahTrayek
            b.push(arahTrayek)
            this.setState({
                arahTrayek: b
            })
        }
        // console.log(this.state.arahTrayek);
    }

    changeTarif = (e, index) => {
        // ambil Data array arahTrayek dahulu
        const arahTrayek = [...this.state.arahTrayek]
        // end Data array

        // Inisiasi tarif di Array Arah Trayek per index
        arahTrayek[index].tarif = e.target.value
        // End Inisiasi
        
        this.setState({
            arahTrayek
        })
    }

    changeTarifMember = (e, index) => {
        // ambil Data array arahTrayek dahulu
        const arahTrayek = [...this.state.arahTrayek]
        // end Data array

        // Inisiasi tarifMember di Array Arah Trayek per index
        arahTrayek[index].tarifMember = e.target.value
        // End Inisiasi
        
        this.setState({
            arahTrayek
        })
    }

    changeTarifNonTunai = (e, index) => {
        // ambil Data array arahTrayek dahulu
        const arahTrayek = [...this.state.arahTrayek]
        // end Data array

        // Inisiasi tarifNonTunai di Array Arah Trayek per index
        arahTrayek[index].tarifNonTunai = e.target.value
        // End Inisiasi
        
        this.setState({
            arahTrayek
        })
    }

    removeTarif = (e, index) => {
        e.preventDefault()
        // this.setState(prevState => ({
        //     lintasans: [...prevState.lintasans.slice(0, index), ...prevState.lintasans.slice(index + 1)]
        // }))
        var array = [...this.state.arahTrayek];
        console.log(array);
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({arahTrayek: array}, () => {console.log(this.state.arahTrayek);});
        }
    }

    submit = (e) => {
        e.preventDefault();
        // var dataArahTrayek
        // this.state.arahTrayek.forEach(function(data) {
        //     // console.log(data);
        //     // lokasiAwalId = data.idDari,
        //     // lokasiAkhirId = data.idKe,
        //     // tarif = tarifss
        //     dataArahTrayek = data
        //     console.log(dataArahTrayek);
        // })
        // var d = this.state.tarifs
        // d.push({
        //     lokasiAwalId: c.idDari,
        //     lokasiAkhirId: c.idKe,
        //     tarif: tarifss
        // })

        var dataLinsss = []
        for(var q=0; q<this.state.lintasans.length; q++){
            dataLinsss.push({
                lokasiId: this.state.lintasans[q].id,
                urutan: this.state.lintasans[q].urutan
            })
        }
        // console.log(dataLinsss);

        var dataTarif =[]
        for(var j=0; j<this.state.arahTrayek.length; j++) {
            // dataArahTrayek = this.state.arahTrayek[j]
            dataTarif.push({
                lokasiAkhirId: this.state.arahTrayek[j].idKe,
                lokasiAkhirNama: this.state.arahTrayek[j].namaKe,
                lokasiAwalId: this.state.arahTrayek[j].idDari,
                lokasiAwalNama: this.state.arahTrayek[j].namaDari,
                tarif: this.state.arahTrayek[j].tarif,
                tarifMember: this.state.arahTrayek[j].tarifMember,
                tarifNonTunai: this.state.arahTrayek[j].tarifNonTunai,
                typeBus: this.state.arahTrayek[j].typeBus,
                sapCash: this.state.arahTrayek[j].sapCash,
                sapEtiket: this.state.arahTrayek[j].sapEtiket,
                sapMaterial: this.state.arahTrayek[j].sapMaterial,
                sapPriceCode: this.state.arahTrayek[j].sapPriceCode,
                sapQris: this.state.arahTrayek[j].sapQris,
            })

        }

        const paramTrayek = {
            idPo: this.state.idPo,
            isPenumpang: this.state.isPenumpang,
            jadwals: this.state.jadwals,
            // keterangan: this.state.keterangan,
            kode: this.state.kode,
            kontak: this.state.kontak,
            // lintasans: this.state.postLintasan,
            lintasans: dataLinsss,
            nama: this.state.nama,
            // sapCash: this.state.materials.CASH,
            // sapEtiket: this.state.materials.ETIKET,
            // sapMaterial: this.state.materials.MATERIAL,
            // sapPriceCode: this.state.materials.PRICECODE,
            // sapQris: this.state.materials.QRIS,

            // tarifs: [
            //     {
            //         lokasiAkhirId: dataArahTrayek.idKe,
            //         lokasiAkhirNama: dataArahTrayek.namaKe,
            //         lokasiAwalId: dataArahTrayek.idDari,
            //         lokasiAwalNama: dataArahTrayek.namaDari,
            //         tarif: this.state.tarif,
            //         tarifMember: this.state.tarifMember,
            //         tarifNonTunai: this.state.tarifNonTunai,
            //         sapCash: this.state.materials.CASH,
            //         sapEtiket: this.state.materials.ETIKET,
            //         sapMaterial: this.state.materials.MATERIAL,
            //         sapPriceCode: this.state.materials.PRICECODE,
            //         sapQris: this.state.materials.QRIS,
            //     }
            // ],
            tarifs: dataTarif
        }
        // console.log(paramTrayek);

        API_ENDPOINT.post('/admin/bumeltrayek/add', paramTrayek)
        .then(res => {
            // console.log(res);
            // alert(res.data.message)
            // this.props.history.push('/bumel/trayek')

            alert(res.data.message + '\nNext Penyesuain change tarif S.A.P')
            this.props.history.push('/sap/tambahHarga')
        })
        .catch(error => {
            // console.log(error);
            alert('error')
        })
    }

    render() {

        const {step} = this.state
        const {idPo, dataPo, dataTypeBus, sapType, sapMaterial, materials, dataMaterial, nama, kode, keterangan, kontak, isPenumpang, jadwals, postWaktu, dataWilayah, dataLokasi, lintasans, postLintasan, tujuanKota, arahTrayek} = this.state
        const values = {idPo, dataPo, dataTypeBus, sapType, sapMaterial, materials, dataMaterial, nama, kode, keterangan, kontak, isPenumpang, jadwals, postWaktu, dataWilayah, dataLokasi, lintasans, postLintasan, tujuanKota, arahTrayek}

        switch(step) {
            case 1:
                return <TrayekAdd
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    handleChangePenumpang = {this.handleChangePenumpang}
                    values = {values}
                    dataPo = {dataPo}
                    OptionPo = {this.OptionPo}
                    handleChangePo = {this.handleChangePo}
                    dataTypeBus = {dataTypeBus}
                    OptionTypeBus = {this.OptionTypeBus}
                    handleChangeTypeBus = {this.handleChangeTypeBus}
                    dataMaterial = {dataMaterial}
                    OptionMaterial = {this.OptionMaterial}
                    handleChangeMaterial = {this.handleChangeMaterial}
                    // changeSapTypeBus = {this.changeSapTypeBus}
                    changeSapMaterial = {this.changeSapMaterial}
                />
            case 2:
                return <JadwalAdd 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange = {this.handleChange}
                    handleChangeWaktu = {(target) => this.handleChangeWaktu(target)}
                    handleSubmit = {this.handleSubmit}
                    removeWaktu = {this.removeWaktu}
                    postWaktu = {postWaktu}
                    jadwals={jadwals}
                />
            case 3:
                return <LintasanAdd 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    dataWilayah = {dataWilayah}
                    dataLokasi = {dataLokasi}
                    OptionWilayah = {this.OptionWilayah}
                    handleChangeWilayah = {this.handleChangeWilayah}
                    addLintasan = {this.addLintasan}
                    lintasans = {lintasans}
                    removeLintasan = {this.removeLintasan}
                    postLintasan = {postLintasan}
                    urutan = {this.urutan}
                />
            case 4:
                return <TarifAdd
                    submit = {this.submit}
                    prevStep = {this.prevStep}
                    idPo = {idPo}
                    dataLintasan = {lintasans}
                    OptionKotaAsal = {this.OptionKotaAsal}
                    handleChangekotaAsal = {this.handleChangekotaAsal}
                    OptionKotaAkhir = {this.OptionKotaAkhir}
                    handleChangekotaAkhir = {this.handleChangekotaAkhir}
                    addTarif = {this.addTarif}
                    changeTarif = {this.changeTarif}
                    changeTarifMember = {this.changeTarifMember}
                    changeTarifNonTunai = {this.changeTarifNonTunai}
                    tujuanKota = {tujuanKota}
                    arahTrayek = {arahTrayek}

                    dataTypeBus = {dataTypeBus}
                    OptionTypeBus = {this.OptionTypeBus}
                    handleChangeTypeBus = {this.handleChangeTypeBus}

                    dataMaterial = {dataMaterial}
                    OptionMaterial = {this.OptionMaterial}
                    handleChangeMaterial = {this.handleChangeMaterial}

                    removeTarif = {this.removeTarif}
                />
            default:
                return false
        }
    }
}
