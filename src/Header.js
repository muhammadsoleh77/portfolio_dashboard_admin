import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'

export default class Header extends Component {

    signOut(e) {
        e.preventDefault()
        localStorage.clear();
        window.location.href = '/';
    }

    render(){
        return (
            <nav className="main-header navbar navbar-expand navbar-white navbar-light" style={{backgroundColor:'rgb(4,29,70)', opacity:'1', boxShadow:'0px 0px 18px #0000004D', backdropFilter:'blur(4px)', borderBottom:'none', position:'fixed', width:'100%'}}>
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" data-widget="pushmenu" to="#" role="button" style={{color:'#808B9D'}}><i className="fas fa-bars" style={{fontSize:'1.5em'}}></i></Link>
                    </li>
                </ul>
                {/* <ul className="navbar-nav ml-auto"> */}
                <ul style={{position:'relative', top:'0', left:'28%', margin:'0 auto', }}>
                    <li className="nav-item dropdown">
                        <Link className="nav-link" data-toggle="dropdown" to="#" style={{marginRight:'-25px'}}>
                        {/* <i className="fas fa-sign-out-alt"></i> */}
                        <img src="./img/logout.png" alt="User Avatar" className="img-size-50 mr-3 img-circle" style={{width:'30px', height:'30px', marginTop:'-5px'}} />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                            <Button className="dropdown-item" onClick={e=>this.signOut(e)}>
                                <div className="media">
                                    <img src="./img/logout2.png" alt="User Avatar" className="img-size-10 mr-4 img-circle" style={{width:'20px'}} />
                                    <div className="media-body">
                                        <h5 className="dropdown-item-title">
                                        Logout
                                        {/* <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span> */}
                                        </h5>
                                        {/* <p className="text-sm">Call me whenever you can...</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p> */}
                                    </div>
                                </div>
                            </Button>
                            {/* <div className="dropdown-divider"></div> */}
                        </div>
                    </li>
                </ul>
            </nav>
        )
    }
}
