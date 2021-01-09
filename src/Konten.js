import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Provinsi from './components/Pengaturan/Provinsi/Provinsi'

export default class Konten extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/pengaturan/provinsi" component={Provinsi} />
            </Switch>
        )
    }
}
