import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import '../../user.css';
import { Link} from 'react-router-dom'
import swal from 'sweetalert';

export default function AllUsers(){

    const [users, setUsers] = useState([]);
    const [searchTerm, setsearchTerm] = useState("");

    const deleteUser=(id) =>{
        swal({
            title: "Are you sure?",
            text: "The User Will be Deleted ",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
                if(willDelete){
            axios.delete(`http://localhost:6500/user/delete/${id}`).then(()=>{


            if (willDelete) {
              swal({
                title: "The User has been Removed!",
                text: "You can Continue with Your Other Users.",
                icon:  "success",
                type: "success"
              }).then(function(){
                window.location.href="/allusers";
               })
            } else {
              swal("Request Is Not Deleted");
            }
          });
        }
    });
    
    }

    useEffect(()=>{
        function getUsers() {
            axios.get("http://localhost:6500/user/allusers").then((res)=>{
                setUsers(res.data);
            }).catch((err)=>{
                alert((err.message));
            })
        }
        getUsers();
    },[])


    return(
        <>
        <div className="vlft">
        <div className="vcard" >

        <br/>
        <br/>
        <h1><center> All Users </center></h1>
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
        <h5>User Count : {users.length}</h5>
        </div>
        </div>

        <br></br>
        <br></br>

        <div className="vcard2" >
        <table className="table table-bordered">
        <table className="table table-hover" >
                    <thead>
                        <tr>
                            <th><center> User Name </center></th>
                            <th><center> NIC </center></th>
                            <th><center> Gender </center></th>
                            <th><center> Contact No </center></th>
                            <th><center> Email </center></th>
                            <th><center> User Type </center></th>
                            <th></th>
                    
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            users.filter(val=>{
                                if (searchTerm === ''){
                                    return val;
                                } else if(

                                     val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                     val.nic.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                     val.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                     val.contactNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                     val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                     val.type.toLowerCase().includes(searchTerm.toLowerCase())
                                ){
                                    return val;
                                }
                                }).map(function (f) {
                                        return <tr>
                                    <td ><center> {f.name} </center></td>
                                    <td ><center> {f.nic} </center></td>
                                    <td ><center> {f.gender} </center></td>
                                    <td ><center> {f.contactNo} </center></td>
                                    <td ><center> {f.email} </center></td>
                                    <td ><center> {f.type} </center></td>

                                    <td > <Link to={"/update/" + f._id} ><Button type="button" class="btn btn-primary" > Update User </Button></Link></td>
                                    <td > <Button type="button" class="btn btn-outline-danger" onClick={() =>  deleteUser(f._id)}> Delete </Button></td>
                                        </tr>
        
                                    })
                                }
                            
                    </tbody>
                    </table>
                </table>
        </div>
        <br/>
        <br/>
        <Link to={"/"} ><Button type="button" class="btn btn-primary" > Add New User</Button></Link>
        <br/><br/>
</div>
</div>

</>

    )

}