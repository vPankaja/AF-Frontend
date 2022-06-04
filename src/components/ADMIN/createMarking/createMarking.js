import React, { useState } from "react";
import axios from "axios";
import Nav1 from "../AdminNavbar";

export default function CreateMarking() {
  const [moduleName, setMName] = useState("");
  const [assignmentName, setAName] = useState("");
  const [overallMark, setOMark] = useState("");
  const [attachment, setAttachment] = useState("");

  const handleFileUpload = (event) => {
    event.persist();

    let files = event.target.files;
    setAttachment(files[0]);
  };

  async function sendData(e) {
    e.preventDefault();

    if (attachment) {
      var data = new FormData();
      data.append("attachment", attachment);

      await axios
        .post("http://localhost:6500/api/files/uploadFile", data)
        .then(async (res) => {
          if (res.status == 200) {
            console.log(res);
            fileUrl = res.data.path.replace(/\\/g, "/");

            const newMarking = {
              moduleName: moduleName,
              assignmentName: assignmentName,
              overallMark: overallMark,
              attachment: fileUrl,
            };

            await uploadSchemeData(newMarking);
          } else {
            console.log(error);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const newMarking = {
        moduleName: moduleName,
        assignmentName: assignmentName,
        overallMark: overallMark,
        description: description,
        attachment: fileUrl,
      };

      await uploadSchemeData(newMarking);
    }
  }

  async function uploadSchemeData(newMarking) {
    console.log(newMarking);
    await axios
      .post("http://localhost:6500/marking/createMarking", newMarking)
      .then((willcreate) => {
        console.log(willcreate);
        if (willcreate) {
          swal({
            title: "Success",
            text: "Marking Scheme Successfully Created",
            icon: "success",
            type: "success",
          }).then(function () {
            window.location.href = "/allmarkings";
          });
        } else {
          swal("Create Marking Scheme Failed!");
        }
      });
  }

  return (
    <>
    <Nav1 />
    <div className="container">
      <form onSubmit={sendData}>
        <br />
        <center>
          <h1>Create Marking Scheme</h1>
        </center>
        <br />
        <div class="form-group">
          <label for="modulename">Module Name</label>
          <input
            type="text"
            class="form-control"
            id="modulename"
            placeholder="Enter Module Name"
            onChange={(e) => {
              setMName(e.target.value);
            }}
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label for="assignmentName">Assignment Name</label>
          <input
            type="text"
            class="form-control"
            id="assignmentName"
            placeholder="Enter Assignment Name"
            onChange={(e) => {
              setAName(e.target.value);
            }}
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label for="overallMark">Overall Marks</label>
          <input
            type="text"
            class="form-control"
            id="overallMark"
            placeholder="Enter Overall Marks"
            onChange={(e) => {
              setOMark(e.target.value);
            }}
            required
          />
        </div>
        <br />
        <div class="form-group">
          <label for="overallMark">Marking Description</label>
          <input
            type="file"
            class="form-control"
            id="attachment"
            placeholder="Select Attachment"
            onChange={(e) => handleFileUpload(e)}
          />
        </div>
        <br />

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </>
  );
}
