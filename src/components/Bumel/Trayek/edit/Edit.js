import React, { Component } from 'react'
import API_ENDPOINT from '../../../../Endpoint'

import TrayekEdit from './TrayekEdit'
import JadwalEdit from './JadwalEdit'
import LintasanEdit from './LintasanEdit'
import TarifEdit from './TarifEdit'

export default class EditTrayek extends Component {

    constructor(props) {
        super(props)

        this.state = {
            step: 1,
            idPo: '',
            idTrayek: '',
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

            dataTrayekById: [],

            dataTypeBus: [
                {id:'JA', namaTypeBus:'JAC'},
                {id:'JR', namaTypeBus:'JRC'},
                {id:'JG', namaTypeBus:'TJR'}
            ]
        }
    }

    componentDidMount() {
        this.endpointWilayah()
        this.endpointTrayekId()
        this.endpointPo()
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

    endpointTrayekId() {
        const idTrayek = this.props.match.params.idTrayek
        API_ENDPOINT.get('/admin/bumeltrayek/' + idTrayek)
        .then(res => {
            console.log(res);
            this.setState({
                dataTrayekById: res.data,
                idTrayek: res.data.idTrayek,
                idPo: res.data.idPo,
                nama: res.data.nama,
                kode: res.data.kode,
                kontak: res.data.kontak,
                isPenumpang: res.data.isPenumpang,
                jadwals: res.data.jadwals,
                lintasans: res.data.lintasans.sort((a, b) => (a.idTrayekLintasan - b.idTrayekLintasan)),
                arahTrayek: res.data.tarifs,
                // tmpArahTrayek: res.data.tarifs
            })
            this.endpointMaterialId(res.data.tarifs)
        })
        .catch(error => {
            console.log(error);
            alert('data Trayek By Id Error')
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

    // GET DATA MATERIAL DARI DATA EXISTING TRAYEK BY ID
    endpointMaterialId(id) {
        for(var x=0; x<id.length; x++) {
            console.log(id[x]);
            API_ENDPOINT.get('/id/co/bisku/payload/sap/material?group=' + id[x].typeBus)
            .then(res => {
                // MENGGABUNGKAN SEMUA DATA MATERIAL DARI SETIAP INDEX
                this.setState({
                    dataMaterial: [...this.state.dataMaterial, ...res.data.trayek]
                }, () => {console.log(this.state.dataMaterial);})
                // END MENGGABUNGKAN
            })
            .catch(error => {
                alert('error SAP Material')
            })
        }
    }
    // END GET DATA MATERIAL

    // START OPTION TYPE BUS
    OptionTypeBus = (x) => {
        return {value: x.id, label: x.namaTypeBus}
    }

    handleChangeTypeBus = (e, index) => {
        // this.setState({typeBus: e.value})

        const arahTrayek = [...this.state.arahTrayek]

        arahTrayek[index].typeBus = e.value

        this.setState({arahTrayek})
        // this.endpointMaterialId(e.value)

        API_ENDPOINT.get('/id/co/bisku/payload/sap/material?group=' + e.value)
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
        // console.log(x);
        return {value: x.MATERIAL, label: x.DESCRIPTION}
    }

    handleChangeMaterial = (e, index) => {
        // this.setState({sapMaterial: e.value})

        const arahTrayek = [...this.state.arahTrayek]

        arahTrayek[index].sapMaterial = e.value

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

    changeSapTypeBus = (e) => {

        this.setState({
            sapType: e.target.value
        })

        const idSap = e.target.value;
        API_ENDPOINT.get('/id/co/bisku/payload/sap/material?group=' + idSap)
        .then(res => {
            this.setState({
                dataMaterial: res.data.trayek
            })
        })
        .catch(error => {
            alert('error SAP Material')
        })
    }

    changeSapMaterial = (e) => {

        this.setState({
            sapMaterial: e.target.value
        })

        const material = e.target.value
        for(var i=0; i<this.state.dataMaterial.length; i++) {
            if(material === this.state.dataMaterial[i].MATERIAL) {
                var c = this.state.dataMaterial[i]
                this.setState({
                    materials: c
                })
            }
        }
    }

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

    handleChangeWilayah = (e) => {
        const id = e.target.value
        API_ENDPOINT.get('/admin/lokasi/list/wilayah/' + id)
        .then(res => {
            this.setState({
                dataLokasi: res.data
            })
        })
    }

    addLintasan = (city) => {
        // console.log(city);

        // city.forEach(function(datas) {
        //     console.log(datas);
        // })

        var v = {
            lokasiId: city.id,
            namaLokasi: city.namaLokasi
        }
        // console.log(v);

        // var kota
        // kota.push({
        //     lokasiId: city.id,
        //     namaLokasi: city.namaLokasi
        // })
        // console.log(kota);

        var exists = false;
        
        if(this.state.lintasans.length > 0) {
            for(var a=0; a<this.state.lintasans.length; a++) {
                if(this.state.lintasans[a].namaLokasi === v.namaLokasi) {
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
                this.state.lintasans.push(v);
                // this.setState(prevState => ({
                //     lintasans: [...prevState.lintasans, prevState.postLintasan],
                //     postLintasan: city
                //     // postLintasan: {lokasiId: "", urutan: ""}
                // }));
            }
        } else {
            this.state.lintasans.push(v)
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

    urutan = (target, el) => {
        // const { name, value } = target;
        const { value } = target

        let {lintasans} = this.state

        // menemukan index keberapa
        const dataIndex = lintasans.findIndex(urutans => {
            return urutans.urutan === el.urutan
        })
        // console.log(dataIndex);
        // end

        // Jika index selain -1, maka jalankan ubah tarif ini
        if(dataIndex !== -1) {
            // console.log(arahTrayek[dataIndex]);
            lintasans[dataIndex].urutan = value
            this.setState({lintasans})
        }
        console.log(lintasans);
        // end

        // var dataLin
        // this.state.lintasans.forEach(function(data) {
        //     console.log(data);
        //     dataLin = data
        // })
        // var datas = {
        //     idLokasi: dataLin.id
        // }

        // var z = this.state.dataLintasan
        // z.concat(datas)
        // this.setState({
        //     postLintasan: z
        // })

        // this.setState(prevState => ({
        //     // lintasans: [...prevState.lintasans, prevState.postingLin],
        //     postLintasan: [...prevState.postLintasan, {lokasiId: el.id, [name]: value}],
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
        // console.log(item);
        tujuanKota.splice(0, item);
        this.setState({
            tujuanKota: tujuanKota
        })
        // console.log(tujuanKota);
    }
    // END OPTION KOTA ASAL

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
    // END OPTION KOTA AKHIR

    addTarif = (e) => {
        e.preventDefault();

        // this.setState(prevStep => ({
        //     tarifs: [...prevStep.tarifs, prevStep.postTarif],
        //     postTarif: {lokasiAwalId:"", lokasiAkhirId:""}
        // }))

        var dari = this.state.lintasans[this.state.from];
        var ke = this.state.tujuanKota[this.state.to];

        var arahTrayek
        if(dari.lokasiId && ke.lokasiId) {
            arahTrayek = {
                lokasiAwalId: dari.lokasiId,
                lokasiAwalNama: dari.namaLokasi,
                lokasiAkhirId: ke.lokasiId,
                lokasiAkhirNama: ke.namaLokasi
            }
        } else {
            arahTrayek = {
                lokasiAwalId: dari.id,
                lokasiAwalNama: dari.namaLokasi,
                lokasiAkhirId: ke.id,
                lokasiAkhirNama: ke.namaLokasi
            }
        }
        console.log(arahTrayek);

        var exist2 = false;
        for(var i = 0; i<this.state.arahTrayek.length; i++) {
            if(this.state.arahTrayek[i].lokasiAwalId === arahTrayek.lokasiAwalId && this.state.arahTrayek[i].lokasiAkhirId === arahTrayek.lokasiAkhirId) {
                exist2 = true;
            }
        }

        if(!exist2) {
            var b = this.state.arahTrayek
            b.push(arahTrayek)
            this.setState({
                arahTrayek: b
            })
        }
    }

    changeTarif = (e, el) => {
        let {arahTrayek} = this.state

        // menemukan index keberapa
        const dataIndex = arahTrayek.findIndex(harga => {
            return harga.tarif === el.tarif
        })
        // console.log(dataIndex);
        // end

        // Jika index selain -1, maka jalankan ubah tarif ini
        if(dataIndex !== -1) {
            // console.log(arahTrayek[dataIndex]);
            arahTrayek[dataIndex].tarif = e.target.value
            this.setState({arahTrayek})
        }
        // end
    }

    changeTarifMember = (e, el) => {
        let {arahTrayek} = this.state

        // menemukan index keberapa
        const dataIndex = arahTrayek.findIndex(harga => {
            return harga.tarifMember === el.tarifMember
        })
        // console.log(dataIndex);
        // end

        // Jika index selain -1, maka jalankan ubah tarif ini
        if(dataIndex !== -1) {
            // console.log(arahTrayek[dataIndex]);
            arahTrayek[dataIndex].tarifMember = e.target.value
            this.setState({arahTrayek})
        }
        // end
    }

    changeTarifNonTunai = (e, el) => {
        let {arahTrayek} = this.state

        // menemukan index keberapa
        const dataIndex = arahTrayek.findIndex(harga => {
            return harga.tarifNonTunai === el.tarifNonTunai
        })
        // console.log(dataIndex);
        // end

        // Jika index selain -1, maka jalankan ubah tarif ini
        if(dataIndex !== -1) {
            // console.log(arahTrayek[dataIndex]);
            arahTrayek[dataIndex].tarifNonTunai = e.target.value
            this.setState({arahTrayek})
        }
        // end
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
        var dataArahTrayek
        // this.state.arahTrayek.forEach(function(data) {
        //     // console.log(data);
        //     // lokasiAwalId = data.idDari,
        //     // lokasiAkhirId = data.idKe,
        //     // tarif = tarifss
        //     dataArahTrayek = data
        // })

        var tt =[]
        for(var j=0; j<this.state.arahTrayek.length; j++) {
            dataArahTrayek = this.state.arahTrayek[j]
            if(dataArahTrayek.idTrayekTarif) {
                tt.push({
                    idTrayekTarif: dataArahTrayek.idTrayekTarif,
                    lokasiAkhirId: dataArahTrayek.lokasiAkhirId,
                    lokasiAkhirNama: dataArahTrayek.lokasiAkhirNama,
                    lokasiAwalId: dataArahTrayek.lokasiAwalId,
                    lokasiAwalNama: dataArahTrayek.lokasiAwalNama,
                    tarif: dataArahTrayek.tarif,
                    tarifMember: dataArahTrayek.tarifMember,
                    tarifNonTunai: dataArahTrayek.tarifNonTunai,
                    typeBus: dataArahTrayek.typeBus,
                    sapCash: dataArahTrayek.sapCash,
                    sapEtiket: dataArahTrayek.sapEtiket,
                    sapMaterial: dataArahTrayek.sapMaterial,
                    sapPriceCode: dataArahTrayek.sapPriceCode,
                    sapQris: dataArahTrayek.sapQris,
                })
            } else {
                tt.push({
                    // idTrayekTarif: dataArahTrayek.idTrayekTarif,
                    lokasiAkhirId: dataArahTrayek.lokasiAkhirId,
                    lokasiAkhirNama: dataArahTrayek.lokasiAkhirNama,
                    lokasiAwalId: dataArahTrayek.lokasiAwalId,
                    lokasiAwalNama: dataArahTrayek.lokasiAwalNama,
                    tarif: dataArahTrayek.tarif,
                    tarifMember: dataArahTrayek.tarifMember,
                    tarifNonTunai: dataArahTrayek.tarifNonTunai,
                    typeBus: dataArahTrayek.typeBus,
                    sapCash: dataArahTrayek.sapCash,
                    sapEtiket: dataArahTrayek.sapEtiket,
                    sapMaterial: dataArahTrayek.sapMaterial,
                    sapPriceCode: dataArahTrayek.sapPriceCode,
                    sapQris: dataArahTrayek.sapQris,
                })
            }

        }
        // console.log(tt);

        // var d = this.state.tarifs
        // d.push({
        //     lokasiAwalId: c.idDari,
        //     lokasiAkhirId: c.idKe,
        //     tarif: tarifss
        // })

        var paramTrayek

        if(this.state.idPo === '1') {
            paramTrayek = {
                idTrayek: this.state.idTrayek,
                idPo: this.state.idPo,
                isPenumpang: this.state.isPenumpang,
                jadwals: this.state.jadwals,
                kode: this.state.kode,
                kontak: this.state.kontak,
                // lintasans: this.state.postLintasan,
                lintasans: this.state.lintasans,
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
                //         tarif: this.state.tarif
                //     }
                // ],
                tarifs: tt
            }
        } else {
            paramTrayek = {
                idTrayek: this.state.idTrayek,
                idPo: this.state.idPo,
                isPenumpang: this.state.isPenumpang,
                jadwals: this.state.jadwals,
                kode: this.state.kode,
                kontak: this.state.kontak,
                // lintasans: this.state.postLintasan,
                lintasans: this.state.lintasans,
                nama: this.state.nama,
                // tarifs: [
                //     {
                //         lokasiAkhirId: dataArahTrayek.idKe,
                //         lokasiAkhirNama: dataArahTrayek.namaKe,
                //         lokasiAwalId: dataArahTrayek.idDari,
                //         lokasiAwalNama: dataArahTrayek.namaDari,
                //         tarif: this.state.tarif
                //     }
                // ],
                tarifs: tt
            }
        }

        console.log(paramTrayek);

        API_ENDPOINT.put('/admin/bumeltrayek/edit', paramTrayek)
        .then(res => {
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
        const {dataTrayekById, idPo, dataPo, dataTypeBus, typeBus, sapMaterial, materials, dataMaterial, nama, kode, keterangan, kontak, isPenumpang, jadwals, postWaktu, dataWilayah, dataLokasi, lintasans, postLintasan, tujuanKota, arahTrayek} = this.state
        const values = {dataTrayekById, idPo, dataPo, dataTypeBus, typeBus, sapMaterial, materials, dataMaterial, nama, kode, keterangan, kontak, isPenumpang, jadwals, postWaktu, dataWilayah, dataLokasi, lintasans, postLintasan, tujuanKota, arahTrayek}

        switch(step) {
            case 1:
                return <TrayekEdit
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    handleChangeNama = {this.handleChangeNama}
                    handleChangePenumpang = {this.handleChangePenumpang}
                    values = {values}
                    dataPo = {dataPo}
                    OptionPo = {this.OptionPo}
                    handleChangePo = {this.handleChangePo}
                    dataTypeBus = {dataTypeBus}
                    OptionTypeBus = {this.OptionTypeBus}
                    handleChangeTypeBus = {this.handleChangeTypeBus}
                    dataTrayekById = {dataTrayekById}
                    dataMaterial = {dataMaterial}
                    OptionMaterial = {this.OptionMaterial}
                    handleChangeMaterial = {this.handleChangeMaterial}
                    changeSapTypeBus = {this.changeSapTypeBus}
                    changeSapMaterial = {this.changeSapMaterial}
                />
            case 2:
                return <JadwalEdit 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange = {this.handleChange}
                    handleChangeWaktu = {(target) => this.handleChangeWaktu(target)}
                    handleSubmit = {this.handleSubmit}
                    removeWaktu = {this.removeWaktu}
                    postWaktu = {postWaktu}
                    jadwals={jadwals}
                    dataTrayekById = {dataTrayekById}
                />
            case 3:
                return <LintasanEdit 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    dataWilayah = {dataWilayah}
                    dataLokasi = {dataLokasi}
                    handleChangeWilayah = {this.handleChangeWilayah}
                    addLintasan = {this.addLintasan}
                    lintasans = {lintasans}
                    removeLintasan = {this.removeLintasan}
                    postLintasan = {postLintasan}
                    urutan = {this.urutan}
                />
            case 4:
                return <TarifEdit
                    submit = {this.submit}
                    prevStep = {this.prevStep}
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
                    // tmpArahTrayek = {tmpArahTrayek}

                    typeBus = {typeBus}

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
