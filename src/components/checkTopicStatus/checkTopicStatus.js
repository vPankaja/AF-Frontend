import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CheckTopicStatus() {
  const [group, setGroup] = useState("");
  const [research, setResearch] = useState("");

  async function getStudentGroup() {
    const email = JSON.parse(localStorage.getItem("userInfo")).email;
    await axios
      .get(`http://localhost:6500/student/getGroup/${email}`)
      .then((res) => {
        setGroup(res.data);
        // console.log(res.data.name)
        getResearch(res.data.name);
      })
      .catch((err) => {
        alert(err);
      });
  }

  async function getResearch(groupName) {
    await axios
      .get(`http://localhost:6500/student//getResearchByGroup/${groupName}`)
      .then((res) => {
        console.log(res.data);
        setResearch(res.data);
      });
  }

  useEffect(() => {
    getStudentGroup();
  }, []);


  return (
    <>
      <div>
        <br />
        <br />
        <card class="card me-5 ms-5 mb-14">
          <h1>{research.topic}</h1>
          <br />
          <br />
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <table className="table-borderless">
                  <tbody>
                    <tr>
                      <td>Supervisor -</td>
                      <td>
                        <h4>{research.supervisor}</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-sm">
                <table className="table-borderless">
                  <tbody>
                    <tr>
                      <td>Status -</td>
                      <td>
                        <h4>{research.status}</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <Link to={"/requestCoSupervisor/"+research._id}>
          <button
            class="btn btn-success me-5 ms-5 rounded-pill"
            disabled={
              research.status == "pending" || research.status == "rejected"
            }
          >
            Request Co-Supervisor
          </button></Link>
        </card>
      </div>
    </>
  );
}
