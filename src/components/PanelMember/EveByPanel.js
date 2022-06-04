import React, { Component } from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import axios from 'axios';
export default class EveByPanel extends Component {
 
 constructor(props){
  super(props) 
  
  this.state={
    Groupname:"",
    introduction:"",
    organization:"",
    voiceInflection:"",
    voiceRate:"",
    tools:"",
    eyeContact:"",
    groupArrange:"",
    Total:""
  }
 }

 //handleChange = ({
   // target: { value, name }}) => 
    //this.setState({ [name]: value


      
     //})

     handleChange= (e)=>{
      const {name,value} = e.target;
      let nam = e.target.name;
      let val = e.target.value;
    
//validate introduction
if (nam=== "introduction") {
          
  if (!Number(val)) {
    alert("Marks must be a number");
  }
}
if(nam==="introduction"){
  if(val > 15){
      alert("Invalid mark!!");
  }
}
    
//validate organization

if (nam=== "organization") {
          
  if (!Number(val)) {
    alert("Marks must be a number");
  }
}
if(nam==="organization"){
  if(val > 15){
      alert("Invalid mark!!");
  }
}
    // voice inflection validate
    
if (nam=== "voiceInflection") {
          
  if (!Number(val)) {
    alert("Marks must be a number");
  }
}
if(nam==="voiceInflection"){
  if(val > 10){
      alert("Invalid mark!!");
  }
}
      //voice rate validation
      
if (nam=== "voiceRate") {
          
  if (!Number(val)) {
    alert("Marks must be a number");
  }
}
if(nam==="voiceRate"){
  if(val > 10){
      alert("Invalid mark!!");
  }
}
       //tools validation
       
if (nam=== "tools") {
          
  if (!Number(val)) {
    alert("Marks must be a number");
  }
}
if(nam==="tools"){
  if(val > 20){
      alert("Invalid mark!!");
  }
}
//eye contact validation

if (nam=== "eyeContact") {
          
  if (!Number(val)) {
    alert("Marks must be a number");
  }
}
if(nam==="eyeContact"){
  if(val > 15){
      alert("Invalid mark!!");
  }
}

//group arrangement validation

if (nam=== "groupArrange") {
          
  if (!Number(val)) {
    alert("Marks must be a number");
  }
}
if(nam==="groupArrange"){
  if(val > 15){
      alert("Invalid mark!!");
  }
}

//total mark validation

if (nam=== "Total") {
          
  if (!Number(val)) {
    alert("Marks must be a number");
  }
}
if(nam==="Total"){
  if(val > 100){
      alert("Invalid mark!!");
  }
}
    
      this.setState({
          ...this.state,
          [name]:value
      })
    }


onSubmit=(e)=>{
  e.preventDefault();

  const {Groupname,introduction,organization,voiceInflection,voiceRate,tools,eyeContact,groupArrange,Total} = this.state;

  const data={
    Groupname:Groupname,
    introduction:introduction,
    organization:organization,
    voiceInflection:voiceInflection,
    voiceRate:voiceRate,
    tools:tools,
    eyeContact:eyeContact,
    groupArrange:groupArrange,
    Total:Total
      
  }

  console.log(data)


  //save data
  axios.post("http://localhost:6500/PanelEve/savePost",data).then((res) =>{
    if(res.data.success){
      this.setState(
        {
            Groupname:"",
            introduction:"",
            organization:"",
            voiceInflection:"",
            voiceRate:"",
            tools:"",
            eyeContact:"",
            groupArrange:"",
            Total:""

        }
      )
      alert("You are saving the details");
    } 
  })
 
}
 
 
 
 
  render() {
    return (
      

<div className="edit">
<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Panel Member Home</Navbar.Brand>&nbsp;&nbsp;&nbsp;
          <Nav className="me-auto">
            
            <Nav.Link href="/panelEveHome">Presentation Evaluation</Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/panelEveHome">Topic Evaluation</Nav.Link>&nbsp;&nbsp;&nbsp;
          </Nav>
        </Container>
      </Navbar>
       <div className="col-md-8 mt-4 mx-auto">
       <div style={{height:'80px', width:'100%',  marginTop:'-20px'}}>
               <br/>
               <h2 style={{ textAlign:'center'}}>Panel Presentaion Evaluation Form</h2>
              <br/>
     </div>
           <br/>
           <div >

                        <button className="btn btn-success" 
                        style={{marginLeft:'910px',padding:'8px 8px',backgroundColor:'#3895d3', marginBottom:"10px"}}>
                        <a href="/panelEveHome" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'16px'}}> 
                        <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
                        </button>

                <br></br><br></br>
           
           <form className="row g-3" style={{backgroundColor:"#ebecf0"}}>

           <div className="form-group" >
                 
                   <label  className="form-label" >Group Name : </label>
                   <input type="text" 
                   className="form-control" 
                   name="Groupname"  
                   value={this.state.Groupname} 
                   placeholder="0" 
                   onChange={this.handleChange} required>

                   </input>
               
               </div>

               <div className="form-group" >
                 <h2> Introduction : (15 marks)</h2>
                   <label  className="form-label" ><li>Aprropriately introduced himself/ herself, the topic to be presented, and clearly 
                   explained objectives of the presentation (15 marks)</li></label>
                   <input type="text"
                    className="form-control" 
                    name="introduction"  
                    value={this.state.introduction} 
                    placeholder="0" 
                    onChange={this.handleChange} required>
            
                    </input>
               
               </div>
              

               <div className="form-group">
                 <h2>Organization : (15 marks)</h2>
                   <label  className="form-label"><li> The presentation is organized in a logical manner (15 marks)</li></label>
                   <input type="text" 
                   className="form-control" 
                   name="organization" 
                   value={this.state.organization} 
                   placeholder="0" 
                   onChange={this.handleChange} />
                    
               
               </div>
              

                
               <div className="form-group">
                 <h2>Voice : (20 marks)</h2>
                   <label  className="form-label"><li> Volume and inflection was effective (10 marks)</li> </label>
                   <input type="text" 
                   className="form-control" 
                   name="voiceInflection" 
                   value={this.state.voiceInflection} 
                   placeholder="0" 
                   onChange={this.handleChange} />
               </div>
               
                
               <div className="form-group">
                   <label className="form-label"><li>Rate of speech was appropriate (10 marks)</li> </label>
                   <input type="text" 
                   className="form-control" 
                   name="voiceRate" 
                   value={this.state.voiceRate} 
                   placeholder="0" 
                   onChange={this.handleChange} />
               </div>
               


               <div className="form-group">
               <h2>Tools : (20 marks)</h2>
                   <label className="form-label"><li> Audiovisual resources, visual aids, and / or handoutd were used appropriatly
                    (not relied upon)</li></label>
                   <input type="text" 
                   className="form-control" 
                   name="tools" 
                   value={this.state.tools} 
                   placeholder="0" 
                   onChange={this.handleChange} />
                   
               </div>

               <div className="form-group">
                 <h2>Audience Contact / Involvement : (30 marks) </h2>
                   <label  className="form-label"><li> Eye Contact (15 marks)</li></label>
                   <input type="text" 
                   className="form-control" 
                   name="eyeContact" 
                   value={this.state.eyeContact} 
                   placeholder="0" 
                   onChange={this.handleChange} />
                   
               </div>

               <div className="form-group">
                   <label  className="form-label"><li>Arrange inside the group (15 marks)</li></label>
                   <input type="text" 
                   className="form-control" 
                   name="groupArrange" 
                   value={this.state.groupArrange} 
                   placeholder="0" 
                   onChange={this.handleChange} />
                   
               </div>

              
               <div className="form-group">
                 
                   <label  className="form-label">Total Mark : (100 marks)</label>
                   <input type="text" 
                   className="form-control" 
                   name="Total" 
                   value={this.state.Total} 
                   placeholder="0" 
                   onChange={this.handleChange} />
                   
               </div>
               
           </form>
               <div>
                   <hr/>
                   <center>
                   
                          <button className="btn btn btn-dark btn-lg" style={{backgroundColor:"#0147ab"}} onClick={this.onSubmit} href="/"> Submit the Result</button>&nbsp;
                       
                        <button className="btn btn-success" 
                        style={{marginLeft:'890px',padding:'8px 8px',backgroundColor:'#3895d3', marginBottom:"10px"}}>
                        <a href="/panelEveHome" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'16px'}}> 
                        <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
                        </button>
                        
              </center>
               </div>


               </div>
               
       </div>
       </div>





    )
  }
}
