import React, { Component } from 'react';

export default class Dashboard1 extends Component {
  render() {
    return (
      <div className="content-wrapper" style={{backgroundColor:'#00173B'}}>
        <div className="content-header">
          <div className="container-fluid header-fluid">
            <div className="row mb-2">
              {/* <div className="col-sm-6">
                <h1 className="m-0 text-dark">Dashboard</h1>
              </div> */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-left">
                  {/* <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li> */}
                  <li className="breadcrumb-item active"><b>Dashboard</b></li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {/* <div className="col-lg-3 col-6"> */}
              <div className="col-lg-3">
                <div className="small-box" style={{backgroundColor:'#343700'}}>
                  <div className="inner" style={{color:'#ffffff'}}>
                    <p className="text-left">Income</p>
                    <h3 className="text-right">150</h3>
                  </div>
                  {/* <div className="icon">
                    <i className="ion ion-person"></i>
                  </div> */}
                  {/* <a href="# " className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a> */}
                </div>
              </div>
              <div className="col-lg-3">
                {/* <div className="small-box bg-success"> */}
                <div className="small-box" style={{backgroundColor:'#33013E'}}>
                  <div className="inner" style={{color:'#ffffff'}}>
                    <p className="text-left">Live Passenger</p>
                    <h3 className="text-right">53<sup style={{ fontSize: '20px' }}>%</sup></h3>
                  </div>
                  {/* <div className="icon">
                    <i className="ion ion-person"></i>
                  </div> */}
                  {/* <a href="# " className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a> */}
                </div>
              </div>
              <div className="col-lg-3">
                <div className="small-box" style={{backgroundColor:'#0D3402'}}>
                  <div className="inner" style={{color:'#ffffff'}}>
                    <p className="text-left">Live Bus</p>
                    <h3 className="text-right">44</h3>
                  </div>
                  {/* <div className="icon">
                    <i className="ion ion-social-usd"></i>
                  </div> */}
                  {/* <a href="# " className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a> */}
                </div>
              </div>
              <div className="col-lg-3">
                <div className="small-box" style={{backgroundColor:'#33071B'}}>
                  <div className="inner" style={{color:'#ffffff'}}>
                    <p className="text-left">Refund</p>
                    <h3 className="text-right">65</h3>
                  </div>
                  {/* <div className="icon">
                    <i className="ion ion-social-usd"></i>
                  </div> */}
                  {/* <a href="# " className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
