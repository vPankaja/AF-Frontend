import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import { Route, Switch } from "react-router";

import UserRegister from "./components/ADMIN/userRegister/userRegister";
import StudentRegister from "./components/studentRegister/studentRegister";
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
import AllAllocatedPM  from "./components/ADMIN/allocatedPanel/allocatedPanel";

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



import SubmitDocument from "./components/submitDocuments/submitDocuments";
import ReRequestResearch from "./components/ReRequestTopic/reRequestTopic";

import UploadDocument from "./components/ADMIN/uploadDocument/uploadDocument";
import AllocatePM from "./components/ADMIN/allocatePM/allocataPM";
import LandingScreen from "./components/landingpage/landingpage";
import Register from "./components/Register/Register";
import AllTopics from "./components/ADMIN/alltopics/alltopics";

import PanelEveHome from "./components/PanelMember/PanelEveHome";
import PanelEveEdit from "./components/PanelMember/PanelEveEdit";
import PanelEveOne from "./components/PanelMember/PanelEveOne";
import EveByPanel from "./components/PanelMember/EveByPanel";
import PanelHome from "./components/PanelMember/PanelHome";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // checkLoggedIn: false,
    };
  }

  componentDidMount() {
    // var userData = localStorage.getItem("user");
    // if (userData) {
    //   var loggedIn = {
    //     checkLoggedIn: true,
    //   };
    //   this.setState(loggedIn);
    // }
  }

  render() {
    return (
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<LandingScreen />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<UserLogin />} />

          <Route path="/userreg" element={<UserRegister />} />
          <Route path="/studentRegister" exact element={<StudentRegister />} />

          <Route path="/allusers" element={<AllUsers />} />
          <Route path="/allallocatedpanels" element={<AllAllocatedPM />} />
          <Route path="/studentMain" element={<StudentMain />} />
          <Route path="/groupRegister" element={<CreateStudentGroup />} />
          <Route path="/requestTopic" element={<RequestResearch />} />
          <Route path="/checkTopicStatus" element={<CheckTopicStatus />} />
          <Route
            path="/requestCoSupervisor/:id"
            element={<RequestCoSupervisor />}
          />
          <Route path="/submitDoc/:id" element={<SubmitDocument />} />
          <Route path="/rerequestTopic/:id" element={<ReRequestResearch />} />
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

          <Route path="/uploaddocument" element={<UploadDocument />} />
          <Route path="/allocatepm/:id" element={<AllocatePM />} />
          <Route path="/alltopics" element={<AllTopics />} />

          <Route path="/SupHome" element={<SupHome />} />
          <Route path="/SupEvalution" element={<SupEvaluation />} />
          <Route path="/SupEvaAdd" element={<SupEvaAdd />} />
          <Route path="/SupEvaEdit/:id" element={<SupEvaEdit />} />
          <Route path="/SupEvaOneDetail/:id" element={<SupEvaOneDetail />} />
          <Route path="/SupTopic" element={<SupTopic />} />

          <Route path="/PanelEveHome" element={<PanelEveHome />} />
          <Route path="/newEvaluationPanel" element={<EveByPanel />} />
          <Route path="/PanelevaluationEdit/:id" element={<PanelEveEdit />} />
          <Route path="/CheckOnePanelEve/:id" element={<PanelEveOne />} />
          <Route path="/PanelHome" element={<PanelHome />} />

        </Routes>
      </Router>
    );
  }
}

export default App;
