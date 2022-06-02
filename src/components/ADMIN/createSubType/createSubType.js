import React, { useState } from "react";
import axios from "axios";

export default function CreateSubType() {

  const [subName,setSName] = useState("");
  const [submissionType,setSType] = useState("");
  const [deadline,setDeadline] = useState("");
  const [specialNote,setSpecialNote] = useState("");

  function sendData(e){

    e.preventDefault();

    const newSubType = {
        subName,
        submissionType,
        deadline,
        specialNote,
    }

    axios.post("http://localhost:6500/subtype/createSubType",newSubType).then((willcreate)=>
    {
        if(willcreate){
        swal({
          title: "Success",
          text: "Submission Type Successfully Created",
          icon:  "success",
          type: "success"
        }).then(function(){
          window.location.href="/allsubTypes";
        })
      } else{
        swal("Create Submission Type Failed!");
      }
    })
    

  }



  return (

    <div className="container">
      <form onSubmit={sendData}>
        <br/>
        <center><h1>Create Submission Type</h1></center>
        <br/>
        <div class="form-group">
          <label for="subName">Submission Name</label>
          <input
            type="text"
            class="form-control"
            id="subName"
            placeholder="Enter Submission Name"
            onChange={(e)=>{
              setSName(e.target.value);
            }}
            required/>
        </div>
        <br />
        <div class="form-group">
          <label for="submissionType">Submission Type</label>
          <input
            type="text"
            class="form-control"
            id="submissionType"
            placeholder="Enter Submission Type"
            onChange={(e)=>{
              setSType(e.target.value);
            }}
            required/>
        </div>
        <br />
        <div class="form-group">
          <label for="deadline">Deadline</label>
          <input
            type="date"
            class="form-control"
            id="deadline"
            onChange={(e)=>{
              setDeadline(e.target.value);
            }}
            required/>
        </div>
        <br />
        <div class="form-group">
          <label for="specialNote">Special Note (Optional)</label>
          <textarea
            type="text"
            class="form-control"
            id="specialNote"
            placeholder="Any Special Note"
            onChange={(e)=>{
              setSpecialNote(e.target.value);
            }}
            />
        </div>
        <br />
        

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
