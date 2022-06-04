import React, { Component } from 'react'
//import axios
import { Navbar, Container, Nav } from "react-bootstrap";
import axios from 'axios';

export default class SupEvaluation extends Component {
  
 
 
  
  render() {
    return (
      <div >
          <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Supervisor Home</Navbar.Brand>&nbsp;&nbsp;&nbsp;
          <Nav className="me-auto">
            <Nav.Link href="/SupTopic">Topics</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/SupEvalution">Document Evaluation</Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="#pricing">Documents</Nav.Link>&nbsp;&nbsp;&nbsp;
          </Nav>
        </Container>
      </Navbar>
         
            <div >
              <center>
              <h1 >Documents</h1>
              <br></br><br></br>
              </center>  


              <div  >
              
              <input
              className="form-control" style={{ marginLeft:'250px',width:'300px',float:'left'}}
              type="search"
              placeholder="Search Group Name"
              name="searchQuery"
              onChange="">
                </input>

                  
              </div>
              <br></br><br></br>





              <table className='table' style={{width:'1000px', marginLeft:"250px"}}>
                <tr style={{fontSize:"20px"}}>
                  <th scope='col' >No</th>
                  <th scope='col'> Group Name </th>
                  <th scope='col'>Document</th>
                </tr>
                
                    <tr >
                      <th scope='row'>1</th>
                      
                      <td>Grp_65 </td>  
                      
                      
                      <td>
                      <a className='btn btn-info' href={`http://localhost:6500/uploads/SE3040-2021-S1-Assesment02-Group-Project.pdf`}>
                      <i className='fas fa-info'></i>&nbsp; View
                    </a>
                    
                    </td>
                    </tr>
                    <tr >
                      <th scope='row'>2</th>
                      
                      <td>Grp_53 </td>  
                      
                      
                      <td>
                      <a className='btn btn-info' href={`http://localhost:6500/uploads/SE3040-2021-S1-Assesment02-Group-Project.pdf`}>
                      <i className='fas fa-info'></i>&nbsp; View
                    </a>
                    
                    </td>
                    </tr>
                    <tr >
                      <th scope='row'>3</th>
                      
                      <td>Grp_25 </td>  
                      
                      
                      <td>
                      <a className='btn btn-info' href={`http://localhost:6500/uploads/SE3040-2021-S1-Assesment02-Group-Project.pdf`}>
                      <i className='fas fa-info'></i>&nbsp; View
                    </a>
                    
                    </td>
                    </tr>
                  

             </table>  
             <br></br>
             
                  <button className="btn btn-success" 
                  style={{marginLeft:'1000px',padding:'8px 8px',backgroundColor:'#3895d3'}}>
                    <a href="/SupHome" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'16px'}}> 
                    <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Previous</a>
                  </button>
               
           
                 

               </div>
             
             
       
              
      


      </div>
    )
  }
}