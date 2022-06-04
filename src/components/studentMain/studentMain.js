import React, { useState } from "react";
import axios from "axios";

export default function StudentMain() {
  const userC = JSON.parse(localStorage.getItem("user"));
  console.log("userC = ");
  console.log(userC);

  function studentGroup() {
    window.location.href = "/groupRegister";
  }

  function registerResearch() {
    window.location.href = "/checkTopicStatus";
  }

  function requestSupervisor() {
    window.location.href = "/requestTopic";
  }

  function requestCoSupervisor() {}

  function submitDocs() {}

  function downloadTemps() {}

  return (
    <>
      <br />
      <br />
      <div className="buttons">
        <button
          type="button"
          class="btn btn-info buttonClass"
          onClick={studentGroup}
        >
          CREATE STUDENT GROUP
        </button>
        <br />
        <br />
        <button
          type="button"
          class="btn btn-info buttonClass"
          onClick={registerResearch}
        >
          CHECK TOPIC STATUS
        </button>
        <br />
        <br />
        <button
          type="button"
          class="btn btn-info buttonClass"
          onClick={requestSupervisor}
        >
          REQUEST SUPERVISOR
        </button>
        <br />
        <br />
        <button
          type="button"
          class="btn btn-info buttonClass"
          onClick={submitDocs}
        >
          SUBMIT DOCUMENTS
        </button>
        <br />
        <br />
        <button
          type="button"
          class="btn btn-info buttonClass"
          onClick={downloadTemps}
        >
          DOWNLOAD TEMPLATES
        </button>
        </div>
        <br />
        <br />
    </>
  );
}
