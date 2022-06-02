import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

import { Route, Switch } from "react-router";

import UserRegister from "./components/userRegister/userRegister";
import StudentRegister from "./components/studentRegister/studentRegister"
import Login from "./components/login/login";
import Nav from "./components/nav";
import Nav1 from './components/Navbar'
import AllUsers from "./components/allusers/allusers";
import UpdateUser from "./components/updateUser/updateUser";
import CreateMarking from "./components/createMarking/createMarking";
import AllMarkings from "./components/allMarkings/allMarkings";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Router>
        <Nav />
        <Nav1 />
        <Routes>
          <Route exact path="/" element={<UserRegister />} />
          <Route path="/studentRegister" exact element={<StudentRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/allusers" element={<AllUsers />} />
          <Route path="/update/:id" element={<UpdateUser />} />
          <Route path="/createmarking" element={<CreateMarking />} />
          <Route path="/allmarkings" element={<AllMarkings />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
