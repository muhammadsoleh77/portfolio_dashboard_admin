import React, { Component } from 'react'
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
import API_ENDPOINT from '../../../../Endpoint'

pdfMake.vfs = pdfFonts.pdfMake.vfs

export default class DetailSudahBayar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            idTagihanSudahBayar: this.props.match.params.idTagihan,
            dataDetailSudahBayar: {},
            detailTagihan: '',
            line: '\n'
        }
    }

    componentDidMount() {
        this.EndpointDetailSudahBayar()
    }

    EndpointDetailSudahBayar = () => {
        API_ENDPOINT.get('/admin/invoice/tagihan/detail?idTagihan=' + this.state.idTagihanSudahBayar)
        .then(res => {
            console.log(res.data);
            this.setState({
                dataDetailSudahBayar: res.data,
                detailTagihan: res.data.data
            })
        })
    }

    formatTanggal = (tanggals) => {
        var tgl = new Date(tanggals)
        var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        return tgl.getDate() + ' ' + months[tgl.getMonth()] + ' ' + tgl.getFullYear()
    }

    formatTanggalHari = (tanggals) => {
        var tgl = new Date(tanggals)
        var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"]
        var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        return hari[tgl.getDay()] + ', ' + tgl.getDate() + ' ' + months[tgl.getMonth()] + ' ' + tgl.getFullYear()
    }

    tanggalCreate = (hariIni) => {
        var d = hariIni
        var dataTanggal = d ? d.split(' ')[0] : ''

        var tgl = new Date(dataTanggal)
        var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"]
        var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        return hari[tgl.getDay()] + ', ' + tgl.getDate() + ' ' + months[tgl.getMonth()] + ' ' + tgl.getFullYear()
    }

    cetakPdf = () => {
        var currency = new Intl.NumberFormat()
        var docDefinition = {
            // info: {
            //   title: 'awesome Document',
            //   author: 'john doe',
            //   subject: 'subject of document',
            //   keywords: 'keywords for document',
            // },
            pageMargins: [40, 60, 40, 90],
            defaultStyle: {
                fontSize: 9
            },
            content: [
                {
                    widths: ['*', '*', '*', '*',],
                    fontSize: 16,
                    marginBottom: 30,
                    bold: true,
                    alignment: 'center',
                    text: 'INVOICE : ' + this.state.dataDetailSudahBayar.noInvoice, style: 'header'
                },
                {
                    alignment: 'justify',
                    marginBottom: 5,
                    // fontSize: 11,
                    bold: true,
                    columns: [
                        {
                            text: 'Customer'
                        },
                        {
                            text: 'Misc.'
                        }
                    ]
                },
                {
                    alignment: 'justify',
                    marginBottom: 5,
                    // fontSize: 10,
                    columns: [
                        {
                            // width : '*',
                            // marginTop : 40,
                            bold: true,
                            text: 'Name ' + this.state.line +
                                'Address ' + this.state.line
                        },
                        {
                            // width : '*',
                            // marginTop : 40,
                            // alignment : 'right',
                            marginLeft: -50,
                            text: ': ' + this.state.dataDetailSudahBayar.namaPerusahaanPo + '\n' +
                                ': ' + this.state.dataDetailSudahBayar.alamatPo + '\n'
                        },
                        {
                            // width : '*',
                            // marginTop : 40,
                            bold: true,
                            text: 'Date ' + this.state.line +
                                'Period ' + this.state.line +
                                'Contract No. ' + this.state.line +
                                'Contract Date ' + this.state.line
                        },
                        {
                            // width : '*',
                            // marginTop : 40,
                            // alignment : 'right',
                            marginLeft: -50,
                            text: ': ' + this.tanggalCreate(this.state.dataDetailSudahBayar.createdDate) + this.state.line +
                                ': ' + this.formatTanggal(this.state.dataDetailSudahBayar.tglAwal) + ' - ' + this.formatTanggal(this.state.dataDetailSudahBayar.tglAkhir) + '\n' +
                                ': 001/ABI-LRN/PKS/XI/2019' + this.state.line +
                                ': 01 November 2019' + this.state.line + this.state.line
                        },
                    ]
                },
            ]
        };
        var table = {
            color: '#444',
            margin: [0, 5, 0, 20],
            layout: 'lightHorizontalLines',
            table: {
                widths: [80, 200, '*', '*'],
                headerRows: 2,
                fontSize: 8,
                body: [
                    [
                        { text: 'BUS CODE', style: 'tableHeader', alignment: 'center', fontSize: 10, bold: true, fillColor: '#0074c1', fontColor: 'black', rowSpan: 2 },
                        { text: 'ROUTE', style: 'tableHeader', alignment: 'center', fontSize: 10, bold: true, fillColor: '#0074c1', fontColor: 'black', rowSpan: 2 },
                        { text: 'TRANSACTION', style: 'tableHeader', alignment: 'center', fontSize: 10, bold: true, fillColor: '#0074c1', fontColor: 'black', rowSpan: 2 },
                        { text: 'MDR (2%)', style: 'tableHeader', alignment: 'center', fontSize: 10, bold: true, fillColor: '#0074c1', fontColor: 'black', rowSpan: 2 },
                    ],
                    [
                        {},
                        {},
                        {},
                        {}
                    ]
                ]
            },
        };

        this.state.detailTagihan.forEach(function (doc) {
            table.table.body.push(
                [
                    // doc.namaTrayek,
                    { text: doc.kodeBus },
                    { text: doc.asalNama + '-' + doc.tujuanNama },
                    { text: currency.format(doc.cash), alignment: 'right' },
                    { text: currency.format(doc.mdr), alignment: 'right' },
                ]
            );
        });

        table.table.body.push(
            [
                { text: 'Total', alignment: 'center', bold: true, fillColor: '#d2d2d2', fontColor: 'black' },
                { text: '', alignment: 'right', bold: true, fillColor: '#d2d2d2', fontColor: 'black' },
                { text: currency.format(this.state.dataDetailSudahBayar.jumlahRp), alignment: 'right', bold: true, fillColor: '#d2d2d2', fontColor: 'black' },
                { text: currency.format(this.state.dataDetailSudahBayar.jumlahMdr), alignment: 'right', bold: true, fillColor: '#d2d2d2', fontColor: 'black' },
            ]
        );

        docDefinition.content.push(table);

        docDefinition.content.push({
            columns: [
                {
                    text: 'In words : ',
                    // fontSize : 11,
                    // bold : true,
                },
                {
                    bold: true,
                    marginLeft: -60,
                    text: this.state.dataDetailSudahBayar.keterangan,
                    // fontSize : 11,
                },
                {
                    // width : '*',
                    // marginTop : 40,
                    bold: true,
                    alignment: 'right',
                    text: 'Sub Total : ' + this.state.line +
                        'PPN 10% : ' + this.state.line +
                        'PPH 23 : ' + this.state.line +
                        'TOTAL : '
                },
                {
                    // width : '*',
                    // marginTop : 40,
                    alignment: 'right',
                    text: 'Rp ' + currency.format(this.state.dataDetailSudahBayar.jumlahMdr) + '\n' +
                        '---' + this.state.line +
                        '---' + this.state.line +
                        'Rp ' + currency.format(this.state.dataDetailSudahBayar.jumlahMdr)
                },
            ]
        });

        docDefinition.content.push({
            alignment: 'justify',
            marginTop: 20,
            columns: [
                {
                    // width : '*',
                    // marginTop : 20,
                    text: 'Please remit to ' + this.state.line +
                        '' + this.state.line +
                        '' + this.state.line
                },
                {
                    // width : 280,
                    marginLeft: -100,
                    bold: true,
                    text: this.state.dataDetailSudahBayar.namarek + this.state.line +
                        'A/C Number ' + this.state.line +
                        'A/C Name ' + this.state.line
                },
                {
                    // width : 280,
                    marginLeft: -210,
                    bold: true,
                    text: '' + this.state.line +
                        ': ' + this.state.dataDetailSudahBayar.norek + this.state.line +
                        ': ' + this.state.dataDetailSudahBayar.namaPerusahaan + this.state.line
                },
            ]
        });

        docDefinition.content.push(
            {
                columns: [
                    {
                        width: 280,
                        text: ''
                    },
                    {
                        alignment: 'center',
                        width: '*',
                        marginTop: 20,
                        bold: true,
                        text: this.state.dataDetailSudahBayar.namaPimpinan + this.state.line + this.state.line
                        // '( ' + data.picposisipt + ' )'
                    },
                ]
            },
            {
                // widths: ['*','*','*','*',],
                // fontSize: 16,
                // marginBottom : 5,
                marginTop: -10,
                marginLeft: 280,
                italics: true,
                alignment: 'center',
                text: '( ' + this.state.dataDetailSudahBayar.picJabatan + ' )', style: 'header'
            }
        );

        pdfMake.createPdf(docDefinition).download('reportTagihan ' + this.state.dataDetailSudahBayar.tglAwal + ' s.d ' + this.state.dataDetailSudahBayar.tglAkhir + '.pdf');
        // pdfMake.createPdf(docDefinition).open();
    }

    render() {

        var currency = new Intl.NumberFormat();

        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid header-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-left">
                                    <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                                    <li className="breadcrumb-item active"><b>Detail Sudah Bayar</b></li>
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
                                        <h3 class="card-title">Detail Tagihan</h3>
                                    </div>
                                    <div class="card-body">
                                        <div className="form-group">
                                            <h5 className="text-center"><u>INVOICE : {this.state.dataDetailSudahBayar.noInvoice}</u></h5>
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-6">
                                                    <p>Customer</p>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>Name&nbsp;</td>
                                                                <td>:</td>
                                                                <td>&nbsp;{this.state.dataDetailSudahBayar.namaPerusahaanPo}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Address&nbsp;</td>
                                                                <td>:</td>
                                                                <td>&nbsp;{this.state.dataDetailSudahBayar.alamatPo}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="col-6">
                                                    <p>Misc.</p>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>Date&nbsp;</td>
                                                                <td>:</td>
                                                                <td>&nbsp;{this.tanggalCreate(this.state.dataDetailSudahBayar.createdDate)}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Period&nbsp;</td>
                                                                <td>:</td>
                                                                <td>&nbsp;{this.formatTanggal(this.state.dataDetailSudahBayar.tglAwal)} - {this.formatTanggal(this.state.dataDetailSudahBayar.tglAkhir)}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Contract No.&nbsp;</td>
                                                                <td>:</td>
                                                                <td>&nbsp;001/ABI-LRN/PKS/XI/2019</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Contract Date&nbsp;</td>
                                                                <td>:</td>
                                                                <td>&nbsp;01 November 2019</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <table className="table table-bordered table-striped text-nowrap">
                                            <col width="5%" />
                                            <col width="10%" />
                                            <col width="10%" />
                                            <col width="10%" />
                                            <thead>
                                                <tr>
                                                    <th className="text-center"><b>BUS CODE</b></th>
                                                    <th className="text-center"><b>ROUTE</b></th>
                                                    <th className="text-center"><b>TRANSACTION</b></th>
                                                    <th className="text-center"><b>MDR (2%)</b></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.detailTagihan && this.state.detailTagihan.map((el) => {
                                                        return (
                                                            <tr>
                                                                <td className="text-center">{el.kodeBus}</td>
                                                                <td>{el.asalNama} - {el.tujuanNama}</td>
                                                                <td className="text-right">{currency.format(el.cash)}</td>
                                                                <td className="text-right">{currency.format(el.mdr)}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td className="text-center"><b>TOTAL</b></td>
                                                    <td></td>
                                                    <td className="text-right">{currency.format(this.state.dataDetailSudahBayar.jumlahRp)}</td>
                                                    <td className="text-right">{currency.format(this.state.dataDetailSudahBayar.jumlahMdr)}</td>
                                                </tr>
                                            </tfoot>
                                        </table><br />

                                        <table>
                                            <col width="5%" />
                                            <col width="10%" />
                                            <col width="10%" />
                                            <col width="10%" />
                                            <tr>
                                                <td>In words</td>
                                                <td><b>{this.state.dataDetailSudahBayar.keterangan}</b></td>
                                                <td class="text-right"><b>Sub Total</b></td>
                                                <td class="text-right">{currency.format(this.state.dataDetailSudahBayar.jumlahMdr)}</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td class="text-right"><b>PPN 10%</b></td>
                                                <td class="text-right">---</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td class="text-right"><b>PPH 23</b></td>
                                                <td class="text-right">---</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td class="text-right"><b>TOTAL</b></td>
                                                <td class="text-right">{currency.format(this.state.dataDetailSudahBayar.jumlahMdr)}</td>
                                            </tr>
                                        </table><br />

                                        <table>
                                            <col width="5%" />
                                            <col width="15%" />
                                            <col width="10%" />
                                            <col width="10%" />
                                            <tr>
                                                <td>Please remit to</td>
                                                <td><b>{this.state.dataDetailSudahBayar.namarek}</b></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>A/C Number : <b>{this.state.dataDetailSudahBayar.norek}</b></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>A/C Name : <b>{this.state.dataDetailSudahBayar.namaPerusahaan}</b></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </table><br />

                                        <div className="row">
                                            <div className="col-6">
                                                <button className="btn btn-primary" onClick={this.cetakPdf.bind(this)}>
                                                    <i className="fa fa-file-pdf"> Cetak PDF</i>
                                                </button>
                                            </div>
                                            <div className="col-6">
                                                <h6 className="text-center">{this.state.dataDetailSudahBayar.namaPimpinan}</h6>
                                                <p className="text-center">( <i>{this.state.dataDetailSudahBayar.picJabatan}</i> )</p>
                                            </div>
                                        </div>
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
