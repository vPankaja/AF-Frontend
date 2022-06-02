import React, { useState } from "react";
import axios from "axios";

export default function CreateMarking() {

  const [moduleName,setMName] = useState("");
  const [assignmentName,setAName] = useState("");
  const [overallMark,setOMark] = useState("");
  const [description,setDescription] = useState("");

  function sendData(e){

    e.preventDefault();

    const newMarking = {
        moduleName,
        assignmentName,
        overallMark,
        description,
    }

    axios.post("http://localhost:6500/marking/createMarking",newMarking).then((willcreate)=>
    {
      if(willcreate){
      swal({
        title: "Success",
        text: "Marking Scheme Successfully Created",
        icon:  "success",
        type: "success"
      }).then(function(){
        window.location.href="/allmarkings";
      })
    } else{
      swal("Create Marking Scheme Failed!");
    }
  })
    

  }



  return (

    <div className="container">
      <form onSubmit={sendData}>
        <br/>
        <center><h1>Create Marking Scheme</h1></center>
        <br/>
        <div class="form-group">
          <label for="modulename">Module Name</label>
          <input
            type="text"
            class="form-control"
            id="modulename"
            placeholder="Enter Module Name"
            onChange={(e)=>{
              setMName(e.target.value);
            }}
            required/>
        </div>
        <br />
        <div class="form-group">
          <label for="assignmentName">Assignment Name</label>
          <input
            type="text"
            class="form-control"
            id="assignmentName"
            placeholder="Enter Assignment Name"
            onChange={(e)=>{
              setAName(e.target.value);
            }}
            required/>
        </div>
        <br />
        <div class="form-group">
          <label for="overallMark">Overall Marks</label>
          <input
            type="text"
            class="form-control"
            id="overallMark"
            placeholder="Enter Overall Marks"
            onChange={(e)=>{
              setOMark(e.target.value);
            }}
            required/>
        </div>
        <br />
        <div class="form-group">
          <label for="description">Marks Description</label>
          <textarea
            type="text"
            class="form-control"
            id="description"
            placeholder="Enter Description"
            onChange={(e)=>{
              setDescription(e.target.value);
            }}
            required/>
        </div>
        <br />
        

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
