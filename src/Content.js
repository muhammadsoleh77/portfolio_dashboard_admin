import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Dashboard from './components/Dashboard1';
// import Dashboard2 from './components/Dashboard2';

// import Login from './components/Login';

// import PrivateRoute from './PrivateRoute'
import Header from './Header';
import Sidebar from './Sidebar';
import Konten from './Konten';

export default class Content extends Component {
  render() {
    return (
      // <Switch>
      //   <Route exact path="/" component={Dashboard} />
      //   <Route exact path="/dashboard" component={Dashboard} />
      // </Switch>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Konten />
      </BrowserRouter>
    )
  }
}

