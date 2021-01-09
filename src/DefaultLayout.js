import React, { Component, Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Swal from 'sweetalert2'
// import * as router from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';

import routes from './routes';

class DefaultLayout extends Component {

  constructor() {
    super();

    this.state = {
      online: true
    }
  }

  componentDidMount() {
    window.addEventListener("online", this.handler)
    window.addEventListener("offline", this.handler)
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.handler)
    window.removeEventListener("offline", this.handler)
  }

  handler = (event) => {
    this.setState({ 
      online: Navigator.OnLine
    })

    if (event.type === "online") {
      Swal.fire({
        icon: 'info',
        title: 'The Internet?',
        text: 'Internet Connection is Back!',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        icon: 'info',
        title: 'The Internet?',
        text: 'Check Your Internet Connection'
      })
    }
  }

  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect from="/" to="/login" />
    }
    return (
      <div>
        <Header />
        <Suspense>
          <Sidebar />
        </Suspense>
        <Suspense>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && localStorage.getItem("token") ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )}
                />
              ) : (null);
            })}
            {
              !localStorage.getItem("token") ? <Redirect from="/" to="/login" /> : <Redirect from="/" to="/dashboard" />
            }
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default DefaultLayout;
