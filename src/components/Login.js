import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'reactstrap';

import { Input, InputAdornment, TextField, ThemeProvider, createMuiTheme } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import VpnKeyIcon from '@material-ui/icons/VpnKey'

import { makeStyles } from '@material-ui/core/styles';

import Logo from './img/logo_login.png'

// import '../App.css'

// import API_ENDPOINT from '../../../Endpoint';

import axios from 'axios'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSignedUp: false,
      isLoading: false,
      admin: '',
      bukanAdmin: false
    }
  }

  state = {
    username: '',
    password: '',
  }

  handleChangeUser = event => {
    this.setState({ username: event.target.value });
  }

  handleChangePass = event => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isLoading: true });

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    // SERVICE DEV
    axios.post('http://52.163.218.136:8282/auth/signin', user)

      // SERVICE LIVE
      //axios.post('http://po.bisku.id:8282/auth/signin', user)

      // SERVICE MNC
      // axios.post('http://192.168.1.7:8282/auth/signin', user)

      // SERVICE BASEMENT
      // axios.post('http://192.168.0.185:8282/auth/signin', user)
      .then(res => {
        if (res) {
          this.setState({
            admin: res.data.roles.includes("ROLE_ADMIN")
          })

          if (this.state.admin) {
            localStorage.setItem("token", res.data.token);
            this.setState({
              isSignedUp: true
            })
          } else {
            alert('Anda Tidak bisa Akses')
            this.setState({ isLoading: false })
          }
        }
      })
      .catch(error => {
        // console.log(error.response);

        if (navigator.onLine) {
          alert(error.response.data.message)
          // alert('online')
        } else {
          alert('Check Your Internet Connection!')
        }

        this.setState({ isLoading: false })
      })
  }


  render() {

    if (this.state.isSignedUp) {
      return <Redirect to='/dashboard' />;
    }

    // const classes = useStyles();

    const useStyles = makeStyles((theme) => ({
      margin: {
        margin: theme.spacing(1),
      },
    }));

    const theme = createMuiTheme({
      overrides: {
        MuiInputLabel: { // Name of the component ⚛️ / style sheet
          root: { // Name of the rule
            color: "#01B2FE",
            "&$focused": { // increase the specificity for the pseudo class
              color: "#01B2FE",
            }
          }
        },
        MuiInput: {
          underline: {
            '&:before': { //underline color when textfield is inactive
              borderBottomColor: 'transparent',
            },
            '&:hover:not($disabled):before': { //underline color when hovered 
              borderBottomColor: 'transparent',
            },
            '&:after': { //underline color when textfield is inactive
              borderBottomColor: '#01B2FE',
            },
            '&:hover:not($disabled):after': { //underline color when hovered 
              borderBottomColor: '#01B2FE',
            },
          }
        },
        MuiInputBase: {
          input: {
            color: '#5D6F8D'
          }
        }
      }
    });

    return (
      <div>
        <div className="hold-transition login-page" style={{ backgroundColor: '#041D46', backgroundImage: "url(" + Logo + ")" }}>
          <Container>
            <Row className="justify-content-center">
              <Col md="4">
                <Card style={{ boxShadow: '0px 0px 20px #001029', borderRadius: '10px', height: '300px', width: '300px', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', background: 'rgba(0, 0, 0, 0.15)', display: 'flex', margin: '0 auto' }}>
                  {/* <Card className="p-4"> */}
                  <div class="m-b-none form-center">
                    <form >
                      <h4 className="text-center logo-login" id="logo-login" style={{ marginTop: '-20px' }}><b>DASHBOARD PO</b></h4>
                      {/* <p className="text-muted text-center logo-login">DASHBOARD PO</p> */}
                      {/* <InputGroup className="mb-3" style={{marginTop:'40px'}}>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" name="username" placeholder="Username / Handphone" autoComplete="username" onChange={this.handleChangeUser} />
                      </InputGroup> */}
                      <ThemeProvider theme={theme}>
                        <TextField
                          style={{ marginTop: '20px', marginBottom: '30px' }}
                          className={useStyles.margin}
                          // id="input-with-icon-textfield"
                          fullWidth='true'
                          // label="TextField"
                          autoComplete="off"
                          placeholder="Username / Handphone"
                          onChange={this.handleChangeUser}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle style={{ color: '#5D6F8D' }} />
                              </InputAdornment>
                            ),
                          }}
                        />
                        {/* <InputGroup className="mb-3" style={{marginTop:'30px'}}>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="password" placeholder="Password" autoComplete="current-password" onChange={this.handleChangePass} />
                      </InputGroup> */}
                        <Input
                          style={{ marginBottom: '30px' }}
                          type="password"
                          id="input-with-icon-adornment"
                          placeholder="Password"
                          fullWidth='true'
                          onChange={this.handleChangePass}
                          startAdornment={
                            <InputAdornment position="start">
                              <VpnKeyIcon style={{ color: '#5D6F8D' }} />
                            </InputAdornment>
                          }
                        />
                        {/* <TextField
                        type="password"
                        style={{marginBottom:'30px'}}
                        className={useStyles.margin}
                        id="input-with-icon-textfield"
                        fullWidth='true'
                        // label="TextField"
                        placeholder="Password"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <VpnKeyIcon style={{color:'#5D6F8D'}} />
                            </InputAdornment>
                          ),
                        }}
                      /> */}
                      </ThemeProvider>
                      <Row>
                        <Col xs="12" className="text-center" style={{ marginTop: '10px' }}>
                          <Button onClick={this.handleSubmit} disabled={this.state.isLoading} type="submit" color="primary" className="px-4 loginButton" style={{ background: 'transparent', border: 'none' }}>
                            {this.state.isLoading ? <div class='spinner-border text-primary loadButton'></div> : "Log In"}
                          </Button>
                        </Col>
                      </Row>
                      {/* <div class='input-field'>
                        <input class='validate' type='email' name='email' id='email' />
                        <label for='email'>Enter your email</label>
                      </div>
                      <div class='input-field col s12 padder-x'>
                        <input class='validate' type='password' name='password' id='password' />
                        <label for='password'>Enter your password</label>
                      </div>
                      <a href="main.html" class='col s12 btn waves-effect waves-light btn btn-large m-md indigo'>Login</a>
                      <div>
                        <label>
                          <h6><a class="grey-text lighten-4 forgotpassword" href="main.html">Forgot Password?</a></h6>
                        </label>
                      </div> */}
                    </form>
                  </div>
                  {/* </Card> */}

                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Login;

