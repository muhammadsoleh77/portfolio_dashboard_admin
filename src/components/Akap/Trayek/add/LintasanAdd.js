import React, { Component } from 'react'
import Select from 'react-select'
// import TimeInput from 'react-time-input';
import TimeField from 'react-simple-timefield';


// var TimeWrapper = React.createClass({


//     onTimeChangeHandler: function (val) {

//         // do something with this value

//     },

//     render: function() {
//         return (
//             <TimeInput
//                 initTime='11:12'
//                 ref="TimeInputWrapper"
//                 className='form-control'
//                 mountFocus='true'
//                 onTimeChange={this.onTimeChangeHandler}
//             />
//         );
//     }
//  });

export default class LintasanAdd extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // waktuTiba: ''
            time: '12:00'
        }

        this.onTimeChange = this.onTimeChange.bind(this)
    }

    onTimeChange(e, value) {
        const newTime = value.replace(/-/g, ':');
        const time = newTime.substr(0, 5);
        // const timeSeconds = newTime.padEnd(8, this.state.timeSeconds.substr(5, 3));
        // const timeSecondsCustomColon = timeSeconds.replace(/:/g, '-');

        this.setState({ time });
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    // waktuTiba = (e) => {
    //     this.setState({
    //         waktuTiba: e
    //     })
    // }

    render() {

        const {values} = this.props
        // const { time } = this.state

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
                                                <label>Select City</label>
                                                <div className="row">
                                                    <div className="col-5">
                                                        <Select
                                                            name="wilayah"
                                                            placeholder="Select City"
                                                            onChange={this.props.handleChangeWilayah}
                                                            options={this.props.dataCities.map(x => this.props.OptionWilayah(x))}
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
                                                    </div>

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
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label>Lintasan</label>
                                                <div className="lintasan">
                                                    {
                                                        this.props.lintasans.map((el, index) => {
                                                            return (
                                                                <span>
                                                                    <i class="btn btn-city btn-xs">
                                                                        {el.label}&nbsp;&nbsp;&nbsp;
                                                                        <span onClick={this.props.removeLintasan.bind(this, index)}>&times;</span><br />
                                                                        {/* <input class="form-control" type="text" name="waktuTiba" onChange={(e) => this.props.urutan(e, index)} placeholder="input waktu tiba" /> */}
                                                                        {/* <TimeWrapper /> */}
                                                                        {/* <TimeInput
                                                                            initTime='00:00'
                                                                            ref="TimeInputWrapper"
                                                                            className='form-control'
                                                                            mountFocus='true'
                                                                            onTimeChange={this.state.waktuTiba()}
                                                                        /> */}
                                                                        {/* <TimeField value={values.time} onChange={(e) => this.props.waktuTiba(e, index)} /> */}
                                                                        <TimeField
                                                                            value={values.waktuTiba}
                                                                            onChange={(e) => this.props.onTimeChange(e, index)}
                                                                            style={{
                                                                                border: 'none',
                                                                                fontSize: 32,
                                                                                textAlign: 'center',
                                                                                width: '100px',
                                                                                padding: '5px 8px',
                                                                                color: '#333',
                                                                                borderRadius: 3
                                                                            }}
                                                                        />
                                                                    </i>
                                                                    <span class="strip">  </span>
                                                                </span>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>

                                            {/* <div className="form-group">
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
                                            </div> */}

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

                                            {/* <div className="form-group">
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
                                            </div> */}

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
