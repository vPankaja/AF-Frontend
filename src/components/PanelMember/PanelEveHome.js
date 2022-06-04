import React, { Component } from 'react';
//import axios
import { Navbar, Container, Nav } from "react-bootstrap";
import axios from 'axios';

export default class PanelEveHome extends Component {

 //initialize constructor to pass the props
 constructor (props) {
    super(props);
    this.state={
      //initializing an array 
      GetAllposts:[]
    };
  }
  
 //calling the method after componenets render to the page
 componentDidMount(){
  this.retrievePanelEve();
}


  //get request method
  retrievePanelEve(){
      axios.get("http://localhost:6500/PanelEve/GetAlldetails").then(res=>{
        console.log(res.data);
       
        if(res.data.success){
          this.setState({
            GetAllposts:res.data.existingDocs
          });
          console.log(this.state.GetAllposts)
        }
      })
  }

   
 //delete function

 onDelete = (id)=>{
  axios.delete(`http://localhost:6500/PanelEve/stdDetails/delete/${id}`).then((res)=>{

    

    this.retrievePanelEve();
  })
  alert("Deleted succesfully");
} 
  

//search data according to name

filterData(GetAllposts,searchKey){
  const result =GetAllposts.filter((CheckOnePEv)=>
  CheckOnePEv.Groupname.toLowerCase().includes(searchKey) ||
  CheckOnePEv.Groupname.includes(searchKey)


  )

this.setState({GetAllposts:result})

}


handleSearchArea=(e)=>{

  const searchKey = e.currentTarget.value;
  
  axios.get("http://localhost:6500/PanelEve/GetAlldetails").then(res=>{
  if(res.data.success){
  
    this.filterData(res.data.existingDocs,searchKey)
  }
});

}


  render() {
    return (
        <div>
          <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Panel Member Home</Navbar.Brand>&nbsp;&nbsp;&nbsp;
          <Nav className="me-auto">
            
            <Nav.Link href="/panelEveHome">Presentation Evaluation</Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/panelEveHome">Topic Evaluation</Nav.Link>&nbsp;&nbsp;&nbsp;
          </Nav>
        </Container>
      </Navbar>
         
        <div>
          <center>
          <h1 style={{ width:"800px"}}> Presentation Evaluvation By Panel</h1>
          <br></br><br></br>
          </center>  


          <div className="col-lg-3 my-2 mb-2" >
          
          <input
          className="form-control" style={{padding:'17px 50px', marginLeft:'800px'}}
          type="search"
          placeholder="Enter the Group Name"
          name="searchQuery"
          onChange={this.handleSearchArea}>
            </input>
        
            
            <p style={{width:'800px',marginLeft:'800px'}}>  *you can search the group here</p>
            
          </div>





          <table className='table' style={{width:'1000px', marginLeft:"250px"}}>
            <tr style={{fontSize:"20px"}}>
              <th scope='col' >No</th>
              <th scope='col'> Group Name </th>
              <th scope='col'>Total Marks</th>
            </tr>
            <tbody>
            {this.state.GetAllposts.map((GetAllposts,index)=>(
                <tr key ={index}>
                  <th scope='row'>{index+1}</th>
                  
                  <td><a href={`/CheckOnePanelEve/${GetAllposts._id}`} style={{TextDecoration:'none'}}>{GetAllposts.Groupname} </a> </td>  
                  <td>{GetAllposts.Total}</td> 

                  <td>
                  <a className='btn btn-warning' href={`/PanelevaluationEdit/${GetAllposts._id}`}>
                  <i className='fas fa-edit'></i>&nbsp; Edit
                </a>
                &nbsp;
                <a className='btn btn-danger' href='#'onClick={()=>this.onDelete(GetAllposts._id)}>
                  <i className='far fa-trash-alt'></i>&nbsp; Delete
                </a>
                </td>
                </tr>
                ))}
         </tbody>

         </table>  
         <table>
           <tr>
            <td>
              <button className='btn btn-success' style={{marginLeft:'250px', backgroundColor:"#0147ab"}}>
                <a href="/newEvaluationPanel" style={{textDecoration:'none', color:'white', fontSize:"16px"}}> Evluate New Group </a>
              </button>         
            </td>
            <td>
              <button className="btn btn-success" 
              style={{marginLeft:'760px',padding:'8px 8px',backgroundColor:'#3895d3'}}>
                <a href="/EveHome" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'16px'}}> 
                <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
              </button>
            </td>
          </tr>
         </table>
       
             

           </div>
         
         
   
          
  


  </div>
    )
  }
}
