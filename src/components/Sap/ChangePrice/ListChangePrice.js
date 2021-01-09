import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Button } from 'reactstrap'

// import API_ENDPOINT from '../../../Endpoint'

export default class ListChangePrice extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // dataSap: this.props.dataSap,
            currentPage: 1,
            perPage: 10
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => {
        this.setState({
            currentPage: Number(e.target.id)
        })
    }

    getParsedDate(strDate){
        var strSplitDate = String(strDate).split(' ');
        var date = new Date(strSplitDate[0]);
        // alert(date);
        var dd = date.getDate();
        var mm = date.getMonth() + 1; //January is 0!
    
        var yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        date =  dd + "-" + mm + "-" + yyyy;
        return date.toString();
    }

    // findNumberOfPages = () => {
    //     return Math.ceil(this.props.dataSap / this.state.perPage)
    // }

    // setOffset = (value: number) => {
    //     let fromIndex = this.getFromIndex(
    //         value,
    //         this.state.perPage,
    //         this.props.dataSap
    //     )
    //     this.setState({ fromIndex, currentPage: value }, () => )
    // }

    render() {
        // const today = new Date();
        // console.log(today);

        const listSap = this.props.dataSap

        const { currentPage, perPage } = this.state;

        // Display listSap
        const indexOfLastData = currentPage * perPage
        const indexOfFirstData = indexOfLastData - perPage
        const currentListSap = listSap.slice(indexOfFirstData, indexOfLastData)


        const renderSap = currentListSap.map((el, index) => {
            return(
                <tr key={index}>
                    <td style={{ textAlign: 'center' }}>{el.id}</td>
                    <td style={{ textAlign: 'center' }}>{el.trayek}</td>
                    <td style={{ textAlign: 'center' }}>{el.priceCode}</td>
                    <td style={{ textAlign: 'center' }}>{this.getParsedDate(el.tanggalAwal)}</td>
                    <td style={{ textAlign: 'center' }}>{this.getParsedDate(el.tanggalAkhir)}</td>
                    <td style={{ textAlign: 'center' }}>{el.nominal}</td>
                </tr>
            )
        })

        // Display Page Number
        const pageNumber = []
        for(var i=1; i<=Math.ceil(listSap.length / perPage); i++) {
            pageNumber.push(
                i
            )
        }

        const renderPageNumber = pageNumber.map(number => {
            return(
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                    style={{
                        display:'inline-block',
                        padding:'5px 9px',
                        marginRight:'4px',
                        border : '1px solid #c0c0c0',
                        borderRadius:'3px',
                        background: '#e9e9e9',
                        fontSize:'12px',
                        fontWeight:'bold',

                        // margin:'0 2px 0 2px',
                        width:'30px',
                        height:'30px',
                        // textAlign:'center',
                        // verticalAlign:'middle',
                        cursor:'pointer'
                    }}
                >
                    {number}
                </li>
            )
        })

        // // Render Page Number
        // renderPageNumberss = () => {
        //     let pages = []
        //     var renderPageNumberss = ''
        //     for(let a = currentPage; a <= currentPage + 5; a++) {
        //         renderPageNumberss = pages.push(
        //             <li
        //                 key={a}
        //                 // id={number}
        //                 onClick={() => this.handleClick(a)}
        //                 style={{
        //                     display:'inline-block',
        //                     border : '1px solid blue',
        //                     background: 'green',
        //                     margin:'0 2px 0 2px',
        //                     width:'30px',
        //                     height:'30px',
        //                     textAlign:'center',
        //                     verticalAlign:'middle',
        //                     cursor:'pointer'
        //                 }}
        //             >
        //                 {a}
        //             </li>
        //         )
        //     }
        //     return pages
        // }

        return (
            <div>
                <Link className="btn btn-primary pull-right" to={"/sap/tambahHarga"}>
                    Change Price S.A.P
                </Link><br/><br/>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped text-nowrap">
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'center' }}>ID</th>
                                <th style={{ textAlign: 'center' }}>Nama Trayek</th>
                                <th style={{ textAlign: 'center' }}>Price Code</th>
                                <th style={{ textAlign: 'center' }}>Tanggal Awal</th>
                                <th style={{ textAlign: 'center' }}>Tanggal Akhir</th>
                                <th style={{ textAlign: 'center' }}>Nominal (Rp)</th>
                                {/* <th style={{ textAlign: 'center' }}>Aksi</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                renderSap
                            }
                        </tbody>
                    </table>                        
                    {/* <ul>
                        {renderSap}
                    </ul>
                    <ul id="page-numbers">
                        {renderPageNumber}
                    </ul> */}
                </div><br/>
                <ul className="text-center"
                            // style={{
                            //     display:'inline-block'
                            // }}
                        >{renderPageNumber}</ul>
            </div>
        )
    }
}
