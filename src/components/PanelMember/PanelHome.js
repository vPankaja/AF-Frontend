import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./panel.css";

export default function SupHome() {


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
      <div className="bg-image"></div>
     
    </div>
  )
}