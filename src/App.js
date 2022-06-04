import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

import { Route, Switch } from "react-router";

import UserRegister from "./components/ADMIN/userRegister/userRegister";
import StudentRegister from "./components/studentRegister/studentRegister"
import UserLogin from "./components/login/login";
import Nav from "./components/nav";


import StudentMain from "./components/studentMain/studentMain";
import CreateStudentGroup from "./components/createStudentGroup/createStudentGroup";

import AllUsers from "./components/ADMIN/allusers/allusers";
import UpdateUser from "./components/ADMIN/updateUser/updateUser";
import CreateMarking from "./components/ADMIN/createMarking/createMarking";
import AllMarkings from "./components/ADMIN/allMarkings/allMarkings";
import CreateSubType from "./components/ADMIN/createSubType/createSubType";
import AllSubTypes from "./components/ADMIN/allSubTypes/allSubTypes";

import SupHome from "./components/supervisor/SupHome";
import SupEvaluation from "./components/supervisor/SupEvaluation";
import SupEvaAdd from "./components/supervisor/SupEvaAdd";
import SupEvaEdit from "./components/supervisor/SupEvaEdit";
import SupEvaOneDetail from "./components/supervisor/SupEvaOneDetail";
import SupTopic from "./components/supervisor/SupTopic";
import SupDocument from "./components/supervisor/SupDocument";

import RequestResearch from "./components/requestResearch/requestResearch";
import CheckTopicStatus from "./components/checkTopicStatus/checkTopicStatus";
import RequestCoSupervisor from "./components/requestCoSupervisor/requestCoSupervisor";

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
        <Routes>
          <Route exact path="/" element={<UserRegister />} />
          <Route path="/studentRegister" exact element={<StudentRegister />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/allusers" element={<AllUsers />} />
          <Route path="/studentMain" element={<StudentMain />} />
          <Route path="/groupRegister" element={<CreateStudentGroup />} />
          <Route path="/requestTopic" element={<RequestResearch />} />
          <Route path="/checkTopicStatus" element={<CheckTopicStatus />} />
          <Route path="/requestCoSupervisor/:id" element={<RequestCoSupervisor />} />
          <Route path="/update/:id" element={<UpdateUser />} />
          <Route path="/createmarking" element={<CreateMarking />} />
          <Route path="/allmarkings" element={<AllMarkings />} />
          <Route path="/createsubType" element={<CreateSubType />} />
          <Route path="/allsubtypes" element={<AllSubTypes />} />

          
          <Route path="/SupHome" element={<SupHome/>} />
          <Route path="/SupEvalution" element={<SupEvaluation/>} />
          <Route path="/SupEvaAdd" element={<SupEvaAdd/>}/>
          <Route path="/SupEvaEdit/:id" element={<SupEvaEdit/>} />
          <Route path="/SupEvaOneDetail/:id" element={<SupEvaOneDetail/>} />
          <Route path="/SupTopic" element={<SupTopic/>} />
          <Route path="/SupDocument" element={<SupDocument/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
