import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = () => {
    setShow(false);
    setMessage("");
  };
  const handleShow = (message) => {
    setShow(true);
    setMessage(message);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    var data = {
      email: email,
      password: password,
    };

    await axios
      .post("http://localhost:6500/user/login", data)
      .then((res) => {
        console.log(res.data);
        handleRedirectUser(res.data.type);

        //save user data
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((error) => {
        console.log(error);
        handleShow("Error!");
      });
  };

  const handleRedirectUser = (type) => {
    if (type == "ADMIN") {
      window.location.replace("/allusers");
    } 
    else if (type == "STUDENT") {
      window.location.replace("/studentview");
    }
    else if (type == "STAFF") {
      window.location.replace("/staffview");
    }
    else if (type == "SUPERVISOR") {
      window.location.replace("/SupHome");
    }
  };

  useEffect(() => {
    var userData = localStorage.getItem("user");

    if (userData) {
      handleRedirectUser(userData.type);
    }
  }, []);

  return (
    <div className="container">
      <br/><br/>
      <h2>
        <center>Login</center>
      </h2>
      <br/>

    <form onSubmit={handleSubmit}>

        <div class="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            required
            type="text"
            placeholder="Enter email address"
            class="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            required
            type="password"
            placeholder="Enter password"
            class="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            required
            type="submit"
            placeholder="Login"
            class="form-control"
          />
        </div>
      </form>

      {/* Dialogbox */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
}

//export default userLogin;
