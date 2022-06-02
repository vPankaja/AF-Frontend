import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import '../../user.css';
import { Link} from 'react-router-dom'
import swal from 'sweetalert';

export default function AllSubTypes(){

    const [subTypes, setSubTypes] = useState([]);
    const [searchTerm, setsearchTerm] = useState("");

    const deleteSubType=(id) =>{
        swal({
            title: "Are you sure?",
            text: "The Submission Type Will be Deleted ",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
                if(willDelete){
            axios.delete(`http://localhost:6500/subtype/deleteSubType/${id}`).then(()=>{


            if (willDelete) {
              swal({
                title: "The Submission Type has been Removed!",
                text: "You can Continue with Your Other Submission Types.",
                icon:  "success",
                type: "success"
              }).then(function(){
                window.location.href="/allSubTypes";
               })
            } else {
              swal("Request Is Not Deleted");
            }
          });
        }
    });
    
    }

    useEffect(()=>{
        function getSubTypes() {
            axios.get("http://localhost:6500/subtype/allSubTypes").then((res)=>{
                setSubTypes(res.data);
            }).catch((err)=>{
                alert((err.message));
            })
        }
        getSubTypes();
    },[])


    return(
        <>
        <div className="vlft">
        <div className="vcard" >

        <br/>
        <br/>
        <h1><center> All Submission Types </center></h1>
        <br/>
        <br/>

        <div className="row g-3">
        <div className="col-sm-7">
        <i className="fas fa-search" style={{padding: "30px"}} aria-hidden="true"></i>
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search Users" aria-label="Search" 
        
        onChange={(e) => {
            setsearchTerm(e.target.value)
        }}/>
        </div>

        <div className="col-sm">
        <h5>Marking Scheme Count : {subTypes.length}</h5>
        </div>
        </div>

        <br></br>
        <br></br>

        <div className="vcard2" >
        <table className="table table-bordered">
        <table className="table table-hover" >
                    <thead>
                        <tr>
                            <th><center> Submission Name </center></th>
                            <th><center> Submission Type </center></th>
                            <th><center> Deadline </center></th>
                            <th><center> Special Note </center></th>
                            <th></th>
                    
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            subTypes.filter(val=>{
                                if (searchTerm === ''){
                                    return val;
                                } else if(
                                     
                                     val.subName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                     val.submissionType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                     val.deadline.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                     val.specialNote.toLowerCase().includes(searchTerm.toLowerCase()) 

                                ){
                                    return val;
                                }
                                }).map(function (f) {
                                        return <tr>
                                    <td ><center> {f.subName} </center></td>
                                    <td ><center> {f.submissionType} </center></td>
                                    <td ><center> {f.deadline} </center></td>
                                    <td ><center> {f.specialNote} </center></td>
                                    <td > <Button type="button" class="btn btn-outline-danger" onClick={() =>  deleteSubType(f._id)}> Delete </Button></td>
                                        </tr>
        
                                    })
                                }
                            
                    </tbody>
                    </table>
                </table>
                </div>
                <br/>
                <br/>
                <Link to={"/createSubType"} ><Button type="button" class="btn btn-primary" > Add New </Button></Link>
                <br/><br/>
</div>
</div>

</>

    )

}