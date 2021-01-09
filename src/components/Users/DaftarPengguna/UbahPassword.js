import React, { Component } from 'react'
import API_ENDPOINT from '../../../Endpoint'

export default class UbahPassword extends Component {

    constructor(props) {
        super(props)

        this.state = {
            oldPassword: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // CARA ENCRYPT PASSWORD JADI SHA1
        var crypto = require('crypto')

        var shasumOldPassword = crypto.createHash('sha1')
        shasumOldPassword.update(this.state.oldPassword)

        var shasumPassword = crypto.createHash('sha1')
        shasumPassword.update(this.state.password)
        // END ENCRYPT SHA1

        const paramPassword = {
            idUser: this.props.match.params.idUser,
            // oldPassword: shasumOldPassword.digest('hex'),
            // password: shasumPassword.digest('hex')
            oldPassword: this.state.oldPassword,
            password: this.state.password
        }

        API_ENDPOINT.put('http://po.bisku.id:8282/admin/user/changePassword', paramPassword)
            .then(res => {
                if (window.console || window.console.firebug) {
                    console.clear();
                    alert(res.data);
                    this.props.history.push('/dashboard');
                }
            })
            .catch(error => {
                alert('Terjadi Kesalahan!');
                this.props.history.push('/user/daftarPengguna');
            })

    }

    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="container-fluid header-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-left">
                                        <li className="breadcrumb-item"><a href="# "><b>Home</b></a></li>
                                        <li className="breadcrumb-item active"><b>Change Password</b></li>
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
                                            <h3 class="card-title">Change Password</h3>
                                        </div>
                                        <form onSubmit={this.handleSubmit}>
                                            <div class="card-body">
                                                <div class="form-group">
                                                    <label>Change Password</label>
                                                    <input className="form-control" type="text" name="oldPassword" value={this.state.oldPassword} onChange={this.handleChange} placeholder="Input Password Lama" /><br />
                                                    <input className="form-control" type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Input Password Baru" />
                                                </div>
                                            </div>

                                            <div class="card-footer">
                                                <button type="submit" class="btn btn-primary">Edit Password</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
