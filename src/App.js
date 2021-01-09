// import React, { Component } from 'react'
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// // import PrivateRoute from './PrivateRoute'
// // import Header from './Header';
// // import Sidebar from './Sidebar';
// import Content from './Content';

// import Dashboard from './components/Dashboard1';
// import Login from './components/Login';

// import DefaultLayout from './DefaultLayout'

// // Containers
// // const DefaultLayout = React.lazy(() => import('./Content'));

// class App extends Component {

//   render() {
//     return (
//       <div className="wrapper">
//         {/* <BrowserRouter>
//           <Header />
//           <Sidebar />
//           <Content />
//         </BrowserRouter> */}
//         <BrowserRouter>
//           <Switch>
//             {/* <Route exact path="/">
//               <Redirect to="/login" />
//             </Route> */}
//             <Route exact path="/login" component={Login} />
//             {/* <Route exact path="*" render={() => "404 Not Found!"} /> */}
//             {/* <Route exact path="/content" component={Content} /> */}
//             <Route exact path="/" component={DefaultLayout} />
//             {
//               !localStorage.getItem("token") ? <Redirect to="/login" /> : <Redirect to="/content" />
//             }
//           </Switch>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// import { renderRoutes } from 'react-router-config';
// import * as ReactBootStrap from 'react-bootstrap'
// import Lottie from 'react-lottie';
// import animationData from '.././src/containers/DefaultLayout/dataAnimasi.json'
// import './App.scss';

// // start animasi loader page
// const defaultOptions = {
//   loop: true,
//   autoplay: true,
//   animationData: animationData,
//   rendererSettings: {
//     preserveAspectRatio: 'xMidYMid slice'
//   }
// };
// // end animasi loader page

// const loading = () => <div className="animated fadeIn pt-3 text-center"><Lottie options={defaultOptions}height={400} width={400} /></div>;

// Containers
const DefaultLayout = React.lazy(() => import('./DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./components/Login'));
// const Dashboard = React.lazy(() => import('./components/Dashboard1'));
// const Register = React.lazy(() => import('./views/Pages/Register'));
// const Page404 = React.lazy(() => import('./views/Pages/Page404'));
// const Page500 = React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              {/* <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;

