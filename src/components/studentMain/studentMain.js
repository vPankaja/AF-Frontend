import React, { useState } from "react";
import axios from "axios";

export default function StudentMain() {
  const userC = JSON.parse(localStorage.getItem("userInfo"));
  console.log("userC = ");
  console.log(userC);

  function studentGroup() {
    window.location.href = "/groupRegister";
  }

  function registerResearch() {

  }

  function requestSupervisor() {

  }

  function requestCoSupervisor() {

  }

  function submitDocs() {

  }

  function downloadTemps() {

  }

  return (
    <>
      <div className="bodylogin">
        <div className="dloginlft">
          <div className="dlogincard">
            <div className="container">
              <br />
              <div className="row">
                <div className="column column-loginbody">
                  <div className="dlogincard2">
                    <br />

                    <div className="dlogincard3">
                      <button
                        type="button"
                        class="btn btn-info btn-lg btn-block"
                        onClick={studentGroup}
                      >
                        CREATE STUDENT GROUP
                      </button>
                      <br />
                      <br />
                      <button
                        type="button"
                        class="btn btn-info btn-lg btn-block mb-3"
                        onClick={registerResearch}
                      >
                        REGISTER RESEARCH TOPIC
                      </button>
                      <br />
                      <br />
                      <button
                        type="button"
                        class="btn btn-info btn-lg btn-block mb-3"
                        onClick={requestSupervisor}
                      >
                        REQUEST SUPERVISOR
                      </button>
                      <br />
                      <br />
                      <button
                        type="button"
                        class="btn btn-info btn-lg btn-block mb-3"
                        onClick={requestCoSupervisor}
                      >
                        REQUEST CO-SUPERVISOR
                      </button>
                      <br />
                      <br />
                      <button
                        type="button"
                        class="btn btn-info btn-lg btn-block mb-3"
                        onClick={submitDocs}
                      >
                        SUBMIT DOCUMENTS
                      </button>
                      <br />
                      <br />
                      <button
                        type="button"
                        class="btn btn-info btn-lg btn-block mb-3"
                        onClick={downloadTemps}
                      >
                        DOWNLOAD TEMPLATES
                      </button>
                      <br />
                      <br />
                    </div>
                    <br />
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
