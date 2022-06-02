import React, { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';

export default function UserRegister() {

  const [name,setName] = useState("");
  const [nic,setNIC] = useState("");
  const [gender,setGender] = useState("");
  const [contactNo,setContactNo] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [type,setType] = useState("");

  function sendData(e){

    e.preventDefault();

    const newUser = {
      name,
      nic,
      gender,
      contactNo,
      email,
      password,
      type
    }

    axios.post("http://localhost:6500/user/reg",newUser).then((willReg)=>
    {
      if(willReg){
      swal({
        title: "Success",
        text: "User Successfully Registered",
        icon:  "success",
        type: "success"
      }).then(function(){
        window.location.href="/allusers";
      })
    } else{
      swal("Register User Failed!");
    }
  })
    

  }



  return (

    <div className="container">
      <form onSubmit={sendData}>
        <br/>
        <center><h1>Register User</h1></center>
        <br/>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter Name"
            onChange={(e)=>{
              setName(e.target.value);
            }}
            required/>
        </div>
        <br />
        <div class="form-group">
          <label for="nic">NIC</label>
          <input
            type="text"
            class="form-control"
            id="nic"
            placeholder="Enter NIC"
            onChange={(e)=>{
              setNIC(e.target.value);
            }}
            required/>
        </div>
        <br />
        <div class="form-group">
          <label for="gender">Gender</label>
          <input
            type="text"
            class="form-control"
            id="gender"
            placeholder="Enter the Gender"
            onChange={(e)=>{
              setGender(e.target.value);
            }}
            required/>
        </div>
        <br />
        <div class="form-group">
          <label for="contactNo">Contact No</label>
          <input
            type="text"
            class="form-control"
            id="contactNo"
            placeholder="Enter Contact No"
            onChange={(e)=>{
              setContactNo(e.target.value);
            }}
            required/>
        </div>
        <br />
        <div class="form-group">
          <label for="email">Email </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
            required/>
        </div>
        <br />
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
            required/>
        </div>
        <br />
        <div class="form-group">
          <label for="type">User Type</label>
          <input
            type="text"
            class="form-control"
            id="type"
            placeholder="Enter User Type (Admin or Panel Member)"
            onChange={(e)=>{
              setType(e.target.value);
            }}
            required/>
        </div>
        <br/>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
