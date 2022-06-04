import React  from 'react';
import {useState ,useEffect } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import axios from 'axios';
import { useParams } from "react-router-dom";



export default function PanelEveOne()  {

    const[Groupname, setGroupname] = useState("");
    const[introduction , setintroduction] = useState("");
    const[organization, setorganization] = useState("");
    const[voiceInflection, setvoiceInflection] = useState("");
    const[voiceRate, setvoiceRate] = useState("");
    const[tools, settools] = useState("");
    const[eyeContact, seteyeContact] = useState("");
    const[groupArrange, setgroupArrange] = useState("");
    const[Total, setTotal] = useState("");
    
    
    const id = useParams();
    

  

    const [paneleve] = useState({
      Groupname:"",
      introduction:"",
      organization:"",
      voiceInflection:"",
      voiceRate:"",
      tools:"",
      eyeContact:"",
      groupArrange:"",
      Total:""
      })

     
        

         useEffect(function effectFunction() {
             console.log("get ID",id);
            axios.get(`http://localhost:6500/PanelEve/getOneDetail/${id?.id}`)
            .then(res=>{
                console.log("data",res);
                setGroupname(res.data.getOneDetail.Groupname);
                setintroduction(res.data.getOneDetail.introduction);
                setorganization(res.data.getOneDetail.organization);
                setvoiceInflection(res.data.getOneDetail.voiceInflection);
                setvoiceRate(res.data.getOneDetail.voiceRate);
                settools(res.data.getOneDetail.tools);
                seteyeContact(res.data.getOneDetail.eyeContact);
                setgroupArrange(res.data.getOneDetail.groupArrange);
                setTotal(res.data.getOneDetail.Total);
                
                
               
                
            
         })
            .catch(err => console.log(err));

           


          
          // eslint-disable-next-line react-hooks/exhaustive-deps
          },[]);

    return (
        <div >
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Panel Member Home</Navbar.Brand>&nbsp;&nbsp;&nbsp;
          <Nav className="me-auto">
            
            <Nav.Link href="/panelEveHome">Presentation Evaluation</Nav.Link>&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/panelEveHome">Topic Evaluation</Nav.Link>&nbsp;&nbsp;&nbsp;
          </Nav>
        </Container>
      </Navbar>

        <div >
       <div style={{height:'80px', width:'100%',  marginTop:'-20px',}}>
               <br/>
               <h2 style={{ textAlign:'center',}}>Panel Presentation Evaluation Sheet</h2>
              <br/>
     </div>
           <br/>
           <h1 style={{marginLeft:'400px'}}>{Groupname}</h1>
           <table className='table' style={{border:'1px solid black', width:'50%', marginLeft:'400px'}}>
           
             <tr>
                <th scope='col'><h4>EVALUATION FACTORS</h4></th>
                <th scope='col'><h4>MARKS</h4></th>
             </tr>
             <tr>
               <td style={{fontSize:'20px'}}> <b> Introduction  </b></td>
             </tr>
             <tr>
               <td><li>Aprropriately introduced himself/ herself, the topic to be presented, and clearly 
                   explained objectives of the presentation (15 marks)</li></td>
               <td><t></t><t></t>{introduction}</td>
             </tr>
             
             <tr>
             <td style={{fontSize:'20px'}}> <b> Organization  </b></td>
             </tr>
             <tr>
               <td><li> The presentation is organized in a logical manner (15 marks)</li></td>
               <td><t></t><t></t>{organization}</td>
             </tr>
             <tr>
             <td style={{fontSize:'20px'}}> <b> Voice </b></td>
             </tr>
             <tr>
               <td><li> Volume and inflection was effective (10 marks)</li></td>
               <td><t></t><t></t>{voiceInflection}</td>
             </tr>
             <tr>
               <td><li> Rate of speech was appropriate (10 marks)</li></td>
               <td><t></t><t></t>{voiceRate}</td>
             </tr>
             
             <tr>
             <td style={{fontSize:'20px'}}> <b> Tools  </b></td>
             </tr>
             <tr>
               <td><li> Audiovisual resources, visual aids, and / or handoutd were used appropriatly
                    (not relied upon) (20 marks)</li></td>
               <td><t></t><t></t>{tools}</td>
             </tr>
             <tr>
             <td style={{fontSize:'20px'}}> <b> Audience Contact / Involvement </b></td>
             </tr>
             <tr>
               <td><li> Eye Contact (15 marks)</li></td>
               <td><t></t><t></t>{eyeContact}</td>
             </tr>
             <tr>
               <td><li>Arrange inside the group (15 marks)</li></td>
               <td><t></t><t></t>{groupArrange}</td>
             </tr>
             <tr>
               <td style={{fontSize:'20px'}}>Total Mark (out of 100)</td>
               <td><t></t><t></t>{Total}</td>
             </tr>
           </table>

           <button className="btn btn-success" style={{marginLeft:'700px',padding:'10px 10px',backgroundColor:'#3895d3'}}><a href="/panelEveHome"
                style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'20px'}}> 
                <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a></button>

        </div>
        </div>

    );
  }

