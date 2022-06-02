import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

import { Route, Switch } from "react-router";

import UserRegister from "./components/ADMIN/userRegister/userRegister";
import StudentRegister from "./components/studentRegister/studentRegister"
import Login from "./components/login/login";
import Nav from "./components/nav";
import Nav1 from './components/Navbar'
import AllUsers from "./components/ADMIN/allusers/allusers";
import UpdateUser from "./components/ADMIN/updateUser/updateUser";
import CreateMarking from "./components/ADMIN/createMarking/createMarking";
import AllMarkings from "./components/ADMIN/allMarkings/allMarkings";
import CreateSubType from "./components/ADMIN/createSubType/createSubType";
import AllSubTypes from "./components/ADMIN/allSubTypes/allSubTypes";


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
          <Route path="/createsubType" element={<CreateSubType />} />
          <Route path="/allsubtypes" element={<AllSubTypes />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
