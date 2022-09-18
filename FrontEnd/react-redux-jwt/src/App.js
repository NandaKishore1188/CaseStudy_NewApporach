import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ListCustomers from "./components/listCustomers.component";
import UpdateProdu from "./components/updateproduct.component";
import ListProducts from "./components/listProducts.component";
import AddProd from "./components/createproduct.component";
import Landing from "./components/landing.component";
import Login from "./components/login.component";
import Home from "./components/home.component";
import Admin from "./components/admin.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import User from "./components/user.component";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from './helpers/history';
import EventBus from "./common/EventBus";
import GoogleLoginComponent from "./components/googlebutton.component";
import landingComponent from "./components/landing.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage());
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    this.props.dispatch(logout());
    this.setState({
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <Router history={history}>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/landing"} className="navbar-brand">
              Shopping Home
            </Link>
            <div className="navbar-nav mr-auto">

              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    Resource
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up

                  </Link>
                </li>

                {/* <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                    Admin

                  </Link>
                </li> */}
              </div>
            )}
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/landing"]} component={Landing} />
              <Route exact path="/landing" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/user" component={User} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/addproduct" component={AddProd} />
              <Route exact path="/listproducts" component={ListProducts} />
              <Route exact path="/updateproduct" component={UpdateProdu} />
              <Route exact path="/listcustomers" component={ListCustomers} />
 
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user,admin } = state.auth;
  return {
    user,admin
  };
}

export default connect(mapStateToProps)(App);